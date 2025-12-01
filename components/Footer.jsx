
import Link from "next/link"

import { Linkedin, Facebook, Youtube, Instagram } from 'lucide-react'
import whiteLogo from '@/public/logo/TaygoLogoWhite.svg'
import whiteLogoRound from '@/public/logo/whiteRoundLogo.png'
import Image from "next/image"
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {


    return (
        <>

            <footer className="bg-[#2b3754] text-gray-100">


                <div className="sm:py-14 py-8">
                    <div className="container mx-auto px-6 sm:px-24 md:px-28">

                        <div className="md:px-6 px-2 pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-16">


                            <div className="space-y-8 col-span-2">
                                <div>
                                   <Link href="/"> <Image src={whiteLogo} alt="Taygo Logo" className="w-32 h-auto mb-4" /> </Link>
                                    <p className="text-md text-gray-300">Ultimate productivity by automating Lead Management, Call System, Web Presence and Customer Communication with TAYGO™.</p>
                                </div>

                                <div>
                                    {/* <h4 className="font-semibold text-lg mb-4">Social Media</h4> */}

                                    <div className="flex gap-6 my-4 md:mb-0">
                                        <Link href="https://www.facebook.com/taygohomeloan" className="text-gray-300 hover:text-white">
                                            <Facebook className="w-6 h-6" />
                                        </Link>
                                        <Link href="https://x.com/taygoinc" className="text-gray-300 hover:text-white">
                                            <FaXTwitter className="w-6 h-6" />
                                        </Link>
                                        {/* <Link href="#" className="text-gray-300 hover:text-white">
                                            <Youtube className="w-6 h-6" />
                                        </Link> */}
                                        <Link href="https://www.linkedin.com/company/taygo/" className="text-gray-300 hover:text-white">
                                            <Linkedin className="w-6 h-6" />
                                        </Link>
                                        <Link href="https://www.instagram.com/taygo.inc/" className="text-gray-300 hover:text-white">
                                            <Instagram className="w-6 h-6" />
                                        </Link>
                                    </div>

                                </div>

                            </div>



                            {/* Digital Transformation Section */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4">On Our Site</h3>
                                <ul className="space-y-2 text-md">
                                    <li><Link href="https://www.taygo.com/bn/app/contactus-y7f" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                                    <li><Link href="#" className="text-gray-300 hover:text-white">Support</Link></li>
                                    <li><Link href="#" className="text-gray-300 hover:text-white">Terms & Conditions</Link></li>
                                </ul>
                            </div>

                            {/* Industries Section */}
                            <div className='sm:ml-12 ml-0'>
                                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                                <ul className="space-y-2 text-md">
                                    <li><Link href="https://cloud.taygo.com/features" className="text-gray-300 hover:text-white">Features</Link></li>
                                    <li><Link href="https://cloud.taygo.com/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
                                    <li><Link href="#" className="text-gray-300 hover:text-white">Blogs</Link></li>
                                    <li><Link href="#" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                                </ul>
                            </div>


                            <div className='space-y-8'>

                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                                    <ul className="space-y-2 text-md">
                                        <li><Link href="mailto:taygo@taygo.com" className="text-gray-100 hover:text-white">taygo@taygo.com</Link></li>
                                        <li><div className="text-gray-100 hover:text-white">Silicon Valley, CA</div></li>
                                    </ul>
                                </div>


                            </div>
                        </div>


                        {/* Bottom Section */}
                        <div className="mt-8 pt-3 text-md">
                            <div className="">

                                <div className="flex justify-center items-center text-gray-100 hover:text-white gap-3">
                                    <Image src={whiteLogoRound} alt="Taygo Logo" height={38} width={36} />
                                    ©{new Date().getFullYear()} TAYGO™.  All Rights Reserved.
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




