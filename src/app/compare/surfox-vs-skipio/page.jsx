'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, MessageSquare, Clock, Sparkles, AlertCircle, Star, Crown, DollarSign, Workflow, Bot, User, FileText, Settings, Timer, Phone, Mail, Eye, Lightbulb, Layers, Activity, Calendar, Building, Headphones } from 'lucide-react'

const SurFoxVsSkipio = () => {
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
      category: 'AI Intelligence',
      icon: Brain,
      color: 'purple',
      features: [
        { name: 'AI message generation', surfox: 'Fully autonomous, real-time outbound & reply messages', skipio: 'Optional drafts with manual review required' },
        { name: 'Conversation understanding', surfox: 'Context-aware AI that understands conversation flow', skipio: 'Basic rule triggers (Away Mode, etc.) but cannot understand content' },
        { name: 'Learning capability', surfox: 'AI Knowledge Uploads (SOPs, documents) - learns your company', skipio: 'No knowledge base or learning capability' },
        { name: 'Sentiment detection', surfox: 'Advanced NLP with emotional recognition', skipio: 'No sentiment analysis or emotional understanding' },
        { name: 'Conversation memory', surfox: 'Simulated memory from prior conversations', skipio: 'No conversation memory between interactions' }
      ]
    },
    {
      category: 'Lead Intelligence',
      icon: Target,
      color: 'cyan',
      features: [
        { name: 'Lead behavior tracking', surfox: 'Psychological scoring (intent, motivation, urgency)', skipio: 'Basic reply tagging & campaign history only' },
        { name: 'Hot lead detection', surfox: 'AI flags & routes based on psychological scoring', skipio: 'No escalation logic or hot lead identification' },
        { name: 'Lead qualification', surfox: 'Automated psychology-based qualification', skipio: 'Manual qualification based on basic interactions' },
        { name: 'Buying signal recognition', surfox: 'AI reads psychological readiness signals', skipio: 'No buying signal detection capability' },
        { name: 'Lead prioritization', surfox: 'AI ranks leads by conversion probability', skipio: 'Manual prioritization only' }
      ]
    },
    {
      category: 'Automation Logic',
      icon: Zap,
      color: 'blue',
      features: [
        { name: 'Campaign flow logic', surfox: 'AI-driven real-time conversation flows that adapt mid-conversation', skipio: 'Rule-based campaigns & SMART drips in linear sequences' },
        { name: 'Follow-up optimization', surfox: 'AI logic based on lead status and behavior patterns', skipio: 'Manual step building with fixed scheduling' },
        { name: 'Response timing', surfox: 'AI pacing and delay logic based on psychology', skipio: 'Fixed drips, delays, and manual pausing' },
        { name: 'Campaign adaptation', surfox: 'Dynamic adjustment based on conversation outcomes', skipio: 'Static campaigns that run as programmed' },
        { name: 'Escalation workflows', surfox: 'Intelligent escalation when prospects show buying intent', skipio: 'No automated escalation capabilities' }
      ]
    },
    {
      category: 'Platform Focus',
      icon: Building,
      color: 'green',
      features: [
        { name: 'Core purpose', surfox: 'Turn cold leads into hot ones with AI - outcome focused', skipio: 'SMS follow-up & appointment setting - communication focused' },
        { name: 'Industry specialization', surfox: 'Sales orgs, wholesalers, recruiters, agencies', skipio: 'Small business, coaches, medical, general services' },
        { name: 'Multi-channel support', surfox: 'SMS-first with Email/Voice roadmap', skipio: 'SMS, call forwarding, webchat' },
        { name: 'Pricing philosophy', surfox: 'Outcome-based pricing tiers (conversion-focused ROI)', skipio: '$99–$299/mo based on usage and features' },
        { name: 'Success metrics', surfox: 'Lead conversion and deal closure rates', skipio: 'Communication efficiency and appointment booking' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white overflow-hidden">

      {/* Mobile Navigation Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-xl border-b border-purple-500/30">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            SurFox vs Skipio
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
                  <a href="/compare/surfox-vs-skipio" onClick={handleMenuItemClick} className="block px-4 py-2 text-base text-purple-200 bg-purple-500/30 hover:text-white hover:bg-purple-500/40 rounded-lg transition-all border border-purple-400/30">
                    vs Skipio (Current)
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
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600/50 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-gray-400">Skipio</div>
                  <div className="text-xs md:text-sm text-gray-500">SMS Follow-up & Scheduling</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                AI That
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Converts Leads
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                vs Appointment Setting
              </span>
            </h1>
            
            <div className="text-lg md:text-2xl text-purple-200 space-y-4 mb-8">
              <p>Skipio excels at scheduling appointments and basic follow-ups.</p>
              <p className="text-base md:text-lg text-gray-300">
                <strong className="text-white">SurFox uses AI to understand psychology and convert cold leads into hot prospects.</strong> 
                See why outcome-focused AI beats appointment-focused automation.
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
                <div className="text-xs text-gray-400 mt-2">vs $99+ Skipio</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-4 md:p-6 text-center shadow-2xl">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-sm text-purple-200">Psychology Dimensions</div>
                <div className="text-xs text-gray-400 mt-2">vs 0 in Skipio</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-4 md:p-6 text-center shadow-2xl">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">AI</div>
                <div className="text-sm text-purple-200">Lead Conversion</div>
                <div className="text-xs text-gray-400 mt-2">vs appointment booking</div>
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
              Two Different Goals
            </h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
              Skipio optimizes for scheduling efficiency. SurFox optimizes for lead conversion psychology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Skipio Approach */}
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-600/40 rounded-2xl border border-blue-400/30 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600/50 rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-300">Skipio</h3>
                  <p className="text-blue-200 text-sm md:text-base">Appointment & Follow-up Focused</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-900/40 border border-blue-400/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-blue-300 mb-2 text-sm md:text-base">The Strategy:</h4>
                  <p className="text-xs md:text-sm text-blue-200">"Automate follow-ups and appointment setting with rule-based workflows"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-blue-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Excellent for appointment scheduling</span>
                  </div>
                  <div className="flex items-start text-blue-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Strong multi-channel communication</span>
                  </div>
                  <div className="flex items-start text-blue-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>SMART drips and campaign sequencing</span>
                  </div>
                  <div className="flex items-start text-blue-200 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>No psychological understanding</span>
                  </div>
                  <div className="flex items-start text-blue-200 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>Manual message drafts and review</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-blue-900/40 border border-blue-400/30 rounded-xl">
                <p className="text-blue-200 text-xs md:text-sm font-medium">
                  <strong>Best For:</strong> Service businesses focused on booking appointments and basic follow-up automation
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
                  <p className="text-purple-200 text-sm md:text-base">AI Psychology & Conversion Focused</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-purple-300 mb-2 text-sm md:text-base">The Strategy:</h4>
                  <p className="text-xs md:text-sm text-purple-200">"Use AI psychology to convert cold leads into hot prospects ready to buy"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-purple-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>AI understands buyer psychology</span>
                  </div>
                  <div className="flex items-start text-purple-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Autonomous conversation management</span>
                  </div>
                  <div className="flex items-start text-purple-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Real-time lead qualification scoring</span>
                  </div>
                  <div className="flex items-start text-purple-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Hot lead escalation intelligence</span>
                  </div>
                  <div className="flex items-start text-purple-200 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Conversation memory and learning</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-purple-900/40 border border-purple-400/30 rounded-xl">
                <p className="text-purple-200 text-xs md:text-sm font-medium">
                  <strong>Best For:</strong> Sales organizations focused on converting cold prospects into qualified buyers
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
              Same cold real estate lead, completely different approaches and outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Skipio Conversation */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 border border-blue-400/30 rounded-2xl p-4 md:p-6 backdrop-blur-xl">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600/50 rounded-lg flex items-center justify-center mr-3">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-blue-300">Skipio Approach</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-blue-300 text-xs">Day 1 - Rule-Based Message</span>
                  </div>
                  <p className="text-gray-200">"Hi [NAME], I'd love to schedule a quick call to discuss your home selling needs. When works better for you - mornings or afternoons?"</p>
                </div>
                
                <div className="text-center text-gray-400 text-xs py-2">
                  ... no response for 3 days ...
                </div>
                
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-blue-300 text-xs">Day 4 - SMART Drip Follow-up</span>
                  </div>
                  <p className="text-gray-200">"Hi [NAME], just following up on scheduling that call. I have some slots open this week. Let me know what works!"</p>
                </div>
                
                <div className="text-center text-gray-400 text-xs py-2">
                  ... no response for 7 days ...
                </div>
                
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-blue-300 text-xs">Day 11 - Final Follow-up</span>
                  </div>
                  <p className="text-gray-200">"Hi [NAME], haven't heard back. Should I remove you from my list or try again next month?"</p>
                </div>
              </div>
              
              <div className="bg-yellow-900/40 border border-yellow-400/30 rounded-lg p-3 md:p-4 text-center">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-yellow-300 font-medium text-sm md:text-base">Result: No Appointment</p>
                <p className="text-yellow-400 text-xs md:text-sm">Focus on scheduling, not psychology</p>
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
                    <span className="text-purple-300 text-xs">Day 1 - AI Psychology Opening</span>
                  </div>
                  <p className="text-purple-200">"Hey Sarah — noticed you filled out that home valuation form. Most folks do that when they're just curious, but occasionally someone's actually ready to move. Which camp are you in?"</p>
                </div>
                
                <div className="text-center text-gray-400 text-xs py-2">
                  ... AI detects no immediate response, adjusts timing ...
                </div>
                
                <div className="bg-purple-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-purple-300 text-xs">Day 4 - AI Psychological Reframe</span>
                  </div>
                  <p className="text-purple-200">"Sarah, totally get it if you're not ready. Real estate can feel overwhelming. But I'm curious — what would need to happen for selling to make sense for you?"</p>
                </div>
                
                <div className="bg-emerald-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                    <span className="text-emerald-300 text-xs">Day 5 - Lead Response</span>
                  </div>
                  <p className="text-emerald-200">"Honestly? We're thinking about it but worried about timing and market conditions."</p>
                </div>
                
                <div className="bg-purple-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-purple-300 text-xs">AI Psychology Response</span>
                  </div>
                  <p className="text-purple-200">"That's smart thinking, Sarah. Timing matters more than most people realize. What's driving the 'thinking about it' part? New job, family changes, or just ready for something different?"</p>
                </div>
              </div>
              
              <div className="bg-emerald-900/40 border border-emerald-400/30 rounded-lg p-3 md:p-4 text-center">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 mx-auto mb-2" />
                <p className="text-emerald-300 font-medium text-sm md:text-base">Result: Hot Lead Engaged!</p>
                <p className="text-emerald-400 text-xs md:text-sm">AI flags as ready for sales conversation</p>
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
              See exactly where SurFox's AI psychology approach differs from Skipio's appointment-focused automation.
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
                      <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                      <span className="font-medium text-gray-300 text-xs">Skipio</span>
                    </div>
                    <div className="flex items-start">
                      <X className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-yellow-300 text-xs">{item.skipio}</span>
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
                  <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
                  <span className="font-medium text-gray-300">Skipio</span>
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
                    <X className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-yellow-300 text-sm">{item.skipio}</span>
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
              When to Choose What
            </h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
              Both platforms serve different needs. Here's how to decide which approach fits your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Choose Skipio When */}
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-blue-400/30 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
              <h3 className="text-xl md:text-2xl font-bold text-blue-300 mb-6 flex items-center">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                Choose Skipio When
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 bg-blue-900/40 border border-blue-400/30 rounded-xl">
                  <div className="font-semibold text-blue-300 mb-2 text-sm md:text-base">Your Primary Goal:</div>
                  <div className="text-xs md:text-sm text-blue-200">Scheduling appointments and managing follow-ups efficiently</div>
                </div>
                
                <div className="space-y-3 text-xs md:text-sm text-blue-200">
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You need multi-channel communication (SMS, voice, webchat)</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />Your business is appointment-driven (coaching, medical, services)</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You prefer manual message control and review</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />Budget is a primary concern ($99-$299/mo)</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You want proven, established platform with CRM integrations</div>
                </div>
                
                <div className="p-3 md:p-4 bg-blue-900/30 rounded-xl">
                  <div className="text-blue-200 font-medium text-xs md:text-sm">
                    <strong>Perfect For:</strong> Service businesses, coaches, medical practices, and anyone focused on appointment booking efficiency
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
                  <div className="font-semibold text-purple-300 mb-2 text-sm md:text-base">Your Primary Goal:</div>
                  <div className="text-xs md:text-sm text-purple-200">Converting cold leads into qualified buyers using psychology</div>
                </div>
                
                <div className="space-y-3 text-xs md:text-sm text-purple-200">
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You have cold leads that need nurturing and qualification</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />Your business is sales-focused (real estate, wholesale, recruiting)</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You want AI to handle conversations autonomously</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You need psychological lead scoring and qualification</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />ROI matters more than monthly cost</div>
                </div>
                
                <div className="p-3 md:p-4 bg-purple-900/30 rounded-xl">
                  <div className="text-purple-200 font-medium text-xs md:text-sm">
                    <strong>Perfect For:</strong> Sales organizations focused on converting cold prospects into qualified opportunities
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Outcome Comparison */}
          <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-purple-400/30 rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Different Tools, Different Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-base md:text-lg text-purple-200 mb-2">Skipio Success Metric</div>
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">Appointments Booked</div>
                <div className="text-xs md:text-sm text-gray-400">Efficiency in scheduling</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-purple-200 mb-2">vs</div>
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">Psychology</div>
                <div className="text-xs md:text-sm text-purple-300">Understanding + conversion</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-purple-200 mb-2">SurFox Success Metric</div>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">Qualified Leads</div>
                <div className="text-xs md:text-sm text-gray-400">Ready-to-buy prospects</div>
              </div>
            </div>
            <div className="mt-6 p-3 md:p-4 bg-purple-900/30 rounded-xl">
              <p className="text-purple-200 font-medium text-sm md:text-base">
                <strong className="text-white">The key difference:</strong> Skipio optimizes for communication efficiency. SurFox optimizes for conversion psychology.
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
            Ready for AI Psychology?
          </h2>
          <p className="text-lg md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            If you want to convert cold leads into hot prospects, SurFox's AI psychology approach is your answer.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            <strong className="text-white">14-day free trial.</strong> No setup fees. See how AI psychology converts your cold leads.
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
              Cancel anytime
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SurFoxVsSkipio