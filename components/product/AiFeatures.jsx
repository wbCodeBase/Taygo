import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const AIFeaturesSection = () => {
    return (
        // <section className="bg-[#F5EBE0] py-16">
        <section className="bg-[#006C5D] py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-left">
                        {/* AI Features Badge */}
                        <div className="flex items-center gap-2 mb-6">
                            <Image
                                src="https://www.insightly.com/wp-content/uploads/2025/07/crm-ai-features-icon.svg"
                                alt="AI Features"
                                width={24}
                                height={24}
                            />
                            <span className="text-gray-50 font-semibold text-sm uppercase tracking-wide">
                                AI Features
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-50 mb-6 leading-snug">
                            Smarter mortgage selling starts with AI inside your CRM
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-100 mb-8 leading-relaxed">
                            Boost conversion and CRM adoption with an AI assistant that turns pipeline review into a daily autopilot workflow.
                        </p>



                        {/* Taygo Knowledge Base Section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-50 mb-4">
                                Taygo Knowledge Base
                            </h3>
                            <p className="text-md text-gray-100 mb-4 font-medium">
                                What your AI assistant does (LeadFlow AI Workforce)
                            </p>

                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-50 rounded-full flex-shrink-0 mt-2"></span>
                                    <p className="text-gray-100">
                                        Name your assistant as you wish ("Lisa", "Laura", etc.) 
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-50 rounded-full flex-shrink-0 mt-2"></span>
                                    <p className="text-gray-100">
                                        Zero-touch pipeline resolution: identifies pipeline problems + fixes them after approval 
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-50 rounded-full flex-shrink-0 mt-2"></span>
                                    <p className="text-gray-100">
                                        POS Application Shepherd: guides borrowers to complete applications with less LO effort 
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-50 rounded-full flex-shrink-0 mt-2"></span>
                                    <p className="text-gray-100">
                                        Instant file summary everywhere: next steps, risks, and automation suggestions 
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-50 rounded-full flex-shrink-0 mt-2"></span>
                                    <p className="text-gray-100">
                                        Partner auto-update engine: keeps Realtors updated automatically 
                                    </p>
                                </li>
                            </ul>
                        </div>



                        {/* CTA Link */}
                        <Link
                            href="#"
                            className="inline-flex items-center text-lg font-semibold text-white transition-colors"
                        >
                            Learn more
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center items-center">
                        <Image
                            src="https://www.insightly.com/wp-content/uploads/2025/07/CRM-AI-FEATURES.png"
                            alt="AI Features Demo"
                            width={600}
                            height={500}
                            className="w-full h-auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AIFeaturesSection