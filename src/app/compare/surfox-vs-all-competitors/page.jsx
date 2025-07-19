'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, MessageSquare, Clock, Sparkles, AlertCircle, Star, Crown, DollarSign, Workflow, Bot, User, FileText, Settings, Timer, Phone, Mail, Rocket, Activity, Eye, Layers, LineChart, ChevronRight, Inbox, CreditCard } from 'lucide-react'

const SurFoxGeneralComparison = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
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

  const competitorCategories = [
    {
      category: 'Text Blasters',
      examples: ['Smarter Contact', 'Launch Control', 'ReiReply'],
      description: 'Spray and pray. All outbound, no intelligence.',
      icon: MessageSquare,
      color: 'red',
      problems: ['Mass blasting approach', 'No conversation intelligence', 'High spam risk', 'Manual follow-up required']
    },
    {
      category: 'Inbox Tools',
      examples: ['TextUs', 'Heymarket', 'SimpleTexting'],
      description: 'Manual effort. You do the work, not the tool.',
      icon: Inbox,
      color: 'orange',
      problems: ['Everything is manual', 'No AI assistance', 'Expensive per message', 'Time-intensive management']
    },
    {
      category: 'CRM Add-ons',
      examples: ['FollowUpBoss', 'REsimpli', 'Chime'],
      description: 'Generic. Not built for messaging conversion.',
      icon: Database,
      color: 'yellow',
      problems: ['Basic text features', 'No conversation optimization', 'Limited automation', 'Poor SMS focus']
    },
    {
      category: 'Sales Engagement',
      examples: ['Outbound.io', 'Instantly.ai', 'Reply.io'],
      description: 'Email first. No focus on SMS behavior.',
      icon: Mail,
      color: 'gray',
      problems: ['Email-centric design', 'SMS as afterthought', 'No mobile optimization', 'Wrong channel focus']
    }
  ]

  const universalComparison = [
    { feature: 'AI-generated replies', surfox: true, blasters: false, inbox: false, crm: false, email: 'partial' },
    { feature: 'Self-learning follow-up', surfox: true, blasters: false, inbox: false, crm: false, email: false },
    { feature: 'Tone/persona customization', surfox: true, blasters: false, inbox: false, crm: false, email: 'basic' },
    { feature: 'Dynamic message variation', surfox: true, blasters: false, inbox: false, crm: false, email: 'partial' },
    { feature: 'Hot lead alerts (AI-driven)', surfox: true, blasters: false, inbox: 'manual', crm: false, email: 'partial' },
    { feature: 'Chrome import extension', surfox: true, blasters: false, inbox: false, crm: false, email: false },
    { feature: 'Lead motivation scoring', surfox: true, blasters: false, inbox: false, crm: false, email: false },
    { feature: 'Escalation automation', surfox: true, blasters: false, inbox: false, crm: false, email: false },
    { feature: 'Real-time response coordination', surfox: true, blasters: false, inbox: 'manual', crm: false, email: 'email only' },
    { feature: 'Pricing transparency', surfox: true, blasters: false, inbox: false, crm: false, email: 'partial' }
  ]

  const specificComparisons = [
    {
      title: 'vs Smarter Contact',
      subtitle: 'AI Conversations vs Mass Blasting',
      description: 'See how AI-powered conversations deliver 5-8x better results than traditional mass messaging.',
      link: '/compare/surfox-vs-smarter-contact',
      color: 'blue'
    },
    {
      title: 'vs TextUs',
      subtitle: 'Automation vs Manual Labor',
      description: 'Why pay $500+/month for manual work when AI can handle 90% of conversations automatically?',
      link: '/compare/surfox-vs-textus',
      color: 'emerald'
    },
    {
      title: 'vs Launch Control',
      subtitle: 'Smart AI vs Power Tools',
      description: 'Stop scripting every message manually. Let SurFox AI handle conversations while you focus on closing.',
      link: '/compare/surfox-vs-launch-control',
      color: 'purple'
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
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
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
                Start Free Trial
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
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center overflow-hidden pt-16">
        {/* Epic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-50"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30"></div>
          <div 
            className="absolute w-[800px] h-[800px] bg-gradient-conic from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
            style={{
              top: '10%',
              left: '50%',
              transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              animation: 'spin 120s linear infinite'
            }}
          ></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200 mb-4">
                <Crown className="w-4 h-4 mr-2 text-yellow-600" />
                The Category Leader
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-gray-900">Most Platforms</span>
              <br />
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Blast.
              </span>
              <br />
              <span className="text-gray-900">SurFox</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ml-4">
                Converts.
              </span>
            </h1>
            
            <p className="text-2xl text-gray-700 mb-6 leading-relaxed max-w-4xl mx-auto">
              Don't just send messages. Close deals.
            </p>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              SurFox isn't a texting tool — it's a <strong className="text-gray-800">conversion machine</strong>. While everyone else competes on message volume, we focus on what actually matters: turning conversations into revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a href="#comparison" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center">
                See Head-to-Head Matchups
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#demo" className="group border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center">
                <Play className="mr-3 w-6 h-6" />
                Watch Product Demo
              </a>
            </div>

            {/* Category Disruption */}
            <div className="bg-gradient-to-r from-white/80 to-gray-100/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 max-w-5xl mx-auto shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SurFox isn't an upgrade. It's a different category.</h3>
              <p className="text-lg text-gray-700 mb-8">
                You're not choosing between texting platforms. You're choosing between <strong className="text-red-600">manual outreach</strong> and <strong className="text-blue-600">automated conversion</strong>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">Traditional Tools</div>
                  <div className="text-gray-600">Send messages → Hope for replies → Manually qualify → Maybe close</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">SurFox AI</div>
                  <div className="text-gray-800">AI engages → Learns & qualifies → Escalates hot leads → You close deals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Messaging Landscape
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every other platform falls into one of these outdated categories. SurFox is the only true AI conversation engine.
            </p>
          </div>

          {/* Flowing Card Layout */}
          <div className="relative">
            {/* Background connecting lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <svg className="w-full h-full opacity-20" viewBox="0 0 800 600">
                <path d="M100,150 Q400,100 700,150" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-400" />
                <path d="M100,300 Q400,250 700,300" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-400" />
                <path d="M100,450 Q400,400 700,450" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-400" />
              </svg>
            </div>

            <div className="space-y-12 relative z-10">
              {competitorCategories.map((category, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  {/* Category Card */}
                  <div className={`flex-1 bg-gray-100 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 ${
                    index % 2 === 1 ? 'ml-auto' : 'mr-auto'
                  } max-w-2xl`}>
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                        <category.icon className="w-7 h-7 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{category.category}</h3>
                        <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                        
                        {/* Examples as flowing tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {category.examples.map((example, idx) => (
                            <span key={idx} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-300">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Problems in a more visual way */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.problems.map((problem, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-gray-600 text-sm">
                          <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                            <X className="w-4 h-4 text-red-500" />
                          </div>
                          <span>{problem}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connecting element */}
                  <div className="hidden lg:flex w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>

          {/* SurFox Hero Card - Centered and Prominent */}
          <div className="mt-20 flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-20"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-10 text-center max-w-3xl backdrop-blur-sm">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-blue-500/25">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold text-blue-600">SurFox AI</h3>
                    <p className="text-blue-700 text-lg">AI Conversation Engine</p>
                  </div>
                </div>
                
                <p className="text-lg text-blue-800 mb-8 leading-relaxed">
                  The only platform built from the ground up for AI-powered sales conversations that actually convert.
                </p>
                
                {/* Features in a more dynamic layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'AI writes & optimizes every message',
                    'Learns from every conversation',
                    'Automatically qualifies leads',
                    'Escalates only hot prospects',
                    'Built for conversion, not volume',
                    'Transparent pricing & ROI'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center text-blue-800">
                      <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Call to action */}
                <div className="mt-8">
                  <a href="#comparison" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                    See How We Compare
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Comparison Table */}
      <section id="comparison" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Universal Feature Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how SurFox stacks up against every category of messaging platform.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 bg-gray-100 border-b border-gray-200 text-sm">
              <div className="col-span-4 lg:col-span-3 p-3">
                <h3 className="font-semibold text-gray-900">Feature</h3>
              </div>
              <div className="col-span-2 lg:col-span-2 p-3 text-center border-l border-gray-200">
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded mr-1"></div>
                  <span className="font-semibold text-gray-900 text-xs">SurFox</span>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1 p-3 text-center border-l border-gray-200">
                <span className="font-medium text-gray-600 text-xs">Text Blasters</span>
              </div>
              <div className="col-span-2 lg:col-span-2 p-3 text-center border-l border-gray-200">
                <span className="font-medium text-gray-600 text-xs">Inbox Tools</span>
              </div>
              <div className="col-span-2 lg:col-span-2 p-3 text-center border-l border-gray-200">
                <span className="font-medium text-gray-600 text-xs">CRM Add-ons</span>
              </div>
              <div className="col-span-2 lg:col-span-2 p-3 text-center border-l border-gray-200">
                <span className="font-medium text-gray-600 text-xs">Sales Engagement</span>
              </div>
            </div>

            {universalComparison.map((item, index) => (
              <div key={index} className="grid grid-cols-12 border-b border-gray-200 hover:bg-gray-50 transition-colors text-sm">
                <div className="col-span-4 lg:col-span-3 p-3">
                  <span className="text-gray-700">{item.feature}</span>
                </div>
                
                {/* SurFox Column */}
                <div className="col-span-2 lg:col-span-2 p-3 text-center border-l border-gray-200">
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
                
                {/* Other Columns */}
                {[item.blasters, item.inbox, item.crm, item.email].map((value, idx) => (
                  <div key={idx} className="col-span-2 lg:col-span-1 p-3 text-center border-l border-gray-200">
                    {value === true ? (
                      <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                    ) : value === false ? (
                      <X className="w-4 h-4 text-red-500 mx-auto" />
                    ) : (
                      <div className="text-xs text-yellow-600">⚠️</div>
                    )}
                  </div>
                ))}
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
              The ROI Reality Check
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While others compete on features, we deliver results. Here's the math that matters.
            </p>
          </div>

          <div className="bg-gray-100 border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-12 bg-gray-200 border-b border-gray-300">
              <div className="col-span-4 p-4">
                <h3 className="font-semibold text-gray-900">Metric</h3>
              </div>
              <div className="col-span-4 p-4 text-center border-l border-gray-300">
                <div className="flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded mr-2"></div>
                  <span className="font-semibold text-gray-900">SurFox</span>
                </div>
              </div>
              <div className="col-span-4 p-4 text-center border-l border-gray-300">
                <span className="font-medium text-gray-600">Traditional Tools</span>
              </div>
            </div>

            {[
              { metric: 'Time spent qualifying', surfox: '0 min (AI)', traditional: '3–5 hours/day' },
              { metric: 'Average reply rate', surfox: '12–18%', traditional: '2–5%' },
              { metric: 'Hot leads per 1,000', surfox: '50+', traditional: '10–15' },
              { metric: 'Deals per 1,000 leads', surfox: '15–25', traditional: '1–3' },
              { metric: 'Real estate ROI', surfox: '$30K–$50K', traditional: '$5K–$10K' },
              { metric: 'Monthly cost (all-in)', surfox: '$197–$997', traditional: '$500–$2,000+' }
            ].map((item, index) => (
              <div key={index} className="grid grid-cols-12 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div className="col-span-4 p-4">
                  <span className="text-gray-700">{item.metric}</span>
                </div>
                <div className="col-span-4 p-4 text-center border-l border-gray-200">
                  <span className="text-emerald-600 font-semibold">{item.surfox}</span>
                </div>
                <div className="col-span-4 p-4 text-center border-l border-gray-200">
                  <span className="text-red-600">{item.traditional}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-emerald-700 mb-4">Bottom Line</h3>
              <p className="text-lg text-gray-700">
                SurFox doesn't just cost less. It makes you more. While traditional tools drain your time and budget, 
                SurFox AI works 24/7 to deliver qualified leads ready to close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Comparisons */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Head-to-Head Matchups
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly how SurFox destroys the competition in detailed comparisons.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specificComparisons.map((comparison, index) => (
              <div key={index} className={`bg-white border border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all group cursor-pointer`}>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{comparison.title}</h3>
                  <p className={`text-sm font-medium mb-3 ${
                    comparison.color === 'blue' ? 'text-blue-600' :
                    comparison.color === 'emerald' ? 'text-emerald-600' :
                    'text-purple-600'
                  }`}>
                    {comparison.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{comparison.description}</p>
                </div>
                
                <a 
                  href={comparison.link}
                  className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all group-hover:translate-x-1 ${
                    comparison.color === 'blue' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                    comparison.color === 'emerald' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' :
                    'bg-purple-100 text-purple-700 border border-purple-200'
                  }`}
                >
                  View Full Breakdown
                  <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Start Converting Instead of Blasting
          </h2>
          <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
            Join thousands of businesses who stopped playing the volume game and started winning with AI conversations.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            <strong className="text-gray-800">Free 14-day trial.</strong> No setup fees. See why SurFox converts while others just blast.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="#" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-lg font-bold text-lg hover:bg-white transition-all">
              Schedule Demo
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-emerald-500" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-emerald-500" />
              Setup in 15 minutes
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-emerald-500" />
              Cancel anytime
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Category Leader in AI Sales Conversations</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">100K+</div>
                  <div className="text-sm text-gray-600">Conversations Powered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">94%</div>
                  <div className="text-sm text-gray-600">AI Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">5.2x</div>
                  <div className="text-sm text-gray-600">Better ROI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600">99.9%</div>
                  <div className="text-sm text-gray-600">Platform Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
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

export default SurFoxGeneralComparison