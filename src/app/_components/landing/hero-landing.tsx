"use client"
import LetterGlitch from "@/components/LetterGlitch/LetterGlitch"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"
import Link from "next/link"
import { useUser } from "@clerk/nextjs";


export function HeroLanding() {
  const { isSignedIn } = useUser();

  return (
    <section className="relative flex flex-col items-center justify-center text-center border-b border-border/50">
      <div className="absolute z-10 flex flex-col gap-y-10">
        <h1 className="text-4xl font-bold text-white">GitCollab</h1>
        <Link href={isSignedIn ? "/dashboard" : "/get-started"}>
          <InteractiveHoverButton >
            {isSignedIn ? "Go to Dashboard" : "Get Started"}
          </InteractiveHoverButton>
        </Link>
      </div>
      <LetterGlitch
        glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
    </section>
  );
}

