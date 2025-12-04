"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"



function StatCard({ value, description, color, delay }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    useEffect(() => {
        if (!isInView) return

        const targetValue = Number.parseFloat(value.replace(/[^0-9.]/g, ""))
        const duration = 1200
        const steps = 60
        const increment = targetValue / steps
        const stepDuration = duration / steps

        let current = 0
        const timer = setInterval(() => {
            current += increment
            if (current >= targetValue) {
                setCount(targetValue)
                clearInterval(timer)
            } else {
                setCount(current)
            }
        }, stepDuration)

        return () => clearInterval(timer)
    }, [isInView, value])

    const formatValue = (val) => {
        if (value.includes("%")) {
            return `${val.toFixed(1)}%`
        } else if (value.includes("K")) {
            return `${Math.round(val)}K+`
        }
        return Math.round(val).toString()
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: delay }}
            className="relative rounded-xl p-6 text-white overflow-hidden"
            style={{
                backgroundColor: color,
                boxShadow: `0 10px 40px -10px ${color}80, 0 4px 20px -4px rgba(0, 0, 0, 0.2)`,
            }}
        >
            <div className="relative z-10">
                <div className="text-4xl font-bold mb-3" style={{ color: 'white' }}>
                    {formatValue(count)}
                </div>
                <p className="text-sm opacity-95 leading-relaxed">{description}</p>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-10 bg-white blur-2xl"></div>
        </motion.div>
    )
}




function StatBar({ value, description, color, heightPercent, delay }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (!isInView) return

        // const isPercentage = value.includes("%")
        const targetValue = Number.parseFloat(value.replace(/[^0-9.]/g, ""))
        const duration = 1200
        const steps = 60
        const increment = targetValue / steps
        const stepDuration = duration / steps

        let current = 0
        const timer = setInterval(() => {
            current += increment
            if (current >= targetValue) {
                setCount(targetValue)
                clearInterval(timer)
            } else {
                setCount(current)
            }
        }, stepDuration)

        return () => clearInterval(timer)
    }, [isInView, value])

    const formatValue = (val) => {
        if (value.includes("%")) {
            return `${val.toFixed(1)}%`
        } else if (value.includes("K")) {
            return `${Math.round(val)}K+`
        }
        return Math.round(val).toString()
    }

    return (
        <div ref={ref} className="flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: delay }}
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ color }}
            >
                {formatValue(count)}
            </motion.div>
            <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: `${heightPercent}px` } : { height: 0 }}
                transition={{ duration: 0.8, delay: delay + 0.1, ease: "easeOut" }}
                className="relative w-28 md:w-32 lg:w-36 rounded-t-xs text-white flex flex-col justify-center items-center p-4 md:p-5 text-center overflow-hidden"
                style={{
                    backgroundColor: color,
                    boxShadow: `
            -8px 0 20px -4px rgba(0, 0, 0, 0.2),
            -4px 0 10px -2px rgba(0, 0, 0, 0.15),
            0 8px 30px -8px ${color}60,
            inset -2px 0 8px rgba(0, 0, 0, 0.1),
            inset 2px 0 8px rgba(255, 255, 255, 0.1)
          `,
                }}
            >
                <div className="relative z-10">
                    <p className="text-sm md:text-base opacity-95 leading-relaxed">{description}</p>
                </div>
            </motion.div>
        </div>
    )
}

export default function Stats3D() {
    const stats = [
        {
            value: "40K+",
            description: "Mortgage Brokers & Loan Officers use TAYGO™ to manage daily workflows.",
            color: "#197b76",
            heightPercent: 280,
            delay: 0,
        },
        {
            value: "200K+",
            description: "New Loan Applications Processed Monthly.",
            color: "#1d4ed8",
            heightPercent: 340,
            delay: 0.15,
        },
        {
            value: "99.9%",
            description: "System Uptime and Data Reliability.",
            color: "#7e22ce",
            heightPercent: 400,
            delay: 0.3,
        },
        {
            value: "900K+",
            description: "Real-Time Pricing & Approval Calls Automated.",
            color: "#ea580c",
            heightPercent: 340,
            delay: 0.45,
        },
    ]

    return (
        <section className="relative border-b min-hscreen w-full overflow-hidden bg-gradient-to-b from-white to-[#C4E5E633] pt-12 px-4 md:px-8">
            <div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
                <img src="/images/ClipPathGroup.png" alt="ClipPathGroup" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <h1 className="text-3xl md:text-4xl text-center md:text-left font-semibold mb-6 text-gray-900 leading-tight">
                            Trusted by the Best
                            <br />
                            in Lending.
                        </h1>
                        <p className="text-base md:text-md text-center md:text-left text-gray-800 max-w-md">
                            From first lead to final funding, the mortgage industry relies on{" "}
                            <span className="font-bold">TAYGO™</span> to keep every deal moving.
                        </p>
                    </motion.div>
                </div>

                <div className="hidden sm:block">
                    <div className="relative">
                        <img
                            src="/images/curvedRedArrow.png"
                            alt="arrow"
                            className="absolute left-[30%] md:left-[33%] md:-top-40 w-44 h-44 lg:w-72 lg:h-72 opacity-40 z-20"
                        />
                    </div>

                    <div className="flex justify-center items-end gap-8 md:gap-10 min-h-[500px] md:min-h-[500px]">
                        {stats.map((stat, index) => (
                            <StatBar key={index} {...stat} />
                        ))}
                    </div>
                </div>


                <div className="sm:hidden grid gap-4 pb-8 mt-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>


            </div>





            <div className="absolute bottom-12 right-12 grid grid-cols-12 gap-1.5 opacity-50">
                {Array.from({ length: 60 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                ))}
            </div>
        </section>
    )
}
