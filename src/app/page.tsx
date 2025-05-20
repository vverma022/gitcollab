import { HeroLanding } from "./_components/landing/hero-landing";
import { FeaturesSection } from "./_components/landing/features";
import Powered from "./_components/landing/powered";
import { NavBar } from "./_components/navbar";
import { SiteFooter } from "./_components/site-footer";
import { NavMobile } from "./_components/mobile-nav";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/server";
import BentoGrid from "./_components/landing/bentogrid";
import { TestimonialsSection } from "./_components/landing/testimonials";
import { PricingSection } from "./_components/landing/pricing";
import { CTASection } from "./_components/landing/cta";

export default async function Home() {
  api.project.getProjects.prefetch();
  return (
    <>
    <div className={cn(
      "[background-size:20px_20px]",
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
    )}>
     <NavMobile />
     <NavBar scroll={true} />
     <main className="flex-1">
     <HeroLanding />
     <FeaturesSection />
     <BentoGrid />
     <PricingSection />
     <CTASection />
     <Powered />
    </main>
    </div>
    <SiteFooter />
    </>
  );
}
