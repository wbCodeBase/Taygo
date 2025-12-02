import React from 'react'
import TechStackMarquee from '@/components/home/TechStackMarquee';
// import { AiOutlineStar } from "react-icons/ai";



const TechStackExpertise = () => {
    return (
        <>

            <section className="container mx-auto max-w-5xl xl:max-w-7xl px-4 md:px-6 py-16">

                {/* heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 text-balance">
                        Your AI agent works wherever your data lives
                    </h2>
                    <p className="text-base md:text-lg font-medium mb-4 text-balance max-w-5xl mx-auto text-gray-700">
                        Integrated with top mortgage platforms for smooth, automated workflows.
                    </p>
                </div>

                <section className="flex items-center justify-center py-2 mt-6">

                    <TechStackMarquee />

                </section>

            </section>

        </>
    )
}

export default TechStackExpertise;



