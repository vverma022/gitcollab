"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scrool";
import MaxWidthWrapper from "./maxwidth";
import { GitGraph } from "lucide-react";

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
}

export function NavBar({ scroll = false }: NavBarProps) {
  const scrolled = useScroll(50);
  const selectedLayout = useSelectedLayoutSegment();
  const documentation = selectedLayout === "docs";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
      }`}
    >
      <MaxWidthWrapper
        className="flex h-14 items-center justify-center py-4"
        large={documentation}
      >
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-2 transition-colors hover:opacity-90">
            <img 
              src="/la.png" 
              alt="GitCollab Logo" 
              className="h-8 w-10 object-contain pb-1" 
            />
            <span className="font-urban text-xl font-bold tracking-tight">
              GitCollab
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <button
              onClick={() => scrollToSection("features")}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
              )}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("what-is")}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
              )}
            >
              What is GitCollab
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
              )}
            >
              Pricing
            </button>
          </nav>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
