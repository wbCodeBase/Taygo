"use client"

import { Workflow, Shell, Users, Brain, ArrowRight, BarChart3 } from 'lucide-react';
import {
  Play,
  CheckCircle2,
  Clock,
  TrendingUp,
} from "lucide-react";
import { SyncedCRMDashboard } from './SyncedCRMDashboard';
import Image from 'next/image';

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from 'react';

// import lisaHeroThumbnail from "@/public/lisaHeroThumbnail.jpg"
import lisaThumbnailThree from "@/public/lisaThumbnail.png"


export default function HeroSection() {
  const features = [
    { icon: BarChart3, text: 'CRM', gradient: 'from-teal to-teal-light' },
    { icon: Users, text: 'AI LO Assistant', gradient: 'from-teal to-teal-light' },
    { icon: Shell, text: 'Pipeline Autopilot', gradient: 'from-teal to-teal-light' },
    { icon: Brain, text: 'Marketing Automation', gradient: 'from-teal to-teal-light' },
    { icon: Workflow, text: 'Auto Follow-Ups', gradient: 'from-teal to-teal-light' },
  ]; <Brain />

  const heading = "AI-Powered Operating System for the Modern Mortgage Business";
  const para = "Everything your brokers, lenders, and loan officers need powered by AI, all in one platform."


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

      <div className={`relative wfull  mx-auto px-6 md:px-12 pb-14 mt-10`}>


        {/* Top Section - Full Width Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-center relative my-2 max-w-5xl mx-auto space-y-6`}
        >

          <div className="absolute top1/4 left-1/4 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom1/4 right-1/4 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom1/4 right-2/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />



          <div>


            {/* Main Headline */}
            <div className="space-y4">
              <h1 className="sm:text-[3rem] text-3xl text-gray-900 font-bold leading-snug">

                {heading}
                {/* AI-Powered Operating System for the Modern Mortgage Business */}

              </h1>

            </div>

            {/* Description */}
            <p className="md:text-xl text-lg text-gray-800 my-6">
              {para}
              {/* Everything your brokers, lenders, and loan officers need powered by AI, all in one platform. */}
            </p>


            <div className="relative inline-block mx-auto mt-4">
              <Image
                src={lisaThumbnailThree}
                // src={lisaHeroThumbnail}
                width={500}
                height={400}
                alt='hero thumbnail' className='rounded-sm'
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gray-800 hover:scale-105 bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all cursor-pointer">
                  <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>

            {/* Feature Pills */}
            < div className="flex flex-wrap gap-5 justify-center my-6 pt-6">
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

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-btn-green hover:bg-btn-green-hover relative font-semibold text-white px-8 py-4 cursor-pointer rounded-xs transition-all inline-flex items-center gap-2 my-4"
              style={{ fontWeight: 600 }}
            >
              View Demo
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>


        </motion.div>



        {/* Bottom Section - Full Width CRM Dashboard */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full"
        >
          <SyncedCRMDashboard />
        </motion.div> */}
      </div >
    </div >
  );
}



