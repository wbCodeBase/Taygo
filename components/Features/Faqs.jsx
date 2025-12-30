'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What is the AI Agent Workforce?",
        answer:
            "AI Agent Workforce is Taygo’s always-on execution layer that continuously reviews activity across leads, borrowers, and loans. It identifies what needs attention, recommends next actions, and executes approved tasks to keep work moving forward."
    },
    {
        question: "Does the AI take action automatically?",
        answer:
            "AI agents always propose actions first. Tasks are executed only after approval, ensuring your team stays fully in control of every interaction and decision."
    },
    {
        question: "How does this help loan officers day to day?",
        answer:
            "It eliminates manual pipeline reviews, follow-ups, and task tracking. Loan officers can focus on meaningful conversations and closing deals while agents handle operational execution."
    },
    {
        question: "Can AI agents be customized to my workflows?",
        answer:
            "Yes. AI agents adapt to your existing workflows, business rules, permissions, and communication standards—working exactly the way your team operates."
    },
    {
        question: "Is AI Agent Workforce replacing my team?",
        answer:
            "No. AI agents support your team by handling repetitive operational tasks, not relationship-building or human judgement."
    }
];


export default function FaqsFeatures() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>

            <div className="w-full max-w-6xl md:mx-auto py-20 px-4">

                <div className='mb-10 text-center'>
                    <div className='text-3xl text-gray-700 md:text-4xl font-bold'>FAQs</div>
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

// export function FrequestQ() {
//     const [openIndex, setOpenIndex] = useState(null);

//     const toggleFAQ = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <>
//             <div className="w-full max-w-4xl md:mx-auto mb-20 px-4">

//                 <div className='mb-10 text-center'>
//                     <div className='text-3xl text-gray-700 md:text-4xl font-bold'>Frequently Asked Questions</div>
//                     <div className='text-xl text-gray-600 mt-2'>Everything you need to know about AI-powered mortgage automation</div>
//                 </div>

//                 <div className="space-y-4">

//                     {faqs.map((faq, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{
//                                 duration: 0.4,
//                                 delay: index * 0.1
//                             }}
//                             className={`overflow-hidden border rounded-lg transition-all duration-200 ${openIndex === index
//                                 ? 'border-green-300 bg-green-50 shadow-md'
//                                 : 'border-gray-200 bg-white'
//                                 }`}
//                         >
//                             <button
//                                 onClick={() => toggleFAQ(index)}
//                                 className="flex justify-between items-center w-full p-5 text-left"
//                                 aria-expanded={openIndex === index}
//                             >
//                                 <h3 className={`font-medium text-lg ${openIndex === index ? 'text-green-700' : 'text-gray-800'
//                                     }`}>
//                                     {faq.question}
//                                 </h3>
//                                 <div className={`flex-shrink-0 ml-4 p-1 rounded-full ${openIndex === index
//                                     ? 'bg-green-100 text-green-600'
//                                     : 'bg-gray-100 text-gray-500'
//                                     }`}>
//                                     {openIndex === index ? (
//                                         <Minus className="h-5 w-5" />
//                                     ) : (
//                                         <Plus className="h-5 w-5" />
//                                     )}
//                                 </div>
//                             </button>

//                             <AnimatePresence>
//                                 {openIndex === index && (
//                                     <motion.div
//                                         initial={{ height: 0, opacity: 0 }}
//                                         animate={{ height: "auto", opacity: 1 }}
//                                         exit={{ height: 0, opacity: 0 }}
//                                         transition={{ duration: 0.3 }}
//                                     >
//                                         <div className="px-5 pb-5 text-gray-600">
//                                             <motion.p
//                                                 initial={{ y: -10, opacity: 0 }}
//                                                 animate={{ y: 0, opacity: 1 }}
//                                                 transition={{ duration: 0.3, delay: 0.1 }}
//                                             >
//                                                 {faq.answer}
//                                             </motion.p>
//                                         </div>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }



