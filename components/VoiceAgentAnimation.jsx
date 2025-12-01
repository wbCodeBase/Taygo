"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Mic, X, Volume2 } from "lucide-react";


const conversationData = [
  { speaker: "Sarah", text: "Hi James, I'm calling about our new social media campaign." },
  { speaker: "James", text: "Hey Sarah, excited to hear your ideas." },
  { speaker: "Sarah", text: "I’ve planned a strategy for LinkedIn. Want to start with audience targeting or content?" },
  { speaker: "James", text: "Let’s begin with content strategy." },
  { speaker: "Sarah", text: "Perfect! I'm suggesting a mix of educational posts, and behind-the-scenes content." }
];


export default function VoiceAgentAnimation({ isActive = true }) {
  const [callTime, setCallTime] = useState("00:01");
  const [isProcessing, setIsProcessing] = useState(true);
  const [currentTranscriptIndex, setCurrentTranscriptIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);




  // Advance transcript
  useEffect(() => {
    if (!isActive) {
      setCurrentTranscriptIndex(0);
      return;
    }

    const transcriptTimer = setInterval(() => {
      setCurrentTranscriptIndex(prev =>
        prev < conversationData.length - 1 ? prev + 1 : 0
      );
    }, 4000);

    return () => clearInterval(transcriptTimer);
  }, [isActive]);

  // Call timer
  useEffect(() => {
    if (!isActive) {
      return;
    }

    let timerId;
    let seconds = 1;

    // Update call time
    timerId = setInterval(() => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      setCallTime(`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
      seconds++;

      // Toggle processing state periodically for animation
      if (seconds % 5 === 0) {
        setIsProcessing(prev => !prev);
      }
    }, 1000);

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isActive]);

  // Generate simple wave data
  const generateWaveData = (side, active) => {
    return Array.from({ length: 12 }, (_, i) => ({
      height: active ?
        Math.sin(Date.now() / 500 + i / 2) * 10 + 15 : // More natural wave pattern
        3 + Math.random() * 2,
      color: side === 'left' ? '#3B82F6' : '#9CA3AF'
    }));
  };

  const leftWaveData = generateWaveData('left', isActive &&
    (conversationData[currentTranscriptIndex]?.speaker === "Sarah" || isProcessing));
  const rightWaveData = generateWaveData('right', isActive &&
    (conversationData[currentTranscriptIndex]?.speaker === "James" && !isProcessing));

  return (
    <div className="w-full sm:w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 relative">
      {/* Status Bar - iPhone style */}
      <div className="bg-gray50 h-6 flex items-center justify-between px-4 borderb border-gray100 absolute top-0 left-0 right-0 z-10">
        <div className="text-xs font-medium text-gray-500">
          <motion.span
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Voice Call
          </motion.span>
        </div>
        <div className="text-xs font-medium text-gray-500">{callTime}</div>
      </div>

      {/* Main Call Screen */}
      <div className="p-4 bg-gray-50 flex flex-col items-center">
        {/* Caller Info */}
        <div className="flex flex-co gap-4 items-center">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <motion.div
              className="absolute -right-1 -bottom-1 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center border-2 border-white"
              animate={{
                scale: conversationData[currentTranscriptIndex]?.speaker === "Sarah" ?
                  [1, 1.2, 1] : 1
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Phone className="w-3 h-3 text-green-600" />
            </motion.div>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mt-6">Sarah Connor</h3>
            <p className="text-xs text-gray-400">In Call</p>
          </div>
        </div>



        {/* Voice Waveform */}
        <div className="w-full h-12 mb-4 flex items-center justify-center">
          <div className="flex items-end space-x-1 h-full">
            {leftWaveData.map((bar, idx) => (
              <motion.div
                key={`wave-${idx}`}
                className="w-1 bg-blue-400 rounded-sm"
                initial={{ height: 3 }}
                animate={{ height: bar.height }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: idx * 0.05
                }}
              />
            ))}
          </div>
        </div>

        {/* Call Controls */}
        <div className="flex space-x-8 mb4">
          <motion.button
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMuted(!isMuted)}
          >
            <Mic className={`w-5 h-5 ${isMuted ? 'text-red-500' : 'text-gray-600'}`} />
          </motion.button>
          <motion.button
            className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "#EF4444" }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-5 h-5 text-white" />
          </motion.button>
          <motion.button
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }}
            whileTap={{ scale: 0.95 }}
          >
            <Volume2 className="w-5 h-5 text-gray-600" />
          </motion.button>
        </div>
      </div>

      {/* Transcript Panel */}
      <div className="border-t border-gray-100 p-4 bg-white">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-medium text-gray-600">Live Transcript</div>
          <div className="text-xs bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full">
            HD Voice
          </div>
        </div>

        {/* Conversation Messages */}
        <div className="overflow-hidden rounded-lg bg-gray-50 p-3 max-h-60">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTranscriptIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {/* Previous message for context */}
              {currentTranscriptIndex > 0 && (
                <div className={`flex ${conversationData[currentTranscriptIndex - 1].speaker === "Sarah" ? "justify-start" : "justify-end"}`}>
                  <div className={`px-3 py-2 rounded-lg max-w-[80%] text-sm ${conversationData[currentTranscriptIndex - 1].speaker === "Sarah"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-200 text-gray-800"
                    }`}>
                    {conversationData[currentTranscriptIndex - 1].text}
                  </div>
                </div>
              )}

              {/* Current message */}
              <div className={`flex ${conversationData[currentTranscriptIndex].speaker === "Sarah" ? "justify-start" : "justify-end"}`}>
                <div className={`px-3 py-2 rounded-lg max-w-[80%] text-sm ${conversationData[currentTranscriptIndex].speaker === "Sarah"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-200 text-gray-800"
                  }`}>
                  <div className="font-medium text-xs mb-1">
                    {conversationData[currentTranscriptIndex].speaker}
                    {conversationData[currentTranscriptIndex].speaker ===
                      (isProcessing ? "Sarah" : "James") && (
                        <motion.span
                          className="inline-block ml-1"
                          animate={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        >
                          speaking...
                        </motion.span>
                      )}
                  </div>
                  {conversationData[currentTranscriptIndex].text}
                  {conversationData[currentTranscriptIndex].speaker ===
                    (isProcessing ? "Sarah" : "James") && (
                      <motion.span
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 0.4, repeat: Infinity }}
                      >|</motion.span>
                    )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Status Indicator */}
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full mr-2 ${conversationData[currentTranscriptIndex].speaker === "Sarah"
                ? "bg-blue-500"
                : "bg-gray-400"
              }`} />
            AI-powered voice conversation
          </div>
          <div>
            {conversationData[currentTranscriptIndex].speaker === "Sarah"
              ? "Sarah is speaking"
              : "James is speaking"}
          </div>
        </div>
      </div>
    </div>
  );
}