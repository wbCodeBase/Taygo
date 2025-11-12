"use client"

import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-teal-50/30 pt-32">
      {/* Background Watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <Image src="/images/hero-watermark.png" alt="" fill className="object-cover" />
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight text-balance">
            The Complete AI-Powered Operating System for the Modern Mortgage Business.
          </h1>

          {/* Subheading with teal accent */}
          <div className="text-xl md:text-2xl font-medium text-teal-700 mb-6 flex flex-wrap items-center justify-center gap-2">
            <span>CRM</span>
            <span className="text-gray-400">|</span>
            <span>Loan Origination</span>
            <span className="text-gray-400">|</span>
            <span>Marketing Automation</span>
            <span className="text-gray-400">|</span>
            <span>File Management.</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-800 mb-12 max-w-3xl mx-auto text-pretty">
            Everything your brokers, lenders, and loan officers need powered by AI, all in one platform.
          </p>

          {/* Lisa AI Assistant CTA */}
          <div className="flex flex-col items-center gap-6">
            {/* AI Assistant Bubble */}
            <div
              className="relative bg-gradient-to-r from-[#6161FF] via-[#7B68EE] to-[#9370DB] text-white px-8 py-5 rounded-3xl shadow-2xl shadow-[#6161FF]/40 max-w-md animate-float"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Speech bubble tail */}
              <div className="absolute -bottom-3 left-12 w-6 h-6 bg-gradient-to-br from-[#6161FF] to-[#7B68EE] rotate-45" />

              <div className="text-left relative z-10">
                <div className="text-base font-semibold mb-1 text-white flex items-center gap-2">
                  Lisa 
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
                <p className="text-sm">
                  "Ready to transform your mortgage business? Let me help you set up your magic box today!"
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="group relative cursor-pointer px-8 py-4 bg-[#6161FF] hover:bg-[#5252E8] text-white font-semibold rounded-xl shadow-lg shadow-[#6161FF]/50 hover:shadow-xl hover:shadow-[#6161FF]/60 transition-all duration-300 hover:scale-105 active:scale-100">
                <span className="flex items-center gap-2">
                  Talk to Lisa - Get Started
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button className="px-8 cursor-pointer py-4 bg-white text-[#6161FF] font-semibold rounded-xl border-2 border-[#6161FF]/20 hover:border-[#6161FF]/40 hover:bg-[#6161FF]/5 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-100">
                Try It Free
              </button>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
