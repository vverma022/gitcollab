"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/trpc/react";
import { useForm  } from "react-hook-form";
import { toast } from "sonner";
import useFetch from "@/hooks/use-fetch";
import Image from "next/image";
import React from "react";



type FormInput = {
    repourl: string;
    projectname: string;
    githubtoken?: string;
}

const CreatePage = () => {
    const {register, handleSubmit, reset } = useForm<FormInput>();
    const createProject = api.project.createProject.useMutation();
    const refetch = useFetch();

    const onSubmit = (data: FormInput) => {
        createProject.mutate(
          {
            githubUrl: data.repourl,
            name: data.projectname,
            githubToken: data.githubtoken || "", 
          },
          {
            onSuccess: () => {
              toast.success("Project created and indexed successfully!");
              refetch();
              reset();
            },
            onError: (error) => {
              console.error("Mutation Error:", error);
              if (error.message.includes("Bad credentials")) {
                toast.error("Invalid GitHub token. Please check your token and try again.");
              } else if (error.message.includes("No files found")) {
                toast.error("No files found in repository. Please check the repository URL.");
              } else {
                toast.error(error.message || "Failed to create project. Please try again.");
              }
            },
          }
        );
    };

    return (
        <div className="flex items-center gap-12 h-full justify-center">
            <Image
                src="/bla.png"
                alt="poster"
                width={300}
                height={300}
                style={{
                    objectFit: 'contain',
                }}
                className="rounded-xl"
            />
            <div>
                <div>
                    <h1 className="font-semibold text-2xl">Connect Your Repository</h1>
                    <p className="text-sm text-muted-foreground">Connect your projects with GitCollab by entering the details below</p>
                    <div>
                        <div className="h-4"></div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Input
                                    {...register("projectname", { required: true })}
                                    placeholder="Project Name"
                                    type="text"
                                    required
                                />
                                <div className="h-2"></div>
                                <Input
                                    {...register("repourl", { required: true })}
                                    placeholder="GitHub Repository URL"
                                    type="url"
                                    required
                                />
                                <div className="h-2"></div>
                                <Input
                                    {...register("githubtoken", { required: false })}
                                    placeholder="GitHub Token (Required for private repositories)"
                                />
                                <div className="h-4"></div>
                                <Button 
                                    type="submit" 
                                    disabled={createProject.isPending}
                                >
                                    {createProject.isPending ? "Creating Project..." : "Create Project"}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePage;