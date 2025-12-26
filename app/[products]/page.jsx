
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
import { notFound } from 'next/navigation'


import { productsData } from "@/data/products";


export default async function Product({ params }) {

  const { products } = await params;

  const productData = productsData[products];

  if (!productData) {
    return notFound();
  }


  return (
    <>

      <HeroSection
        hero={productData.hero}
        productName={productData.name}
      />

      <HeaderBase
        whySection={productData.whySection}
      />


      <BuildConvertMort
        features={productData.features}
      />

      <LisaCta
        aiAssistant={productData.aiAssistant}
      />

      <IncreaseProductivity
        features={productData.featuresTwo}
      />


      <AIFeaturesSection
        aiDifferentiation={productData.aiDifferentiation}
      />

      <BorrowerRelationships
      insights={productData.insights}
      />

      {/* <DoMoreVideoSection /> */}

      <FaqsProductPage
        faqs={productData.faqs}
        finalCta={productData.finalCTA}
      />

    </>
  )
}







































