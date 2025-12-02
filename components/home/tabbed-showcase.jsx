"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import taygoLogo from "@/public/logo/taygoLogo.png"

const tabs = [
  {
    id: "projects",
    label: "Lead Management",
    color: "#006C5D",
    // color: "#6161FF",
    heading: "Lead Management",
    title: "Capture, enrich, and convert leads across your entire pipeline.",
    description:
      "Taygo centralizes every lead from forms, websites, ads, partners, and inbound channels  enriched automatically with AI to reduce manual data entry.",
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

    features: [
      "AI-powered lead enrichment & tagging",
      "Smart routing to teams & branches",
      "Follow-up sequences (email/SMS/AI agent)",
      "Lead scoring based on intent and activity",
      "Multi-source lead capture(web, chat, partner, APIs)",
    ]

  },
  {
    id: "sales",
    label: "POS & LOS Integration",
    color: "#006C5D",
    // color: "#00A4BD",
    heading: "POS & Loan Applications (1003 Portal)",
    title: "A self-guided borrower portal that boosts 1003 completion.",
    description:
      "Borrowers can start, pause, and complete their full application in a guided, intuitive portal — proactively nudged by your AI agent.",
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
    features: [
      "Full 1003 application (desktop & mobile)",
      "Auto-save + resume anytime",
      "Document upload & task lists",
      "AI nudges for incomplete fields",
      "Real-time sync with LOS",
    ]
  },
  {
    id: "marketing",
    label: "Communication Suite",
    color: "#006C5D",
    // color: "#FF6B6B",
    heading: "Communication Suite",
    title: "Engage borrowers & partners wherever they are - instantly.",
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
    features: [
      "Unified inbox for email, SMS, chat, calls",
      "VoIP calling with call logs and recording",
      "Pre-built message templates",
      "Mass messaging + campaigns",
      "Trigger-based communication flows",
    ]
  },
  {
    id: "it-ops",
    label: "Workflow Automation",
    color: "#006C5D",
    // color: "#9D7BFF",
    heading: "Workflow Automation",
    title: "Visual automation builder for every part of the loan lifecycle.",
    description:
      "Create rules, triggers, and automated sequences that streamline work across teams — from leads to funded loans.",
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
    features: [
      "Drag-and-drop automation builder",
      "Conditional logic",
      "Task assignments & SLA rules",
      "Doc chase flows",
      "Branch-level workflow templates",
    ]
  },
  {
    id: "product-engineering",
    label: "AI Agent Workforce",
    color: "#006C5D",
    // color: "#00A65A",
    heading: "AI Agent Workforce",
    title: "Your AI agent reviews, prioritizes, and executes your workflow.",
    description: "AI agents scan your entire pipeline, point out what needs attention, generate your daily plan, and — once approved — execute follow-ups and updates automatically.",
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
    features: [
      "Daily pipeline review",
      "1-click approval of AI-generated plan",
      "Autonomous task execution",
      "Borrower nudges & partner updates",
      "File summaries, risk detection, next-step suggestions",
    ]
  },
  {
    id: "leadership",
    label: "Partner & Realtor Portal",
    color: "#006C5D",
    // color: "#FF9F40",
    heading: "Partner & Realtor Portal",
    title: "Give your partners real-time visibility on shared clients.",
    description: "Realtors and referral partners get a co-branded portal with updates, milestones, and client activity — without calling you.",
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
    features: [
"Co-branded partner profiles",
"Shared leads & milestones",
"Auto updates from your AI agent",
"Partner activity tracking",
"Referral pipeline",
]
  },
]

export function TabbedShowcase() {  

    const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabs[activeTab];

  // Auto-switch tabs every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

    const handleTabClick = (index) => {
    setActiveTab(index);
  };


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
    <section className="md:py-20 py-10 px-4 bg-gradient-to-b from-white to-[#C4E5E633]"> 
      <div className="max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 text-balance">
            Everything brokers and loan officers need in one intelligent platform.
          </h2>
          <p className="text-base md:text-lg font-medium mb-4 text-balance max-w-5xl mx-auto text-gray-700">
            Explore how TAYGO™ unites CRM, LOS, automation, marketing, and integrations to simplify every part of your mortgage business.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(index)}
              className={`px-2 py-3 rounded-sm text-sm font-medium transition-all duration-500 ${activeTab === index
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
              className="rounded-sm md:pl-10 pl-6 py-14 text-white transition-all duration-700 h-full relative overflow-hidden flex flex-col lg:flex-row gap-8 items-center"
              style={{
                backgroundColor: currentTab.color,
              }}
            >

              {/* Left Side - Content */}
              <div className="relative z-10 shrink-0 lg:w-[30%]">
                {/* heading */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-3xl font-semibold">{currentTab.heading}</span>
                </div>

                {/* title */}
                <h3 className="text-base font-medium mb-4 text-balance">{currentTab.title}</h3>

                {/* Description */}
                <p className="text-sm mb-6 text-white/90 text-pretty leading-relaxed">{currentTab.description}</p>

                {/* Button */}
                <button className="px-7 py-3 cursor-pointer bg-white text-gray-900 rounded-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg">
                  Get Started →
                </button>
              </div>

              {/* Right Side - Mockup Container */}
              <div className="relative z-10 flex-1 lg:w-[70%]">
                {/* Mockup */}
                <div className="bg-white rounded2xl overflow-hidden shadow-2xl transition-opacity duration-500">
                  {renderMockup()}
                </div>

              </div>
            </div>
          </div>

          {/* Right Side - 2 Stacked Cards with matching height */}
          <div className="flex flex-col gap-6 h-full">

            {/* Stat Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-sm p-8 border border-indigo-100 transition-all duration-700 flex-1 flex flex-col justifycenter">
              {/* <div className="mb-4">
                <div className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                  {currentTab.testimonial1.company}
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">{currentTab.testimonial1.stat}</div>
              <div className="text-base text-gray-700">{currentTab.testimonial1.statSuffix}</div> */}
              <div className="flex justify-center items-center mb-6">
                <Image src={taygoLogo} alt="TAYGO Logo" width={140} height={60} />
              </div>

              <ul className="list-disc list-outside ml-6 space-y-3 font-semibold text-gray-800">
                {currentTab?.features?.map((f, i) => (
                  <li key={i} className="leading-relaxed">
                    {f}
                  </li>
                ))}
              </ul>


            </div>

            {/* Quote Card */}
            {/* <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-sm p-8 border border-indigo-100 transition-all duration-700 flex-1 flex flex-col justify-between">
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
            </div> */}

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
        className="w-full h-full rounded-x-sm object-cover object-left"
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
