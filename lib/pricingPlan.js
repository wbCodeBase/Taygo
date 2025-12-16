

export const pricingData = {
  plans: [
    {
      name: "Company Package",
      description: "Essential mortgage CRM with AI automation. Lisa reviews pipelines, executes approved follow-ups, and manages leads with core integrations for growing teams.",
      listDetail: [
        "Send bulk broadcasts",
        "Share products and catalogues",
        "Excel export and import",
        "Google sheets integration",
        "UNLIMITED workflows",
        "UNLIMITED custom attributes"
      ],

      "No Of Agents": {
        monthly: "2 agents free",
        quarterly: "2 agents free",
        yearly: "2 agents free"
      },

      pricing: {
        monthly: { usd: 49, inr: 1499, periodLabel: "per month" },
        // quarterly: { usd: 49, inr: 3999, periodLabel: "per quarter" },
        yearly: { usd: 500, inr: 12999, periodLabel: "per year" }
      },
      planId: "WA_Silver_Plan",

    },
    // {
    //   name: "Growth",
    //   description: "A comprehensive package designed for growing businesses, including advanced segmentation features & support",
    //   listDetail: [
    //     // "Team inbox (6 agents free)",
    //     "No Of Agents",
    //     "Roles & permissions",
    //     "Automated ordering bot",
    //     "3rd party integrations",
    //     "Manage 2 WhatsApp Business Numbers",
    //     "UNLIMITED workflows",
    //     "UNLIMITED automations",
    //     "UNLIMITED custom attributes"
    //   ],

    //   "No Of Agents": {
    //     monthly: "2 agents free",
    //     quarterly: "2 agents free",
    //     yearly: "2 agents free"
    //   },

    //   pricing: {
    //     monthly: { usd: 39, inr: 2999, periodLabel: "per month" },
    //     quarterly: { usd: 109, inr: 8699, periodLabel: "per quarter" },
    //     yearly: { usd: 389, inr: 32988, periodLabel: "per year" }
    //   },
    //   planId: "WA_Gold_Plan",
    //   recommended: true,
    //   features: {
    //     // Team Inbox
    //     "No. of message": "Unlimited",
    //     "No. of conversations": "Unlimited",
    //     "No. of Customers": "Unlimited",
    //     "No. Of Agents": "2 Free Agents",
    //     "Conversation tags": true,
    //     "Filtering based on tags and agents": true,
    //     "Chat assignment": true,
    //     "Automatic Assignment": true,
    //     "Attachments": true,

    //     // Automation
    //     "Welcome bot": true,
    //     "Order bot": true,
    //     "Stop bot": true,
    //     "Simple journeys": true,
    //     "Complex journeys": false,

    //     // Broadcasting
    //     "Broadcast catalogues": true,
    //     "Broadcast products": true,
    //     "Broadcast Analytics": true,
    //     "Button Reply Analytics": true,
    //     "Broadcast Scheduling": 20,

    //     // Integration
    //     "APIs & Webhooks": true,
    //     "GoHighLevel": true,
    //     "Shopify": true,
    //     "ZohoCRM": true,
    //     "Google Sheets": true,
    //     "Razorpay": true,
    //     "Integration with 2,000+ business tools": true,

    //     // Instagram
    //     "Comment automation": true,
    //     "DM": true,
    //     "Story mention reply": true,
    //     "Reels": true,
    //     "Live": true,
    //     "Ads that click to Instagram": true,

    //     // WhatsApp Commerce
    //     "Create WhatsApp Catalog": true,
    //     "WhatsApp Checkout Bot": true,
    //     "Order Management Panel": true,
    //     "Native WhatsApp Payment (WhatsApp Pay)": false,
    //     "Permissioning – Assign Roles to Team Members": true,
    //     "Bulk Upload Contacts": true,
    //     "Send Payment Links from Inbox": true,

    //     // Shopify
    //     "Order Update Notifications": true,
    //     "Simple Abandoned Checkout Reminders": true,
    //     "Multiple Abandoned Checkout Reminders": true,
    //     "Winback Notifications": true,
    //     "CoD to Prepaid Flow": true,
    //     "Auto-sync Shopify contacts": true,
    //     "Auto-sync Shopify catalog": false,

    //     // Security
    //     "Roles & Permissions": true,
    //     "Broadcast channel privacy": false,
    //     "Number masking": false,

    //     // Report
    //     "Agent activity": true,
    //     "Account summary": false,

    //     //Support
    //     "WABA & CRM SLA": "Support in 6 Working Hours",
    //     "Bot/Automation Support": "3 Bots / Automations Debugging",
    //   }

    // },
    // {
    //   name: "Enterprise",
    //   description: "A premium offering tailored for large businesses, with full feature access, Whatsapp flows and white-glove service",

    //   listDetail: [
    //     "Custom pricing per agent",
    //     "Complex journeys",
    //     "Special customizations",
    //     "Special integrations",
    //     "UNLIMITED custom attributes"
    //   ],

    //   pricing: {
    //     monthly: { usd: 689, inr: 54999, periodLabel: "per month" },
    //     quarterly: { usd: 2399, inr: 174999, periodLabel: "per quarter" },
    //     yearly: { usd: 7499, inr: 539999, periodLabel: "per year" }
    //   },
    //   planId: "WA_Platinum_Plan",

    //   features: {
    //     // Team Inbox
    //     "No. of message": "Unlimited",
    //     "No. of conversations": "Unlimited",
    //     "No. of Customers": "Unlimited",
    //     "No. Of Agents": "Custom",
    //     "Conversation tags": true,
    //     "Filtering based on tags and agents": true,
    //     "Chat assignment": true,
    //     "Automatic Assignment": true,
    //     "Attachments": true,

    //     // Automation
    //     "Welcome bot": true,
    //     "Order bot": true,
    //     "Stop bot": true,
    //     "Simple journeys": true,
    //     "Complex journeys": true,

    //     // Broadcasting
    //     "Broadcast catalogues": true,
    //     "Broadcast products": true,
    //     "Broadcast Analytics": true,
    //     "Button Reply Analytics": true,
    //     "Broadcast Scheduling": 100,

    //     // Integration
    //     "APIs & Webhooks": true,
    //     "GoHighLevel": true,
    //     "Shopify": true,
    //     "ZohoCRM": true,
    //     "Google Sheets": true,
    //     "Razorpay": true,
    //     "Integration with 2,000+ business tools": true,

    //     // Instagram
    //     "Comment automation": true,
    //     "DM": true,
    //     "Story mention reply": true,
    //     "Reels": true,
    //     "Live": true,
    //     "Ads that click to Instagram": true,

    //     // WhatsApp Commerce
    //     "Create WhatsApp Catalog": true,
    //     "WhatsApp Checkout Bot": true,
    //     "Order Management Panel": true,
    //     "Native WhatsApp Payment (WhatsApp Pay)": true,
    //     "Permissioning – Assign Roles to Team Members": true,
    //     "Bulk Upload Contacts": true,
    //     "Send Payment Links from Inbox": true,

    //     // Shopify
    //     "Order Update Notifications": true,
    //     "Simple Abandoned Checkout Reminders": true,
    //     "Multiple Abandoned Checkout Reminders": true,
    //     "Winback Notifications": true,
    //     "CoD to Prepaid Flow": true,
    //     "Auto-sync Shopify contacts": true,
    //     "Auto-sync Shopify catalog": true,

    //     // Security
    //     "Roles & Permissions": true,
    //     "Broadcast channel privacy": true,
    //     "Number masking": true,

    //     // Report
    //     "Agent activity": true,
    //     "Account summary": true,

    //     //Support
    //     "WABA & CRM SLA": "Support in 2 Working Hours",
    //     "Bot/Automation Support": "10 Bots / Automations Debugging",
    //   }

    // }
  ],


};






