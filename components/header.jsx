import Link from "next/link"
import Image from "next/image"
import taygoLogo from "@/public/logo/taygoLogo.png"


export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto md:px-18 p-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
           <Image src={taygoLogo} alt="TAYGO Logo" width={140} height={60} />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#products" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Products
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Features
            </Link>
            <Link href="#ai-hub" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Taygo AI Hub
            </Link>
            <Link href="#integrations" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Integrations
            </Link>
            <Link href="#solutions" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Solutions
            </Link>
            <Link href="#resources" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Resources
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Pricing
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="bg-white cursor-pointer text-teal-600 border-2 border-teal-600 hover:bg-teal-50 font-semibold px-6 py-2 rounded-lg transition-all">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
