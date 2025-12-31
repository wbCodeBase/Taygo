
import Link from "next/link"

import { Linkedin, Facebook, Youtube, Instagram } from 'lucide-react'
import taygoLogo from '@/public/logo/taygoLogo.png'
import taygoIcon from '@/public/logo/taygoIcon.png'
import Image from "next/image"
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {


    return (
        <>

            <footer>


                <div className="sm:py-14 py-8">
                    <div className="container mx-auto px-6 sm:px-10">

                        <div className="md:px-6 px-2 pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-16">


                            <div className="space-y-8 col-span-2"> 
                                <div>
                                    <Link href="/"> <Image src={taygoLogo} alt="Taygo Logo" className="w-38 h-auto mb-6" /> </Link>
                                    <p className="text-gray-700 text-xl hover:text-gray-800 font-medium">Ultimate productivity by automating Lead Management, Call System, Web Presence and Customer Communication with TAYGO™.</p>
                                </div>

                                <div>
                                    {/* <h4 className="font-semibold text-lg mb-4">Social Media</h4> */}

                                    <div className="flex gap-6 my-4 md:mb-0">
                                        <Link href="https://www.facebook.com/taygohomeloan" className="text-gray-700 hover:text-gray-800 font-medium">
                                            <Facebook className="w-6 h-6" />
                                        </Link>
                                        <Link href="https://x.com/taygoinc" className="text-gray-700 hover:text-gray-800 font-medium">
                                            <FaXTwitter className="w-6 h-6" />
                                        </Link>
                                        {/* <Link href="#" className="text-gray-700 hover:text-gray-800 font-medium">
                                            <Youtube className="w-6 h-6" />
                                        </Link> */}
                                        <Link href="https://www.linkedin.com/company/taygo/" className="text-gray-700 hover:text-gray-800 font-medium">
                                            <Linkedin className="w-6 h-6" />
                                        </Link>
                                        <Link href="https://www.instagram.com/taygo.inc/" className="text-gray-700 hover:text-gray-800 font-medium">
                                            <Instagram className="w-6 h-6" />
                                        </Link>
                                    </div>

                                </div>

                            </div>



                            {/* Digital Transformation Section */}
                            <div>
                                <h3 className="text-gray-800 text-2xl font-semibold mb-4">On Our Site</h3>
                                <ul className="space-y-4 text-xl">
                                    <li><Link href="https://www.taygo.com/bn/app/contactus-y7f" className="text-gray-700 hover:text-gray-800 font-medium">Contact Us</Link></li>
                                    {/* <li><Link href="#" className="text-gray-700 hover:text-gray-800 font-medium">Support</Link></li> */}
                                    <li><Link href="https://cloud.taygo.com/terms-of-services" className="text-gray-700 hover:text-gray-800 font-medium">Terms of service</Link></li>
                                    <li><Link href="https://cloud.taygo.com/privacy-policy" className="text-gray-700 hover:text-gray-800 font-medium">Privacy Policy</Link></li>

                                </ul>
                            </div>

                            {/* Resources */}
                            <div className='sm:ml-12 ml-0'>
                                <h3 className="text-gray-800 text-2xl font-semibold mb-4">Resources</h3>
                                <ul className="space-y-4 text-xl">
                                    <li><Link href="https://cloud.taygo.com/features" className="text-gray-700 hover:text-gray-800 font-medium">Features</Link></li>
                                    <li><Link href="https://cloud.taygo.com/pricing" className="text-gray-700 hover:text-gray-800 font-medium">Pricing</Link></li>
                                    <li><Link href="#" className="text-gray-700 hover:text-gray-800 font-medium">Blogs</Link></li>
                                </ul>
                            </div>


                            <div className='space-y-8'>

                                <div>
                                    <h3 className="text-gray-800 text-2xl font-semibold mb-4">Contact</h3>
                                    <ul className="space-y-4 text-xl">
                                        <li><Link href="mailto:taygo@taygo.com" className="text-gray-700 hover:text-gray-800 font-medium">taygo@taygo.com</Link></li>
                                        <li><div className="text-gray-700 hover:text-gray-800 font-medium">Silicon Valley, CA</div></li>
                                    </ul>
                                </div>


                            </div>
                        </div>


                        {/* Bottom Section */}
                        <div className="mt-8 pt-3 text-xl">
                            <div className="">

                                <div className="flex justify-center items-center text-gray-700 hover:text-gray-800 gap-3">
                                    <Image src={taygoIcon} alt="Taygo Logo" height={38} width={36} />
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




