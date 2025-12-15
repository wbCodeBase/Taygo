"use client";

import * as React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const products = [
    {
        id: "leadflow",
        title: "Taygo™ LeadFlow",
        subtitle: "Mortgage CRM & Lead Automation",
        description: "Capture, organize, and convert every mortgage lead in one system built specifically for loan officers and brokers. LeadFlow centralizes borrower data, automates follow-ups, and ensures no opportunity slips through the cracks. AI reviews your pipeline daily, recommends next steps, and executes approved actions to keep deals moving.",
        ctaText: "Learn more",
        ctaLink: "leadflow"
    },
    {
        id: "pipelineos",
        title: "Taygo™ PipelineOS",
        subtitle: "Mortgage Pipeline & Refinance Workflow Automation",
        description: "PipelineOS gives lenders full control over purchase and refinance pipelines with automated stage movement, risk detection, and refinance opportunity identification. It monitors pipeline health in real time and proactively resolves stalls, helping teams close faster with greater predictability.",
        ctaText: "Learn more",
        ctaLink: "#"
    },
    {
        id: "borrowerhub",
        title: "Taygo™ BorrowerHub",
        subtitle: "Mortgage POS & Borrower Portal",
        description: "BorrowerHub delivers a guided, self-service borrower experience from application to closing. A conversational AI assistant helps borrowers complete forms, upload documents, and track loan status—while loan officers see higher completion rates with less manual follow-up.",
        ctaText: "Learn more",
        ctaLink: "#"
    },
    {
        id: "voiceai",
        title: "Taygo™ VoiceAI",
        subtitle: "AI Call Center & Phone Automation",
        description: "VoiceAI automates inbound and outbound mortgage calls for lead follow-ups, status updates, reminders, and nurture campaigns. It ensures every borrower receives timely communication while freeing loan officers from repetitive calling tasks.",
        ctaText: "Learn more",
        ctaLink: "#"
    },
    {
        id: "loancore",
        title: "Taygo™ LoanCore",
        subtitle: "Loan Management & Tracking System",
        description: "LoanCore acts as the centralized system of record for all active and closed loans. It tracks milestones, documents, conditions, and status updates across teams, keeping operations aligned and borrowers informed throughout the loan lifecycle.",
        ctaText: "Learn more",
        ctaLink: "#"
    }
];

