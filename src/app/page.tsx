import { HeroLanding } from "./_components/landing/hero-landing";
import { FeaturesSection } from "./_components/landing/features";
import Powered from "./_components/landing/powered";
import { NavBar } from "./_components/navbar";
import { SiteFooter } from "./_components/site-footer";
import { NavMobile } from "./_components/mobile-nav";
import MaxWidthWrapper from "./_components/maxwidth";
import BentoGrid from "./_components/landing/bentogrid";

export default async function Home() {
  // void api.post.getLatest.prefetch();
  return (
    <div className="flex min-h-screen flex-col">
     <NavMobile />
     <NavBar scroll={true} />
     <main className="flex-1">
     <HeroLanding />
     <FeaturesSection />
    <Powered />
    <BentoGrid />
    </main>
    <SiteFooter />
    </div>
  );
}