export function HeroSectionTwo() {
  const features = [
    { icon: BarChart3, text: 'CRM', gradient: 'from-teal to-teal-light' },
    { icon: Users, text: 'AI LO Assistant', gradient: 'from-teal to-teal-light' },
    { icon: Shell, text: 'Pipeline Autopilot', gradient: 'from-teal to-teal-light' },
    { icon: Brain, text: 'Marketing Automation', gradient: 'from-teal to-teal-light' },
    { icon: Workflow, text: 'Auto Follow-Ups', gradient: 'from-teal to-teal-light' },
  ]; <Brain />


  return (
    <section className="relative overflow-hidden bg-linear-to-br from-teal-50 via-white to-teal-50 py-20">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />




      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-ar-gray-700 text-2xl md:text-4xl font-semibold mb-3 leading-tight"
            >
              AI-Powered Operating System for the Modern Mortgage Business
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg sm:text-xl mb-6 max-w-xl mx-auto lg:mx-0"
            >
              Everything your brokers, lenders, and loan officers need powered by AI, all in one platform.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  boxShadow: "0 20px 40px rgba(20, 104, 106, 0.35)", // teal-500
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-btn-green hover:btn-green-hover font-semibold cursor-pointer text-white rounded-xs shadowlg transition-colors"
              >
                View Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white cursor-pointer text-gray-900 rounded-xs shadow-md border border-gray-200 hover:border-btn-green transition-colors flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4" />
                Watch 90-sec Workflow
              </motion.button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {[
                { label: "CRM", icon: CheckCircle2 },
                { label: "AI LO Assistant", icon: Clock },
                { label: "Pipeline Autopilot", icon: TrendingUp },
              ].map((chip, i) => (
                <motion.div
                  key={chip.label}
                  custom={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-white rounded-sm shadow-sm border border-gray-200 flex items-center gap-2"
                >
                  <chip.icon className="w-4 h-4 text-btn-green" />
                  <span className="text-sm text-gray-700">
                    {chip.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Product Mock */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >


            {/* Pipeline Board Mock */}
            <AnimatePresence mode="wait">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  rotateY: 10,
                }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                transition={{ duration: 0.5 }}
                className="bgwhite rounded-2xl shadow2xl p6 borde border-gray-200"
              >

                <Image src={lisaThumbnailThree} alt="crm-product-hero" width={700} height={400} />
                {/* <Image src="https://www.insightly.com/wp-content/uploads/2025/03/Frame-1538229141-1024x729.png" alt="crm-product-hero" width={700} height={400} /> */}


              </motion.div>
            </AnimatePresence>


            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-14 -right-4 bg-white rounded-lg shadow-xl p-3 border border-gray-200"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal-500" />
                <span className="text-sm">Auto-assigned</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 1,
              }}
              className="absolute bottom-2 -left-4 bg-white rounded-lg shadow-xl p-3 border border-gray-200"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-teal-500" />
                <span className="text-sm">+24% faster</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>


    </section>
  );
}



export function HeroSectionThree() {
  // const features = [
  //   { icon: BarChart3, text: 'CRM', gradient: 'from-teal to-teal-light' },
  //   { icon: Users, text: 'AI LO Assistant', gradient: 'from-teal to-teal-light' },
  //   { icon: Shell, text: 'Pipeline Autopilot', gradient: 'from-teal to-teal-light' },
  //   { icon: Brain, text: 'Marketing Automation', gradient: 'from-teal to-teal-light' },
  //   { icon: Workflow, text: 'Auto Follow-Ups', gradient: 'from-teal to-teal-light' },
  // ]; 

  const heading = "AI-Powered Operating System for the Modern Mortgage Business";
  const para = "Everything your brokers, lenders, and loan officers need powered by AI, all in one platform."


  const videoRef = useRef(null);



  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is visible, reset and play it
            videoElement.currentTime = 0;
            videoElement.play();
          } else {
            // Video is not visible, pause it
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.5, // Play when 50% of video is visible
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);




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

      <div className={`relative wfull  mx-auto px-6 md:px-12 pb-14 mt-10`}>


        {/* Top Section - Full Width Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`textcenter relative my-2 max-w-7xl mx-auto space-y-6`}
        >

          <div className="absolute top1/4 left-1/4 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom1/4 right-1/4 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl" />
          <div className="absolute bottom1/4 right-2/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />


          <div className='flex justify-between border-b border-gray-200 gap-16 items-center py-6'>

            <div style={{ position: 'relative', width: '450px', height: '470px' }} className='flex justify-center items-center'>
              <video
                ref={videoRef}
                width="350"
                height="470"
                playsInline
                autoPlay
                muted
                className='border-r border-white'
              >
                <source src="/video/lisaface.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>


            <div>

              {/* Main Headline */}
              <div className="space-y4">
                <h1 className="text-2xl md:text-[2.8rem] text-gray-900 font-bold leading-snug">

                  {heading}
                  {/* AI-Powered Operating System for the Modern Mortgage Business */}

                </h1>

              </div>

              {/* Description */}
              <p className="md:text-xl text-lg text-gray-800 my-6">
                {para}
                {/* Everything your brokers, lenders, and loan officers need powered by AI, all in one platform. */}
              </p>


              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-btn-green hover:bg-btn-green-hover relative font-semibold text-white px-8 py-4 cursor-pointer rounded-xs transition-all inline-flex items-center gap-2 my-4"
                style={{ fontWeight: 600 }}
              >
                View Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

          </div>


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
      </div >
    </div >
  );
}





