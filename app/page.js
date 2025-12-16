
import HeroSection from "@/components/home/heroSection"
import { AnimatedShowcase } from "@/components/home/animated-showcase"
import { CtaSection } from "@/components/home/cta-section"
import { TabbedShowcase } from "@/components/home/tabbed-showcase"
import Stats3D from "@/components/home/StatsBarSection"
import IntegrationsSection from "@/components/home/IntegrationsSection"
import VideoHeroSection from "@/components/videoHero"
import MortgageProducts from "@/components/home/MortgageProducts"
import Versus from "@/components/home/Versus"
import LisaCta from "@/components/home/lisaCta"
// import { TrustedBrands } from "@/components/home/trusted-brands"

export default function Home() {

  return (
    <>
      <main className="min-h-screen">

        <HeroSection />

        <AnimatedShowcase />

        <MortgageProducts />

        <LisaCta />

        <Stats3D />

        <VideoHeroSection />

        <TabbedShowcase />

        <IntegrationsSection />

        {/* <TrustedBrands /> */}


        <CtaSection />

        <Versus />

      </main>


    </>
  );
}
