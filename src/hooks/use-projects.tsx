import { api } from '@/trpc/react'
import {useLocalStorage} from 'usehooks-ts'

const useProject = () => {
    const {data: project } = api.project.getProjects.useQuery();
    const [selectedprojectId, setProjectId] = useLocalStorage('gitcollab-projectId', '')
    const projects = project?.find(project => project.id === selectedprojectId)
    return {
        project,
        projects,
        selectedprojectId,
        setProjectId
    }
   
}

export default useProject