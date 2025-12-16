// "use client";

// import * as React from "react";
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion";
// import Image from "next/image";
// import Link from "next/link";

// const products = [
//     {
//         id: "leadflow",
//         title: "Taygo™ LeadFlow",
//         subtitle: "Mortgage CRM & Lead Automation",
//         description: "Capture, organize, and convert every mortgage lead in one system built specifically for loan officers and brokers. LeadFlow centralizes borrower data, automates follow-ups, and ensures no opportunity slips through the cracks. AI reviews your pipeline daily, recommends next steps, and executes approved actions to keep deals moving.",
//         ctaText: "Learn more",
//         ctaLink: "leadflow"
//     },
//     {
//         id: "pipelineos",
//         title: "Taygo™ PipelineOS",
//         subtitle: "Mortgage Pipeline & Refinance Workflow Automation",
//         description: "PipelineOS gives lenders full control over purchase and refinance pipelines with automated stage movement, risk detection, and refinance opportunity identification. It monitors pipeline health in real time and proactively resolves stalls, helping teams close faster with greater predictability.",
//         ctaText: "Learn more",
//         ctaLink: "#"
//     },
//     {
//         id: "borrowerhub",
//         title: "Taygo™ BorrowerHub",
//         subtitle: "Mortgage POS & Borrower Portal",
//         description: "BorrowerHub delivers a guided, self-service borrower experience from application to closing. A conversational AI assistant helps borrowers complete forms, upload documents, and track loan status—while loan officers see higher completion rates with less manual follow-up.",
//         ctaText: "Learn more",
//         ctaLink: "#"
//     },
//     {
//         id: "voiceai",
//         title: "Taygo™ VoiceAI",
//         subtitle: "AI Call Center & Phone Automation",
//         description: "VoiceAI automates inbound and outbound mortgage calls for lead follow-ups, status updates, reminders, and nurture campaigns. It ensures every borrower receives timely communication while freeing loan officers from repetitive calling tasks.",
//         ctaText: "Learn more",
//         ctaLink: "#"
//     },
//     {
//         id: "loancore",
//         title: "Taygo™ LoanCore",
//         subtitle: "Loan Management & Tracking System",
//         description: "LoanCore acts as the centralized system of record for all active and closed loans. It tracks milestones, documents, conditions, and status updates across teams, keeping operations aligned and borrowers informed throughout the loan lifecycle.",
//         ctaText: "Learn more",
//         ctaLink: "#"
//     }
// ];

// const MortgageProducts = () => {
//     const data = products;

//     return (
//         <section className="mx-auto xl:max-w-screen-xl px-4 md:px-6 py-16">
//             {/* heading */}
//             <div className="text-center mb-12 max-w-5xl mx-auto">
//                 <h2 className="text-2xl md:text-[2.7rem] font-semibold text-gray-900 mb-6 leading-tight">
//                     Products Built for Modern Mortgage Teams
//                 </h2>
//                 <p className="text-lg md:text-xl font-medium mb-4 text-balance mx-auto text-gray-700">
//                     A unified platform where AI reviews your pipeline, executes follow-ups, and keeps every loan moving forward.
//                 </p>
//             </div>

//             <section className="flex flex-wrap justify-center md:gap-20 gap-5 py-2 my-6 mt-16">
//                 <div className="lg:w-[50%] w-full py-2">
//                     <Accordion type="single" collapsible className="w-full">
//                         {data.map((product) => (
//                             <AccordionItem key={product.id} value={product.id}>
//                                 <AccordionTrigger className="text-[17px] cursor-pointer text-left text-gray-800 hover:no-underline">
//                                     <div>
//                                         <h3 className="font-semibold text-lg">{product.title}</h3>
//                                         <p className="text-sm text-gray-600 font-normal mt-1">{product.subtitle}</p>
//                                     </div>
//                                 </AccordionTrigger>
//                                 <AccordionContent className="text-[16px] text-gray-700 my-6">
//                                     <p className="mb-4 leading-relaxed">{product.description}</p>
//                                     <Link
//                                         href={product.ctaLink}
//                                         className="inline-flex items-center text-btn-green hover:text-btn-green-hover font-semibold transition-colors"
//                                     >
//                                         {product.ctaText}
//                                         <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                         </svg>
//                                     </Link>
//                                 </AccordionContent>
//                             </AccordionItem>
//                         ))}
//                     </Accordion>
//                 </div>

//                 <div className="lg:w-[40%] mt-8 w-full">
//                     <Image
//                         src='https://www.insightly.com/wp-content/uploads/2025/03/Customer-Service-1.png'
//                         width={800}
//                         height={600}
//                         alt="Mortgage Products"
//                     />
//                 </div>
//             </section>
//         </section>
//     );
// };

