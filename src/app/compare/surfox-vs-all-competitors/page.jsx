'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, MessageSquare, Clock, Sparkles, AlertCircle, Star, Crown, DollarSign, Workflow, Bot, User, FileText, Settings, Timer, Phone, Mail, Rocket, Activity, Eye, Layers, LineChart, ChevronRight, Inbox, CreditCard, Flame, Skull, Sword } from 'lucide-react'

const SurFoxGeneralComparison = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Add this function to handle menu item clicks
  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false)
  }

  // Mouse tracking for epic parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const oldWorldCategories = [
    {
      category: 'Text Blasters',
      subtitle: 'The Spray & Pray Era',
      examples: ['Smarter Contact', 'Launch Control', 'ReiReply'],
      description: 'Mass messaging. No intelligence. High spam risk.',
      icon: MessageSquare,
      color: 'red',
      deaths: ['95% ignored messages', 'Burned phone numbers', 'Zero personalization', 'Manual everything']
    },
    {
      category: 'Inbox Tools',
      subtitle: 'The Manual Labor Era',
      examples: ['TextUs', 'Heymarket', 'SimpleTexting'],
      description: 'Glorified inboxes. You do all the work.',
      icon: Inbox,
      color: 'orange',
      deaths: ['$500+/month for manual work', 'No AI assistance', 'Time-intensive management', 'Zero automation']
    },
    {
      category: 'CRM Add-ons',
      subtitle: 'The Afterthought Era',
      examples: ['FollowUpBoss', 'REsimpli', 'Chime'],
      description: 'SMS as a side feature. Not built for conversion.',
      icon: Database,
      color: 'yellow',
      deaths: ['Basic text features', 'No conversation optimization', 'Limited automation', 'Wrong priorities']
    },
    {
      category: 'Sales Engagement',
      subtitle: 'The Email-First Era',
      examples: ['Outbound.io', 'Instantly.ai', 'Reply.io'],
      description: 'Email platforms pretending to do SMS.',
      icon: Mail,
      color: 'gray',
      deaths: ['SMS as afterthought', 'No mobile optimization', 'Wrong channel focus', 'Outdated approach']
    }
  ]

  const revolutionaryFeatures = [
    { feature: 'AI writes every message', old: '❌ You write everything', new: '✅ AI creates personalized messages' },
    { feature: 'Learns from conversations', old: '❌ Static templates forever', new: '✅ Gets smarter with every interaction' },
    { feature: 'Psychology-based qualification', old: '❌ Manual sorting', new: '✅ 50+ psychological dimensions' },
    { feature: 'Auto-escalates hot leads', old: '❌ You monitor everything', new: '✅ AI delivers sales-ready prospects' },
    { feature: 'Conversation intelligence', old: '❌ No memory or context', new: '✅ Full conversation awareness' },
    { feature: 'Behavioral adaptation', old: '❌ One-size-fits-all', new: '✅ Adapts to each personality type' },
    { feature: 'Chrome capture & analysis', old: '❌ Manual data entry', new: '✅ 1-click import with instant analysis' },
    { feature: 'Anti-spam intelligence', old: '❌ High spam risk', new: '✅ AI prevents detection automatically' },
    { feature: 'Document-based training', old: '❌ Fixed capabilities', new: '✅ Upload SOPs, train your AI' },
    { feature: 'Transparent pricing', old: '❌ Hidden fees & overage charges', new: '✅ All-inclusive pricing model' }
  ]

  const gameChangingStats = [
    { old: 'Send 5,000 messages', new: 'Have 500 conversations', impact: '10x Quality Focus' },
    { old: 'Get 100 replies', new: 'Get 50 qualified leads', impact: '2x Higher Intent' },
    { old: 'Manually sort prospects', new: 'AI delivers hot leads', impact: '∞ Time Savings' },
    { old: 'Close 2-5 deals', new: 'Close 15-25 deals', impact: '5-8x More Revenue' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white overflow-hidden">

      {/* Mobile Navigation Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-900/95 to-purple-900/95 backdrop-blur-xl border-b border-purple-500/30">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            SurFox vs Everyone
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
                    className="block px-4 py-2 text-base text-gray-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all"
                  >
                    vs Launch Control
                  </a>
                  <a
                    href="/vs-all-competitors"
                    onClick={handleMenuItemClick}
                    className="block px-4 py-2 text-base text-purple-200 bg-purple-500/30 hover:text-white hover:bg-purple-500/40 rounded-lg transition-all border border-purple-400/30"
                  >
                    vs All Competitors (Current)
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

      {/* Epic Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-conic from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '60s'}}></div>
      </div>
      
      {/* Revolutionary Hero Section */}
      <section className="relative py-12 pt-24 lg:pt-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            
            {/* Revolutionary Badge */}
            <div className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 backdrop-blur-sm mb-6 md:mb-8">
              <Flame className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-red-400" />
              <span className="text-red-300 font-bold text-base md:text-lg">CATEGORY REVOLUTION</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight mb-8">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent block mb-2 md:mb-4">
                EVERYONE ELSE
              </span>
              <span className="bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text text-transparent block mb-2 md:mb-4 text-4xl md:text-6xl lg:text-7xl">
                BLASTS.
              </span>
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                SURFOX
              </span>
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent block">
                CONVERTS.
              </span>
            </h1>
            
            <div className="text-xl md:text-3xl text-purple-200 space-y-4 md:space-y-6 mb-8 md:mb-12 max-w-5xl mx-auto">
              <p className="font-bold">This isn't an upgrade. This is a revolution.</p>
              <p className="text-base md:text-xl text-gray-300 leading-relaxed">
                SurFox didn't just build a better texting platform. We invented an entirely new category: 
                <strong className="text-white"> Sales Psychology AI.</strong> While everyone else competes on message volume, 
                we've made volume irrelevant by creating AI that actually understands human psychology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center mb-12 md:mb-16">
              <button className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-2xl font-black text-lg md:text-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center">
                  <Flame className="mr-2 md:mr-3 w-6 h-6 md:w-8 md:h-8" />
                  <span className="hidden sm:inline">WITNESS THE REVOLUTION</span>
                  <span className="sm:hidden">THE REVOLUTION</span>
                  <ArrowRight className="ml-2 md:ml-3 w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
              <a href="#demo" className="px-8 md:px-12 py-4 md:py-6 border-2 border-purple-400/50 rounded-2xl font-bold text-lg md:text-2xl backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-500 hover:scale-105">
                <Play className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6 inline" />
                <span className="hidden sm:inline">See The AI In Action</span>
                <span className="sm:hidden">See AI Demo</span>
              </a>
            </div>

            {/* Revolutionary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/90 to-red-900/90 backdrop-blur-xl rounded-2xl border border-red-500/30 p-3 md:p-6 text-center shadow-2xl">
                <div className="text-3xl md:text-4xl font-black text-red-400 mb-2">50+</div>
                <div className="text-xs md:text-sm text-red-200">Psychology Dimensions</div>
                <div className="text-xs text-gray-400 mt-2">vs 0 in everyone else</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-3 md:p-6 text-center shadow-2xl">
                <div className="text-3xl md:text-4xl font-black text-purple-400 mb-2">90%</div>
                <div className="text-xs md:text-sm text-purple-200">AI Automation</div>
                <div className="text-xs text-gray-400 mt-2">vs manual everything</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-3 md:p-6 text-center shadow-2xl">
                <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-2">1000+</div>
                <div className="text-xs md:text-sm text-cyan-200">Conversation Memory</div>
                <div className="text-xs text-gray-400 mt-2">learns & improves</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-green-900/90 backdrop-blur-xl rounded-2xl border border-green-500/30 p-3 md:p-6 text-center shadow-2xl">
                <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">NEW</div>
                <div className="text-xs md:text-sm text-green-200">Category</div>
                <div className="text-xs text-gray-400 mt-2">first of its kind</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Old World Dies */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-red-900/50 to-orange-900/50 backdrop-blur-xl border-y border-red-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">
              THE OLD WORLD DIES TODAY
            </h2>
            <p className="text-lg md:text-2xl text-red-200 max-w-4xl mx-auto leading-relaxed">
              Every messaging platform falls into one of these obsolete categories. 
              SurFox doesn't compete with them. We make them irrelevant.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {oldWorldCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/60 to-red-900/60 rounded-2xl border border-red-400/30 p-6 md:p-8 backdrop-blur-xl relative overflow-hidden">
                {/* Death X Mark */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                    <X className="w-6 h-6 md:w-8 md:h-8 text-red-400" />
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600/20 rounded-xl flex items-center justify-center mr-4 md:mr-6">
                    <category.icon className="w-6 h-6 md:w-8 md:h-8 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-red-300">{category.category}</h3>
                    <p className="text-red-200 text-xs md:text-sm opacity-75">{category.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-red-200 mb-6 leading-relaxed text-sm md:text-base">{category.description}</p>
                
                {/* Examples */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.examples.map((example, idx) => (
                    <span key={idx} className="bg-red-900/40 text-red-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-red-400/30">
                      {example}
                    </span>
                  ))}
                </div>
                
                {/* Death Reasons */}
                <div className="space-y-2">
                  <h4 className="text-red-300 font-bold mb-3 flex items-center text-sm md:text-base">
                    <Skull className="w-4 h-4 mr-2" />
                    Why They're Dead:
                  </h4>
                  {category.deaths.map((death, idx) => (
                    <div key={idx} className="flex items-center text-red-200 text-xs md:text-sm">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></div>
                      {death}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* The Revolution */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-purple-900/60 to-cyan-900/60 rounded-3xl border-2 border-purple-400/50 p-8 md:p-12 text-center backdrop-blur-xl">
              <div className="flex flex-col md:flex-row items-center justify-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-0 md:mr-8 shadow-2xl shadow-purple-500/50">
                  <Brain className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-black text-white">SURFOX</h3>
                  <p className="text-purple-300 text-lg md:text-xl">Sales Psychology AI</p>
                  <p className="text-cyan-300 text-base md:text-lg font-bold">THE REVOLUTION</p>
                </div>
              </div>
              
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">
                WE DIDN'T BUILD A BETTER MOUSETRAP.
                <br />
                <span className="text-purple-400">WE ELIMINATED THE MICE.</span>
              </h4>
              
              <p className="text-lg md:text-xl text-purple-200 leading-relaxed mb-6 md:mb-8 max-w-4xl mx-auto">
                While everyone else fights over who can send more messages faster, we created AI that understands human psychology. 
                We don't compete on volume. We make volume irrelevant by creating conversations that actually convert.
              </p>
              
              <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-4 md:p-6">
                <h5 className="text-purple-300 font-bold mb-4 text-base md:text-lg">The New Reality:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {[
                    'AI reads 50+ psychological dimensions per prospect',
                    'Learns and adapts from every conversation',
                    'Automatically qualifies and scores motivation',
                    'Escalates only when prospects are ready to buy',
                    'Handles 90% of conversations without human input',
                    'Gets smarter with every interaction'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center text-purple-200">
                      <Sparkles className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-xs md:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Feature Comparison */}
      <section className="relative py-16 md:py-20 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              OLD VS NEW WORLD
            </h2>
            <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto">
              This isn't about features. This is about a fundamental shift in how sales conversations work.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {revolutionaryFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 overflow-hidden shadow-2xl">
                {/* Mobile Layout */}
                <div className="md:hidden p-6">
                  <h3 className="text-lg font-bold text-white mb-4 text-center">{feature.feature}</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-red-900/40 border border-red-400/30 rounded-xl p-4">
                      <h4 className="text-red-300 font-bold mb-2 flex items-center text-sm">
                        <Skull className="w-4 h-4 mr-2" />
                        Old World (Everyone Else)
                      </h4>
                      <p className="text-red-200 text-xs">{feature.old}</p>
                    </div>
                    
                    <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-4">
                      <h4 className="text-purple-300 font-bold mb-2 flex items-center text-sm">
                        <Sparkles className="w-4 h-4 mr-2" />
                        New World (SurFox)
                      </h4>
                      <p className="text-purple-200 text-xs">{feature.new}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                  <div className="grid lg:grid-cols-3 gap-6 p-8">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-4">{feature.feature}</h3>
                    </div>
                    
                    <div className="bg-red-900/40 border border-red-400/30 rounded-xl p-6">
                      <h4 className="text-red-300 font-bold mb-3 flex items-center">
                        <Skull className="w-5 h-5 mr-2" />
                        Old World (Everyone Else)
                      </h4>
                      <p className="text-red-200 text-sm">{feature.old}</p>
                    </div>
                    
                    <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-6">
                      <h4 className="text-purple-300 font-bold mb-3 flex items-center">
                        <Sparkles className="w-5 h-5 mr-2" />
                        New World (SurFox)
                      </h4>
                      <p className="text-purple-200 text-sm">{feature.new}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game-Changing Results */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              GAME-CHANGING RESULTS
            </h2>
            <p className="text-lg md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
              When you revolutionize the approach, you revolutionize the results. 
              This is what happens when AI psychology meets real conversations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {gameChangingStats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6 md:p-8 text-center shadow-2xl">
                <div className="mb-6">
                  <div className="text-red-400 font-bold text-base md:text-lg mb-2 line-through opacity-75">
                    {stat.old}
                  </div>
                  <div className="text-xl md:text-2xl font-black text-green-400 mb-4">
                    {stat.new}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-400/30 rounded-xl p-3 md:p-4">
                  <div className="text-cyan-300 font-bold text-base md:text-lg">{stat.impact}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-400/30 rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-green-300 mb-4">The Bottom Line Revolution</h3>
            <p className="text-lg md:text-xl text-green-200 leading-relaxed max-w-4xl mx-auto">
              SurFox doesn't just improve your results. It changes what "results" means. 
              When AI understands psychology, everything changes: higher quality leads, 
              better conversations, more deals, less work.
            </p>
          </div>
        </div>
      </section>

      {/* Specific Battle Comparisons */}
      <section className="relative py-16 md:py-20 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              CHOOSE YOUR BATTLE
            </h2>
            <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto">
              See exactly how SurFox destroys each category of competitor in brutal detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'vs Smarter Contact',
                subtitle: 'Psychology AI vs Mass Blasting',
                description: 'Watch AI conversations demolish spray-and-pray messaging. It\'s not even close.',
                link: '/compare/surfox-vs-smarter-contact',
                color: 'red',
                icon: Flame
              },
              {
                title: 'vs TextUs',
                subtitle: 'Automation vs Manual Labor',
                description: 'Why pay $500+/month for manual work when AI handles everything automatically?',
                link: '/compare/surfox-vs-textus',
                color: 'orange',
                icon: Sword
              },
              {
                title: 'vs Launch Control',
                subtitle: 'Smart AI vs Power Tools',
                description: 'Stop scripting every message. Let SurFox AI handle conversations while you close deals.',
                link: '/compare/surfox-vs-launch-control',
                color: 'purple',
                icon: Zap
              }
            ].map((comparison, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6 md:p-8 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${
                      comparison.color === 'red' ? 'from-red-500 to-red-600' :
                      comparison.color === 'orange' ? 'from-orange-500 to-red-600' :
                      'from-purple-500 to-cyan-600'
                    } rounded-xl flex items-center justify-center mr-4`}>
                      <comparison.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white">{comparison.title}</h3>
                      <p className="text-purple-300 text-xs md:text-sm">{comparison.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">{comparison.description}</p>
                  
                  <a 
                    href={comparison.link}
                    className={`inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r ${
                      comparison.color === 'red' ? 'from-red-600 to-red-700' :
                      comparison.color === 'orange' ? 'from-orange-600 to-red-700' :
                      'from-purple-600 to-cyan-600'
                    } text-white rounded-xl font-bold transition-all group-hover:scale-105 hover:shadow-lg text-sm md:text-base`}
                  >
                    <span className="hidden sm:inline">WITNESS THE DESTRUCTION</span>
                    <span className="sm:hidden">SEE BATTLE</span>
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary CTA */}
      <section id="cta" className="relative py-16 md:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            JOIN THE REVOLUTION
          </h2>
          <p className="text-xl md:text-3xl text-purple-200 mb-6 max-w-4xl mx-auto leading-relaxed font-bold">
            Stop competing in the old world. Create the new one.
          </p>
          <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            SurFox isn't just better than the competition. We made the competition obsolete. 
            <strong className="text-white">Free 14-day trial.</strong> Experience the revolution risk-free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center mb-12 md:mb-16">
            <button className="group relative px-10 md:px-16 py-6 md:py-8 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-3xl font-black text-xl md:text-3xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center">
                <Flame className="mr-3 md:mr-4 w-8 h-8 md:w-10 md:h-10" />
                <span className="hidden sm:inline">START THE REVOLUTION</span>
                <span className="sm:hidden">START REVOLUTION</span>
                <ArrowRight className="ml-3 md:ml-4 w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 transition-transform" />
              </div>
            </button>
            <a href="#" className="px-10 md:px-16 py-6 md:py-8 border-2 border-purple-400/50 rounded-3xl font-bold text-xl md:text-3xl backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-500 hover:scale-105">
              <Play className="mr-3 md:mr-4 w-6 h-6 md:w-8 md:h-8 inline" />
              <span className="hidden sm:inline">See The Revolution</span>
              <span className="sm:hidden">See Demo</span>
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-base md:text-lg text-purple-200 mb-8 md:mb-12">
            <div className="flex items-center">
              <Shield className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-green-400" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Brain className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-green-400" />
              AI learns from day one
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-green-400" />
              Cancel anytime
            </div>
          </div>

          {/* Revolutionary Stats */}
          <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-purple-400/30 rounded-3xl p-6 md:p-8 backdrop-blur-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">The Category Leader Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-purple-400 mb-2">FIRST</div>
                <div className="text-xs md:text-sm text-purple-300">Sales Psychology AI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-cyan-400 mb-2">50+</div>
                <div className="text-xs md:text-sm text-cyan-300">Psychology Dimensions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-green-400 mb-2">90%</div>
                <div className="text-xs md:text-sm text-green-300">AI Automation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-2">NEW</div>
                <div className="text-xs md:text-sm text-yellow-300">Category Created</div>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12">
            <p className="text-base md:text-lg text-gray-400 mb-4">The revolution starts with pioneers like you</p>
            <div className="text-sm text-gray-500">
              * SurFox is currently in development. Join the revolution as a founding user.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SurFoxGeneralComparison