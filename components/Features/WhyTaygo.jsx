

import { SiEnterprisedb, SiCommerzbank } from "react-icons/si";
import { GiCrystalGrowth } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const features = [
    {
        id: 1,
        title: "Enterprise-grade tools",
        description:
            "Unite teams across your organization on a single, seamless platform that allows them to stay organized, move faster, and collaborate efficiently.",

        icon: <SiEnterprisedb size={35} className="text-white" />,
    },
    {
        id: 2,
        title: "Built for financial services",
        description:
            "Legacy CRMs and horizontal solutions lack the depth and focus of Total Expert's purpose-built intelligence and engagement tools.",

        icon: <SiCommerzbank size={35} className="text-white" />,
    },
    {
        id: 3,
        title: "Drive growth in any market",
        description:
            "Surface high-quality opportunities to engage customers the moment they signal a financial need—even in unpredictable markets.",

        icon: <GiCrystalGrowth size={35} className="text-white" />,
    },
    {
        id: 4,
        title: "Win customers for life",
        description:
            "Leverage the data insights and marketing automation tools you need to build and nurture long-term relationships.",

        icon: <FaUsers size={35} className="text-white" />,
    },
];



const WhyTaygo = () => {
    return (
        <>

            <section className="gradient bg-gradient-to-b from-teal-900 via-teal-900 to-emerald-800">


                <div className='space-y-30 container mx-auto px-4 py-2 md:px-12 md:py-22 pt-32'>
                    <div>

                        <div className='mb-12 flex justify-between items-center'>
                            <div>
                                <h2 className='text-2xl md:text-[2.7rem] font-semibold text-white mb-4 text-balance'>We're more than a platform. We're a partner.</h2>
                            </div>
                            <Button
                                size="lg"
                                className="h-14 rounded-sm bg-btn-green hover:bg-green-hover px-8 text-lg font-semibold text-white cursor-pointer hover:scale-105"
                            >
                                Schedule a demo
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>

                        <div className='grid grid-cols-4 gap-1 mt-6'>
                            {features.map(industry => (
                                <div key={industry.id} className="border-l p-6 flex items-start justify-between flex-col relative">
                                    <div className='space-y-5'>
                                        <div>
                                            {industry.icon}
                                        </div>
                                        <h3 className='font-semibold text-xl text-white'>{industry.title}</h3>
                                        <p className='text-gray-100'>{industry.description}</p>
                                    </div>


                                </div>
                            ))}
                        </div>
                    </div>


                    {/* <div className='grid sm:grid-cols-2 gap-10 grid-cols-1'>

                        <div className="rounded-xl">
                            <h2 className='text-2xl md:text-[2.7rem] font-semibold text-gray-100 mb-3 px-4 mb-10 text-balance'>Create impact across every channel</h2>


                            <div className='grid gap-4 mt-6 grid-cols-1 px-4 space-y-2'>
                                <div className="border-l border-gray-100 p-4">
                                    <h3 className='font-semibold text-lg my-1 text-gray-100 mb-3'>Real-time performance</h3>
                                    <p className='text-sm font-normal text-gray-200'>Analyze data in real-time to know which channels and content resonates with what audience, then deploy marketing campaigns to engage contacts on their terms.</p>
                                </div>

                                <div className="border-l border-gray-100 p-4">
                                    <h3 className='font-semibold text-lg my-1 text-gray-100 mb-3'>Any message, any channel</h3>
                                    <p className='text-sm font-normal text-gray-200'>Leverage print, direct mail, email, social, and digital tools to complement in-person engagements and create an elevated customer journey.</p>
                                </div>

                                <div className="border-l border-gray-100 p-4">
                                    <h3 className='font-semibold text-lg my-1 text-gray-100 mb-3'>Empower your teams</h3>
                                    <p className='text-sm font-normal text-gray-200'>Give loan officers and relationship managers the tools they need to communicate at scale—or even execute campaigns on their behalf.</p>
                                </div>
                            </div>

                        </div>


                        <div className="rounded-xl p4 flex justify-center items-center flex-col text-center relative">
                            <Image src="https://cdn.prod.website-files.com/6829b31a722bcd8064fdee21/68638b46ac92446803b1c4a8_nurture-2-p-1080.webp" className='rounded-xl' alt="component image" width={700} height={700} />
                        </div>


                    </div> */}
                </div>



            </section >
        </>

    )
}

export default WhyTaygo;