// export default MortgageProducts;






"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const products = [
    {
        id: "leadflow",
        title: "Taygo™ LeadFlow",
        subtitle: "Mortgage CRM & Lead Automation",
        description: "Capture, organize, and convert every mortgage lead in one system built specifically for loan officers and brokers. LeadFlow centralizes borrower data, automates follow-ups, and ensures no opportunity slips through the cracks. AI reviews your pipeline daily, recommends next steps, and executes approved actions to keep deals moving.",
        ctaText: "Learn more",
        ctaLink: "leadflow",
        image: "https://www.insightly.com/wp-content/uploads/2025/03/Customer-Service-1.png"
    },
    {
        id: "pipelineos",
        title: "Taygo™ PipelineOS",
        subtitle: "Mortgage Pipeline & Refinance Workflow Automation",
        description: "PipelineOS gives lenders full control over purchase and refinance pipelines with automated stage movement, risk detection, and refinance opportunity identification. It monitors pipeline health in real time and proactively resolves stalls, helping teams close faster with greater predictability.",
        ctaText: "Learn more",
        ctaLink: "#",
        image: "https://www.insightly.com/wp-content/uploads/2025/07/ai-fe.png"
    },
    {
        id: "borrowerhub",
        title: "Taygo™ BorrowerHub",
        subtitle: "Mortgage POS & Borrower Portal",
        description: "BorrowerHub delivers a guided, self-service borrower experience from application to closing. A conversational AI assistant helps borrowers complete forms, upload documents, and track loan status—while loan officers see higher completion rates with less manual follow-up.",
        ctaText: "Learn more",
        ctaLink: "#",
        image: "https://www.insightly.com/wp-content/uploads/2025/03/Customer-Service-1.png"
    },
    {
        id: "voiceai",
        title: "Taygo™ VoiceAI",
        subtitle: "AI Call Center & Phone Automation",
        description: "VoiceAI automates inbound and outbound mortgage calls for lead follow-ups, status updates, reminders, and nurture campaigns. It ensures every borrower receives timely communication while freeing loan officers from repetitive calling tasks.",
        ctaText: "Learn more",
        ctaLink: "#",
        image: "https://www.insightly.com/wp-content/uploads/2025/07/ai-fe.png"
    },
    {
        id: "loancore",
        title: "Taygo™ LoanCore",
        subtitle: "Loan Management & Tracking System",
        description: "LoanCore acts as the centralized system of record for all active and closed loans. It tracks milestones, documents, conditions, and status updates across teams, keeping operations aligned and borrowers informed throughout the loan lifecycle.",
        ctaText: "Learn more",
        ctaLink: "#",
        image: "https://www.insightly.com/wp-content/uploads/2025/03/Customer-Service-1.png"
    }
];

const MortgageProducts = () => {
    const [openItem, setOpenItem] = useState(products[0].id);

    const currentProduct = products.find(p => p.id === openItem) || products[0];

    return (
        <section className="mx-auto xl:max-w-screen-xl px-4 md:px-6 py-16">
            {/* heading */}
            <div className="text-center mb-12 max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-[2.7rem] font-semibold text-gray-900 mb-6 leading-tight">
                    Products Built for Modern Mortgage Teams
                </h2>
                <p className="text-lg md:text-xl font-medium mb-4 text-balance mx-auto text-gray-700">
                    A unified platform where AI reviews your pipeline, executes follow-ups, and keeps every loan moving forward.
                </p>
            </div>

            <section className="flex flex-wrap justify-center md:gap-20 gap-5 py-2 my-6 mt-16">
                <div className="lg:w-[45%] w-full py-2">
                    <div className="w-full">
                        {products.map((product) => (
                            <div key={product.id} className="border-b border-gray-200">
                                <button
                                    onClick={() => setOpenItem(openItem === product.id ? "" : product.id)}
                                    className="w-full text-left py-4 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition-colors"
                                >
                                    <div>
                                        <h3 className="font-medium text-xl text-gray-600">{product.title}</h3>
                                    </div>
                                    <ChevronDown 
                                        className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                                            openItem === product.id ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        openItem === product.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="pb-6 pt-2">
                                        <p className="text-gray-700 font-medium mb-3">{product.subtitle}</p>
                                        <p className="mb-4 leading-relaxed text-gray-700">{product.description}</p>
                                        <Link
                                            href={product.ctaLink}
                                            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
                                        >
                                            {product.ctaText}
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:w-[40%] mt-8 w-full flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                        <Image
                            src={currentProduct.image}
                            width={800}
                            height={600}
                            alt={currentProduct.title}
                            className="object-contain transition-opacity duration-300"
                            key={currentProduct.id}
                        />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default MortgageProducts;