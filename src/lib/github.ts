import { Octokit } from 'octokit'
import { db } from '@/server/db'
import { AIsummariseCommit } from './gemini'
import axios from 'axios'

export const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
})


type Response = {
    commitHash: string, 
    commitMessage: string,
    commitAuthorName: string,
    commitAuthorAvatar: string,
    commitDate: string;
}

export const getCommitHashes = async (githuburl: string): Promise<Response[]> => {
    const [owner, repo] = githuburl.split('/').slice(-2)

    if(!owner || !repo){
        throw new Error("Invalid Github Url")
    }

    const { data } = await octokit.rest.repos.listCommits({
        owner,
        repo
    })

    const sortedCommits = data.sort((a: any, b: any) => new Date(b.commit.author.date).getTime() - new Date(a.commit.author.date).getTime()) as any[]

    return sortedCommits.slice(0, 10).map((commit: any) => ({
        commitHash: commit.sha as string,
        commitMessage: commit.commit.message ?? "",
        commitAuthorName: commit.commit?.author?.name ?? "",
        commitAuthorAvatar: commit?.author?.avatar_url ?? "",
        commitDate: commit.commit?.author?.date ?? " "
    }))
}

export const pollCommits = async (projectId: string) => {
    const {project , githuburl } = await fetchProjectGithubUrl(projectId)
    const commitHashes = await getCommitHashes(githuburl)
    const unprocessedCommits = await filterUnprocessedCommits(projectId, commitHashes)
    const summariesResponse = await Promise.allSettled(unprocessedCommits.map(commit => {
        return summariseCommit(githuburl, commit.commitHash)
    }))
    const summaries = summariesResponse.map((response) => {
        if(response.status === 'fulfilled'){
            return response.value as string
        }
        return ""
    })

    const commit = await db.commit.createMany({
        data: summaries.map((summaries,index) => {
            return {
                projectId: projectId,
                commitHash: unprocessedCommits[index]!.commitHash,
                commitMessage: unprocessedCommits[index]!.commitMessage,
                commitAuthorName: unprocessedCommits[index]!.commitAuthorName,
                commitAuthorAvatar: unprocessedCommits[index]!.commitAuthorAvatar,
                commitDate: unprocessedCommits[index]!.commitDate,
                summary: summaries

            }
        })
    })
    return commit
}

async function summariseCommit(githubUrl: string, commitHash: string){
    const {data} = await axios.get(`${githubUrl}/commit/${commitHash}.diff`,{
        headers: {
            Accept: 'application/vnd.github.v3.diff'
        }
    })

    return await AIsummariseCommit(data) || ""
    
}

async function fetchProjectGithubUrl(projectId: string) {
    const project = await  db.project.findUnique({
        where: {id: projectId},
        select: {
            githubUrl: true
        }
    })

    if(!project?.githubUrl){
        throw new Error("Project has no GitHub Url")
    }

    return { project, githuburl: project.githubUrl}   
}

async function filterUnprocessedCommits(projectId: string, commitHashes: Response[]) {
    const processedCommits = await db.commit.findMany({
        where: {projectId}
    })
    const unprocessedCommits = commitHashes.filter((commit) => !processedCommits.some((processedCommits) => processedCommits.commitHash === commit.commitHash))
    return unprocessedCommits
}


