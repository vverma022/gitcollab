import useProject from '@/hooks/use-projects'
import React from 'react'
import { api } from '@/trpc/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const CommitLog = () => {
    const { selectedprojectId, projects } = useProject();
    const projectId = selectedprojectId
    const {data: commits} = api.project.getCommits.useQuery({projectId})
  return (
    <>
    <ul className='space-y-6'>
        {commits?.map((commit, commitIdx) => {
            return <li key={commit.id} className='realtive flex gap-x-4'>
                <div className={cn(
                    commitIdx === commits.length - 1 ? 'h6' : '-bottom-6',
                    'absolute left-0 top-0 flex w-6 justify-center'
                )}>
                    <div className='w-px translate-x-1'></div>
                </div>
                <>
                <img src={commit.commitAuthorAvatar} alt="commit avatar" className='relative mt-4 size-8 flex-none rounded-full' />
                <div className='flex-auto rounded-xl p-3 ring-1 ring-inset'>
                    <div className='flex justify-between gap-x-4'>
                        <Link target='_blank' href={`${projects?.githubUrl}/commits/${commit.commitHash}`} className="py-0.5 text-xs leading-5 text-gray-500" >
                        <span className='font-semibold text-primary'>
                        {commit.commitAuthorName}
                        </span>{" "}
                        <span className='inline-flex items-center text-secondary-foreground'>
                            commited 
                            <ExternalLink className='ml-1 size-4'/>
                        </span>
                        </Link>
                    </div>
                    <span className='font-semibold text-secondary-foreground'>
                        {commit.commitMessage}
                    </span>
                    <pre className='mt-2 whitespace-pre-wrap text-sm leading-0 text-secondary-foreground'>
                        {commit.summary}
                    </pre>
                </div>
                </>
                </li>
        })}

    </ul>
    </>
  )
}

export default CommitLog