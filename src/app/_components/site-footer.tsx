import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GitGraph, Github, Twitter } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-change";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <img 
              src="/la.png" 
              alt="GitCollab Logo" 
              className="h-8 w-10 object-contain pb-1" 
            />
            <span className="font-urban text-xl font-bold">GitCollab</span>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6 md:justify-end">
            <Link 
              href="https://github.com/vverma022/gitcollab" 
              target="_blank"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </Link>
            <ModeToggle />
            <Link 
              href="/legal/about" 
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              About Us
            </Link>
            <Link 
              href="/legal/terms" 
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <Link 
              href="/legal/privacy" 
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </div>

      <div className="border-t py-4">
        <div className="flex items-center justify-center">
          <span className="text-sm text-muted-foreground">
            © 2024 GitCollab. Built by vverma022
          </span>
        </div>
      </div>
    </footer>
  );
}
