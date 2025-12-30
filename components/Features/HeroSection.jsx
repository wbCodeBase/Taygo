import Image from "next/image"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden px-4 py-2 md:px-12 md:py-12 lg:px-20 md:pb-20">


      <div className="container relative z-10 mx-auto bg-gray-100 px-6 py-2 md:px-12 md:py-12 lg:px-20">
        {/* Breadcrumbs */}
        <nav className="mb-2 flex items-center space-x-2 text-sm font-medium text-slate-500">
          <span className="hover:text-slate-900 cursor-pointer transition-colors">Product</span>
          <ChevronRight className="h-4 w-4" />
          <span className="hover:text-slate-900 cursor-pointer transition-colors">Marketing Automation</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-slate-900">Always-On Nurture Programs</span>
        </nav>


        {/* Background Watermark Pattern */}
        <div className="absolute right-0 bottom-0 z-0 opacity-60 h-[500px] w-[400px]">
          <Image
            src="https://cdn.prod.website-files.com/6829b31a722bcd8064fdee21/6848403bcb15208a5c1a6425_lead-hero-bg-pattern.webp"
            alt="Background pattern"
            fill
            className="object-contain object-right-bottom"
            priority
          />
        </div>


        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="flex flex-col space-y-6">
            <div className="inline-block text-xs font-bold tracking-widest text-teal-600 uppercase">
              AI Agent Workforce
            </div>
            <h1 className="sm:text-[3rem] text-3xl text-gray-900 font-bold leading-snug">
              Always-on execution for mortgage teams
            </h1>
            <p className="max-w-[540px] text-pretty text-lg leading-relaxed text-slate-600">
              Mortgage teams don’t struggle with effort—they struggle with execution at scale. Reviewing pipelines, deciding next steps, and following up consistently becomes harder as volume grows. AI Agent Workforce introduces intelligent agents that continuously monitor activity, determine what needs to happen next, and execute approved actions—so momentum never depends on manual effort alone.
            </p>
            <div className="pt-4">
              <Button
                size="lg"
                className="h-14 rounded-sm bg-btn-green hover:bg-green-hover px-8 text-lg font-semibold text-white cursor-pointer hover:scale-105"
              >
                Schedule a demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Image Graphic */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] transform transition-all duration-500 hover:scale-[1.02]">
              <Image
                src="https://cdn.prod.website-files.com/6829b31a722bcd8064fdee21/687a622c53ac6244062bea27_Group%201261152289-p-800.png"
                alt="Marketing automation workflow visualization"
                width={800}
                height={600}
                className="h-auto w-full drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
