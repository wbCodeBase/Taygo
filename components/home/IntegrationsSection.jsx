"use client"

import { useState, useEffect } from "react"



const technologies = [
  // Infrastructure
  { name: "Redis", category: "Infrastructure", logoPath: "/techLogos/redis.png" },
  { name: "Jenkins", category: "Infrastructure", logoPath: "/techLogos/Jenkins.svg" },
  // { name: "AWS", category: "Infrastructure", logoPath: "/techLogos/aws.webp" },
  // { name: "Nginx", category: "Infrastructure", logoPath: "/techLogos/nginx.webp" },
  // { name: "Docker", category: "Infrastructure", logoPath: "/techLogos/docker.webp" },

  // Database
  { name: "MySQL", category: "Database", logoPath: "/techLogos/mysql.webp" },
  { name: "MongoDB", category: "Database", logoPath: "/techLogos/mongodb.webp" },

  // API & Services
  { name: "GraphQL", category: "API", logoPath: "/techLogos/graphQL.webp" },

  // Backend Languages
  { name: "Go", category: "Backend", logoPath: "/techLogos/go.webp" },
  { name: "Kotlin", category: "Backend", logoPath: "/techLogos/kotlin.png" },
  { name: "PHP", category: "Backend", logoPath: "/techLogos/php.webp" },
  // { name: "Java", category: "Backend", logoPath: "/techLogos/java.png" },
  // { name: "Python", category: "Backend", logoPath: "/techLogos/python.svg" },
  // { name: "Node.js", category: "Backend", logoPath: "/techLogos/nodejs.svg" },

  // Mobile
  { name: "Flutter", category: "Mobile", logoPath: "/techLogos/flutter.webp" },

  // Frontend
  { name: "Svelte", category: "Frontend", logoPath: "/techLogos/svelte.png" },
  { name: "Angular", category: "Frontend", logoPath: "/techLogos/angular.webp" },
  { name: "Vue.js", category: "Frontend", logoPath: "/techLogos/vuejs.webp" },
  // { name: "TypeScript", category: "Frontend", logoPath: "/techLogos/typescript.svg" },
  // { name: "Next.js", category: "Frontend", logoPath: "/techLogos/next.svg" },
  // { name: "React", category: "Frontend", logoPath: "/techLogos/react.webp" },
  // { name: "Tailwind", category: "Frontend", logoPath: "/techLogos/tailwind.png" },
]


const categories = ["All", "Infrastructure", "Database", "API", "Backend", "Mobile", "Frontend"]

export default function IntegrationsSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredTechs, setFilteredTechs] = useState(technologies)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => {
      if (activeCategory === "All") {
        setFilteredTechs(technologies)
      } else {
        setFilteredTechs(technologies.filter((tech) => tech.category === activeCategory))
      }
      setIsTransitioning(false)
    }, 150)
    return () => clearTimeout(timer)
  }, [activeCategory])

  return (


    <section className="w-full py-24 px-4 border sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 text-balance">
            Your AI agent works wherever your data lives
          </h2>
          <p className="text-base md:text-lg font-medium mb-4 text-balance max-w-5xl mx-auto text-gray-700">
            Integrated with top mortgage platforms for smooth, automated workflows.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16 pb-6 border-b border-slate-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 cursor-pointer py-2.5 rounded-xs font-medium text-sm tracking-wide transition-all duration-300 ease-out ${activeCategory === category
                  ? "bg-slate-900 text-white shadow-lg hover:shadow-xl hover:bg-slate-800"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 justify-items-center     border gap-5 sm:gap-6 lg:gap-7 transition-all duration-500 ease-out ${isTransitioning ? "opacity-30 scale-95" : "opacity-100 scale-100"
            }`}
        >
          {filteredTechs.map((tech, index) => (
            <div
              key={tech.name}
              style={{
                animationDelay: isTransitioning ? "0ms" : `${index * 50}ms`,
              }}
              className="group animate-in fade-in slide-in-from-bottom-4 flex flex-col items-center justify-center p-5 rounded-xs border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-18 h-18 sm:w-24 sm:h-24 rounded-xs bg-linear-to-br from-slate-100 to-slate-50 group-hover:from-slate-200 group-hover:to-slate-100 transition-all duration-300 flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md">
                <img
                  src={`${tech.logoPath}?height=64&width=64`}
                  alt={tech.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `/placeholder.svg?height=64&width=64&query=${tech.name}+logo`
                  }}
                />
              </div>

              <h3 className="text-center font-semibold text-slate-900 text-sm sm:text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>







  )
}








