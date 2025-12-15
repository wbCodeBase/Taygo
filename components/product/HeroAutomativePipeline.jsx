
"use client"


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const HeroSectionAutomatedPipeline = () => {
  const [pipelineMode, setPipelineMode] = useState("purchase");
  const [contacts, setContacts] = useState([]);
  const [aiActivity, setAiActivity] = useState([]);
  const [conversions, setConversions] = useState(0);
  
  const stages = pipelineMode === "purchase"
    ? ["New Lead", "Pre-Qual", "Processing", "Underwriting", "Converted"]
    : ["Rate Check", "Re-Engagement", "Processing", "Approved", "Converted"];

  // Generate initial contacts
  useEffect(() => {
    const initialContacts = Array.from({ length: 12 }, (_, i) => ({
      id: 1000 + i,
      stage: Math.floor(Math.random() * (stages.length - 1)),
      name: `Contact ${1000 + i}`,
      progress: Math.random() * 100,
      lastUpdate: Date.now()
    }));
    setContacts(initialContacts);
  }, [pipelineMode]);

  // Automated pipeline movement
  useEffect(() => {
    const interval = setInterval(() => {
      setContacts(prev => {
        return prev.map(contact => {
          const shouldMove = Math.random() > 0.7;
          if (shouldMove && contact.stage < stages.length - 1) {
            const newStage = contact.stage + 1;
            
            // Add AI activity log
            setAiActivity(logs => [{
              id: Date.now() + Math.random(),
              contactId: contact.id,
              action: newStage === stages.length - 1 
                ? '🎉 Converted to Lead'
                : `Moved to ${stages[newStage]}`,
              timestamp: Date.now()
            }, ...logs.slice(0, 4)]);

            // Count conversions
            if (newStage === stages.length - 1) {
              setConversions(c => c + 1);
            }

            return {
              ...contact,
              stage: newStage,
              progress: 0,
              lastUpdate: Date.now()
            };
          }
          
          return {
            ...contact,
            progress: Math.min(contact.progress + Math.random() * 15, 100)
          };
        });
      });

      // Add new leads periodically
      if (Math.random() > 0.8) {
        setContacts(prev => [...prev, {
          id: Date.now(),
          stage: 0,
          name: `Contact ${Date.now()}`,
          progress: 0,
          lastUpdate: Date.now()
        }]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [stages]);

  const getStageContacts = (stageIndex) => {
    return contacts.filter(c => c.stage === stageIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-8 h-8 text-teal-600" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-900">
              AI-Powered Pipeline Automation
            </h1>
          </div>
          <p className="text-gray-600">
            Contacts automatically move through stages • AI agents update status & convert leads
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="grid grid-cols-4 gap-4 mb-6"
        >
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-500">
            <p className="text-sm text-gray-600">Total Contacts</p>
            <motion.p
              key={contacts.length}
              initial={{ scale: 1.3, color: '#3b82f6' }}
              animate={{ scale: 1, color: '#111827' }}
              className="text-2xl font-bold"
            >
              {contacts.length}
            </motion.p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-teal-500">
            <p className="text-sm text-gray-600">In Pipeline</p>
            <motion.p className="text-2xl font-bold text-gray-900">
              {contacts.filter(c => c.stage < stages.length - 1).length}
            </motion.p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-green-500">
            <p className="text-sm text-gray-600">Converted</p>
            <motion.p
              key={conversions}
              initial={{ scale: 1.3, color: '#10b981' }}
              animate={{ scale: 1, color: '#111827' }}
              className="text-2xl font-bold"
            >
              {conversions}
            </motion.p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-purple-500">
            <p className="text-sm text-gray-600">AI Actions</p>
            <motion.p className="text-2xl font-bold text-gray-900">
              {aiActivity.length}
            </motion.p>
          </div>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white rounded-full p-1 shadow-lg inline-flex">
            <button
              onClick={() => setPipelineMode("purchase")}
              className={`px-6 py-2 rounded-full cursor-pointer transition-all ${
                pipelineMode === "purchase"
                  ? "bg-teal-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Purchase
            </button>
            <button
              onClick={() => setPipelineMode("refinance")}
              className={`px-6 py-2 rounded-full cursor-pointer transition-all ${
                pipelineMode === "refinance"
                  ? "bg-teal-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Refinance
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          {/* Pipeline Board */}
          <div className="col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={pipelineMode}
                initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {pipelineMode === "purchase" ? "Purchase" : "Refinance"} Pipeline
                  </h3>
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full"
                  >
                    <Zap className="w-4 h-4" />
                    <span className="text-sm font-medium">Auto-Pilot Active</span>
                  </motion.div>
                </div>

                <div className="grid grid-cols-5 gap-3">
                  {stages.map((stage, idx) => {
                    const stageContacts = getStageContacts(idx);
                    const isConverted = idx === stages.length - 1;
                    
                    return (
                      <motion.div
                        key={stage}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`rounded-lg p-3 ${
                          isConverted ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-medium text-gray-700">
                            {stage}
                          </span>
                          <motion.span
                            key={stageContacts.length}
                            initial={{ scale: 1.3 }}
                            animate={{ scale: 1 }}
                            className={`text-xs px-2 py-1 rounded font-bold ${
                              isConverted 
                                ? 'bg-green-200 text-green-800'
                                : 'bg-teal-100 text-teal-700'
                            }`}
                          >
                            {stageContacts.length}
                          </motion.span>
                        </div>
                        
                        <AnimatePresence mode="popLayout">
                          <motion.div className="space-y-2">
                            {stageContacts.slice(0, 4).map((contact) => (
                              <motion.div
                                key={contact.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                                whileHover={{ scale: 1.05, x: 2 }}
                                className={`rounded border p-2 cursor-pointer ${
                                  isConverted
                                    ? 'bg-green-100 border-green-300'
                                    : 'bg-white border-gray-200 shadow-sm'
                                }`}
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-xs font-medium text-gray-700">
                                    #{contact.id}
                                  </span>
                                  {isConverted && (
                                    <CheckCircle className="w-3 h-3 text-green-600" />
                                  )}
                                </div>
                                {!isConverted && (
                                  <div className="w-full bg-gray-200 rounded-full h-1">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${contact.progress}%` }}
                                      transition={{ duration: 0.5 }}
                                      className="bg-teal-600 h-1 rounded-full"
                                    />
                                  </div>
                                )}
                              </motion.div>
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Automation Indicator */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(20, 184, 166, 0)",
                      "0 0 0 8px rgba(20, 184, 166, 0.1)",
                      "0 0 0 0 rgba(20, 184, 166, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-r from-teal-50 to-purple-50 rounded-lg p-4 mt-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap className="w-5 h-5 text-teal-600" />
                      </motion.div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          AI Automation Engine Running
                        </p>
                        <p className="text-xs text-gray-600">
                          Processing contacts, updating statuses, converting leads
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-teal-600" />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* AI Activity Feed */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200 h-full"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Live AI Activity
                </h3>
              </div>
              
              <AnimatePresence mode="popLayout">
                <div className="space-y-2">
                  {aiActivity.map((log) => (
                    <motion.div
                      key={log.id}
                      layout
                      initial={{ opacity: 0, x: 20, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -20, scale: 0.9 }}
                      className="bg-gradient-to-r from-purple-50 to-teal-50 rounded-lg p-3 border border-purple-100"
                    >
                      <div className="flex items-start gap-2">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Zap className="w-4 h-4 text-purple-600 mt-0.5" />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-xs font-medium text-gray-900">
                            Contact #{log.contactId}
                          </p>
                          <p className="text-xs text-gray-600">
                            {log.action}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {new Date(log.timestamp).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>

              {aiActivity.length === 0 && (
                <div className="text-center text-gray-400 text-sm py-8">
                  Waiting for AI actions...
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionAutomatedPipeline;