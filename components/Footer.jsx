// "use client"

import Link from "next/link"

// import './layout.css'
// import React, { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Youtube, Instagram } from 'lucide-react'

// import indianFlag from "/public/india-flag.svg"
// import { useSubmitContactFormMutation } from '../../../store/api/myApi';

// import bigLogo from "/public/big-logo.png"


const Footer = () => {
    //     const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', activeLead: true });
    //     const [submitContactForm, { isLoading, isSuccess, isError, error }] = useSubmitContactFormMutation();


    // const handleChange = (e) => {
    //     const { id, value } = e.target;

    //     // Validate phone number input to allow only digits and ensure it doesn't exceed 10 characters
    //     if (id === 'phone') {
    //         if (!/^\d*$/.test(value)) return; // Prevent non-digit input
    //         if (value.length > 10) return; // Limit to 10 digits
    //     }

    //     setFormData((prev) => ({ ...prev, [id]: value }));
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // Additional validation to ensure phone number has exactly 10 digits
    //     if (formData.phone.length !== 10) {
    //         alert('Please enter a valid 10-digit phone number.');
    //         return;
    //     }

    //     try {
    //         await submitContactForm(formData).unwrap();
    //         alert('Form submitted successfully!');
    //         setFormData({ name: '', phone: '', email: '', message: '' });
    //         window.location.href = "/thank-you"
    //     } catch (err) {
    //         console.log(err);
    //         alert('Error submitting form: ' + err.data.error);
    //     }
    // };




    return (
        <>

            <footer id='contact-us' className="md:pt-8 pt-0">

                {/* <div className="relative">
                    <div className="flex flex-wrap items-end mx-0">

                        <div className='lg:w-1/2 w-full flex-shrink-0 flex-grow-0 relative'>
                            <div className='footer-left lg:rounded-tr-lg px-8 py-12 lg:px-28 relative'>
                                <div className='z-10 relative'>


                                    <span className='text-white text-3xl block lg:tracking-wide mb-4 text-center font-semibold'>Let&apos;s Talk</span>



                                    <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
                                        {['name', 'phone', 'email', 'message'].map((field) => (
                                            <div key={field}>
                                                <label className="text-white" htmlFor={field}>
                                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                                </label>
                                                {field === 'message' ? (
                                                    <textarea
                                                        id={field}
                                                        placeholder={`Enter your ${field}`}
                                                        value={formData[field]}
                                                        onChange={handleChange}
                                                        className="w-full rounded-lg p-2.5 mt-1"
                                                    />
                                                ) : (
                                                    <input
                                                        id={field}
                                                        type="text"
                                                        placeholder={`Enter your ${field}`}
                                                        value={formData[field]}
                                                        onChange={handleChange}
                                                        className="w-full rounded-lg p-2.5 mt-1"
                                                    />
                                                )}
                                            </div>
                                        ))}

                                        <div>
                                            {isSuccess && <p className="text-white">Form submitted successfully!</p>}
                                            {isError && <p className="text-white">Error: {error?.data?.error || 'Something went wrong'}</p>}
                                            <button
                                                type="submit"
                                                className="text-base mt-4 lg:text-lg tracking-widest border-2 px-6 lg:px-8 py-3 lg:py-3 inline-block duration-200 border-white rounded-lg hover:bg-white text-white hover:text-[#ee076e]"
                                                disabled={isLoading}
                                            >
                                                {isLoading ? 'Submitting...' : 'Submit'}
                                            </button>
                                        </div>
                                    </form>




                                </div>
                            </div>
                        </div>



                        <div className='lg:w-1/2 w-full flex-shrink-0 flex-grow-0 relative'>
                            <div className='footer-right bg-gray900 bg-[#00214E] text-gray-500 py-14 sm:py-20 px-10 lg:px-24'>

                                <div className='flex flex-wrap relative z-10'>

                                    <div className='inne z-10 relative'>
                                        <span className='text-white text-base block lg:tracking-wide'>READY TO DO THIS</span>
                                        <p className='text-5xl text-white lg:text-7xl font-extrabold lg:tracking-wide pr-10 py-6 lg:py-12'>Let&apos;s get to work</p>
                                        <a href="tel:+91-9971544661" className="text-base lg:text-lg tracking-widest border-2 px-4 lg:px-8 py-3 inline-block duration-200 border-white rounded-lg hover:bg-white text-white hover:text-[#ee076e]">
                                            <span className=''>CONTACT US</span>
                                        </a>
                                        <Image className='imgFooterDesign w-24 sm:w-48' src={bigLogo} alt="footer shape image" />
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div> */}

                <div>

                    <div className="sm:py-14 py-8">
                        <div className="container mx-auto px-6 sm:px-24 md:px-32">

                            <div className="border-t border-gray-300 md:px-6 px-2 pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Who we are & Resources Section */}
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-md font-medium mb-4">Who we are</h3>
                                        <ul className="space-y-2 text-gray-400 text-sm">
                                            <li><Link href="/about-us" className="text-gray-600 hover:text-gray-700">About Us</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-md font-medium mb-4">Resources</h3>
                                        <ul className="space-y-2 text-gray-400 text-sm">
                                            <li><Link href="#" className="text-gray-600 hover:text-gray-700">Blog</Link></li>
                                            <li><Link href="#" className="text-gray-600 hover:text-gray-700">Guides</Link></li>
                                            <li><Link href="#" className="text-gray-600 hover:text-gray-700">Case Studies</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Digital Transformation Section */}
                                <div>
                                    <h3 className="text-md font-medium mb-4">Use cases</h3>
                                    <ul className="space-y-2 text-gray-400 text-sm">
                                        <li><Link href="software-development-company-in-india" className="text-gray-600 hover:text-gray-700">UX design</Link></li>
                                        <li><Link href="application-development-company-india" className="text-gray-600 hover:text-gray-700">UX design</Link></li>
                                        <li><Link href="/" className="text-gray-600 hover:text-gray-700">Wireframing</Link></li>
                                        <li><Link href="ecommerce-development-company-india" className="text-gray-600 hover:text-gray-700">Diagramming</Link></li>
                                        <li><Link href="/" className="text-gray-600 hover:text-gray-700">Brainstorming</Link></li>
                                        <li><Link href="hire-dedicated-technical-team-india" className="text-gray-600 hover:text-gray-700">Online whiteboarding</Link></li>
                                    </ul>
                                </div>

                                {/* Industries Section */}
                                <div className='sm:ml-12 ml-0'>
                                    <h3 className="text-md font-medium mb-4">Explore</h3>
                                    <ul className="space-y-2 text-gray-400 text-sm">
                                        <li><div className="text-gray-600 hover:text-gray-700">Design</div></li>
                                        <li><div className="text-gray-600 hover:text-gray-700">Prototyping</div></li>
                                        <li><div className="text-gray-600 hover:text-gray-700">Developement features</div></li>
                                        <li><div className="text-gray-600 hover:text-gray-700">Design systems</div></li>
                                        <li><div className="text-gray-600 hover:text-gray-700">Design process</div></li>
                                        <li><div className="text-gray-600 hover:text-gray-700">FigJam</div></li>
                                    </ul>
                                </div>


                                <div className=''>

                                    <div className="p-3 rounded-lg">
                                        <h4 className="font-semibold text-md mb-2">Social Media</h4>

                                        <div className="flex gap-6 my-4 md:mb-0">
                                            <Link href="https://twitter.com" className="text-gray-600 hover:text-gray-700">
                                                <Twitter className="w-6 h-6" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/company/bunnx/" className="text-gray-600 hover:text-gray-700">
                                                <Linkedin className="w-6 h-6" />
                                            </Link>
                                            <Link href="https://www.facebook.com/Bunnx.official/" className="text-gray-600 hover:text-gray-700">
                                                <Facebook className="w-6 h-6" />
                                            </Link>
                                            <Link href="https://www.instagram.com/bunn_x.official/" className="text-gray-600 hover:text-gray-700">
                                                <Instagram className="w-6 h-6" />
                                            </Link>
                                            <Link href="https://youtube.com" className="text-gray-600 hover:text-gray-700">
                                                <Youtube className="w-6 h-6" />
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="mt-3 pt-3">
                                <div className="flex flex-col md:flex-row justify-between items-center">

                                    <div className="flex gap-4 mb-4 md:mb-0">
                                        <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-700 text-sm">
                                            Privacy Policy
                                        </Link>
                                        <Link href="/terms-conditions" className="text-gray-600 hover:text-gray-700 text-sm">
                                            Terms & Conditions
                                        </Link>
                                    </div>
                                    <div className="text-gray-600 text-sm hover:text-gray-700">
                                        ©2025 Taygo All Rights Reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </footer>
        </>
    )
}

export default Footer




