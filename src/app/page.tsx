'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Play, Check, X, Brain, MessageSquare, Target, Menu, User, ChevronRight, Zap, Shield, Activity, Eye, Cpu } from 'lucide-react'

const SurFoxHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-['Inter'] tracking-tight leading-relaxed antialiased">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-extrabold text-slate-900">SurFox</div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-900 font-semibold">Home</Link>
              <Link href="/about-the-founder" className="text-slate-600 hover:text-slate-900 transition-colors">About the Founder</Link>
              <a href="#try-free" className="bg-violet-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:shadow-xl hover:-translate-y-0.5 hover:bg-violet-700 transition focus-visible:ring-2 focus-visible:ring-violet-500">
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
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="space-y-3">
                <Link href="/" className="block text-slate-900 font-semibold">Home</Link>
                <Link href="/about-the-founder" className="block text-slate-600 hover:text-slate-900">About the Founder</Link>
                <a href="#try-free" className="block bg-violet-600 text-white px-4 py-2 rounded-xl text-center font-semibold">
                  Try for Free
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
              I Spent 20 Years in Sales.<br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Here's Why I Built SurFox.
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Every business has cold leads sitting untouched. SurFox is the first AI platform 
              built to revive them — intelligently, and automatically.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="group bg-violet-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-violet-700 transition focus-visible:ring-2 focus-visible:ring-violet-500 inline-flex items-center justify-center text-lg">
                <Play className="w-6 h-6 mr-3 text-white" />
                Watch My Story
              </button>
              <a href="#try-free" className="border-2 border-violet-300 text-violet-700 px-8 py-4 rounded-xl font-semibold hover:border-violet-400 hover:bg-violet-50 transition-all text-lg shadow-sm hover:shadow-md">
                Try SurFox Free
              </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl hover:shadow-2xl transition duration-300">
              <p className="text-sm text-slate-500 text-center mb-6">
                Tom, founder of SurFox — AI-powered voice avatar
              </p>
              <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-12 mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-violet-600 to-violet-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-2xl">
                  <User className="w-16 h-16 text-white" />
                </div>
                <div className="absolute top-4 right-4 bg-red-500 w-3 h-3 rounded-full animate-pulse"></div>
              </div>
              <div className="text-xs text-slate-500 text-center">
                <Link href="/about-the-founder" className="text-violet-600 hover:text-violet-700 font-medium">
                  Full transcript available →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-16" />

      {/* Why SurFox Isn't Like the Others */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Why SurFox Isn't Like the Others
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Most platforms treat leads like numbers. We treat them like people with psychology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-200 p-8 border border-red-100">
              <h3 className="text-2xl font-extrabold text-red-600 mb-8 flex items-center">
                <X className="w-8 h-8 mr-3 text-red-600" />
                Most platforms:
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <X className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Mass texting</h4>
                    <p className="text-slate-600">Blast the same message to everyone and hope something sticks</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <X className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Static templates</h4>
                    <p className="text-slate-600">Pre-written scripts that never change or adapt</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <Eye className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">No signal detection</h4>
                    <p className="text-slate-600">You manually sort through every response</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <X className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Noisy CRM clutter</h4>
                    <p className="text-slate-600">Every interaction creates noise, not insight</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-200 p-8 border border-violet-100">
              <h3 className="text-2xl font-extrabold text-violet-600 mb-8 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-violet-600" />
                SurFox Signal Engine™:
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <Brain className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">AI-driven engagement</h4>
                    <p className="text-slate-600">Smart conversations that adapt to each prospect's psychology</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <Cpu className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Learns and adapts to replies</h4>
                    <p className="text-slate-600">Every response teaches the AI how to improve</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <Activity className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Tracks 50+ lead behavior signals</h4>
                    <p className="text-slate-600">Knows when prospects are actually interested</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <Target className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-lg">Only alerts you when it matters</h4>
                    <p className="text-slate-600">Focus on real opportunities, not busy work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-16" />

      {/* What SurFox Is / Isn't */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Let's Be Clear About What This Is
            </h2>
            <p className="text-xl text-slate-500 mb-6 max-w-3xl mx-auto font-medium">
              We built SurFox for a very specific reason — and it's not what you think.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-200 p-8 border border-slate-200">
              <h3 className="text-2xl font-extrabold text-red-600 mb-10">This is not:</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">A mass-blast SMS tool</h4>
                    <p className="text-slate-600">We don't do spray-and-pray messaging</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">A CRM replacement</h4>
                    <p className="text-slate-600">Your existing CRM handles records, we handle conversations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Marketing automation</h4>
                    <p className="text-slate-600">This is sales-focused, not marketing campaigns</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-200 p-8 border border-slate-200">
              <h3 className="text-2xl font-extrabold text-violet-600 mb-10">This is:</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <Activity className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">A signal-based engagement engine</h4>
                    <p className="text-slate-600">AI that reads behavior and knows when to act</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <Zap className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">A focused cold-lead reactivation layer</h4>
                    <p className="text-slate-600">Specifically built to wake up dormant prospects</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center mr-4 mt-1 shadow-sm">
                    <Brain className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">A sales-first AI assistant</h4>
                    <p className="text-slate-600">Built by salespeople, for salespeople</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-16" />

      {/* How It Actually Works */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              How It Actually Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              No magic tricks. Just smart AI that pays attention to the signals your prospects are already sending.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-slate-200">
              <div className="text-4xl font-extrabold text-violet-600 mb-4">1</div>
              <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <MessageSquare className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Upload Your Cold Leads</h3>
              <p className="text-slate-600">
                Import the prospects sitting in your CRM that haven't responded to previous outreach attempts.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-slate-200">
              <div className="text-4xl font-extrabold text-violet-600 mb-4">2</div>
              <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Brain className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">AI Reads the Signals</h3>
              <p className="text-slate-600">
                Our AI analyzes response patterns, timing, and language to understand genuine interest vs. politeness.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-slate-200">
              <div className="text-4xl font-extrabold text-violet-600 mb-4">3</div>
              <div className="w-16 h-16 bg-violet-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Target className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">You Get Hot Prospects</h3>
              <p className="text-slate-600">
                Only get notified when someone shows real buying signals. No more sorting through "maybe later" responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-16" />

      {/* Final CTA */}
      <section id="try-free" className="py-20 md:py-32 bg-slate-900 text-white border-t-4 border-violet-600">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-8 tracking-tight">
              You don't need more leads.<br />
              <span className="text-violet-400">Let SurFox do the chasing. You close.</span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto font-medium">
              Stop letting good prospects go cold. Watch SurFox wake them up.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/signup" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold text-lg transition focus-visible:ring-2 focus-visible:ring-violet-400">
                Start Free Trial
              </a>
              <Link href="/about-the-founder" className="border-2 border-slate-400 text-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 hover:border-slate-300 transition-all text-lg inline-flex items-center shadow-sm hover:shadow-md">
                About the Founder
                <ChevronRight className="w-6 h-6 ml-2 text-slate-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <div className="text-xl font-extrabold text-slate-900 mb-4">SurFox</div>
            <p className="text-slate-600 mb-6 font-medium">
              Built by salespeople who got tired of chasing unqualified leads.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-slate-500">
              <Link href="/privacy" className="hover:text-slate-700 font-medium">Privacy</Link>
              <Link href="/terms" className="hover:text-slate-700 font-medium">Terms</Link>
              <Link href="/contact" className="hover:text-slate-700 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SurFoxHomepage