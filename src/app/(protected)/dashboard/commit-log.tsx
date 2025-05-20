import useProject from '@/hooks/use-projects'
import React from 'react'
import { api } from '@/trpc/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ExternalLink, GitCommit } from 'lucide-react';
import MDEditor from '@uiw/react-md-editor';

const CommitLog = () => {
    const { selectedprojectId, projects } = useProject();
    const projectId = selectedprojectId
    const {data: commits} = api.project.getCommits.useQuery({projectId})
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <ul className='space-y-8 relative'>
        {commits?.map((commit, commitIdx) => {
            return <li key={commit.id} className='relative flex gap-x-6 group'>
                <div className={cn(
                    commitIdx === commits.length - 1 ? 'h-6' : 'h-full',
                    'absolute left-0 top-0 flex w-6 justify-center'
                )}>
                    
                </div>
                <div className="relative flex items-start">
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center">
                    
                  </div>
                  <img 
                    src={commit.commitAuthorAvatar} 
                    alt="commit avatar" 
                    className='relative mt-4 size-10 flex-none rounded-full ring-2 ring-background shadow-sm hover:ring-primary transition-all duration-200' 
                  />
                </div>
                <div className='flex-auto rounded-xl p-4 ring-1 ring-border bg-card shadow-sm hover:shadow-md transition-all duration-200'>
                    <div className='flex justify-between items-center gap-x-4'>
                        <Link 
                          target='_blank' 
                          href={`${projects?.githubUrl}/commits/${commit.commitHash}`} 
                          className="group/link py-0.5 text-xs leading-5 text-muted-foreground hover:text-primary transition-colors duration-200" 
                        >
                          <span className='font-semibold text-primary'>
                            {commit.commitAuthorName}
                          </span>{" "}
                          <span className='inline-flex items-center text-muted-foreground'>
                            committed 
                            <ExternalLink className='ml-1 size-3 group-hover/link:translate-x-0.5 transition-transform duration-200'/>
                          </span>
                        </Link>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <GitCommit className="size-3 mr-1.5" />
                          {commit.commitHash.slice(0, 7)}
                        </div>
                    </div>
                    <h3 className='mt-2.5 font-semibold text-foreground text-sm'>
                        {commit.commitMessage}
                    </h3>
                    <div className='mt-3 prose prose-sm dark:prose-invert max-w-none'>
                        <MDEditor.Markdown 
                            source={commit.summary} 
                            className="!bg-transparent !text-muted-foreground"
                        />
                    </div>
                </div>
            </li>
        })}
      </ul>
    </div>
  )
}

export default CommitLog