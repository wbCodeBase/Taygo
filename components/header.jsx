"use client"

import Link from "next/link"
import { useState } from "react"
import taygoLogo from "@/public/logo/taygoLogo.png"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { href: "#products", label: "Products" },
    { href: "#features", label: "Features" },
    { href: "#ai-hub", label: "Taygo AI Hub" },
    { href: "#integrations", label: "Integrations" },
    { href: "#solutions", label: "Solutions" },
    { href: "#resources", label: "Resources" },
    { href: "#pricing", label: "Pricing" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Always Visible */}

          <Link href="/" className="flex items-center gap-2">
            <Image src={taygoLogo} alt="TAYGO Logo" width={140} height={60} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors text-sm xl:text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button className="hidden lg:block bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50 font-semibold px-4 xl:px-6 py-2 rounded-lg transition-all text-sm xl:text-base">
            Get Started
          </button>

          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-900 my-1.5 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
        >
          <nav className="flex flex-col bg-gray-50 rounded-xl p-4 gap-1 shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-gray-700 hover:text-teal-600 hover:bg-white font-medium py-3 px-4 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-200">
              <button className="w-full bg-teal-600 text-white hover:bg-teal-700 font-semibold px-6 py-3 rounded-lg transition-all shadow-lg shadow-teal-600/20">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}





// import Link from "next/link"
// import Image from "next/image"
// import taygoLogo from "@/public/logo/taygoLogo.png"


// export function Header() {
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
//       <div className="container mx-auto md:px-18 p-10 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//            <Image src={taygoLogo} alt="TAYGO Logo" width={140} height={60} />
//           </Link>

//           {/* Navigation */}
//           <nav className="hidden lg:flex items-center gap-8">
//             <Link href="#products" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
//               Products
//             </Link>
//             <Link href="#features" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
//               Features
//             </Link>
//             <Link href="#ai-hub" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
//               Taygo AI Hub
//             </Link>
//             <Link href="#integrations" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
//               Integrations
//             </Link>
//             <Link href="#solutions" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
//               Solutions
//             </Link>
//             <Link href="#resources" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
//               Resources
//             </Link>
//             <Link href="#pricing" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
//               Pricing
//             </Link>
//           </nav>

//           {/* CTA Button */}
//           <button className="bg-white cursor-pointer text-teal-600 border-2 border-teal-600 hover:bg-teal-50 font-semibold px-6 py-2 rounded-lg transition-all">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </header>
//   )
// }
