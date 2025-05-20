import { RainbowButton } from "@/components/magicui/rainbow-button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Ready to Transform Your Git Workflow?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join small teams and individuals who are already using GitCollab to streamline their development process and enhance team collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started">
              <RainbowButton className="px-4 py-4">
                Get Started for Free
              </RainbowButton>
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Free for the time being.
          </p>
        </div>
      </div>
    </section>
  )
} 