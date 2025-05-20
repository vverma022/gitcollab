import useProject from '@/hooks/use-projects'
import { api } from '@/trpc/react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const TeamMembers = () => {
    const {projects} = useProject()
    const {data: teamMembers} = api.project.getTeamMembers.useQuery({projectId: projects?.id})
  return (
    <div className='flex flex-col gap-2'>
        {teamMembers?.map((member) => (
           <div key={member.id} className="relative group">
            <Avatar className='w-6 h-6'>
                <AvatarImage src={member.user.imageUrl ?? ''} />
                <AvatarFallback>
                    {member.user.firstName?.charAt(0) ?? ''} {member.user.lastName?.charAt(0) ?? ''}
                </AvatarFallback>
            </Avatar>
            <div className="absolute left-0 top-8 hidden group-hover:block bg-popover text-popover-foreground px-2 py-1 rounded text-sm whitespace-nowrap">
                {member.user.firstName} {member.user.lastName}
            </div>
           </div>
        ))}
    </div>
  ) 
}

export default TeamMembers