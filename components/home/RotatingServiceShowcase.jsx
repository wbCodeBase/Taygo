"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import TaygoIcon from "@/public/logo/taygoIcon.png";
// import ChatUserAbhi from "@/public/images/chatUserAbhi.png";
import ChatUserAbhi from "@/public/images/userAvatar.png";
import Image from "next/image";
import Link from "next/link";

             
// Service data for the rotating showcase
const aiServices =  {
    id: "lisaHeroStrip",
    image: TaygoIcon,
    title: "AI Handles the Tasks. You Handle the Revenue",
    subtitle: "",
    description: "Let your AI agent automate repetitive work so you can focus entirely on high-value clients, faster closings, and real business growth.",
    // description: "You’ve run your mortgage business the traditional way. Now let your AI agent take over the repetitive tasks  while you focus on what actually drives revenue.",
    button: {
      text: "Talk to Lisa",
      link: "#contact"
    }
  }


const FRAMES = [
  {
    id: 1,
    messages: [
      { from: "lisa", text: "Today's leads analysed. Can i schedule meetings?" },
      { from: "user", text: "Great, Yes please." },
      { from: "lisa", text: "8 meetings scheduled." },
    ],
  },
  {
    id: 2,
    messages: [
      { from: "lisa", text: "18 actions found. Should I email them?" },
      { from: "user", text: "Yes please." },
      { from: "lisa", text: "Done! Emails sent successfully." },
    ],
  },
  {
    id: 3,
    messages: [
      { from: "lisa", text: "Anything else I can handle today?" },
      { from: "user", text: "No, that’s all for now." },
      { from: "lisa", text: "Alright! I’m here anytime." },
    ],
  },
];


// Interactive full-featured chat animation for the AI chatbot
// const TypingAnimation2 = ({ isActive }) => {
//   const [chatStep, setChatStep] = useState(0);
//   const [inputText, setInputText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);

//   // Progress chat when active
//   useEffect(() => {
//     if (!isActive) {
//       setChatStep(0);
//       setInputText("");
//       return;
//     }

//     const timer = setTimeout(() => {
//       if (chatStep < 4) {
//         if (chatStep === 1) {
//           // Simulate user typing
//           setIsTyping(true);
//           const typeTimer = setTimeout(() => {
//             setIsTyping(false);
//             setChatStep(prev => prev + 1);
//           }, 1500);
//           return () => clearTimeout(typeTimer);
//         } else {
//           setChatStep(prev => prev + 1);
//         }
//       } else {
//         // Loop back to start
//         setChatStep(0);
//       }
//     }, chatStep === 0 ? 800 : chatStep === 4 ? 3000 : 1500);

//     return () => clearTimeout(timer);
//   }, [isActive, chatStep]);

//   // Simulate user typing text
//   useEffect(() => {
//     if (chatStep === 1 && isTyping) {
//       const text = "I need help with content ideas for my website";
//       let currentIndex = 0;

//       const typingInterval = setInterval(() => {
//         if (currentIndex <= text.length) {
//           setInputText(text.substring(0, currentIndex));
//           currentIndex++;
//         } else {
//           clearInterval(typingInterval);
//         }
//       }, 50);

//       return () => clearInterval(typingInterval);
//     } else if (chatStep !== 1) {
//       setInputText("");
//     }
//   }, [chatStep, isTyping]);

//   const messages = [
//     {
//       id: 0,
//       type: 'ai',
//       content: "👋 Hi there! I'm WeOne's AI Chat Assistant. How can I help you today?"
//     },
//     {
//       id: 1,
//       type: 'user',
//       content: "I need help with content ideas for my website."
//     },
//     {
//       id: 2,
//       type: 'ai-typing',
//       content: null
//     },
//     {
//       id: 3,
//       type: 'ai',
//       content: "I'd be happy to help with content ideas for your website!",
//       list: [
//         "Industry trend analysis with actionable insights",
//         // "Customer success stories and case studies",
//         // "How-to guides and tutorial content"
//       ],
//       footer: "Would you like me to elaborate on any of these ideas?"
//     }
//   ];

//   // Calculate cumulative height of all previous messages
//   const getAccumulatedOffset = (upToIndex) => {
//     if (upToIndex < 0 || chatStep < 0) return 0;
    
//     // Base spacing between messages
//     const baseMessageHeight = 80; // Approximate height per message
//     const currentStep = Math.min(chatStep, upToIndex);
    
//     return currentStep * baseMessageHeight;
//   };

