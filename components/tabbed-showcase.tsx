"use client"

import { useState } from "react"
import Image from "next/image"

const tabs = [
  {
    id: "projects",
    label: "Projects",
    color: "#6161FF",
    logo: "monday work management",
    heading: "Drive execution at scale",
    description:
      "Deliver projects, programs, and portfolios with full resource visibility and AI-powered risk detection.",
    badge: "Prioritize projects",
    testimonial1: {
      company: "HOLT CAT",
      stat: "$4M saved",
      statSuffix: "with optimized processes",
    },
    testimonial2: {
      quote:
        "monday.com gives us the visibility to get everyone on the same page and track all the moving parts of our projects.",
      author: "Jason Doan",
      role: "VP of Operations, HOLT CAT",
      avatar: "/placeholder.svg?height=48&width=48",
    },
  },
  {
    id: "sales",
    label: "Sales",
    color: "#00A4BD",
    logo: "monday CRM",
    heading: "Accelerate revenue growth",
    description:
      "Free your teams from data entry to focus on sales that nurture. Track all actions and code-free automations.",
    badge: "Detect client's sentiment",
    testimonial1: {
      company: "KC Petroleum, LLC",
      stat: "18x",
      statSuffix: "ROI achieved in the first year",
    },
    testimonial2: {
      quote:
        "As a VP, trying to look at a 30,000-ft view, I can see the percentage of successful opportunities and know-how to analyze the market.",
      author: "Christopher Stone",
      role: "VP Business Development, KC Petroleum",
      avatar: "/placeholder.svg?height=48&width=48",
    },
  },
  {
    id: "marketing",
    label: "Marketing",
    color: "#FF6B6B",
    logo: "monday marketer",
    heading: "Scale creative campaigns",
    description:
      "Streamline workflows, manage assets, and track performance across all marketing channels with AI insights.",
    badge: "Campaign analytics",
    testimonial1: {
      company: "Digital Agency Inc",
      stat: "3x",
      statSuffix: "faster campaign launches",
    },
    testimonial2: {
      quote: "The platform transformed how we manage campaigns, giving us clarity and speed we never had before.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      avatar: "/placeholder.svg?height=48&width=48",
    },
  },
  {
    id: "it-ops",
    label: "IT & Ops",
    color: "#9D7BFF",
    logo: "monday operations",
    heading: "Optimize IT workflows",
    description:
      "Manage tickets, track incidents, and automate IT operations with powerful integrations and real-time dashboards.",
    badge: "Incident management",
    testimonial1: {
      company: "Tech Solutions Co",
      stat: "60%",
      statSuffix: "reduction in response time",
    },
    testimonial2: {
      quote: "Our IT team can now handle twice as many requests with the same resources thanks to automation.",
      author: "Michael Chen",
      role: "IT Operations Manager",
      avatar: "/placeholder.svg?height=48&width=48",
    },
  },
  {
    id: "product-engineering",
    label: "Product & Engineering",
    color: "#00A65A",
    logo: "monday dev",
    heading: "Launch quality products faster",
    description: "Plan roadmaps, execute sprints, and ship with precision using AI-powered guidance.",
    badge: "Prioritize bugs",
    testimonial1: {
      company: "VISTRA",
      stat: "28%",
      statSuffix: "faster time to market",
    },
    testimonial2: {
      quote:
        "monday.dev ensures clear alignment between what we're building and market demand. Does it help us move faster? Without a doubt.",
      author: "Alon Schmoll",
      role: "Executive VP, Vistra Platform",
      avatar: "/placeholder.svg?height=48&width=48",
    },
  },
  {
    id: "leadership",
    label: "Leadership",
    color: "#FF9F40",
    logo: "monday strategy",
    heading: "Drive strategic alignment",
    description: "Connect strategy to execution with real-time visibility across all teams and initiatives.",
    badge: "Strategic planning",
    testimonial1: {
      company: "Global Enterprises",
      stat: "100%",
      statSuffix: "visibility across teams",
    },
    testimonial2: {
      quote: "Finally, we have a single source of truth that connects our strategy to day-to-day execution.",
      author: "Patricia Moore",
      role: "Chief Operating Officer",
      avatar: "/placeholder.svg?height=48&width=48",
    },
  },
]

