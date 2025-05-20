"use client"
import { Button } from '@/components/ui/button'
import useProject from '@/hooks/use-projects'
import { api } from '@/trpc/react'
import { toast } from 'sonner'
import useFetch from '@/hooks/use-fetch'

const ArchiveButton = () => {
    const archiveProject = api.project.archiveProject.useMutation();
    const { projects } = useProject();
    const refetch = useFetch();

    return (
        <Button 
            variant={'destructive'}
            disabled={archiveProject.isPending} 
            onClick={() => {
                const confirm = window.confirm("Are You Sure You Want To Archive This Project?")
                if (confirm && projects?.id) {
                    archiveProject.mutate(
                        { projectId: projects.id },
                        {
                            onSuccess: () => {
                                toast.success("Project Archived Successfully")
                                refetch();
                            },
                            onError: () => {
                                toast.error("Failed To Archive Project")
                            }
                        }
                    )
                }
            }}
        >
            {archiveProject.isPending ? "Archiving..." : "Archive"}
        </Button>
    )
}

export default ArchiveButton