//   // Calculate opacity based on how far the message has scrolled
//   const getMessageOpacity = (messageId) => {
//     const offset = getAccumulatedOffset(chatStep) - getAccumulatedOffset(messageId);
    
//     // Message hasn't appeared yet
//     if (messageId > chatStep) return 0;
    
//     // Current message and one before - full opacity
//     if (chatStep - messageId <= 1) return 1;
    
//     // Fade out based on distance from current
//     const fadeStart = 150;
//     const fadeRange = 100;
    
//     if (offset < fadeStart) return 1;
//     if (offset > fadeStart + fadeRange) return 0;
    
//     return 1 - ((offset - fadeStart) / fadeRange);
//   };

//   return (
//     <div className="w-full h-full flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//       {/* Messages area - No fixed height, just flex-1 */}
//       <div className="flex-1 relative overflow-hidden bg-linear-to-br from-gray-50 to-white">
//         {/* Gradient fade at top */}
//         <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/90 to-transparent pointer-events-none z-10"></div>
        
//   {/* Messages container - messages stack from top to bottom and bottom aligns to input */}
//   <div className="absolute inset-0 overflow-y-hidden px-4 py-4 flex flex-col justify-end space-y-3">

//     {isActive && messages.map((message, index) => {
//       if (index > chatStep) return null;

//       const opacity = getMessageOpacity(index);

//       return (
//         <motion.div
//           key={message.id}
//           className="w-full"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity }}
//           transition={{ duration: 0.4, ease: "easeOut" }}
//         >
//                   {/* AI Message */}
//                   {message.type === 'ai' && (
//                     <div className="flex items-start mb-3">
//                       <motion.div
//                         className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center text-white mr-2 shrink-0"
//                         animate={{ scale: [1, 1.05, 1] }}
//                         transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
//                       >
//                         <BrainCircuit className="h-4 w-4" />
//                       </motion.div>
//                       <div className="bg-cyan-50 rounded-lg text-sm text-left p-3 max-w-[75%]">
//                         <p className="text-gray-800">{message.content}</p>
//                         {message.list && (
//                           <ul className="mt-2 space-y-1 pl-4 list-disc text-gray-700 text-xs">
//                             {message.list.map((item, i) => (
//                               <li key={i}>{item}</li>
//                             ))}
//                           </ul>
//                         )}
//                         {message.footer && (
//                           <p className="mt-2 text-gray-800 text-xs">{message.footer}</p>
//                         )}
//                       </div>
//                     </div>
//                   )}

//                   {/* User Message */}
//                   {message.type === 'user' && (
//                     <div className="flex items-start justify-end mb-3">
//                       <div className="bg-gray-100 text-sm text-left rounded-lg p-3 max-w-[75%] mr-2">
//                         <p className="text-gray-800">{message.content}</p>
//                       </div>
//                       <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
//                         <User className="h-4 w-4 text-gray-600" />
//                       </div>
//                     </div>
//                   )}

//                   {/* AI Typing */}
//                   {message.type === 'ai-typing' && (
//                     <div className="flex items-start mb-3">
//                       <motion.div
//                         className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center text-white mr-2 shrink-0"
//                         animate={{ scale: [1, 1.05, 1] }}
//                         transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
//                       >
//                         <BrainCircuit className="h-4 w-4" />
//                       </motion.div>
//                       <div className="bg-cyan-50 rounded-lg py-2 px-4 flex items-center">
//                         <div className="flex space-x-1">
//                           {[0, 1, 2].map((dot) => (
//                             <motion.div
//                               key={dot}
//                               className="w-2 h-2 rounded-full bg-cyan-400"
//                               animate={{
//                                 y: ["0%", "-50%", "0%"],
//                                 opacity: [0.5, 1, 0.5]
//                               }}
//                               transition={{
//                                 duration: 0.6,
//                                 repeat: Infinity,
//                                 delay: dot * 0.1,
//                                 ease: "easeInOut"
//                               }}
//                             />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>
//       </div>

