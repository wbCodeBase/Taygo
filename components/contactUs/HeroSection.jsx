"use client"

import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';
// import { useSubmitContactFormMutation } from '#/store/api/myApi';

// import clutch from "/public/certification/clutch.svg";
// import androidEnterprise from "/public/certification/androidEnterprise.svg";
// import awsPartner from "/public/certification/aws-partner.png";
// import goodFirm from "/public/certification/goodFirm.svg";
// import MicrosoftMin from "/public/certification/Microsoft-min.png";
// import googlePartner from "/public/certification/googlePartner.png";
import Image from 'next/image';
import SalesContactForm from './Form';

const HeroSection = () => {

    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', activeLead: true });
    // const [submitContactForm, { isLoading, isSuccess, isError, error }] = useSubmitContactFormMutation();


    const handleChange = (e) => {
        const { id, value } = e.target;

        // Validate phone number input to allow only digits and ensure it doesn't exceed 10 characters
        if (id === 'phone') {
            if (!/^\d*$/.test(value)) return; // Prevent non-digit input
            if (value.length > 10) return; // Limit to 10 digits
        }

        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Additional validation to ensure phone number has exactly 10 digits
        if (formData.phone.length !== 10) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        try {
            // await submitContactForm(formData).unwrap();
            setFormData({ name: '', phone: '', email: '', message: '' });
            alert('Form submitted successfully!');
            window.location.href = "/thank-you"
        } catch (err) {
            console.log(err);
            alert('Error submitting form: ' + err.data.error);
        }
    };



    return (<>

        <div className="relative bg-gray-50 md:p-10 lg:py20">
            <div className="flex flex-wrap max-w-7xl mx-auto lg:flex-nowrap flex-col lg:flex-row">

                {/* <div className='lg:w-3/5 w-full border'> */}
                <div className='lg:w-1/2 w-full h-full relative text-gray-800 '>

                    <div className='flex flex-wrap z-10 mt-8 h-full '>
                        <div className='z-10 w-full'>
                            <span className=' text-base block lg:tracking-wide text-teal-600'>WE ARE HERE FOR YOU</span>
                            <h1 className='text-2xl lg:text-5xl font-bold lg:tracking-wide py-6'>
                                Talk with our sales team to see how TAYGO™ can fit your needs
                            </h1>
                            <p className='lg:text-lg text-md mb-6 font-medium'>
                                Talk with our sales team to see how TAYGO™ can fit your needs
                            </p>

                            <button className="flex items-center justify-center sm:justify-start">
                                <Link href="#" className='flex items-center group transition-all duration-300 justify-center gap-1 border-2 hover:bg-teal-500 border-teal-500 p-1 pr-3 font-medium text-lg rounded-full my-2 '>
                                    <span className='bg-white rounded-full p-3 text-teal-500 hover:text-white vibrating-icon'>
                                        <FaPhoneAlt size="1.2em" />
                                    </span>
                                    <span className="text-teal-500 group-hover:text-white transition-all duration-300 ml-1"> Contact Us </span>
                                </Link>
                            </button>

                        </div>

                        {/* <div className='mt-6 w-full'>

                                <span className=''> Awards & Certifications </span>

                                <div className='flex flex-wrap gap-6 justify-around items-center mt-4 border border-white bg-white p-1 rounded-lg'>
                                    <Image src={clutch} className='sm:w-24 w-20 h-auto' alt="Clutch icon" />
                                    <Image src={androidEnterprise} className='sm:w-24 w-20 h-auto' alt="Android Enterprise icon" />
                                    <Image src={awsPartner} className='sm:w-24 w-20 h-auto' alt="awsPartner icon" />
                                    <Image src={goodFirm} className='sm:w-24 w-20 h-auto' alt="goodFirm icon" />
                                    <Image src={MicrosoftMin} className='sm:w-24 w-20 h-auto' alt="MicrosoftMin icon" />
                                    <Image src={googlePartner} className='sm:w-24 w-20 h-auto' alt="MicrosoftMin icon" />
                                </div>

                            </div> */}

                    </div>

                </div>
                {/* </div> */}


                {/* 2nd half */}


                {/* <div className='lg:w-2/5 w-full flex-shrink-0 flex-grow-0 relative border'> */}
                <div className='relative lg:w-1/2 w-full borde'>
                    <div className='z-10 relative  p6'>

                        {/* <span className=' text-xl block lg:tracking-wide mb-2 text-teal-600 text-center font-semibold'>Contact our sales team</span>
                        <form onSubmit={handleSubmit} className="flex gap-4 flex-col border border-gray-300 bg-white max-w-md mx-auto sm:p-8 mt-8 rounded-lg">
                            {['name', 'phone', 'email', 'message'].map((field) => (
                                <div key={field}>
                                    <label className="" htmlFor={field}>
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    {field === 'message' ? (
                                        <textarea
                                            id={field}
                                            placeholder={`Enter your ${field}`}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            className="w-full rounded-lg p-2.5 px-4 mt-1 border border-gray-300"
                                        />
                                    ) : (
                                        <input
                                            id={field}
                                            type="text"
                                            placeholder={`Enter your ${field}`}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            className="w-full rounded-lg p-2.5 px-4 mt-1 border border-gray-300"
                                        />
                                    )}
                                </div>
                            ))}

                            <div className='flex justify-center flex-col'>
                                <button
                                    type="submit"
                                    className="text-base mt-4 lg:text-lg bg-btn-green hover:border-btn-green text-white tracking-widest border-2 px-6 lg:px-8 py-3 lg:py-3 inline-block duration-200 border-white rounded-lg cursor-pointer hover:bg-white  hover:text-btn-green"
                                >
                                    Submit
                                </button>

                            </div>
                        </form> */}

                       <SalesContactForm />

                    </div>
                </div>
                {/* </div> */}


            </div>
        </div>





    </>
    )
}

export default HeroSection