export function HeroSectionFour() {
  const features = [
    { icon: BarChart3, text: 'CRM', gradient: 'from-teal to-teal-light' },
    { icon: Users, text: 'AI LO Assistant', gradient: 'from-teal to-teal-light' },
    { icon: Shell, text: 'Pipeline Autopilot', gradient: 'from-teal to-teal-light' },
    { icon: Brain, text: 'Marketing Automation', gradient: 'from-teal to-teal-light' },
    { icon: Workflow, text: 'Auto Follow-Ups', gradient: 'from-teal to-teal-light' },
  ];

  const heading = "AI-Powered Operating System for the Modern Mortgage Business";
  const para = "Everything your brokers, lenders, and loan officers need powered by AI, all in one platform."

  const videoRef = useRef(null);



  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is visible, reset and play it
            videoElement.currentTime = 0;
            videoElement.play();
          } else {
            // Video is not visible, pause it
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.5, // Play when 50% of video is visible
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);



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

      <div className={`relative wfull  mx-auto px-6 md:px-12 pb-14 mt-10`}>


        {/* Top Section - Full Width Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-center relative my-2 max-w-5xl mx-auto space-y-6`}
        >


          <div>


            {/* Main Headline */}
            <div className="space-y4">
              <h1 className="sm:text-[3rem] text-3xl text-gray-900 font-bold leading-snug">

                {heading}
                {/* AI-Powered Operating System for the Modern Mortgage Business */}

              </h1>

            </div>

            {/* Description */}
            <p className="md:text-xl text-lg text-gray-800 my-6">
              {para}
              {/* Everything your brokers, lenders, and loan officers need powered by AI, all in one platform. */}
            </p>


            {/* <div className="relative inline-block mx-auto mt-4">
              <Image
                src={lisaThumbnailThree}
                // src={lisaHeroThumbnail}
                width={500}
                height={400}
                alt='hero thumbnail' className='rounded-sm'
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-gray-800 hover:scale-105 bg-opacity-60 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all cursor-pointer">
                  <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div> */}


            <div style={{ position: 'relative', width: '250px', height: '300px' }} className='flex mx-auto justify-center items-center'>
              <video
                ref={videoRef}
                width="250"
                height="270"
                playsInline
                autoPlay
                muted
                className='border-r border-white'
              >
                <source src="/video/lisaface.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>


            {/* Feature Pills */}
            < div className="flex flex-wrap gap-5 justify-center my-6 pt-6">
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

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-btn-green hover:bg-btn-green-hover relative font-semibold text-white px-8 py-4 cursor-pointer rounded-xs transition-all inline-flex items-center gap-2 my-4"
              style={{ fontWeight: 600 }}
            >
              View Demo
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>


        </motion.div>


      </div >
    </div >
  );
}









// "use client"
// import { Workflow, Shell, Users, Handshake, Brain, ArrowRight, BarChart3 } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { SyncedCRMDashboard } from './SyncedCRMDashboard';
// // import Image from 'next/image';
// import { useEffect, useRef, useState } from 'react';

