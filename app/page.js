"use client"

import { Header } from "@/components/home/header"
import { HeroSection } from "@/components/home/heroSection"
import { AnimatedShowcase } from "@/components/home/animated-showcase"
// import { TrustedBrands } from "@/components/home/trusted-brands"
import { CtaSection } from "@/components/home/cta-section"
import { TabbedShowcase } from "@/components/home/tabbed-showcase"
// import StatsSection from "@/components/home/stats-section"
import LisaCta from "@/components/home/lisaCta"
import Stats3D from "@/components/home/StatsBarSection"
import TechStackExpertise from "@/components/home/TechStackExpertise"
import { IntegrationsSection } from "@/components/home/IntegrationsSection"
import VideoHeroSection from "@/components/videoHero"
// import IntegrationsSection from "@/components/home/IntegrationsSection"

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

        {/* <TechStackExpertise /> */}

        <IntegrationsSection />

        {/* <TrustedBrands /> */}

        {/* <LisaCta /> */}
        <CtaSection />
      </main>


    </>
  );
}
