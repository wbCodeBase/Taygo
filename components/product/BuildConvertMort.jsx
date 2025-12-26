import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const BuildConvertMort = ({ features, sectionTitle = "Build and convert mortgage pipeline" }) => {
    return (
        <>
            <section className="mx-auto px-4 md:px-6 md:py-16 py-10">
                {/* heading */}
                <div className="text-center mb-12 max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-[2.7rem] font-semibold text-gray-900 mb-6 leading-tight">
                        {sectionTitle}
                    </h2>
                </div>

                <section className='md:space-y-20 space-y-10'>
                    {features.map((feature, index) => (
                        <div 
                            key={feature.id} 
                            className={`grid max-w-7xl mx-auto sm:grid-cols-2 gap-10 grid-cols-1 ${
                                index % 2 === 1 ? 'sm:grid-flow-dense' : ''
                            }`}
                        >
                            {/* Image - Left on even index, Right on odd index */}
                            <div 
                                className={`borde rounded-xl p4 flex justify-center items-center flex-col text-center relative ${
                                    index % 2 === 1 ? 'sm:col-start-2' : ''
                                }`}
                            >
                                {feature.image ? (
                                    <Image 
                                        src={feature.image} 
                                        className='rounded-xl' 
                                        alt={feature.title} 
                                        width={600} 
                                        height={460} 
                                    />
                                ) : (
                                    <div className="w-full aspect-video bg-gradient-to-br from-teal-50 to-purple-50 rounded-xl flex items-center justify-center">
                                        <p className="text-gray-400 text-lg">{feature.title}</p>
                                    </div>
                                )}
                            </div>

                            {/* Content - Right on even index, Left on odd index */}
                            <div 
                                className={`rounded-xl px4 ${
                                    index % 2 === 1 ? 'sm:col-start-1 sm:row-start-1' : ''
                                }`}
                            >
                                <h2 className='font-medium sm:text-3xl mt-5 text-2xl text-gray-900 my-2'>
                                    {feature.title}
                                </h2>
                                <p className='text-md text-semibold text-gray-800 my-2'>
                                    {feature.headline}
                                </p>
                                <p className='text-md text-gray-800 my-4'>
                                    {feature.body}
                                </p>

                                <ul className='mt-6 space-y-4 px-4'>
                                    {feature.bullets.map((bullet, bulletIndex) => (
                                        <li key={bulletIndex} className='flex items-center gap-3'>
                                            <span className='w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0'></span>
                                            <p className='text-gray-800 font-medium'>{bullet}</p>
                                        </li>
                                    ))}
                                </ul>

                                {feature.cta && (
                                    <Link
                                        href={feature.cta.link}
                                        className="inline-flex text-lg mt-5 px-5 items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
                                    >
                                        {feature.cta.text}
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        </>
    )
}

export default BuildConvertMort