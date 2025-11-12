"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

import { FaArrowCircleRight } from "react-icons/fa";

const showcaseData = [
  {
    id: 1,
    query: "Surface top SaaS accounts with up-to-date signals.",
    image: "/images/showcase-1.png",
    bgColor: "#e0e7ff", // indigo-100
    borderColor: "border-indigo-300",
    accentColor: "bg-indigo-600",
  },
  {
    id: 2,
    query: "Generate brainstorm ideas for our fall activewear campaign.",
    image: "/images/showcase-2.png",
    bgColor: "#1e293b", // slate-800
    borderColor: "border-slate-600",
    accentColor: "bg-indigo-500",
  },
  {
    id: 3,
    query: "Surface themes & opportunities from customer interactions.",
    image: "/images/showcase-3.png",
    bgColor: "#ddd6fe", // violet-200
    borderColor: "border-violet-300",
    accentColor: "bg-violet-600",
  },
]

export function AnimatedShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [displayedIndex, setDisplayedIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [imageTransition, setImageTransition] = useState("idle")

  const currentData = showcaseData[currentIndex]
  const displayedData = showcaseData[displayedIndex]

  useEffect(() => {
    setDisplayedText("")
    setIsTyping(true)

    let currentChar = 0
    const typingInterval = setInterval(() => {
      if (currentChar < currentData.query.length) {
        setDisplayedText(currentData.query.slice(0, currentChar + 1))
        currentChar++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)

        if (currentIndex !== displayedIndex) {
          setImageTransition("exiting")

          setTimeout(() => {
            setPrevIndex(displayedIndex)
            setDisplayedIndex(currentIndex)
            setImageTransition("entering")

            setTimeout(() => {
              setImageTransition("idle")
            }, 500)
          }, 500)
        }
      }
    }, 30)

    return () => clearInterval(typingInterval)
  }, [currentIndex, currentData.query, displayedIndex])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseData.length)
    }, 6000)

    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI-Powered Intelligence for Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how Lisa transforms queries into actionable insights in real-time
          </p>
        </div> */}

        <div
          className="relative rounded-3xl p-8 shadow-2xl overflow-hidden transition-all duration-1000 ease-in-out"
          style={{ backgroundColor: displayedData.bgColor }}
        >
          <div className="relative max-w-3xl mx-auto mb-8">
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
              <button className="absolute text-white right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                <FaArrowCircleRight />  
              </button>
              {isTyping && (
                <span className="absolute right-20 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-gray-900 animate-pulse" />
              )}
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto h-[450px] md:h-[520px]">
            <div className="absolute inset-0 translate-y-4 scale-[0.92]">
              <div className="w-full h-full bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg" />
            </div>

            <div className="absolute inset-0 translate-y-2 scale-[0.96]">
              <div className="w-full h-full bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg" />
            </div>

            <div className="absolute inset-0">
              <div className="w-full h-full backdrop-blur-sm rounded-2xl shadow-xl" />
            </div>

            <div className="absolute inset-0 rounded-2xl bg-white shadow-2xl overflow-hidden">
              {imageTransition === "exiting" && (
                <div className="absolute inset-0 translate-y-[5%] animate-slide-down-exit">
                  <Image
                    src={showcaseData[prevIndex].image || "/placeholder.svg"}
                    alt={`Showcase ${prevIndex + 1}`}
                    fill
                    className="objectcontain rounded-xl object-bottom p-4"
                    priority
                  />
                </div>
              )}

              {(imageTransition === "entering" || imageTransition === "idle") && (
                <div
                  className={`absolute inset-0 translate-y-[5%] ${imageTransition === "entering" ? "animate-slide-up-enter" : ""}`}
                >
                  <Image
                    src={displayedData.image || "/placeholder.svg"}
                    alt={`Showcase ${displayedData.id}`}
                    fill
                    className="objectcontain object-bottom p-4"
                    priority
                  />
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {showcaseData.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="relative group"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? `w-12 ${item.accentColor}` : "w-2 bg-gray-400 hover:bg-gray-600"
                    }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* <div className="flex flex-wrap justify-center gap-4 mt-12">
          <div className="px-6 py-3 bg-white rounded-full shadow-md border border-indigo-200 text-gray-700 font-medium hover:border-indigo-400 transition-colors">
            Real-time AI Analysis
          </div>
          <div className="px-6 py-3 bg-white rounded-full shadow-md border border-indigo-200 text-gray-700 font-medium hover:border-indigo-400 transition-colors">
            Smart Data Visualization
          </div>
          <div className="px-6 py-3 bg-white rounded-full shadow-md border border-indigo-200 text-gray-700 font-medium hover:border-indigo-400 transition-colors">
            Instant Insights
          </div>
        </div> */}
      
      </div>
    </section>
  )
}