//       {/* Chat input - Fixed at bottom */}
//       <motion.div 
//         className="p-3 border-t border-gray-200 bg-white relative z-20"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//       >
//         <div className="flex items-center bg-white rounded-lg border border-gray-200 shadow-sm">
//           <div className="flex-1 pl-4 pr-2 py-2.5">
//             <motion.div
//               className="flex items-center text-sm"
//               animate={{ opacity: isTyping && chatStep === 1 ? 1 : 0.6 }}
//             >
//               <span className={`${(isTyping && chatStep === 1) ? 'text-gray-700' : 'text-gray-400'} truncate`}>
//                 {inputText || "Type your message..."}
//                 {isTyping && chatStep === 1 && (
//                   <motion.span
//                     className="inline-block w-0.5 h-4 bg-cyan-500 ml-0.5"
//                     animate={{ opacity: [1, 0, 1] }}
//                     transition={{ duration: 0.8, repeat: Infinity }}
//                   />
//                 )}
//               </span>
//             </motion.div>
//           </div>

//           <div className="flex items-center space-x-1 pr-2">
//             <motion.button
//               className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
//               whileTap={{ scale: 0.95 }}
//             >
//               <Paperclip className="h-4 w-4 text-gray-400" />
//             </motion.button>

//             <motion.button
//               className="rounded-lg p-2 bg-cyan-600 text-white flex items-center justify-center"
//               whileHover={{ scale: 1.05, backgroundColor: "#0891b2" }}
//               whileTap={{ scale: 0.95 }}
//               animate={{ 
//                 scale: chatStep === 1 && inputText.length > 10 ? [1, 1.08, 1] : 1,
//                 backgroundColor: chatStep === 1 && inputText.length > 10 ? "#0891b2" : "#0891b2"
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               <Send className="h-4 w-4" />
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }



function TypingAnimation() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayMessages, setDisplayMessages] = useState([]);

  // User typing simulation
  const [showUserInput, setShowUserInput] = useState(false);
  const [userTypingText, setUserTypingText] = useState("");

  const currentFrame = FRAMES[frameIndex];


  // Chat Engine
  useEffect(() => {

    const play = async () => {
      const msg = currentFrame.messages[messageIndex];

      // -----------------------------------
      // 1. LISA MESSAGE
      // -----------------------------------
      if (msg.from === "lisa") {
        setIsTyping(true);

        await new Promise((res) =>
          setTimeout(res, 900 + msg.text.length * 20)
        );

        setIsTyping(false);

        setDisplayMessages((prev) => [...prev, msg]);
      }

      // -----------------------------------
      // 2. USER MESSAGE (simulate typing)
      // -----------------------------------
      if (msg.from === "user") {
        setShowUserInput(true);
        setUserTypingText("");

        // Type letter by letter
        for (let i = 0; i < msg.text.length; i++) {
          setUserTypingText(msg.text.slice(0, i + 1));
          await new Promise((r) => setTimeout(r, 40));
        }

        // Hold for moment then send
        await new Promise((r) => setTimeout(r, 400));

        setDisplayMessages((prev) => [...prev, msg]);

        // Clear fake input
        setShowUserInput(false);
        setUserTypingText("");
      }

      // -----------------------------------
      // Move to next message OR next frame
      // -----------------------------------
      if (messageIndex < currentFrame.messages.length - 1) {
        setMessageIndex((prev) => prev + 1);
      } else {
        await new Promise((r) => setTimeout(r, 1200));

        const next = (frameIndex + 1) % FRAMES.length;
        setFrameIndex(next);
        setMessageIndex(0);
        setDisplayMessages([]);
      }
    };

    play();
  }, [messageIndex, frameIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* CHAT AREA */}
      <div className="absolute inset-0 px-4 py-4 flex flex-col justify-end space-y-3 pb-16">
    

        {displayMessages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={`flex items-start ${
              m.from === "user" ? "justify-end" : ""
            }`}
          >
            {m.from === "lisa" && (
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full border bg-gray-200 flex items-center justify-center mr-2">
                {/* <div className="w-10 h-10 rounded-full border bg-[#d9f3f0] text-white flex items-center justify-center mr-2"> */}
                  {/* <BrainCircuit className="w-4 h-4" /> */}
                  
                  <Image src="/images/lisa.png" alt="Lisa Icon" width={29} height={29} className="rounded-full"/>
                </div>

                <div className="bg-[#4777C5] text-white text-left p-2 rounded-md text-sm shadow-sm max-w-[85%]">
                  {m.text}
                </div>
              </div>
            )}

            {m.from === "user" && (
              <div className="flex items-start justify-end">
                <div className="bg-[#D073AD] text-white p-2 rounded-md text-sm shadow-sm max-w-[90%]">
                  {m.text}
                </div>

                <div className="w-10 h-10 rounded-full bg-gray-200 ml-2 p-0 flex items-center justify-center">
                  {/* <User className="w-4 h-4" /> */}
                  <Image src={ChatUserAbhi} alt="User Icon" width={32} height={32} className="rounded-full w-10 h-10" />
                </div>
              </div>
            )}
          </motion.div>
        ))}

        {/* LISA TYPING */}
        {isTyping && (
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full border bg-gray-200 text-white flex items-center justify-center mr-2">
              {/* <BrainCircuit className="w-4 h-4" /> */}
                  <Image src="/images/lisa.png" alt="Lisa Icon" width={29} height={29} className="rounded-full" />
            </div>

            <div className="bg-[#4777C5] p-3 rounded-md flex space-x-1 shadow-sm">
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: d * 0.1,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* USER INPUT SIMULATION */}
      
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center space-x-3">

          <div className="flex w-full bg-white rounded-md px-4 py-2 text-sm text-gray-700">
            {userTypingText || (
              <span className="text-gray-400">Typing…</span>
            )}
          </div>

          <div className="bg-[#006C5D] text-white w-10 h-9 flex items-center justify-center rounded-full">
            <Send className="w-5 h-5" />
          </div>

        </div>
      
    </div>
  );
}




