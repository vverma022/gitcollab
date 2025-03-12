"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/trpc/react";
import { useForm  } from "react-hook-form";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import useFetch from "@/hooks/use-fetch";
import Image from "next/image";



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
            githubToken: data.githubtoken || "", // Provide a default empty string if undefined
          },
          {
            onSuccess: () => {
              toast.success("Project created successfully");
              refetch()
              reset(); // Clear form after success
            },
            onError: () => {
              console.error("Mutation Error");
              toast.error("Failed to create project");
            },
          }
        );
      };

  return (
    <div className="flex items-center gap-12 h-full justify-center">
    <Image
        src="/idea-launch.svg"
        alt="poster"
        width={300} // Set a max width
        height={300} // Set a max height
        style={{
          objectFit: 'contain', // Ensures the image scales proportionally
        }}
      />
    <div>
        <div>
            <h1 className="font-semibold text-2xl">Link your repository</h1>
            <p className="text-sm text-muted-foreground">Connect your repo URL</p>
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
                            placeholder="GitHub Token (Optional)"
                        />
                        <div className="h-4"></div>
                        <Button type="submit" disabled={createProject.isPending} >Create Project</Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CreatePage;