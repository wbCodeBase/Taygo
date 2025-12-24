// "use client"

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Play,
//   CheckCircle2,
//   Clock,
//   TrendingUp,
// } from "lucide-react";
// import Image from "next/image";

// export default function HeroSection({ hero, productName }) {
//   const [pipelineMode, setPipelineMode] = useState("purchase");

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   const chipVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: (i) => ({
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delay: 0.6 + i * 0.1,
//         duration: 0.5,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     }),
//   };

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setCount(Math.floor(Math.random() * 20) + 5);
//   }, []);

//   return (
//     <>
//       <section className="relative overflow-hidden bg-linear-to-br from-teal-50 via-white to-purple-50 py-20">
//         {/* Animated background elements */}
//         <motion.div
//           className="absolute top-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
//           animate={{
//             scale: [1, 1.2, 1],
//             x: [0, 30, 0],
//             y: [0, -20, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
//           animate={{
//             scale: [1, 1.3, 1],
//             x: [0, -30, 0],
//             y: [0, 20, 0],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />




//         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             {/* Left Column - Copy */}
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="text-center lg:text-left"
//             >
//               <motion.h1
//                 variants={itemVariants}
//                 className="text-ar-gray-700 text-2xl md:text-4xl font-semibold mb-3 leading-tight"
//               >
//                 Mortgage Pipeline Management Software that
//                 prevents deal leakage
//               </motion.h1>

//               <motion.p
//                 variants={itemVariants}
//                 className="text-gray-600 text-lg sm:text-xl mb-6 max-w-xl mx-auto lg:mx-0"
//               >
//                 PipelineOS™ automates stages, tasks, SLAs, and
//                 refinance workflows—so every file moves forward
//                 with visibility and control.
//               </motion.p>

//               <motion.div
//                 variants={itemVariants}
//                 className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start"
//               >
//                 <motion.button
//                   whileHover={{
//                     scale: 1.02,
//                     y: -2,
//                     boxShadow: "0 20px 40px rgba(20, 104, 106, 0.35)", // teal-500
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   className="px-8 py-4 bg-btn-green hover:btn-green-hover font-semibold cursor-pointer text-white rounded-xs shadow-lg transition-colors"
//                 >
//                   Book a PipelineOS Demo
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="px-8 py-4 bg-white cursor-pointer text-gray-900 rounded-xs shadow-md border border-gray-200 hover:border-btn-green transition-colors flex items-center justify-center gap-2"
//                 >
//                   <Play className="w-4 h-4" />
//                   Watch 90-sec Workflow
//                 </motion.button>
//               </motion.div>

//               <motion.div
//                 variants={itemVariants}
//                 className="flex flex-wrap gap-3 justify-center lg:justify-start"
//               >
//                 {[
//                   { label: "Custom stages", icon: CheckCircle2 },
//                   { label: "SLA alerts", icon: Clock },
//                   { label: "Refi workflows", icon: TrendingUp },
//                 ].map((chip, i) => (
//                   <motion.div
//                     key={chip.label}
//                     custom={i}
//                     variants={chipVariants}
//                     whileHover={{ scale: 1.05, y: -2 }}
//                     className="px-4 py-2 bg-white rounded-sm shadow-sm border border-gray-200 flex items-center gap-2"
//                   >
//                     <chip.icon className="w-4 h-4 text-btn-green" />
//                     <span className="text-sm text-gray-700">
//                       {chip.label}
//                     </span>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             </motion.div>

//             {/* Right Column - Product Mock */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.3,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="relative"
//             >
//               {/* Toggle */}
//               <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//                 className="flex justify-center mb-6"
//               >
//                 <div className="bg-white rounded-full p-1 shadow-lg inline-flex">
//                   <button
//                     onClick={() => setPipelineMode("purchase")}
//                     className={`px-6 py-2 rounded-full cursor-pointer transition-all ${pipelineMode === "purchase"
//                         ? "bg-btn-green text-white shadow-md"
//                         : "text-gray-600"
//                       }`}
//                   >
//                     Purchase
//                   </button>
//                   <button
//                     onClick={() => setPipelineMode("refinance")}
//                     className={`px-6 py-2 rounded-full cursor-pointer transition-all ${pipelineMode === "refinance"
//                         ? "bg-btn-green text-white shadow-md"
//                         : "text-gray-600"
//                       }`}
//                   >
//                     Refinance
//                   </button>
//                 </div>
//               </motion.div>

//               {/* Pipeline Board Mock */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={pipelineMode}
//                   initial={{
//                     opacity: 0,
//                     scale: 0.95,
//                     rotateY: 10,
//                   }}
//                   animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//                   exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
//                   transition={{ duration: 0.5 }}
//                   className="bgwhite rounded-2xl shadow2xl p6 borde border-gray-200"
//                 >

//                   {pipelineMode === "purchase" ?
//                     <Image src="https://www.insightly.com/wp-content/uploads/2025/03/Frame-1538229141-1024x729.png" alt="crm-product-hero" width={700} height={400} />
//                     : <Image src="https://www.insightly.com/wp-content/uploads/2025/03/appconnect-newhero-3x-1536x949.png" alt="crm-product-hero" width={700} height={400} />
//                   }


//                 </motion.div>
//               </AnimatePresence>


//               {/* Floating elements */}
//               <motion.div
//                 animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//                 className="absolute top-14 -right-4 bg-white rounded-lg shadow-xl p-3 border border-gray-200"
//               >
//                 <div className="flex items-center gap-2">
//                   <CheckCircle2 className="w-5 h-5 text-teal-500" />
//                   <span className="text-sm">Auto-assigned</span>
//                 </div>
//               </motion.div>

//               <motion.div
//                 animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   delay: 1,
//                 }}
//                 className="absolute bottom-2 -left-4 bg-white rounded-lg shadow-xl p-3 border border-gray-200"
//               >
//                 <div className="flex items-center gap-2">
//                   <TrendingUp className="w-5 h-5 text-teal-500" />
//                   <span className="text-sm">+24% faster</span>
//                 </div>
//               </motion.div>

//             </motion.div>
//           </div>
//         </div>




//       </section>

//     </>
//   );
// }












"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  CheckCircle2,
  Clock,
  TrendingUp,
  Zap,
  Target,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";

// Icon mapping for dynamic badges
const iconMap = {
  "AI Lead Scoring": Target,
  "Instant Follow-Ups": Zap,
  "Multi-Channel Outreach": Users,
  "Zero Missed Leads": Shield,
  "AI-Guided 1003": CheckCircle2,
  "Smart Document Collection": CheckCircle2,
  "Real-Time Status Updates": Clock,
  "Higher Completion Rates": TrendingUp,
  "Custom stages": CheckCircle2,
  "SLA alerts": Clock,
  "Refi workflows": TrendingUp,
};

export default function HeroSection({ hero, productName }) {
  const [pipelineMode, setPipelineMode] = useState("purchase");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(Math.floor(Math.random() * 20) + 5);
  }, []);

  // Get icon component or default to CheckCircle2
  const getIconForBadge = (badgeLabel) => {
    return iconMap[badgeLabel] || CheckCircle2;
  };

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-teal-50 via-white to-purple-50 py-20">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Copy */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.h1
                variants={itemVariants}
                className="text-ar-gray-700 text-2xl md:text-4xl font-semibold mb-3 leading-tight"
              >
                {hero.h1}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 text-lg sm:text-xl mb-6 max-w-xl mx-auto lg:mx-0"
              >
                {hero.subhead}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start"
              >
                <motion.a
                  href={hero.primaryCTA.link}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    boxShadow: "0 20px 40px rgba(20, 104, 106, 0.35)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-btn-green hover:btn-green-hover font-semibold cursor-pointer text-white rounded-xs shadow-lg transition-colors"
                >
                  {hero.primaryCTA.text}
                </motion.a>
                <motion.a
                  href={hero.secondaryCTA.link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white cursor-pointer text-gray-900 rounded-xs shadow-md border border-gray-200 hover:border-btn-green transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  {hero.secondaryCTA.text}
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {hero.badges.map((badge, i) => {
                  const IconComponent = getIconForBadge(badge);
                  return (
                    <motion.div
                      key={badge}
                      custom={i}
                      variants={chipVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-white rounded-sm shadow-sm border border-gray-200 flex items-center gap-2"
                    >
                      <IconComponent className="w-4 h-4 text-btn-green" />
                      <span className="text-sm text-gray-700">
                        {badge}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Column - Product Mock */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Toggle - Only show for PipelineOS */}
              {productName === "PipelineOS" && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center mb-6"
                >
                  <div className="bg-white rounded-full p-1 shadow-lg inline-flex">
                    <button
                      onClick={() => setPipelineMode("purchase")}
                      className={`px-6 py-2 rounded-full cursor-pointer transition-all ${pipelineMode === "purchase"
                          ? "bg-btn-green text-white shadow-md"
                          : "text-gray-600"
                        }`}
                    >
                      Purchase
                    </button>
                    <button
                      onClick={() => setPipelineMode("refinance")}
                      className={`px-6 py-2 rounded-full cursor-pointer transition-all ${pipelineMode === "refinance"
                          ? "bg-btn-green text-white shadow-md"
                          : "text-gray-600"
                        }`}
                    >
                      Refinance
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Product Image/Mock */}

              {pipelineMode === "purchase" ?
                <Image src="https://www.insightly.com/wp-content/uploads/2025/03/Frame-1538229141-1024x729.png" alt="crm-product-hero" width={700} height={400} />
                : <Image src="https://www.insightly.com/wp-content/uploads/2025/03/appconnect-newhero-3x-1536x949.png" alt="crm-product-hero" width={700} height={400} />
              }




              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-14 -right-4 bg-white rounded-lg shadow-xl p-3 border border-gray-200"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-500" />
                  <span className="text-sm">Auto-assigned</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                }}
                className="absolute bottom-2 -left-4 bg-white rounded-lg shadow-xl p-3 border border-gray-200"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-teal-500" />
                  <span className="text-sm">+24% faster</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}