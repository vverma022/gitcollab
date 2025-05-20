import { Card } from "@/components/ui/card"
import { GitBranch, MessageCircle, Users } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto py-24 md:py-32">
      <div className="flex max-w-[58rem] flex-col items-center space-y-4 text-center mx-auto">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Features</h2>
        <p className="max-w-[85%] text-base text-muted-foreground sm:text-lg">
          Essential tools designed to boost your productivity
        </p>
      </div>
      <div className="mx-auto grid gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 justify-items-center mt-16">
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
          <Card
            key={index}
            className="group relative overflow-hidden border border-border/50  p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-3 text-center">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
