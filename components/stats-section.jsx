import Image from "next/image"
import startWatermark from "@/public/images/star-watermark.png"

const stats = [
    {
        number: "40K+",
        description: "Mortgage Brokers & Loan Officers use TAYGO™ to manage daily workflows.",
    },
    {
        number: "200K+",
        description: "New Loan Applications Processed Monthly.",
        featured: true,
    },
    {
        number: "99.9%",
        description: "System Uptime and Data Reliability.",
    },
    {
        number: "900K+",
        description: "Real-Time Pricing & Approval Calls Automated.",
    },
]

export default function StatsSection() {
    return (
        <section className="relative px-6 py-16 md:py-24 overflow-hidden bg-white">

            {/* Left watermark */}

            <div className="absolute -left-8 -translate-y-1/2  w-48 h-48 md:w-64 md:h-64">
                <Image src={startWatermark} alt="startWatermark" fill className="object-contain" />
            </div>


            <div className="absolute -right-8 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64">
                <Image
                    src={startWatermark}
                    alt="startWatermark"
                    fill
                    className="object-contain scale-x-[-1]"
                />
            </div>



            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-wrap justify-center items-end gap-6 max-w-6xl mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`relative ${stat.featured ? "w-full sm:w-[240px] md:w-[260px]" : "w-full sm:w-[200px] md:w-[220px]"}`}
                        >
                            {stat.featured && (
                                <>
                                    {/* First layer - outermost, lightest */}
                                    <div
                                        className="absolute -inset-6 rounded-xl shadow-lg"
                                        style={{ backgroundColor: "#E0F7EF", zIndex: -2 }}
                                    />
                                    {/* Second layer - middle */}
                                    <div
                                        className="absolute -inset-3 rounded-xl shadow-md"
                                        style={{ backgroundColor: "#B3E5D1", zIndex: -1 }}
                                    />
                                </>
                            )}

                            <div
                                className={`relative rounded-xl p-6 md:p-8 flex flex-col items-center text-center justify-between shadow-xl ${stat.featured ? "min-h-[300px] md:min-h-[340px]" : "min-h-[220px] md:min-h-[240px]"
                                    }`}
                                style={{ backgroundColor: "#006C5D" }}
                            >
                                <div className="relative w-14 h-14 md:w-16 md:h-16 mb-4 flex-shrink-0">
                                    <Image src="/images/check-icon.png" alt="" fill className="object-contain" />
                                </div>

                                <h3 className="text-3xl md:text-4xl  font-semibold text-white mb-3">{stat.number}</h3>

                                <p className="text-sm md:text-base text-white/90 leading-relaxed">{stat.description}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
