"use client"

// import {
//     Bot,
//     Headset,
//     HeartHandshake,
//     Store,
// } from "lucide-react"
import PricingTable from "@/components/pricing"
import Link from "next/link"
import { FrequestQ } from "@/components/Faqs"
import { useState } from "react"





// const supportServices = [
//     {
//         icon: Headset,
//         title: "WABA, CRM, Inbox Support",
//         price: "$49",
//         priceINR: "₹2500",
//         period: "/per hour",
//     },
//     {
//         icon: Store,
//         title: "Ecommerce Support",
//         price: "$99",
//         priceINR: "₹5000",
//         period: "/per hour",
//     },
//     {
//         icon: Bot,
//         title: "Bots Support",
//         price: "$99",
//         priceINR: "₹5000",
//         period: "/per hour",
//     },
//     {
//         icon: HeartHandshake,
//         title: "Automations Support",
//         price: "$99",
//         priceINR: "₹5000",
//         period: "/per hour",
//     },
// ]




export default function PricingPage() {

    // const [geoData, setGeoData] = useState(null);
    const [currency, setCurrency] = useState("usd");


    // useEffect(() => {
    //     // Define the global callback function
    //     window.jsonFeed = function (data) {
    //         setGeoData(data);
    //     };

    //     // Create and insert the script tag
    //     const script = document.createElement("script");
    //     script.src = "https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location";
    //     document.body.appendChild(script);

    //     // Cleanup: remove script and callback
    //     return () => {
    //         delete window.jsonFeed;
    //         document.body.removeChild(script);
    //     };
    // }, []);


    // useEffect(() => {
    //     if (geoData?.country === "IN") {
    //         setCurrency("inr");
    //     } else if (geoData) {
    //         setCurrency("usd"); // or your fallback
    //     }
    // }, [geoData]);



    return (
        <div className="bg-white text-gray-800">


            <div className="relative bg-[#131716] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* green gradient glow at the bottom center */}
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full bg-[radial-gradient(ellipse_100%_70%_at_50%_100%,rgba(59,130,246,0.6),transparent)] blur-3xl"
                    aria-hidden="true"
                />

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                        Simple, Transparent Pricing Plans
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/80 mb-8">
                        Choose the perfect plan for your business. Scale as you grow.
                    </p>
                </div>
            </div>




            {/* Pricing Section */}
            <PricingTable setCurrency={setCurrency} currency={currency} />




            {/* Dedicated Support Services Section */}
            {/* <div className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl text-gray-700 font-bold mb-2">Dedicated Support Services</h2>
                    <p className="text-lg text-gray-600 mb-10">Get expert help when you need it</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                        {supportServices.map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border transition-shadow">
                                <div className="bg-green-100 text-green-600 p-3 rounded-lg inline-block mb-4">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{service.title}</h3>

                                <div className="mt-2">

                                    {currency && currency !== 'inr' ?
                                        <div className="text-sm">
                                            <span className="text-gray-600 font-semibold"> {service.price} </span> <span className="text-gray-500">{service.period}</span>
                                        </div> :
                                        <div className="text-sm">
                                            <span className="text-gray-600 font-semibold"> {service.priceINR} </span> <span className="text-gray-500">{service.period}</span>
                                        </div>}
                                </div>

                                
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}




            {/* CTA Section */}
            <div className="md:py-20 py-10">
                <div className="w-full mx-auto">
                    <div className="bg-linear-to-r from-[#006C5D] via-[#004e43] to-[#002e28]  text-white p-12 text-center">
                        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">Close More Loans with Less Work</h2>
                        <p className="text-2xl font-semibold text-white/90 mb-10">Get a custom AI-powered plan that fits your team's pipeline and workflow</p>  
                        <Link href="#" size="lg" className="bg-white text-black/90 rounded-xs hover:bg-gray-100 font-bold group text-lg px-10 py-4 mt-12">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>




            <FrequestQ />




        </div>
    )
}
