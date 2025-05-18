"use client"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import Link from "next/link"
import { useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { TypingAnimation } from "@/components/magicui/typing-animation";


export function HeroLanding() {
  const { isSignedIn } = useUser();
 return (
    <div className="relative flex min-h-[85vh] w-full items-center justify-center">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="relative z-10 flex flex-col items-center gap-y-8 px-4 text-center">
        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl">
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            GitCollab
          </span>
        </h1>
        <TypingAnimation className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Effortless Git collaboration: Summarize commits, decode code, and streamline teamwork with AI-powered insights.
        </TypingAnimation>
        <div className="flex gap-4">
          <Link href={isSignedIn ? "/dashboard" : "/get-started"}>
            <RainbowButton>
              {isSignedIn ? "Go to Dashboard" : "Get Started"}
            </RainbowButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

