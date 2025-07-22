'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, MessageSquare, Clock, Sparkles, AlertCircle, Star, Crown, DollarSign, Workflow, Bot, User, FileText, Settings, Timer, Phone, Mail, Eye, Lightbulb, Layers, Activity } from 'lucide-react'

const SurFoxVsTextUs = () => {
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
        { name: 'Message Creation', surfox: 'AI creates unique conversations for each lead', textus: 'Manual or canned messages only' },
        { name: 'Conversation Management', surfox: 'AI remembers and learns from every conversation', textus: 'No memory between conversations' },
        { name: 'Lead Qualification', surfox: 'AI automatically qualifies and scores prospects', textus: 'Manual qualification required for everything' },
        { name: 'Follow-up Strategy', surfox: 'AI learns optimal timing per prospect type', textus: 'Fixed timing rules only' },
        { name: 'Response Intelligence', surfox: 'AI adapts messaging based on prospect psychology', textus: 'One-size-fits-all messaging approach' }
      ]
    },
    {
      category: 'Sales Results',
      icon: Target,
      color: 'cyan',
      features: [
        { name: 'Appointment Setting', surfox: 'AI identifies buying signals and books qualified calls', textus: 'Manual signal interpretation required' },
        { name: 'Lead Scoring', surfox: 'Real-time psychological scoring and prioritization', textus: 'No native scoring capabilities' },
        { name: 'Hot Lead Detection', surfox: 'AI escalates when prospects are ready to buy', textus: 'Basic inbox filtering only' },
        { name: 'Conversion Optimization', surfox: 'AI learns what works and improves messaging', textus: 'No learning or adaptation capabilities' },
        { name: 'Deal Pipeline', surfox: 'Tracks leads from first contact to closed deal', textus: 'Manual sorting and prioritization' }
      ]
    },
    {
      category: 'Time Efficiency',
      icon: Clock,
      color: 'blue',
      features: [
        { name: 'Setup Time', surfox: '15-minute Chrome extension setup', textus: '2-3 hours of training and configuration' },
        { name: 'Daily Management', surfox: '30 minutes to review escalated hot leads', textus: '4+ hours of manual conversation handling' },
        { name: 'Message Writing', surfox: 'AI writes all messages automatically', textus: 'Your team writes every single message' },
        { name: 'Lead Handoff', surfox: 'AI hands off to human at optimal time with context', textus: 'Manual handoff process only' },
        { name: 'Spam Prevention', surfox: 'AI creates natural variants to avoid detection', textus: 'High risk of spam flagging with volume' }
      ]
    },
    {
      category: 'Business Value',
      icon: DollarSign,
      color: 'green',
      features: [
        { name: 'Pricing Model', surfox: 'All-inclusive $197/month, predictable costs', textus: '$500+ base with hidden fees and limits' },
        { name: 'Staff Requirements', surfox: 'No dedicated messaging staff needed', textus: 'Requires full-time manual management' },
        { name: 'ROI Tracking', surfox: 'Full conversion tracking from lead to close', textus: 'Basic message delivery metrics only' },
        { name: 'Scalability', surfox: 'AI scales conversations without adding staff', textus: 'More leads = more manual work required' },
        { name: 'Total Cost of Ownership', surfox: '$197/month all-inclusive', textus: '$2,000+/month including labor costs' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white overflow-hidden">

      {/* Mobile Navigation Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-xl border-b border-purple-500/30">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            SurFox vs TextUs
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
                  <a href="/compare/surfox-vs-launch-control" onClick={handleMenuItemClick} className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
                    vs Launch Control
                  </a>
                  <a href="/compare/surfox-vs-smarter-contact" onClick={handleMenuItemClick} className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
                    vs Smarter Contact
                  </a>
                  <a href="/compare/surfox-vs-textus" onClick={handleMenuItemClick} className="block px-4 py-2 text-base text-purple-200 bg-purple-500/30 hover:text-white hover:bg-purple-500/40 rounded-lg transition-all border border-purple-400/30">
                    vs TextUs (Current)
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
                  <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-gray-400">TextUs</div>
                  <div className="text-xs md:text-sm text-gray-500">Manual Messaging</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                90% Cost Savings
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Better Results
              </span>
            </h1>
            
            <div className="text-lg md:text-2xl text-purple-200 space-y-4 mb-8">
              <p><strong className="text-white">TextUs charges $500+ for basic messaging that requires manual work.</strong></p>
              <p><strong className="text-cyan-400">SurFox delivers AI-powered conversations for $197 that work automatically.</strong></p>
              <p className="text-base md:text-lg text-gray-300">
                Less cost. Less work. More qualified appointments.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12">
              <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-base md:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  Stop Paying More for Less
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <a href="#demo" className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-500/50 rounded-2xl font-bold text-base md:text-lg backdrop-blur-sm hover:bg-gray-500/20 transition-all duration-300">
                <Play className="mr-2 w-4 h-4 md:w-5 md:h-5 inline" />
                See the Difference
              </a>
            </div>

            {/* Cost Comparison Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-4 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">$197</div>
                <div className="text-sm text-purple-200">SurFox All-Inclusive</div>
                <div className="text-xs text-gray-400 mt-2">vs $2,000+ total cost</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-4 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-sm text-purple-200">AI Automation</div>
                <div className="text-xs text-gray-400 mt-2">vs 0% automation</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-4 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">15min</div>
                <div className="text-sm text-purple-200">Setup Time</div>
                <div className="text-xs text-gray-400 mt-2">vs 2-3 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Problem */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-gray-900/50 to-slate-900/50 backdrop-blur-xl border-y border-gray-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Why Teams Are Switching from TextUs
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              TextUs forces your team to manually handle every message. It's expensive, time-consuming, and doesn't scale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* TextUs Problems */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 rounded-2xl border border-gray-500/30 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-600/50 rounded-xl flex items-center justify-center mr-4">
                  <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-300">TextUs</h3>
                  <p className="text-gray-400 text-sm md:text-base">Manual Messaging Platform</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-700/40 border border-gray-500/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-gray-300 mb-2 text-sm md:text-base">The Problem They Solve:</h4>
                  <p className="text-xs md:text-sm text-gray-400">"I need a better inbox for manual messaging"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-gray-300 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Organized messaging interface</span>
                  </div>
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>$500+ monthly cost plus usage fees</span>
                  </div>
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>Your team writes every single message</span>
                  </div>
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>Manual qualification of every lead</span>
                  </div>
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>No AI, learning, or automation</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-gray-700/40 border border-gray-500/30 rounded-xl">
                <p className="text-gray-300 text-xs md:text-sm font-medium">
                  <strong>Result:</strong> Your team spends hours on unqualified leads while hot prospects slip through the cracks
                </p>
              </div>
            </div>

            {/* SurFox Solution */}
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
                  <p className="text-xs md:text-sm text-purple-200">"I need more qualified appointments without spending all day writing messages"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>$197/month all-inclusive pricing</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>AI writes unique messages for each lead</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Automatic qualification and lead scoring</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>AI handles 90% of conversations</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Learns and improves with every conversation</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-purple-800/40 border border-purple-400/30 rounded-xl">
                <p className="text-white text-xs md:text-sm font-medium">
                  <strong>Result:</strong> Your team focuses on closing deals while AI delivers qualified prospects automatically
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
              See exactly why businesses are switching from TextUs to SurFox AI.
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
                      <span className="font-medium text-gray-300 text-xs">TextUs</span>
                    </div>
                    <div className="flex items-start">
                      <X className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-red-300 text-xs">{item.textus}</span>
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
                  <span className="font-medium text-gray-300">TextUs</span>
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
                    <span className="text-red-300 text-sm">{item.textus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Comparison */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-gray-900/50 to-slate-900/50 backdrop-blur-xl border-y border-gray-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              The Hidden Cost Reality
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              SurFox delivers superior AI automation at 90% lower total cost than TextUs + manual labor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Cost Analysis */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 border border-gray-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
              <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-6 flex items-center">
                <DollarSign className="w-5 h-5 md:w-6 md:h-6 mr-3 text-yellow-400" />
                True Monthly Cost Breakdown
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 bg-gray-700/40 border border-gray-500/30 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <div className="font-semibold text-gray-300 text-sm md:text-base">TextUs Reality</div>
                      <div className="text-xs md:text-sm text-gray-400">Platform + staff costs</div>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <div className="text-xl md:text-2xl font-bold text-red-400">$2,000+</div>
                      <div className="text-xs text-gray-400">per month</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-300 space-y-1">
                    <div>• $500+ TextUs subscription</div>
                    <div>• $1,200+ staff time (4+ hrs/day manual work)</div>
                    <div>• $300+ lost opportunity costs</div>
                    <div>• Additional training and onboarding</div>
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
                    <div>• $0 manual message writing</div>
                    <div>• $0 manual qualification time</div>
                    <div>• All features and AI included</div>
                  </div>
                </div>
                
                <div className="text-center p-3 md:p-4 bg-green-900/40 border border-green-400/30 rounded-xl">
                  <div className="text-xl md:text-2xl font-bold text-green-400">90% Cost Savings</div>
                  <div className="text-xs md:text-sm text-green-300">Plus dramatically better results</div>
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
                  <h4 className="font-semibold text-gray-300 mb-2 text-sm md:text-base">What TextUs Requires</h4>
                  <div className="space-y-2 text-xs md:text-sm text-gray-400">
                    <div>• Manual message writing for every prospect</div>
                    <div>• 4+ hours daily conversation management</div>
                    <div>• Manual qualification of every single lead</div>
                    <div>• Constant monitoring and follow-up</div>
                  </div>
                </div>
                
                <div className="p-3 md:p-4 bg-purple-800/40 border border-purple-400/30 rounded-xl">
                  <h4 className="font-semibold text-white mb-2 text-sm md:text-base">What SurFox Delivers</h4>
                  <div className="space-y-2 text-xs md:text-sm text-white">
                    <div>• AI writes unique messages for each prospect</div>
                    <div>• 30 minutes daily to review hot leads</div>
                    <div>• Automatic qualification and lead scoring</div>
                    <div>• 24/7 automated follow-up and nurturing</div>
                    <div>• Hot lead escalation with full context</div>
                  </div>
                </div>
                
                <div className="text-center p-3 md:p-4 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-400/30 rounded-xl">
                  <div className="text-lg md:text-xl font-bold text-white mb-2">800% Productivity Gain</div>
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
                <div className="text-base md:text-lg text-green-200 mb-2">TextUs</div>
                <div className="text-2xl md:text-3xl font-bold text-red-400 mb-2">$2,000+</div>
                <div className="text-xs md:text-sm text-gray-400">Platform + manual labor</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-green-200 mb-2">SurFox</div>
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">$197</div>
                <div className="text-xs md:text-sm text-green-300">All-inclusive AI automation</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-green-200 mb-2">Savings</div>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">$1,800+</div>
                <div className="text-xs md:text-sm text-gray-400">per month + 20+ hours/week</div>
              </div>
            </div>
            <div className="mt-6 p-3 md:p-4 bg-green-900/30 rounded-xl">
              <p className="text-green-200 font-medium text-sm md:text-base">
                <strong className="text-white">Smart choice:</strong> Pay less, work less, get more qualified appointments with AI.
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
            Stop Paying More for Less
          </h2>
          <p className="text-lg md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            TextUs charges $2,000+ for manual work. SurFox delivers AI automation for $197.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            <strong className="text-white">14-day free trial.</strong> No setup fees. See 90% cost savings in your first week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center mb-8">
            <button className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl font-bold text-lg md:text-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center">
                Save $1,800+ Per Month
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
              No credit card required
            </div>
            <div className="flex items-center">
              <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
              15-minute setup
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

export default SurFoxVsTextUs