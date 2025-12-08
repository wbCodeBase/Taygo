import React from 'react'
import Image from 'next/image'

// Backend Tech Logos
import redis from "@/public/techLogos/redis.png";
import Jenkins from "@/public/techLogos/Jenkins.svg";
import aws from "@/public/techLogos/aws.webp";
import nginx from "@/public/techLogos/nginx.webp";
import mysql from "@/public/techLogos/mysql.webp";
import docker from "@/public/techLogos/docker.webp";
import graphQL from "@/public/techLogos/graphQL.webp";
import mongodb from "@/public/techLogos/mongodb.webp";

// Programming Languages
import go from "@/public/techLogos/go.webp";
import kotlin from "@/public/techLogos/kotlin.png";
import flutter from "@/public/techLogos/flutter.webp";
import php from "@/public/techLogos/php.webp";
import java from "@/public/techLogos/java.png";
import python from "@/public/techLogos/python.svg";
import nodejs from "@/public/techLogos/nodejs.svg";

// Frontend Tech Logos
import svelte from "@/public/techLogos/svelte.png";
import angular from "@/public/techLogos/angular.webp";
import vuejs from "@/public/techLogos/vuejs.webp";
import typescript from "@/public/techLogos/typescript.svg";
import next from "@/public/techLogos/next.svg";
import react from "@/public/techLogos/react.webp";
import tailwind from "@/public/techLogos/tailwind.png";

const integrations = [
  {
    category: 'Social Media',
    description: 'Connect with platforms your customers use every day',
    tools: [
      { name: 'React', icon: react },
      { name: 'Next.js', icon: next },
      { name: 'Tailwind CSS', icon: tailwind },
      { name: 'TypeScript', icon: typescript },
      { name: 'Vue.js', icon: vuejs },
      { name: 'Angular', icon: angular },
      { name: 'Svelte', icon: svelte },
    ]
  },
  {
    category: 'Point of Sales',
    description: 'Streamline transactions and inventory management',
    tools: [
      { name: 'Node.js', icon: nodejs },
      { name: 'Python', icon: python },
      { name: 'Java', icon: java },
      { name: 'PHP', icon: php },
      { name: 'Flutter', icon: flutter },
      { name: 'Kotlin', icon: kotlin },
      { name: 'Go', icon: go },
    ]
  },
  {
    category: 'Price Engine',
    description: 'Dynamic pricing that adapts to market conditions',
    tools: [
      { name: 'React', icon: react },
      { name: 'Next.js', icon: next },
      { name: 'Tailwind CSS', icon: tailwind },
      { name: 'TypeScript', icon: typescript },
      { name: 'Vue.js', icon: vuejs },
      { name: 'Angular', icon: angular },
      { name: 'Svelte', icon: svelte },
    ]
  },
  {
    category: 'Real Estate',
    description: 'Property management and listing solutions',
    tools: [
      { name: 'MongoDB', icon: mongodb },
      { name: 'GraphQL', icon: graphQL },
      { name: 'Docker', icon: docker },
      { name: 'MySQL', icon: mysql },
      { name: 'Nginx', icon: nginx },
      { name: 'AWS', icon: aws },
      { name: 'Jenkins', icon: Jenkins },
      { name: 'Redis', icon: redis },
    ]
  },
]

