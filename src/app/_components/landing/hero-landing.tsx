"use client"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import Link from "next/link"
import { useUser } from "@clerk/nextjs"
import { TypingAnimation } from "@/components/magicui/typing-animation"
import { ArrowRight, GitBranch, MessageCircle, Users } from "lucide-react"

export function HeroLanding() {
  const { isSignedIn } = useUser();
  return (
    <div className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      <div className="absolute inset-0 from-background/0 via-background to-background" />
      <div className="relative z-10 flex flex-col items-center gap-y-12 px-4 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              GitCollab
            </span>
          </h1>
          <TypingAnimation className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Effortless Git collaboration: Summarize commits, decode code, and streamline teamwork with AI-powered insights.
          </TypingAnimation>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href={isSignedIn ? "/dashboard" : "/get-started"}>
            <RainbowButton>
              {isSignedIn ? "Go to Dashboard" : "Get Started for Free"}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </RainbowButton>
          </Link>
        </div>
      </div>
    </div>
  )
}

