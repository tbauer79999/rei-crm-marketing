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
    <>
      {/* Navigation */}
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
                <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 hidden group-hover:flex flex-col">
                  <Link href="/compare/surfox-vs-textus" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    ↳ vs TextUs
                  </Link>
                  <Link href="/compare/surfox-vs-smarter-contact" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    ↳ vs Smarter Contact
                  </Link>
                  <Link href="/compare/surfox-vs-launch-control" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                    ↳ vs Launch Control
                  </Link>
                  <Link href="/compare/surfox-vs-all-competitors" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 font-semibold">
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

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold tracking-tight">
                  <span className="text-gray-900">Sur</span>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fox</span>
                </span>
              </div>
              <p className="text-gray-600 mb-4">The world's first Messaging Intelligence platform.</p>
              <p className="text-sm text-gray-500 mb-6">Transforming conversations across every industry with behavioral AI.</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-gray-600">50+ Signal Analysis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-gray-600">94% Accuracy</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Messaging Intelligence</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Signal Analysis</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Conversation AI</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Chrome Extension</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Industries</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Real Estate</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">SaaS & Tech</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">E-commerce</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Healthcare</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">All Industries</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Enterprise</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2024 SurFox AI, Inc. Leading the Messaging Intelligence revolution.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-emerald-600 text-sm flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                Messaging Intelligence™ Active
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}