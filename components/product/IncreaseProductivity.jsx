import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const IncreaseProductivity = () => {
    const mortgageData = [
        {
            id: 1,
            title: "Business workflow & process automation",
            description: "Automate repetitive work so LOs and ops teams can focus on decisions and relationships.",
            imageUrl: "https://www.insightly.com/wp-content/uploads/2025/03/img_03_desktop.png",
            imagePosition: "left",
            features: [
                "Auto-follow-ups (email/SMS/voice) based on borrower behavior",
                "Auto-tasks for missing docs, verification steps, and milestones",
                "Reduce human error with consistent rules and stage gates",
                "Faster pipeline movement with fewer manual handoffs"
            ],
            ctaText: "Learn more",
            ctaLink: "#"
        },
        {
            id: 2,
            title: "Validation rules & advanced permissions",
            description: "Preserve data integrity, reduce compliance risk, and keep teams aligned.",
            imageUrl: "https://www.insightly.com/wp-content/uploads/2025/03/img_04_desktop.png",
            imagePosition: "right",
            features: [
                "Required fields by stage (e.g., before \"Submit to UW\")",
                "Role-based access (LO / LOA / Processor / Manager)",
                "Audit-friendly history of changes and activities",
                "Standardize best practices across branches"
            ],
            ctaText: "Learn more",
            ctaLink: "#"
        }
    ];

    return (
        <>
            <section className="mx-auto px-4 md:px-6 md:py-16 py-10">
                {/* heading */}
                <div className="text-center mb-12 max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-[2.7rem] font-semibold text-gray-900 mb-6 leading-tight">
                        Increase productivity
                    </h2>
                </div>

                <section className='md:space-y-20 space-y-10'>
                    {mortgageData.map((item) => (
                        <div 
                            key={item.id} 
                            className='grid max-w-7xl mx-auto sm:grid-cols-2 gap-10 grid-cols-1'
                        >
                            {/* Conditionally render image on left or right based on imagePosition */}
                            {item.imagePosition === "left" && (
                                <div className="rounded-xl flex justify-center items-center flex-col text-center relative">
                                    <Image 
                                        src={item.imageUrl} 
                                        className='rounded-xl' 
                                        alt={item.title} 
                                        width={600} 
                                        height={460} 
                                    />
                                </div>
                            )}

                            <div className="rounded-xl px4">
                                <h2 className='font-medium sm:text-3xl mt-5 text-2xl text-gray-900 my-2'>
                                    {item.title}
                                </h2>
                                <p className='text-md text-gray-800 my-8'>
                                    {item.description}
                                </p>

                                <ul className='mt-6 space-y-4 px-4'>
                                    {item.features.map((feature, index) => (
                                        <li key={index} className='flex items-center gap-3'>
                                            <span className='w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0'></span>
                                            <p className='text-gray-800 font-medium'>{feature}</p>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href={item.ctaLink}
                                    className="inline-flex text-lg mt-5 px-5 items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
                                >
                                    {item.ctaText}
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>

                            {/* Conditionally render image on right if imagePosition is "right" */}
                            {item.imagePosition === "right" && (
                                <div className="rounded-xl flex justify-center items-center flex-col text-center relative">
                                    <Image 
                                        src={item.imageUrl} 
                                        className='rounded-xl' 
                                        alt={item.title} 
                                        width={600} 
                                        height={460} 
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </section>
            </section>
        </>
    )
}

export default IncreaseProductivity