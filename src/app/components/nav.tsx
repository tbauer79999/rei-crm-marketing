'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, ChevronDown } from 'lucide-react'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/30 shadow-lg shadow-purple-500/10' 
        : 'bg-slate-900/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image 
              src="/logo.png" 
              alt="SurFox Logo" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold tracking-tight">
              <span className="text-white">Sur</span>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Fox</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#psychology-ai" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Psychology AI
            </Link>
            <Link href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              How It Works
            </Link>
            <Link href="/toms-story" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Tom's Story
            </Link>
            <Link href="/#industries" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Industries
            </Link>

            <div className="relative group">
              <div className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors text-sm font-medium cursor-pointer">
                <span>vs Everyone</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-0 w-56 bg-slate-800/95 backdrop-blur-xl border border-purple-500/30 rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/compare/surfox-vs-textus" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-white transition-colors">
                  ↳ vs TextUs
                </Link>
                <Link href="/compare/surfox-vs-smarter-contact" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-white transition-colors">
                  ↳ vs Smarter Contact
                </Link>
                <Link href="/compare/surfox-vs-launch-control" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-white transition-colors">
                  ↳ vs Launch Control
                </Link>
                <Link href="/compare/surfox-vs-all-competitors" className="block px-4 py-2 text-sm text-white hover:bg-purple-500/20 transition-colors font-semibold border-t border-purple-500/30">
                  ↳ All Comparisons
                </Link>
              </div>
            </div>

            <Link href="/#pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Pricing
            </Link>

            <div className="w-px h-6 bg-purple-500/30"></div>
            <a href="https://app.getsurfox.com" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Sign In
            </a>
            <a href="#" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all border border-purple-500/30">
              Start Free Trial
            </a>
          </div>

          <button 
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-xl border-t border-purple-500/30">
          <div className="px-4 py-6 space-y-4">
            <Link href="/smarter-Texting" className="block text-gray-300 hover:text-white transition-colors text-sm font-medium">Psychology AI</Link>
            <Link href="/how-it-works" className="block text-gray-300 hover:text-white transition-colors text-sm font-medium">How It Works</Link>
            <Link href="/toms-story" className="block text-gray-300 hover:text-white transition-colors text-sm font-medium">Tom's Story</Link>
            <Link href="/#industries" className="block text-gray-300 hover:text-white transition-colors text-sm font-medium">Industries</Link>
            <Link href="/#pricing" className="block text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</Link>
            
            {/* Compare section for mobile */}
            <div className="border-t border-purple-500/30 pt-4">
              <div className="text-gray-300 text-sm font-medium mb-2">vs Everyone</div>
              <div className="ml-4 space-y-2">
                <Link href="/compare/surfox-vs-textus" className="block text-gray-400 hover:text-white transition-colors text-sm">vs TextUs</Link>
                <Link href="/compare/surfox-vs-smarter-contact" className="block text-gray-400 hover:text-white transition-colors text-sm">vs Smarter Contact</Link>
                <Link href="/compare/surfox-vs-launch-control" className="block text-gray-400 hover:text-white transition-colors text-sm">vs Launch Control</Link>
                <Link href="/compare/surfox-vs-all-competitors" className="block text-white hover:text-purple-300 transition-colors text-sm font-medium">All Comparisons</Link>
              </div>
            </div>
            
            <div className="pt-4 border-t border-purple-500/30">
              <a href="https://app.getsurfox.com" className="block text-gray-300 hover:text-white transition-colors text-sm font-medium mb-3">Sign In</a>
              <a href="#" className="block bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center border border-purple-500/30">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}