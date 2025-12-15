import Image from "next/image"
import { Check, X } from "lucide-react"

export default function Versus() {
    const comparisons = [
        {
            title: "1. Daily Pipeline Review",
            taygo: "AI reviews the entire pipeline every day and identifies exactly what needs to happen next.",
            traditional: "Loan officers manually scan pipelines, lists, and dashboards every morning.",
        },
        {
            title: "2. Action Planning",
            taygo: "AI generates a clear, prioritized action plan for leads, applications, and stalled files.",
            traditional: "Loan officers decide actions manually based on reminders and memory.",
        },
        {
            title: "3. Execution of Follow-Ups",
            taygo: "AI executes calls, emails, texts, and updates after LO approval—and reports back.",
            traditional: "LOs must click, call, send, update records, and close tasks themselves.",
        },
        {
            title: "4. Zero-Touch Pipeline Resolution",
            taygo: "Pipeline issues are automatically detected and resolved with minimal LO involvement.",
            traditional: "Pipeline stalls remain unnoticed until revenue is already at risk.",
        },
        {
            title: "5. Borrower Application Guidance",
            taygo: "AI actively guides borrowers through applications and document completion.",
            traditional: "Borrowers rely on manual reminders and LO follow-ups.",
        },
        {
            title: "6. Instant File Intelligence",
            taygo: "Every loan file is automatically summarized with risks, next steps, and suggestions.",
            traditional: "LOs open multiple screens to understand file status manually.",
        },
        {
            title: "7. Partner & Realtor Updates",
            taygo: "Partners receive automatic, real-time loan updates without LO effort.",
            traditional: "LOs manually send updates—or forget to send them.",
        },
        {
            title: "8. Consistency at Scale",
            taygo: "AI ensures consistent follow-up and execution across 50, 100, or 200+ leads.",
            traditional: "Follow-up quality drops as pipeline volume increases.",
        },
        {
            title: "9. Role of the Loan Officer",
            taygo: "LO approves decisions and focuses on relationships and closing strategy.",
            traditional: "LO acts as operator, executor, and task manager.",
        },
        {
            title: "10. What the CRM Actually Is",
            taygo: "An AI operational workforce that runs mortgage workflows with human approval.",
            traditional: "A system of records, reminders, and dashboards.",
        },
    ]

    return (
        <div className="min-h-screen bg-[#1a1d29] text-white py-16 px-4">

            <div className="text-center mb-20 max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-[2.7rem] font-semibold text-gray-50 mb-6 leading-tight">
                    From CRM to AI Workforce

                </h2>
                <p className="text-lg md:text-xl font-medium mb-4 text-balance mx-auto text-gray-100">
                    See how Taygo replaces manual execution with intelligent automation.
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Header with horizontal line and VS badge */}
                <div className="relative mb-12">
                    <div className="h-px bg-gray-50"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1d29] px-4">
                        <div className="w-16 h-16 rounded-full border-2 border-gray-50 flex items-center justify-center text-lg font-bold">
                            vs
                        </div>
                    </div>
                </div>

                {/* Logo Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="flex justify-center items-center">
                        <Image src="/logo/TaygoLogoWhite.png" alt="Taygo Logo" width={150} height={40} className="object-contain" />
                    </div>
                    <div className="flex justify-center items-center">
                        <h2 className="text-2xl font-bold text-white">Traditional CRM&apos;s</h2>
                    </div>
                </div>

                {/* Comparison Grid */}
                <div className="relative">
                    {/* Vertical divider line */}
                    <div className="absolute left-1/2 -top-20 bottom-0 w-px bg-gray-50 hidden md:block"></div>

                    <div className="space-y-8">
                        {comparisons.map((item, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Taygo side - Left */}
                                <div className="flex gap-4 pr-0 md:pr-8">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-emerald-400" strokeWidth={3} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2 text-white">{item.title}</h3>
                                        <p className="text-gray-300 leading-relaxed">{item.taygo}</p>
                                    </div>
                                </div>

                                {/* Traditional CRM side - Right */}
                                <div className="flex gap-4 pl-0 md:pl-8">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 rounded-full bg-gray-700/50 flex items-center justify-center">
                                            <X className="w-4 h-4 text-gray-500" strokeWidth={3} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2 text-white opacity-70">{item.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{item.traditional}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}








// import React from 'react'

// const Versus = () => {
//     return (
//         <>

//             <section className="md:py-18 py-10 px-8 bg-linear-to-b from-white to-[#C4E5E633]">
//                 <div className="max-w7xl max-w-screen-3xl md:px-8 px-3 mx-auto">
//                     {/* heading */}
//                     <div className="text-center mb-12 max-w-5xl mx-auto">
//                         <h2 className="text-2xl md:text-[2.7rem] font-semibold text-gray-900 mb-6 leading-tight">
//                             Everything brokers and loan officers need in one intelligent platform.
//                         </h2>
//                         <p className="text-lg md:text-xl font-medium mb-4 text-balance mx-auto text-gray-700">
//                             Explore how TAYGO™ unites CRM, LOS, Automation, Marketing, and Integrations to simplify every part of your mortgage business.
//                         </p>
//                     </div>
// <section>



// </section>





//                 </div>
//             </section>

//         </>
//     )
// }

// export default Versus