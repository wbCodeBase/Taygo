import React from 'react';
// import { Zap, Figma, Slack, Chrome, Droplet, Circle, Layers, Grid, Box } from 'lucide-react';
import Image from 'next/image';



import zapier from "@/public/zapierLogo.png"
import encompass from "@/public/encompass.png"
import bharatForge from "@/public/clientLogo/bharatForge.png";
import sbi from "@/public/clientLogo/SBI-Mutual-Fund.png";
import Apraava from "@/public/clientLogo/Apraava.png";
import adaniRenewable from "@/public/clientLogo/adaniRenewable.png";
import godrej from "@/public/clientLogo/godrej.png";
import reliance from "@/public/clientLogo/reliance.png";



const IntegrationOrbit = () => {

  // const platforms = [
  //   { name: "Encompass", img: encompass },
  //   { name: "Zapier", img: zapier },
  //   { name: "Bharat Forge", img: bharatForge },
  //   { name: "Apraava", img: Apraava },
  //   { name: "Sbi", img: sbi },
  //   { name: "adaniRenewable", img: adaniRenewable },
  //   { name: "reliance", img: reliance },
  //   { name: "godrej", img: godrej },
  // ];


  const platforms = [
    { name: "Encompass", img: encompass, glowStart: "rgba(181,146,255,0.46)", glowMid: "rgba(181,206,255,0.28)" },
    { name: "Zapier", img: zapier, glowStart: "rgba(255,183,153,0.38)", glowMid: "rgba(255,225,200,0.22)" },
    { name: "Bharat Forge", img: bharatForge, glowStart: "rgba(255,200,210,0.32)", glowMid: "rgba(220,200,255,0.20)" },
    { name: "Apraava", img: Apraava, glowStart: "rgba(160,230,210,0.36)", glowMid: "rgba(200,255,235,0.18)" },
    { name: "Sbi", img: sbi, glowStart: "rgba(180,220,255,0.40)", glowMid: "rgba(220,235,255,0.18)" },
    { name: "adaniRenewable", img: adaniRenewable, glowStart: "rgba(200,255,220,0.34)", glowMid: "rgba(220,255,240,0.16)" },
    { name: "reliance", img: reliance, glowStart: "rgba(200,220,255,0.36)", glowMid: "rgba(235,230,255,0.20)" },
    { name: "godrej", img: godrej, glowStart: "rgba(240,220,255,0.34)", glowMid: "rgba(255,230,240,0.16)" },
  ];





  return (
    <div className="min-h-screen bg-transparent relative flex items-center justify-center p-8">

      <div className="max-w-6xl w-full relative z-10">
        {/* Header */}
        <div className="text-center my-8 mb-12">
          <h2 className="text-3xl md:text-4xl md:font-semibold font-medium text-gray-900 mb-6 text-balance">
            Your AI agent works wherever your data lives
          </h2>
          <p className="text-base md:text-lg font-medium mb-4 text-balance max-w-5xl mx-auto text-gray-700">
            Integrated with top mortgage platforms for smooth, automated workflows.
          </p>
        </div>

        {/* Orbit Animation */}
        <div className="relative w-full max-w-xl mx-auto aspect-square my-8">
          {/* First small light gray circle closest to center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[30%] h-[30%] rounded-full border border-gray-300 bggray-200 z-10 shadow-[0_0_40px_10px_rgba(0,0,0,0.2)]"></div>
          </div>

          {/* Second light gray circle */}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[40%] h-[40%] rounded-full border border-gray-300"></div>
          </div> */}

          {/* Third light gray circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[55%] h-[55%] rounded-full border border-gray-300 bg-gray-100 shadow-[0_0_40px_10px_rgba(0,0,0,0.2)]"></div>
          </div>

          {/* Fourth light gray circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[85%] h-[85%] rounded-full border border-gray-300 shadow-[0_0_40px_10px_rgba(0,0,0,0.2)]"></div>
          </div>

          {/* Center logo with gradient background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* <div className="absolute inset-0 w-48 h-48 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 opacity-80 blur-2xl"></div> */}

              <div className="relative bgwhite rounded-full 3xl border5 bordergray-100 p-2 z-10 shadow-[0_0_40px_10px_rgba(0,0,0,0.2)]">
                <Image src="/logo/taygoIcon.png" alt="Taygo Logo" width={80} height={80} className="object-contain" />
              </div>
            </div>
          </div>









          {/* Rotating integration icons */}
          <div className="absolute inset-0 animate-spin-slow">
            {platforms.map((platform, index) => {
              const angle = (index / platforms.length) * 360;
              const radius = 42; // orbit size
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={index}
                  className="absolute animate-reverse-spin-slow"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >



                  <div className="bg-white rounded-2xl shadow-lg w-22 h-20 p-2 hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={platform.img}
                      alt={platform.name}
                      height={30} width={100}
                      className="w-20 h-18 object-contain"
                    />
                  </div>


                </div>
              );
            })}
          </div>





          {/* Circular orbit behind the rotating icons */}
          {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[100%] h-[100%] rounded-full border border-gray-300"></div>
          </div> */}

        </div>
      </div>


      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        
        @keyframes reverse-spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        .animate-reverse-spin-slow {
          animation: reverse-spin-slow 30s linear infinite;
        }
      `}</style>

    </div>
  );
};

export default IntegrationOrbit;







