import Image from "next/image";
import Lisa from "@/public/images/lisa2.png"

export default function LisaCta() {
  return (
    <>

      <section className="w-full bg-[#C4E5E633] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Lisa AI Assistant CTA */}
          <div className="relative max-w-6xl mx-auto bg-linear-to-r from-[#006C5D] via-[#004e43] to-[#002e28] rounded-sm overflow-visible shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6 md:gap-12 items-end p-8 md:p-12">

              {/* Lisa Image - extends above container */}
              <div className="relative md:col-span-1 h-64 md:h-72 order-1 md:order-1">
                <div className="absolute md:-bottom-20 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-64 md:w-80 lg:w-96 h-full md:h-[160%]">
                  <Image
                    src={Lisa}
                    fill
                    alt="Lisa AI Assistant"
                    className="object-contain object-bottom"
                    style={{ filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))' }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-2 md:col-span-2 md:order-2 text-white space-y-6">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-2">
                    Meet Lisa
                  </h2>
                  <p className="text-xl md:text-xl font-medium md:font-semibold mb-4">
                    Your 24/7 AI Mortgage Assistant
                  </p>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    Lisa isn&apos;t just a chatbot—she&apos;s your AI-powered teammate who works across every stage of the lending journey.
                    From capturing new leads to assisting borrowers and supporting loan officers, Lisa makes mortgage operations faster,
                    smarter, and effortlessly human.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-[#006C5D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                    Get Started
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Visit our AI Trust Center
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>



      <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* TAYGO Digital Shop CTA */}
          <div className="bg-white rounded-2xl max-w-6xl mx-auto p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-gray-900 mb-4">
                    Set up your digital shop with TAYGO™
                  </h2>
                  <p className="text-base md:text-lg text-gray-700">
                    We help your business look better online, look better do better!
                  </p>
                </div>

                <button className="bg-[#6366F1] text-white px-8 py-3 rounded-sm font-semibold hover:bg-[#5558E3] transition-colors shadow-lg">
                  Let&apos;s Go!
                </button>
              </div>

              {/* House Icon */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-green-50 to-pink-100 rounded-full opacity-30 blur-2xl"></div>
                  <img
                    src="/images/IconCta.png"
                    alt="TAYGO House Icon"
                    className="relative w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


    </>
  )
}
