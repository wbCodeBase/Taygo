export function TrustedBrands() {
  return (
    <section className="py-12 md:py-16   bg-[#C4E5E633] ">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute left-[15%] right-[15%] -top-6 -bottom-6 bg-purple-300/30 rounded-xs shadow-md" />
            <div className="absolute left-[10%] right-[10%] -top-4 -bottom-4 bg-purple-200/60 rounded-xs shadow-sm" />
            <div className="absolute left-[5%] right-[5%] -top-2 -bottom-2 bg-purple-300/50 rounded-xs shadow-md" />
            
            {/* Main card */}
            <div className="relative bg-indigo-500 rounded-xs shadow-xl px-3 py-4 md:px-16">
              <p className="text-white text-lg md:text-2xl font-medium text-center whitespace-nowrap">
                Trusted by{" "}
                <span className="font-bold text-white">40000+</span>{" "}
                Brokers in UWM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




// export function TrustedBrands() {
//   const brands = [
//     { name: "Walmart", logo: "/images/walmart-logo.png" },
//     { name: "HBO", logo: "/images/hbo-logo.png" },
//     { name: "Vanguard", logo: "/images/vanguard-logo.png" },
//     { name: "Vimeo", logo: "https://logo.clearbit.com/vimeo.com" },
//     { name: "Levi's", logo: "https://logo.clearbit.com/levi.com" },
//   ]

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-12">
//           <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
//             Trusted by 500,000 leading teams
//           </p>
//         </div>

//         <div className="flex flex-wrap max-w-7xl mx-auto items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
//           {brands.map((brand, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center h-12 w-24 md:w-28 transition-transform"
//             >
//               <img
//                 src={brand.logo || "/placeholder.svg"}
//                 alt={brand.name}
//                 className="max-h-full max-w-full object-contain filter contrast-0 hover:contrast-100 transition-all"
                
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
