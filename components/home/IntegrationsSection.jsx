import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  CreditCard,
  FileText,
  Users,
  Landmark,
  PenTool,
  Server,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Home,
  Map,
  Key,
  Search,
  Calculator,
  BarChart3,
  TrendingUp,
  DollarSign,
  Percent,
  Store,
  Smartphone,
  Share2,
  Plus,
  Check,
  Loader2
} from "lucide-react";
// import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import taygoIcon from "@/public/logo/taygoIcon.png"

import facebook from "@/public/integrationToolsLogo/facebook.png"
import linkedin from "@/public/integrationToolsLogo/linkedin.png"
import pinterest from "@/public/integrationToolsLogo/pinterest.png"
import twitter from "@/public/integrationToolsLogo/twitter.png"
import velocify from "@/public/integrationToolsLogo/Velocify.png"
import floify from "@/public/integrationToolsLogo/floify.png"
import blend from "@/public/integrationToolsLogo/blend.png"
import simpleNexus from "@/public/integrationToolsLogo/simpleNexus.png"


const categories = [
  { id: "social", label: "Social Media" },
  { id: "pos", label: "Point of Sale" },
  // { id: "real_estate", label: "Real Estate" },
  // { id: "price_engine", label: "Price Engine" },
];

const integrationData = {
  social: [
    // { icon: Instagram, label: "Instagram", color: "text-pink-600", x: -200, y: -100 },
    { icon: facebook, label: "Facebook", color: "text-blue-600", x: -400, y: 100 },
    { icon: linkedin, label: "LinkedIn", color: "text-blue-700", x: 240, y: 180 },
    { icon: pinterest, label: "Pinterest", color: "text-sky-500", x: -240, y: 180 },
    { icon: twitter, label: "Twitter", color: "text-red-600", x: 380, y: 100 },
  ],
  // pos: [
  //   { icon: Velocify, label: "LOS Sync", color: "text-blue-500", x: -350, y: 0 },
  //   { icon: CreditCard, label: "Credit", color: "text-emerald-500", x: -250, y: -120 },
  //   { icon: Smartphone, label: "Mobile App", color: "text-violet-500", x: -250, y: 120 },
  //   { icon: PenTool, label: "E-Sign", color: "text-rose-500", x: 250, y: 120 },
  // ],
  pos: [
    { icon: velocify, label: "Velocify", color: "text-blue-600", x: -400, y: 100 },
    { icon: floify, label: "Floify", color: "text-blue-700", x: 240, y: 180 },
    { icon: blend, label: "Blend", color: "text-sky-500", x: -240, y: 180 },
    { icon: simpleNexus, label: "Simple Nexus", color: "text-red-600", x: 380, y: 100 },
  ],
  real_estate: [
    { icon: Home, label: "Zillow", color: "text-blue-600", x: -300, y: -80 },
    { icon: Map, label: "MLS Feeds", color: "text-green-600", x: -200, y: 80 },
    { icon: Search, label: "Realtor.com", color: "text-red-500", x: 0, y: -160 },
    { icon: Key, label: "Redfin", color: "text-red-600", x: 200, y: 80 },
    { icon: Building2, label: "Commercial", color: "text-slate-600", x: 300, y: -80 },
    { icon: Users, label: "Agents", color: "text-green-600", x: 0, y: 160 },
  ],
  price_engine: [
    { icon: Calculator, label: "Optimal Blue", color: "text-blue-700", x: -320, y: -60 },
    { icon: TrendingUp, label: "Mortech", color: "text-green-700", x: -220, y: 80 },
    { icon: Percent, label: "Polly", color: "text-purple-600", x: -120, y: -120 },
    { icon: DollarSign, label: "LenderPrice", color: "text-green-500", x: 120, y: -120 },
    { icon: BarChart3, label: "Rates Live", color: "text-orange-600", x: 220, y: 80 },
    { icon: Landmark, label: "Secondary", color: "text-slate-700", x: 320, y: -60 },
  ]
};

// Helper to generate curved path
const getPath = (x, y) => {
  const startX = 500;
  const startY = 300;
  const endX = 500 + x;
  const endY = 300 + y;

  // Smooth curve
  const controlX = startX + (endX - startX) * 0.5;
  return `M ${startX} ${startY} C ${controlX} ${startY}, ${controlX} ${endY}, ${endX} ${endY}`;
};

