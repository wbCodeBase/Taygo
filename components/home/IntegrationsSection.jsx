"use client";
import Image from "next/image";

const logos = [
  { id: 1, src: "/integrationToolsLogo/facebook.png", alt: "Facebook" },
  { id: 2, src: "/integrationToolsLogo/linkedin.png", alt: "LinkedIn" },
  { id: 3, src: "/integrationToolsLogo/elliemae.png", alt: "Elliemae" },
  { id: 4, src: "/integrationToolsLogo/homescout.png", alt: "Home Scout" },
  { id: 5, src: "/integrationToolsLogo/Velocify.png", alt: "Velocify" },
  { id: 6, src: "/integrationToolsLogo/floify.png", alt: "Floify" },
  { id: 7, src: "/integrationToolsLogo/blend.png", alt: "Blend" },
  { id: 8, src: "/integrationToolsLogo/mls.png", alt: "Mls" },
  { id: 9, src: "/integrationToolsLogo/google.png", alt: "Google" },
  { id: 10, src: "/integrationToolsLogo/zillow.png", alt: "Zillow" },
  { id: 11, src: "/integrationToolsLogo/pinterest.png", alt: "Pinterest" },
  { id: 12, src: "/integrationToolsLogo/realtor.png", alt: "Realtor" },
  { id: 13, src: "/integrationToolsLogo/outlook.png", alt: "Outlook" },
  { id: 14, src: "/integrationToolsLogo/twitter.png", alt: "Twitter" },
  { id: 15, src: "/integrationToolsLogo/lenderprice.png", alt: "lender Price" },
  { id: 16, src: "/integrationToolsLogo/optimalBlue.png", alt: "Optimal Blue" },
  { id: 17, src: "/integrationToolsLogo/simpleNexus.png", alt: "Simple Nexus" },
];


export default function IntegrationsSection() {
  // Split into staggered columns dynamically
  const col1 = logos.slice(0, 3);
  const col2 = logos.slice(3, 5);
  const col3 = logos.slice(5, 8);
  const col4 = logos.slice(8, 10); // future-safe

  const columns = [
    { items: col1, marginTop: "mt-0" },
    { items: col2, marginTop: "mt-16" },
    { items: col3, marginTop: "mt-0" },
    { items: col4, marginTop: "mt-16" },
  ];

  return (
    <section className="p-20">

   
      <div className="bg-linear-to-r from-[#7B69E5] to-[#7864eb] rounded-xs p-8 md:p-12 lg:p-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your AI agent works wherever your data lives
            </h2>
            <p className="text-xl md:lg text-white/90 mb-8 leading-relaxed">
              Integrated with top mortgage platforms for smooth, automated workflows.
            </p>
            <div>
              {/* <button className="px-6 py-3 cursor-pointer text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all duration-300">
                Explore all integrations
              </button> */}
            </div>
          </div>


          {/* Right Content */}
          <div className="flex justify-center gap-10">

            {columns.map((col, idx) => (
              <div key={idx} className={`flex flex-col gap-10 ${col.marginTop}`}>
                {col.items.map((logo) => (
                  <div
                    key={logo.id}
                    className="w-20 h-16 bg-white rounded-xs flex items-center justify-center shadow-lg"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={54}
                      height={54}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}

          </div>


        </div>
      </div>
    </section>
  );
}












