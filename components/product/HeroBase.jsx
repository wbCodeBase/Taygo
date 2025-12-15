import React from 'react'
import { Settings, Zap, Eye } from 'lucide-react'
import checkArrow from "@/public/images/checkArrow.svg"
import Image from 'next/image';

const HeaderBase = () => {
    const cardsData = [
        {
            title: "System-Level Control",
            description: "Stages, rules, SLAs, and ownership standardized across teams.",
            icon: Settings
        },
        {
            title: "Refinance-First Automation",
            description: "Triggers, tasks, and re-engagement flows tailored for refi cycles.",
            icon: Zap
        },
        {
            title: "Live Visibility",
            description: "Know what's stuck, why it's stuck, and who owns the next step.",
            icon: Eye
        }
    ];

    return (
        <>
            <section className="bg-linear-to-r relative from-teal-500 via-teal-550 to-teal-600">
                <div className="mx-auto p-6 sm:p-10 lg:p-18 px-4 sm:px-6 lg:px-8">

                    {/* heading */}
                    <div className="text-center mb-12 mx-auto">
                        <h2 className="text-2xl md:text-[2.7rem] font-semibold text-gray-50 mb-6 textbalance leading-tight">
                            Why Choose us
                        </h2>
                        {/* <p className="text-lg md:text-xl font-medium mb-4 text-balance mx-auto text-gray-50">
                             Explore how TAYGO™ unites CRM, LOS, Automation, Marketing, and Integrations to simplify every part of your mortgage business.
                         </p> */}
                    </div>

                    <div className='flex flex-col sm:flex-col md:flex-row gap-4 text-ar-gray-700 mx-12'>
                        {cardsData.map((card, index) => {
                            const IconComponent = card.icon;
                            return (
                                <div
                                    key={index}
                                    className='flex-1 space-y-4 text-base sm:text-base lg:text-lg border-ar-gray-600 text-gray-50 rounded-4xl p-4'
                                >
                                    <IconComponent className="w-10 h-10 text-gray-50" />

                                    <div className='font-medium text-lg md:text-2xl text-gray-50'>{card.title}</div>
                                    <div className='text-md lg:text-md text-gray-100'>
                                        {card.description}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

                <Image src={checkArrow} alt='watermarks' width={130} height={130} className='absolute opacity-60 top-0 left-0 hidden md:block' />
                <Image src={checkArrow} alt='watermarks' width={100} height={100} className='absolute opacity-60 bottom-0 right-0 hidden md:block' />

            </section>
        </>
    )
}

export default HeaderBase









// import React from 'react'
// import checkArrow from "@/public/images/checkArrow.svg"
// import Image from 'next/image';

// const HeaderBase = () => {
//     const cardsData = [
//         {
//             title: "System-Level Control",
//             description: "Stages, rules, SLAs, and ownership—standardized across teams."
//         },
//         {
//             title: "Refinance-First Automation",
//             description: "Triggers, tasks, and re-engagement flows tailored for refi cycles."
//         },
//         {
//             title: "Live Visibility",
//             description: "Know what's stuck, why it's stuck, and who owns the next step."
//         }
//     ];

//     return (
//         <>
//             <section className="bg-linear-to-r relative from-teal-500 via-teal-550 to-teal-600">
//                 <div className="mx-auto p-6 sm:p-10 lg:p-20 px-4 sm:px-6 lg:px-8">

//                     {/* heading */}
//                     <div className="text-center mb-12 mx-auto">
//                         <h2 className="text-2xl md:text-[2.7rem] font-semibold text-gray-50 mb-6 textbalance leading-tight">
//                             Why Choose us
//                         </h2>
//                         {/* <p className="text-lg md:text-xl font-medium mb-4 text-balance mx-auto text-gray-50">
//                             Explore how TAYGO™ unites CRM, LOS, Automation, Marketing, and Integrations to simplify every part of your mortgage business.
//                         </p> */}
//                     </div>

//                     <div className='flex flex-col sm:flex-col md:flex-row gap-6 text-ar-gray-700 mx-20'>
//                         {cardsData.map((card, index) => (
//                             <div
//                                 key={index}
//                                 className='flex-1 space-y-3 text-base sm:text-base lg:text-lg border-ar-gray-600 text-gray-50 rounded-4xl p-4'
//                             >


//                                 <div className='font-medium text-lg md:text-2xl text-gray-50 '>{card.title}</div>
//                                 <div className='text-md lg:text-md text-gray-100'>
//                                     {card.description}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                 </div>

//                 <Image src={checkArrow} alt='watermarks' width={130} height={130} className='absolute top-0 left-0 hidden md:block' />
//                 <Image src={checkArrow} alt='watermarks' width={100} height={100} className='absolute bottom-0 right-0 hidden md:block' />

//             </section>
//         </>
//     )
// }

// export default HeaderBase