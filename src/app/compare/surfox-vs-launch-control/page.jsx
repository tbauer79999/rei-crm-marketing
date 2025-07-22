'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, MessageSquare, Clock, Sparkles, AlertCircle, Star, Crown, DollarSign, Workflow, Bot, User, FileText, Settings, Timer, Phone, Mail, Eye, Lightbulb, Layers, Activity, Rocket } from 'lucide-react'

const SurFoxVsLaunchControl = () => {
  const [activeFeatureSet, setActiveFeatureSet] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const featureSets = [
    {
      category: 'Conversion Power',
      icon: Brain,
      color: 'purple',
      features: [
        { name: 'Message Creation', surfox: 'AI creates unique conversations for each lead', launch: 'Template-based messaging only' },
        { name: 'Conversation Management', surfox: 'AI remembers and learns from every conversation', launch: 'Basic contact management, no memory' },
        { name: 'Lead Qualification', surfox: 'AI automatically scores and prioritizes hot leads', launch: 'Manual lead qualification required' },
        { name: 'Response Handling', surfox: 'AI handles 90% of conversations autonomously', launch: 'All conversations require manual handling' },
        { name: 'Learning Capability', surfox: 'Gets smarter with every conversation', launch: 'No learning or adaptation' }
      ]
    },
    {
      category: 'Sales Results',
      icon: Target,
      color: 'cyan',
      features: [
        { name: 'Appointment Setting', surfox: 'AI identifies buying signals and books qualified calls', launch: 'Manual signal interpretation required' },
        { name: 'Lead Scoring', surfox: 'Real-time motivation and urgency scoring', launch: 'Basic engagement tracking only' },
        { name: 'Hot Lead Detection', surfox: 'AI escalates when prospects are ready to buy', launch: 'Manual monitoring and handoff' },
        { name: 'Conversion Optimization', surfox: 'AI learns what works and improves messaging', launch: 'Fixed campaign sequences only' },
        { name: 'Deal Pipeline', surfox: 'Tracks leads from first contact to closed deal', launch: 'Basic list management' }
      ]
    },
    {
      category: 'Time Efficiency',
      icon: Clock,
      color: 'blue',
      features: [
        { name: 'Setup Time', surfox: '15-minute Chrome extension setup', launch: 'Hours of template creation and campaign setup' },
        { name: 'Daily Management', surfox: '30 minutes to review escalated hot leads', launch: '5+ hours of campaign monitoring and replies' },
        { name: 'Message Writing', surfox: 'AI writes all messages automatically', launch: 'Manual template writing and variation' },
        { name: 'Follow-up Strategy', surfox: 'AI determines optimal timing per lead', launch: 'Fixed drip schedules require constant adjustment' },
        { name: 'Spam Prevention', surfox: 'AI prevents spam detection automatically', launch: 'Manual message variation to avoid spam flags' }
      ]
    },
    {
      category: 'Business Value',
      icon: DollarSign,
      color: 'green',
      features: [
        { name: 'Pricing Model', surfox: 'All-inclusive $197/month, no hidden costs', launch: '$497+ base plus staff time costs' },
        { name: 'Staff Requirements', surfox: 'No dedicated campaign manager needed', launch: 'Requires full-time campaign management' },
        { name: 'ROI Tracking', surfox: 'Full conversion tracking from lead to close', launch: 'Basic campaign metrics only' },
        { name: 'Scalability', surfox: 'AI scales conversations without adding staff', launch: 'More campaigns = more manual work' },
        { name: 'Total Cost of Ownership', surfox: '$197/month all-inclusive', launch: '$1,500+/month including labor costs' }
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
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 w-80 h-full bg-gradient-to-br from-slate-900 to-purple-900 border-l border-purple-500/30 p-6 overflow-y-auto">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <nav className="mt-12 space-y-4">
              <a href="/#how-it-works" onClick={handleMenuItemClick} className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
                How It Works
              </a>
              
              <div className="space-y-2">
                <div className="px-4 py-3 text-lg font-medium text-purple-300 border-b border-purple-500/30">
                  SurFox vs Everyone
                </div>
                <div className="pl-6 space-y-2">
                  <a href="/compare/surfox-vs-all-competitors" onClick={handleMenuItemClick} className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
                    vs All Competitors
                  </a>
                  <a href="/compare/surfox-vs-launch-control" onClick={handleMenuItemClick} className="block px-4 py-2 text-base text-purple-200 bg-purple-500/30 hover:text-white hover:bg-purple-500/40 rounded-lg transition-all border border-purple-400/30">
                    vs Launch Control (Current)
                  </a>
                  <a href="/compare/surfox-vs-smarter-contact" onClick={handleMenuItemClick} className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
                    vs Smarter Contact
                  </a>
                  <a href="/compare/surfox-vs-textus" onClick={handleMenuItemClick} className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
                    vs Textus
                  </a>
                  <a href="/compare/surfox-vs-skipio" onClick={handleMenuItemClick} className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
                    vs Skipio
                  </a>
                  <a href="/compare/surfox-vs-lead-sherpa" onClick={handleMenuItemClick} className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
                    vs Lead Sherpa
                  </a>
                </div>
              </div>
              
              <div className="pt-6 border-t border-purple-500/30 space-y-3">
                <button onClick={handleMenuItemClick} className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold text-white hover:shadow-lg transition-all">
                  Start Free Trial
                </button>
                <button onClick={handleMenuItemClick} className="w-full px-6 py-3 border border-purple-400/50 rounded-xl font-medium text-gray-300 hover:bg-purple-500/20 transition-all">
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
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl border-2 border-purple-400/50 shadow-lg shadow-purple-500/25">
                <img src="/logo.png" alt="SurFox" className="w-12 h-12 md:w-16 md:h-16" />
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white">SurFox</div>
                  <div className="text-xs md:text-sm text-purple-300">AI Conversion Engine</div>
                </div>
              </div>
              
              <div className="text-gray-400 text-2xl md:text-4xl font-bold">VS</div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-800/40 to-gray-700/40 rounded-2xl border border-gray-600/30">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-600/50 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-gray-400">Launch Control</div>
                  <div className="text-xs md:text-sm text-gray-500">Campaign Management</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                25 Hours Saved
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Per Week
              </span>
            </h1>
            
            <div className="text-lg md:text-2xl text-purple-200 space-y-4 mb-8">
              <p><strong className="text-white">Launch Control requires constant campaign management.</strong></p>
              <p><strong className="text-cyan-400">SurFox AI handles 90% of conversations automatically.</strong></p>
              <p className="text-base md:text-lg text-gray-300">
                Same results. 87% less work. 87% lower cost.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12">
              <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-base md:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  Stop Manual Campaign Work
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <a href="#demo" className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-500/50 rounded-2xl font-bold text-base md:text-lg backdrop-blur-sm hover:bg-gray-500/20 transition-all duration-300">
                <Play className="mr-2 w-4 h-4 md:w-5 md:h-5 inline" />
                See AI in Action
              </a>
            </div>

            {/* Key Stats Preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-3 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">$197</div>
                <div className="text-xs md:text-sm text-purple-200">SurFox All-Inclusive</div>
                <div className="text-xs text-gray-400 mt-2">vs $1,500+ total cost</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-3 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-xs md:text-sm text-purple-200">AI Automation</div>
                <div className="text-xs text-gray-400 mt-2">vs 100% manual work</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-3 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">25hrs</div>
                <div className="text-xs md:text-sm text-purple-200">Weekly Time Saved</div>
                <div className="text-xs text-gray-400 mt-2">vs constant management</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-3 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">15min</div>
                <div className="text-xs md:text-sm text-purple-200">Setup Time</div>
                <div className="text-xs text-gray-400 mt-2">vs hours of templating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Difference */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-gray-900/50 to-slate-900/50 backdrop-blur-xl border-y border-gray-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Two Completely Different Approaches
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Launch Control makes you manage campaigns manually. SurFox makes AI manage conversations automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Launch Control Side */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 rounded-2xl border border-gray-500/30 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-600/50 rounded-xl flex items-center justify-center mr-4">
                  <Rocket className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-300">Launch Control</h3>
                  <p className="text-gray-400 text-sm md:text-base">Manual Campaign Management</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-700/40 border border-gray-500/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-gray-300 mb-2 text-sm md:text-base">The Problem They Solve:</h4>
                  <p className="text-xs md:text-sm text-gray-400">"I need better campaign management tools and templates"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-gray-300 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Powerful campaign management tools</span>
                  </div>
                  <div className="flex items-start text-gray-300 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Template library and variables</span>
                  </div>
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>All responses require manual handling</span>
                  </div>
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>Requires full-time campaign manager</span>
                  </div>
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>No AI or learning capabilities</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-gray-700/40 border border-gray-500/30 rounded-xl">
                <p className="text-gray-300 text-xs md:text-sm font-medium">
                  <strong>Best For:</strong> Teams who want campaign control and don't mind manual work
                </p>
              </div>
            </div>

            {/* SurFox Side */}
            <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 rounded-2xl border-2 border-purple-400/50 p-6 md:p-8 backdrop-blur-sm shadow-lg shadow-purple-500/25">
              <div className="flex items-center mb-6">
                <img src="/logo.png" alt="SurFox" className="w-10 h-10 md:w-12 md:h-12 mr-4" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">SurFox</h3>
                  <p className="text-purple-200 text-sm md:text-base">AI Conversion Engine</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-800/40 border border-purple-400/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-white mb-2 text-sm md:text-base">The Problem We Solve:</h4>
                  <p className="text-xs md:text-sm text-purple-200">"I need more qualified appointments without spending all day managing campaigns"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>AI creates unique conversations for each lead</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Handles 90% of conversations autonomously</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Automatically qualifies and escalates hot leads</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>No campaign manager needed</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Learns and improves with every conversation</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-purple-800/40 border border-purple-400/30 rounded-xl">
                <p className="text-white text-xs md:text-sm font-medium">
                  <strong>Best For:</strong> Sales teams who want qualified appointments without manual campaign work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Workflow Comparison */}
      <section className="relative py-16 md:py-20 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Your Daily Workflow: Before vs After
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              See exactly how SurFox AI eliminates the manual work that Launch Control requires.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Launch Control Daily Workflow */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 border border-gray-500/30 rounded-2xl p-4 md:p-6 backdrop-blur-xl">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-600/50 rounded-lg flex items-center justify-center mr-3">
                  <Rocket className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-300">Launch Control: Your Daily 5+ Hours</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <Clock className="w-3 h-3 mr-2 text-gray-400" />
                    <span className="text-gray-300 text-xs">8:00 AM - Morning Setup (45 mins)</span>
                  </div>
                  <p className="text-gray-200">Review overnight responses, update campaign templates, adjust targeting rules, prep new sequences</p>
                </div>
                
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <Clock className="w-3 h-3 mr-2 text-gray-400" />
                    <span className="text-gray-300 text-xs">10:00 AM - Response Management (2 hours)</span>
                  </div>
                  <p className="text-gray-200">Read every response, craft individual replies, qualify leads manually, update contact records</p>
                </div>
                
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <Clock className="w-3 h-3 mr-2 text-gray-400" />
                    <span className="text-gray-300 text-xs">2:00 PM - Campaign Monitoring (1.5 hours)</span>
                  </div>
                  <p className="text-gray-200">Check delivery rates, analyze engagement, adjust message timing, create A/B test variations</p>
                </div>
                
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <Clock className="w-3 h-3 mr-2 text-gray-400" />
                    <span className="text-gray-300 text-xs">4:00 PM - Lead Follow-up (1+ hour)</span>
                  </div>
                  <p className="text-gray-200">Manual follow-ups based on rules, schedule calls with qualified leads, update CRM</p>
                </div>
              </div>
              
              <div className="bg-red-900/40 border border-red-400/30 rounded-lg p-3 md:p-4 text-center">
                <Timer className="w-5 h-5 md:w-6 md:h-6 text-red-400 mx-auto mb-2" />
                <p className="text-red-300 font-medium text-sm md:text-base">Total Daily Time: 5+ Hours</p>
                <p className="text-red-200 text-xs md:text-sm">Plus constant weekend/evening monitoring</p>
              </div>
            </div>

            {/* SurFox AI Daily Workflow */}
            <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 border-2 border-purple-400/50 rounded-2xl p-4 md:p-6 backdrop-blur-xl shadow-lg shadow-purple-500/25">
              <div className="flex items-center mb-6">
                <img src="/logo.png" alt="SurFox" className="w-6 h-6 md:w-8 md:h-8 mr-3" />
                <h3 className="text-base md:text-lg font-semibold text-white">SurFox AI: Your Daily 30 Minutes</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="bg-purple-800/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <Clock className="w-3 h-3 mr-2 text-purple-400" />
                    <span className="text-purple-300 text-xs">9:00 AM - Hot Lead Review (15 mins)</span>
                  </div>
                  <p className="text-white">Review leads AI flagged as "ready to buy" - complete conversation context provided</p>
                </div>
                
                <div className="bg-purple-800/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <Clock className="w-3 h-3 mr-2 text-purple-400" />
                    <span className="text-purple-300 text-xs">12:00 PM - Quick Check (5 mins)</span>
                  </div>
                  <p className="text-white">Glance at AI performance dashboard, approve any escalated edge cases</p>
                </div>
                
                <div className="bg-purple-800/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <Clock className="w-3 h-3 mr-2 text-purple-400" />
                    <span className="text-purple-300 text-xs">5:00 PM - End of Day (10 mins)</span>
                  </div>
                  <p className="text-white">Review appointment bookings AI secured, check conversion metrics, done for the day</p>
                </div>
                
                <div className="bg-emerald-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <Sparkles className="w-3 h-3 mr-2 text-emerald-400" />
                    <span className="text-emerald-300 text-xs">24/7 - AI Works</span>
                  </div>
                  <p className="text-emerald-200">AI handles all conversations, follows up perfectly, learns from every interaction</p>
                </div>
              </div>
              
              <div className="bg-emerald-900/40 border border-emerald-400/30 rounded-lg p-3 md:p-4 text-center">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 mx-auto mb-2" />
                <p className="text-emerald-300 font-medium text-sm md:text-base">Total Daily Time: 30 Minutes</p>
                <p className="text-emerald-200 text-xs md:text-sm">AI works weekends and nights for you</p>
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
              See exactly where SurFox's AI automation outperforms Launch Control's manual approach.
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
                  <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 border-2 border-purple-400/50 rounded-lg p-3 shadow-lg shadow-purple-500/25">
                    <div className="flex items-center mb-2">
                      <img src="/logo.png" alt="SurFox" className="w-3 h-3 mr-2" />
                      <span className="font-medium text-white text-xs">SurFox</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-300 text-xs">{item.surfox}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/40 border border-gray-600/30 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-gray-500 rounded mr-2"></div>
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
                  <img src="/logo.png" alt="SurFox" className="w-4 h-4 mr-2" />
                  <span className="font-bold text-white">SurFox</span>
                </div>
              </div>
              <div className="col-span-3 p-6 text-center border-l border-purple-400/30">
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-500 rounded mr-2"></div>
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

      {/* Cost Comparison */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-gray-900/50 to-slate-900/50 backdrop-blur-xl border-y border-gray-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              The Hidden Cost Reality
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              SurFox delivers superior AI automation at 87% lower total cost than Launch Control + manual labor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* True Cost Analysis */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 border border-gray-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
              <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-6 flex items-center">
                <DollarSign className="w-5 h-5 md:w-6 md:h-6 mr-3 text-yellow-400" />
                True Monthly Cost Breakdown
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 bg-gray-700/40 border border-gray-500/30 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <div className="font-semibold text-gray-300 text-sm md:text-base">Launch Control Reality</div>
                      <div className="text-xs md:text-sm text-gray-400">Platform + dedicated staff needed</div>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <div className="text-xl md:text-2xl font-bold text-red-400">$1,500+</div>
                      <div className="text-xs text-gray-400">per month</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-300 space-y-1">
                    <div>• $497+ Launch Control subscription</div>
                    <div>• $800+ campaign manager salary (25+ hrs/week)</div>
                    <div>• $200+ lost opportunity costs</div>
                    <div>• Additional training and setup time</div>
                  </div>
                </div>
                
                <div className="p-3 md:p-4 bg-purple-900/40 border border-purple-400/30 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <div className="font-semibold text-white text-sm md:text-base">SurFox All-Inclusive</div>
                      <div className="text-xs md:text-sm text-purple-200">AI does all the work</div>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <div className="text-xl md:text-2xl font-bold text-green-400">$197</div>
                      <div className="text-xs text-purple-300">per month</div>
                    </div>
                  </div>
                  <div className="text-xs text-purple-200 space-y-1">
                    <div>• $197 complete subscription</div>
                    <div>• $0 campaign management time</div>
                    <div>• $0 response handling labor</div>
                    <div>• All AI features included</div>
                  </div>
                </div>
                
                <div className="text-center p-3 md:p-4 bg-green-900/40 border border-green-400/30 rounded-xl">
                  <div className="text-xl md:text-2xl font-bold text-green-400">87% Cost Savings</div>
                  <div className="text-xs md:text-sm text-green-300">Plus 25+ hours saved per week</div>
                </div>
              </div>
            </div>

            {/* Value Comparison */}
            <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 border-2 border-purple-400/50 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-lg shadow-purple-500/25">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-5 h-5 md:w-6 md:h-6 mr-3 text-cyan-400" />
                Time & Results Comparison
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 bg-gray-800/40 border border-gray-600/30 rounded-xl">
                  <h4 className="font-semibold text-gray-300 mb-2 text-sm md:text-base">What Launch Control Requires</h4>
                  <div className="space-y-2 text-xs md:text-sm text-gray-400">
                    <div>• 5+ hours daily campaign management</div>
                    <div>• Manual response to every single message</div>
                    <div>• Constant template writing and testing</div>
                    <div>• Weekend and evening monitoring</div>
                  </div>
                </div>
                
                <div className="p-3 md:p-4 bg-purple-800/40 border border-purple-400/30 rounded-xl">
                  <h4 className="font-semibold text-white mb-2 text-sm md:text-base">What SurFox Delivers</h4>
                  <div className="space-y-2 text-xs md:text-sm text-white">
                    <div>• 30 minutes daily to review hot leads</div>
                    <div>• AI handles 90% of conversations automatically</div>
                    <div>• AI creates unique messages for each prospect</div>
                    <div>• 24/7 automated follow-up and qualification</div>
                    <div>• Better results with dramatically less work</div>
                  </div>
                </div>
                
                <div className="text-center p-3 md:p-4 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-400/30 rounded-xl">
                  <div className="text-lg md:text-xl font-bold text-white mb-2">1,000% ROI Improvement</div>
                  <div className="text-xs md:text-sm text-purple-200">Better results, fraction of the time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Line Comparison */}
          <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-400/30 rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl">
            <h3 className="text-xl md:text-2xl font-bold text-green-300 mb-6">The Bottom Line</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-base md:text-lg text-green-200 mb-2">Launch Control</div>
                <div className="text-2xl md:text-3xl font-bold text-red-400 mb-2">$1,500+</div>
                <div className="text-xs md:text-sm text-gray-400">Platform + manual labor</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-green-200 mb-2">SurFox</div>
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">$197</div>
                <div className="text-xs md:text-sm text-green-300">All-inclusive AI automation</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-green-200 mb-2">Savings</div>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">$1,300+</div>
                <div className="text-xs md:text-sm text-gray-400">per month + 25 hours/week</div>
              </div>
            </div>
            <div className="mt-6 p-3 md:p-4 bg-green-900/30 rounded-xl">
              <p className="text-green-200 font-medium text-sm md:text-base">
                <strong className="text-white">Smart choice:</strong> Pay less, work less, get better results with AI automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="relative py-16 md:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <img src="/logo.png" alt="SurFox" className="w-16 h-16 md:w-20 md:h-20" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Stop Managing. Start Converting.
          </h2>
          <p className="text-lg md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            Stop spending 25+ hours per week on campaign management. Let SurFox AI deliver qualified appointments automatically.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            <strong className="text-white">14-day free trial.</strong> Import your Launch Control leads and see AI automation in action.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center mb-8">
            <button className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl font-bold text-lg md:text-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center">
                Save 25 Hours Per Week
                <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <a href="#" className="px-8 md:px-12 py-4 md:py-6 border-2 border-gray-400/50 rounded-2xl font-bold text-lg md:text-2xl backdrop-blur-sm hover:bg-gray-500/20 transition-all duration-500 hover:scale-105">
              See SurFox Demo
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-purple-200">
            <div className="flex items-center">
              <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
              No campaign management needed
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
        </div>
      </section>
    </div>
  )
}

export default SurFoxVsLaunchControl