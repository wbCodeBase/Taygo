import Image from "next/image";

import Lisa from "@/public/images/lisa2.png"


export default function LisaCta({ aiAssistant }) {
  return (
    <>
      <section className="w-full bg-[#C4E5E633] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-2xl mx-auto">
          {/* Lisa AI Assistant CTA */}
          <div className="relative mx-auto bg-linear-to-r from-[#006C5D] via-[#004e43] to-[#002e28] rounded-xs overflow-visible shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6 md:gap-12 items-end p-8 md:p-12">

              {/* Lisa Image - extends above container */}
              <div className="relative md:col-span-1 h-64 md:h-72 order-1 md:order-1">
                <div className="absolute md:-bottom-20 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-64 md:w-80 lg:w-96 h-full md:h-[160%]">
                  <Image
                    src={aiAssistant?.image || Lisa}
                    fill
                    alt={aiAssistant?.name || "AI Assistant"}
                    className="object-contain object-bottom"
                    style={{ filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))' }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-2 md:col-span-2 md:order-2 text-white space-y-6">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-2">
                    {aiAssistant?.title || "Meet Lisa"}
                  </h2>
                  <p className="text-xl md:text-xl font-medium md:font-semibold mb-4">
                    {aiAssistant?.subtitle || "Your 24/7 AI Mortgage Assistant"}
                  </p>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    {aiAssistant?.body || "Lisa isn't just a chatbot—she's your AI-powered teammate who works across every stage of the lending journey. From capturing new leads to assisting borrowers and supporting loan officers, Lisa makes mortgage operations faster, smarter, and effortlessly human."}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {aiAssistant?.ctas?.map((cta = {
                    name: "Lisa",
                    title: "Meet Lisa",
                    subtitle: "Your 24/7 AI Mortgage Assistant",
                    body: "Lisa isn't just a chatbot—she's your AI-powered teammate who works across every stage of the lending journey. From capturing new leads to assisting borrowers and supporting loan officers, Lisa makes mortgage operations faster, smarter, and effortlessly human.",
                    image: Lisa,
                    ctas: [
                      {
                        text: "Get Started",
                        link: "/get-started"
                      },
                      {
                        text: "Visit our AI Trust Center",
                        link: "/ai-trust"
                      }
                    ]
                  }, index) => (
                    <a
                      key={index}
                      href={cta.link || "#"}
                      className={`px-6 py-3 rounded-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer ${index === 0
                        ? 'bg-white text-[#006C5D] hover:bg-gray-100'
                        : 'border-2 border-white text-white hover:bg-white/10'
                        }`}
                    >
                      {cta.text}
                      {index === 0 && (
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
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}