// export default function HeroSection() {
//   const features = [
//     { icon: BarChart3, text: 'CRM', gradient: 'from-teal to-teal-light' },
//     { icon: Users, text: 'AI LO Assistant', gradient: 'from-teal to-teal-light' },
//     { icon: Shell, text: 'Pipeline Autopilot', gradient: 'from-teal to-teal-light' },
//     { icon: Brain, text: 'Marketing Automation', gradient: 'from-teal to-teal-light' },
//     { icon: Workflow, text: 'Auto Follow-Ups', gradient: 'from-teal to-teal-light' },
//   ]; <Brain />

//   const heading = "AI-Powered OS for the Modern Mortgage Business";
//   const para = "Everything your brokers, lenders, and loan officers need powered by AI, all in one platform."


//   const videoRef = useRef(null);

//   const [headingText, setHeadingText] = useState(heading);
//   const [paraText, setParaText] = useState(para);
//   const [isPlaying, setIsPlaying] = useState(false);




//   const headingIntervalRef = useRef(null);
//   const paraIntervalRef = useRef(null);
//   const headingIndexRef = useRef(0);
//   const paraIndexRef = useRef(0);


//   const [hasStarted, setHasStarted] = useState(false);

//   // 🔹 Start typing animation
//   const startTyping = () => {
//     headingIndexRef.current = 0;
//     paraIndexRef.current = 0;
//     setHeadingText("");
//     setParaText("");

//     headingIntervalRef.current = setInterval(() => {
//       if (headingIndexRef.current < heading.length) {
//         setHeadingText(heading.slice(0, headingIndexRef.current + 1));
//         headingIndexRef.current++;
//       } else {
//         clearInterval(headingIntervalRef.current);

//         paraIntervalRef.current = setInterval(() => {
//           if (paraIndexRef.current < para.length) {
//             setParaText(para.slice(0, paraIndexRef.current + 1));
//             paraIndexRef.current++;
//           } else {
//             clearInterval(paraIntervalRef.current);
//           }
//         }, 40);
//       }
//     }, 80);
//   };

//   // 🔹 Pause typing animation
//   const pauseTyping = () => {
//     if (headingIntervalRef.current) clearInterval(headingIntervalRef.current);
//     if (paraIntervalRef.current) clearInterval(paraIntervalRef.current);
//   };

//   // 🔹 Resume typing animation
//   const resumeTyping = () => {
//     if (headingIndexRef.current < heading.length) {
//       headingIntervalRef.current = setInterval(() => {
//         if (headingIndexRef.current < heading.length) {
//           setHeadingText(heading.slice(0, headingIndexRef.current + 1));
//           headingIndexRef.current++;
//         } else {
//           clearInterval(headingIntervalRef.current);

//           paraIntervalRef.current = setInterval(() => {
//             if (paraIndexRef.current < para.length) {
//               setParaText(para.slice(0, paraIndexRef.current + 1));
//               paraIndexRef.current++;
//             } else {
//               clearInterval(paraIntervalRef.current);
//             }
//           }, 40);
//         }
//       }, 80);
//     } else if (paraIndexRef.current < para.length) {
//       paraIntervalRef.current = setInterval(() => {
//         if (paraIndexRef.current < para.length) {
//           setParaText(para.slice(0, paraIndexRef.current + 1));
//           paraIndexRef.current++;
//         } else {
//           clearInterval(paraIntervalRef.current);
//         }
//       }, 40);
//     }
//   };

//   // 🔹 Cleanup intervals on unmount
//   useEffect(() => {
//     return () => {
//       if (headingIntervalRef.current) clearInterval(headingIntervalRef.current);
//       if (paraIntervalRef.current) clearInterval(paraIntervalRef.current);
//     };
//   }, []);

//   // 🔹 Handle video play - only trigger animation if user clicked
//   const handlePlay = () => {
//     setIsPlaying(true);
//     if (hasStarted) {
//       // Only resume typing if already started by user
//       resumeTyping();
//     }
//   };

//   // 🔹 Handle video pause
//   const handlePause = () => {
//     setIsPlaying(false);
//     if (hasStarted) {
//       pauseTyping();
//     }
//   };

