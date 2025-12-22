"use client"
import { Workflow, Shell, Users, Handshake, Brain, ArrowRight, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SyncedCRMDashboard } from './SyncedCRMDashboard';
// import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const features = [
    { icon: BarChart3, text: 'CRM', gradient: 'from-teal to-teal-light' },
    { icon: Users, text: 'AI LO Assistant', gradient: 'from-teal to-teal-light' },
    { icon: Shell, text: 'Pipeline Autopilot', gradient: 'from-teal to-teal-light' },
    { icon: Brain, text: 'Marketing Automation', gradient: 'from-teal to-teal-light' },
    { icon: Workflow, text: 'Auto Follow-Ups', gradient: 'from-teal to-teal-light' },
  ]; <Brain />

  const heading = "AI-Powered OS for the Modern Mortgage Business";
  const para = "Everything your brokers, lenders, and loan officers need powered by AI, all in one platform."


  const videoRef = useRef(null);

  const [headingText, setHeadingText] = useState(heading);
  const [paraText, setParaText] = useState(para);
  const [isPlaying, setIsPlaying] = useState(false);

  // 🔹 Typing logic (controlled)
  // const startTyping = () => {
  //   let i = 0;
  //   let j = 0;

  //   const headingInterval = setInterval(() => {
  //     setHeadingText(heading.slice(0, i + 1));
  //     i++;

  //     if (i === heading.length) {
  //       clearInterval(headingInterval);

  //       const paraInterval = setInterval(() => {
  //         setParaText(para.slice(0, j + 1));
  //         j++;

  //         if (j === para.length) {
  //           clearInterval(paraInterval);
  //         }
  //       }, 40);
  //     }
  //   }, 80);
  // };

  // // 🔹 Play video when page renders
  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (!video) return;

  //   // video.play();
  //   setIsPlaying(true);
  //   startTyping();
  // }, []);

  // 🔹 Sync typing with video controls
  // const handlePlay = () => {
  //   if (!isPlaying) {
  //     if (videoRef.current) {
  //       videoRef.current.muted = false;
  //     }
  //     setParaText("");

  //     setIsPlaying(true);
  //     startTyping();
  //   }
  // };

  // const handlePause = () => {
  //   setIsPlaying(false);
  // };




  const headingIntervalRef = useRef(null);
  const paraIntervalRef = useRef(null);
  const headingIndexRef = useRef(0);
  const paraIndexRef = useRef(0);


  const [hasStarted, setHasStarted] = useState(false);

  // 🔹 Start typing animation
  const startTyping = () => {
    headingIndexRef.current = 0;
    paraIndexRef.current = 0;
    setHeadingText("");
    setParaText("");

    headingIntervalRef.current = setInterval(() => {
      if (headingIndexRef.current < heading.length) {
        setHeadingText(heading.slice(0, headingIndexRef.current + 1));
        headingIndexRef.current++;
      } else {
        clearInterval(headingIntervalRef.current);

        paraIntervalRef.current = setInterval(() => {
          if (paraIndexRef.current < para.length) {
            setParaText(para.slice(0, paraIndexRef.current + 1));
            paraIndexRef.current++;
          } else {
            clearInterval(paraIntervalRef.current);
          }
        }, 40);
      }
    }, 80);
  };

  // 🔹 Pause typing animation
  const pauseTyping = () => {
    if (headingIntervalRef.current) clearInterval(headingIntervalRef.current);
    if (paraIntervalRef.current) clearInterval(paraIntervalRef.current);
  };

  // 🔹 Resume typing animation
  const resumeTyping = () => {
    if (headingIndexRef.current < heading.length) {
      headingIntervalRef.current = setInterval(() => {
        if (headingIndexRef.current < heading.length) {
          setHeadingText(heading.slice(0, headingIndexRef.current + 1));
          headingIndexRef.current++;
        } else {
          clearInterval(headingIntervalRef.current);

          paraIntervalRef.current = setInterval(() => {
            if (paraIndexRef.current < para.length) {
              setParaText(para.slice(0, paraIndexRef.current + 1));
              paraIndexRef.current++;
            } else {
              clearInterval(paraIntervalRef.current);
            }
          }, 40);
        }
      }, 80);
    } else if (paraIndexRef.current < para.length) {
      paraIntervalRef.current = setInterval(() => {
        if (paraIndexRef.current < para.length) {
          setParaText(para.slice(0, paraIndexRef.current + 1));
          paraIndexRef.current++;
        } else {
          clearInterval(paraIntervalRef.current);
        }
      }, 40);
    }
  };

  // 🔹 Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      if (headingIntervalRef.current) clearInterval(headingIntervalRef.current);
      if (paraIntervalRef.current) clearInterval(paraIntervalRef.current);
    };
  }, []);

  // 🔹 Handle video play - only trigger animation if user clicked
  const handlePlay = () => {
    setIsPlaying(true);
    if (hasStarted) {
      // Only resume typing if already started by user
      resumeTyping();
    }
  };

  // 🔹 Handle video pause
  const handlePause = () => {
    setIsPlaying(false);
    if (hasStarted) {
      pauseTyping();
    }
  };

  // 🔹 Handle user clicking play button
  const handleUserPlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setHasStarted(true);
      setIsPlaying(true);
      startTyping();
      videoRef.current.play();
    }
  };



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

      <div className={`relative mx-auto px-6 md:px-12 pb-14 mt-10`}>

        <div className='flex justify-center gap-8 items-center py-6'>


          <div style={{ position: 'relative', width: '250px', height: '470px' }} className='flex justify-center items-center'>
            <video
              ref={videoRef}
              width="250"
              height="470"
              playsInline
              // autoPlay
              muted
              onPlay={handleUserPlay}
              onPause={handlePause}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/video/lisaface.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play button overlay */}
            {!isPlaying && (
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = false;
                    videoRef.current.play();
                  }
                }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  zIndex: 10
                }}
              >
                ▶
              </button>
            )}
          </div>



          {/* Top Section - Full Width Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-center relative my-2 max-w-5xl mxauto space-y-6`}
          >

            {paraText && <>
              <div className="absolute top1/4 left-1/4 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl" />
              <div className="absolute bottom1/4 right-1/4 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl" />
              <div className="absolute bottom1/4 right-2/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
            </>}



            <div>


              {/* Main Headline */}
              <div className="space-y4">
                <h1 className="sm:text-[3rem] text-3xl text-gray-900 font-bold leading-snug">

                  {headingText}
                  {/* AI-Powered Operating System for the Modern Mortgage Business */}

                </h1>

              </div>

              {/* Description */}
              <p className="md:text-xl text-lg text-gray-800 my-6">
                {paraText}
                {/* Everything your brokers, lenders, and loan officers need powered by AI, all in one platform. */}
              </p>


              {/* Feature Pills */}
              {paraText ? <>
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
              </>
                : null}

            </div>


          </motion.div>


        </div>

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


