import { pollCommits } from "@/lib/github";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from 'zod';
import { IndexGitHubRepo, LoadGitHubRepo } from "@/lib/github-loader";

// Cache time constants
const CACHE_TIME = 1000 * 60 * 5; // 5 minutes
const STALE_TIME = 1000 * 60; // 1 minute

export const projectRouter = createTRPCRouter({
    createProject: protectedProcedure.input(
        z.object({
           name: z.string(),
           githubUrl: z.string(),
           githubToken: z.string().optional(),
        })
    ).mutation(async ({ ctx , input }) => {
        try {
            // First try to load the repo to validate access
            const docs = await LoadGitHubRepo(input.githubUrl, input.githubToken)
            if (!docs || docs.length === 0) {
                throw new Error("No files found in repository or unable to access repository")
            }

            // If we can access the repo, create the project and index it
            const project = await ctx.db.$transaction(async (tx) => {
                const newProject = await tx.project.create({
                    data: {
                        githubUrl: input.githubUrl,
                        name: input.name,
                        usertoproject: {
                            create: {
                                userId: ctx.user.userId!,
                            }
                        }
                    }
                })

                // Index the repository
                await IndexGitHubRepo(newProject.id, input.githubUrl, input.githubToken)
                await pollCommits(newProject.id)

                return newProject
            })

            return project
        } catch (error) {
            console.error("Failed to create project:", error)
            throw new Error(error instanceof Error ? error.message : "Failed to create project")
        }
    }),
    getProjects: protectedProcedure.query(async ({ctx}) => {
        return await ctx.db.project.findMany({
            where: {
             usertoproject: {
                some: {
                    userId: ctx.user.userId!
                }
              },
              deletedAt: null    
            }
        })
    }),
    getCommits: protectedProcedure.input(z.object({
        projectId: z.string()
    })).query(async ({ctx, input}) => {
        pollCommits(input.projectId).then().catch(console.error)
        return await ctx.db.commit.findMany({where: {projectId: input.projectId }})
    }),
    saveAnswer: protectedProcedure.input(z.object({
        projectId: z.string(),
        question: z.string(),
        answer: z.string(),
        filesReferences: z.any()
    })).mutation(async ({ctx, input}) => {
        return await ctx.db.question.create({
            data: {
                answer: input.answer,
                filesReferences: input.filesReferences,
                projectId: input.projectId,
                question: input.question,
                userId: ctx.user.userId!
            }
        })
    }), 
    getQuestions: protectedProcedure.input(z.object({projectId: z.string()})).mutation(async ({ctx, input}) => {
        return await ctx.db.question.findMany({
            where: {
                projectId: input.projectId
            },
            include: {
                user: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
    }),
    archiveProject: protectedProcedure.input(z.object({
        projectId: z.string()
    })).mutation(async ({ctx, input}) => {
        return await ctx.db.project.update({
            where: {id: input.projectId},
            data: {deletedAt: new Date()}
        })
    }),
    getTeamMembers: protectedProcedure.input(z.object({
        projectId: z.string()
    })).query(async ({ctx, input}) => {
        return await ctx.db.usertoProject.findMany({
            where: {
                projectId: input.projectId
            },
            include: {
                user: true
            }
        })
    })
})