//   // 🔹 Handle user clicking play button
//   const handleUserPlay = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = false;
//       setHasStarted(true);
//       setIsPlaying(true);
//       startTyping();
//       videoRef.current.play();
//     }
//   };



//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute top-20 right-20 w-72 h-72 bg-teal/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 left-20 w-96 h-96 bg-indigo/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </div>

//       <div className={`relative mx-auto px-6 md:px-12 pb-14 mt-10`}>

//         <div className='flex justify-center gap-8 items-center py-6'>


//           <div style={{ position: 'relative', width: '250px', height: '470px' }} className='flex justify-center items-center'>
//             <video
//               ref={videoRef}
//               width="250"
//               height="470"
//               playsInline
//               // autoPlay
//               muted
//               onPlay={handleUserPlay}
//               onPause={handlePause}
//               onEnded={() => setIsPlaying(false)}
//             >
//               <source src="/video/lisaface.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>

//             {/* Play button overlay */}
//             {!isPlaying && (
//               <button
//                 onClick={() => {
//                   if (videoRef.current) {
//                     videoRef.current.muted = false;
//                     videoRef.current.play();
//                   }
//                 }}
//                 style={{
//                   position: 'absolute',
//                   top: '50%',
//                   left: '50%',
//                   transform: 'translate(-50%, -50%)',
//                   width: '60px',
//                   height: '60px',
//                   borderRadius: '50%',
//                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                   border: 'none',
//                   cursor: 'pointer',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '24px',
//                   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
//                   zIndex: 10
//                 }}
//               >
//                 ▶
//               </button>
//             )}
//           </div>



//           {/* Top Section - Full Width Header */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className={`text-center relative my-2 max-w-5xl mxauto space-y-6`}
//           >

//             {paraText && <>
//               <div className="absolute top1/4 left-1/4 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl" />
//               <div className="absolute bottom1/4 right-1/4 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl" />
//               <div className="absolute bottom1/4 right-2/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
//             </>}



//             <div>


//               {/* Main Headline */}
//               <div className="space-y4">
//                 <h1 className="sm:text-[3rem] text-3xl text-gray-900 font-bold leading-snug">

//                   {headingText}
//                   {/* AI-Powered Operating System for the Modern Mortgage Business */}

//                 </h1>

//               </div>

//               {/* Description */}
//               <p className="md:text-xl text-lg text-gray-800 my-6">
//                 {paraText}
//                 {/* Everything your brokers, lenders, and loan officers need powered by AI, all in one platform. */}
//               </p>


//               {/* Feature Pills */}
//               {paraText ? <>
//                 < div className="flex flex-wrap gap-5 justify-center my-6 pt-6">
//                   {features.map((feature, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.4 + index * 0.1 }}
//                       className="flex items-center gap-3 bg-white z-10 px-3 py-2 rounded-sm shadow-md border border-gray-200"
//                     >
//                       <div className={`w-8 h-8 bg-gradient-to-r from-teal-600 to-teal-700 ${feature.gradient} rounded-xs flex items-center justify-center`}>
//                         <feature.icon className="w-4 h-4 text-white" />
//                       </div>
//                       <span className="text-md text-gray-700" style={{ fontWeight: 500 }}>{feature.text}</span>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <motion.button
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.8 }}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-btn-green hover:bg-btn-green-hover relative font-semibold text-white px-8 py-4 cursor-pointer rounded-xs transition-all inline-flex items-center gap-2 my-4"
//                   style={{ fontWeight: 600 }}
//                 >
//                   View Demo
//                   <ArrowRight className="w-5 h-5" />
//                 </motion.button>
//               </>
//                 : null}

//             </div>


//           </motion.div>


//         </div>

//         {/* Bottom Section - Full Width CRM Dashboard */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="w-full"
//         >
//           <SyncedCRMDashboard />
//         </motion.div>
//       </div >
//     </div >
//   );
// }