export function HeroSectionTwo() {
  const features = [
    { icon: BarChart3, text: 'CRM', gradient: 'from-teal to-teal-light' },
    { icon: Users, text: 'AI LO Assistant', gradient: 'from-teal to-teal-light' },
    { icon: Shell, text: 'Pipeline Autopilot', gradient: 'from-teal to-teal-light' },
    { icon: Brain, text: 'Marketing Automation', gradient: 'from-teal to-teal-light' },
    { icon: Workflow, text: 'Auto Follow-Ups', gradient: 'from-teal to-teal-light' },
  ]; <Brain />

  const heading = "AI-Powered OS for the Modern Mortgage Business";
  const para = "Everything your brokers, lenders, and loan officers need powered by AI, all in one platform."


  const videoRef = useRef(null);

  const [headingText, setHeadingText] = useState(heading);
  const [paraText, setParaText] = useState(para);
  const [isPlaying, setIsPlaying] = useState(false);



  const headingIntervalRef = useRef(null);
  const paraIntervalRef = useRef(null);
  const headingIndexRef = useRef(0);
  const paraIndexRef = useRef(0);


  const [hasStarted, setHasStarted] = useState(false);

  // 🔹 Start typing animation
  const startTyping = () => {
    headingIndexRef.current = 0;
    paraIndexRef.current = 0;
    setHeadingText("");
    setParaText("");

    headingIntervalRef.current = setInterval(() => {
      if (headingIndexRef.current < heading.length) {
        setHeadingText(heading.slice(0, headingIndexRef.current + 1));
        headingIndexRef.current++;
      } else {
        clearInterval(headingIntervalRef.current);

        paraIntervalRef.current = setInterval(() => {
          if (paraIndexRef.current < para.length) {
            setParaText(para.slice(0, paraIndexRef.current + 1));
            paraIndexRef.current++;
          } else {
            clearInterval(paraIntervalRef.current);
          }
        }, 40);
      }
    }, 80);
  };

  // 🔹 Pause typing animation
  const pauseTyping = () => {
    if (headingIntervalRef.current) clearInterval(headingIntervalRef.current);
    if (paraIntervalRef.current) clearInterval(paraIntervalRef.current);
  };

  // 🔹 Resume typing animation
  const resumeTyping = () => {
    if (headingIndexRef.current < heading.length) {
      headingIntervalRef.current = setInterval(() => {
        if (headingIndexRef.current < heading.length) {
          setHeadingText(heading.slice(0, headingIndexRef.current + 1));
          headingIndexRef.current++;
        } else {
          clearInterval(headingIntervalRef.current);

          paraIntervalRef.current = setInterval(() => {
            if (paraIndexRef.current < para.length) {
              setParaText(para.slice(0, paraIndexRef.current + 1));
              paraIndexRef.current++;
            } else {
              clearInterval(paraIntervalRef.current);
            }
          }, 40);
        }
      }, 80);
    } else if (paraIndexRef.current < para.length) {
      paraIntervalRef.current = setInterval(() => {
        if (paraIndexRef.current < para.length) {
          setParaText(para.slice(0, paraIndexRef.current + 1));
          paraIndexRef.current++;
        } else {
          clearInterval(paraIntervalRef.current);
        }
      }, 40);
    }
  };

  // 🔹 Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      if (headingIntervalRef.current) clearInterval(headingIntervalRef.current);
      if (paraIntervalRef.current) clearInterval(paraIntervalRef.current);
    };
  }, []);

  // 🔹 Handle video play - only trigger animation if user clicked
  const handlePlay = () => {
    setIsPlaying(true);
    if (hasStarted) {
      // Only resume typing if already started by user
      resumeTyping();
    }
  };

  // 🔹 Handle video pause
  const handlePause = () => {
    setIsPlaying(false);
    if (hasStarted) {
      pauseTyping();
    }
  };

  // 🔹 Handle user clicking play button
  const handleUserPlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setHasStarted(true);
      setIsPlaying(true);
      startTyping();
      videoRef.current.play();
    }
  };



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

      <div className={`relative wfull mx-auto px-6 md:px12 pb14 mt10 mt-6`}>

        <div className='flex justify-center gap-8 items-center py6'>



          {/* Top Section - Full Width Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-center relative my-2 max-w-6xl mxauto space-y-6`}
          >

            {/* {paraText && <>
              <div className="absolute top1/4 left-1/4 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl" />
              <div className="absolute bottom1/4 right-1/4 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl" />
              <div className="absolute bottom1/4 right-2/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
            </>} */}



            <div>


              {/* Main Headline */}
              <div className="space-y4">
                <h1 className="sm:text-[3rem] text-3xl text-gray-900 font-bold leading-snug">

                  {headingText}
                  {/* AI-Powered Operating System for the Modern Mortgage Business */}

                </h1>

              </div>

              {/* Description */}
              <p className="md:text-xl text-lg text-gray-800 my-4">
                {paraText}
                {/* Everything your brokers, lenders, and loan officers need powered by AI, all in one platform. */}
              </p>



              <div style={{ position: 'relative' }} className='flex justify-center items-center pt-4'>
                <video
                  ref={videoRef}
                  width="250"
                  height="250"
                  playsInline
                  // autoPlay
                  muted
                  onPlay={handleUserPlay}
                  onPause={handlePause}
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src="/video/lisaface.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play button overlay */}
                {!isPlaying && (
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.muted = false;
                        videoRef.current.play();
                      }
                    }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                      zIndex: 10
                    }}
                  >
                    ▶
                  </button>
                )}
              </div>


              {/* Feature Pills */}
              {headingText ? <>
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
              </>
                : null}

            </div>


          </motion.div>


        </div>

      </div >
    </div >
  );
}


{/* Badge */ }
{/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-teal/10 text-[#0D9488] px-4 py-2 rounded-full border border-teal/20 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm" style={{ fontWeight: 500 }}>AI-Powered Platform</span>
          </motion.div> */}







{/* <div className="text-md md:text-2xl font-medium text-teal-700 my-3 flex flex-wrap items-center justify-center gap-2">
            <span>CRM</span>
            <span>|</span>
            <span>Loan Origination</span>
            <span>|</span>
            <span>Marketing Automation</span>
            <span>|</span>
            <span>File Management</span>
          </div> */}






{/* Stats */ }
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