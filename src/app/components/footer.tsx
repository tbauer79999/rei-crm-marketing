'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Brand + Text */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-3">
                <Image
                  src="/logo.png"
                  alt="SurFox Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-lg font-semibold tracking-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    SurFox
                  </span>
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Want to follow along?
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto lg:mx-0">
                We're building this one layer at a time. Drop your email and we'll share updates as new capabilities go live.
              </p>
            </div>

            {/* Right: Email Form */}
            <div className="flex justify-center lg:justify-end">
              <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange focus:outline-none transition text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition whitespace-nowrap text-sm"
                >
                  Stay in the know
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Multi-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">

          {/* Company Section */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                About
              </Link>
              <Link
                href="/platform"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                Technology
              </Link>
              <Link
                href="/careers"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Competitive Intelligence Section */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">Competitive Intelligence</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/compare/surfox-vs-all-competitors"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                SurFox AI vs All Competitors
              </Link>
              <Link
                href="/compare/surfox-vs-textus"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                SurFox AI vs Textus
              </Link>
              <Link
                href="/compare/surfox-vs-launch-control"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                SurFox AI vs Launch Control
              </Link>
              <Link
                href="/compare/surfox-vs-lead-sherpa"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                SurFox AI vs Lead Sherpa
              </Link>
              <Link
                href="/compare/surfox-vs-skipio"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                SurFox AI vs Skipio
              </Link>
              <Link
                href="/compare/surfox-vs-smarter-contact"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                SurFox AI vs Smarter Contact
              </Link>
            </div>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-150"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-500 text-center">
            © 2025 SurFox Ai, Inc. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </footer>
  )
}