// export function HeroSectionTwo() {
//   const features = [
//     { icon: BarChart3, text: 'CRM', gradient: 'from-teal to-teal-light' },
//     { icon: Users, text: 'AI LO Assistant', gradient: 'from-teal to-teal-light' },
//     { icon: Shell, text: 'Pipeline Autopilot', gradient: 'from-teal to-teal-light' },
//     { icon: Brain, text: 'Marketing Automation', gradient: 'from-teal to-teal-light' },
//     { icon: Workflow, text: 'Auto Follow-Ups', gradient: 'from-teal to-teal-light' },
//   ]; <Brain />

//   const heading = "AI-Powered OS for the Modern Mortgage Business";
//   const para = "Everything your brokers, lenders, and loan officers need powered by AI, all in one platform."


//   const videoRef = useRef(null);

//   const [headingText, setHeadingText] = useState(heading);
//   const [paraText, setParaText] = useState(para);
//   const [isPlaying, setIsPlaying] = useState(false);



//   const headingIntervalRef = useRef(null);
//   const paraIntervalRef = useRef(null);
//   const headingIndexRef = useRef(0);
//   const paraIndexRef = useRef(0);


//   const [hasStarted, setHasStarted] = useState(false);

//   // 🔹 Start typing animation
//   const startTyping = () => {
//     headingIndexRef.current = 0;
//     paraIndexRef.current = 0;
//     setHeadingText("");
//     setParaText("");

//     headingIntervalRef.current = setInterval(() => {
//       if (headingIndexRef.current < heading.length) {
//         setHeadingText(heading.slice(0, headingIndexRef.current + 1));
//         headingIndexRef.current++;
//       } else {
//         clearInterval(headingIntervalRef.current);

//         paraIntervalRef.current = setInterval(() => {
//           if (paraIndexRef.current < para.length) {
//             setParaText(para.slice(0, paraIndexRef.current + 1));
//             paraIndexRef.current++;
//           } else {
//             clearInterval(paraIntervalRef.current);
//           }
//         }, 40);
//       }
//     }, 80);
//   };

//   // 🔹 Pause typing animation
//   const pauseTyping = () => {
//     if (headingIntervalRef.current) clearInterval(headingIntervalRef.current);
//     if (paraIntervalRef.current) clearInterval(paraIntervalRef.current);
//   };

//   // 🔹 Resume typing animation
//   const resumeTyping = () => {
//     if (headingIndexRef.current < heading.length) {
//       headingIntervalRef.current = setInterval(() => {
//         if (headingIndexRef.current < heading.length) {
//           setHeadingText(heading.slice(0, headingIndexRef.current + 1));
//           headingIndexRef.current++;
//         } else {
//           clearInterval(headingIntervalRef.current);

//           paraIntervalRef.current = setInterval(() => {
//             if (paraIndexRef.current < para.length) {
//               setParaText(para.slice(0, paraIndexRef.current + 1));
//               paraIndexRef.current++;
//             } else {
//               clearInterval(paraIntervalRef.current);
//             }
//           }, 40);
//         }
//       }, 80);
//     } else if (paraIndexRef.current < para.length) {
//       paraIntervalRef.current = setInterval(() => {
//         if (paraIndexRef.current < para.length) {
//           setParaText(para.slice(0, paraIndexRef.current + 1));
//           paraIndexRef.current++;
//         } else {
//           clearInterval(paraIntervalRef.current);
//         }
//       }, 40);
//     }
//   };

//   // 🔹 Cleanup intervals on unmount
//   useEffect(() => {
//     return () => {
//       if (headingIntervalRef.current) clearInterval(headingIntervalRef.current);
//       if (paraIntervalRef.current) clearInterval(paraIntervalRef.current);
//     };
//   }, []);

//   // 🔹 Handle video play - only trigger animation if user clicked
//   const handlePlay = () => {
//     setIsPlaying(true);
//     if (hasStarted) {
//       // Only resume typing if already started by user
//       resumeTyping();
//     }
//   };

