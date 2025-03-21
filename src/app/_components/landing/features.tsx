import SpotlightCard from "@/components/SpotlightCard/SpotlightCard"
import { Card } from "@/components/ui/card"
import { GitBranch , MessageCircle , Mic, Users , Bookmark } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto py-12 md:py-24">
    <div className="flex max-w-[58rem] flex-col items-center space-y-4 text-center mx-auto">
      <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Features</h2>
      <p className="max-w-[85%] text-sm text-muted-foreground sm:text-base pb-6">
        Essential tools designed to boost your productivity
      </p>
    </div>
    <div className="mx-auto grid gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 justify-items-center">
      {[
        {
          icon: GitBranch, 
          title: "Add Git Repositories",
          description: "Effortlessly add repositories and automatically fetch and summarize commit histories.",
        },
        {
          icon: MessageCircle, 
          title: "AI-Driven Q&A",
          description: "Ask questions like 'Where is the navbar?' and get precise answers with code snippets and explanations.",
        },
        {
          icon: Users, 
          title: "Collaborate Seamlessly",
          description: "Invite team members to share insights, ask questions, and work together efficiently.",
        },
      ].map((feature, index) => (
        <SpotlightCard 
          key={index}
          className="group relative overflow-hidden border border-border/50 bg-background p-6 transition-all hover:border-foreground/20"
          spotlightColor="rgba(0, 102, 255, 0.2)"
        >
          <div className="flex flex-col  items-center space-y-4">
            <feature.icon className="h-12 w-12" />
            <div className="space-y-2 text-center">
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
          </SpotlightCard>
      ))}
    </div>
  </section>
  )
}

