'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Play, Check, X, Brain, MessageSquare, Target, Menu, User, ChevronRight, Zap, Shield, Activity } from 'lucide-react'

const SurFoxHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-['Inter'] tracking-tight">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-slate-900">SurFox</div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-900 font-medium">Home</Link>
              <Link href="/about-the-founder" className="text-slate-600 hover:text-slate-900 transition-colors">About the Founder</Link>
              <a href="#try-free" className="bg-violet-600 text-white px-5 py-2.5 rounded-xl hover:bg-violet-700 transition-all shadow-md hover:shadow-lg">
                Try for Free
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-100">
              <div className="space-y-3">
                <Link href="/" className="block text-slate-900 font-medium">Home</Link>
                <Link href="/about-the-founder" className="block text-slate-600 hover:text-slate-900">About the Founder</Link>
                <a href="#try-free" className="block bg-violet-600 text-white px-4 py-2 rounded-xl text-center">
                  Try for Free
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-slate-50">
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            I Spent 20 Years in Sales.<br />
            Here's Why I Built SurFox.
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Every business has cold leads sitting untouched. SurFox is the first AI platform 
            built to revive them — intelligently, and automatically.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group bg-violet-600 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-0.5 inline-flex items-center justify-center text-lg font-semibold">
              <Play className="w-5 h-5 mr-3" />
              Watch My Story
            </button>
            <a href="#try-free" className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all text-lg shadow-sm hover:shadow-md">
              Try SurFox Free
            </a>
          </div>

          {/* Avatar Video Container */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="w-32 h-32 bg-gradient-to-br from-violet-600 to-violet-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                <User className="w-16 h-16 text-white" />
              </div>
              <p className="text-slate-600 text-sm" aria-label="Tom, founder of SurFox, explains the story">
                Tom, founder of SurFox — AI video avatar
              </p>
              <div className="mt-4 text-xs text-slate-500">
                <Link href="/about-the-founder" className="text-violet-600 hover:text-violet-700">
                  Full transcript available →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SurFox Isn't Like the Others */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Why SurFox Isn't Like the Others
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
            <div className="bg-white rounded-2xl shadow p-6 md:p-8">
              <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
                <X className="w-7 h-7 mr-3" />
                Most platforms:
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Mass texting</h4>
                    <p className="text-slate-600">Blast the same message to everyone and hope something sticks</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Static templates</h4>
                    <p className="text-slate-600">Pre-written scripts that never change or adapt</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">No signal detection</h4>
                    <p className="text-slate-600">You manually sort through every response</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Noisy CRM clutter</h4>
                    <p className="text-slate-600">Every interaction creates noise, not insight</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow p-6 md:p-8">
              <h3 className="text-2xl font-bold text-violet-600 mb-6 flex items-center">
                <Shield className="w-7 h-7 mr-3" />
                SurFox:
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Check className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">AI-driven engagement</h4>
                    <p className="text-slate-600">Smart conversations that adapt to each prospect</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Check className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Learns and adapts to replies</h4>
                    <p className="text-slate-600">Every response teaches the AI how to improve</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Check className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Tracks 50+ lead behavior signals</h4>
                    <p className="text-slate-600">Knows when prospects are actually interested</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Check className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Only alerts you when it matters</h4>
                    <p className="text-slate-600">Focus on real opportunities, not busy work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What SurFox Is / Isn't */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Let's Be Clear About What This Is
            </h2>
            <p className="text-slate-500 text-lg mb-4 max-w-2xl mx-auto">
              We built SurFox for a very specific reason — and it's not what you think.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
            <div className="bg-white rounded-2xl shadow p-6 md:p-8 border border-slate-100">
              <h3 className="text-2xl font-bold text-red-600 mb-8">This is not:</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">A mass-blast SMS tool</h4>
                    <p className="text-slate-600">We don't do spray-and-pray messaging</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">A CRM replacement</h4>
                    <p className="text-slate-600">Your existing CRM handles records, we handle conversations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Marketing automation</h4>
                    <p className="text-slate-600">This is sales-focused, not marketing campaigns</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow p-6 md:p-8 border border-slate-100">
              <h3 className="text-2xl font-bold text-violet-600 mb-8">This is:</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Activity className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">A signal-based engagement engine</h4>
                    <p className="text-slate-600">AI that reads behavior and knows when to act</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Zap className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">A focused cold-lead reactivation layer</h4>
                    <p className="text-slate-600">Specifically built to wake up dormant prospects</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <Brain className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">A sales-first AI assistant</h4>
                    <p className="text-slate-600">Built by salespeople, for salespeople</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Actually Works */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              How It Actually Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              No magic tricks. Just smart AI that pays attention to the signals your prospects are already sending.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-5 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300">
              <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Upload Your Cold Leads</h3>
              <p className="text-slate-600">
                Import the prospects sitting in your CRM that haven't responded to previous outreach attempts.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-5 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300">
              <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">AI Reads the Signals</h3>
              <p className="text-slate-600">
                Our AI analyzes response patterns, timing, and language to understand genuine interest vs. politeness.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-5 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300">
              <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">You Get Hot Prospects</h3>
              <p className="text-slate-600">
                Only get notified when someone shows real buying signals. No more sorting through "maybe later" responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="try-free" className="py-20 bg-slate-900 text-white border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            You don't need more leads.<br />
            You need to unlock the ones you already have.
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Stop letting good prospects go cold. See if SurFox can wake them up.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 rounded-xl shadow-md font-semibold text-lg transition-all hover:-translate-y-0.5">
              Start Free Trial
            </a>
            <Link href="/about-the-founder" className="border border-slate-400 text-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all text-lg inline-flex items-center shadow-sm">
              About the Founder
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-slate-400">
            No credit card required • 14-day trial • Setup takes 5 minutes
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <div className="text-xl font-bold text-slate-900 mb-4">SurFox</div>
            <p className="text-slate-600 mb-6">
              Built by salespeople who got tired of chasing unqualified leads.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-slate-500">
              <Link href="/privacy" className="hover:text-slate-700">Privacy</Link>
              <Link href="/terms" className="hover:text-slate-700">Terms</Link>
              <Link href="/contact" className="hover:text-slate-700">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SurFoxHomepage