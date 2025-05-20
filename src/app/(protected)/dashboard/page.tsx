"use client"

import useProject from "@/hooks/use-projects"
import { ExternalLink, Github } from "lucide-react";
import CommitLog from "./commit-log";
import Link from "next/link";
import AskQuestionsCard from "./ask-questons";
import Meetingcard from "./meetingcard";
import ArchiveButton from "./archive-button";
import InviteButton from "./invite-button";
import TeamMembers from "./team-members";

export default function Dashboard() {
  const { projects } = useProject();
  
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-y-4">
        <div className="w-fit rounded-md bg-primary px-4 py-3">
          <div className="flex items-center">
            <Github className="size-5 text-white dark:text-black" />
            <div className="ml-2">
              <p className="text-sm font-light text-primary-foreground">
                <span className="font-semibold">
                  This Project is Linked to {' '}
                </span>
                <Link href={projects?.githubUrl ?? " "} className="inline-flex items-center text-secondary hover:underline" >
                  {projects?.githubUrl}
                  <ExternalLink className="ml-1 size-4" />
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="h-4"></div>

        <div className="flex items-center gap-4">
          <TeamMembers />
          <InviteButton />
          <ArchiveButton />
        </div>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
          <AskQuestionsCard />
          <Meetingcard />
        </div>
      </div>

      <div className="mt-8"></div>
      <CommitLog />
    </div>
  )
}