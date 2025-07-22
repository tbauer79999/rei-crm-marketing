'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, MessageSquare, Clock, Sparkles, AlertCircle, Star, Crown, DollarSign, Workflow, Bot, User, FileText, Settings, Timer, Phone, Mail, Eye, Lightbulb, Layers, Activity, Rocket } from 'lucide-react'

const SurFoxVsLaunchControl = () => {
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
        { name: 'AI-driven conversations', surfox: 'Dynamic AI that adapts to each prospect', launch: 'Template-based messaging only' },
        { name: 'Conversation memory per lead', surfox: 'Full conversation history with learning', launch: 'Basic contact management' },
        { name: 'AI tone/persona customization', surfox: 'Multiple AI personalities per campaign', launch: 'Fixed template variations' },
        { name: 'Dynamic message generation', surfox: 'AI creates unique messages per prospect', launch: 'Pre-written template system' },
        { name: 'Anti-spam intelligence', surfox: 'AI prevents spam detection automatically', launch: 'Manual message variation required' }
      ]
    },
    {
      category: 'Sales Psychology',
      icon: Lightbulb,
      color: 'cyan',
      features: [
        { name: 'Psychological profiling (50+ dimensions)', surfox: 'Deep personality analysis per prospect', launch: 'No psychological understanding' },
        { name: 'Behavioral pattern learning', surfox: 'AI learns what works for personality types', launch: 'No learning or adaptation' },
        { name: 'Buying signal detection', surfox: 'AI reads psychological readiness signals', launch: 'Manual signal interpretation' },
        { name: 'Conversation intelligence', surfox: 'Knows when to push vs when to wait', launch: 'Fixed campaign sequences only' },
        { name: 'Motivation scoring', surfox: 'Real-time psychological scoring', launch: 'Basic engagement tracking' }
      ]
    },
    {
      category: 'Lead Management',
      icon: Target,
      color: 'blue',
      features: [
        { name: 'AI qualification engine', surfox: 'Automatic psychology-based qualification', launch: 'Manual lead qualification required' },
        { name: 'Hot lead escalation', surfox: 'AI escalates when prospects are ready', launch: 'Manual monitoring and handoff' },
        { name: 'Smart prioritization', surfox: 'AI ranks leads by conversion probability', launch: 'Basic list management' },
        { name: 'Automated follow-up optimization', surfox: 'AI determines optimal timing per lead', launch: 'Fixed drip campaign schedules' },
        { name: 'Context-aware alerts', surfox: 'Full conversation context provided', launch: 'Basic notification system' }
      ]
    },
    {
      category: 'Automation & Efficiency',
      icon: Zap,
      color: 'green',
      features: [
        { name: 'Chrome extension capture', surfox: '1-click lead import with instant analysis', launch: 'Manual list upload required' },
        { name: 'AI handles conversations', surfox: '90% of conversations managed by AI', launch: 'All conversations require manual handling' },
        { name: 'Document-based AI training', surfox: 'Upload PDFs, SOPs to train AI', launch: 'Template library only' },
        { name: 'Campaign-specific AI personas', surfox: 'Different AI behavior per campaign', launch: 'Same templates across campaigns' },
        { name: 'Smart retry logic', surfox: 'AI adapts retry strategy per engagement', launch: 'Fixed retry schedules' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white overflow-hidden">

      {/* Mobile Navigation Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-xl border-b border-purple-500/30">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            SurFox vs Launch Control
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
                    href="/vs-twilio"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    vs Twilio
                  </a>
                  <a
                    href="/vs-salesloft"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    vs SalesLoft
                  </a>
                  <a
                    href="/vs-outreach"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    vs Outreach
                  </a>
                  <a
                    href="/vs-hubspot"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    vs HubSpot
                  </a>
                  <a
                    href="/vs-salesforce"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    vs Salesforce
                  </a>
                  <a
                    href="/vs-textus"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    vs TextUs
                  </a>
                  <a
                    href="/vs-smarter-contact"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    vs Smarter Contact
                  </a>
                  <a
                    href="/vs-launch-control"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-purple-200 bg-purple-500/30 hover:text-white hover:bg-purple-500/40 rounded-lg transition-all border border-purple-400/30"
                  >
                    vs Launch Control (Current)
                  </a>
                  <a
                    href="/vs-all-competitors"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    vs All Competitors
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
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-600/50 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 md:w-8 md:h-8 text-orange-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-gray-400">Launch Control</div>
                  <div className="text-xs md:text-sm text-gray-500">Campaign Management</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Smarter
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Selling
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                vs Campaign Blasting
              </span>
            </h1>
            
            <div className="text-lg md:text-2xl text-purple-200 space-y-4 mb-8">
              <p>Launch Control is a power tool. SurFox is your AI sales rep.</p>
              <p className="text-base md:text-lg text-gray-300">
                While Launch Control makes you script every message manually, 
                <strong className="text-white"> SurFox AI handles 90% of conversations</strong> — never forgetting, never sleeping, always following up with perfect timing.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12">
              <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-base md:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  See the Battle
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <a href="#demo" className="px-6 md:px-8 py-3 md:py-4 border-2 border-purple-400/50 rounded-2xl font-bold text-base md:text-lg backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300">
                <Play className="mr-2 w-4 h-4 md:w-5 md:h-5 inline" />
                Try AI Demo
              </a>
            </div>

            {/* Key Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-3 md:p-6 text-center shadow-2xl">
                <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">$197</div>
                <div className="text-xs md:text-sm text-purple-200">SurFox Starting Price</div>
                <div className="text-xs text-gray-400 mt-2">vs $497+ Launch Control</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-3 md:p-6 text-center shadow-2xl">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-xs md:text-sm text-purple-200">AI Automation</div>
                <div className="text-xs text-gray-400 mt-2">vs manual templates</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-3 md:p-6 text-center shadow-2xl">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-xs md:text-sm text-purple-200">Psychology Dimensions</div>
                <div className="text-xs text-gray-400 mt-2">vs 0 intelligence</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-3 md:p-6 text-center shadow-2xl">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">15min</div>
                <div className="text-xs md:text-sm text-purple-200">Setup Time</div>
                <div className="text-xs text-gray-400 mt-2">vs hours of templating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Difference */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              The Fundamental Difference
            </h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
              Both platforms send messages, but they operate in completely different universes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Launch Control Side */}
            <div className="bg-gradient-to-br from-orange-900/40 to-red-600/40 rounded-2xl border border-orange-400/30 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-600/50 rounded-xl flex items-center justify-center mr-4">
                  <Rocket className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-orange-300">Launch Control</h3>
                  <p className="text-orange-200 text-sm md:text-base">Manual Campaign Management</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-900/40 border border-orange-400/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-orange-300 mb-2 flex items-center text-sm md:text-base">
                    <User className="w-4 h-4 mr-2" />
                    You Do Everything
                  </h4>
                  <p className="text-xs md:text-sm text-orange-200">Script every message, monitor every reply, qualify every lead manually. Full control, full workload.</p>
                </div>
                
                <div className="bg-orange-900/40 border border-orange-400/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-orange-300 mb-2 flex items-center text-sm md:text-base">
                    <Eye className="w-4 h-4 mr-2" />
                    Manual Monitoring
                  </h4>
                  <p className="text-xs md:text-sm text-orange-200">Watch dashboards, track responses, manually follow up. Miss a day, miss opportunities.</p>
                </div>
                
                <div className="bg-orange-900/40 border border-orange-400/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-orange-300 mb-2 flex items-center text-sm md:text-base">
                    <FileText className="w-4 h-4 mr-2" />
                    Template-Based
                  </h4>
                  <p className="text-xs md:text-sm text-orange-200">Fixed templates with variables. Risk spam flags at scale without careful variation.</p>
                </div>
              </div>
              
              <div className="mt-6 p-3 md:p-4 bg-orange-900/40 border border-orange-400/30 rounded-xl">
                <p className="text-orange-200 text-xs md:text-sm font-medium">
                  <strong>Best For:</strong> Campaign managers who want full control and don't mind manual work
                </p>
              </div>
            </div>

            {/* SurFox Side */}
            <div className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-2xl border-2 border-purple-400/50 p-6 md:p-8 backdrop-blur-sm shadow-lg shadow-purple-500/25">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <Brain className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-purple-300">SurFox</h3>
                  <p className="text-purple-200 text-sm md:text-base">AI-Powered Sales Rep</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-purple-300 mb-2 flex items-center text-sm md:text-base">
                    <Bot className="w-4 h-4 mr-2" />
                    AI Does Everything
                  </h4>
                  <p className="text-xs md:text-sm text-purple-200">AI writes messages, handles replies, qualifies leads, escalates when ready. You focus on closing.</p>
                </div>
                
                <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-purple-300 mb-2 flex items-center text-sm md:text-base">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Smart Automation
                  </h4>
                  <p className="text-xs md:text-sm text-purple-200">AI monitors 24/7, never misses a signal, escalates hot leads instantly with full context.</p>
                </div>
                
                <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-purple-300 mb-2 flex items-center text-sm md:text-base">
                    <Brain className="w-4 h-4 mr-2" />
                    Adaptive Intelligence
                  </h4>
                  <p className="text-xs md:text-sm text-purple-200">Never repeats messages, learns from every conversation, adapts tone per lead automatically.</p>
                </div>
              </div>
              
              <div className="mt-6 p-3 md:p-4 bg-purple-900/40 border border-purple-400/30 rounded-xl">
                <p className="text-purple-200 text-xs md:text-sm font-medium">
                  <strong>Best For:</strong> Sales teams who want hot leads surfaced automatically with minimal effort
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section id="comparison" className="relative py-16 md:py-20 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Feature-by-Feature Breakdown
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              See exactly where SurFox's AI capabilities outshine Launch Control's manual approach.
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
                      <div className="w-3 h-3 bg-orange-500 rounded mr-2"></div>
                      <span className="font-medium text-gray-300 text-xs">Launch Control</span>
                    </div>
                    <div className="flex items-start">
                      <X className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-red-300 text-xs">{item.launch}</span>
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
                  <div className="w-4 h-4 bg-orange-500 rounded mr-2"></div>
                  <span className="font-medium text-gray-300">Launch Control</span>
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
                    <span className="text-red-300 text-sm">{item.launch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              The Logical Advantage
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              SurFox delivers superior AI capabilities at a fraction of Launch Control's cost.
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
                <div className="p-3 md:p-4 bg-orange-900/40 border border-orange-400/30 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <div className="font-semibold text-orange-300 text-sm md:text-base">Launch Control Total Cost</div>
                      <div className="text-xs md:text-sm text-orange-200">Platform + manual labor</div>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <div className="text-xl md:text-2xl font-bold text-orange-400">$1,500+</div>
                      <div className="text-xs text-orange-300">per month</div>
                    </div>
                  </div>
                  <div className="text-xs text-orange-200 space-y-1">
                    <div>• $497+ base subscription (Lite plan)</div>
                    <div>• $800+ salary costs (campaign management)</div>
                    <div>• $200+ lost opportunity cost</div>
                  </div>
                </div>
                
                <div className="p-3 md:p-4 bg-purple-900/40 border border-purple-400/30 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <div className="font-semibold text-purple-300 text-sm md:text-base">SurFox Total Cost</div>
                      <div className="text-xs md:text-sm text-purple-200">AI does the work</div>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <div className="text-xl md:text-2xl font-bold text-purple-400">$197</div>
                      <div className="text-xs text-purple-300">per month</div>
                    </div>
                  </div>
                  <div className="text-xs text-purple-200 space-y-1">
                    <div>• $197 all-inclusive subscription</div>
                    <div>• $0 campaign management time</div>
                    <div>• $0 template writing time</div>
                  </div>
                </div>
                
                <div className="text-center p-3 md:p-4 bg-green-900/40 border border-green-400/30 rounded-xl">
                  <div className="text-xl md:text-2xl font-bold text-green-400">87% Cost Reduction</div>
                  <div className="text-xs md:text-sm text-green-300">by eliminating manual campaign work</div>
                </div>
              </div>
            </div>

            {/* Capability Comparison */}
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                <Brain className="w-5 h-5 md:w-6 md:h-6 mr-3 text-cyan-400" />
                Intelligence Comparison
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 bg-gray-800/40 border border-gray-600/30 rounded-xl">
                  <h4 className="font-semibold text-gray-300 mb-2 text-sm md:text-base">Launch Control Capabilities</h4>
                  <div className="space-y-2 text-xs md:text-sm text-gray-400">
                    <div className="flex items-center"><X className="w-3 h-3 mr-2 text-red-400" />Template-based messaging</div>
                    <div className="flex items-center"><X className="w-3 h-3 mr-2 text-red-400" />Manual campaign management</div>
                    <div className="flex items-center"><X className="w-3 h-3 mr-2 text-red-400" />No AI or learning</div>
                    <div className="flex items-center"><X className="w-3 h-3 mr-2 text-red-400" />Fixed drip sequences</div>
                  </div>
                </div>
                
                <div className="p-3 md:p-4 bg-purple-900/40 border border-purple-400/30 rounded-xl">
                  <h4 className="font-semibold text-purple-300 mb-2 text-sm md:text-base">SurFox Capabilities</h4>
                  <div className="space-y-2 text-xs md:text-sm text-purple-200">
                    <div className="flex items-center"><Check className="w-3 h-3 mr-2 text-green-400" />50+ psychological dimensions</div>
                    <div className="flex items-center"><Check className="w-3 h-3 mr-2 text-green-400" />AI learns & improves</div>
                    <div className="flex items-center"><Check className="w-3 h-3 mr-2 text-green-400" />Behavioral adaptation</div>
                    <div className="flex items-center"><Check className="w-3 h-3 mr-2 text-green-400" />Conversation intelligence</div>
                  </div>
                </div>
                
                <div className="text-center p-3 md:p-4 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-400/30 rounded-xl">
                  <div className="text-lg md:text-xl font-bold text-white mb-2">Revolutionary Advantage</div>
                  <div className="text-xs md:text-sm text-purple-200">First-ever Sales Psychology AI vs manual templates</div>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Comparison */}
          <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-purple-400/30 rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Daily Workflow Comparison</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-base md:text-lg text-purple-200 mb-2">Launch Control Daily Work</div>
                <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">5+ hours</div>
                <div className="text-xs md:text-sm text-gray-400">Campaign setup + monitoring + replies</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-purple-200 mb-2">vs</div>
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">35 minutes</div>
                <div className="text-xs md:text-sm text-purple-300">SurFox AI automation</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-purple-200 mb-2">Time Saved</div>
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">25+ hours</div>
                <div className="text-xs md:text-sm text-gray-400">per week with AI</div>
              </div>
            </div>
            <div className="mt-6 p-3 md:p-4 bg-purple-900/30 rounded-xl">
              <p className="text-purple-200 font-medium text-sm md:text-base">
                <strong className="text-white">The logical advantage:</strong> AI that works 24/7 vs manual campaign management that stops when you sleep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Switch from Launch Control in Minutes
            </h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
              Stop spending hours on campaign management. Let SurFox AI handle conversations while you focus on closing deals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              { icon: Database, title: 'Export Your Lists', desc: 'Download your Launch Control contact lists - we\'ll help you import everything seamlessly.' },
              { icon: FileText, title: 'Train Your AI', desc: 'Upload your best templates and scripts. AI learns your messaging style in minutes.' },
              { icon: Settings, title: 'Configure AI Personas', desc: 'Set up intelligent AI personalities that adapt to different prospect types automatically.' },
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
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="relative py-16 md:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Still Scripting Every Message Manually?
          </h2>
          <p className="text-lg md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            Stop spending hours on campaign management. Let SurFox AI handle 90% of conversations while you focus on closing deals.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            <strong className="text-white">Free 14-day trial.</strong> Import your Launch Control leads and see the AI difference immediately.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center mb-8">
            <button className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl font-bold text-lg md:text-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center">
                Try the AI Demo
                <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <a href="#" className="px-8 md:px-12 py-4 md:py-6 border-2 border-purple-400/50 rounded-2xl font-bold text-lg md:text-2xl backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-500 hover:scale-105">
              See How We Escalate Leads
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-purple-200">
            <div className="flex items-center">
              <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
              No manual scripting needed
            </div>
            <div className="flex items-center">
              <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
              Setup in under 15 minutes
            </div>
            <div className="flex items-center">
              <Award className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
              Cancel anytime
            </div>
          </div>

          <div className="mt-8 md:mt-12">
            <p className="text-xs md:text-sm text-gray-400 mb-4">Trusted by teams who upgraded from manual tools</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-60">
              {['RealtyPro', 'InvestCorp', 'SalesForce', 'LeadMaster'].map((company, index) => (
                <div key={index} className="text-gray-500 font-medium text-sm md:text-base">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SurFoxVsLaunchControl