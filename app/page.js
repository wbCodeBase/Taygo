import { Header } from "@/components/home/header"
import { HeroSection } from "@/components/home/hero-section"
import { AnimatedShowcase } from "@/components/home/animated-showcase"
import { TrustedBrands } from "@/components/home/trusted-brands"
import { CtaSection } from "@/components/home/cta-section"
import { TabbedShowcase } from "@/components/home/tabbed-showcase"
import StatsSection from "@/components/home/stats-section"
import LisaCta from "@/components/home/lisaCta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AnimatedShowcase />
      <StatsSection />
      <TabbedShowcase />
      <LisaCta />
      <TrustedBrands />
      <CtaSection />
    </main>
  )
}
