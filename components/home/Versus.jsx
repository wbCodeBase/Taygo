import Image from "next/image"
import { Check, X } from "lucide-react"

import taygoLogo from '@/public/logo/taygoLogo.png'

export default function Versus() {
    const comparisons = [
        {
            taygo: "AI reviews pipeline and identifies next actions.",
            traditional: "Loan officers manually scan pipelines every morning.",
        },
        {
            taygo: "AI generates prioritized action plans automatically.",
            traditional: "Loan officers decide actions manually from memory.",
        },
        {
            taygo: "AI executes calls, emails, texts after approval.",
            traditional: "LOs click, call, send, and update themselves.",
        },
        {
            taygo: "Pipeline issues detected and resolved automatically.",
            traditional: "Pipeline stalls go unnoticed until too late.",
        },
        {
            taygo: "AI guides borrowers through applications and documents.",
            traditional: "Borrowers rely on manual reminders and follow-ups.",
        },
        {
            taygo: "Loan files auto-summarized with risks and steps.",
            traditional: "LOs open multiple screens to check status.",
        },
        {
            taygo: "Partners receive automatic real-time loan updates.",
            traditional: "LOs manually send updates or forget them.",
        },
        {
            taygo: "AI ensures consistent follow-up across all leads.",
            traditional: "Follow-up quality drops as volume increases.",
        },
        {
            taygo: "LO approves decisions and focuses on relationships.",
            traditional: "LO acts as operator, executor, task manager.",
        },
    ]

    return (
        <div className="min-h-screen bg[#131716] bg-crm-green bg[#7B69E5] text-white py-16 px-4">

            <div className="text-center mb-20 max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-[2.7rem] font-semibold text-gray-50 mb-6 leading-tight">
                    From CRM to AI Workforce

                </h2>
                <p className="text-lg md:text-xl font-medium mb-4 text-balance mx-auto text-gray-100">
                    See how taygo replaces manual execution with intelligent automation.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-3">
                {/* Header with horizontal line and VS badge */}
                <div className="relative mb-5.5">
                    <div className="hpx h-0.5 bg-gray-50"></div>
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2  px-4">
                        <div className="w-10 h-10 text-black rounded-full border border-gray-50 flex bg-white relative z-20 items-center justify-center text-2xl font-bold">
                            vs
                        </div>
                    </div>
                </div>


                {/* Logo Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div className="flex justify-center items-center">
                        <Image src={taygoLogo} alt="taygo Logo" width={150} height={40} className="object-contain" />
                    </div>
                    <div className="flex justify-center items-center">
                        <h2 className="text-2xl font-bold text-white">Traditional CRM&apos;s</h2>
                    </div>
                </div>

                {/* Comparison Grid */}
                <div className="relative">
                    {/* Vertical divider line */}
                    <div className="absolute z-0 left-1/2 bottom0 w-px bg-gray-50 hidden md:block"></div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
                        {/* Vertical divider line */}
                        <div className="absolute left-1/2 -top-20 bottom-0 w-px bg-gray-50 hidden md:block"></div>

                        {/* Left Column - taygo */}
                        <div className="px-3 py-5 rounded-xs mr-7 bg-gray-800/40 bg-green300/10">
                            {comparisons.map((item, index) => (
                                <div key={index} className="flex gap-4 px-4 py-2">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[15px] text-white">{item.taygo}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column - Traditional CRM */}
                        <div className="px-3 py-5 rounded-xs ml-7 bg-gray-800/30">
                            {comparisons.map((item, index) => (
                                <div key={index} className="flex gap-4 px-4 py-1.5 rounded-lg">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center">
                                            <X className="w-4 h-4 text-gray-400" strokeWidth={3} />
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-white text-[15px] opacity-70">{item.traditional}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>







                </div>
            </div>
        </div>
    )
}


