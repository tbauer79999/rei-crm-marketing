'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Play, Check, X, Brain, MessageSquare, Target, Menu, User, ChevronRight } from 'lucide-react'

const SurFoxHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-gray-900">SurFox</div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 font-medium">Home</Link>
              <Link href="/about-the-founder" className="text-gray-600 hover:text-gray-900 transition-colors">About the Founder</Link>
              <a href="#try-free" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Try for Free
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="space-y-3">
                <Link href="/" className="block text-gray-900 font-medium">Home</Link>
                <Link href="/about-the-founder" className="block text-gray-600 hover:text-gray-900">About the Founder</Link>
                <a href="#try-free" className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center">
                  Try for Free
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            I Spent 20 Years in Sales.<br />
            Here's Why I Built SurFox.
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Every business has cold leads sitting untouched. SurFox is the first AI platform 
            built to revive them — intelligently, and automatically.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all inline-flex items-center justify-center text-lg">
              <Play className="w-5 h-5 mr-3" />
              Watch My Story
            </button>
            <a href="#try-free" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all text-lg">
              Try SurFox Free
            </a>
          </div>

          {/* Avatar Video Placeholder */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
              <p className="text-gray-600 text-sm">
                Tom, founder of SurFox — AI video avatar
              </p>
              <div className="mt-4 text-xs text-gray-500">
                Video transcript available in About the Founder section
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SurFox Isn't Like the Others */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why SurFox Isn't Like the Others
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6">Most platforms:</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <X className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Mass texting</h4>
                    <p className="text-gray-600">Blast the same message to everyone and hope something sticks</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <X className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Static templates</h4>
                    <p className="text-gray-600">Pre-written scripts that never change or adapt</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <X className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">No signal detection</h4>
                    <p className="text-gray-600">You manually sort through every response</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <X className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Noisy CRM clutter</h4>
                    <p className="text-gray-600">Every interaction creates noise, not insight</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">SurFox:</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">AI-driven engagement</h4>
                    <p className="text-gray-600">Smart conversations that adapt to each prospect</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Learns and adapts to replies</h4>
                    <p className="text-gray-600">Every response teaches the AI how to improve</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Tracks 50+ lead behavior signals</h4>
                    <p className="text-gray-600">Knows when prospects are actually interested</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Only alerts you when it matters</h4>
                    <p className="text-gray-600">Focus on real opportunities, not busy work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What SurFox Is / Isn't */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Let's Be Clear About What This Is
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-8">This is not:</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">A mass-blast SMS tool</h4>
                    <p className="text-gray-600">We don't do spray-and-pray messaging</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">A CRM replacement</h4>
                    <p className="text-gray-600">Your existing CRM handles records, we handle conversations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Marketing automation</h4>
                    <p className="text-gray-600">This is sales-focused, not marketing campaigns</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-8">This is:</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">A signal-based engagement engine</h4>
                    <p className="text-gray-600">AI that reads behavior and knows when to act</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">A focused cold-lead reactivation layer</h4>
                    <p className="text-gray-600">Specifically built to wake up dormant prospects</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">A sales-first AI assistant</h4>
                    <p className="text-gray-600">Built by salespeople, for salespeople</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Actually Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Actually Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No magic tricks. Just smart AI that pays attention to the signals your prospects are already sending.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Your Cold Leads</h3>
              <p className="text-gray-600">
                Import the prospects sitting in your CRM that haven't responded to previous outreach attempts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Reads the Signals</h3>
              <p className="text-gray-600">
                Our AI analyzes response patterns, timing, and language to understand genuine interest vs. politeness.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">You Get Hot Prospects</h3>
              <p className="text-gray-600">
                Only get notified when someone shows real buying signals. No more sorting through "maybe later" responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="try-free" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            You don't need more leads.<br />
            You need to unlock the ones you already have.
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Stop letting good prospects go cold. See if SurFox can wake them up.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all text-lg">
              Start Free Trial
            </a>
            <Link href="/about-the-founder" className="border border-gray-400 text-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all text-lg inline-flex items-center">
              About the Founder
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            No credit card required • 14-day trial • Setup takes 5 minutes
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-xl font-bold text-gray-900 mb-4">SurFox</div>
            <p className="text-gray-600 mb-6">
              Built by salespeople who got tired of chasing unqualified leads.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-gray-700">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-700">Terms</Link>
              <Link href="/contact" className="hover:text-gray-700">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SurFoxHomepage