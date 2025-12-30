import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';




const content = {
    title: "Manage your relationships, not your software",
    description: "Boost sales productivity and efficiency with tools that give your teams more context and clarity around how and when to engage with customers.",
    buttonText: "Get Started!",
    link: "#contact-us",
    // imageSrc: softwareDev,
    altText: "taygo crm image",
}


const CtaEk = () => {


    return (
        <section className="container mx-auto px-4 py-2 md:px-12 md:py-22 lg:px-22">
            <div className="grid sm:grid-cols-2 gap-10 grid-cols-1">
                <div className="rounded-xl flex items-start justify-center flex-col gap-5 px4">
                    <div>
                        <h2 className="text-2xl md:text-[2.7rem] font-semibold mb-4 text-balance">{content.title}</h2>
                        <p className="text-lg text-gray-800 my-4">{content.description}</p>
                    </div>
                    <div>
                        <Button
                            size="lg"
                            className="h-14 rounded-sm bg-btn-green hover:bg-green-hover px-8 text-lg font-semibold text-white cursor-pointer hover:scale-105"
                        >
                            Schedule a demo
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        {/* <Link
                            href={content.link}
                            className="flex items-center justify-start gap-2 bg[#261E80] p-2 pl-3 font-medium text-md bg-orange-500 rounded-full mt-4 text-white"
                        >
                            <span>{content.buttonText}</span>
                            <span className="bg-white rounded-full p-2 text-black">
                                <FaLocationArrow />
                            </span>
                        </Link> */}
                    </div>
                </div>

                <div className="borde rounded-xl p4 flex justify-center items-center flex-col text-center relative">
                    <Image src="https://cdn.prod.website-files.com/6829b31a722bcd8064fdee21/687a1da501b84f725e03cf65_personalization-sales-p-1080.webp" alt={content.altText} width={700} height={700} />
                </div>
            </div>
        </section>
    );
};

export default CtaEk;
