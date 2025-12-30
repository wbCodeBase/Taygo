import CtaFeature from '@/components/Features/cta-section'
import CtaEk from '@/components/Features/CtaEk'
import FaqsFeatures from '@/components/Features/Faqs'
import Features from '@/components/Features/Features'
import FeaturesAlwaysOn from '@/components/Features/FeaturesAlwaysOn'
import HeroSection from '@/components/Features/HeroSection'
import WhyTaygo from '@/components/Features/WhyTaygo'

const page = () => {
  return (
    <>

      <HeroSection />

      <Features />

      <FeaturesAlwaysOn />

      <CtaEk />

      <WhyTaygo />

      <CtaFeature />

      <FaqsFeatures />

    </>
  )
}

export default page

