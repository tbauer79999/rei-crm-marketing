'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Determine product name based on route
  const getProductName = () => {
    if (pathname.startsWith('/engage')) return 'Engage'
    if (pathname.startsWith('/pulse')) return 'Pulse'
    if (pathname.startsWith('/insights')) return 'Insights'
    if (pathname.startsWith('/orchestrate')) return 'Orchestrate'
    return null
  }
  
  const productName = getProductName()

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-gray-50 via-purple-50 to-cyan-50 shadow-lg border-b border-purple-200' 
        : 'bg-gradient-to-r from-gray-50 via-purple-50 to-cyan-50 border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image 
              src="/logo.png" 
              alt="SurFox Logo" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold tracking-tight text-gray-900">
              SurFox
              {productName && (
                <span className="ml-2 text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700">
                  {productName}
                </span>
              )}
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* SOLUTIONS Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium cursor-pointer group">
                <span className="relative">
                  Solutions
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
                </span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/engage" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 hover:text-gray-900 transition-colors">
                  <div className="font-semibold">SurFox Engage</div>
                  <div className="text-xs text-gray-500 mt-1">AI for Sales Conversations</div>
                </Link>
              </div>
            </div>

            {/* TECHNOLOGY Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium cursor-pointer group">
                <span className="relative">
                  Technology
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
                </span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/platform" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 hover:text-gray-900 transition-colors border-b border-gray-100">
                  Platform Overview
                </Link>
                <Link href="/integrations" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 hover:text-gray-900 transition-colors border-b border-gray-100">
                  Integrations
                </Link>
                <Link href="/security" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 hover:text-gray-900 transition-colors">
                  Security & Compliance
                </Link>
              </div>
            </div>

            {/* COMPANY Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium cursor-pointer group">
                <span className="relative">
                  Company
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
                </span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/about" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 hover:text-gray-900 transition-colors border-b border-gray-100">
                  About SurFox
                </Link>
                <Link href="/leadership" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 hover:text-gray-900 transition-colors">
                  Leadership
                </Link>
              </div>
            </div>

            {/* LEARN Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium cursor-pointer group">
                <span className="relative">
                  Learn
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
                </span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/ai-principles" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 hover:text-gray-900 transition-colors">
                  AI Principles
                </Link>
              </div>
            </div>

            {/* CONTACT Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium cursor-pointer group">
                <span className="relative">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
                </span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/contact" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 hover:text-gray-900 transition-colors border-b border-gray-100">
                  Get in Touch
                </Link>
                <Link href="/request-access" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 hover:text-gray-900 transition-colors">
                  Request Early Access
                </Link>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
              <a href="https://surfox.ai" className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">
                Sign In
              </a>
              <a href="/request-access" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Request Access
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Solutions */}
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Solutions</div>
              <Link href="/engage" className="block py-2 text-gray-700 hover:text-gray-900 transition-colors">
                <div className="font-medium">SurFox Engage</div>
                <div className="text-xs text-gray-500">AI for Sales Conversations</div>
              </Link>
            </div>

            {/* Technology */}
            <div className="border-t border-gray-200 pt-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Technology</div>
              <Link href="/platform" className="block py-2 text-gray-700 hover:text-gray-900 transition-colors">Platform Overview</Link>
              <Link href="/integrations" className="block py-2 text-gray-700 hover:text-gray-900 transition-colors">Integrations</Link>
              <Link href="/security" className="block py-2 text-gray-700 hover:text-gray-900 transition-colors">Security & Compliance</Link>
            </div>

            {/* Company */}
            <div className="border-t border-gray-200 pt-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Company</div>
              <Link href="/about" className="block py-2 text-gray-700 hover:text-gray-900 transition-colors">About SurFox</Link>
              <Link href="/leadership" className="block py-2 text-gray-700 hover:text-gray-900 transition-colors">Leadership</Link>
            </div>

            {/* Learn */}
            <div className="border-t border-gray-200 pt-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Learn</div>
              <Link href="/ai-principles" className="block py-2 text-gray-700 hover:text-gray-900 transition-colors">AI Principles</Link>
            </div>

            {/* Contact */}
            <div className="border-t border-gray-200 pt-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Contact</div>
              <Link href="/contact" className="block py-2 text-gray-700 hover:text-gray-900 transition-colors">Get in Touch</Link>
              <Link href="/request-access" className="block py-2 text-gray-700 hover:text-gray-900 transition-colors">Request Early Access</Link>
            </div>
            
            {/* Actions */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a href="https://surfox.ai" className="block text-gray-700 hover:text-gray-900 transition-colors font-medium text-center py-2">
                Sign In
              </a>
              <a href="/request-access" className="block bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-3 rounded-lg font-medium text-center">
                Request Access
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </nav>
  )
}
