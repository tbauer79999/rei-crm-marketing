'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, MessageSquare, Clock, Sparkles, AlertCircle, Star, Crown } from 'lucide-react'

const SurFoxVsSmarterContact = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeComparison, setActiveComparison] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse tracking for subtle parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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

  const comparisonCategories = [
    {
      title: 'AI Intelligence',
      icon: Brain,
      features: [
        { feature: 'AI-driven conversations', surfox: true, smarter: false },
        { feature: 'Conversation memory per lead', surfox: true, smarter: false },
        { feature: 'AI personas & tone customization', surfox: true, smarter: false },
        { feature: 'Dynamic prompt injection', surfox: true, smarter: false },
        { feature: 'Anti-spam message randomization', surfox: true, smarter: false }
      ]
    },
    {
      title: 'Lead Management',
      icon: Target,
      features: [
        { feature: 'Auto-flags hot leads', surfox: true, smarter: false },
        { feature: 'AI-based motivation scoring', surfox: true, smarter: false },
        { feature: 'Smart lead filtering & sorting', surfox: true, smarter: false },
        { feature: 'Custom lead statuses per tenant', surfox: true, smarter: false },
        { feature: 'Full conversation history + scoring', surfox: true, smarter: false }
      ]
    },
    {
      title: 'Automation & Efficiency',
      icon: Zap,
      features: [
        { feature: 'Smart pacing + personalization', surfox: true, smarter: false },
        { feature: 'Status-aware follow-up logic', surfox: true, smarter: false },
        { feature: 'Business hours awareness', surfox: true, smarter: false },
        { feature: 'Failed delivery retry system', surfox: true, smarter: false },
        { feature: 'Chrome extension for lead capture', surfox: true, smarter: false }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      
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
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        {/* Gradient Orbs with Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl"
            style={{
              top: '10%',
              right: '10%',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          ></div>
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
            style={{
              bottom: '20%',
              left: '10%',
              transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-800/50 text-slate-300 border border-slate-700/50 mb-4">
                <Crown className="w-4 h-4 mr-2 text-yellow-400" />
                Platform Comparison
              </span>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Terminal className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-white">SurFox</span>
                </div>
                <span className="text-slate-500 text-xl">vs</span>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-slate-400" />
                  </div>
                  <span className="text-2xl font-medium text-slate-400">Smarter Contact</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">AI That</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Closes Deals
              </span>
              <br />
              <span className="text-white">vs Mass Blasting</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-4 leading-relaxed max-w-3xl mx-auto">
              Most platforms blast 5,000 people and hope for replies. 
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              SurFox uses AI to have <strong className="text-slate-300">real conversations</strong> that close 50 actual deals. See exactly why SurFox beats traditional messaging platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#comparison" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center">
                See Full Comparison
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#demo" className="group border border-slate-700 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800/50 transition-all flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </a>
            </div>

            {/* Quick Winner Stats */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-800/30 border border-emerald-500/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">5.2x</div>
                <div className="text-sm text-slate-400">Higher Conversion Rate</div>
                <div className="text-xs text-slate-500 mt-2">vs traditional messaging</div>
              </div>
              <div className="bg-slate-800/30 border border-blue-500/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">94%</div>
                <div className="text-sm text-slate-400">Lead Scoring Accuracy</div>
                <div className="text-xs text-slate-500 mt-2">AI identifies hot prospects</div>
              </div>
              <div className="bg-slate-800/30 border border-purple-500/30 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15min</div>
                <div className="text-sm text-slate-400">Setup Time</div>
                <div className="text-xs text-slate-500 mt-2">vs 1-2 hours for others</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Comparison */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
            Two Different Philosophies
          </h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-slate-300">
            The fundamental difference isn't just features — it's how we think about sales conversations.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Smarter Contact Approach */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-800/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-400">Smarter Contact</h3>
                  <p className="text-slate-400">Mass Messaging Approach</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-red-300 mb-2">The Strategy:</h4>
                  <p className="text-sm text-red-200">"Blast everyone with the same message and see who responds"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-red-300">
                    <X className="w-5 h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>Fixed templates that get stale</span>
                  </div>
                  <div className="flex items-start text-red-300">
                    <X className="w-5 h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>No conversation memory</span>
                  </div>
                  <div className="flex items-start text-red-300">
                    <X className="w-5 h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>Manual monitoring required</span>
                  </div>
                  <div className="flex items-start text-red-300">
                    <X className="w-5 h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>You handle all responses manually</span>
                  </div>
                  <div className="flex items-start text-red-300">
                    <X className="w-5 h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>No lead scoring or qualification</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/30 border border-red-700/30 rounded-lg p-4">
                <h4 className="font-semibold text-red-300 mb-2">Best For:</h4>
                <p className="text-sm text-red-200">Teams that want to send high volumes and manually filter responses</p>
              </div>
            </div>

            {/* SurFox Approach */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 ring-1 ring-blue-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">SurFox</h3>
                  <p className="text-slate-300">AI Conversation Approach</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2">The Strategy:</h4>
                  <p className="text-sm text-blue-200">"Have AI conversations that feel human and deliver qualified leads"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-blue-300">
                    <Check className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>Dynamic messages that adapt per lead</span>
                  </div>
                  <div className="flex items-start text-blue-300">
                    <Check className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>AI remembers every conversation</span>
                  </div>
                  <div className="flex items-start text-blue-300">
                    <Check className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>Auto-flags hot leads for you</span>
                  </div>
                  <div className="flex items-start text-blue-300">
                    <Check className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>AI handles responses intelligently</span>
                  </div>
                  <div className="flex items-start text-blue-300">
                    <Check className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                    <span>Built-in motivation scoring</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/30 border border-blue-700/30 rounded-lg p-4">
                <h4 className="font-semibold text-blue-300 mb-2">Best For:</h4>
                <p className="text-sm text-blue-200">Teams that want AI to qualify leads and only engage when prospects are ready to buy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Conversation Example */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
            See the Difference in Action
          </h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-slate-300">
            Same lead, same goal, completely different outcomes.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Smarter Contact Conversation */}
            <div className="bg-slate-800/30 border border-red-800/30 rounded-2xl p-6">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center mr-3">
                  <MessageSquare className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-red-400">Smarter Contact Approach</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-slate-700/50 rounded-lg p-3 text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-2"></div>
                    <span className="text-slate-400 text-xs">Day 1 - Mass Blast</span>
                  </div>
                  <p className="text-slate-300">"Hi [NAME], are you interested in selling your house?"</p>
                </div>
                
                <div className="text-center text-slate-500 text-xs py-2">
                  ... no response for 3 days ...
                </div>
                
                <div className="bg-slate-700/50 rounded-lg p-3 text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-2"></div>
                    <span className="text-slate-400 text-xs">Day 4 - Same Template</span>
                  </div>
                  <p className="text-slate-300">"Hi [NAME], are you interested in selling your house?"</p>
                </div>
                
                <div className="text-center text-slate-500 text-xs py-2">
                  ... no response for 7 days ...
                </div>
                
                <div className="bg-slate-700/50 rounded-lg p-3 text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-2"></div>
                    <span className="text-slate-400 text-xs">Day 11 - Final Blast</span>
                  </div>
                  <p className="text-slate-300">"Hi [NAME], are you interested in selling your house?"</p>
                </div>
              </div>
              
              <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 text-center">
                <X className="w-6 h-6 text-red-400 mx-auto mb-2" />
                <p className="text-red-300 font-medium">Result: Lead Lost</p>
                <p className="text-red-400 text-sm">Marked as spam, no engagement</p>
              </div>
            </div>

            {/* SurFox AI Conversation */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-6 ring-1 ring-blue-500/20">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-blue-400">SurFox AI Approach</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-blue-900/30 rounded-lg p-3 text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-blue-400 text-xs">Day 1 - AI Opening</span>
                  </div>
                  <p className="text-blue-200">"Hey Sarah — wasn't sure if this was still your number. If you're still thinking about selling, I can keep it simple for you."</p>
                </div>
                
                <div className="text-center text-slate-400 text-xs py-2">
                  ... no reply for 3 days, AI adapts timing ...
                </div>
                
                <div className="bg-blue-900/30 rounded-lg p-3 text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-blue-400 text-xs">Day 4 - AI Follow-up</span>
                  </div>
                  <p className="text-blue-200">"Just checking in — totally fine if not the right time. Market's been pretty good for sellers lately."</p>
                </div>
                
                <div className="bg-emerald-900/30 rounded-lg p-3 text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                    <span className="text-emerald-400 text-xs">Day 5 - Lead Response</span>
                  </div>
                  <p className="text-emerald-200">"Yeah I might be. What kind of offers are you seeing?"</p>
                </div>
                
                <div className="bg-blue-900/30 rounded-lg p-3 text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    <span className="text-blue-400 text-xs">AI Response</span>
                  </div>
                  <p className="text-blue-200">"Great question! Most of my sellers in your area have been pleasantly surprised. Want me to pull some recent comps for your street?"</p>
                </div>
              </div>
              
              <div className="bg-emerald-900/20 border border-emerald-700/30 rounded-lg p-4 text-center">
                <Sparkles className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <p className="text-emerald-300 font-medium">Result: Hot Lead Ready!</p>
                <p className="text-emerald-400 text-sm">AI flags for immediate handoff</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature-by-Feature Comparison */}
      <section id="comparison" className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Feature-by-Feature Breakdown
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              See exactly where SurFox outperforms traditional messaging platforms.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {comparisonCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveComparison(index)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  activeComparison === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white border border-slate-700'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.title}
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
                  <span className="font-medium text-slate-400">Smarter Contact</span>
                </div>
              </div>
            </div>

            {comparisonCategories[activeComparison].features.map((item, index) => (
              <div key={index} className="grid grid-cols-12 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors">
                <div className="col-span-6 p-4">
                  <span className="text-slate-300">{item.feature}</span>
                </div>
                <div className="col-span-3 p-4 text-center border-l border-slate-700/30">
                  {item.surfox ? (
                    <div className="flex items-center justify-center">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span className="ml-2 text-emerald-400 font-medium">Yes</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <X className="w-5 h-5 text-red-400" />
                      <span className="ml-2 text-red-400">No</span>
                    </div>
                  )}
                </div>
                <div className="col-span-3 p-4 text-center border-l border-slate-700/30">
                  {item.smarter ? (
                    <div className="flex items-center justify-center">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span className="ml-2 text-emerald-400 font-medium">Yes</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <X className="w-5 h-5 text-red-400" />
                      <span className="ml-2 text-red-400">No</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Comparison */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
            The Results Speak for Themselves
          </h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-slate-300">
            When you compare what actually matters — closing deals — SurFox is in a different league.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Smarter Contact Results */}
            <div className="bg-slate-800/30 border border-red-800/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center mr-4">
                  <MessageSquare className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-red-400">Smarter Contact Results</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-400 mb-1">~2-5%</div>
                  <div className="text-sm text-red-300">Response Rate</div>
                  <div className="text-xs text-red-400 mt-1">High spam risk hurts deliverability</div>
                </div>
                
                <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-400 mb-1">Manual</div>
                  <div className="text-sm text-red-300">Lead Qualification</div>
                  <div className="text-xs text-red-400 mt-1">You sort through every response</div>
                </div>
                
                <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-400 mb-1">1-2 hrs</div>
                  <div className="text-sm text-red-300">Setup Time</div>
                  <div className="text-xs text-red-400 mt-1">Plus ongoing template management</div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-red-900/30 border border-red-700/30 rounded-lg">
                <h4 className="font-semibold text-red-300 mb-2">Typical Outcome:</h4>
                <p className="text-sm text-red-200">
                  Send 1,000 messages → Get 20-50 responses → Manually qualify each → Close 1-3 deals
                </p>
              </div>
            </div>

            {/* SurFox Results */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 ring-1 ring-blue-500/20">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-400">SurFox AI Results</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">12-18%</div>
                  <div className="text-sm text-blue-300">Engagement Rate</div>
                  <div className="text-xs text-blue-400 mt-1">Natural conversations reduce spam flags</div>
                </div>
                
                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">AI-Driven</div>
                  <div className="text-sm text-blue-300">Lead Qualification</div>
                  <div className="text-xs text-blue-400 mt-1">Only see prospects ready to buy</div>
                </div>
                
                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">15 min</div>
                  <div className="text-sm text-blue-300">Setup Time</div>
                  <div className="text-xs text-blue-400 mt-1">AI handles everything after upload</div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-900/30 border border-blue-700/30 rounded-lg">
                <h4 className="font-semibold text-blue-300 mb-2">Typical Outcome:</h4>
                <p className="text-sm text-blue-200">
                  Upload 1,000 leads → AI engages 180 → Delivers 50 qualified → Close 15-25 deals
                </p>
              </div>
            </div>
          </div>

          {/* ROI Comparison */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Bottom Line ROI Comparison</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-lg text-slate-400 mb-2">Smarter Contact</div>
                  <div className="text-3xl font-bold text-red-400 mb-2">1-3 deals</div>
                  <div className="text-sm text-slate-500">per 1,000 leads</div>
                </div>
                <div className="text-center">
                  <div className="text-lg text-slate-300 mb-2">SurFox AI</div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">15-25 deals</div>
                  <div className="text-sm text-slate-400">per 1,000 leads</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <span className="text-2xl font-bold text-emerald-400">5-8x Better Results</span>
                <span className="text-slate-400 ml-2">with SurFox AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration/Switch Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Upgrade?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Join the businesses making the switch from volume-based messaging to AI-powered conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Easy Data Import</h3>
              <p className="text-slate-400 text-sm">
                Import your existing leads via CSV or Chrome extension. We'll help migrate your data seamlessly.
              </p>
            </div>
            
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">AI Training Included</h3>
              <p className="text-slate-400 text-sm">
                Our team helps train your AI on your business and messaging style. Get results from day one.
              </p>
            </div>
            
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">White-Glove Onboarding</h3>
              <p className="text-slate-400 text-sm">
                1:1 setup session to ensure you're getting maximum value from your first campaign.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Special Offer for Smarter Contact Users
            </h3>
            <p className="text-slate-300 mb-6">
              Get your first month free when you switch to SurFox. We'll even help you import your existing campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#cta" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Claim Your Free Month
              </a>
              <a href="#demo" className="border border-slate-600 text-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-800/50 transition-all">
                Schedule Migration Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Stop Blasting. Start Converting.
          </h2>
          <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
            Join thousands of businesses who've upgraded from mass messaging to AI-powered conversations.
          </p>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            <strong className="text-slate-300">14-day free trial.</strong> No setup fees. See results in your first week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="border border-slate-600 text-slate-300 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800/50 transition-all">
              Book a Demo
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-emerald-400" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-emerald-400" />
              Setup in 15 minutes
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-emerald-400" />
              Cancel anytime
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 mb-4">Trusted by teams at</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {['TechCorp', 'SalesForce', 'GrowthCo', 'ScaleUp'].map((company, index) => (
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

export default SurFoxVsSmarterContact