export default function RotatingServiceShowcase() {

  const activeService = aiServices;

  return (
    <div className="w-full mt-8">
      <div className={`flex justify-center items-center w-full min-h-56  ${activeService.bgLight}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            className={`p-6 relative flex flex-col lg:flex-row max-w-7xl gap-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <section className="lg:w-1/2 w-full py-3">
              {/* <div className={`absolute top-0 left-0 h-1 w-full bg-blue-500`}></div> */}
           
              <div className="mb-2 flex items-center">
                 <div className={`flex items-center justify-center shrink-0 mr-4`}>
                  <Image src={TaygoIcon} alt="Taygo Logo" width={80} height={80} className="object-contain w-10" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 text-left">{activeService.title}</h3>
                  <p className="text-sm text-gray-600">{activeService.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-700 text-base leading-relaxed text-left">
                {activeService.description}
              </p>

              {activeService.button && (
                <div className="mt-4 justify-center flex">
                  <Link
                    href={activeService.button.link}
                    className="inline-block px-6 py-3 bg[#006C5D] bg-[#6161FF] hover:bg-[#5252E8] text-white font-medium rounded-sm hover:bg[#005047] transition-colors duration-300"
                  >
                    {activeService.button.text}
                  </Link>


                </div>
              )}

            </section>

            <section className="lg:w1/2 w-full flex items-center justify-center absolute bottom-0 right-6 lg:max-w-md h-68">  
                <div className="w-full h-full">
                  <TypingAnimation />
                </div>
              
            </section>

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}













// "use client"

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Phone, MessageSquare, FileText, Brain, Cpu, TrendingUp, Zap, BarChart3,
//   Users, BrainCircuit, User, ArrowUp, Search, Settings, Paperclip,
//   Image, Smile, Calendar, Heart, Bookmark, Share2,
//   Instagram, Facebook, Twitter, Linkedin, Send,
//   Check
// } from "lucide-react";


// // import VoiceAgentAnimation from "@/components/VoiceAgentAnimation";

// // Service data for the rotating showcase
// const aiServices = [
//   {
//     id: "chatbot",
//     icon: <MessageSquare className="h-8 w-8" />,
//     title: "AI Chat Assistant",
//     subtitle: "24/7 intelligent website support",
//     description: "Deploy AI chat assistants that understand context, provide personalized support, and convert visitors into customers with smart automation.",
//     features: [
//       { icon: <Brain />, title: "Contextual Understanding", description: "Remembers conversations and user preferences" },
//       { icon: <Zap />, title: "Instant Responses", description: "Real-time answers to customer questions" },
//       { icon: <BarChart3 />, title: "Conversion Tracking", description: "Measure performance and optimize" }
//     ],
//     animation: "typing", // Animation type
//     color: "cyan",
//     bgLight: "bg-cyan-50",
//     textColor: "text-cyan-600",
//     borderColor: "border-cyan-100",
//     iconBg: "bg-cyan-500",
//   },
// ];

// // Interactive full-featured chat animation for the AI chatbot
// const TypingAnimation = ({ isActive }) => {
//   const [chatStep, setChatStep] = useState(0);
//   const [inputText, setInputText] = useState("");
//   const [isTyping, setIsTyping] = useState(false);

//   // Progress chat when active
//   useEffect(() => {
//     if (!isActive) {
//       setChatStep(0);
//       setInputText("");
//       return;
//     }

//     const timer = setTimeout(() => {
//       if (chatStep < 4) {
//         if (chatStep === 1) {
//           // Simulate user typing
//           setIsTyping(true);
//           const typeTimer = setTimeout(() => {
//             setIsTyping(false);
//             setChatStep(prev => prev + 1);
//           }, 1200);
//           return () => clearTimeout(typeTimer);
//         } else {
//           setChatStep(prev => prev + 1);
//         }
//       }
//     }, chatStep === 0 ? 800 : 1500);

//     return () => clearTimeout(timer);
//   }, [isActive, chatStep]);

//   // Simulate user typing text
//   useEffect(() => {
//     if (chatStep === 1 && isTyping) {
//       const text = "I need help with content ideas for my website";
//       let currentIndex = 0;

//       const typingInterval = setInterval(() => {
//         if (currentIndex <= text.length) {
//           setInputText(text.substring(0, currentIndex));
//           currentIndex++;
//         } else {
//           clearInterval(typingInterval);
//         }
//       }, 50);

//       return () => clearInterval(typingInterval);
//     }
//   }, [chatStep, isTyping]);

//   return (
//     <div className="w-full h-full bg-linear-to-br from-gray-50 to-gray-100 rounded-md flex items-center justify-center">
//       <div className="w-full h-full mx-auto bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden flex flex-col">
//         {/* Chat Header */}
//         {/* <div className="bg-linear-to-r from-cyan-500 to-cyan-600 p-3 sm:p-4 text-white flex items-center justify-between">
//           <div className="flex items-center">
//             <motion.div
//               className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center mr-2 sm:mr-3"
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               AS
//             </motion.div>
//             <div>
//               <h3 className="font-medium text-sm sm:text-base">Lisa</h3>
//               <div className="flex items-center text-xs text-cyan-100">
//                 <motion.div
//                   className="h-1.5 w-1.5 rounded-full bg-green-400 mr-1"
//                   animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 />
//                 Online Now
//               </div>
//             </div>
//           </div>

//           <div className="flex space-x-1 sm:space-x-2">
//             <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center">
//               <Search className="h-3 w-3 sm:h-4 sm:w-4" />
//             </div>
//             <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center">
//               <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
//             </div>
//           </div>
//         </div> */}

//         {/* Chat messages area */}
//         <div className="flex-1 p-4 overflow-y-auto bg-white relative">
//           {isActive ? (
//             <div className="space-y-4">

//               {/* Timestamp */}
//               {chatStep >= 1 && (
//                 <motion.div
//                   className="flex justify-center"
//                   // initial={{ opacity: 0 }}
//                   // animate={{ opacity: 1 }}
//                   // transition={{ duration: 0.3, delay: 0.5 }}
//                 >
//                   <div className="text-[10px] text-gray-600 px-2 py-0.5 bg-gray-50 rounded-full">
//                     Today, {new Date().getHours()}:{String(new Date().getMinutes()).padStart(2, '0')}
//                   </div>
//                 </motion.div>
//               )}



//               {/* Welcome message */}
//               <motion.div
//                 className="flex items-start"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: chatStep >= 0 ? 1 : 0, y: chatStep >= 0 ? 0 : 10 }}
//                 transition={{ duration: 0.3 }}
//               >

                
//                 <motion.div
//                   className="w-8 h-8 rounded-full bg-linear-to-r from-cyan-500 to-cyan-600 flex items-center justify-center text-white mr-2 shrink-0"
//                   animate={{ scale: [1, 1.05, 1] }}
//                   transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
//                 >
//                   <BrainCircuit className="h-4 w-4" />
//                 </motion.div>
//                 <div className="bg-cyan-50 rounded-md text-sm text-left p-2 max-w-[85%]">
//                   <p className="text-gray-800">👋 Hi there! I'm WeOne's AI Chat Assistant. How can I help you today?</p>
//                 </div>
//               </motion.div>


//               {/* User message */}
//               {chatStep >= 2 && (
//                 <motion.div
//                   className="flex items-start justify-end"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <div className="bg-gray-100 text-sm text-left rounded-md p-2 max-w-[85%] mr-2">
//                     <p className="text-gray-800">I need help with content ideas for my website.</p>
//                   </div>
//                   <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
//                     <User className="h-4 w-4 text-gray-600" />
//                   </div>
//                 </motion.div>
//               )}

//               {/* AI thinking/typing */}
//               {chatStep === 3 && (
//                 <motion.div
//                   className="flex items-start"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <motion.div
//                     className="w-8 h-8 rounded-full bg-linear-to-r from-cyan-500 to-cyan-600 flex items-center justify-center text-white mr-2 shrink-0"
//                     animate={{ scale: [1, 1.05, 1] }}
//                     transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
//                   >
//                     <BrainCircuit className="h-4 w-4" />
//                   </motion.div>
//                   <div className="bg-cyan-50 rounded-lg py-3 px-4 flex items-center">
//                     <motion.div
//                       className="flex space-x-1"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                     >
//                       {[0, 1, 2].map((dot) => (
//                         <motion.div
//                           key={dot}
//                           className="w-2 h-2 rounded-full bg-cyan-400"
//                           animate={{
//                             y: ["0%", "-50%", "0%"],
//                             opacity: [0.5, 1, 0.5]
//                           }}
//                           transition={{
//                             duration: 0.6,
//                             repeat: Infinity,
//                             delay: dot * 0.1,
//                             ease: "easeInOut"
//                           }}
//                         />
//                       ))}
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               )}

//               {/* AI response with suggestions */}
//               {chatStep >= 4 && (
//                 <motion.div
//                   className="flex items-start"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <motion.div
//                     className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center text-white mr-2 flex-shrink-0"
//                     animate={{ scale: [1, 1.05, 1] }}
//                     transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
//                   >
//                     <BrainCircuit className="h-4 w-4" />
//                   </motion.div>
//                   <div className="bg-cyan-50 rounded-lg text-left text-sm p-2 max-w-[85%]">
//                     <p className="text-gray-800">I'd be happy to help with content ideas for your website!</p>

//                     {/* <ul className="mt-2 space-y-2 pl-5 list-disc text-gray-700">
//                       <motion.li
//                         initial={{ opacity: 0, x: -5 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.3, delay: 0.3 }}
//                       >
//                         Industry trend analysis with actionable insights
//                       </motion.li>
//                       <motion.li
//                         initial={{ opacity: 0, x: -5 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.3, delay: 0.5 }}
//                       >
//                         Customer success stories and case studies
//                       </motion.li>
//                       <motion.li
//                         initial={{ opacity: 0, x: -5 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.3, delay: 0.7 }}
//                       >
//                         How-to guides and tutorial content
//                       </motion.li>
//                     </ul>
//                     <p className="mt-2 text-gray-800">Would you like me to elaborate on any of these ideas or suggest more specific topics for your industry?</p> */}

//                   </div>
//                 </motion.div>
//               )}
//             </div>
//           ) : (
//             <div className="h-full w-full flex items-center justify-center">
//               <div className="w-full h-6 bg-gray-200 rounded-full opacity-20"></div>
//             </div>
//           )}
//         </div>

//         {/* Chat input */}
//         <div className="p-2 border-t border-teal-700 bg-gray-50">
//           <div className="flex items-center bg-white rounded-sm border border-gray-200 pr-1 sm:pr-2">
//             <div className="flex-1 pl-3 sm:pl-4 pr-1 sm:pr-2 py-3">
//               <motion.div
//                 className="flex items-center text-xs sm:text-sm"
//                 animate={{ opacity: isTyping && chatStep === 1 ? 1 : 0.8 }}
//               >
//                 <span className={`${(isTyping && chatStep === 1) ? 'text-gray-700' : 'text-gray-400'} truncate`}>
//                   {inputText || "Type your message..."}
//                   {isTyping && chatStep === 1 && (
//                     <motion.span
//                       className="inline-block w-0.5 h-3 sm:h-4 bg-gray-700 ml-0.5"
//                       animate={{ opacity: [1, 0, 1] }}
//                       transition={{ duration: 1, repeat: Infinity }}
//                     />
//                   )}
//                 </span>
//               </motion.div>
//             </div>

//             <div className="flex items-center space-x-2">
//               <motion.button
//                 className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray100 flex items-center justify-center"
//                 // whileHover={{ scale: 1.05, backgroundColor: "#204E4C" }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Paperclip className="h-3 w-3 sm:h-4 sm:w-4 text-teal-700" />
//               </motion.button>

//               <motion.button
//                 className={`rounded-md p-2 ${chatStep === 1 && inputText ? 'bg-teal-600 text-white' : 'bg-teal-700 text-white'} flex items-center justify-center`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 animate={{ scale: chatStep === 1 && inputText.length > 10 ? [1, 1.05, 1] : 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {/* <ArrowUp className="h-3 w-3 sm:h-4 sm:w-4" /> */}
//                 <Send className="h-3 w-3 sm:h-4 sm:w-4" />
//               </motion.button>
//             </div>
//           </div>
//         </div>

//         {/* Feature bar */}
//         {/* <div className="p-2 border-t border-gray-200 flex items-center justify-between bg-white">
//           <div className="flex space-x-2">
//             <motion.button
//               className="w-8 h-8 rounded flex items-center justify-center text-gray-500 hover:bg-gray-100"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Image className="h-4 w-4" />
//             </motion.button>
//             <motion.button
//               className="w-8 h-8 rounded flex items-center justify-center text-gray-500 hover:bg-gray-100"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Smile className="h-4 w-4" />
//             </motion.button>
//             <motion.button
//               className="w-8 h-8 rounded flex items-center justify-center text-gray-500 hover:bg-gray-100"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <FileText className="h-4 w-4" />
//             </motion.button>
//           </div>

//           <motion.button
//             className="px-3 py-1 rounded-full text-xs font-medium text-cyan-600 bg-cyan-50 hover:bg-cyan-100"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Ask AI
//           </motion.button>
//         </div> */}
//       </div>
//     </div>
//   );
// };


// export function RotatingServiceShowcase() {
//   const [activeServiceIndex, setActiveServiceIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Auto-rotate through services
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsTransitioning(true);

//       setTimeout(() => {
//         setActiveServiceIndex((current) =>
//           current === aiServices.length - 1 ? 0 : current + 1
//         );
//         setIsTransitioning(false);
//       }, 500); // Wait for exit animation

//     }, 8000); // Change service every 8 seconds

//     return () => clearInterval(interval);
//   }, []);


//   // Current active service
//   const activeService = aiServices[0];
//   // const activeService = aiServices[activeServiceIndex];

//   return (
//     <div className="w-full sm:h-lg h-auto relative mt-10">
//       <AnimatePresence mode="wait">

//         <motion.div
//           key={activeService.id}
//           className={`light-card p-3 sm:p-6 relative overflow-hidden flex flex-col sm:flex-row gap-6 sm:gap-12 rounded-lg shadow-lg border border-gray-200 transition-all duration-500 ease-in-out ${activeService.bgLight} ${activeService.textColor}`}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.5 }}
//         >

//           <section className="lg:w-1/2 w-full py-3">
//             {/* Card top pattern */}
//             <div className={`absolute top-0 right-0 h-1 w-full ${activeService.color === "blue" ? "bg-blue-500" : activeService.color === "cyan" ? "bg-cyan-500" : "bg-sky-500"}`}></div>

//             {/* Card header */}
//             <div className="mb-3 sm:mb-6 flex items-center">
//               <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${activeService.iconBg} shadow-md flex items-center justify-center shrink-0 mr-3 sm:mr-4`}>
//                 <div className="text-white">{activeService.icon}</div>
//               </div>
//               <div>
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">{activeService.title}</h3>
//                 <p className="text-xs sm:text-sm text-gray-600">{activeService.subtitle}</p>
//               </div>
//             </div>

//             {/* Description */}
//             <p className="text-gray-700 mb-3 text-sm sm:text-base">
//               {activeService.description}
//             </p>


//             {/* Feature boxes - Below service navigation */}
//             {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
//               {activeService.features.map((feature, idx) => (
//                 <motion.div
//                   key={idx}
//                   className={`p-3 rounded-lg ${activeService.bgLight} border ${activeService.borderColor} flex flex-col items-center text-center`}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: 0.2 + (idx * 0.1) }}
//                 >
//                   <div className={`w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-2 ${activeService.textColor}`}>
//                     {feature.icon}
//                   </div>
//                   <div className="font-medium text-gray-900 text-sm">{feature.title}</div>
//                   <div className="text-xs text-gray-600 mt-1">{feature.description}</div>
//                 </motion.div>
//               ))}
//             </div> */}

//           </section>

//           <section className="lg:w-1/2 w-full right-0">
//             {/* Service-specific animation - Auto height adapting to content */}
         
//               {activeService.animation === "typing" && (
//                 <div className="w-full max-w-xl mx-auto p-0 sm:p-4 relative">
//                   <TypingAnimation isActive={!isTransitioning} />
//                 </div>
//               )}


//             {/* Service selection indicator - Moved between animation and feature cards */}
//             <div className="flex justify-center my-4 space-x-2">
//               {aiServices.map((service, idx) => (
//                 <button
//                   key={service.id}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${activeServiceIndex === idx ?
//                     (service.color === "blue" ? "bg-blue-500 w-6" :
//                       service.color === "cyan" ? "bg-cyan-500 w-6" :
//                         service.color === "sky" ? "bg-sky-500 w-6" :
//                           "bg-indigo-500 w-6") :
//                     "bg-gray-300"}`}
//                   onClick={() => {
//                     setIsTransitioning(true);
//                     setTimeout(() => {
//                       setActiveServiceIndex(idx);
//                       setIsTransitioning(false);
//                     }, 500);
//                   }}
//                   aria-label={`Switch to ${service.title}`}
//                 />
//               ))}
//             </div>

//           </section>


//         </motion.div>

//       </AnimatePresence>
//     </div>
//   );
// }


















// working version of TypingAnimation2
// function TypingAnimation2({ isActive }) {
//   const [frameIndex, setFrameIndex] = useState(0);
//   const [messageIndex, setMessageIndex] = useState(0);
//   const [isTyping, setIsTyping] = useState(false);
//   const [displayMessages, setDisplayMessages] = useState([]);

//   const currentFrame = FRAMES[frameIndex];

//   // Reset when not active
//   useEffect(() => {
//     if (!isActive) {
//       setFrameIndex(0);
//       setMessageIndex(0);
//       setDisplayMessages([]);
//       setIsTyping(false);
//     }
//   }, [isActive]);

//   // Chat Engine
//   useEffect(() => {
//     if (!isActive) return;

//     const play = async () => {
//       const msg = currentFrame.messages[messageIndex];

//       // Lisa → show typing first
//       if (msg.from === "lisa") {
//         setIsTyping(true);

//         // Typing duration based on text length
//         await new Promise((res) =>
//           setTimeout(res, 700 + msg.text.length * 20)
//         );

//         setIsTyping(false);

//         setDisplayMessages((prev) => [...prev, msg]);
//       }

//       // User messages appear instantly
//       if (msg.from === "user") {
//         await new Promise((res) => setTimeout(res, 500));
//         setDisplayMessages((prev) => [...prev, msg]);
//       }

//       // Move to next message
//       if (messageIndex < currentFrame.messages.length - 1) {
//         setMessageIndex((prev) => prev + 1);
//       } else {
//         // Frame complete → wait then go next frame
//         await new Promise((res) => setTimeout(res, 1200));

//         const next = (frameIndex + 1) % FRAMES.length;
//         setFrameIndex(next);
//         setMessageIndex(0);
//         setDisplayMessages([]);
//       }
//     };

//     play();
//   }, [messageIndex, frameIndex, isActive]);


//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       <div className="absolute inset-0 px-4 py-4 flex flex-col justify-end space-y-3">

//         {/* Render Messages */}
//         {displayMessages.map((m, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.35 }}
//             className={`flex items-start ${
//               m.from === "user" ? "justify-end" : ""
//             }`}
//           >
//             {/* LISA */}
//             {m.from === "lisa" && (
//               <div className="flex items-start">
//                 <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center mr-2">
//                   <BrainCircuit className="w-4 h-4" />
//                 </div>

//                 <div className="bg-cyan-50 p-3 rounded-xl text-sm shadow-sm max-w-[75%]">
//                   {m.text}
//                 </div>
//               </div>
//             )}

//             {/* USER */}
//             {m.from === "user" && (
//               <div className="flex items-start justify-end">
//                 <div className="bg-gray-100 p-3 rounded-xl text-sm shadow-sm max-w-[75%]">
//                   {m.text}
//                 </div>
//                 <div className="w-8 h-8 rounded-full bg-gray-200 ml-2 flex items-center justify-center">
//                   <User className="w-4 h-4" />
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         ))}

//         {/* Lisa Typing Indicator */}
//         {isTyping && (
//           <div className="flex items-start">
//             <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center mr-2">
//               <BrainCircuit className="w-4 h-4" />
//             </div>

//             <div className="bg-cyan-50 p-3 rounded-xl flex space-x-1 shadow-sm">
//               {[0, 1, 2].map((d) => (
//                 <motion.span
//                   key={d}
//                   className="w-2 h-2 bg-cyan-400 rounded-full"
//                   animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
//                   transition={{
//                     duration: 0.6,
//                     repeat: Infinity,
//                     delay: d * 0.1,
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
