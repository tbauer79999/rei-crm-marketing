'use client'

/* =============================================================================
   NAVBAR - Obsidian Intelligence Design System
   Glassmorphism navigation with dark theme and gradient accents
   ============================================================================= */

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, ChevronDown, Zap } from 'lucide-react'
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
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 backdrop-blur-xl border-b ${
        isScrolled
          ? 'border-white/[0.08] shadow-sm shadow-blue-500/10'
          : 'border-white/[0.06]'
      }`}
      style={{ backgroundColor: 'rgba(5, 8, 16, 0.95)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <Image
              src="/newSurFoxLogo1.png"
              alt="SurFox AI"
              width={120}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
            {productName && (
              <span className="ml-3 text-xs font-medium px-2 py-1 rounded-full glass-card border border-blue-500/20 text-blue-300">
                {productName}
              </span>
            )}
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* SOLUTIONS Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-1 text-white/70 hover:text-white transition-colors text-sm font-medium cursor-pointer group">
                <span className="relative">
                  Solutions
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-bg group-hover:w-full transition-all duration-300"></span>
                </span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-2 w-64 rounded-xl border border-white/[0.10] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl shadow-black/40" style={{ backgroundColor: '#0a0f1e' }}>
                <Link href="/" className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-card-bg/[0.05] transition-colors border-b border-white/[0.06]">
                  <div className="font-semibold">SurFox Engage</div>
                  <div className="text-xs text-white/40 mt-1">AI for Sales Conversations</div>
                </Link>
                <Link href="/wholesalers" className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-card-bg/[0.05] transition-colors border-b border-white/[0.06]">
                  <div className="font-semibold">Real Estate Wholesalers</div>
                  <div className="text-xs text-white/40 mt-1">Work motivated seller replies</div>
                </Link>
                <Link href="/staffing" className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-card-bg/[0.05] transition-colors border-b border-white/[0.06]">
                  <div className="font-semibold">Staffing Agencies</div>
                  <div className="text-xs text-white/40 mt-1">Qualify applicants via SMS</div>
                </Link>
                <Link href="/events" className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-card-bg/[0.05] transition-colors">
                  <div className="font-semibold">Webinars & Events</div>
                  <div className="text-xs text-white/40 mt-1">Follow up with every registrant</div>
                </Link>
              </div>
            </div>

            {/* TECHNOLOGY Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-1 text-white/70 hover:text-white transition-colors text-sm font-medium cursor-pointer group">
                <span className="relative">
                  Technology
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-bg group-hover:w-full transition-all duration-300"></span>
                </span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-2 w-64 rounded-xl border border-white/[0.10] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl shadow-black/40" style={{ backgroundColor: '#0a0f1e' }}>
                <Link href="/platform" className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-card-bg/[0.05] transition-colors border-b border-white/[0.06]">
                  Platform Overview
                </Link>
                <Link href="/integrations" className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-card-bg/[0.05] transition-colors border-b border-white/[0.06]">
                  Integrations
                </Link>
                <Link href="/security" className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-card-bg/[0.05] transition-colors">
                  Security & Compliance
                </Link>
              </div>
            </div>

            {/* COMPANY Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-1 text-white/70 hover:text-white transition-colors text-sm font-medium cursor-pointer group">
                <span className="relative">
                  Company
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-bg group-hover:w-full transition-all duration-300"></span>
                </span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-2 w-56 rounded-xl border border-white/[0.10] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl shadow-black/40" style={{ backgroundColor: '#0a0f1e' }}>
                <Link href="/about" className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-card-bg/[0.05] transition-colors border-b border-white/[0.06]">
                  About SurFox AI
                </Link>
                <Link href="/leadership" className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-card-bg/[0.05] transition-colors">
                  Leadership
                </Link>
              </div>
            </div>

            {/* LEARN Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-1 text-white/70 hover:text-white transition-colors text-sm font-medium cursor-pointer group">
                <span className="relative">
                  Learn
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-bg group-hover:w-full transition-all duration-300"></span>
                </span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-2 w-64 rounded-xl border border-white/[0.10] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl shadow-black/40" style={{ backgroundColor: '#0a0f1e' }}>
                <Link href="/blog" className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-card-bg/[0.05] transition-colors border-b border-white/[0.06]">
                  Insights
                </Link>
                <Link href="/roi" className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-card-bg/[0.05] transition-colors border-b border-white/[0.06]">
                  ROI Calculator
                </Link>
                <Link href="/ai-principles" className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-card-bg/[0.05] transition-colors">
                  AI Principles
                </Link>
              </div>
            </div>

            {/* PRICING Link */}
            <Link href="/pricing" className="text-white/70 hover:text-white transition-colors text-sm font-medium group">
              <span className="relative">
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-bg group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>

            {/* CONTACT Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-1 text-white/70 hover:text-white transition-colors text-sm font-medium cursor-pointer group">
                <span className="relative">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-bg group-hover:w-full transition-all duration-300"></span>
                </span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="absolute left-0 mt-2 w-56 rounded-xl border border-white/[0.10] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl shadow-black/40" style={{ backgroundColor: '#0a0f1e' }}>
                <Link href="/contact" className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-card-bg/[0.05] transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-white/[0.06]">
              <a href="https://surfox.ai" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                Sign In
              </a>
              <Link href="/demo" className="px-4 py-2 rounded-lg border border-blue-400/40 text-white text-sm font-semibold hover:border-blue-400/80 hover:bg-blue-500/10 transition-colors">
                Request Demo
              </Link>
              <a href="/pricing" className="px-4 py-2 rounded-lg gradient-bg text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-white/[0.06] animate-fade-in">
          <div className="px-4 py-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Primary links */}
            <div className="space-y-1">
              <Link href="/platform" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-white/80 hover:text-white transition-colors font-medium">Platform</Link>
              <Link href="/wholesalers" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-white/80 hover:text-white transition-colors font-medium">Wholesalers</Link>
              <Link href="/staffing" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-white/80 hover:text-white transition-colors font-medium">Staffing</Link>
              <Link href="/integrations" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-white/80 hover:text-white transition-colors font-medium">Integrations</Link>
              <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-white/80 hover:text-white transition-colors font-medium">Pricing</Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-white/80 hover:text-white transition-colors font-medium">Blog</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-white/80 hover:text-white transition-colors font-medium">About</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-white/80 hover:text-white transition-colors font-medium">Contact</Link>
            </div>

            {/* Actions */}
            <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-3">
              <a href="https://surfox.ai" className="block text-white/70 hover:text-white transition-colors font-medium text-center py-2">
                Sign In
              </a>
              <Link href="/demo" onClick={() => setMobileMenuOpen(false)} className="block border border-blue-400/40 text-white font-semibold text-center py-2 rounded-lg hover:border-blue-400/80 hover:bg-blue-500/10 transition-colors">
                Request Demo
              </Link>
              <a href="/pricing" className="block gradient-bg text-white font-semibold text-center py-2 rounded-lg hover:opacity-90 transition-opacity">
                Get Started
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
