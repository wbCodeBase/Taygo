import React from 'react'
import Image from 'next/image';

const Features = () => {
    return (
        <>

            <section className="container mx-auto px-4 py-2 md:px-12 md:py-12 lg:px-20 gradient bg-gradient-to-b from-teal-900 via-teal-900 to-emerald-800">

                <div className="text-center my-12 py-6">
                    <h2 className="text-2xl md:text-[2.7rem] font-semibold text-white mb-4 text-balance">
                        Stay engaged without overstaying your welcome
                    </h2>
                    <p className="text-lg md:text-xl font-medium mb-4 text-balance max-w-5xl mx-auto text-gray-100 mb-3">
                        Different borrowers, leads, and partners move on different timelines. Some are ready to act immediately, while others need time, clarity, or reassurance before moving forward. AI Agent Workforce allows you to remain present throughout that journey—without overwhelming contacts or relying on constant manual follow-ups.
                    </p>
                </div>

                <section className='space-y-30'>
                    <div className='grid sm:grid-cols-2 gap-10 grid-cols-1'>

                        <div className="rounded-xl p4 flex justify-center items-center flex-col text-center relative">
                            <Image src="https://cdn.prod.website-files.com/6829b31a722bcd8064fdee21/68638b460c73e152e811bc64_nurture-1-p-1080.webp" className='rounded-xl' alt="component image" width={700} height={700} />
                        </div>


                        <div className="rounded-xl">
                            <h2 className='text-2xl md:text-[2.7rem] font-semibold text-gray-100 mb-3 px-4 mb-10 text-balance'>Support customers throughout their financial journey</h2>


                            <div className='grid gap-4 mt-6 grid-cols-1 px-4 space-y-2'>
                                <div className="border-l border-gray-100 p-4">
                                    <h3 className='font-semibold text-xl my-1 text-gray-100 mb-3'>Personalized journey creator</h3>
                                    <p className='text-sm font-normal text-gray-200'>Use intelligent automation and data insights to tailor your nurture campaigns around specific topics or contact needs.</p>
                                </div>

                                <div className="border-l border-gray-100 p-4">
                                    <h3 className='font-semibold text-xl my-1 text-gray-100 mb-3'>Understand customer intent</h3>
                                    <p className='text-sm font-normal text-gray-200'>Our Customer Intelligence tool captures behavioral data from every interaction to trigger communications with the most relevant message at the most appropriate time.</p>
                                </div>

                                <div className="border-l border-gray-100 p-4">
                                    <h3 className='font-semibold text-xl my-1 text-gray-100 mb-3'>Add a human touch</h3>
                                    <p className='text-sm font-normal text-gray-200'>Personalize at scale by reaching out on behalf of loan officers and relationship managers to provide a more authentic experience.</p>
                                </div>
                            </div>

                        </div>


                    </div>


                    <div className='grid sm:grid-cols-2 gap-10 grid-cols-1'>

                        <div className="rounded-xl">
                            <h2 className='text-2xl md:text-[2.7rem] font-semibold text-gray-100 mb-3 px-4 mb-10 text-balance'>Create impact across every channel</h2>


                            <div className='grid gap-4 mt-6 grid-cols-1 px-4 space-y-2'>
                                <div className="border-l border-gray-100 p-4">
                                    <h3 className='font-semibold text-xl my-1 text-gray-100 mb-3'>Real-time performance</h3>
                                    <p className='text-sm font-normal text-gray-200'>Analyze data in real-time to know which channels and content resonates with what audience, then deploy marketing campaigns to engage contacts on their terms.</p>
                                </div>

                                <div className="border-l border-gray-100 p-4">
                                    <h3 className='font-semibold text-xl my-1 text-gray-100 mb-3'>Any message, any channel</h3>
                                    <p className='text-sm font-normal text-gray-200'>Leverage print, direct mail, email, social, and digital tools to complement in-person engagements and create an elevated customer journey.</p>
                                </div>

                                <div className="border-l border-gray-100 p-4">
                                    <h3 className='font-semibold text-xl my-1 text-gray-100 mb-3'>Empower your teams</h3>
                                    <p className='text-sm font-normal text-gray-200'>Give loan officers and relationship managers the tools they need to communicate at scale—or even execute campaigns on their behalf.</p>
                                </div>
                            </div>

                        </div>


                        <div className="rounded-xl p4 flex justify-center items-center flex-col text-center relative">
                            <Image src="https://cdn.prod.website-files.com/6829b31a722bcd8064fdee21/68638b46ac92446803b1c4a8_nurture-2-p-1080.webp" className='rounded-xl' alt="component image" width={700} height={700} />
                        </div>


                    </div>
                </section>



            </section >
        </>

    )
}

export default Features;