// import HeroSectionAutomatedPipeline from "@/components/product/HeroAutomativePipeline";
import LisaCta from "@/components/home/lisaCta";
import AIFeaturesSection from "@/components/product/AiFeatures";
import BorrowerRelationships from "@/components/product/BorrowerRelationships";
import BuildConvertMort from "@/components/product/BuildConvertMort";
import DoMoreVideoSection from "@/components/product/DoMore";
import FaqsProductPage from "@/components/product/Faqs";
import HeaderBase from "@/components/product/HeroBase";
import HeroSection from "@/components/product/HeroSection";
import IncreaseProductivity from "@/components/product/IncreaseProductivity";
import Link from "next/link";


export default function Product() {
  return (
    <>

      <HeroSection />

      <HeaderBase />

      <BuildConvertMort />

      <LisaCta />

      <IncreaseProductivity />

      <AIFeaturesSection />


      <BorrowerRelationships />


      <DoMoreVideoSection />


      {/* CTA Section */}
      <div>
        <div className="w-full mx-auto">
          <div className="bg-[#006C5D]  text-white p-15 text-center">
            <h2 className="text-3xl sm:text-4xl font-medium mb-16">Experience Taygo™ LeadFlow for yourself</h2>
            {/* <p className="text-2xl font-semibold text-white/90 mb-10">Get a custom AI-powered plan that fits your team's pipeline and workflow</p> */}
            <Link href="#" size="lg" className="bg-white text-black/90 rounded-xs hover:bg-gray-100 font-bold group text-lg px-10 py-4 mt-12">
              Get a demo
            </Link>
          </div>
        </div>
      </div>

      <FaqsProductPage />


    </>
  )
}







































