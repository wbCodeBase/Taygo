
import { Settings, Zap, Eye } from 'lucide-react'

import Lisa from "@/public/images/lisa2.png"




export const productsData = {
    "leadflow": {
        id: 1,
        slug: "leadflow",
        name: "LeadFlow",
        fullName: "Taygo™ LeadFlow",

        // Hero Section
        hero: {
            h1: "Mortgage Lead Automation Software that converts every inquiry",
            subhead: "LeadFlow™ captures, qualifies, and follows up with mortgage leads automatically—so loan officers respond faster, stay consistent, and close more deals.",
            primaryCTA: {
                text: "Book a LeadFlow Demo",
                link: "/demo"
            },
            secondaryCTA: {
                text: "Watch LeadFlow in Action",
                link: "/watch-demo"
            },
            badges: [
                "AI Lead Scoring",
                "Instant Follow-Ups",
                "Multi-Channel Outreach",
                "Zero Missed Leads"
            ]
        },

        // Why Section (3 cards)
        whySection: {
            title: "Why LeadFlow",
            cards: [
                {
                    title: "No Lead Left Behind",
                    description: "Every lead is captured, enriched, and acted on instantly—24/7.",
                    icon: Settings
                },
                {
                    title: "Speed Wins Deals",
                    description: "Respond to new inquiries in seconds, not hours.",
                    icon: Zap
                },
                {
                    title: "Consistency at Scale",
                    description: "AI-driven follow-ups ensure every lead gets the same attention.",
                    icon: Eye
                }
            ]
        },

        // Core Features
        features: [
            {
                id: "lead-capture",
                title: "Lead Capture & Intake",
                headline: "Capture mortgage leads from every source",
                body: "LeadFlow unifies all your inbound leads into one intelligent system—ready for action the moment they arrive.",
                image: "https://www.insightly.com/wp-content/uploads/2025/03/img_01_desktop.png",
                bullets: [
                    "Capture leads from website forms, chat, landing pages, and referrals",
                    "API intake from lead vendors and partner platforms",
                    "Automatic de-duplication and source tagging",
                    "Unified lead timeline for calls, texts, and emails"
                ],
                cta: {
                    text: "Learn more",
                    link: "/features/lead-capture"
                }
            },
            {
                id: "ai-qualification",
                title: "AI Lead Qualification & Prioritization",
                headline: "Know which leads to call first—automatically",
                body: "Not all leads are equal. LeadFlow uses AI signals to prioritize high-intent borrowers.",
                image: "https://www.insightly.com/wp-content/uploads/2025/03/img_02_desktop.png",
                bullets: [
                    "AI lead scoring based on behavior and response",
                    "Identify hot, warm, and cold leads instantly",
                    "Detect refinance-ready and rate-sensitive prospects",
                    "Surface Call Now opportunities automatically"
                ],
                cta: {
                    text: "Learn more",
                    link: "/features/ai-qualification"
                }
            },
        ],

        // AI Assistant Panel
        aiAssistant: {
            name: "Lisa",
            title: "Meet Lisa",
            subtitle: "Your AI Lead Assistant",
            body: "Lisa responds to new leads, follows up across channels, qualifies borrowers, and keeps your pipeline moving—before a loan officer even logs in.",
            image: Lisa,
            ctas: [
                {
                    text: "Get Started",
                    link: "/get-started"
                },
                {
                    text: "Visit our AI Trust Center",
                    link: "/ai-trust"
                }
            ]
        },

        featuresTwo: [
            {
                id: "automated-followups",
                title: "Automated Follow-Ups (Email, SMS, Voice)",
                headline: "Smart follow-ups that never forget",
                body: "LeadFlow executes consistent, multi-touch follow-ups without manual effort.",
                image: "https://www.insightly.com/wp-content/uploads/2025/03/img_01_desktop.png",
                bullets: [
                    "Instant SMS + email on lead arrival",
                    "Scheduled follow-up sequences",
                    "AI voice calls for unanswered leads",
                    "Context-aware messages based on borrower behavior"
                ],
                cta: {
                    text: "Learn more",
                    link: "/features/automated-followups"
                }
            },
            {
                id: "pipeline-handoff",
                title: "Lead-to-Pipeline Handoff",
                headline: "Seamless handoff from lead to active pipeline",
                body: "Once a borrower is qualified, LeadFlow routes them automatically into PipelineOS.",
                image: "https://www.insightly.com/wp-content/uploads/2025/03/img_02_desktop.png",
                bullets: [
                    "Auto-create opportunities in PipelineOS",
                    "Assign ownership to LO or team",
                    "Preserve full conversation history",
                    "Zero manual data re-entry"
                ],
                cta: {
                    text: "Learn more",
                    link: "/features/pipeline-handoff"
                }
            }
        ],

        // AI Differentiation Strip
        aiDifferentiation: {
            title: "Smarter lead conversion starts with AI inside your CRM",
            subtitle: "From first click to application—AI handles the heavy lifting.",
            image: "https://www.insightly.com/wp-content/uploads/2025/07/CRM-AI-FEATURES.png",
            bullets: [
                "Named AI Assistant for lead follow-ups",
                "Zero-touch lead engagement with approval-based execution",
                "Instant lead summaries and next-action suggestions",
                "POS Application Shepherd to push leads into applications",
                "Partner auto-update engine for referral leads"
            ],
            cta: {
                text: "Learn more",
                link: "/features/automated-followups"
            }
        },




        // Insights Section
        insights: {
            title: "Lead conversion analytics that matter",
            bullets: [
                "Lead response time tracking",
                "Contact rate by source",
                "Conversion from lead → application",
                "Follow-up performance by LO",
                "ROI visibility by campaign"
            ],
            image: "https://www.insightly.com/wp-content/uploads/2025/03/img_01_desktop.png"
        },


        // Final CTA
        finalCTA: {
            title: "Turn more mortgage leads into closed loans",
            cta: {
                text: "Get a LeadFlow Demo",
                link: "/demo"
            }
        },

        // FAQs
        faqs: [
            {
                question: "What is LeadFlow in Taygo?",
                answer: "LeadFlow is Taygo's AI-powered lead capture and follow-up system. It automatically captures, qualifies, and engages mortgage leads across channels so no inquiry is ever missed."
            },
            {
                question: "How fast does LeadFlow respond to new leads?",
                answer: "LeadFlow responds instantly. As soon as a lead is received, AI triggers SMS, email, or voice outreach within seconds—24/7."
            },
            {
                question: "Does LeadFlow support SMS, email, and phone calls?",
                answer: "Yes. LeadFlow supports multi-channel engagement including SMS, email, and AI-powered voice calls, all managed from one unified lead timeline."
            },
            {
                question: "Can I customize follow-up sequences?",
                answer: "Absolutely. You can fully customize follow-up rules, timing, channels, and messaging based on lead source, intent, loan type, or response behavior."
            },
            {
                question: "How does LeadFlow work with PipelineOS?",
                answer: "Once a lead is qualified or shows intent, LeadFlow automatically creates and routes the opportunity into PipelineOS—preserving all conversations and activity history."
            },
            {
                question: "Does AI replace my loan officers?",
                answer: "No. AI works as an assistant, not a replacement. LeadFlow handles speed, consistency, and follow-ups, while loan officers focus on conversations and closing deals."
            }
        ]
    },

    "borrowerhub": {
        id: 2,
        slug: "borrowerhub",
        name: "BorrowerHub",
        fullName: "Taygo™ BorrowerHub",

        // Hero Section
        hero: {
            h1: "Mortgage POS software borrowers actually complete",
            subhead: "BorrowerHub™ is Taygo's AI-guided borrower portal that simplifies applications, collects documents faster, and keeps borrowers informed—without increasing loan officer workload.",
            primaryCTA: {
                text: "Book a BorrowerHub Demo",
                link: "/demo"
            },
            secondaryCTA: {
                text: "See BorrowerHub in Action",
                link: "/watch-demo"
            },
            badges: [
                "AI-Guided 1003",
                "Smart Document Collection",
                "Real-Time Status Updates",
                "Higher Completion Rates"
            ]
        },


        whySection: {
            title: "Why BorrowerHub",
            cards: [
                {
                    title: "No Lead Left Behind",
                    description: "Every lead is captured, enriched, and acted on instantly—24/7.",
                    icon: Settings
                },
                {
                    title: "Speed Wins Deals",
                    description: "Respond to new inquiries in seconds, not hours.",
                    icon: Zap
                },
                {
                    title: "Consistency at Scale",
                    description: "AI-driven follow-ups ensure every lead gets the same attention.",
                    icon: Eye
                }
            ]
        },

        // Core Features
        features: [
            {
                id: "ai-guided-1003",
                title: "AI-Guided 1003 Experience",
                headline: "A smarter way to complete mortgage applications",
                body: "BorrowerHub walks borrowers through the 1003 with contextual guidance—reducing friction and incomplete submissions.",
                bullets: [
                    "Conversational, step-by-step application flow",
                    "Smart field explanations and real-time validation",
                    "Save-and-resume anytime experience",
                    "Fewer incomplete or abandoned applications"
                ],
                image: "https://www.insightly.com/wp-content/uploads/2025/03/img_01_desktop.png",
                cta: {
                    text: "Learn more",
                    link: "/features/ai-guided-1003"
                }
            },
            {
                id: "document-collection",
                title: "Smart Document Collection",
                headline: "Collect documents without chasing borrowers",
                body: "BorrowerHub automates document requests, reminders, and verification workflows.",
                image: "https://www.insightly.com/wp-content/uploads/2025/03/img_02_desktop.png",
                bullets: [
                    "Auto-generated document checklists",
                    "Secure uploads from any device",
                    "AI reminders for missing items",
                    "Clear visibility into what's pending"
                ],
                cta: {
                    text: "Learn more",
                    link: "/features/document-collection"
                }
            },

        ],

        // AI Assistant Panel
        aiAssistant: {
            name: "Lisa",
            title: "Meet Lisa",
            subtitle: "Your AI Borrower Assistant",
            body: "Lisa answers borrower questions, nudges them to complete steps, and keeps applications moving—without involving the loan officer for routine follow-ups.",
            ctas: [
                {
                    text: "Get Started",
                    link: "/get-started"
                },
                {
                    text: "Visit our AI Trust Center",
                    link: "/ai-trust"
                }
            ]
        },

        featuresTwo: [
            {
                id: "realtime-status",
                title: "Real-Time Status & Updates",
                headline: "Borrowers always know where they stand",
                body: "BorrowerHub keeps applicants informed at every stage of the loan journey.",
                image: "https://www.insightly.com/wp-content/uploads/2025/03/img_01_desktop.png",
                bullets: [
                    "Live application and loan status updates",
                    "Automated milestone notifications",
                    "Reduced inbound status check calls",
                    "Increased borrower confidence and trust"
                ],
                cta: {
                    text: "Learn more",
                    link: "/features/realtime-status"
                }
            },
            {
                id: "pos-pipeline-handoff",
                title: "POS-to-Pipeline Handoff",
                headline: "Seamless transition from application to processing",
                body: "Once the borrower completes their application, BorrowerHub hands off everything to PipelineOS automatically.",
                image: "https://www.insightly.com/wp-content/uploads/2025/03/img_02_desktop.png",
                bullets: [
                    "Clean handoff into active pipeline stages",
                    "All documents and data synced instantly",
                    "No re-keying or manual uploads",
                    "Full visibility for LO and operations teams"
                ],
                cta: {
                    text: "Learn more",
                    link: "/features/pos-pipeline-handoff"
                }
            }
        ],

        // AI Differentiation Strip
        aiDifferentiation: {
            title: "AI that guides borrowers—and supports loan officers",
            subtitle: "BorrowerHub removes friction without removing the human relationship.",
            image: "https://www.insightly.com/wp-content/uploads/2025/07/CRM-AI-FEATURES.png",
            bullets: [
                "POS Application Shepherd to guide borrowers to completion",
                "Instant application summaries and next-step visibility",
                "AI-driven reminders instead of manual chasing",
                "Context-aware borrower assistance",
                "Partner auto-update engine (optional)"
            ]
        },

        // Insights Section
        insights: {
            title: "Visibility into borrower progress and behavior",
            bullets: [
                "Application completion rates",
                "Time-to-complete metrics",
                "Document submission timelines",
                "Drop-off points and friction analysis",
                "Borrower engagement insights"
            ],
            image: "https://www.insightly.com/wp-content/uploads/2025/03/img_01_desktop.png"
        },

        // Final CTA
        finalCTA: {
            title: "Deliver a borrower experience that closes more loans",
            cta: {
                text: "Get a BorrowerHub Demo",
                link: "/demo"
            }
        },

        // FAQs
        faqs: [
            {
                question: "What is BorrowerHub in Taygo?",
                answer: "BorrowerHub is Taygo's AI-powered borrower portal (POS) that guides applicants through the mortgage process, collects documents, and provides real-time updates."
            },
            {
                question: "Is BorrowerHub mobile-friendly?",
                answer: "Yes. BorrowerHub works seamlessly across desktop, tablet, and mobile devices."
            },
            {
                question: "Can borrowers save and resume their application?",
                answer: "Yes. Borrowers can pause and continue anytime without losing progress."
            },
            {
                question: "Does BorrowerHub replace my LOS or CRM?",
                answer: "No. BorrowerHub connects with your LOS and works alongside LeadFlow and PipelineOS."
            },
            {
                question: "How does AI help borrowers without confusing them?",
                answer: "AI provides simple, contextual guidance and reminders—only when needed—so borrowers feel supported, not overwhelmed."
            },
            {
                question: "Does BorrowerHub reduce loan officer workload?",
                answer: "Yes. By automating guidance, reminders, and updates, BorrowerHub significantly reduces manual follow-ups and status calls."
            }
        ]
    },

    "pipelineos": {
        id: 1,
        slug: "pipelineos",
        name: "pipelineos",
        fullName: "Taygo™ PipelineOS",

        // Hero Section
        hero: {
            h1: "Mortgage Pipeline Management Software that prevents deal leakage",
            subhead: "PipelineOS™ automates stages, tasks, SLAs, and refinance workflows—so every file moves forward with visibility and control.",
            primaryCTA: {
                text: "Book a Pipeline Demo",
                link: "/demo"
            },
            secondaryCTA: {
                text: "Watch Pipeline in Action",
                link: "/watch-demo"
            },
            badges: [
                "Custom stages", "SLA alerts", "Refi workflows"
            ]
        },

        // Why Section (3 cards)
        whySection: {
            title: "Why Choose Us",
            cards: [
                {
                    title: "System-Level Control",
                    description: "Stages, rules, SLAs, and ownership standardized across teams.",
                    icon: Settings
                },
                {
                    title: "Refinance-First Automation",
                    description: "Triggers, tasks, and re-engagement flows tailored for refi cycles.",
                    icon: Zap
                },
                {
                    title: "Live Visibility",
                    description: "Know what's stuck, why it's stuck, and who owns the next step.",
                    icon: Eye
                }
            ]
        },

        // Core Features
        features: [
            {
                id: "sales-pipeline",
                title: "Sales pipeline & lead management",
                headline: "Sales pipeline for mortgage leads from every source",
                body: "Start acting on leads the moment they arrive — and keep every opportunity moving.",
                image: "https://www.insightly.com/wp-content/uploads/2025/03/img_01_desktop.png",
                bullets: [

                    "Capture and unify leads from forms, referrals, campaigns, and partners",
                    "Auto-assign leads by location, loan type, language, or availability",
                    "Real-time view of every lead stage, next step, and SLA risk",
                    "One timeline for calls, texts, emails, notes, and documents"
                ],
                cta: {
                    text: "Learn more",
                    link: "/pipelineos/sales-pipeline"
                }
            },
            {
                id: "lead-tracking",
                title: "Lead tracking & opportunity management (Mortgage stages)",
                headline: "Know which leads to call first—automatically",
                body: "Create velocity through every stage of your mortgage process.",
                image: "https://www.insightly.com/wp-content/uploads/2025/03/img_02_desktop.png",
                bullets: [
                    "Custom mortgage pipelines (Purchase, Refi, HELOC, etc.)",
                    "Deal risk signals: stalled stage, missing docs, no-response borrowers",
                    "Priority sorting: “Call now”, “Docs pending”, “Rate-sensitive refi”",
                    "Partner visibility: which agent/referral source drives the best loans"
                ],
                cta: {
                    text: "Learn more",
                    link: "/pipelineos/lead-tracking"
                }
            },
        ],

        // AI Assistant Panel
        aiAssistant: {
            name: "Lisa",
            title: "Meet Lisa",
            subtitle: "Your 24/7 AI Mortgage Assistant",
            body: "Lisa isn't just a chatbot—she's your AI-powered teammate who works across every stage of the lending journey. From capturing new leads to assisting borrowers and supporting loan officers, Lisa makes mortgage operations faster, smarter, and effortlessly human.",
            image: Lisa,
            ctas: [
                {
                    text: "Get Started",
                    link: "/get-started"
                },
                {
                    text: "Visit our AI Trust Center",
                    link: "/ai-trust"
                }
            ]
        },

        featuresTwo: [
            {
                id: "business-workflow",
                title: "Business workflow & process automation",
                headline: "Smart business workflows that keep deals moving",
                body: "Automate repetitive work so LOs and ops teams can focus on decisions and relationships.",
                image: "https://www.insightly.com/wp-content/uploads/2025/03/img_01_desktop.png",
                bullets: [
                    "Auto-follow-ups (email/SMS/voice) based on borrower behavior",
                    "Auto-tasks for missing docs, verification steps, and milestones",
                    "Reduce human error with consistent rules and stage gates",
                    "Faster pipeline movement with fewer manual handoffs"
                ],
                cta: {
                    text: "Learn more",
                    link: "/pipelineos/business-workflow"
                }
            },
            {
                id: "validation-rules",
                title: "Validation rules & advanced permissions",
                headline: "Seamless handoff from lead to active pipeline",
                body: "Preserve data integrity, reduce compliance risk, and keep teams aligned.",
                image: "https://www.insightly.com/wp-content/uploads/2025/03/img_02_desktop.png",
                bullets: [
                    "Required fields by stage (e.g., before Submit to UW)",
                    "Role-based access (LO / LOA / Processor / Manager)",
                    "Audit-friendly history of changes and activities",
                    "Standardize best practices across branches"
                ],
                cta: {
                    text: "Learn more",
                    link: "/pipelineos/validation-rules"
                }
            }
        ],

        // AI Differentiation Strip
        aiDifferentiation: {
            title: "Smarter mortgage selling starts with AI inside your CRM",
            subtitle: "Boost conversion and CRM adoption with an AI assistant that turns pipeline review into a daily autopilot workflow.",
            image: "https://www.insightly.com/wp-content/uploads/2025/07/CRM-AI-FEATURES.png",
            bullets: [
                "Name your assistant as you wish (Lisa, Laura, etc.)",

                "Zero-touch pipeline resolution: identifies pipeline problems + fixes them after approval",

                "POS Application Shepherd: guides borrowers to complete applications with less LO effort",

                "Instant file summary everywhere: next steps, risks, and automation suggestions",

                "Partner auto-update engine: keeps Realtors updated automatically",
            ],
            cta: {
                text: "Learn more",
                link: "/features/automated-followups"
            }
        },




        // Insights Section
        insights: {
            title: "Do more, better, faster with pipeline insights",
            bullets: [
                "Increase productivity by automating and orchestrating workflow tasks across communication and records.",
                "Improve pipeline visibility with real-time dashboards and reports that highlight bottlenecks and opportunities.",
                "Enhance decision-making with AI-driven insights that identify high-risk deals and suggest next best actions.",
                "Boost compliance and reduce risk with audit trails and automated validation rules.",
                "Optimize resource allocation by tracking team performance and workload distribution."
            ],
            image: "https://www.insightly.com/wp-content/uploads/2025/03/img_01_desktop.png"
        },


        // Final CTA
        finalCTA: {
            title: "Experience Taygo™ LeadFlow for yourself",
            cta: {
                text: "Get a Demo",
                link: "/demo"
            }
        },

        // FAQs
        faqs: [
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
            },
          
        ]
    },
};