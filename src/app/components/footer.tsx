'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const API_URL = 'https://api.surfox.ai/api/public/contact-sales';

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return;
    setSubmitting(true)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter', email }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed');
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/newSurFoxLogo1.png"
                alt="SurFox AI"
                width={160}
                height={44}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Join our newsletter to stay up to date on features and releases.
            </p>

            {isSubmitted ? (
              <div className="space-y-3">
                <div className="w-full px-4 py-3 bg-green-500/10 border border-green-500/50 rounded-lg text-sm text-green-400 flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Thanks for subscribing!</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-4 py-2.5 bg-white text-gray-900 rounded-lg text-sm font-semibold hover:bg-gray-100 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Subscribing...' : 'Submit'}
                </button>
              </form>
            )}

            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
            </p>
          </div>

          {/* Competitive Intelligence */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Competitive Intelligence</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/compare/surfox-vs-all-competitors" className="text-sm hover:text-white transition-colors">
                  SurFox AI vs All Competitors
                </Link>
              </li>
              <li>
                <Link href="/compare/surfox-vs-textus" className="text-sm hover:text-white transition-colors">
                  SurFox AI vs Textus
                </Link>
              </li>
              <li>
                <Link href="/compare/surfox-vs-launch-control" className="text-sm hover:text-white transition-colors">
                  SurFox AI vs Launch Control
                </Link>
              </li>
              <li>
                <Link href="/compare/surfox-vs-lead-sherpa" className="text-sm hover:text-white transition-colors">
                  SurFox AI vs Lead Sherpa
                </Link>
              </li>
              <li>
                <Link href="/compare/surfox-vs-skipio" className="text-sm hover:text-white transition-colors">
                  SurFox AI vs Skipio
                </Link>
              </li>
              <li>
                <Link href="/compare/surfox-vs-smarter-contact" className="text-sm hover:text-white transition-colors">
                  SurFox AI vs Smarter Contact
                </Link>
              </li>
              <li>
                <Link href="/compare/surfox-vs-meera-ai" className="text-sm hover:text-white transition-colors">
                  SurFox AI vs Meera AI
                </Link>
              </li>
              <li>
                <Link href="/compare/surfox-vs-gohighlevel" className="text-sm hover:text-white transition-colors">
                  SurFox AI vs GoHighLevel
                </Link>
              </li>
              <li>
                <Link href="/compare/surfox-vs-spara" className="text-sm hover:text-white transition-colors">
                  SurFox AI vs Spara
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/platform" className="text-sm hover:text-white transition-colors">
                  Platform
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-sm hover:text-white transition-colors">
                  Request a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Social */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-sm hover:text-white transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>

            <h3 className="text-sm font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/getSurFox" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Follow SurFox AI on X (Twitter)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/surfoxai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Follow SurFox AI on LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} SurFox.ai. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
              Careers
            </Link>
          </div>
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
