import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import Link from "next/link"

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container mx-auto">
        <div className="flex max-w-[58rem] flex-col items-center space-y-4 text-center mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Free for Now</h2>
          <p className="max-w-[85%] text-base text-muted-foreground sm:text-lg">
            We're currently offering all features for free while we're in beta
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {[
            {
              name: "Starter",
              price: "Free",
              description: "Perfect for individual developers",
              features: [
                "Up to 3 repositories",
                "Basic AI insights",
                "Commit summaries",
                "Community support"
              ]
            },
            {
              name: "Pro",
              price: "Free",
              description: "Ideal for growing teams",
              features: [
                "Unlimited repositories",
                "Advanced AI insights",
                "Team collaboration",
                "Priority support",
                "Custom integrations"
              ],
              popular: true
            },
            {
              name: "Enterprise",
              price: "Free",
              description: "For large organizations",
              features: [
                "Everything in Pro",
                "Custom AI models",
                "Dedicated support",
                "SLA guarantee",
                "Advanced security",
                "Custom deployment"
              ]
            }
          ].map((plan, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border border-border/50 bg-background/100 p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-xl ${
                plan.popular ? "md:scale-105" : ""
              }`}
            >
              <div className="flex flex-col space-y-6">
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/get-started" className="mt-4">
                  <RainbowButton className="w-full" disabled>
                    Coming Soon
                  </RainbowButton>
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8 text-muted-foreground">
          <p>All plans are currently free while we're in beta. Pricing will be announced soon.</p>
        </div>
      </div>
    </section>
  )
}