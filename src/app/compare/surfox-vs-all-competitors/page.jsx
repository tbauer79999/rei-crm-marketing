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
                Start Free Trial
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
          <div className="absolute inset-0 bg-slate-950"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div 
            className="absolute w-[800px] h-[800px] bg-gradient-conic from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-full blur-3xl"
            style={{
              top: '10%',
              left: '50%',
              transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              animation: 'spin 120s linear infinite'
            }}
          ></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-600/30 mb-4">
                <Crown className="w-4 h-4 mr-2 text-yellow-400" />
                The Category Leader
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-white">Most Platforms</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
                Blast.
              </span>
              <br />
              <span className="text-white">SurFox</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ml-4">
                Converts.
              </span>
            </h1>
            
            <p className="text-2xl text-slate-300 mb-6 leading-relaxed max-w-4xl mx-auto">
              Don't just send messages. Close deals.
            </p>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-4xl mx-auto">
              SurFox isn't a texting tool — it's a <strong className="text-slate-300">conversion machine</strong>. While everyone else competes on message volume, we focus on what actually matters: turning conversations into revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a href="#comparison" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center">
                See Head-to-Head Matchups
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#demo" className="group border-2 border-slate-600 text-slate-300 px-10 py-5 rounded-lg font-bold text-lg hover:bg-slate-800/50 transition-all flex items-center justify-center">
                <Play className="mr-3 w-6 h-6" />
                Watch Product Demo
              </a>
            </div>

            {/* Category Disruption */}
            <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">SurFox isn't an upgrade. It's a different category.</h3>
              <p className="text-lg text-slate-300 mb-8">
                You're not choosing between texting platforms. You're choosing between <strong className="text-red-400">manual outreach</strong> and <strong className="text-blue-400">automated conversion</strong>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">Traditional Tools</div>
                  <div className="text-slate-400">Send messages → Hope for replies → Manually qualify → Maybe close</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">SurFox AI</div>
                  <div className="text-slate-300">AI engages → Learns & qualifies → Escalates hot leads → You close deals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Categories */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Messaging Landscape
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Every other platform falls into one of these outdated categories. SurFox is the only true AI conversation engine.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {competitorCategories.map((category, index) => (
              <div key={index} className={`bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-300">{category.category}</h3>
                    <p className="text-slate-500">{category.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-slate-400 mb-2">Examples:</div>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, idx) => (
                      <span key={idx} className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  {category.problems.map((problem, idx) => (
                    <div key={idx} className="flex items-center text-slate-400 text-sm">
                      <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {problem}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* SurFox Category */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 text-center ring-1 ring-blue-500/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400">SurFox AI</h3>
                <p className="text-blue-300">AI Conversation Engine</p>
              </div>
            </div>
            
            <p className="text-lg text-blue-200 mb-6">
              The only platform built from the ground up for AI-powered sales conversations that actually convert.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'AI writes & optimizes every message',
                'Learns from every conversation',
                'Automatically qualifies leads',
                'Escalates only hot prospects',
                'Built for conversion, not volume',
                'Transparent pricing & ROI'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center text-blue-200">
                  <Check className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Universal Comparison Table */}
      <section id="comparison" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Universal Feature Comparison
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              See how SurFox stacks up against every category of messaging platform.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-12 bg-slate-800/50 border-b border-slate-700/50 text-sm">
              <div className="col-span-4 lg:col-span-3 p-3">
                <h3 className="font-semibold text-white">Feature</h3>
              </div>
              <div className="col-span-2 lg:col-span-2 p-3 text-center border-l border-slate-700/50">
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-1">
                    <Terminal className="w-2 h-2 text-white" />
                  </div>
                  <span className="font-semibold text-white text-xs">SurFox</span>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1 p-3 text-center border-l border-slate-700/50">
                <span className="font-medium text-slate-400 text-xs">Text Blasters</span>
              </div>
              <div className="col-span-2 lg:col-span-2 p-3 text-center border-l border-slate-700/50">
                <span className="font-medium text-slate-400 text-xs">Inbox Tools</span>
              </div>
              <div className="col-span-2 lg:col-span-2 p-3 text-center border-l border-slate-700/50">
                <span className="font-medium text-slate-400 text-xs">CRM Add-ons</span>
              </div>
              <div className="col-span-2 lg:col-span-2 p-3 text-center border-l border-slate-700/50">
                <span className="font-medium text-slate-400 text-xs">Sales Engagement</span>
              </div>
            </div>

            {universalComparison.map((item, index) => (
              <div key={index} className="grid grid-cols-12 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors text-sm">
                <div className="col-span-4 lg:col-span-3 p-3">
                  <span className="text-slate-300">{item.feature}</span>
                </div>
                
                {/* SurFox Column */}
                <div className="col-span-2 lg:col-span-2 p-3 text-center border-l border-slate-700/30">
                  <div className="flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
                
                {/* Other Columns */}
                {[item.blasters, item.inbox, item.crm, item.email].map((value, idx) => (
                  <div key={idx} className="col-span-2 lg:col-span-1 p-3 text-center border-l border-slate-700/30">
                    {value === true ? (
                      <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                    ) : value === false ? (
                      <X className="w-4 h-4 text-red-400 mx-auto" />
                    ) : (
                      <div className="text-xs text-yellow-400">⚠️</div>
                    )}
                  </div>
                ))}
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
              The ROI Reality Check
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              While others compete on features, we deliver results. Here's the math that matters.
            </p>
          </div>

          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-12 bg-slate-800/50 border-b border-slate-700/50">
              <div className="col-span-4 p-4">
                <h3 className="font-semibold text-white">Metric</h3>
              </div>
              <div className="col-span-4 p-4 text-center border-l border-slate-700/50">
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                    <Terminal className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-semibold text-white">SurFox</span>
                </div>
              </div>
              <div className="col-span-4 p-4 text-center border-l border-slate-700/50">
                <span className="font-medium text-slate-400">Traditional Tools</span>
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
              <div key={index} className="grid grid-cols-12 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors">
                <div className="col-span-4 p-4">
                  <span className="text-slate-300">{item.metric}</span>
                </div>
                <div className="col-span-4 p-4 text-center border-l border-slate-700/30">
                  <span className="text-emerald-400 font-semibold">{item.surfox}</span>
                </div>
                <div className="col-span-4 p-4 text-center border-l border-slate-700/30">
                  <span className="text-red-400">{item.traditional}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-emerald-900/20 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Bottom Line</h3>
              <p className="text-lg text-slate-300">
                SurFox doesn't just cost less. It makes you more. While traditional tools drain your time and budget, 
                SurFox AI works 24/7 to deliver qualified leads ready to close.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Comparisons */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Head-to-Head Matchups
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              See exactly how SurFox destroys the competition in detailed comparisons.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specificComparisons.map((comparison, index) => (
              <div key={index} className={`bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all group cursor-pointer`}>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{comparison.title}</h3>
                  <p className={`text-sm font-medium mb-3 ${
                    comparison.color === 'blue' ? 'text-blue-400' :
                    comparison.color === 'emerald' ? 'text-emerald-400' :
                    'text-purple-400'
                  }`}>
                    {comparison.subtitle}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">{comparison.description}</p>
                </div>
                
                <a 
                  href={comparison.link}
                  className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all group-hover:translate-x-1 ${
                    comparison.color === 'blue' ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' :
                    comparison.color === 'emerald' ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' :
                    'bg-purple-600/20 text-purple-400 border border-purple-500/30'
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
      <section id="cta" className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Start Converting Instead of Blasting
          </h2>
          <p className="text-xl text-slate-300 mb-4 max-w-3xl mx-auto">
            Join thousands of businesses who stopped playing the volume game and started winning with AI conversations.
          </p>
          <p className="text-lg text-slate-400 mb-8 max-w-3xl mx-auto">
            <strong className="text-slate-300">Free 14-day trial.</strong> No setup fees. See why SurFox converts while others just blast.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="#" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="border-2 border-slate-600 text-slate-300 px-10 py-5 rounded-lg font-bold text-lg hover:bg-slate-800/50 transition-all">
              Schedule Demo
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
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

          <div className="mt-16">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Category Leader in AI Sales Conversations</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">100K+</div>
                  <div className="text-sm text-slate-400">Conversations Powered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">94%</div>
                  <div className="text-sm text-slate-400">AI Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">5.2x</div>
                  <div className="text-sm text-slate-400">Better ROI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">99.9%</div>
                  <div className="text-sm text-slate-400">Platform Uptime</div>
                </div>
              </div>
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

export default SurFoxGeneralComparison