function IntegrationNode({ item, index, activeCategory }) {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    // Reset status when category changes
    setStatus("idle");

    // Staggered simulation of "Auto Connect"
    // Each item connects one by one to show how easy it is
    const startDelay = 500 + (index * 800); // Stagger start

    const connectTimer = setTimeout(() => {
      setStatus("connecting");

      // Simulate network request/processing time
      setTimeout(() => {
        setStatus("connected");
      }, 1200);

    }, startDelay);

    return () => clearTimeout(connectTimer);
  }, [activeCategory, index]);

  return (
    <motion.div
      className="absolute z-10"
      style={{
        left: '50%',
        top: '50%',
        marginLeft: item.x - 32,
        marginTop: item.y - 32,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut"
      }}
    >
      <div className="group relative flex flex-col items-center">
        {/* Connection Line */}
        <svg className="absolute w-[1000px] h-[600px] -z-10 pointer-events-none overflow-visible"
          style={{
            left: -500 - item.x + 32,
            top: -300 - item.y + 32
          }}
        >
          {/* Base grey line (always visible but faint) */}
          {/* <path
              d={getPath(item.x, item.y)}
              stroke="currentColor"
              strokeWidth="2"
              className="text-muted/30"
              fill="none"
            /> */}

          {/* Active Connection Line (Fills up when connected) */}
          {status === "connected" && (
            <motion.path
              d={getPath(item.x, item.y)}
              stroke="currentColor"
              strokeWidth="2"
              className="text-green-700"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}

          {/* Data Packet (Only flows when connected) */}
          {status === "connected" && (
            <motion.circle r="3" fill="currentColor" className="text-green-700">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                keyPoints="0;1"
                keyTimes="0;1"
              >
                <mpath href={`#path-curve-${activeCategory}-${index}`} />
              </animateMotion>
            </motion.circle>
          )}
          <defs>
            <path id={`path-curve-${activeCategory}-${index}`} d={getPath(item.x, item.y)} />
          </defs>
        </svg>

        {/* App Card */}
        <div className={cn(
          "relative w16 h16 px-5 bg-white border shadow-sm flex items-center justify-center transition-all duration-500 rounded-2xl",
          status === "idle" && "grayscale opacity-70 border-border",
          status === "connecting" && "border-primary/50 shadow-[0_0_15px_-3px_rgba(var(--primary),0.3)] scale-105",
          status === "connected" && "border-border hover:shadow-lg hover:-translate-y-1"
        )}>
          {/* <item.icon
            size={28}
            strokeWidth={1.5}
            className={cn(
              "transition-colors duration-500",
              status === "connected" ? item.color : "text-muted-foreground"
            )}
          /> */}

          <Image src={item?.icon} alt="logos" className="h-20 w-20 object-contain" />

          {/* Status Badge */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-background rounded-full flex items-center justify-center border shadow-sm z-10">
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                  className="text-muted-foreground"
                >
                  <Plus size={14} />
                </motion.div>
              )}
              {status === "connecting" && (
                <motion.div
                  key="connecting"
                  initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                  className="text-primary"
                >
                  <Loader2 size={14} className="animate-spin" />
                </motion.div>
              )}
              {status === "connected" && (
                <motion.div
                  key="connected"
                  initial={{ scale: 0 }} animate={{ scale: 1.1 }}
                  className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center"
                >
                  <Check size={12} className="text-white font-bold" strokeWidth={3} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Label */}
        <span className={cn(
          "mt-3 text-xs font-semibold px-2 py-1 rounded-md transition-colors duration-500",
          status === "connected" ? "text-foreground bg-secondary/50" : "text-muted-foreground opacity-50"
        )}>
          {item.label}
        </span>
      </div>
    </motion.div>
  );
}

