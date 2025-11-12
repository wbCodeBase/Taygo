import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AnimatedShowcase } from "@/components/animated-showcase"
import { TrustedBrands } from "@/components/trusted-brands"
import { CtaSection } from "@/components/cta-section"
import { TabbedShowcase } from "@/components/tabbed-showcase"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AnimatedShowcase />
      <TrustedBrands />
      <CtaSection />
      <TabbedShowcase />
    </main>
  )
}
