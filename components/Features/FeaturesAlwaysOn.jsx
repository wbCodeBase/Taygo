import { MdOutlineRoute } from "react-icons/md";
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";
import { SiInductiveautomation } from "react-icons/si";
import { TbTargetArrow } from "react-icons/tb";

const FeaturesAlwaysOn = () => {

    const features = [
        {
            id: 1,
            title: "Autonomous Execution",
            description:
                "AI agents continuously monitor leads, applications, and loans to identify stalled progress, missing steps, or time-sensitive moments. They automatically trigger pre-approved actions to keep workflows moving forward without manual intervention.",
            link: "/features/autonomous-execution",
            icon: <SiInductiveautomation size={35} className="text-teal-700" />,
        },
        {
            id: 2,
            title: "Targeted Outbound Actions",
            description:
                "AI agents engage the right contacts at the right time using real-time context. They re-activate dormant leads, guide borrowers toward completion, and uncover new opportunities without relying on mass outreach.",
            link: "/features/targeted-outbound-actions",
            icon: <TbTargetArrow size={35} className="text-teal-700" />,
        },
        {
            id: 3,
            title: "Dynamic Journey Orchestration",
            description:
                "AI agents manage adaptive customer journeys that evolve based on behaviour and responsiveness. Automated and human touchpoints are intelligently balanced to drive deeper engagement and higher conversion rates.",
            link: "/features/dynamic-journey-orchestration",
            icon: <MdOutlineRoute size={35} className="text-teal-700" />,
        },
    ];


    return (
        <>
            <section className="container mx-auto px-4 py-2 md:px-12 md:py-22 lg:px-22">

                <div className='mb-12'>
                    <h2 className='text-2xl md:text-[2.7rem] font-semibold text-gray-900 mb-4 text-balance'>Always on, even when you log off</h2>
                    <p className='text-lg md:text-xl font-medium mb-4 text-balance max-w-5xl text-gray-700'>AI Agent Workforce keeps execution moving across sales and operational workflows responding, following up, and progressing work even when your team isn’t actively logged in.</p>
                </div>

                <div className='flex justify-start gap-10 mt-6'>
                    {features.map(industry => (
                        <div key={industry.id} className="border-l p-6 flex items-start justify-between flex-col relative">
                            <div className='space-y-5'>
                                <div>
                                    {industry.icon}
                                </div>
                                <h3 className='font-semibold text-xl text-btn-green'>{industry.title}</h3>
                                <p className='text-gray-600'>{industry.description}</p>
                            </div>

                            {industry?.link &&
                                <Link
                                    className='flex items-center justify-center gap-2 p-1 pl-3 font-medium text-md bg-btn-green hover:btn-green-hover rounded-sm mt-6 text-white'
                                    href="#"
                                >
                                    <span>Learn more</span>
                                    <span className='bg-white rounded-sm p-2 text-black'>
                                        <FaLocationArrow />
                                    </span>
                                </Link>
                            }
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default FeaturesAlwaysOn;