export function IntegrationsSection() {
  const [activeCategory, setActiveCategory] = useState("pos");

  return (
    <section className="pb-20 mb-20 relative overflow-hidden bg-background flex flex-col items-center justify-center min-h-[680px]">
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >


          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 text-balance">
              Your AI agent works wherever your data lives
            </h2>
            <p className="text-base md:text-lg font-medium mb-4 text-balance max-w-5xl mx-auto text-gray-700">
              Integrated with top mortgage platforms for smooth, automated workflows.
            </p>
          </div>



          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-gray-50 backdrop-blur-sm border border-border/50 rounded-xs w-fit mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "relative px-6 py-2.5 rounded-xs text-sm font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  activeCategory === cat.id
                    ? "text-white bg-green-700"
                    : "text-gray-600 hover:text-gray-700 border border-gray-700 cursor-pointer"
                )}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-md shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="text-center my-12 text-2xl font-semibold text-gray-700">{activeCategory==="social"? "Social Media" : "Point of Sale" }</div>

        {/* Animation Container */}
        <div className="relative mb-20 mt-8 h[400px] w-full max-w-5xl mx-auto flex items-center justify-center">


          {/* CORE NODE - The CRM Hub */}
          <motion.div
            className="relative z-20 bg-white rounded-full p-10 shadow-2xl flex items-center justify-center group"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-1 flex items-center justify-center rounded-2xl overflow-hidden">
              <div className="flex flex-col items-center z-10">
                <Image src={taygoIcon} alt="taygoLogo" height={70} width={70} />
              </div>
            </div>
          </motion.div>



          {/* CONNECTED APPS */}
          <AnimatePresence mode="wait">
            {integrationData[activeCategory].map((item, i) => (
              <IntegrationNode
                key={`${activeCategory}-${i}`}
                item={item}
                index={i}
                activeCategory={activeCategory}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}











// "use client"

// import { useState, useEffect } from "react"



// const technologies = [
//   // Infrastructure
//   { name: "Redis", category: "Infrastructure", logoPath: "/techLogos/redis.png" },
//   { name: "Jenkins", category: "Infrastructure", logoPath: "/techLogos/Jenkins.svg" },
//   // { name: "AWS", category: "Infrastructure", logoPath: "/techLogos/aws.webp" },
//   // { name: "Nginx", category: "Infrastructure", logoPath: "/techLogos/nginx.webp" },
//   // { name: "Docker", category: "Infrastructure", logoPath: "/techLogos/docker.webp" },

//   // Database
//   { name: "MySQL", category: "Database", logoPath: "/techLogos/mysql.webp" },
//   { name: "MongoDB", category: "Database", logoPath: "/techLogos/mongodb.webp" },

//   // API & Services
//   { name: "GraphQL", category: "API", logoPath: "/techLogos/graphQL.webp" },

//   // Backend Languages
//   { name: "Go", category: "Backend", logoPath: "/techLogos/go.webp" },
//   { name: "Kotlin", category: "Backend", logoPath: "/techLogos/kotlin.png" },
//   { name: "PHP", category: "Backend", logoPath: "/techLogos/php.webp" },
//   // { name: "Java", category: "Backend", logoPath: "/techLogos/java.png" },
//   // { name: "Python", category: "Backend", logoPath: "/techLogos/python.svg" },
//   // { name: "Node.js", category: "Backend", logoPath: "/techLogos/nodejs.svg" },

//   // Mobile
//   { name: "Flutter", category: "Mobile", logoPath: "/techLogos/flutter.webp" },

//   // Frontend
//   { name: "Svelte", category: "Frontend", logoPath: "/techLogos/svelte.png" },
//   { name: "Angular", category: "Frontend", logoPath: "/techLogos/angular.webp" },
//   { name: "Vue.js", category: "Frontend", logoPath: "/techLogos/vuejs.webp" },
//   // { name: "TypeScript", category: "Frontend", logoPath: "/techLogos/typescript.svg" },
//   // { name: "Next.js", category: "Frontend", logoPath: "/techLogos/next.svg" },
//   // { name: "React", category: "Frontend", logoPath: "/techLogos/react.webp" },
//   // { name: "Tailwind", category: "Frontend", logoPath: "/techLogos/tailwind.png" },
// ]


// const categories = ["All", "Infrastructure", "Database", "API", "Backend", "Mobile", "Frontend"]

// export default function IntegrationsSection() {
//   const [activeCategory, setActiveCategory] = useState("All")
//   const [filteredTechs, setFilteredTechs] = useState(technologies)
//   const [isTransitioning, setIsTransitioning] = useState(false)

//   useEffect(() => {
//     setIsTransitioning(true)
//     const timer = setTimeout(() => {
//       if (activeCategory === "All") {
//         setFilteredTechs(technologies)
//       } else {
//         setFilteredTechs(technologies.filter((tech) => tech.category === activeCategory))
//       }
//       setIsTransitioning(false)
//     }, 150)
//     return () => clearTimeout(timer)
//   }, [activeCategory])

//   return (


//     <section className="w-full py-24 px-4 border sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
//       <div className="max-w-7xl mx-auto">

//         {/* heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 text-balance">
//             Your AI agent works wherever your data lives
//           </h2>
//           <p className="text-base md:text-lg font-medium mb-4 text-balance max-w-5xl mx-auto text-gray-700">
//             Integrated with top mortgage platforms for smooth, automated workflows.
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16 pb-6 border-b border-slate-200">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-4 sm:px-6 cursor-pointer py-2.5 rounded-xs font-medium text-sm tracking-wide transition-all duration-300 ease-out ${activeCategory === category
//                   ? "bg-slate-900 text-white shadow-lg hover:shadow-xl hover:bg-slate-800"
//                   : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50"
//                 }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div
//           className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 justify-items-center     border gap-5 sm:gap-6 lg:gap-7 transition-all duration-500 ease-out ${isTransitioning ? "opacity-30 scale-95" : "opacity-100 scale-100"
//             }`}
//         >
//           {filteredTechs.map((tech, index) => (
//             <div
//               key={tech.name}
//               style={{
//                 animationDelay: isTransitioning ? "0ms" : `${index * 50}ms`,
//               }}
//               className="group animate-in fade-in slide-in-from-bottom-4 flex flex-col items-center justify-center p-5 rounded-xs border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
//             >
//               <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-xs bg-linear-to-br from-slate-100 to-slate-50 group-hover:from-slate-200 group-hover:to-slate-100 transition-all duration-300 flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md">
//                 <img
//                   src={`${tech.logoPath}?height=64&width=64`}
//                   alt={tech.name}
//                   className="w-12 h-12 sm:w-16 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-110"
//                   onError={(e) => {
//                     e.currentTarget.src = `/placeholder.svg?height=64&width=64&query=${tech.name}+logo`
//                   }}
//                 />
//               </div>

//               <h3 className="text-center font-semibold text-slate-900 text-sm sm:text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
//                 {tech.name}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>







//   )
// }