export function TabbedShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const currentTab = tabs[activeTab]

  const renderMockup = () => {
    switch (activeTab) {
      case 0:
        return <ProjectsMockup />
      case 1:
        return <SalesMockup />
      case 2:
        return <MarketingMockup />
      case 3:
        return <ITOpsMockup />
      case 4:
        return <ProductEngineeringMockup />
      case 5:
        return <LeadershipMockup />
      default:
        return <ProjectsMockup />
    }
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 text-balance">
            A platform built for a new way of working
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 ${
                activeTab === index
                  ? "text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
              style={{
                backgroundColor: activeTab === index ? tab.color : undefined,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3 Card Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {/* Large Card - 2/3 width with content on left, mockup on right */}
          <div className="lg:col-span-2">
            <div
              className="rounded-3xl p-10 text-white transition-all duration-700 h-full relative overflow-hidden flex flex-col lg:flex-row gap-8 items-center"
              style={{
                backgroundColor: currentTab.color,
              }}
            >
              {/* Gradient decorative blob */}
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
                style={{
                  background: `radial-gradient(circle, #ffffff 0%, transparent 70%)`,
                }}
              />

              {/* Left Side - Content */}
              <div className="relative z-10 flex-shrink-0 lg:w-2/5">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-7 h-7 bg-white/20 rounded flex items-center justify-center">
                    <div className="w-3.5 h-3.5 bg-white rounded-sm" />
                  </div>
                  <span className="text-base font-semibold">{currentTab.logo}</span>
                </div>

                {/* Heading */}
                <h3 className="text-4xl font-bold mb-4 text-balance">{currentTab.heading}</h3>

                {/* Description */}
                <p className="text-lg mb-6 text-white/90 text-pretty leading-relaxed">{currentTab.description}</p>

                {/* Button */}
                <button className="px-7 py-3 bg-white text-gray-900 rounded-full font-medium hover:scale-105 transition-transform duration-300 shadow-lg">
                  Get Started →
                </button>
              </div>

              {/* Right Side - Mockup Container */}
              <div className="relative z-10 flex-1 lg:w-3/5">
                {/* Top Badge */}
                <div className="absolute -top-3 right-6 flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-xl shadow-xl z-20">
                  <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-white rounded-sm" />
                  </div>
                  <span className="text-sm font-medium text-white">{currentTab.badge}</span>
                </div>

                {/* Mockup */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transition-opacity duration-500">
                  {renderMockup()}
                </div>

                {/* Bottom Badge */}
                <div className="absolute -bottom-3 left-6 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-xl shadow-xl z-20">
                  <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-white rounded-sm" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    {activeTab === 1 ? "Write an email" : activeTab === 4 ? "Sprint analysis" : "Analyze risks"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - 2 Stacked Cards with matching height */}
          <div className="flex flex-col gap-6 h-full">
            {/* Stat Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100 transition-all duration-700 flex-1 flex flex-col justify-center">
              <div className="mb-4">
                <div className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                  {currentTab.testimonial1.company}
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">{currentTab.testimonial1.stat}</div>
              <div className="text-base text-gray-700">{currentTab.testimonial1.statSuffix}</div>
            </div>

            {/* Quote Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100 transition-all duration-700 flex-1 flex flex-col justify-between">
              <p className="text-gray-700 mb-6 text-pretty leading-relaxed">{currentTab.testimonial2.quote}</p>
              <div className="flex items-center gap-3">
                <Image
                  src={currentTab.testimonial2.avatar || "/placeholder.svg"}
                  alt={currentTab.testimonial2.author}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">{currentTab.testimonial2.author}</div>
                  <div className="text-sm text-gray-600">{currentTab.testimonial2.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsMockup() {
  return (
    <div className="w-full h-full">
      <Image
        src="/images/taygo-crm-contacts.png"
        alt="TAYGO CRM Dashboard"
        width={700}
        height={500}
        className="w-full h-full object-cover object-left"
      />
    </div>
  )
}

function SalesMockup() {
  return (
    <div className="w-full h-full">
      <Image
        src="/images/taygo-crm-contacts.png"
        alt="TAYGO CRM Contacts Dashboard"
        width={700}
        height={500}
        className="w-full h-full object-cover object-left"
      />
    </div>
  )
}

function MarketingMockup() {
  return (
    <div className="w-full h-full">
      <Image
        src="/images/taygo-crm-contacts.png"
        alt="TAYGO CRM Dashboard"
        width={700}
        height={500}
        className="w-full h-full object-cover object-left"
      />
    </div>
  )
}

function ITOpsMockup() {
  return (
    <div className="w-full h-full">
      <Image
        src="/images/taygo-crm-contacts.png"
        alt="TAYGO CRM Dashboard"
        width={700}
        height={500}
        className="w-full h-full object-cover object-left"
      />
    </div>
  )
}

function ProductEngineeringMockup() {
  return (
    <div className="w-full h-full">
      <Image
        src="/images/taygo-crm-contacts.png"
        alt="TAYGO CRM Dashboard"
        width={700}
        height={500}
        className="w-full h-full object-cover object-left"
      />
    </div>
  )
}

function LeadershipMockup() {
  return (
    <div className="w-full h-full">
      <Image
        src="/images/taygo-crm-contacts.png"
        alt="TAYGO CRM Dashboard"
        width={700}
        height={500}
        className="w-full h-full object-cover object-left"
      />
    </div>
  )
}
