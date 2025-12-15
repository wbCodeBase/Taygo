import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import taygoLogo from "@/public/logo/taygoLogo.png"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={taygoLogo} alt="TAYGO Logo" width={140} height={60} />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="product
            " className="text-gray-600 hover:text-gray-900 transition-colors">Product</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">AI Agents</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Integrations</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Solutions</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Resources</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          </nav>

          {/* CTA Button */}
          <button className="bg-btn-green font-semibold hover:bg-btn-green-hover cursor-pointer text-white px-6 py-2.5 rounded-xs transition-all hover:shadow-lg hover:shadow-teal-500/30 flex items-center gap-2">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
