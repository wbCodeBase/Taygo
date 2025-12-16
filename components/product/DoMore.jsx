"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

// import videoThumbnail from "@/public/videoThumbnail.webp"
import videoThumbnail from "@/public/lisaThumbnail.png"
// import taygo from "@/public/taygo.mp4"
import Image from "next/image"

export default function DoMoreVideoSection() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    return (
        <>
            <section className="w-full bg-neutral-50 py-16 px-6 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="relative cursor-pointer">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="relative block w-full cursor-pointer overflow-hidden rounded-xs group"
                                aria-label="Play video"
                            >
                                <Image
                                    src={videoThumbnail}
                                    alt="Video thumbnail showing Sullivan & Stanley testimonial"
                                    className="w-full h-auto transition-transform duration-300"
                                />

                                {/* Play Button Overlay */}
                                <div className="absolute bottom-5 left-5 flex items-center justify-center">
                                    <div className="bg-black/80 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                                        <div className="w-0 h-0 border-t-[12px] md:border-t-[16px] border-t-transparent border-l-[20px] md:border-l-[28px] border-l-white border-b-[12px] md:border-b-[16px] border-b-transparent ml-2" />
                                    </div>
                                </div>
                            </button>
                        </div>


                        {/* Right Video Thumbnail */}
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 leading-tight">
                                Do more, better, faster
                            </h2>

                            <p className="text-md md:text-lg text-neutral-700 max-w-xl text-pretty">
                                Increase productivity by automating and orchestrating workflow tasks across communication and records.
                            </p>

                            <Button
                                size="lg"
                                className="bg-btn-green font-semibold hover:bg-btn-green-hover cursor-pointer text-white rounded-xs px-8 py-6 text-base"
                            >
                                Watch the video
                            </Button>
                        </div>

                    </div>
                </div>
            </section>

            {/* Video Popup Modal */}
            {isPopupOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setIsPopupOpen(false)}
                >
                    <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button
                            onClick={() => setIsPopupOpen(false)}
                            className="absolute -top-12 right-0 text-white hover:text-neutral-300 transition-colors"
                            aria-label="Close video"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Video Container */}
                        <div className="w-full h-full bg-black rounded-xs overflow-hidden">

                            {/* Replace with actual video element when video URL is available */}
                            <video
                                src="../../public/taygo.mp4"
                                controls
                                autoPlay
                                className="w-full h-full"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
