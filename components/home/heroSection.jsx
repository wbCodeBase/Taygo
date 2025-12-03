import { Sparkles, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SyncedCRMDashboard } from './SyncedCRMDashboard';

export function HeroSection() {
  const features = [
    { icon: Sparkles, text: 'Mortgage CRM', gradient: 'from-teal to-teal-light' },
    { icon: TrendingUp, text: 'Lead Management', gradient: 'from-teal to-teal-light' },
    { icon: Zap, text: 'Auto Follow-ups', gradient: 'from-teal to-teal-light' },
    { icon: Sparkles, text: 'Document Processing', gradient: 'from-teal to-teal-light' },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50/30 overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-20 md:mt-12">
        {/* Top Section - Full Width Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 max-w-5xl mx-auto"
        >
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
          <div className="space-y-4 my-4">
            <h1 className="lg:text-5xl text-4xl text-gray-900 leading-tight" style={{ fontWeight: 700 }}>
              {/* Meet{' '} */}
              <span className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] bg-clip-text text-transparent">
                AI-Powered
              </span>
              {' '}
              Operating System for the Modern Mortgage Business

            </h1>
            {/* <h2 className="text-2xl lg:text-3xl text-gray-700 leading-tight">
              Automate Your Entire Mortgage CRM Workflow
            </h2> */}
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything your brokers, lenders, and loan officers need powered by AI, all in one platform.
          </p>

          {/* Feature Pills */}
          {/* <div className="flex flex-wrap gap-3 justify-center mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 bg-white px-3 py-2 rounded-sm shadow-md border border-gray-200"
              >
                <div className={`w-8 h-8 bg-gradient-to-r from-teal-600 to-teal-700 ${feature.gradient} rounded-sm flex items-center justify-center`}>
                  <feature.icon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-gray-700" style={{ fontWeight: 500 }}>{feature.text}</span>
              </motion.div>
            ))}
          </div> */}

           <div className="text-md md:text-2xl font-medium text-teal-700 my-3 flex flex-wrap items-center justify-center gap-2">
            <span>CRM</span>
            <span>|</span>
            <span>Loan Origination</span>
            <span>|</span>
            <span>Marketing Automation</span>
            <span>|</span>
            <span>File Management</span>
          </div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0D9488] hover:bg-[#0c8077] text-white px-8 py-4 cursor-pointer rounded-sm transition-all shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 inline-flex items-center gap-2 my-4"
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
