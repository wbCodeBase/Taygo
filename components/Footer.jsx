// components/Footer.tsx - Compact Version
import Link from "next/link"
import Image from "next/image"
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6"
import { FaLinkedinIn } from "react-icons/fa";
import taygoLogo from '@/public/logo/taygoLogo.png'
// import taygoIcon from '@/public/logo/taygoIcon.png'

const Footer = () => {
    return (
        <footer className="bg-white border-t pt-10 border-gray-200">
            <div className="container mx-auto px-6 sm:px-10 py-12 md:px-20">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:px-10 gap-8 lg:gap-10 mb20">

                    {/* Product */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-6">Product</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/crm" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">CRM</Link></li>
                            <li><Link href="/marketing" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Marketing Automation</Link></li>
                            <li><Link href="/appconnect" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">AppConnect</Link></li>
                            <li><Link href="/support" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Support & Ticketing</Link></li>
                            <li><Link href="/integrations" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Integrations</Link></li>
                            <li><Link href="/compare" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Compare CRMs</Link></li>
                            <li><Link href="https://cloud.taygo.com/features" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">All Features</Link></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-6">Solutions</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/consulting" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Consulting</Link></li>
                            <li><Link href="/finance" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Finance</Link></li>
                            <li><Link href="/healthcare" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Healthcare</Link></li>
                            <li><Link href="/manufacturing" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Manufacturing</Link></li>
                            <li><Link href="/professional-services" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Professional Services</Link></li>
                            <li><Link href="/solar" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Solar</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-6">Company</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/corporate" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Corporate</Link></li>
                            <li><Link href="/about" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">About Us</Link></li>
                            <li><Link href="/careers" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Careers</Link></li>
                            <li><Link href="/partners" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Partners</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-6">Resources</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/onboarding" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Guided Onboarding</Link></li>
                            <li><Link href="/support-plans" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Support & Success</Link></li>
                            <li><Link href="/training" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">CRM Training</Link></li>
                            <li><Link href="/resources" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Resources Center</Link></li>
                            <li><Link href="/stories" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Customer Stories</Link></li>
                            <li><Link href="/switch" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Switch from Salesforce</Link></li>
                            <li><Link href="https://cloud.taygo.com/pricing" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Pricing</Link></li>
                        </ul>
                    </div>


                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-6">Get in Touch</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="https://www.taygo.com/bn/app/contactus-y7f" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Contact</Link></li>
                            <li><Link href="/support" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">Support</Link></li>
                            <li>
                                <Link href="mailto:taygo@taygo.com" className="text-gray-600 hover:text-gray-800 font-medium text-[16px]">
                                    taygo@taygo.com
                                </Link>
                            </li>
                            <li className="text-gray-600">Silicon Valley, CA</li>
                        </ul>
                    </div>

                </div>


                <div className="mt-16">
                    <div className="flex px-10 items-center justify-center gap-16">
                        {/* Left Line */}
                        <div className="flex-1 h-px bg-gray-200"></div>

                        {/* Logo */}
                        <Link href="/" className="shrink-0">
                            <Image
                                src={taygoLogo}
                                alt="Taygo Logo"
                                width={134}
                                height={48}
                                className="h-10 w-auto hover:opacity-80 transition-opacity"
                            />
                        </Link>

                        {/* Right Line */}
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>
                </div>


                {/* Bottom Bar */}
                <div className="bordert border-gray-200 mt-2 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">


                        {/* Copyright */}
                        <div className="text-lg font-medium text-gray-600">
                            © {new Date().getFullYear()} TAYGO™. All Rights Reserved.
                        </div>

                        {/* Social Icons */}
                        {/* Social Icons with Brand Colors */}
                        <div className="flex items-center gap-3">
                            {/* Facebook - Blue */}
                            <Link
                                href="https://www.facebook.com/taygohomeloan"
                                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-[#1877F2] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="w-5 h-5" />
                            </Link>

                            {/* Twitter/X - Black */}
                            <Link
                                href="https://x.com/taygoinc"
                                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-black text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200"
                                aria-label="Twitter"
                            >
                                <FaXTwitter className="w-5 h-5" />
                            </Link>

                            {/* LinkedIn - Blue */}
                            <Link
                                href="https://www.linkedin.com/company/taygo/"
                                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-[#0A66C2] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn className="w-5 h-5" />
                            </Link>

                            {/* Instagram - Gradient */}
                            <Link
                                href="https://www.instagram.com/taygo.inc/"
                                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gradient-to-tr hover:from-[#FEDA75] hover:via-[#FA7E1E] hover:to-[#D62976] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200"
                                aria-label="Instagram"
                            >
                                <AiFillInstagram className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer




















// import Link from "next/link"

// import { Linkedin, Facebook, Youtube, Instagram } from 'lucide-react'
// import taygoLogo from '@/public/logo/taygoLogo.png'
// import taygoIcon from '@/public/logo/taygoIcon.png'
// import Image from "next/image"
// import { FaXTwitter } from "react-icons/fa6";


// const Footer = () => {


//     return (
//         <>

//             <footer>


//                 <div className="sm:py-14 py-8">
//                     <div className="container mx-auto px-6 sm:px-10">

//                         <div className="md:px-6 px-2 pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-16">


//                             <div className="space-y-8 col-span-2">
//                                 <div>
//                                     <Link href="/"> <Image src={taygoLogo} alt="Taygo Logo" className="w-38 h-auto mb-6" /> </Link>
//                                     <p className="text-gray-700 text-xl hover:text-gray-800 font-medium">Ultimate productivity by automating Lead Management, Call System, Web Presence and Customer Communication with TAYGO™.</p>
//                                 </div>

//                                 <div>
//                                     {/* <h4 className="font-semibold text-lg mb-4">Social Media</h4> */}

//                                     <div className="flex gap-6 my-4 md:mb-0">
//                                         <Link href="https://www.facebook.com/taygohomeloan" className="text-gray-700 hover:text-gray-800 font-medium">
//                                             <Facebook className="w-6 h-6" />
//                                         </Link>
//                                         <Link href="https://x.com/taygoinc" className="text-gray-700 hover:text-gray-800 font-medium">
//                                             <FaXTwitter className="w-6 h-6" />
//                                         </Link>
//                                         {/* <Link href="#" className="text-gray-700 hover:text-gray-800 font-medium">
//                                             <Youtube className="w-6 h-6" />
//                                         </Link> */}
//                                         <Link href="https://www.linkedin.com/company/taygo/" className="text-gray-700 hover:text-gray-800 font-medium">
//                                             <Linkedin className="w-6 h-6" />
//                                         </Link>
//                                         <Link href="https://www.instagram.com/taygo.inc/" className="text-gray-700 hover:text-gray-800 font-medium">
//                                             <Instagram className="w-6 h-6" />
//                                         </Link>
//                                     </div>

//                                 </div>

//                             </div>



//                             {/* Digital Transformation Section */}
//                             <div>
//                                 <h3 className="text-gray-800 text-2xl font-semibold mb-4">On Our Site</h3>
//                                 <ul className="space-y-4 text-xl">
//                                     <li><Link href="https://www.taygo.com/bn/app/contactus-y7f" className="text-gray-700 hover:text-gray-800 font-medium">Contact Us</Link></li>
//                                     {/* <li><Link href="#" className="text-gray-700 hover:text-gray-800 font-medium">Support</Link></li> */}
//                                     <li><Link href="https://cloud.taygo.com/terms-of-services" className="text-gray-700 hover:text-gray-800 font-medium">Terms of service</Link></li>
//                                     <li><Link href="https://cloud.taygo.com/privacy-policy" className="text-gray-700 hover:text-gray-800 font-medium">Privacy Policy</Link></li>

//                                 </ul>
//                             </div>

//                             {/* Resources */}
//                             <div className='sm:ml-12 ml-0'>
//                                 <h3 className="text-gray-800 text-2xl font-semibold mb-4">Resources</h3>
//                                 <ul className="space-y-4 text-xl">
//                                     <li><Link href="https://cloud.taygo.com/features" className="text-gray-700 hover:text-gray-800 font-medium">Features</Link></li>
//                                     <li><Link href="https://cloud.taygo.com/pricing" className="text-gray-700 hover:text-gray-800 font-medium">Pricing</Link></li>
//                                     <li><Link href="#" className="text-gray-700 hover:text-gray-800 font-medium">Blogs</Link></li>
//                                 </ul>
//                             </div>


//                             <div className='space-y-8'>

//                                 <div>
//                                     <h3 className="text-gray-800 text-2xl font-semibold mb-4">Contact</h3>
//                                     <ul className="space-y-4 text-xl">
//                                         <li><Link href="mailto:taygo@taygo.com" className="text-gray-700 hover:text-gray-800 font-medium">taygo@taygo.com</Link></li>
//                                         <li><div className="text-gray-700 hover:text-gray-800 font-medium">Silicon Valley, CA</div></li>
//                                     </ul>
//                                 </div>


//                             </div>
//                         </div>


//                         {/* Bottom Section */}
//                         <div className="mt-8 pt-3 text-xl">
//                             <div className="">

//                                 <div className="flex justify-center items-center text-gray-700 hover:text-gray-800 gap-3">
//                                     <Image src={taygoIcon} alt="Taygo Logo" height={38} width={36} />
//                                     ©{new Date().getFullYear()} TAYGO™.  All Rights Reserved.
//                                 </div>
//                             </div>
//                         </div>


//                     </div>
//                 </div>


//             </footer>
//         </>
//     )
// }

// export default Footer




