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
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-3 group">
              <img src="/logo.png" alt="SurFox Logo" className="w-8 h-8" />
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-gray-900">Sur</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fox</span>
              </span>
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                ← Back to Platform
              </a>
              <div className="w-px h-6 bg-gray-300"></div>
              <a href="https://app.getsurfox.com/login" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                Sign In
              </a>
              <a href="#cta" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Try SurFox Free
              </a>
            </div>

            <button 
              className="md:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <a href="/" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">← Back to Platform</a>
              <div className="pt-4 border-t border-gray-200">
                <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium mb-3">Sign In</a>
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
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            {/* Platform Logos */}
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="SurFox Logo" className="w-12 h-12" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">SurFox</div>
                  <div className="text-sm text-blue-600">AI Conversations</div>
                </div>
              </div>
              
              <div className="text-gray-500 text-3xl font-bold">VS</div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-600">TextUs</div>
                  <div className="text-sm text-gray-500">Manual Messaging</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">AI That</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Works for You
              </span>
              <br />
              <span className="text-gray-900">vs Manual Labor</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-4 leading-relaxed max-w-3xl mx-auto">
              TextUs makes you work harder. SurFox makes you work smarter.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              While TextUs requires your team to manually craft every message and qualify every lead, SurFox AI handles 90% of conversations automatically — delivering only qualified prospects ready to close.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#comparison" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center">
                See the Comparison
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#demo" className="group border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </a>
            </div>

            {/* Cost Comparison Preview */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-emerald-600 mb-2">$197</div>
                <div className="text-sm text-gray-600">SurFox Starting Price</div>
                <div className="text-xs text-gray-500 mt-2">vs $500+ for TextUs</div>
              </div>
              <div className="bg-white/80 border border-blue-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                <div className="text-sm text-gray-600">AI Automation</div>
                <div className="text-xs text-gray-500 mt-2">vs 0% automation</div>
              </div>
              <div className="bg-white/80 border border-purple-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">15min</div>
                <div className="text-sm text-gray-600">Setup Time</div>
                <div className="text-xs text-gray-500 mt-2">vs 2-3 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Problem with Traditional Messaging
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TextUs forces your team to manually handle every aspect of lead communication. It's expensive, time-consuming, and doesn't scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* TextUs Problems */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-600">TextUs Limitations</h3>
                  <p className="text-gray-600">Manual, expensive, time-intensive</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    High Cost, Low Value
                  </h4>
                  <p className="text-sm text-red-800">$500+/month with hidden fees and limited conversations. ROI unclear.</p>
                </div>
                
                <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Manual Everything
                  </h4>
                  <p className="text-sm text-red-800">Your team writes every message, qualifies every lead, tracks every conversation manually.</p>
                </div>
                
                <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                    <X className="w-4 h-4 mr-2" />
                    No Intelligence
                  </h4>
                  <p className="text-sm text-red-800">No AI, no learning, no qualification logic. Just an expensive inbox.</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-red-100 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm font-medium">
                  Result: Your team spends hours on unqualified leads while hot prospects slip through the cracks.
                </p>
              </div>
            </div>

            {/* SurFox Solution */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8 ring-1 ring-blue-200">
              <div className="flex items-center mb-6">
                <img src="/logo.png" alt="SurFox Logo" className="w-12 h-12 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">SurFox Advantages</h3>
                  <p className="text-gray-700">Intelligent, affordable, scalable</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-100 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    AI-Powered Efficiency
                  </h4>
                  <p className="text-sm text-blue-800">Starting at $197/month. AI handles 90% of conversations, delivering only qualified leads.</p>
                </div>
                
                <div className="bg-blue-100 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Automated Intelligence
                  </h4>
                  <p className="text-sm text-blue-800">AI learns your style, qualifies leads, and escalates only when prospects are ready to buy.</p>
                </div>
                
                <div className="bg-blue-100 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    Smart Learning
                  </h4>
                  <p className="text-sm text-blue-800">Upload documents, customize personas, train AI on your business. Gets smarter with every conversation.</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 border border-blue-200 rounded-lg">
                <p className="text-blue-700 text-sm font-medium">
                  Result: Your team focuses on closing deals while AI handles qualification and nurturing automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section id="comparison" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Feature-by-Feature Breakdown
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900 border border-gray-300'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.category}
              </button>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 bg-gray-100 border-b border-gray-200">
              <div className="col-span-6 p-4">
                <h3 className="font-semibold text-gray-900">Feature</h3>
              </div>
              <div className="col-span-3 p-4 text-center border-l border-gray-200">
                <div className="flex items-center justify-center">
                  <img src="/logo.png" alt="SurFox Logo" className="w-4 h-4 mr-2" />
                  <span className="font-semibold text-gray-900">SurFox</span>
                </div>
              </div>
              <div className="col-span-3 p-4 text-center border-l border-gray-200">
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-300 rounded-lg flex items-center justify-center mr-2">
                    <MessageSquare className="w-3 h-3 text-gray-600" />
                  </div>
                  <span className="font-medium text-gray-600">TextUs</span>
                </div>
              </div>
            </div>

            {featureSets[activeFeatureSet].features.map((item, index) => (
              <div key={index} className="grid grid-cols-12 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="col-span-6 p-4">
                  <span className="text-gray-700">{item.name}</span>
                </div>
                <div className="col-span-3 p-4 text-center border-l border-gray-200">
                  <div className="flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                    <span className="ml-2 text-emerald-600 font-medium">Yes</span>
                  </div>
                </div>
                <div className="col-span-3 p-4 text-center border-l border-gray-200">
                  <div className="flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="ml-2 text-red-500">No</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Numbers Don't Lie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SurFox delivers better results at a fraction of the cost — with less work required from your team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Cost Analysis */}
            <div className="bg-gray-100 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-emerald-600" />
                Cost Analysis
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-red-100 border border-red-200 rounded-lg">
                  <div>
                    <div className="font-semibold text-red-700">TextUs</div>
                    <div className="text-sm text-red-600">Base plan + team time</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">$2,000+</div>
                    <div className="text-xs text-red-500">per month all-in</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-blue-100 border border-blue-200 rounded-lg">
                  <div>
                    <div className="font-semibold text-blue-700">SurFox</div>
                    <div className="text-sm text-blue-600">AI automation included</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">$197</div>
                    <div className="text-xs text-blue-500">per month starter</div>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-emerald-100 border border-emerald-200 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">90% Cost Savings</div>
                  <div className="text-sm text-emerald-700">with SurFox AI automation</div>
                </div>
              </div>
            </div>

            {/* Results Comparison */}
            <div className="bg-gray-100 border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
                Results Comparison
              </h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-gray-200 border border-gray-300 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">TextUs Results</span>
                    <span className="text-gray-600">per 1,000 leads</span>
                  </div>
                  <div className="text-2xl font-bold text-red-600">2-4 deals</div>
                  <div className="text-sm text-gray-500">High manual effort required</div>
                </div>
                
                <div className="p-4 bg-blue-100 border border-blue-200 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-blue-700">SurFox Results</span>
                    <span className="text-blue-600">per 1,000 leads</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">15-25 deals</div>
                  <div className="text-sm text-blue-700">AI handles qualification</div>
                </div>
                
                <div className="text-center p-4 bg-emerald-100 border border-emerald-200 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">6x Better ROI</div>
                  <div className="text-sm text-emerald-700">with intelligent automation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Time Investment */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Time Investment Comparison</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-lg text-gray-600 mb-2">Setup Time</div>
                <div className="text-3xl font-bold text-red-600 mb-2">2-3 hours</div>
                <div className="text-sm text-gray-500">TextUs training</div>
              </div>
              <div className="text-center">
                <div className="text-lg text-gray-600 mb-2">vs</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">15 minutes</div>
                <div className="text-sm text-gray-600">SurFox AI setup</div>
              </div>
              <div className="text-center">
                <div className="text-lg text-gray-600 mb-2">Daily Management</div>
                <div className="text-3xl font-bold text-red-600 mb-2">4+ hours</div>
                <div className="text-sm text-gray-500">vs 30 minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Switch from TextUs in Minutes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-gray-300 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Stop Paying More for Less
          </h2>
          <p className="text-xl text-gray-700 mb-4 max-w-2xl mx-auto">
            TextUs charges $500+ per month for basic messaging. SurFox delivers AI-powered conversations starting at $197.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            <strong className="text-gray-800">Free 14-day trial.</strong> No setup fees. See results in your first week or keep using TextUs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Schedule Demo
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-emerald-500" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-emerald-500" />
              15-minute setup
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-emerald-500" />
              Cancel anytime
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-4">Join teams who've already made the switch</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {['TechFlow', 'SalesCore', 'GrowthTeam', 'LeadGen Pro'].map((company, index) => (
                <div key={index} className="text-gray-600 font-medium">{company}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/logo.png" alt="SurFox Logo" className="w-8 h-8" />
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-gray-900">Sur</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fox</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Platform</a>
              <a href="/enterprise" className="text-gray-600 hover:text-gray-900 transition-colors">Enterprise</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Support</a>
              <div className="text-gray-400">© 2024 SurFox AI</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SurFoxVsTextUs