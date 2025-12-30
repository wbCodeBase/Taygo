'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [ 
    {
        question: "How does Lisa AI review and manage my pipeline?",
        answer: "Lisa reviews your entire pipeline daily, identifies stalled loans, prioritizes actions, and recommends next steps for every lead and application. Once you approve, Lisa executes calls, emails, texts, and updates automatically—keeping your deals moving without manual effort."
    },
    {
        question: "Can Lisa AI make calls and send emails on my behalf?",
        answer: "Yes, Lisa can execute outbound calls, send personalized emails, and dispatch text messages after your approval. Lisa handles borrower follow-ups, status updates, and reminders while you maintain full control over what gets sent and when."
    },
    {
        question: "Does Taygo integrate with my existing mortgage systems?",
        answer: "Yes, Taygo integrates with popular LOS platforms, CRMs, and tools your team already uses. We'll help you connect your systems so Lisa can access loan data, update records, and keep everything in sync across your tech stack."
    },
    {
        question: "How long does it take to get started with Taygo?",
        answer: "Most teams are up and running within 3-5 business days. This includes system integration, pipeline import, team onboarding, and Lisa AI calibration. We provide hands-on setup support to ensure a smooth transition."
    },
    {
        question: "What happens if I need to pause or cancel automation?",
        answer: "You have full control. You can pause Lisa's automation anytime, adjust approval settings, or turn off specific features while keeping your CRM and data intact. No penalties for pausing—pick up right where you left off."
    },
    {
        question: "How does pricing work as my team grows?",
        answer: "Pricing scales with your pipeline volume and team size. Start with our Company Package and upgrade as you grow. Enterprise plans include custom integrations, dedicated support, and volume-based pricing for high-performing teams."
    }
];
 
export function FrequestQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="w-full max-w-4xl md:mx-auto mb-20 px-4">

                <div className='mb-10 text-center'>
                    <div className='text-3xl text-gray-700 md:text-4xl font-bold'>Frequently Asked Questions</div>
                    <div className='text-xl text-gray-600 mt-2'>Everything you need to know about AI-powered mortgage automation</div>
                </div>

                <div className="space-y-4">

                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1
                            }}
                            className={`overflow-hidden border rounded-lg transition-all duration-200 ${openIndex === index
                                ? 'border-green-300 bg-green-50 shadow-md'
                                : 'border-gray-200 bg-white'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full p-5 text-left"
                                aria-expanded={openIndex === index}
                            >
                                <h3 className={`font-medium text-lg ${openIndex === index ? 'text-green-700' : 'text-gray-800'
                                    }`}>
                                    {faq.question}
                                </h3>
                                <div className={`flex-shrink-0 ml-4 p-1 rounded-full ${openIndex === index
                                    ? 'bg-green-100 text-green-600'
                                    : 'bg-gray-100 text-gray-500'
                                    }`}>
                                    {openIndex === index ? (
                                        <Minus className="h-5 w-5" />
                                    ) : (
                                        <Plus className="h-5 w-5" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-5 pb-5 text-gray-600">
                                            <motion.p
                                                initial={{ y: -10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                            >
                                                {faq.answer}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}



