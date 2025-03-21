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

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-transparent") : "border-b"
      }`}
    >
      <MaxWidthWrapper
        className="flex h-14 items-center justify-center border-b py-4"
        large={documentation}
      >
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-1.5">
          <GitGraph className="h-10 w-6" />
            <span className="font-urban text-xl font-bold">
              GitCollab
            </span>
          </Link>
            <nav className="hidden gap-6 md:flex">
               <Link
                  href="/"
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    )}
                >
                Features
                </Link>
            </nav>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
