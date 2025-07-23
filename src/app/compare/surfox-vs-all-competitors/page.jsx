'use client'

import React, { useState } from 'react'
import { ArrowRight, Rocket, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Shield, Database, Cpu, MessageSquare, Clock, Sparkles, Crown, Mail, Activity, Eye, Layers, Inbox, Building2, TrendingDown } from 'lucide-react'
import Nav from '../../components/nav'

const SurFoxGeneralComparison = () => {
  const competitorCategories = [
    {
      category: 'Mass Messaging Platforms',
      subtitle: 'Volume-Based Approach',
      examples: ['Smarter Contact', 'Launch Control', 'ReiReply', 'Batch Leads'],
      description: 'Built for message volume, not conversation quality. High spam risk, low conversion rates.',
      icon: MessageSquare,
      limitations: [
        'No AI conversation intelligence',
        'Static messaging templates',
        'Manual lead qualification',
        'High unsubscribe rates'
      ]
    },
    {
      category: 'Manual SMS Tools',
      subtitle: 'Human-Dependent Workflow',
      examples: ['TextUs', 'Heymarket', 'SimpleTexting', 'Zipwhip'],
      description: 'Expensive manual platforms that require constant human oversight and intervention.',
      icon: Users,
      limitations: [
        'Requires dedicated staff time',
        'No automated qualification',
        'Limited scalability',
        'High operational overhead'
      ]
    },
    {
      category: 'CRM Extensions',
      subtitle: 'Secondary Feature Set',
      examples: ['FollowUpBoss', 'REsimpli', 'Chime', 'BoomTown'],
      description: 'SMS as an afterthought feature within broader CRM systems. Limited SMS-specific capabilities.',
      icon: Database,
      limitations: [
        'SMS not core competency',
        'Basic messaging features',
        'No conversation optimization',
        'Generic communication approach'
      ]
    },
    {
      category: 'Email-First Platforms',
      subtitle: 'Wrong Channel Focus',
      examples: ['Instantly.ai', 'Reply.io', 'Outbound.io', 'Smartlead'],
      description: 'Email automation platforms attempting SMS without mobile-first optimization.',
      icon: Mail,
      limitations: [
        'Email-centric user experience',
        'Poor mobile optimization',
        'Limited SMS deliverability',
        'Outdated communication strategy'
      ]
    }
  ]

  const surfoxAdvantages = [
    {
      area: 'AI Intelligence',
      traditional: 'Static message templates, manual qualification',
      surfox: 'Dynamic AI that reads 50+ psychological dimensions and adapts in real-time',
      impact: 'Higher quality conversations, better qualification accuracy'
    },
    {
      area: 'Learning Capability',
      traditional: 'Fixed functionality, no improvement over time',
      surfox: 'Continuous learning from every conversation, improving with scale',
      impact: 'Performance improves automatically, higher ROI over time'
    },
    {
      area: 'Conversation Quality',
      traditional: 'Generic messages, high unsubscribe rates',
      surfox: 'Psychology-matched messaging, personality-based adaptation',
      impact: 'Higher engagement rates, lower churn'
    },
    {
      area: 'Lead Qualification',
      traditional: 'Manual sorting, time-intensive processes',
      surfox: 'Automated psychological scoring, intelligent escalation',
      impact: 'Sales teams focus only on ready-to-buy prospects'
    },
    {
      area: 'Scalability',
      traditional: 'Linear scaling requires proportional human resources',
      surfox: 'AI handles 90% of interactions, exponential scaling possible',
      impact: 'Unlimited growth without proportional cost increases'
    },
    {
      area: 'Business Intelligence',
      traditional: 'Basic metrics, limited insights',
      surfox: 'Deep psychological analytics, conversation intelligence',
      impact: 'Strategic insights into customer psychology and behavior patterns'
    }
  ]

  const moatFactors = [
    {
      factor: 'Proprietary Psychology Engine',
      description: 'Years of R&D building AI that understands human psychology in sales contexts',
      icon: Brain,
      defensibility: 'High - requires specialized expertise and extensive training data'
    },
    {
      factor: 'Learning Network Effects',
      description: 'More conversations make the AI smarter, creating compound advantages',
      icon: TrendingUp,
      defensibility: 'Very High - advantages compound with scale'
    },
    {
      factor: 'Domain Expertise',
      description: '20+ years of sales experience translated into AI behavioral models',
      icon: Target,
      defensibility: 'High - domain knowledge difficult to replicate'
    },
    {
      factor: 'Technical Architecture',
      description: 'Purpose-built for conversation intelligence, not adapted from other use cases',
      icon: Cpu,
      defensibility: 'Medium-High - significant engineering investment required'
    }
  ]

  const capabilityComparisons = [
    {
      capability: 'Message Intelligence',
      traditional: 'Generic templates for everyone',
      surfox: 'AI adapts every message to individual psychology',
      advantage: 'Personalization at scale'
    },
    {
      capability: 'Learning Ability',
      traditional: 'Static functionality forever',
      surfox: 'Gets smarter with every conversation',
      advantage: 'Continuous improvement'
    },
    {
      capability: 'Lead Scoring',
      traditional: 'Manual review and qualification',
      surfox: 'Automated psychological analysis',
      advantage: 'Instant qualification'
    },
    {
      capability: 'Conversation Memory',
      traditional: 'No context between messages',
      surfox: 'Full conversation intelligence',
      advantage: 'Meaningful dialogue'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white">
      <Nav />

      {/* Hero Section */}
      <section className="relative py-20 pt-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            
            {/* Category Leadership Badge */}
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/30 backdrop-blur-sm mb-8">
              <Crown className="w-6 h-6 mr-3 text-purple-300" />
              <span className="text-purple-200 font-bold text-lg">CATEGORY CREATOR</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent block mb-4">
                Why SurFox
              </span>
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block mb-4">
                Changes Everything
              </span>
            </h1>
            
            <div className="text-2xl text-purple-200 space-y-6 mb-12 max-w-5xl mx-auto">
              <p className="font-bold">
                We didn't build a better SMS platform. We created an entirely new category.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                While competitors focus on message volume and basic automation, SurFox pioneered 
                <strong className="text-white"> Sales Psychology AI</strong> – technology that understands 
                human behavior and adapts conversations in real-time. This isn't an improvement; 
                it's a fundamental transformation in how sales conversations work.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <button className="group px-12 py-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <div className="relative flex items-center justify-center">
                  <Brain className="mr-3 w-8 h-8" />
                  See The Technology
                  <ArrowRight className="ml-3 w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
              <a href="#analysis" className="px-12 py-6 border-2 border-purple-400/50 rounded-2xl font-bold text-2xl backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-500 hover:scale-105">
                <Play className="mr-3 w-6 h-6 inline" />
                Watch Demo
              </a>
            </div>

            {/* Technical Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6 text-center shadow-2xl">
                <div className="text-4xl font-bold text-purple-400 mb-2">FIRST</div>
                <div className="text-sm text-purple-200">Sales Psychology AI</div>
                <div className="text-xs text-gray-400 mt-2">Category Creator</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-6 text-center shadow-2xl">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-sm text-cyan-200">Psychology Dimensions</div>
                <div className="text-xs text-gray-400 mt-2">vs 0 in competitors</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-green-900/90 backdrop-blur-xl rounded-2xl border border-green-500/30 p-6 text-center shadow-2xl">
                <div className="text-4xl font-bold text-green-400 mb-2">AI</div>
                <div className="text-sm text-green-200">Learning Engine</div>
                <div className="text-xs text-gray-400 mt-2">gets smarter over time</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-yellow-900/90 backdrop-blur-xl rounded-2xl border border-yellow-500/30 p-6 text-center shadow-2xl">
                <div className="text-4xl font-bold text-yellow-400 mb-2">90%</div>
                <div className="text-sm text-yellow-200">AI Automation</div>
                <div className="text-xs text-gray-400 mt-2">vs manual processes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landscape */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900/50 to-purple-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              The Current Market Landscape
            </h2>
            <p className="text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
              Understanding why existing solutions fall short and how SurFox addresses fundamental industry limitations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {competitorCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/60 to-red-900/40 rounded-2xl border border-red-400/30 p-8 backdrop-blur-xl relative">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center mr-6">
                    <category.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-300">{category.category}</h3>
                    <p className="text-red-200 text-sm opacity-75">{category.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-red-200 mb-6 leading-relaxed">{category.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.examples.map((example, idx) => (
                    <span key={idx} className="bg-red-900/40 text-red-300 px-3 py-1 rounded-full text-sm border border-red-400/30">
                      {example}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-red-300 font-bold mb-3 text-sm">Key Limitations:</h4>
                  {category.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-center text-red-200 text-sm">
                      <TrendingDown className="w-4 h-4 mr-3 flex-shrink-0 text-red-400" />
                      {limitation}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* SurFox Position */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-purple-900/60 to-cyan-900/60 rounded-3xl border-2 border-purple-400/50 p-12 text-center backdrop-blur-xl">
              <div className="flex flex-col md:flex-row items-center justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl flex items-center justify-center mb-6 md:mb-0 md:mr-8 shadow-2xl shadow-purple-500/50">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-4xl font-bold text-white">SurFox</h3>
                  <p className="text-purple-300 text-xl">Sales Psychology AI Platform</p>
                  <p className="text-cyan-300 text-lg font-bold">THE NEW CATEGORY</p>
                </div>
              </div>
              
              <h4 className="text-3xl font-bold text-white mb-6">
                The Industry's First Psychology AI Platform
              </h4>
              
              <p className="text-xl text-purple-200 leading-relaxed mb-8 max-w-4xl mx-auto">
                SurFox addresses fundamental industry limitations through proprietary AI that understands 
                human psychology in sales contexts. Our platform doesn't compete on message volume or 
                basic automation – we've created an entirely new category focused on conversation quality 
                and psychological intelligence.
              </p>
              
              <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-6">
                <h5 className="text-purple-300 font-bold mb-4 text-lg">Core Differentiators:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Real-time psychological analysis across 50+ dimensions',
                    'Adaptive learning that improves with every conversation',
                    'Automated qualification based on behavioral indicators',
                    'Intelligent escalation when prospects show buying intent',
                    'Conversation intelligence that maintains context',
                    'Psychology-based personalization at scale'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center text-purple-200">
                      <Sparkles className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Comparison */}
      <section className="relative py-20 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Traditional vs Psychology AI
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              A fundamental comparison of how SurFox's Psychology AI changes the game across key capabilities.
            </p>
          </div>

          <div className="space-y-6">
            {surfoxAdvantages.map((advantage, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-3 gap-6 p-8">
                  <div className="text-center lg:text-left">
                    <h3 className="text-xl font-bold text-white mb-4">{advantage.area}</h3>
                    <div className="text-sm text-gray-400">{advantage.impact}</div>
                  </div>
                  
                  <div className="bg-red-900/40 border border-red-400/30 rounded-xl p-6">
                    <h4 className="text-red-300 font-bold mb-3 flex items-center">
                      <X className="w-5 h-5 mr-2" />
                      Traditional Approach
                    </h4>
                    <p className="text-red-200 text-sm">{advantage.traditional}</p>
                  </div>
                  
                  <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-6">
                    <h4 className="text-purple-300 font-bold mb-3 flex items-center">
                      <Check className="w-5 h-5 mr-2" />
                      SurFox Approach
                    </h4>
                    <p className="text-purple-200 text-sm">{advantage.surfox}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Moat */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Our Technical Moat
            </h2>
            <p className="text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
              Understanding the technical and strategic advantages that create lasting competitive differentiation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {moatFactors.map((factor, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/60 to-purple-900/60 rounded-2xl border border-purple-500/30 p-8 backdrop-blur-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center mr-6">
                    <factor.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{factor.factor}</h3>
                    <p className="text-purple-300 text-sm">{factor.defensibility}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-400/30 rounded-2xl p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-green-300 mb-4">Network Effects Advantage</h3>
            <p className="text-xl text-green-200 leading-relaxed max-w-4xl mx-auto">
              As more conversations flow through SurFox, our AI becomes smarter about human psychology. 
              This creates a compounding advantage that becomes stronger over time and harder for 
              competitors to replicate. The more the AI learns, the better it performs.
            </p>
          </div>
        </div>
      </section>

      {/* Specific Competitor Comparisons */}
      <section className="relative py-20 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Detailed Competitive Analysis
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Head-to-head comparisons with leading platforms across key business criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'SurFox vs Smarter Contact',
                subtitle: 'AI Intelligence vs Mass Messaging',
                description: 'How psychology AI creates superior outcomes compared to volume-based approaches.',
                link: '/compare/surfox-vs-smarter-contact',
                color: 'purple',
                icon: Brain
              },
              {
                title: 'SurFox vs TextUs',
                subtitle: 'Automation vs Manual Operations',
                description: 'Cost advantages of AI automation over human-dependent workflows.',
                link: '/compare/surfox-vs-textus',
                color: 'cyan',
                icon: Cpu
              },
              {
                title: 'SurFox vs Launch Control',
                subtitle: 'Intelligence vs Power Tools',
                description: 'AI-driven conversation management versus script-based automation.',
                link: '/compare/surfox-vs-launch-control',
                color: 'blue',
                icon: Zap
              }
            ].map((comparison, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${
                      comparison.color === 'purple' ? 'from-purple-500 to-purple-600' :
                      comparison.color === 'cyan' ? 'from-cyan-500 to-cyan-600' :
                      'from-blue-500 to-blue-600'
                    } rounded-xl flex items-center justify-center mr-4`}>
                      <comparison.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{comparison.title}</h3>
                      <p className="text-purple-300 text-sm">{comparison.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{comparison.description}</p>
                  
                  <a 
                    href={comparison.link}
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${
                      comparison.color === 'purple' ? 'from-purple-600 to-purple-700' :
                      comparison.color === 'cyan' ? 'from-cyan-600 to-cyan-700' :
                      'from-blue-600 to-blue-700'
                    } text-white rounded-xl font-bold transition-all group-hover:scale-105 hover:shadow-lg`}
                  >
                    View Analysis
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional CTA */}
      // Professional CTA section updates
<section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
  <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
    <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
      Experience The New Category
    </h2>
    <p className="text-2xl text-purple-200 mb-6 max-w-4xl mx-auto leading-relaxed font-medium">
      Be among the first to experience the industry's most advanced sales communication platform.
    </p>
    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
      See why SurFox represents the future of sales communication. 
      <strong className="text-white">30-day money back guarantee</strong> and experience 
      what true AI intelligence can do for your sales conversations.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
      <button className="group relative px-16 py-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl font-bold text-3xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative flex items-center justify-center">
          <Brain className="mr-4 w-10 h-10" />
          Get Started Risk-Free
          <ArrowRight className="ml-4 w-10 h-10 group-hover:translate-x-2 transition-transform" />
        </div>
      </button>
      <a href="#" className="px-16 py-8 border-2 border-purple-400/50 rounded-3xl font-bold text-3xl backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-500 hover:scale-105">
        <Play className="mr-4 w-8 h-8 inline" />
        Schedule Demo
      </a>
    </div>
    
    <div className="flex flex-wrap items-center justify-center gap-8 text-lg text-purple-200 mb-12">
      <div className="flex items-center">
        <Shield className="w-6 h-6 mr-3 text-green-400" />
        No credit card required
      </div>
      <div className="flex items-center">
        <Brain className="w-6 h-6 mr-3 text-green-400" />
        AI starts learning immediately
      </div>
      <div className="flex items-center">
        <Rocket className="w-6 h-6 mr-3 text-green-400" />
        Full platform access
      </div>
    </div>

          {/* Technical Leadership Stats */}
          <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 border border-purple-400/30 rounded-3xl p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Technology Leadership</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">FIRST</div>
                <div className="text-sm text-purple-300">Psychology AI Platform</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-sm text-cyan-300">AI Dimensions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
                <div className="text-sm text-green-300">Automation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">NEW</div>
                <div className="text-sm text-yellow-300">Category Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SurFoxGeneralComparison