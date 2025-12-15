"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
// import { FaArrowCircleRight } from "react-icons/fa";
import { QueryPopup } from "../QueryPopup";


const showcaseData = [
  {
    id: 1,
    query: "Surface top SaaS accounts with up-to-date signals.",
    image: "/images/showcase-1.jpeg",
    bgColor: "#e0e7ff",
    borderColor: "border-indigo-300",
    accentColor: "bg-indigo-600",
  },
  {
    id: 2,
    query: "How to create workflow",
    image: "/images/showcase-2.jpeg",
    bgColor: "#1e293b",
    borderColor: "border-slate-600",
    accentColor: "bg-indigo-500",
  },
  {
    id: 3,
    query: "Surface themes & opportunities from customer interactions.",
    image: "/images/showcase-3.jpeg",
    bgColor: "#ddd6fe",
    borderColor: "border-violet-300",
    accentColor: "bg-violet-600",
  },
  {
    id: 1,
    query: "Surface top SaaS accounts with up-to-date signals.",
    image: "/images/showcase-4.jpeg",
    bgColor: "#e0e7ff",
    borderColor: "border-indigo-300",
    accentColor: "bg-indigo-600",
  },
  {
    id: 2,
    query: "Generate brainstorm ideas for our fall activewear campaign.",
    image: "/images/showcase-5.jpeg",
    bgColor: "#1e293b",
    borderColor: "border-slate-600",
    accentColor: "bg-indigo-500",
  },
  {
    id: 3,
    query: "User manual for taygo features and integrations.",
    image: "/images/showcase-6.jpeg",
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

  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

      <section className="pb-20 hidden md:block lg:-mt24 mt-16 px-6">
        <div className="mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-[2.7rem] font-semibold text-gray-900 mb-4 text-balance">
              Ask TAYGO™ how it works. Get an instant answer.
            </h2>
            <p className="text-lg md:text-xl font-medium mb-4 text-balance max-w-5xl mx-auto text-gray-700">
              Type any workflow, issue, or task and see exactly how TAYGO™ handles it with AI.
            </p>
          </div>

          <div className="relative md:mx-7 rounded-xs px-8 pt-8 shadow-2xl overflow-hidden transition-all duration-700 ease-in-out bg-crm-green"
          // style={{ backgroundColor: currentData.bgColor }}
          >
            <div className="relative max-w-4xl mx-auto mb-16">
              <div onClick={() => setIsPopupOpen(true)}
                className={`relative bg-white rounded-xs shadow-lg border-2 transition-all duration-700`}
              // className={`relative bg-white rounded-xs shadow-lg border-2 ${currentData.borderColor} transition-all duration-700`}
              >
                <input
                  type="text"
                  value={displayedText}
                  readOnly
                  className="w-full px-6 py-5 text-lg text-gray-900 bg-transparent rounded-xs outline-none"
                  placeholder="Ask Lisa anything..."
                />

                <button className="absolute font-semibold cursor-pointer text-white text-xs px-4 p-3 right-4 top-1/2 -translate-y-1/2  bg-btn-green hover:bg-btn-green-hover rounded-xs flex items-center justify-center transition-colors">
                  Ask TAYGO™
                </button>


              </div>
            </div>

            <div className="relative max-w-7xl mx-auto h-[520px] md:h-[600px] mt-12">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-white/35 rounded-t-sm shadow-sm -translate-y-9 pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[87%] h-full bg-white/50 rounded-t-sm shadow-md -translate-y-6 pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[93%] h-full bg-white/65 rounded-t-sm shadow-lg -translate-y-3 pointer-events-none" />

              {displayIndex >= 0 && (
                <div
                  key={imageKey}
                  className={`absolute inset-0 rounded-t-sm overflow-hidden shadow-2xl ${isExiting ? "animate-slideDown" : "animate-slideUp"
                    }`}
                >
                  <Image
                    src={currentData.image || "/placeholder.svg"}
                    alt={`Showcase ${currentData.id}`}
                    fill
                    className="object-cover object-top rounded-xs"
                    priority
                  />
                </div>
              )}
            </div>
          </div>

        </div>
      </section>


      <section className="px-6 md:hidden block my-10">


        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4 text-balance">
            Ask TAYGO™ how it works. Get an instant answer.
          </h2>
          <p className="text-base md:text-lg font-medium mb-4 text-balance max-w-5xl mx-auto text-gray-700">
            Type any workflow, issue, or task and see exactly how TAYGO™ handles it with AI.
          </p>
        </div>


        <video
          autoPlay
          loop
          playsInline
          preload="auto"
          muted
          width="100%"
        >
          <source
            src="/vid/crmShowcaseVid.mp4"
            type="video/mp4"
          />
          Sorry, your browser doesn’t support embedded videos.
        </video>


        <div className="flex mt-8 flex-col sm:flex-row items-center gap-4">
          <button onClick={() => setIsPopupOpen(true)} className="group font-semibold relative cursor-pointer px-6 py-2 bg-[#006C5D] hover:bg-[#006558] text-white rounded-xs shadow-lg shadow-[#6161FF]/50 hover:shadow-xl hover:shadow-[#6161FF]/60 transition-all duration-300 hover:scale-105 active:scale-100">
            <span className="flex items-center gap-2 text-md">
              Ask TAYGO™
            </span>
          </button>

        </div>

      </section>


      <QueryPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />


    </>

  )
}




