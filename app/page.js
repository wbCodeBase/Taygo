"use client"

import { Header } from "@/components/home/header"
import { HeroSection } from "@/components/home/heroSection"
import { AnimatedShowcase } from "@/components/home/animated-showcase"
import { CtaSection } from "@/components/home/cta-section"
import { TabbedShowcase } from "@/components/home/tabbed-showcase"
import Stats3D from "@/components/home/StatsBarSection"
import IntegrationsSection from "@/components/home/IntegrationsSection"
import VideoHeroSection from "@/components/videoHero"
import IntegrationOrbit from "@/components/home/IntegrationOrbit"
// import { TrustedBrands } from "@/components/home/trusted-brands"

export default function Home() {

  return (
    <>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <AnimatedShowcase />
        <Stats3D />

        <VideoHeroSection />

        <TabbedShowcase />

        <IntegrationsSection />

        {/* <TrustedBrands /> */}

        {/* <LisaCta /> */}
        <CtaSection />
      </main>


    </>
  );
}
