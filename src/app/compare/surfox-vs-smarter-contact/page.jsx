'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, MessageSquare, Clock, Sparkles, AlertCircle, Star, Crown, DollarSign, Workflow, Bot, User, FileText, Settings, Timer, Phone, Mail, Eye, Lightbulb, Layers, Activity } from 'lucide-react'

const SurFoxVsSmarterContact = () => {
  const [activeFeatureSet, setActiveFeatureSet] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Add this function to handle menu item clicks
  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false)
  }

  // Mouse tracking for subtle parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const featureSets = [
    {
      category: 'AI Intelligence',
      icon: Brain,
      color: 'purple',
      features: [
        { name: 'AI-driven conversations', surfox: 'Dynamic AI that learns and adapts', smarter: 'Template-based automation only' },
        { name: 'Conversation memory per lead', surfox: 'Full conversation history with learning', smarter: 'Basic contact management' },
        { name: 'AI personas & tone customization', surfox: 'Multiple AI personalities per campaign', smarter: 'Fixed template variations' },
        { name: 'Dynamic message generation', surfox: 'AI creates unique messages per prospect', smarter: 'Pre-written template system' },
        { name: 'Anti-spam intelligence', surfox: 'AI prevents spam detection automatically', smarter: 'Risk of spam flags with volume' }
      ]
    },
    {
      category: 'Sales Psychology',
      icon: Lightbulb,
      color: 'cyan',
      features: [
        { name: 'Psychological profiling (50+ dimensions)', surfox: 'Deep personality analysis per prospect', smarter: 'No psychological understanding' },
        { name: 'Behavioral pattern learning', surfox: 'AI learns what works for personality types', smarter: 'No learning or adaptation' },
        { name: 'Buying signal detection', surfox: 'AI reads psychological readiness signals', smarter: 'Manual signal interpretation required' },
        { name: 'Conversation intelligence', surfox: 'Knows when to push vs when to wait', smarter: 'Fixed campaign sequences only' },
        { name: 'Motivation scoring', surfox: 'Real-time psychological scoring', smarter: 'Basic engagement tracking' }
      ]
    },
    {
      category: 'Lead Management',
      icon: Target,
      color: 'blue',
      features: [
        { name: 'AI qualification engine', surfox: 'Automatic psychology-based qualification', smarter: 'Manual lead qualification required' },
        { name: 'Hot lead escalation', surfox: 'AI escalates when prospects are ready', smarter: 'Manual monitoring and handoff' },
        { name: 'Smart prioritization', surfox: 'AI ranks leads by conversion probability', smarter: 'Basic list management' },
        { name: 'Automated follow-up optimization', surfox: 'AI determines optimal timing per lead', smarter: 'Fixed drip campaign schedules' },
        { name: 'Context-aware alerts', surfox: 'Full conversation context provided', smarter: 'Basic notification system' }
      ]
    },
    {
      category: 'Automation & Efficiency',
      icon: Zap,
      color: 'green',
      features: [
        { name: 'Chrome extension capture', surfox: '1-click lead import with instant analysis', smarter: 'Manual list upload required' },
        { name: 'AI handles conversations', surfox: '90% of conversations managed by AI', smarter: 'All conversations require manual handling' },
        { name: 'Document-based AI training', surfox: 'Upload PDFs, SOPs to train AI', smarter: 'Template library only' },
        { name: 'Campaign-specific AI personas', surfox: 'Different AI behavior per campaign', smarter: 'Same templates across campaigns' },
        { name: 'Smart retry logic', surfox: 'AI adapts retry strategy per engagement', smarter: 'Fixed retry schedules' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white overflow-hidden">

      {/* Mobile Navigation Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-xl border-b border-purple-500/30">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            SurFox vs Smarter Contact
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 w-80 h-full bg-gradient-to-br from-slate-900 to-purple-900 border-l border-purple-500/30 p-6 overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Menu Items */}
            <nav className="mt-12 space-y-4">
              <a
                href="/#how-it-works"
                onClick={handleMenuItemClick}
                className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
              >
                How It Works
              </a>
              
              {/* SurFox vs Everyone Dropdown */}
              <div className="space-y-2">
                <div className="px-4 py-3 text-lg font-medium text-purple-300 border-b border-purple-500/30">
                  SurFox vs Everyone
                </div>
                <div className="pl-6 space-y-2">
                  <a
                    href="/compare/surfox-vs-all-competitors"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    vs All Competitors
                  </a>
                  <a
                    href="/compare/surfox-vs-launch-control"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    vs Launch Control
                  </a>
                  <a
                    href="/compare/surfox-vs-smarter-contact"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-purple-200 bg-purple-500/30 hover:text-white hover:bg-purple-500/40 rounded-lg transition-all border border-purple-400/30"
                  >
                    vs Smarter Contact (Current)
                  </a>
                  <a
                    href="/compare/surfox-vs-textus"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    vs Textus
                  </a>
                </div>
              </div>
              
              <a
                href="/#pricing"
                onClick={handleMenuItemClick}
                className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
              >
                Pricing
              </a>
              
              {/* Resources Dropdown */}
              <div className="space-y-2">
                <div className="px-4 py-3 text-lg font-medium text-purple-300 border-b border-purple-500/30">
                  Resources
                </div>
                <div className="pl-6 space-y-2">
                  <a
                    href="/toms-story"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    Tom's Story
                  </a>
                  <a
                    href="/case-studies"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    Case Studies
                  </a>
                  <a
                    href="/blog"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    Sales Psychology Blog
                  </a>
                  <a
                    href="/webinars"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    Webinars
                  </a>
                  <a
                    href="/help"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    Help Center
                  </a>
                </div>
              </div>
              
              <a
                href="#cta"
                onClick={handleMenuItemClick}
                className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
              >
                Request Demo
              </a>
              
              {/* CTA Buttons */}
              <div className="pt-6 border-t border-purple-500/30 space-y-3">
                <button
                  onClick={handleMenuItemClick}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold text-white hover:shadow-lg transition-all"
                >
                  Start Free Trial
                </button>
                <button
                  onClick={handleMenuItemClick}
                  className="w-full px-6 py-3 border border-purple-400/50 rounded-xl font-medium text-gray-300 hover:bg-purple-500/20 transition-all"
                >
                  Contact Sales
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-40 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-12 pt-24 lg:pt-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            {/* Platform Logos */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <Brain className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white">SurFox</div>
                  <div className="text-xs md:text-sm text-purple-300">Sales Psychology AI</div>
                </div>
              </div>
              
              <div className="text-gray-400 text-2xl md:text-4xl font-bold">VS</div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-600/50 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-gray-400">Smarter Contact</div>
                  <div className="text-xs md:text-sm text-gray-500">Mass Messaging</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                AI That
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Closes Deals
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                vs Mass Blasting
              </span>
            </h1>
            
            <div className="text-lg md:text-2xl text-purple-200 space-y-4 mb-8">
              <p>Most platforms blast 5,000 people and hope for replies.</p>
              <p className="text-base md:text-lg text-gray-300">
                <strong className="text-white">SurFox uses AI to have real conversations</strong> that close 50 actual deals. 
                See exactly why SurFox beats traditional messaging platforms.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12">
              <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-base md:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  See Full Comparison
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <a href="#demo" className="px-6 md:px-8 py-3 md:py-4 border-2 border-purple-400/50 rounded-2xl font-bold text-base md:text-lg backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300">
                <Play className="mr-2 w-4 h-4 md:w-5 md:h-5 inline" />
                Watch Demo
              </a>
            </div>

            {/* Key Stats Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-4 md:p-6 text-center shadow-2xl">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">$197</div>
                <div className="text-sm text-purple-200">SurFox Starting Price</div>
                <div className="text-xs text-gray-400 mt-2">vs $199+ Smarter Contact</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-4 md:p-6 text-center shadow-2xl">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-sm text-purple-200">AI Automation</div>
                <div className="text-xs text-gray-400 mt-2">vs manual everything</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-4 md:p-6 text-center shadow-2xl">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">15min</div>
                <div className="text-sm text-purple-200">Setup Time</div>
                <div className="text-xs text-gray-400 mt-2">vs hours of setup</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Comparison */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Two Different Philosophies
            </h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
              The fundamental difference isn't just features — it's how we think about sales conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Smarter Contact Approach */}
            <div className="bg-gradient-to-br from-green-900/40 to-emerald-600/40 rounded-2xl border border-green-400/30 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600/50 rounded-xl flex items-center justify-center mr-4">
                  <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-green-300">Smarter Contact</h3>
                  <p className="text-green-200 text-sm md:text-base">Mass Messaging Approach</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-900/40 border border-green-400/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-green-300 mb-2 text-sm md:text-base">The Strategy:</h4>
                  <p className="text-xs md:text-sm text-green-200">"Blast everyone with the same message and see who responds"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-green-200 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>Fixed templates that get stale</span>
                  </div>
                  <div className="flex items-start text-green-200 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>No conversation memory</span>
                  </div>
                  <div className="flex items-start text-green-200 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>Manual monitoring required</span>
                  </div>
                  <div className="flex items-start text-green-200 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>You handle all responses manually</span>
                  </div>
                  <div className="flex items-start text-green-200 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>No lead scoring or qualification</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-green-900/40 border border-green-400/30 rounded-xl">
                <p className="text-green-200 text-xs md:text-sm font-medium">
                  <strong>Best For:</strong> Teams that want to send high volumes and manually filter responses
                </p>
              </div>
            </div>

            {/* SurFox Approach */}
            <div className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-2xl border-2 border-purple-400/50 p-6 md:p-8 backdrop-blur-sm shadow-lg shadow-purple-500/25">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <Brain className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-purple-300">SurFox</h3>
                  <p className="text-purple-200 text-sm md:text-base">AI Conversation Approach</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-purple-300 mb-2 text-sm md:text-base">The Strategy:</h4>
                  <p className="text-xs md:text-sm text-purple-200">"Have AI conversations that feel human and deliver qualified leads"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-purple-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Dynamic messages that adapt per lead</span>
                  </div>
                  <div className="flex items-start text-purple-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>AI remembers every conversation</span>
                  </div>
                  <div className="flex items-start text-purple-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Auto-flags hot leads for you</span>
                  </div>
                  <div className="flex items-start text-purple-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>AI handles responses intelligently</span>
                  </div>
                  <div className="flex items-start text-purple-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Built-in motivation scoring</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-purple-900/40 border border-purple-400/30 rounded-xl">
                <p className="text-purple-200 text-xs md:text-sm font-medium">
                  <strong>Best For:</strong> Teams that want AI to qualify leads and only engage when prospects are ready to buy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Conversation Example */}
      <section className="relative py-16 md:py-20 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              See the Difference in Action
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Same lead, same goal, completely different outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Smarter Contact Conversation */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 border border-green-400/30 rounded-2xl p-4 md:p-6 backdrop-blur-xl">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600/50 rounded-lg flex items-center justify-center mr-3">
                  <MessageSquare className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-green-300">Smarter Contact Approach</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-green-300 text-xs">Day 1 - Mass Blast</span>
                  </div>
                  <p className="text-gray-200">"Hi [NAME], are you interested in selling your house?"</p>
                </div>
                
                <div className="text-center text-gray-400 text-xs py-2">
                  ... no response for 3 days ...
                </div>
                
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-green-300 text-xs">Day 4 - Same Template</span>
                  </div>
                  <p className="text-gray-200">"Hi [NAME], are you interested in selling your house?"</p>
                </div>
                
                <div className="text-center text-gray-400 text-xs py-2">
                  ... no response for 7 days ...
                </div>
                
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-green-300 text-xs">Day 11 - Final Blast</span>
                  </div>
                  <p className="text-gray-200">"Hi [NAME], are you interested in selling your house?"</p>
                </div>
              </div>
              
              <div className="bg-red-900/40 border border-red-400/30 rounded-lg p-3 md:p-4 text-center">
                <X className="w-5 h-5 md:w-6 md:h-6 text-red-400 mx-auto mb-2" />
                <p className="text-red-300 font-medium text-sm md:text-base">Result: Lead Lost</p>
                <p className="text-red-400 text-xs md:text-sm">Marked as spam, no engagement</p>
              </div>
            </div>

            {/* SurFox AI Conversation */}
            <div className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 border-2 border-purple-400/50 rounded-2xl p-4 md:p-6 backdrop-blur-xl shadow-lg shadow-purple-500/25">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                  <Brain className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-purple-300">SurFox AI Approach</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="bg-purple-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-purple-300 text-xs">Day 1 - AI Opening</span>
                  </div>
                  <p className="text-purple-200">"Hey Sarah — wasn't sure if this was still your number. If you're still thinking about selling, I can keep it simple for you."</p>
                </div>
                
                <div className="text-center text-gray-400 text-xs py-2">
                  ... no reply for 3 days, AI adapts timing ...
                </div>
                
                <div className="bg-purple-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-purple-300 text-xs">Day 4 - AI Follow-up</span>
                  </div>
                  <p className="text-purple-200">"Just checking in — totally fine if not the right time. Market's been pretty good for sellers lately."</p>
                </div>
                
                <div className="bg-emerald-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                    <span className="text-emerald-300 text-xs">Day 5 - Lead Response</span>
                  </div>
                  <p className="text-emerald-200">"Yeah I might be. What kind of offers are you seeing?"</p>
                </div>
                
                <div className="bg-purple-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-purple-300 text-xs">AI Response</span>
                  </div>
                  <p className="text-purple-200">"Great question! Most of my sellers in your area have been pleasantly surprised. Want me to pull some recent comps for your street?"</p>
                </div>
              </div>
              
              <div className="bg-emerald-900/40 border border-emerald-400/30 rounded-lg p-3 md:p-4 text-center">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 mx-auto mb-2" />
                <p className="text-emerald-300 font-medium text-sm md:text-base">Result: Hot Lead Ready!</p>
                <p className="text-emerald-400 text-xs md:text-sm">AI flags for immediate handoff</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section id="comparison" className="relative py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Feature-by-Feature Breakdown
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              See exactly where SurFox outperforms traditional messaging platforms.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {featureSets.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFeatureSet(index)}
                className={`flex items-center px-3 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all text-xs md:text-base ${
                  activeFeatureSet === index
                    ? `bg-gradient-to-r ${
                        category.color === 'purple' ? 'from-purple-600 to-purple-700' :
                        category.color === 'cyan' ? 'from-cyan-600 to-cyan-700' :
                        category.color === 'blue' ? 'from-blue-600 to-blue-700' :
                        'from-green-600 to-green-700'
                      } text-white shadow-lg`
                    : 'bg-gray-900/60 text-gray-300 hover:bg-gray-800/60 border border-gray-700/50 backdrop-blur-sm'
                }`}
              >
                <category.icon className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                <span className="hidden sm:inline">{category.category}</span>
                <span className="sm:hidden">{category.category.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Mobile-Optimized Feature Cards */}
          <div className="md:hidden space-y-4">
            {featureSets[activeFeatureSet].features.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-4 shadow-2xl">
                <h4 className="font-medium text-white mb-3 text-sm">{item.name}</h4>
                
                <div className="space-y-3">
                  <div className="bg-purple-900/40 border border-purple-400/30 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-gradient-to-br from-purple-600 to-cyan-600 rounded mr-2"></div>
                      <span className="font-medium text-purple-300 text-xs">SurFox</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-300 text-xs">{item.surfox}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/40 border border-gray-600/30 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                      <span className="font-medium text-gray-300 text-xs">Smarter Contact</span>
                    </div>
                    <div className="flex items-start">
                      <X className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-red-300 text-xs">{item.smarter}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Comparison Table */}
          <div className="hidden md:block bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-3xl border border-purple-500/30 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-b border-purple-400/30">
              <div className="col-span-6 p-6">
                <h3 className="font-bold text-white text-lg">Feature</h3>
              </div>
              <div className="col-span-3 p-6 text-center border-l border-purple-400/30">
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-purple-600 to-cyan-600 rounded mr-2"></div>
                  <span className="font-bold text-white">SurFox</span>
                </div>
              </div>
              <div className="col-span-3 p-6 text-center border-l border-purple-400/30">
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                  <span className="font-medium text-gray-300">Smarter Contact</span>
                </div>
              </div>
            </div>

            {featureSets[activeFeatureSet].features.map((item, index) => (
              <div key={index} className="grid grid-cols-12 border-b border-gray-700/50 hover:bg-purple-900/20 transition-colors">
                <div className="col-span-6 p-6">
                  <span className="text-gray-200 font-medium">{item.name}</span>
                </div>
                <div className="col-span-3 p-6 border-l border-gray-700/50">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-green-300 font-medium text-sm">{item.surfox}</span>
                  </div>
                </div>
                <div className="col-span-3 p-6 border-l border-gray-700/50">
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-red-300 text-sm">{item.smarter}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              The Logical Advantage
            </h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
              SurFox delivers superior AI capabilities while being competitively priced with hidden cost advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Cost Analysis */}
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                <DollarSign className="w-5 h-5 md:w-6 md:h-6 mr-3 text-green-400" />
                True Cost Analysis
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 bg-green-900/40 border border-green-400/30 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <div className="font-semibold text-green-300 text-sm md:text-base">Smarter Contact Total Cost</div>
                      <div className="text-xs md:text-sm text-green-200">Platform + usage fees + manual work</div>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <div className="text-xl md:text-2xl font-bold text-green-400">$600+</div>
                      <div className="text-xs text-green-300">per month</div>
                    </div>
                  </div>
                  <div className="text-xs text-green-200 space-y-1">
                    <div>• $199+ base subscription</div>
                    <div>• $0.03/SMS + $0.02/min calls</div>
                    <div>• $200+ manual work time</div>
                  </div>
                </div>
                
                <div className="p-3 md:p-4 bg-purple-900/40 border border-purple-400/30 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <div className="font-semibold text-purple-300 text-sm md:text-base">SurFox Total Cost</div>
                      <div className="text-xs md:text-sm text-purple-200">AI automation included</div>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <div className="text-xl md:text-2xl font-bold text-purple-400">$197</div>
                      <div className="text-xs text-purple-300">per month</div>
                    </div>
                  </div>
                  <div className="text-xs text-purple-200 space-y-1">
                    <div>• $197 all-inclusive subscription</div>
                    <div>• $0 usage fees for core features</div>
                    <div>• $0 manual qualification time</div>
                  </div>
                </div>
                
                <div className="text-center p-3 md:p-4 bg-emerald-900/40 border border-emerald-400/30 rounded-xl">
                  <div className="text-xl md:text-2xl font-bold text-emerald-400">67% Cost Reduction</div>
                  <div className="text-xs md:text-sm text-emerald-300">by eliminating usage fees and manual work</div>
                </div>
              </div>
            </div>

            {/* Intelligence Comparison */}
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                <Brain className="w-5 h-5 md:w-6 md:h-6 mr-3 text-cyan-400" />
                Intelligence Comparison
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 bg-gray-800/40 border border-gray-600/30 rounded-xl">
                  <h4 className="font-semibold text-gray-300 mb-2 text-sm md:text-base">Smarter Contact Capabilities</h4>
                  <div className="space-y-2 text-xs md:text-sm text-gray-400">
                    <div className="flex items-center"><X className="w-3 h-3 mr-2 text-red-400" />Template-based messaging</div>
                    <div className="flex items-center"><X className="w-3 h-3 mr-2 text-red-400" />Manual conversation handling</div>
                    <div className="flex items-center"><X className="w-3 h-3 mr-2 text-red-400" />No AI learning or adaptation</div>
                    <div className="flex items-center"><X className="w-3 h-3 mr-2 text-red-400" />Pay-per-use model</div>
                  </div>
                </div>
                
                <div className="p-3 md:p-4 bg-purple-900/40 border border-purple-400/30 rounded-xl">
                  <h4 className="font-semibold text-purple-300 mb-2 text-sm md:text-base">SurFox Capabilities</h4>
                  <div className="space-y-2 text-xs md:text-sm text-purple-200">
                    <div className="flex items-center"><Check className="w-3 h-3 mr-2 text-green-400" />50+ psychological dimensions</div>
                    <div className="flex items-center"><Check className="w-3 h-3 mr-2 text-green-400" />AI handles 90% of conversations</div>
                    <div className="flex items-center"><Check className="w-3 h-3 mr-2 text-green-400" />Continuous learning & improvement</div>
                    <div className="flex items-center"><Check className="w-3 h-3 mr-2 text-green-400" />All-inclusive pricing</div>
                  </div>
                </div>
                
                <div className="text-center p-3 md:p-4 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-400/30 rounded-xl">
                  <div className="text-lg md:text-xl font-bold text-white mb-2">Revolutionary Advantage</div>
                  <div className="text-xs md:text-sm text-purple-200">First-ever Sales Psychology AI vs mass messaging</div>
                </div>
              </div>
            </div>
          </div>

          {/* Approach Comparison */}
          <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-purple-400/30 rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Fundamental Approach Difference</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-base md:text-lg text-purple-200 mb-2">Smarter Contact Philosophy</div>
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">Volume</div>
                <div className="text-xs md:text-sm text-gray-400">Send thousands, hope for responses</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-purple-200 mb-2">vs</div>
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">Intelligence</div>
                <div className="text-xs md:text-sm text-purple-300">AI delivers qualified prospects</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-purple-200 mb-2">Expected Result</div>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">Higher Quality</div>
                <div className="text-xs md:text-sm text-gray-400">leads per conversation</div>
              </div>
            </div>
            <div className="mt-6 p-3 md:p-4 bg-purple-900/30 rounded-xl">
              <p className="text-purple-200 font-medium text-sm md:text-base">
                <strong className="text-white">The logical advantage:</strong> AI that understands psychology vs templates that treat everyone the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="relative py-16 md:py-20 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Ready to Upgrade from Mass Messaging?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Join the businesses making the switch from volume-based messaging to AI-powered conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              { icon: Database, title: 'Easy Data Import', desc: 'Import your existing leads via CSV or Chrome extension. We\'ll help migrate your data seamlessly.' },
              { icon: FileText, title: 'AI Training Included', desc: 'Our team helps train your AI on your business and messaging style. Get results from day one.' },
              { icon: Settings, title: 'Smart Campaign Setup', desc: 'Configure AI personas that adapt to different prospect types automatically.' },
              { icon: Sparkles, title: 'Start Converting', desc: 'Watch AI engage prospects intelligently and deliver qualified leads automatically.' }
            ].map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50 rounded-2xl p-4 md:p-6 text-center backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-xs md:text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-purple-400/30 rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">
              Special Offer for Smarter Contact Users
            </h3>
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              Get your first month free when you switch to SurFox. We'll even help you import your existing campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#cta" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm md:text-base">
                Claim Your Free Month
              </a>
              <a href="#demo" className="border border-purple-400/50 text-purple-200 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500/20 transition-all text-sm md:text-base">
                Schedule Migration Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="relative py-16 md:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Stop Blasting. Start Converting.
          </h2>
          <p className="text-lg md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses who've upgraded from mass messaging to AI-powered conversations.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            <strong className="text-white">14-day free trial.</strong> No setup fees. See results in your first week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center mb-8">
            <button className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl font-bold text-lg md:text-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <a href="#" className="px-8 md:px-12 py-4 md:py-6 border-2 border-purple-400/50 rounded-2xl font-bold text-lg md:text-2xl backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-500 hover:scale-105">
              Book a Demo
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-purple-200">
            <div className="flex items-center">
              <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
              Setup in 15 minutes
            </div>
            <div className="flex items-center">
              <Award className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
              Cancel anytime
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-xs md:text-sm text-gray-400 mb-4">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-60">
              {['TechCorp', 'SalesForce', 'GrowthCo', 'ScaleUp'].map((company, index) => (
                <div key={index} className="text-gray-500 font-medium text-sm md:text-base">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SurFoxVsSmarterContact