'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, MessageSquare, Clock, Sparkles, AlertCircle, Star, Crown, DollarSign, Workflow, Bot, User, FileText, Settings, Timer, Phone, Mail } from 'lucide-react'

const SurFoxVsTextUs = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const featureSets = [
    {
      category: 'AI Intelligence',
      icon: Brain,
      color: 'blue',
      features: [
        { name: 'AI-driven conversations', surfox: 'Dynamic AI conversations', textus: 'Manual or canned messages' },
        { name: 'Conversation memory per lead', surfox: 'Full conversation history', textus: 'No memory' },
        { name: 'AI tone/persona customization', surfox: 'Tone + persona builder', textus: 'Not available' },
        { name: 'Dynamic follow-up timing', surfox: 'Behavior-based timing', textus: 'Fixed timing only' },
        { name: 'Spam-safe randomization', surfox: 'AI variants prevent spam flags', textus: 'Risk of detection' }
      ]
    },
    {
      category: 'Lead Management',
      icon: Target,
      color: 'emerald',
      features: [
        { name: 'AI motivation scoring', surfox: 'Built-in AI scoring engine', textus: 'No native scoring' },
        { name: 'Auto qualification logic', surfox: 'AI qualifies leads automatically', textus: 'Manual qualification required' },
        { name: 'Hot lead alerts', surfox: 'Real-time with full context', textus: 'Basic inbox filtering' },
        { name: 'Smart escalation', surfox: 'Hands off to human at right time', textus: 'Manual handoff only' },
        { name: 'Lead prioritization', surfox: 'AI-driven priority scoring', textus: 'Manual sorting' }
      ]
    },
    {
      category: 'Automation',
      icon: Zap,
      color: 'purple',
      features: [
        { name: 'Chrome extension import', surfox: '1-click lead capture', textus: 'Not available' },
        { name: 'AI handles 90% of messages', surfox: 'Full AI conversation management', textus: 'All manual handling' },
        { name: 'Document-based AI training', surfox: 'Upload PDFs, FAQs, SOPs', textus: 'Not supported' },
        { name: 'Campaign-specific AI behavior', surfox: 'Customizable per campaign', textus: 'One-size-fits-all' },
        { name: 'Smart retry logic', surfox: 'Adjusts per engagement', textus: 'Fixed retry patterns' }
      ]
    }
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-white">Sur</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Fox</span>
              </span>
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                ← Back to Platform
              </a>
              <div className="w-px h-6 bg-slate-700"></div>
              <a href="https://app.getsurfox.com/login" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                Sign In
              </a>
              <a href="#cta" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Try SurFox Free
              </a>
            </div>

            <button 
              className="md:hidden text-slate-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800">
            <div className="px-4 py-6 space-y-4">
              <a href="/" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium">← Back to Platform</a>
              <div className="pt-4 border-t border-slate-800">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors text-sm font-medium mb-3">Sign In</a>
                <a href="#cta" className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center">
                  Try SurFox Free
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            {/* Platform Logos */}
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">SurFox</div>
                  <div className="text-sm text-blue-400">AI Conversations</div>
                </div>
              </div>
              
              <div className="text-slate-500 text-3xl font-bold">VS</div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-slate-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-slate-400">TextUs</div>
                  <div className="text-sm text-slate-500">Manual Messaging</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">AI That</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Works for You
              </span>
              <br />
              <span className="text-white">vs Manual Labor</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-4 leading-relaxed max-w-3xl mx-auto">
              TextUs makes you work harder. SurFox makes you work smarter.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              While TextUs requires your team to manually craft every message and qualify every lead, SurFox AI handles 90% of conversations automatically — delivering only qualified prospects ready to close.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#comparison" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center">
                See the Comparison
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#demo" className="group border border-slate-700 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800/50 transition-all flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </a>
            </div>

            {/* Cost Comparison Preview */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">$197</div>
                <div className="text-sm text-slate-400">SurFox Starting Price</div>
                <div className="text-xs text-slate-500 mt-2">vs $500+ for TextUs</div>
              </div>
              <div className="bg-slate-800/30 border border-blue-500/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
                <div className="text-sm text-slate-400">AI Automation</div>
                <div className="text-xs text-slate-500 mt-2">vs 0% automation</div>
              </div>
              <div className="bg-slate-800/30 border border-purple-500/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15min</div>
                <div className="text-sm text-slate-400">Setup Time</div>
                <div className="text-xs text-slate-500 mt-2">vs 2-3 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Problem */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Problem with Traditional Messaging
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              TextUs forces your team to manually handle every aspect of lead communication. It's expensive, time-consuming, and doesn't scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* TextUs Problems */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-800/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-400">TextUs Limitations</h3>
                  <p className="text-slate-400">Manual, expensive, time-intensive</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300 mb-2 flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    High Cost, Low Value
                  </h4>
                  <p className="text-sm text-red-200">$500+/month with hidden fees and limited conversations. ROI unclear.</p>
                </div>
                
                <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300 mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Manual Everything
                  </h4>
                  <p className="text-sm text-red-200">Your team writes every message, qualifies every lead, tracks every conversation manually.</p>
                </div>
                
                <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300 mb-2 flex items-center">
                    <X className="w-4 h-4 mr-2" />
                    No Intelligence
                  </h4>
                  <p className="text-sm text-red-200">No AI, no learning, no qualification logic. Just an expensive inbox.</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-red-900/30 border border-red-700/30 rounded-lg">
                <p className="text-red-300 text-sm font-medium">
                  Result: Your team spends hours on unqualified leads while hot prospects slip through the cracks.
                </p>
              </div>
            </div>

            {/* SurFox Solution */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 ring-1 ring-blue-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">SurFox Advantages</h3>
                  <p className="text-slate-300">Intelligent, affordable, scalable</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI-Powered Efficiency
                  </h4>
                  <p className="text-sm text-blue-200">Starting at $197/month. AI handles 90% of conversations, delivering only qualified leads.</p>
                </div>
                
                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2 flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Automated Intelligence
                  </h4>
                  <p className="text-sm text-blue-200">AI learns your style, qualifies leads, and escalates only when prospects are ready to buy.</p>
                </div>
                
                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2 flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    Smart Learning
                  </h4>
                  <p className="text-sm text-blue-200">Upload documents, customize personas, train AI on your business. Gets smarter with every conversation.</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-900/30 border border-blue-700/30 rounded-lg">
                <p className="text-blue-300 text-sm font-medium">
                  Result: Your team focuses on closing deals while AI handles qualification and nurturing automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section id="comparison" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Feature-by-Feature Breakdown
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              See exactly why businesses are switching from TextUs to SurFox AI.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {featureSets.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFeatureSet(index)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  activeFeatureSet === index
                    ? `bg-gradient-to-r ${
                        category.color === 'blue' ? 'from-blue-600 to-blue-700' :
                        category.color === 'emerald' ? 'from-emerald-600 to-emerald-700' :
                        'from-purple-600 to-purple-700'
                      } text-white shadow-lg`
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white border border-slate-700'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.category}
              </button>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-12 bg-slate-800/50 border-b border-slate-700/50">
              <div className="col-span-6 p-4">
                <h3 className="font-semibold text-white">Feature</h3>
              </div>
              <div className="col-span-3 p-4 text-center border-l border-slate-700/50">
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                    <Terminal className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-semibold text-white">SurFox</span>
                </div>
              </div>
              <div className="col-span-3 p-4 text-center border-l border-slate-700/50">
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-slate-700 rounded-lg flex items-center justify-center mr-2">
                    <MessageSquare className="w-3 h-3 text-slate-400" />
                  </div>
                  <span className="font-medium text-slate-400">TextUs</span>
                </div>
              </div>
            </div>

            {featureSets[activeFeatureSet].features.map((item, index) => (
              <div key={index} className="grid grid-cols-12 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors">
                <div className="col-span-6 p-4">
                  <span className="text-slate-300">{item.name}</span>
                </div>
                <div className="col-span-3 p-4 text-center border-l border-slate-700/30">
                  <div className="flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span className="ml-2 text-emerald-400 font-medium">Yes</span>
                  </div>
                </div>
                <div className="col-span-3 p-4 text-center border-l border-slate-700/30">
                  <div className="flex items-center justify-center">
                    <X className="w-5 h-5 text-red-400" />
                    <span className="ml-2 text-red-400">No</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Comparison */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Numbers Don't Lie
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              SurFox delivers better results at a fraction of the cost — with less work required from your team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Cost Analysis */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-emerald-400" />
                Cost Analysis
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-red-900/20 border border-red-800/30 rounded-lg">
                  <div>
                    <div className="font-semibold text-red-300">TextUs</div>
                    <div className="text-sm text-red-400">Base plan + team time</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-400">$2,000+</div>
                    <div className="text-xs text-red-500">per month all-in</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
                  <div>
                    <div className="font-semibold text-blue-300">SurFox</div>
                    <div className="text-sm text-blue-400">AI automation included</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-400">$197</div>
                    <div className="text-xs text-blue-500">per month starter</div>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-emerald-900/20 border border-emerald-700/30 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-400">90% Cost Savings</div>
                  <div className="text-sm text-emerald-500">with SurFox AI automation</div>
                </div>
              </div>
            </div>

            {/* Results Comparison */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-blue-400" />
                Results Comparison
              </h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-slate-700/30 border border-slate-600/30 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">TextUs Results</span>
                    <span className="text-slate-400">per 1,000 leads</span>
                  </div>
                  <div className="text-2xl font-bold text-red-400">2-4 deals</div>
                  <div className="text-sm text-slate-500">High manual effort required</div>
                </div>
                
                <div className="p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-300">SurFox Results</span>
                    <span className="text-blue-400">per 1,000 leads</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">15-25 deals</div>
                  <div className="text-sm text-blue-500">AI handles qualification</div>
                </div>
                
                <div className="text-center p-4 bg-emerald-900/20 border border-emerald-700/30 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-400">6x Better ROI</div>
                  <div className="text-sm text-emerald-500">with intelligent automation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Time Investment */}
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Time Investment Comparison</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-lg text-slate-400 mb-2">Setup Time</div>
                <div className="text-3xl font-bold text-red-400 mb-2">2-3 hours</div>
                <div className="text-sm text-slate-500">TextUs training</div>
              </div>
              <div className="text-center">
                <div className="text-lg text-slate-400 mb-2">vs</div>
                <div className="text-3xl font-bold text-blue-400 mb-2">15 minutes</div>
                <div className="text-sm text-slate-400">SurFox AI setup</div>
              </div>
              <div className="text-center">
                <div className="text-lg text-slate-400 mb-2">Daily Management</div>
                <div className="text-3xl font-bold text-red-400 mb-2">4+ hours</div>
                <div className="text-sm text-slate-500">vs 30 minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Switch from TextUs in Minutes
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
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
              <div key={index} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-slate-600/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-20 bg-slate-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Stop Paying More for Less
          </h2>
          <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
            TextUs charges $500+ per month for basic messaging. SurFox delivers AI-powered conversations starting at $197.
          </p>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            <strong className="text-slate-300">Free 14-day trial.</strong> No setup fees. See results in your first week or keep using TextUs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800/50 transition-all">
              Schedule Demo
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-emerald-400" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-emerald-400" />
              15-minute setup
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-emerald-400" />
              Cancel anytime
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm text-slate-500 mb-4">Join teams who've already made the switch</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {['TechFlow', 'SalesCore', 'GrowthTeam', 'LeadGen Pro'].map((company, index) => (
                <div key={index} className="text-slate-600 font-medium">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Terminal className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-white">Sur</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Fox</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="/" className="text-slate-400 hover:text-white transition-colors">Platform</a>
              <a href="/enterprise" className="text-slate-400 hover:text-white transition-colors">Enterprise</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Support</a>
              <div className="text-slate-600">© 2024 SurFox AI</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SurFoxVsTextUs