export default function TechStackMarquee() {
  return (
    <section className='w-full bg-white py-24 px-4'>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            Integrations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect your tools and automate workflows across your entire stack
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integrations.map((integration, idx) => (
            <IntegrationCard key={idx} {...integration} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#" 
            className="inline-flex items-center text-[#006C5D] hover:text-[#004d42] font-medium text-base group"
          >
            Browse all integrations
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function IntegrationCard({ category, description, tools }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all duration-200">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {category}
        </h3>
        <p className="text-sm text-gray-600">
          {description}
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-4 gap-3">
        {tools.map((tool, index) => (
          <ToolIcon key={`${tool.name}-${index}`} name={tool.name} icon={tool.icon} />
        ))}
      </div>
    </div>
  )
}

function ToolIcon({ name, icon }) {
  return (
    <div className="group/tool relative flex items-center justify-center">
      <div className="w-full aspect-square bg-gray-50 rounded-lg p-3 border border-gray-200 hover:border-[#006C5D] hover:bg-gray-100 transition-all duration-200 cursor-pointer">
        <div className="relative w-full h-full">
          <Image 
            src={icon} 
            alt={`${name} logo`} 
            fill={true}
            className="object-contain"
          />
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tool:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
        {name}
      </div>
    </div>
  )
}







// import React from 'react'
// import Image from 'next/image'

// // Certifications

// // Backend Tech Logos
// import redis from "@/public/techLogos/redis.png";
// import Jenkins from "@/public/techLogos/Jenkins.svg";
// import aws from "@/public/techLogos/aws.webp";
// import nginx from "@/public/techLogos/nginx.webp";
// import mysql from "@/public/techLogos/mysql.webp";
// import docker from "@/public/techLogos/docker.webp";
// import graphQL from "@/public/techLogos/graphQL.webp";
// import mongodb from "@/public/techLogos/mongodb.webp";

// // Programming Languages
// import go from "@/public/techLogos/go.webp";
// import kotlin from "@/public/techLogos/kotlin.png";
// import flutter from "@/public/techLogos/flutter.webp";
// import php from "@/public/techLogos/php.webp";
// import java from "@/public/techLogos/java.png";
// import python from "@/public/techLogos/python.svg";
// import nodejs from "@/public/techLogos/nodejs.svg";

// // Frontend Tech Logos
// import svelte from "@/public/techLogos/svelte.png";
// import angular from "@/public/techLogos/angular.webp";
// import vuejs from "@/public/techLogos/vuejs.webp";
// import typescript from "@/public/techLogos/typescript.svg";
// import next from "@/public/techLogos/next.svg";
// import react from "@/public/techLogos/react.webp";
// import tailwind from "@/public/techLogos/tailwind.png";


// const frontend = [
//   { name: 'React', icon: react },
//   { name: 'Next.js', icon: next },
//   { name: 'Tailwind CSS', icon: tailwind },
//   { name: 'TypeScript', icon: typescript },
//   { name: 'Vue.js', icon: vuejs },
//   { name: 'Angular.js', icon: angular },
//   { name: 'Svelte', icon: svelte },
// ]

// const backend = [
//   { name: 'Node.js', icon: nodejs },
//   { name: 'Python', icon: python },
//   { name: 'Java', icon: java },
//   { name: 'Php', icon: php },
//   { name: 'Flutter', icon: flutter },
//   { name: 'Kotlin', icon: kotlin },
//   { name: 'Go', icon: go },
// ]

// const toolsAndDbs = [
//   { name: 'MongoDB', icon: mongodb },
//   { name: 'GraphQL', icon: graphQL },
//   { name: 'Docker', icon: docker },
//   { name: 'MySql', icon: mysql },
//   { name: 'Nginx', icon: nginx },
//   { name: 'Aws', icon: aws },
//   { name: 'Jenkins', icon: Jenkins },
//   { name: 'Redis', icon: redis },
// ]



// export default function TechStackMarquee() {
//   return (
//     <>
//       <section className='lg:max-w-5xl w-full'>
//         <div className="flex flex-col gap-4 overflow-hidden py-2 text-gray-600">

//           <div className='flex justify-between items-center rounded-xs border'>
//             <div className='text-xl text-nowrap font-medium  px-4 py-6 rounded-l-xs bg-[#006C5D] w-54 text-white'>Social Media</div>
//             <MarqueeRow direction="right" techArr={frontend} />
//           </div>


//           <div className='flex justify-between items-center rounded-xs border'>
//             <div className='text-xl text-nowrap font-medium  px-4 py-6 rounded-l-xs bg-[#006C5D] w-54 text-white'>Point of Sales</div>
//             <MarqueeRow direction="left" techArr={backend} />
//           </div>


//           <div className='flex justify-between items-center rounded-xs border'>
//             <div className='text-xl text-nowrap font-medium  px-4 py-6 border bg-[#006C5D] rounded-l-xs w-54 text-white'>Price Engine</div>
//             <MarqueeRow direction="right" techArr={frontend} />
//           </div>


//           <div className='flex justify-between items-center rounded-xs border'>
//             <div className='text-xl text-nowrap font-medium  px-4 py-6 border bg-[#006C5D] rounded-l-xs w-[15rem] text-white'>Real Estate</div>
//             <MarqueeRow direction="right" techArr={toolsAndDbs} />
//           </div>

//         </div>


//       </section>
//     </>
//   )
// }

// function MarqueeRow({ direction, techArr }) {
//   const animationClass = direction === 'left' ? 'animate-marquee-reverse' : 'animate-marquee'
//   const animationClass2 = direction === 'left' ? 'animate-marquee2-reverse' : 'animate-marquee2'

//   return (
//     <div className="relative flex overflow-x-hidden py-1 group">
//       <div className={`flex whitespace-nowrap ${animationClass} group-hover:pause-animation`}>
//         {techArr.map((tech, index) => (
//           <TechIcon key={`${tech.name}-${index}`} name={tech.name} icon={tech.icon} />
//         ))}
//       </div>
//       <div className={`absolute top4 flex whitespace-nowrap ${animationClass2} group-hover:pause-animation`}>
//         {techArr.map((tech, index) => (
//           <TechIcon key={`${tech.name}-${index}-duplicate`} name={tech.name} icon={tech.icon} />
//         ))}
//       </div>
//     </div>
//   )
// }

// function TechIcon({ name, icon }) {
//   return (
//     <div className="flex flex-col items-center bg-gray-50 px-6 rounded-md justify-center mx-2">
//       <div className="relative w-16 h-16 mb2">
//         <Image src={icon} alt={`${name} icon`} fill={true} style={{ objectFit: "contain" }} />
//       </div>
//       {/* <span className="text-sm font-medium text-gray-600">{name}</span> sizes="(max-width: 768px) 100vw, 33vw"*/}
//     </div>
//   )
// }
