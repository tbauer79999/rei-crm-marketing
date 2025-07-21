'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, MessageSquare, Clock, Sparkles, AlertCircle, Star, Crown, DollarSign, Workflow, Bot, User, FileText, Settings, Timer, Phone, Mail, Eye, Lightbulb, Layers, Activity } from 'lucide-react'

const SurFoxVsTextUs = () => {
  const [activeFeatureSet, setActiveFeatureSet] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
        { name: 'AI-driven conversations', surfox: 'Dynamic AI conversations that adapt to psychology', textus: 'Manual or canned messages only' },
        { name: 'Conversation memory per lead', surfox: 'Full conversation history with learning', textus: 'No memory between conversations' },
        { name: 'AI tone/persona customization', surfox: 'Multiple AI personas that adapt to personality types', textus: 'Static messaging, no adaptation' },
        { name: 'Dynamic follow-up timing', surfox: 'AI learns optimal timing per psychology type', textus: 'Fixed timing rules only' },
        { name: 'Spam-safe randomization', surfox: 'AI creates natural variants to avoid detection', textus: 'High risk of spam flagging' }
      ]
    },
    {
      category: 'Sales Psychology',
      icon: Lightbulb,
      color: 'cyan',
      features: [
        { name: 'Psychological profiling (50+ dimensions)', surfox: 'Deep personality analysis and adaptation', textus: 'No psychological understanding' },
        { name: 'Behavioral pattern learning', surfox: 'AI learns what works for each personality type', textus: 'No learning or adaptation capabilities' },
        { name: 'Message psychology optimization', surfox: 'Adapts messaging based on prospect psychology', textus: 'One-size-fits-all messaging approach' },
        { name: 'Buying signal detection', surfox: 'AI reads psychological buying signals', textus: 'Manual signal interpretation required' },
        { name: 'Conversation intelligence', surfox: 'Knows when to push vs when to wait', textus: 'No intelligence about conversation flow' }
      ]
    },
    {
      category: 'Lead Management',
      icon: Target,
      color: 'blue',
      features: [
        { name: 'AI motivation scoring', surfox: 'Built-in psychological scoring engine', textus: 'No native scoring capabilities' },
        { name: 'Auto qualification logic', surfox: 'AI qualifies leads automatically using psychology', textus: 'Manual qualification required for everything' },
        { name: 'Hot lead alerts', surfox: 'Real-time psychology-based alerts with context', textus: 'Basic inbox filtering only' },
        { name: 'Smart escalation', surfox: 'AI hands off to human at psychologically optimal time', textus: 'Manual handoff process only' },
        { name: 'Lead prioritization', surfox: 'AI-driven priority scoring based on psychology', textus: 'Manual sorting and prioritization' }
      ]
    },
    {
      category: 'Automation & Efficiency',
      icon: Zap,
      color: 'green',
      features: [
        { name: 'Chrome extension import', surfox: '1-click lead capture with instant analysis', textus: 'Manual data entry required' },
        { name: 'AI handles conversations', surfox: 'AI manages 90% of conversations automatically', textus: 'All conversations require manual handling' },
        { name: 'Document-based AI training', surfox: 'Upload PDFs, FAQs, SOPs to train AI', textus: 'No AI training capabilities' },
        { name: 'Campaign-specific AI behavior', surfox: 'Customize AI personality per campaign', textus: 'Same approach for all campaigns' },
        { name: 'Smart retry logic', surfox: 'AI adjusts retry strategy per engagement level', textus: 'Fixed retry patterns only' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white overflow-hidden">

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-40 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative py-20 pt-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            {/* Platform Logos */}
            <div className="flex items-center justify-center space-x-8 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-white">SurFox</div>
                  <div className="text-sm text-purple-300">Sales Psychology AI</div>
                </div>
              </div>
              
              <div className="text-gray-400 text-4xl font-bold">VS</div>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-600/50 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-gray-400" />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-gray-400">TextUs</div>
                  <div className="text-sm text-gray-500">Manual Messaging</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                AI That
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Works for You
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                vs Manual Labor
              </span>
            </h1>
            
            <div className="text-2xl text-purple-200 space-y-4 mb-8">
              <p>TextUs makes you work harder. SurFox makes you work smarter.</p>
              <p className="text-lg text-gray-300">
                While TextUs requires your team to manually craft every message and qualify every lead, 
                <strong className="text-white"> SurFox AI handles 90% of conversations automatically</strong> — delivering only qualified prospects ready to close.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  See the Comparison
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <a href="#demo" className="px-8 py-4 border-2 border-purple-400/50 rounded-2xl font-bold text-lg backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300">
                <Play className="mr-2 w-5 h-5 inline" />
                Watch Demo
              </a>
            </div>

            {/* Cost Comparison Preview */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6 text-center shadow-2xl">
                <div className="text-3xl font-bold text-green-400 mb-2">$197</div>
                <div className="text-sm text-purple-200">SurFox Starting Price</div>
                <div className="text-xs text-gray-400 mt-2">vs $500+ for TextUs</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6 text-center shadow-2xl">
                <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-sm text-purple-200">AI Automation</div>
                <div className="text-xs text-gray-400 mt-2">vs 0% automation</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6 text-center shadow-2xl">
                <div className="text-3xl font-bold text-cyan-400 mb-2">15min</div>
                <div className="text-sm text-purple-200">Setup Time</div>
                <div className="text-xs text-gray-400 mt-2">vs 2-3 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Problem */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              The Problem with TextUs
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              TextUs forces your team to manually handle every aspect of lead communication. It's expensive, time-consuming, and doesn't scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* TextUs Problems */}
            <div className="bg-gradient-to-br from-red-900/40 to-red-600/40 rounded-2xl border border-red-400/30 p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-600/50 rounded-xl flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-300">TextUs Limitations</h3>
                  <p className="text-red-200">Manual, expensive, time-intensive</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-900/40 border border-red-400/30 rounded-xl p-4">
                  <h4 className="font-semibold text-red-300 mb-2 flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    High Cost, Low Value
                  </h4>
                  <p className="text-sm text-red-200">$500+/month with hidden fees and limited conversations. ROI unclear.</p>
                </div>
                
                <div className="bg-red-900/40 border border-red-400/30 rounded-xl p-4">
                  <h4 className="font-semibold text-red-300 mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Manual Everything
                  </h4>
                  <p className="text-sm text-red-200">Your team writes every message, qualifies every lead, tracks every conversation manually.</p>
                </div>
                
                <div className="bg-red-900/40 border border-red-400/30 rounded-xl p-4">
                  <h4 className="font-semibold text-red-300 mb-2 flex items-center">
                    <X className="w-4 h-4 mr-2" />
                    No Intelligence
                  </h4>
                  <p className="text-sm text-red-200">No AI, no learning, no qualification logic. Just an expensive inbox.</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-red-900/40 border border-red-400/30 rounded-xl">
                <p className="text-red-200 text-sm font-medium">
                  Result: Your team spends hours on unqualified leads while hot prospects slip through the cracks.
                </p>
              </div>
            </div>

            {/* SurFox Solution */}
            <div className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-2xl border-2 border-purple-400/50 p-8 backdrop-blur-sm shadow-lg shadow-purple-500/25">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-300">SurFox Advantages</h3>
                  <p className="text-purple-200">Intelligent, affordable, scalable</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-300 mb-2 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI-Powered Efficiency
                  </h4>
                  <p className="text-sm text-purple-200">Starting at $197/month. AI handles 90% of conversations, delivering only qualified leads.</p>
                </div>
                
                <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-300 mb-2 flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Automated Intelligence
                  </h4>
                  <p className="text-sm text-purple-200">AI learns your style, qualifies leads, and escalates only when prospects are ready to buy.</p>
                </div>
                
                <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-300 mb-2 flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    Smart Learning
                  </h4>
                  <p className="text-sm text-purple-200">Upload documents, customize personas, train AI on your business. Gets smarter with every conversation.</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-purple-900/40 border border-purple-400/30 rounded-xl">
                <p className="text-purple-200 text-sm font-medium">
                  Result: Your team focuses on closing deals while AI handles qualification and nurturing automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section id="comparison" className="relative py-20 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Feature-by-Feature Breakdown
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See exactly why businesses are switching from TextUs to SurFox AI.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {featureSets.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFeatureSet(index)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
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
                <category.icon className="w-5 h-5 mr-2" />
                {category.category}
              </button>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-3xl border border-purple-500/30 overflow-hidden shadow-2xl">
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
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              The Numbers Don't Lie
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SurFox delivers better results at a fraction of the cost — with less work required from your team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Cost Analysis */}
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-green-400" />
                Cost Analysis
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-red-900/40 border border-red-400/30 rounded-xl">
                  <div>
                    <div className="font-semibold text-red-300">TextUs</div>
                    <div className="text-sm text-red-200">Base plan + team time</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-400">$2,000+</div>
                    <div className="text-xs text-red-300">per month all-in</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-purple-900/40 border border-purple-400/30 rounded-xl">
                  <div>
                    <div className="font-semibold text-purple-300">SurFox</div>
                    <div className="text-sm text-purple-200">AI automation included</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400">$197</div>
                    <div className="text-xs text-purple-300">per month starter</div>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-green-900/40 border border-green-400/30 rounded-xl">
                  <div className="text-2xl font-bold text-green-400">90% Cost Savings</div>
                  <div className="text-sm text-green-300">with SurFox AI automation</div>
                </div>
              </div>
            </div>

            {/* Results Comparison */}
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-cyan-400" />
                Results Comparison
              </h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-gray-800/40 border border-gray-600/30 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">TextUs Results</span>
                    <span className="text-gray-400">per 1,000 leads</span>
                  </div>
                  <div className="text-2xl font-bold text-red-400">2-4 deals</div>
                  <div className="text-sm text-gray-400">High manual effort required</div>
                </div>
                
                <div className="p-4 bg-purple-900/40 border border-purple-400/30 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-purple-300">SurFox Results</span>
                    <span className="text-purple-200">per 1,000 leads</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-400">15-25 deals</div>
                  <div className="text-sm text-purple-300">AI handles qualification</div>
                </div>
                
                <div className="text-center p-4 bg-green-900/40 border border-green-400/30 rounded-xl">
                  <div className="text-2xl font-bold text-green-400">6x Better ROI</div>
                  <div className="text-sm text-green-300">with intelligent automation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Time Investment */}
          <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-purple-400/30 rounded-2xl p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Time Investment Comparison</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-lg text-purple-200 mb-2">Setup Time</div>
                <div className="text-3xl font-bold text-red-400 mb-2">2-3 hours</div>
                <div className="text-sm text-gray-400">TextUs training</div>
              </div>
              <div className="text-center">
                <div className="text-lg text-purple-200 mb-2">vs</div>
                <div className="text-3xl font-bold text-purple-400 mb-2">15 minutes</div>
                <div className="text-sm text-purple-300">SurFox AI setup</div>
              </div>
              <div className="text-center">
                <div className="text-lg text-purple-200 mb-2">Daily Management</div>
                <div className="text-3xl font-bold text-red-400 mb-2">4+ hours</div>
                <div className="text-sm text-gray-400">vs 30 minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Switch from TextUs in Minutes
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Join hundreds of businesses who've upgraded from manual messaging to AI-powered conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Database, title: 'Export Your Data', desc: 'Download your TextUs contact list - we\'ll help you import everything seamlessly.' },
              { icon: FileText, title: 'Train Your AI', desc: 'Upload your scripts and materials. AI learns your messaging style in minutes.' },
              { icon: Settings, title: 'Configure Campaigns', desc: 'Set up intelligent campaigns with AI personas and automated follow-ups.' },
              { icon: Sparkles, title: 'Start Converting', desc: 'Watch AI engage prospects and deliver qualified leads automatically.' }
            ].map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50 rounded-2xl p-6 text-center backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Stop Paying More for Less
          </h2>
          <p className="text-2xl text-purple-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            TextUs charges $500+ per month for basic messaging. SurFox delivers AI-powered conversations starting at $197.
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            <strong className="text-white">Free 14-day trial.</strong> No setup fees. See results in your first week or keep using TextUs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-8">
            <button className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl font-bold text-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <a href="#" className="px-12 py-6 border-2 border-purple-400/50 rounded-2xl font-bold text-2xl backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-500 hover:scale-105">
              Schedule Demo
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-purple-200">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-400" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-green-400" />
              15-minute setup
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-green-400" />
              Cancel anytime
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-400 mb-4">Join teams who've already made the switch</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {['TechFlow', 'SalesCore', 'GrowthTeam', 'LeadGen Pro'].map((company, index) => (
                <div key={index} className="text-gray-500 font-medium">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SurFoxVsTextUs