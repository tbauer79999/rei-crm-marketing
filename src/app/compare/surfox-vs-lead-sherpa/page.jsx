'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, MessageSquare, Clock, Sparkles, AlertCircle, Star, Crown, DollarSign, Workflow, Bot, User, FileText, Settings, Timer, Phone, Mail, Eye, Lightbulb, Layers, Activity, Search, Building, MapPin, Scale } from 'lucide-react'

const SurFoxVsLeadSherpa = () => {
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
      category: 'Data & Compliance',
      icon: Shield,
      color: 'purple',
      features: [
        { name: 'Contact Data Acquisition', surfox: 'Integrates with your existing sources', sherpa: 'Built-in PropStack® skip tracing' },
        { name: 'TCPA/A2P Compliance', surfox: 'Standard compliance implementation', sherpa: 'Attorney-vetted compliance processes' },
        { name: 'Lead Data Management', surfox: 'Smart CRM integration with behavior profiles', sherpa: 'Automatic data consolidation & tagging' },
        { name: 'Contact Intelligence', surfox: 'Advanced psychological & behavioral analysis', sherpa: 'Skip trace data and contact verification' },
        { name: 'Legal Protection', surfox: 'Industry-standard compliance tools', sherpa: 'Attorney-backed legal documentation' }
      ]
    },
    {
      category: 'Conversion Power',
      icon: Brain,
      color: 'cyan',
      features: [
        { name: 'Response Generation', surfox: 'Fully autonomous AI replies that adapt to each lead', sherpa: 'Manual responses or basic templates' },
        { name: 'Lead Intelligence', surfox: 'Real-time NLP analysis of motivation & urgency', sherpa: 'No sentiment or motivation analysis' },
        { name: 'Conversation Quality', surfox: 'AI learns and adapts to maximize conversions', sherpa: 'Static drip sequences with manual management' },
        { name: 'Hot Lead Detection', surfox: 'AI scores and prioritizes high-intent prospects', sherpa: 'Manual tagging and organization only' },
        { name: 'Learning Capability', surfox: 'Gets smarter with every conversation', sherpa: 'No learning - same approach every time' }
      ]
    },
    {
      category: 'Campaign Results',
      icon: Target,
      color: 'blue',
      features: [
        { name: 'SMS Campaigns', surfox: 'AI-adaptive sequences that respond to lead behavior', sherpa: 'Standard drip sequences with pause-on-reply' },
        { name: 'Real-Time Responses', surfox: 'Contextual AI replies 24/7 without human input', sherpa: 'Quick replies with manual forwarding system' },
        { name: 'Performance Analytics', surfox: 'Conversion insights, lead scoring, ROI tracking', sherpa: 'Basic metrics: volume, opens, replies, DNC' },
        { name: 'Lead Qualification', surfox: 'AI identifies and escalates motivated sellers', sherpa: 'Manual review and qualification process' },
        { name: 'Conversion Optimization', surfox: 'Continuous AI improvement of messaging', sherpa: 'Manual A/B testing and template updates' }
      ]
    },
    {
      category: 'Business Focus',
      icon: Building,
      color: 'green',
      features: [
        { name: 'Primary Purpose', surfox: 'Convert cold leads into qualified appointments', sherpa: 'Compliant lead acquisition and basic outreach' },
        { name: 'Target Market', surfox: 'Any sales team with leads to convert', sherpa: 'Real estate investors and wholesalers' },
        { name: 'Pricing Strategy', surfox: 'Performance-based: pay for results, not volume', sherpa: '$1,299+/month plus per-message costs' },
        { name: 'Channel Support', surfox: 'SMS-first with email/voice expansion planned', sherpa: 'SMS messaging with call forwarding' },
        { name: 'Integration Approach', surfox: 'Zapier, Make, API, custom AI workflows', sherpa: 'Zapier, Podio, Twilio/Telnyx carriers' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white overflow-hidden">

      {/* Mobile Navigation Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-xl border-b border-purple-500/30">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            SurFox vs Lead Sherpa
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
                  <a href="/compare/surfox-vs-textus" onClick={handleMenuItemClick} className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
                    vs Textus
                  </a>
                  <a href="/compare/surfox-vs-skipio" onClick={handleMenuItemClick} className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
                    vs Skipio
                  </a>
                  <a href="/compare/surfox-vs-lead-sherpa" onClick={handleMenuItemClick} className="block px-4 py-2 text-base text-purple-200 bg-purple-500/30 hover:text-white hover:bg-purple-500/40 rounded-lg transition-all border border-purple-400/30">
                    vs Lead Sherpa (Current)
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
                  <Search className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-gray-400">Lead Sherpa</div>
                  <div className="text-xs md:text-sm text-gray-500">Skip Trace + Compliance</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                3x Higher Close Rates
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                vs Manual Messaging
              </span>
            </h1>
            
            <div className="text-lg md:text-2xl text-purple-200 space-y-4 mb-8">
              <p><strong className="text-white">Lead Sherpa excels at finding contacts legally.</strong></p>
              <p><strong className="text-cyan-400">SurFox excels at converting those contacts into sales.</strong></p>
              <p className="text-base md:text-lg text-gray-300">
                One gets you compliant data. The other gets you qualified appointments.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12">
              <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-base md:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  Start Converting More Leads
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <a href="#demo" className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-500/50 rounded-2xl font-bold text-base md:text-lg backdrop-blur-sm hover:bg-gray-500/20 transition-all duration-300">
                <Play className="mr-2 w-4 h-4 md:w-5 md:h-5 inline" />
                See the Difference
              </a>
            </div>

            {/* Key Stats Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-4 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">$197</div>
                <div className="text-sm text-purple-200">SurFox Starting Price</div>
                <div className="text-xs text-gray-400 mt-2">vs $1,299+ Lead Sherpa</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-4 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-sm text-purple-200">AI Conversation</div>
                <div className="text-xs text-gray-400 mt-2">vs manual templates</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-4 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">3x</div>
                <div className="text-sm text-purple-200">More Appointments</div>
                <div className="text-xs text-gray-400 mt-2">vs basic messaging</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Comparison */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-gray-900/50 to-slate-900/50 backdrop-blur-xl border-y border-gray-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Two Different Business Problems
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Lead Sherpa solves the "how do I find contacts legally?" problem. SurFox solves the "how do I convert contacts into sales?" problem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Lead Sherpa Approach */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 rounded-2xl border border-gray-500/30 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-600/50 rounded-xl flex items-center justify-center mr-4">
                  <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-300">Lead Sherpa</h3>
                  <p className="text-gray-400 text-sm md:text-base">Data Acquisition Excellence</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-700/40 border border-gray-500/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-gray-300 mb-2 text-sm md:text-base">The Problem They Solve:</h4>
                  <p className="text-xs md:text-sm text-gray-400">"I need to find property owners legally and stay TCPA compliant"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-gray-300 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Built-in PropStack® skip tracing</span>
                  </div>
                  <div className="flex items-start text-gray-300 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Attorney-vetted TCPA compliance</span>
                  </div>
                  <div className="flex items-start text-gray-300 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Automatic lead data consolidation</span>
                  </div>
                  <div className="flex items-start text-gray-300 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Real estate focused workflows</span>
                  </div>
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>Basic templated messaging only</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-gray-700/40 border border-gray-500/30 rounded-xl">
                <p className="text-gray-300 text-xs md:text-sm font-medium">
                  <strong>Best For:</strong> Real estate investors who need compliant contact acquisition
                </p>
              </div>
            </div>

            {/* SurFox Approach */}
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
                  <p className="text-xs md:text-sm text-purple-200">"I have contacts but my response rates suck and I'm not closing enough deals"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>AI reads and responds to prospects 24/7</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Automatically identifies motivated sellers</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Escalates hot leads immediately</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Learns and improves with each conversation</span>
                  </div>
                  <div className="flex items-start text-purple-300 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-yellow-400 flex-shrink-0" />
                    <span>Requires contact data from external sources</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-purple-800/40 border border-purple-400/30 rounded-xl">
                <p className="text-white text-xs md:text-sm font-medium">
                  <strong>Best For:</strong> Sales teams who have contacts but want 3x more qualified appointments
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
              Same Lead, Different Results
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Both platforms reach the same property owner, but see how the conversation approaches and outcomes differ.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Lead Sherpa Conversation */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 border border-gray-500/30 rounded-2xl p-4 md:p-6 backdrop-blur-xl">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-600/50 rounded-lg flex items-center justify-center mr-3">
                  <Search className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-300">Lead Sherpa Approach</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="bg-green-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm border border-green-400/30">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-green-300 text-xs">Data Success</span>
                  </div>
                  <p className="text-green-200">✅ Found 4 phone numbers via PropStack®<br/>✅ Verified property ownership<br/>✅ TCPA compliance confirmed</p>
                </div>
                
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-gray-300 text-xs">Day 1 - Template Message</span>
                  </div>
                  <p className="text-gray-200">"Hi [NAME], I'm a local real estate investor. I'd like to make you a fair cash offer on your property at [ADDRESS]. Are you interested in selling?"</p>
                </div>
                
                <div className="text-center text-gray-400 text-xs py-2">
                  ... no response for 5 days ...
                </div>
                
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-gray-300 text-xs">Day 6 - Follow-up Template</span>
                  </div>
                  <p className="text-gray-200">"Hi [NAME], following up on my offer for [ADDRESS]. We close quickly and pay cash. Still interested?"</p>
                </div>
              </div>
              
              <div className="bg-yellow-900/40 border border-yellow-400/30 rounded-lg p-3 md:p-4 text-center">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-yellow-300 font-medium text-sm md:text-base">Result: Compliant Outreach</p>
                <p className="text-yellow-200 text-xs md:text-sm">Legal protection ✅, low response rate</p>
              </div>
            </div>

            {/* SurFox AI Conversation */}
            <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 border-2 border-purple-400/50 rounded-2xl p-4 md:p-6 backdrop-blur-xl shadow-lg shadow-purple-500/25">
              <div className="flex items-center mb-6">
                <img src="/logo.png" alt="SurFox" className="w-6 h-6 md:w-8 md:h-8 mr-3" />
                <h3 className="text-base md:text-lg font-semibold text-white">SurFox AI Approach</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="bg-blue-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm border border-blue-400/30">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-blue-300 text-xs">Uses Your Contact Data</span>
                  </div>
                  <p className="text-blue-200">📱 Takes contact from your CRM/lists<br/>🧠 Builds psychological profile<br/>🎯 Optimizes messaging for conversion</p>
                </div>
                
                <div className="bg-purple-800/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-purple-300 text-xs">Day 1 - AI Smart Opening</span>
                  </div>
                  <p className="text-white">"Hey Sarah — I buy houses in your neighborhood, but I'm picky. Yours caught my eye because it's exactly what my buyers want. Ever think about selling, or are you staying put?"</p>
                </div>
                
                <div className="bg-emerald-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                    <span className="text-emerald-300 text-xs">Day 2 - Lead Responds!</span>
                  </div>
                  <p className="text-emerald-200">"Maybe... depends on the offer. What are you thinking?"</p>
                </div>
                
                <div className="bg-purple-800/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-purple-300 text-xs">AI Qualification Response</span>
                  </div>
                  <p className="text-white">"Fair question, Sarah. I don't lowball people — it's bad for business. What would make you seriously consider selling? Is it the price, or is there something else motivating you?"</p>
                </div>
              </div>
              
              <div className="bg-emerald-900/40 border border-emerald-400/30 rounded-lg p-3 md:p-4 text-center">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 mx-auto mb-2" />
                <p className="text-emerald-300 font-medium text-sm md:text-base">Result: Qualified Lead</p>
                <p className="text-emerald-200 text-xs md:text-sm">AI flags as motivated seller, call scheduled</p>
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
              See exactly where each platform excels and how they solve different parts of the sales process.
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
                      {item.surfox.includes('Standard compliance') || item.surfox.includes('Integrates') || item.surfox.includes('Requires') ? 
                        <AlertCircle className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /> :
                        <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      }
                      <span className={`text-xs ${item.surfox.includes('Standard compliance') || item.surfox.includes('Integrates') || item.surfox.includes('Requires') ? 'text-yellow-300' : 'text-green-300'}`}>{item.surfox}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/40 border border-gray-600/30 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-gray-500 rounded mr-2"></div>
                      <span className="font-medium text-gray-300 text-xs">Lead Sherpa</span>
                    </div>
                    <div className="flex items-start">
                      {item.sherpa.includes('Manual') || item.sherpa.includes('No') || item.sherpa.includes('Basic') || item.sherpa.includes('Static') ? 
                        <X className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" /> :
                        <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      }
                      <span className={`text-xs ${item.sherpa.includes('Manual') || item.sherpa.includes('No') || item.sherpa.includes('Basic') || item.sherpa.includes('Static') ? 'text-red-300' : 'text-green-300'}`}>{item.sherpa}</span>
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
                  <span className="font-medium text-gray-300">Lead Sherpa</span>
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
                    {item.surfox.includes('Standard compliance') || item.surfox.includes('Integrates') || item.surfox.includes('Requires') ? 
                      <AlertCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" /> :
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    }
                    <span className={`font-medium text-sm ${item.surfox.includes('Standard compliance') || item.surfox.includes('Integrates') || item.surfox.includes('Requires') ? 'text-yellow-300' : 'text-green-300'}`}>{item.surfox}</span>
                  </div>
                </div>
                <div className="col-span-3 p-6 border-l border-gray-700/50">
                  <div className="flex items-start">
                    {item.sherpa.includes('Manual') || item.sherpa.includes('No') || item.sherpa.includes('Basic') || item.sherpa.includes('Static') ? 
                      <X className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" /> :
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    }
                    <span className={`text-sm ${item.sherpa.includes('Manual') || item.sherpa.includes('No') || item.sherpa.includes('Basic') || item.sherpa.includes('Static') ? 'text-red-300' : 'text-green-300'}`}>{item.sherpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Choose What */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-gray-900/50 to-slate-900/50 backdrop-blur-xl border-y border-gray-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Which Platform Is Right for You?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Both solve real problems, but different ones. Here's how to decide based on your biggest challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Choose Lead Sherpa When */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 border border-gray-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
              <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-6 flex items-center">
                <Search className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                Choose Lead Sherpa When
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 bg-gray-700/40 border border-gray-500/30 rounded-xl">
                  <div className="font-semibold text-gray-300 mb-2 text-sm md:text-base">Your Primary Goal:</div>
                  <div className="text-xs md:text-sm text-gray-400">Get more contacts legally and stay compliant</div>
                </div>
                
                <div className="space-y-3 text-xs md:text-sm text-gray-300">
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You're in real estate investing</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />TCPA compliance keeps you up at night</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You need to find property owner contact info</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />Your team manually handles conversations anyway</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />Volume and legal protection matter most</div>
                </div>
                
                <div className="p-3 md:p-4 bg-gray-700/30 rounded-xl">
                  <div className="text-gray-300 font-medium text-xs md:text-sm">
                    <strong>Perfect For:</strong> Real estate teams who need compliant data acquisition
                  </div>
                </div>
              </div>
            </div>

            {/* Choose SurFox When */}
            <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 border-2 border-purple-400/50 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-lg shadow-purple-500/25">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                <img src="/logo.png" alt="SurFox" className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                Choose SurFox When
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 bg-purple-800/40 border border-purple-400/30 rounded-xl">
                  <div className="font-semibold text-white mb-2 text-sm md:text-base">Your Primary Goal:</div>
                  <div className="text-xs md:text-sm text-purple-200">Get more qualified appointments and close more deals</div>
                </div>
                
                <div className="space-y-3 text-xs md:text-sm text-white">
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You already have contact sources (lists, referrals, etc.)</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />Your response rates are terrible</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You want more qualified appointments, not just responses</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You'd rather AI handle conversations 24/7</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You measure success by deals closed, not messages sent</div>
                </div>
                
                <div className="p-3 md:p-4 bg-purple-800/30 rounded-xl">
                  <div className="text-white font-medium text-xs md:text-sm">
                    <strong>Perfect For:</strong> Sales teams who have contacts but want 3x more conversions
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complementary Approach */}
          <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-400/30 rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl">
            <h3 className="text-xl md:text-2xl font-bold text-green-300 mb-6">The Ultimate Combination</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-base md:text-lg text-green-200 mb-2">Step 1: Lead Sherpa</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-400 mb-2">Find Contacts</div>
                <div className="text-xs md:text-sm text-gray-400">Compliant skip tracing</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-green-200 mb-2">Step 2: SurFox</div>
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">Convert to Sales</div>
                <div className="text-xs md:text-sm text-green-300">AI-powered conversations</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-green-200 mb-2">Result</div>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">Maximum ROI</div>
                <div className="text-xs md:text-sm text-gray-400">Best of both worlds</div>
              </div>
            </div>
            <div className="mt-6 p-3 md:p-4 bg-green-900/30 rounded-xl">
              <p className="text-green-200 font-medium text-sm md:text-base">
                <strong className="text-white">Smart strategy:</strong> Many successful teams use Lead Sherpa for compliant data, then SurFox for AI conversion.
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
            Ready to 3x Your Close Rates?
          </h2>
          <p className="text-lg md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            If you have contacts but want better conversion rates, SurFox's AI will get you there.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            <strong className="text-white">14-day free trial.</strong> No setup fees. See how AI converts your existing contacts into qualified appointments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center mb-8">
            <button className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl font-bold text-lg md:text-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center">
                Start Converting More Leads
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
              <Brain className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
              AI starts working immediately
            </div>
            <div className="flex items-center">
              <Award className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
              Works with your existing contacts
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SurFoxVsLeadSherpa