'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Brain, Menu, ChevronDown, Target } from 'lucide-react'

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
      isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold tracking-tight">
              <span className="text-gray-900">Sur</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fox</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#platform" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Platform
            </Link>
            <Link href="/#intelligence" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Messaging Intelligence
            </Link>
            <Link href="/#industries" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Industries
            </Link>
            <Link href="/enterprise" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Enterprise
            </Link>

            <div className="relative group">
              <div className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium cursor-pointer">
                <span>Compare</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/compare/surfox-vs-textus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                  ↳ vs TextUs
                </Link>
                <Link href="/compare/surfox-vs-smarter-contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                  ↳ vs Smarter Contact
                </Link>
                <Link href="/compare/surfox-vs-launch-control" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                  ↳ vs Launch Control
                </Link>
                <Link href="/compare/surfox-vs-all-competitors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-semibold">
                  ↳ All Comparisons
                </Link>
              </div>
            </div>

            <div className="w-px h-6 bg-gray-300"></div>
            <a href="https://app.getsurfox.com" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Sign In
            </a>
            <a href="#" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all">
              Start Free Trial
            </a>
          </div>

          <button 
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <Link href="/#platform" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Platform</Link>
            <Link href="/#intelligence" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Messaging Intelligence</Link>
            <Link href="/#industries" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Industries</Link>
            <Link href="/enterprise" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">Enterprise</Link>
            
            {/* Compare section for mobile */}
            <div className="border-t border-gray-200 pt-4">
              <div className="text-gray-600 text-sm font-medium mb-2">Compare</div>
              <div className="ml-4 space-y-2">
                <Link href="/compare/surfox-vs-textus" className="block text-gray-500 hover:text-gray-900 transition-colors text-sm">vs TextUs</Link>
                <Link href="/compare/surfox-vs-smarter-contact" className="block text-gray-500 hover:text-gray-900 transition-colors text-sm">vs Smarter Contact</Link>
                <Link href="/compare/surfox-vs-launch-control" className="block text-gray-500 hover:text-gray-900 transition-colors text-sm">vs Launch Control</Link>
                <Link href="/compare/surfox-vs-all-competitors" className="block text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">All Comparisons</Link>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <a href="https://app.getsurfox.com" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium mb-3">Sign In</a>
              <a href="#" className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