//   // 🔹 Handle video pause
//   const handlePause = () => {
//     setIsPlaying(false);
//     if (hasStarted) {
//       pauseTyping();
//     }
//   };

//   // 🔹 Handle user clicking play button
//   const handleUserPlay = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = false;
//       setHasStarted(true);
//       setIsPlaying(true);
//       startTyping();
//       videoRef.current.play();
//     }
//   };



//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute top-20 right-20 w-72 h-72 bg-teal/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 left-20 w-96 h-96 bg-indigo/5 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//         />
//       </div>

//       <div className={`relative wfull mx-auto px-6 md:px12 pb14 mt10 mt-6`}>

//         <div className='flex justify-center gap-8 items-center py6'>



//           {/* Top Section - Full Width Header */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className={`text-center relative my-2 max-w-6xl mxauto space-y-6`}
//           >

//             {/* {paraText && <>
//               <div className="absolute top1/4 left-1/4 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl" />
//               <div className="absolute bottom1/4 right-1/4 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl" />
//               <div className="absolute bottom1/4 right-2/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
//             </>} */}



//             <div>


//               {/* Main Headline */}
//               <div className="space-y4">
//                 <h1 className="sm:text-[3rem] text-3xl text-gray-900 font-bold leading-snug">

//                   {headingText}
//                   {/* AI-Powered Operating System for the Modern Mortgage Business */}

//                 </h1>

//               </div>

//               {/* Description */}
//               <p className="md:text-xl text-lg text-gray-800 my-4">
//                 {paraText}
//                 {/* Everything your brokers, lenders, and loan officers need powered by AI, all in one platform. */}
//               </p>



//               <div style={{ position: 'relative' }} className='flex justify-center items-center pt-4'>
//                 <video
//                   ref={videoRef}
//                   width="250"
//                   height="250"
//                   playsInline
//                   // autoPlay
//                   muted
//                   onPlay={handleUserPlay}
//                   onPause={handlePause}
//                   onEnded={() => setIsPlaying(false)}
//                 >
//                   <source src="/video/lisaface.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>

//                 {/* Play button overlay */}
//                 {!isPlaying && (
//                   <button
//                     onClick={() => {
//                       if (videoRef.current) {
//                         videoRef.current.muted = false;
//                         videoRef.current.play();
//                       }
//                     }}
//                     style={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       transform: 'translate(-50%, -50%)',
//                       width: '60px',
//                       height: '60px',
//                       borderRadius: '50%',
//                       backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                       border: 'none',
//                       cursor: 'pointer',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       fontSize: '24px',
//                       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
//                       zIndex: 10
//                     }}
//                   >
//                     ▶
//                   </button>
//                 )}
//               </div>


//               {/* Feature Pills */}
//               {headingText ? <>
//                 < div className="flex flex-wrap gap-5 justify-center my-6 pt-6">
//                   {features.map((feature, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.4 + index * 0.1 }}
//                       className="flex items-center gap-3 bg-white z-10 px-3 py-2 rounded-sm shadow-md border border-gray-200"
//                     >
//                       <div className={`w-8 h-8 bg-gradient-to-r from-teal-600 to-teal-700 ${feature.gradient} rounded-xs flex items-center justify-center`}>
//                         <feature.icon className="w-4 h-4 text-white" />
//                       </div>
//                       <span className="text-md text-gray-700" style={{ fontWeight: 500 }}>{feature.text}</span>
//                     </motion.div>
//                   ))}
//                 </div>

//                 <motion.button
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.8 }}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-btn-green hover:bg-btn-green-hover relative font-semibold text-white px-8 py-4 cursor-pointer rounded-xs transition-all inline-flex items-center gap-2 my-4"
//                   style={{ fontWeight: 600 }}
//                 >
//                   View Demo
//                   <ArrowRight className="w-5 h-5" />
//                 </motion.button>
//               </>
//                 : null}

//             </div>


//           </motion.div>


//         </div>

//       </div >
//     </div >
//   );
// }
