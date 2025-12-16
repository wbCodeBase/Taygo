import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const BorrowerRelationships = () => {

    const mortgageData = [
        {
            id: 1,
            title: "Customer relationship management",
            description: "Relationships win mortgages. LeadFlow makes every borrower interaction consistent, trackable, and timely.",
            imageUrl: "https://www.insightly.com/wp-content/uploads/2025/03/img_01_desktop.png",
            imagePosition: "left",
            features: [
                "Single source of truth for each borrower + co-borrower",
                "One shared timeline across LO/LOA/processor",
                "Borrower updates that reduce inbound \"What's the status?\" calls",
                "Post-close retention workflows for refi and repeat business"
            ],
            ctaText: "Learn more",
            ctaLink: "#"
        },
        {
            id: 2,
            title: "Customizable CRM",
            description: "Every mortgage shop has its own playbook. Configure LeadFlow to match it.",
            imageUrl: "https://www.insightly.com/wp-content/uploads/2025/03/img_02_desktop.png",
            imagePosition: "right",
            features: [
                "Custom fields, layouts, and lead/application forms",
                "Custom pipelines and milestone definitions",
                "Role-based dashboards (LO vs Ops vs Leadership)",
                "No heavy dev work for everyday customization"
            ],
            ctaText: "Learn more",
            ctaLink: "#"
        },
        {
            id: 3,
            title: "Customer email management",
            description: "Make every email easier to track, manage, and act on.",
            imageUrl: "https://www.insightly.com/wp-content/uploads/2025/03/img_03_desktop.png",
            imagePosition: "left",
            features: [
                "Full visibility into borrower email interactions",
                "Pick up the conversation exactly where it left off",
                "Templates for pre-approval, doc requests, rate updates, and follow-ups",
                "Email sync and conversation logging (team-wide transparency)"
            ],
            ctaText: "Learn more",
            ctaLink: "#"
        },
        {
            id: 4,
            title: "Performance dashboards & reporting",
            description: "Create visual dashboards in minutes — and make faster decisions in real time.",
            imageUrl: "https://www.insightly.com/wp-content/uploads/2025/03/img_04_desktop.png",
            imagePosition: "right",
            features: [
                "Lead response speed and SLA tracking",
                "Stage conversion rates (Lead → App → Docs → UW → Close)",
                "LO productivity, contact rate, and pipeline health",
                "Shareable dashboards for leadership and branches"
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
                        Build lasting borrower relationships
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

export default BorrowerRelationships