const MortgageProducts = () => {
    const data = products;

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
                <div className="lg:w-[50%] w-full py-2">
                    <Accordion type="single" collapsible className="w-full">
                        {data.map((product) => (
                            <AccordionItem key={product.id} value={product.id}>
                                <AccordionTrigger className="text-[17px] cursor-pointer text-left text-gray-800 hover:no-underline">
                                    <div>
                                        <h3 className="font-semibold text-lg">{product.title}</h3>
                                        <p className="text-sm text-gray-600 font-normal mt-1">{product.subtitle}</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="text-[16px] text-gray-700 my-6">
                                    <p className="mb-4 leading-relaxed">{product.description}</p>
                                    <Link 
                                        href={product.ctaLink} 
                                        className="inline-flex items-center text-btn-green hover:text-btn-green-hover font-semibold transition-colors"
                                    >
                                        {product.ctaText} 
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="lg:w-[40%] w-full">
                    <Image 
                        src='https://www.insightly.com/wp-content/uploads/2025/03/CRM-Software-1.png' 
                        width={800} 
                        height={600}
                        alt="Mortgage Products"
                    />
                </div>
            </section>
        </section>
    );
};

export default MortgageProducts;








// "use client";

// import * as React from "react";
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion";
// import Image from "next/image";
// // import { createLinkedContent } from '#/utils/LinkBuilder';


// // const keywordToSlug = {
// //     "outsourcing software development": "it-outsourcing-services",
// //     "custom application development company": "custom-software-development-services",
// //     "white-label software development services": "it-outsourcing-services",
// //     "Front-End Development companies": "front-end-development-services-india",
// //     "Front-End Development company": "front-end-development-services-india",
// //     "back-end development agency": "back-end-development-services-india",
// //     "software development services": "software-development-company-in-india",
// //     "custom software consulting services": "software-consulting-services-india",
// //     "IT consulting services India": "it-consulting-services-india",
// //     "CRM software developers company": "crm-software-development-company-india",
// // };


// const products = [

//     {
//         id: "default-2",
//         question: "Why Choose Bunnx for Software Engineering, Consulting, and Outsourcing?",
//         answer: {
//             type: "list",
//             para: "Bunnx offers a highly skilled team dedicated to delivering quality software solutions. Here’s why we stand out:",
//             content: [
//                 "Over 675 developers capable of handling complex projects.",
//                 "Expertise across a wide range of technologies.",
//                 "Known for delivering high-standard, reliable work.",
//                 "Experience across diverse sectors, bringing valuable insights."
//             ]
//         }
//     },
//     {
//         id: "default-1",
//         question: "How much does it cost to outsource software development to India?",
//         answer: {
//             type: "text",
//             content: "The cost of outsourcing software development to India varies based on the project scope, application complexity, and specific needs—like features, integrations, APIs, animations, localization, backend requirements, cross-platform support, and more. If you share a general idea of your project, we’ll gladly provide you with an estimated timeline and cost tailored to your goals."
//         }
//     },


//     {
//         id: "default-8",
//         question: "I want to outsource software development. What engagement options do you offer?",
//         answer: {
//             type: "paragraph",
//             headPara: "At Bunnx, we offer a variety of engagement models to suit your specific project requirements. Whether you need a dedicated team of coders for an ongoing project or just a few extra hands for a one-off task, we have an engagement model that will fit your needs.",
//             content: [
//                 { title: "Dedicated Team", para: "Dedicated team model comprises a PM, SW Engineer, QA Engineer, and other roles defined for each specific project." },
//                 { title: "Staff Augmentation", para: "We provide extra talent to boost your specific projects. This extended team works as a part of your local team, attending your daily meetings and reporting directly to your manager." },
//                 { title: "Offshore Development Center", para: "We also provide a dedicated software development office with all required infrastructure and employees in India. Our ODC model helps you save budget and speed up development, recruiting, and optimizing accounting and HR." },
//             ]
//         }
//     },

// ]



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
//                         {data.map((faq) => (
//                             <AccordionItem key={faq.id} value={faq.id}>
//                                 <AccordionTrigger className="text-[17px] text-left text-gray-800 hover:no-underline">
//                                     {faq.question || "No question available"}
//                                 </AccordionTrigger>
//                                 <AccordionContent className="text-[16px] text-gray-700 my-6">

//                                     {faq.answer?.type === "text" && faq.answer?.content && (
//                                         <p>{faq?.answer?.content}</p>
//                                     )}

//                                     {faq.answer?.type === "paragraph" && Array.isArray(faq.answer.content) && (
//                                         <>
//                                             {faq.answer.headPara && (
//                                                 <p className="mb-3">{faq.answer.headPara}</p>
//                                             )}

//                                             {faq.answer.content.map((item, index) => (
//                                                 <div key={index} className="mb-4 flex">
//                                                     {item.para && item.title && <p> <strong>{item.title}:</strong> {item.para}</p>}
//                                                 </div>
//                                             ))}

//                                         </>


//                                     )}

//                                     {faq.answer?.type === "list" && (
//                                         <>
//                                             {/* Optional paragraph before the list */}
//                                             {faq.answer.para && (
//                                                 <p className="mb-3">{faq.answer.para}</p>
//                                             )}
//                                             {/* List content */}
//                                             {Array.isArray(faq.answer.content) && (
//                                                 <ul className='list-disc mt-6 list-inside space-y-2'>
//                                                     {faq.answer.content.map((item, index) => (
//                                                         <li key={index}>{item}</li>
//                                                     ))}
//                                                 </ul>
//                                             )}
//                                         </>
//                                     )}

//                                 </AccordionContent>
//                             </AccordionItem>
//                         ))}
//                     </Accordion>
//                 </div>


//                 <div className="lg:w-[40%] w-full">

//                     <Image src='https://www.insightly.com/wp-content/uploads/2025/03/CRM-Software-1.png' width={800} height={600} />

//                 </div>

//             </section>
//         </section>
//     );
// };

// export default MortgageProducts;
