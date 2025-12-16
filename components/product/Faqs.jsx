'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';


const faqs = [
    {
        question: "What is a mortgage CRM?",
        answer: "A mortgage CRM helps loan teams manage leads, borrower relationships, pipeline stages, communication, and follow-ups — from first inquiry through closing and beyond."
    },
    {
        question: "How is LeadFlow different from a generic CRM?",
        answer: "LeadFlow is built around mortgage workflows (applications, docs, milestones, compliance controls) and includes an AI assistant that turns pipeline review into action execution."
    },
    {
        question: "Can LeadFlow automate follow-ups?",
        answer: "Yes — email/SMS/voice follow-ups can be triggered by stage, time delay, borrower behavior, and missing-document scenarios."
    },
    {
        question: "Does it work with an LOS?",
        answer: "LeadFlow is designed to integrate with LOS platforms via sync/APIs (exact integrations can be listed on your Integrations page)."
    },
    {
        question: "How does Lisa AI review and manage my pipeline?",
        answer: "Lisa reviews your entire pipeline daily, identifies stalled loans, prioritizes actions, and recommends next steps for every lead and application. Once you approve, Lisa executes calls, emails, texts, and updates automatically—keeping your deals moving without manual effort."
    }
];

export default function FaqsProductPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="w-full max-w-6xl md:mx-auto py-20 px-4">

                <div className='mb-10 text-center'>
                    <div className='text-3xl text-gray-700 md:text-4xl font-bold'>FAQs (Mortgage CRM + Lead Automation)</div>
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
                            className={`overflow-hidden border-b transition-all duration-200`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full p-5 text-left cursor-pointer"
                                aria-expanded={openIndex === index}
                            >
                                <h3 className={`font-medium text-2xl  ${openIndex === index ? 'text-green-700' : 'text-gray-800'
                                    }`}>
                                    {faq.question}
                                </h3>
                                <div className={`flex-shrink-0 ml-4 p-1 rounded-full ${openIndex === index
                                    ? 'text-green-600'
                                    : 'text-gray-500'
                                    }`}>
                                    {openIndex === index ? (
                                        <Minus className="h-6 w-6" />
                                    ) : (
                                        <Plus className="h-6 w-6" />
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
                                        <div className="px-5 pb-5 text-lg text-gray-700">
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


