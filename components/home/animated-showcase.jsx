"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FaArrowCircleRight } from "react-icons/fa";

const showcaseData = [
  {
    id: 1,
    query: "Surface top SaaS accounts with up-to-date signals.",
    image: "/images/showcase-1.png",
    bgColor: "#e0e7ff",
    borderColor: "border-indigo-300",
    accentColor: "bg-indigo-600",
  },
  {
    id: 2,
    query: "Generate brainstorm ideas for our fall activewear campaign.",
    image: "/images/showcase-2.png",
    bgColor: "#1e293b",
    borderColor: "border-slate-600",
    accentColor: "bg-indigo-500",
  },
  {
    id: 3,
    query: "Surface themes & opportunities from customer interactions.",
    image: "/images/showcase-3.png",
    bgColor: "#ddd6fe",
    borderColor: "border-violet-300",
    accentColor: "bg-violet-600",
  },
]

export function AnimatedShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(-1) // Start with no image
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [imageKey, setImageKey] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  const currentData = displayIndex >= 0 ? showcaseData[displayIndex] : showcaseData[0]

  useEffect(() => {
    setDisplayedText("")
    setIsTyping(true)

    let currentChar = 0
    const typingInterval = setInterval(() => {
      if (currentChar < showcaseData[currentIndex].query.length) {
        setDisplayedText(showcaseData[currentIndex].query.slice(0, currentChar + 1))
        currentChar++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)

        setIsExiting(true)

        setTimeout(() => {
          setDisplayIndex(currentIndex)
          setImageKey((prev) => prev + 1)
          setIsExiting(false)

          setTimeout(() => {
            const nextIndex = (currentIndex + 1) % showcaseData.length
            setCurrentIndex(nextIndex)
          }, 1000)
        }, 300) // Wait for exit animation to complete
      }
    }, 15)

    return () => clearInterval(typingInterval)
  }, [currentIndex])

  return (
    <>

      <section className="pb-20 md:-mt-16 hidden md:block lg:-mt-24 mt-10 px-6">
        <div className="container mx-auto max-w-7xl">

          <div
            className="relative rounded-3xl px-8 pt-8 shadow-2xl overflow-hidden transition-all duration-700 ease-in-out bg-[#006C5D]"
          // style={{ backgroundColor: currentData.bgColor }}
          >
            <div className="relative max-w-3xl mx-auto mb-16">
              <div
                className={`relative bg-white rounded-2xl shadow-lg border-2 ${currentData.borderColor} transition-all duration-700`}
              >
                <input
                  type="text"
                  value={displayedText}
                  readOnly
                  className="w-full px-6 py-5 text-lg text-gray-900 bg-transparent rounded-2xl outline-none"
                  placeholder="Ask Lisa anything..."
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <FaArrowCircleRight className="text-white" />
                </button>

              </div>
            </div>

            <div className="relative max-w-6xl mx-auto h-[520px] md:h-[600px] mt-12">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-white/35 rounded-t-2xl shadow-sm -translate-y-9 pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[87%] h-full bg-white/50 rounded-t-2xl shadow-md -translate-y-6 pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[93%] h-full bg-white/65 rounded-t-2xl shadow-lg -translate-y-3 pointer-events-none" />

              {displayIndex >= 0 && (
                <div
                  key={imageKey}
                  className={`absolute inset-0 rounded-t-2xl overflow-hidden shadow-2xl ${isExiting ? "animate-slideDown" : "animate-slideUp"
                    }`}
                >
                  <Image
                    src={currentData.image || "/placeholder.svg"}
                    alt={`Showcase ${currentData.id}`}
                    fill
                    className="object-cover object-top rounded-t-2xl scale-105"
                    priority
                  />
                </div>
              )}
            </div>
          </div>

        </div>
      </section>


      <section className="px-6 md:hidden block mt-6">
        <video
          autoPlay
          loop
          playsInline
          preload="auto"
          muted
          width="100%"
        >
          <source
            src="https://videos.ctfassets.net/wl95ljfippl8/5ZynZBkhFUmXHtguiDCGvA/df342cf5633e48f789447f70390f9361/HomepageOptimization_ColorBG_V5_1_.mp4"
            type="video/mp4"
          />
          Sorry, your browser doesn’t support embedded videos.
        </video>
      </section>


    </>

  )
}




