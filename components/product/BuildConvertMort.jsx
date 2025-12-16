import React from 'react'
import Image from 'next/image';
import { MdShield } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import Link from 'next/link';

const BuildConvertMort = () => {
    return (
        <>

            <section className="mx-auto px-4 md:px-6 md:py-16 py-10">


                {/* heading */}
                <div className="text-center mb-12 max-w-5xl mx-auto">
                    <h2 className="text-2xl md:text-[2.7rem] font-semibold text-gray-900 mb-6 leading-tight">
                        Build and convert mortgage pipeline
                    </h2>
                    {/* <p className="text-lg md:text-xl font-medium mb-4 text-balance mx-auto text-gray-700">
                        Explore how TAYGO™ unites CRM, LOS, Automation, Marketing, and Integrations to simplify every part of your mortgage business.
                    </p> */}
                </div>

                <section className='md:space-y-20 space-y-10'>

                    <div className='grid max-w-7xl mx-auto sm:grid-cols-2 gap-10 grid-cols-1'>


                        <div className="borde rounded-xl p4 flex justify-center items-center flex-col text-center relative">
                            <Image src='https://www.insightly.com/wp-content/uploads/2025/03/img_01_desktop.png' className='rounded-xl' alt="component image" width={600} height={460} />
                        </div>


                        <div className="rounded-xl px4">
                            <h2 className='font-medium sm:text-3xl mt-5 text-2xl text-gray-900 my-2'>Sales pipeline & lead management </h2>
                            <p className='text-md text-gray-800 my-8'>Start acting on leads the moment they arrive — and keep every opportunity moving.</p>


                            {/* <div className='grid gap-4 mt-6 grid-cols-1 px-4'>
                            <div className="">
                                <p className='text-gray-800 font-medium'>Ensure functionality with robust and precise test cases.</p>
                            </div>
                            <hr />
                            <div className="">
                                <p className='text-gray-800 font-medium'>Enhance code quality through meticulous peer reviews.</p>
                            </div>
                            <hr />

                            <div className="">
                                <p className='text-gray-800 font-medium'>Measure and improve software standards with key insights.</p>
                            </div>
                        </div> */}

                            <ul className='mt-6 space-y-4 px-4'>
                                <li className='flex items-center gap-3'>
                                    <span className='w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0'></span>
                                    <p className='text-gray-800 font-medium'>Capture and unify leads from forms, referrals, campaigns, and partners</p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <span className='w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0'></span>
                                    <p className='text-gray-800 font-medium'>Auto-assign leads by location, loan type, language, or availability</p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <span className='w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0'></span>
                                    <p className='text-gray-800 font-medium'>Real-time view of every lead stage, next step, and SLA risk</p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <span className='w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0'></span>
                                    <p className='text-gray-800 font-medium'>One timeline for calls, texts, emails, notes, and documents</p>
                                </li>
                            </ul>

                            <Link
                                href="#"
                                className="inline-flex text-lg mt-5 px-5 items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
                            >
                                Learn more
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>

                            {/* <div>

                        </div> */}

                        </div>


                    </div>


                    <div className='grid max-w-7xl mx-auto sm:grid-cols-2 gap-10 grid-cols-1'>


                        <div className="rounded-xl px4">
                            <h2 className='font-medium sm:text-3xl mt-5 text-2xl text-gray-900 my-2'>Sales pipeline & lead management </h2>
                            <p className='text-md text-gray-800 my-8'>Start acting on leads the moment they arrive — and keep every opportunity moving.</p>


                            <ul className='mt-6 space-y-4 px-4'>
                                <li className='flex items-center gap-3'>
                                    <span className='w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0'></span>
                                    <p className='text-gray-800 font-medium'>Capture and unify leads from forms, referrals, campaigns, and partners</p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <span className='w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0'></span>
                                    <p className='text-gray-800 font-medium'>Auto-assign leads by location, loan type, language, or availability</p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <span className='w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0'></span>
                                    <p className='text-gray-800 font-medium'>Real-time view of every lead stage, next step, and SLA risk</p>
                                </li>
                                <li className='flex items-center gap-3'>
                                    <span className='w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0'></span>
                                    <p className='text-gray-800 font-medium'>One timeline for calls, texts, emails, notes, and documents</p>
                                </li>
                            </ul>

                            <Link
                                href="#"
                                className="inline-flex text-lg mt-5 px-5 items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
                            >
                                Learn more
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>

                            {/* <div>

                        </div> */}

                        </div>

                        <div className="borde rounded-xl p4 flex justify-center items-center flex-col text-center relative">
                            <Image src='https://www.insightly.com/wp-content/uploads/2025/03/img_01_desktop.png' className='rounded-xl' alt="component image" width={600} height={460} />
                        </div>



                    </div>
                </section>

            </section>
        </>

    )
}

export default BuildConvertMort