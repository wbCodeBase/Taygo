"use client"
import { Workflow, Shell, Users, Handshake, Brain, ArrowRight, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SyncedCRMDashboard } from './SyncedCRMDashboard';

export default function HeroSection() {
  const features = [
    { icon: BarChart3, text: 'CRM', gradient: 'from-teal to-teal-light' },
    { icon: Users, text: 'AI LO Assistant', gradient: 'from-teal to-teal-light' },
    { icon: Shell, text: 'Pipeline Autopilot', gradient: 'from-teal to-teal-light' },
    { icon: Brain, text: 'Marketing Automation', gradient: 'from-teal to-teal-light' },
    { icon: Workflow, text: 'Auto Follow-Ups', gradient: 'from-teal to-teal-light' },
  ];<Brain />

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-teal/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-indigo/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative w-full mx-auto px-6 md:px-12 pb-14 mt-10">


        {/* Top Section - Full Width Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 max-w-5xl mx-auto space-y-6"
        >


          <div className="absolute top1/4 left-1/4 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom1/4 right-1/4 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom1/4 right-2/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />

          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-teal/10 text-[#0D9488] px-4 py-2 rounded-full border border-teal/20 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm" style={{ fontWeight: 500 }}>AI-Powered Platform</span>
          </motion.div> */}

          {/* Main Headline */}
          <div className="space-y4">
            <h1 className="sm:text-[3rem] text-3xl text-gray-900 font-bold leading-snug">
              {/* <h1 className="lg:text-5xl text-4xl text-gray-900 leading-tight" style={{ fontWeight: 700 }}> */}
              {/* Meet{' '} */}
              {/* <span className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] bg-clip-text text-transparent">
                AI-Powered
              </span>
              {' '} */}
              AI-Powered Operating System for the Modern Mortgage Business

            </h1>
            {/* <h2 className="text-2xl lg:text-3xl text-gray-700 leading-tight">
              Automate Your Entire Mortgage CRM Workflow
            </h2> */}
          </div>

          {/* Description */}
          <p className="md:text-xl text-lg text-gray-800">
            Everything your brokers, lenders, and loan officers need powered by AI, all in one platform.
          </p>



          {/* Feature Pills */}
          <div className="flex flex-wrap gap-5 justify-center my-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3 bg-white z-10 px-3 py-2 rounded-sm shadow-md border border-gray-200"
              >
                <div className={`w-8 h-8 bg-gradient-to-r from-teal-600 to-teal-700 ${feature.gradient} rounded-xs flex items-center justify-center`}>
                  <feature.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-md text-gray-700" style={{ fontWeight: 500 }}>{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* <div className="text-md md:text-2xl font-medium text-teal-700 my-3 flex flex-wrap items-center justify-center gap-2">
            <span>CRM</span>
            <span>|</span>
            <span>Loan Origination</span>
            <span>|</span>
            <span>Marketing Automation</span>
            <span>|</span>
            <span>File Management</span>
          </div> */}

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-btn-green hover:bg-btn-green-hover font-semibold text-white px-8 py-4 cursor-pointer rounded-xs transition-all inline-flex items-center gap-2 my-4"
            style={{ fontWeight: 600 }}
          >
            View Demo
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          {/* Stats */}
          {/* <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl text-gray-900" style={{ fontWeight: 700 }}>80%</div>
              <div className="text-sm text-gray-600 mt-1">Tasks Automated</div>
            </div>
            <div>
              <div className="text-3xl text-gray-900" style={{ fontWeight: 700 }}>3x</div>
              <div className="text-sm text-gray-600 mt-1">More Closings</div>
            </div>
            <div>
              <div className="text-3xl text-gray-900" style={{ fontWeight: 700 }}>24/7</div>
              <div className="text-sm text-gray-600 mt-1">Lead Response</div>
            </div>
          </div> */}
        </motion.div>

        {/* Bottom Section - Full Width CRM Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full"
        >
          <SyncedCRMDashboard />
        </motion.div>
      </div>
    </div>
  );
}
