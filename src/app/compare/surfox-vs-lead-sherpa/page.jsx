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
        { name: 'Skip trace integration', surfox: 'None (future integration possible)', sherpa: 'Built-in PropStack® & skip trace API' },
        { name: 'TCPA/A2P compliance', surfox: 'Must implement compliance per deployment', sherpa: 'Attorney-vetted, human-triggered sending' },
        { name: 'Lead data stacking', surfox: 'CRM-integrated behavior profiles (future)', sherpa: 'Automatic consolidation & tagging' },
        { name: 'Contact intelligence', surfox: 'Psychological profiling and behavior analysis', sherpa: 'Skip trace data and contact consolidation' },
        { name: 'Legal protection', surfox: 'Standard compliance implementation', sherpa: 'Attorney-vetted processes and documentation' }
      ]
    },
    {
      category: 'AI Intelligence',
      icon: Brain,
      color: 'cyan',
      features: [
        { name: 'AI auto-response generation', surfox: 'Fully autonomous, intelligent replies', sherpa: 'Manual or template-based responses' },
        { name: 'Sentiment/intent detection', surfox: 'Real-time NLP engagement analysis', sherpa: 'None - no sentiment analysis' },
        { name: 'Psychological profiling', surfox: 'Lead acuity, urgency, motivation scoring', sherpa: 'Not supported' },
        { name: 'Conversation adaptation', surfox: 'AI-adaptive sequences based on lead psychology', sherpa: 'Manual drip sequences with pause-on-reply' },
        { name: 'Learning capability', surfox: 'AI learns from every conversation', sherpa: 'Static workflows and templates' }
      ]
    },
    {
      category: 'Campaign Management',
      icon: Target,
      color: 'blue',
      features: [
        { name: 'SMS campaigns', surfox: 'AI-adaptive sequences based on lead psychology', sherpa: 'Manual drip sequences with pause-on-reply' },
        { name: 'Auto-reply system', surfox: 'Contextual AI replies in real time', sherpa: 'Quick replies & Prospect Relay forwarding' },
        { name: 'Campaign analytics', surfox: 'Conversational insights, conversion scoring', sherpa: 'Volume, open rates, replies, DNC logs' },
        { name: 'Multi-device access', surfox: 'Web interface with fully automated AI', sherpa: 'Web + mobile forwarding' },
        { name: 'Lead prioritization', surfox: 'AI ranks leads by conversion probability', sherpa: 'Manual tagging and organization' }
      ]
    },
    {
      category: 'Platform Focus',
      icon: Building,
      color: 'green',
      features: [
        { name: 'Core purpose', surfox: 'AI-first SMS engagement to convert cold leads', sherpa: 'Real-estate skip tracing + TCPA-compliant SMS outreach' },
        { name: 'Primary user base', surfox: 'Sales-centric (wholesale, agencies, recruiters)', sherpa: 'Real-estate investors, wholesalers' },
        { name: 'Pricing model', surfox: 'Outcome-tiered pricing based on conversions', sherpa: '$1,299+/mo for 15k msgs + skip trace' },
        { name: 'Multi-channel support', surfox: 'SMS-first with Email/voice roadmap', sherpa: 'SMS + call forwarding' },
        { name: 'Integration approach', surfox: 'Zapier, Make, custom AI workflows', sherpa: 'Zapier, Podio, Twilio/Telnyx' }
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
                  <Search className="w-6 h-6 md:w-8 md:h-8 text-orange-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-gray-400">Lead Sherpa</div>
                  <div className="text-xs md:text-sm text-gray-500">Skip Trace + Compliance</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                AI Psychology
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                vs Skip Tracing
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            
            <div className="text-lg md:text-2xl text-purple-200 space-y-4 mb-8">
              <p>Lead Sherpa dominates skip tracing and compliance for real estate investors.</p>
              <p className="text-base md:text-lg text-gray-300">
                <strong className="text-white">SurFox excels at converting those leads with AI psychology.</strong> 
                See why you might need both approaches for maximum success.
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
                <div className="text-xs text-gray-400 mt-2">vs $1,299+ Lead Sherpa</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-4 md:p-6 text-center shadow-2xl">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">AI</div>
                <div className="text-sm text-purple-200">Psychology Engine</div>
                <div className="text-xs text-gray-400 mt-2">vs manual templates</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-4 md:p-6 text-center shadow-2xl">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-sm text-purple-200">Psychology Dimensions</div>
                <div className="text-xs text-gray-400 mt-2">vs basic data points</div>
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
              Two Essential Parts of the Sales Process
            </h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
              Lead Sherpa excels at finding and reaching prospects legally. SurFox excels at converting them psychologically.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Lead Sherpa Approach */}
            <div className="bg-gradient-to-br from-orange-900/40 to-red-600/40 rounded-2xl border border-orange-400/30 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-600/50 rounded-xl flex items-center justify-center mr-4">
                  <Search className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-orange-300">Lead Sherpa</h3>
                  <p className="text-orange-200 text-sm md:text-base">Data & Compliance Excellence</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-900/40 border border-orange-400/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-orange-300 mb-2 text-sm md:text-base">The Strategy:</h4>
                  <p className="text-xs md:text-sm text-orange-200">"Find every possible contact method legally and reach prospects with compliant messaging"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-orange-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Built-in PropStack® skip tracing</span>
                  </div>
                  <div className="flex items-start text-orange-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Attorney-vetted TCPA compliance</span>
                  </div>
                  <div className="flex items-start text-orange-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Automatic lead data consolidation</span>
                  </div>
                  <div className="flex items-start text-orange-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Real estate focused workflows</span>
                  </div>
                  <div className="flex items-start text-orange-200 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>No psychological conversion intelligence</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-orange-900/40 border border-orange-400/30 rounded-xl">
                <p className="text-orange-200 text-xs md:text-sm font-medium">
                  <strong>Best For:</strong> Real estate investors who need compliant skip tracing and basic outreach automation
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
                  <p className="text-purple-200 text-sm md:text-base">AI Psychology & Conversion</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-purple-300 mb-2 text-sm md:text-base">The Strategy:</h4>
                  <p className="text-xs md:text-sm text-purple-200">"Once you have contacts, use AI psychology to convert them into motivated sellers"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-purple-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>AI reads prospect psychology in real-time</span>
                  </div>
                  <div className="flex items-start text-purple-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Autonomous conversation management</span>
                  </div>
                  <div className="flex items-start text-purple-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Motivation and urgency scoring</span>
                  </div>
                  <div className="flex items-start text-purple-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Hot lead escalation intelligence</span>
                  </div>
                  <div className="flex items-start text-purple-200 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>No built-in skip tracing capabilities</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-purple-900/40 border border-purple-400/30 rounded-xl">
                <p className="text-purple-200 text-xs md:text-sm font-medium">
                  <strong>Best For:</strong> Sales teams who have contacts and want AI to convert them into qualified opportunities
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
              Different Strengths, Different Outcomes
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Same property owner prospect, different platform focuses and conversation approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Lead Sherpa Conversation */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 border border-orange-400/30 rounded-2xl p-4 md:p-6 backdrop-blur-xl">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-orange-600/50 rounded-lg flex items-center justify-center mr-3">
                  <Search className="w-3 h-3 md:w-4 md:h-4 text-orange-400" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-orange-300">Lead Sherpa Approach</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="bg-green-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm border border-green-400/30">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <span className="text-green-300 text-xs">Data Collection Success</span>
                  </div>
                  <p className="text-green-200">✅ Found 4 phone numbers via PropStack®<br/>✅ Verified property ownership<br/>✅ TCPA compliance confirmed</p>
                </div>
                
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                    <span className="text-orange-300 text-xs">Day 1 - Compliant Message</span>
                  </div>
                  <p className="text-gray-200">"Hi [NAME], I'm a local real estate investor. I'd like to make you a fair cash offer on your property at [ADDRESS]. Are you interested in selling?"</p>
                </div>
                
                <div className="text-center text-gray-400 text-xs py-2">
                  ... no response for 5 days ...
                </div>
                
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                    <span className="text-orange-300 text-xs">Day 6 - Follow-up Template</span>
                  </div>
                  <p className="text-gray-200">"Hi [NAME], following up on my offer for [ADDRESS]. We close quickly and pay cash. Still interested?"</p>
                </div>
              </div>
              
              <div className="bg-yellow-900/40 border border-yellow-400/30 rounded-lg p-3 md:p-4 text-center">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-yellow-300 font-medium text-sm md:text-base">Result: Compliant Outreach</p>
                <p className="text-yellow-400 text-xs md:text-sm">Perfect data, legal protection, basic response</p>
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
                <div className="bg-blue-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm border border-blue-400/30">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-blue-300 text-xs">Uses Provided Contact Data</span>
                  </div>
                  <p className="text-blue-200">📱 Takes contact info from your source<br/>🧠 Builds psychological profile<br/>🎯 Optimizes for conversion psychology</p>
                </div>
                
                <div className="bg-purple-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-purple-300 text-xs">Day 1 - AI Psychology Opening</span>
                  </div>
                  <p className="text-purple-200">"Hey Sarah — I buy houses in your neighborhood, but I'm picky. Yours caught my eye because it's exactly what my buyers want. Ever think about selling, or are you staying put?"</p>
                </div>
                
                <div className="bg-emerald-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                    <span className="text-emerald-300 text-xs">Day 2 - Lead Response</span>
                  </div>
                  <p className="text-emerald-200">"Maybe... depends on the offer. What are you thinking?"</p>
                </div>
                
                <div className="bg-purple-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-purple-300 text-xs">AI Psychology Response</span>
                  </div>
                  <p className="text-purple-200">"Fair question, Sarah. I don't lowball people — it's bad for business. What would make you seriously consider selling? Is it the price, or is there something else motivating you?"</p>
                </div>
              </div>
              
              <div className="bg-emerald-900/40 border border-emerald-400/30 rounded-lg p-3 md:p-4 text-center">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 mx-auto mb-2" />
                <p className="text-emerald-300 font-medium text-sm md:text-base">Result: Engaged Conversation</p>
                <p className="text-emerald-400 text-xs md:text-sm">AI flags as motivated seller, psychology understood</p>
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
              See exactly where each platform excels and how they complement different parts of the sales process.
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
                      {item.surfox.includes('None') || item.surfox.includes('Must implement') ? 
                        <X className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" /> :
                        <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      }
                      <span className={`text-xs ${item.surfox.includes('None') || item.surfox.includes('Must implement') ? 'text-red-300' : 'text-green-300'}`}>{item.surfox}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/40 border border-gray-600/30 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-orange-500 rounded mr-2"></div>
                      <span className="font-medium text-gray-300 text-xs">Lead Sherpa</span>
                    </div>
                    <div className="flex items-start">
                      {item.sherpa.includes('Manual') || item.sherpa.includes('None') || item.sherpa.includes('Not supported') ? 
                        <X className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" /> :
                        <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      }
                      <span className={`text-xs ${item.sherpa.includes('Manual') || item.sherpa.includes('None') || item.sherpa.includes('Not supported') ? 'text-red-300' : 'text-green-300'}`}>{item.sherpa}</span>
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
                    {item.surfox.includes('None') || item.surfox.includes('Must implement') ? 
                      <X className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" /> :
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    }
                    <span className={`font-medium text-sm ${item.surfox.includes('None') || item.surfox.includes('Must implement') ? 'text-red-300' : 'text-green-300'}`}>{item.surfox}</span>
                  </div>
                </div>
                <div className="col-span-3 p-6 border-l border-gray-700/50">
                  <div className="flex items-start">
                    {item.sherpa.includes('Manual') || item.sherpa.includes('None') || item.sherpa.includes('Not supported') ? 
                      <X className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" /> :
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    }
                    <span className={`text-sm ${item.sherpa.includes('Manual') || item.sherpa.includes('None') || item.sherpa.includes('Not supported') ? 'text-red-300' : 'text-green-300'}`}>{item.sherpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Choose What */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              The Strategic Decision
            </h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
              Both platforms excel in different areas. Here's how to choose based on your primary business challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Choose Lead Sherpa When */}
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-orange-400/30 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
              <h3 className="text-xl md:text-2xl font-bold text-orange-300 mb-6 flex items-center">
                <Search className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                Choose Lead Sherpa When
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 bg-orange-900/40 border border-orange-400/30 rounded-xl">
                  <div className="font-semibold text-orange-300 mb-2 text-sm md:text-base">Your Primary Challenge:</div>
                  <div className="text-xs md:text-sm text-orange-200">Finding contact info and staying legally compliant</div>
                </div>
                
                <div className="space-y-3 text-xs md:text-sm text-orange-200">
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You're in real estate investing and need skip tracing</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />TCPA compliance is your biggest concern</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You need data consolidation and contact management</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />Your team handles conversations manually anyway</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />Volume and legal protection matter most</div>
                </div>
                
                <div className="p-3 md:p-4 bg-orange-900/30 rounded-xl">
                  <div className="text-orange-200 font-medium text-xs md:text-sm">
                    <strong>Perfect For:</strong> Real estate investors who need compliant lead acquisition and basic outreach
                  </div>
                </div>
              </div>
            </div>

            {/* Choose SurFox When */}
            <div className="bg-gradient-to-br from-purple-900/60 to-cyan-900/60 border-2 border-purple-400/50 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-lg shadow-purple-500/25">
              <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-6 flex items-center">
                <Brain className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                Choose SurFox When
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 bg-purple-900/40 border border-purple-400/30 rounded-xl">
                  <div className="font-semibold text-purple-300 mb-2 text-sm md:text-base">Your Primary Challenge:</div>
                  <div className="text-xs md:text-sm text-purple-200">Converting contacts into qualified, motivated prospects</div>
                </div>
                
                <div className="space-y-3 text-xs md:text-sm text-purple-200">
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You already have contact sources (bought lists, referrals, etc.)</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />Your challenge is low response rates and poor qualification</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You want AI to handle conversations intelligently</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />Psychology-based conversion matters more than data acquisition</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You measure success by qualified leads, not contact volume</div>
                </div>
                
                <div className="p-3 md:p-4 bg-purple-900/30 rounded-xl">
                  <div className="text-purple-200 font-medium text-xs md:text-sm">
                    <strong>Perfect For:</strong> Sales teams who have contacts but need AI psychology to convert them
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complementary Approach */}
          <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-400/30 rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl">
            <h3 className="text-xl md:text-2xl font-bold text-green-300 mb-6">The Powerful Combination</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-base md:text-lg text-green-200 mb-2">Step 1: Lead Sherpa</div>
                <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">Find Contacts</div>
                <div className="text-xs md:text-sm text-gray-400">Compliant skip tracing</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-green-200 mb-2">Step 2: SurFox</div>
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">Convert Psychology</div>
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
                <strong className="text-white">Pro tip:</strong> Many successful teams use Lead Sherpa for compliant data acquisition, then SurFox for AI conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="relative py-16 md:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Ready for AI Conversion?
          </h2>
          <p className="text-lg md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            If you have contacts but need better conversion rates, SurFox's AI psychology approach is your solution.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            <strong className="text-white">14-day free trial.</strong> No setup fees. See how AI psychology converts your existing contacts.
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
              <Brain className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
              AI starts learning immediately
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