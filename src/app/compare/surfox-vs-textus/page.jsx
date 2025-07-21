'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Menu, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, MessageSquare, Clock, Sparkles, AlertCircle, Star, Crown, DollarSign, Workflow, Bot, User, FileText, Settings, Timer, Phone, Mail, Eye, Lightbulb, Layers, Activity } from 'lucide-react'

const SurFoxCompetitorComparison = () => {
  const [activeFeatureSet, setActiveFeatureSet] = useState(0)
  const [activeCompetitor, setActiveCompetitor] = useState('textus')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse tracking for subtle parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const competitors = {
    textus: { name: 'TextUs', color: 'gray', desc: 'Manual Messaging Platform' },
    launchcontrol: { name: 'Launch Control', color: 'orange', desc: 'Basic SMS Automation' },
    smartercontact: { name: 'Smarter Contact', color: 'green', desc: 'Contact Management' }
  }

  const featureSets = [
    {
      category: 'Sales Psychology AI',
      icon: Brain,
      color: 'purple',
      features: [
        { 
          name: 'Psychological profiling (50+ dimensions)', 
          surfox: 'Advanced personality analysis', 
          textus: 'Not available', 
          launchcontrol: 'Not available',
          smartercontact: 'Not available'
        },
        { 
          name: 'Behavioral pattern learning', 
          surfox: 'AI learns from every conversation', 
          textus: 'No learning capability', 
          launchcontrol: 'No learning capability',
          smartercontact: 'No learning capability'
        },
        { 
          name: 'Conversation memory by plan', 
          surfox: '100-1000+ conversation memory', 
          textus: 'No memory system', 
          launchcontrol: 'Basic conversation history',
          smartercontact: 'Limited memory'
        },
        { 
          name: 'Message psychology optimization', 
          surfox: 'AI adapts tone per personality', 
          textus: 'Manual message crafting', 
          launchcontrol: 'Template-based only',
          smartercontact: 'Basic templates'
        },
        { 
          name: 'Buying signal detection', 
          surfox: 'Real-time psychological analysis', 
          textus: 'Manual signal recognition', 
          launchcontrol: 'Basic keyword detection',
          smartercontact: 'Manual tracking'
        }
      ]
    },
    {
      category: 'AI Intelligence',
      icon: Sparkles,
      color: 'cyan',
      features: [
        { 
          name: 'Dynamic AI conversations', 
          surfox: 'Context-aware responses', 
          textus: 'Manual or canned messages', 
          launchcontrol: 'Basic automation',
          smartercontact: 'Template responses'
        },
        { 
          name: 'AI knowledge base training', 
          surfox: 'Upload PDFs, SOPs, FAQs', 
          textus: 'Not supported', 
          launchcontrol: 'Limited customization',
          smartercontact: 'Not available'
        },
        { 
          name: 'Persona-based messaging', 
          surfox: 'Multiple AI personas per campaign', 
          textus: 'One-size-fits-all', 
          launchcontrol: 'Basic personalization',
          smartercontact: 'Limited personas'
        },
        { 
          name: 'Conversation flow intelligence', 
          surfox: 'AI optimizes sequence patterns', 
          textus: 'Manual flow management', 
          launchcontrol: 'Fixed sequences',
          smartercontact: 'Basic workflows'
        },
        { 
          name: 'Anti-spam AI variants', 
          surfox: 'Dynamic message variations', 
          textus: 'Risk of spam detection', 
          launchcontrol: 'Limited variation',
          smartercontact: 'Static messages'
        }
      ]
    },
    {
      category: 'Lead Management',
      icon: Target,
      color: 'blue',
      features: [
        { 
          name: 'AI qualification engine', 
          surfox: 'Automatic lead scoring & routing', 
          textus: 'Manual qualification', 
          launchcontrol: 'Basic scoring',
          smartercontact: 'Manual sorting'
        },
        { 
          name: 'Hot lead escalation', 
          surfox: 'Psychology-based escalation', 
          textus: 'Manual handoff only', 
          launchcontrol: 'Time-based escalation',
          smartercontact: 'Manual escalation'
        },
        { 
          name: 'Motivation scoring', 
          surfox: 'Real-time psychological scoring', 
          textus: 'No native scoring', 
          launchcontrol: 'Basic engagement metrics',
          smartercontact: 'Manual assessment'
        },
        { 
          name: 'Behavioral timing optimization', 
          surfox: 'AI learns optimal contact times', 
          textus: 'Fixed timing only', 
          launchcontrol: 'Basic timing rules',
          smartercontact: 'Manual scheduling'
        },
        { 
          name: 'Chrome extension capture', 
          surfox: '1-click lead import & analysis', 
          textus: 'Not available', 
          launchcontrol: 'Basic import tools',
          smartercontact: 'Manual data entry'
        }
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
            
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                The World's First
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Sales Psychology AI
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                vs Manual Messaging
              </span>
            </h1>
            
            <div className="text-2xl text-purple-200 space-y-4 mb-8">
              <p>While competitors force your team to manually craft messages and qualify leads,</p>
              <p className="text-lg text-gray-300">
                <strong className="text-white">SurFox's AI learns human psychology to create conversations that convert.</strong>
              </p>
              <p className="text-lg text-gray-300">
                50+ psychological dimensions. Behavioral learning. Conversation intelligence. 
                This is what happens when you build AI specifically for sales psychology instead of just sending messages.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  See the Psychological Advantage
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <a href="#demo" className="px-8 py-4 border-2 border-purple-400/50 rounded-2xl font-bold text-lg backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300">
                <Play className="mr-2 w-5 h-5 inline" />
                Watch AI Learning Demo
              </a>
            </div>

            {/* Key Stats Preview */}
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6 text-center shadow-2xl">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-sm text-purple-200">Psychological Dimensions</div>
                <div className="text-xs text-gray-400 mt-2">vs 0 in competitors</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6 text-center shadow-2xl">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
                <div className="text-sm text-purple-200">Conversation Memory</div>
                <div className="text-xs text-gray-400 mt-2">AI learns & improves</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6 text-center shadow-2xl">
                <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
                <div className="text-sm text-purple-200">AI Automation</div>
                <div className="text-xs text-gray-400 mt-2">vs manual messaging</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6 text-center shadow-2xl">
                <div className="text-3xl font-bold text-yellow-400 mb-2">$197</div>
                <div className="text-sm text-purple-200">Starting Price</div>
                <div className="text-xs text-gray-400 mt-2">vs $300-500+ others</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Category Revolution */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              We Created a New Category
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Traditional platforms send messages. SurFox reads minds. Here's why that matters for your revenue.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Traditional Approach */}
            <div className="bg-gradient-to-br from-red-900/40 to-red-600/40 rounded-2xl border border-red-400/30 p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-600/50 rounded-xl flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-gray-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-300">Traditional Platforms</h3>
                  <p className="text-red-200">TextUs, Launch Control, Smarter Contact</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-900/40 border border-red-400/30 rounded-xl p-4">
                  <h4 className="font-semibold text-red-300 mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Mass Messaging Approach
                  </h4>
                  <p className="text-sm text-red-200">Send the same message to everyone. Hope someone responds. No understanding of psychology.</p>
                </div>
                
                <div className="bg-red-900/40 border border-red-400/30 rounded-xl p-4">
                  <h4 className="font-semibold text-red-300 mb-2 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Manual Everything
                  </h4>
                  <p className="text-sm text-red-200">Your team writes messages, qualifies leads, manages conversations. No intelligence.</p>
                </div>
                
                <div className="bg-red-900/40 border border-red-400/30 rounded-xl p-4">
                  <h4 className="font-semibold text-red-300 mb-2 flex items-center">
                    <X className="w-4 h-4 mr-2" />
                    No Learning System
                  </h4>
                  <p className="text-sm text-red-200">Same approach forever. Can't adapt. Doesn't improve. Just sends messages.</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-red-900/40 border border-red-400/30 rounded-xl">
                <p className="text-red-200 text-sm font-medium">
                  Result: Low conversion rates, high manual effort, expensive team time wasted on unqualified leads.
                </p>
              </div>
            </div>

            {/* SurFox Revolutionary Approach */}
            <div className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-2xl border-2 border-purple-400/50 p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-300">SurFox Sales Psychology AI</h3>
                  <p className="text-purple-200">First-ever psychological intelligence platform</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-300 mb-2 flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    Psychological Profiling
                  </h4>
                  <p className="text-sm text-purple-200">Analyzes 50+ psychological dimensions. Understands personality, motivation, decision-making patterns.</p>
                </div>
                
                <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-300 mb-2 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Adaptive Learning Engine
                  </h4>
                  <p className="text-sm text-purple-200">AI learns from every conversation. Gets smarter. Adapts messaging based on what works for each psychology type.</p>
                </div>
                
                <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-300 mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Behavior-Based Intelligence
                  </h4>
                  <p className="text-sm text-purple-200">Reads buying signals, conversation patterns, engagement curves. Knows when to push vs when to wait.</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-purple-900/40 border border-purple-400/30 rounded-xl">
                <p className="text-purple-200 text-sm font-medium">
                  Result: Higher conversion rates, intelligent automation, AI handles 90% of conversations until prospects are sales-ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Selection */}
      <section id="comparison" className="relative py-20 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              How SurFox Compares to Every Competitor
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose any competitor below. The psychological advantage is clear across the board.
            </p>
          </div>

          {/* Competitor Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(competitors).map(([key, competitor]) => (
              <button
                key={key}
                onClick={() => setActiveCompetitor(key)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
                  activeCompetitor === key
                    ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg border border-gray-600'
                    : 'bg-gray-900/60 text-gray-300 hover:bg-gray-800/60 border border-gray-700/50 backdrop-blur-sm'
                }`}
              >
                {competitor.name}
                <span className="ml-2 text-xs opacity-75">({competitor.desc})</span>
              </button>
            ))}
          </div>

          {/* Feature Category Tabs */}
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
                        'from-blue-600 to-blue-700'
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
              <div className="col-span-5 p-6">
                <h3 className="font-bold text-white text-lg">Feature</h3>
              </div>
              <div className="col-span-4 p-6 text-center border-l border-purple-400/30">
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-purple-600 to-cyan-600 rounded mr-2"></div>
                  <span className="font-bold text-white">SurFox</span>
                </div>
              </div>
              <div className="col-span-3 p-6 text-center border-l border-purple-400/30">
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-500 rounded mr-2"></div>
                  <span className="font-medium text-gray-300">{competitors[activeCompetitor].name}</span>
                </div>
              </div>
            </div>

            {featureSets[activeFeatureSet].features.map((item, index) => (
              <div key={index} className="grid grid-cols-12 border-b border-gray-700/50 hover:bg-purple-900/20 transition-colors">
                <div className="col-span-5 p-6">
                  <span className="text-gray-200 font-medium">{item.name}</span>
                </div>
                <div className="col-span-4 p-6 border-l border-gray-700/50">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-green-300 font-medium text-sm">{item.surfox}</span>
                  </div>
                </div>
                <div className="col-span-3 p-6 border-l border-gray-700/50">
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-red-300 text-sm">{item[activeCompetitor]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tiers & Pricing */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              AI Learning Tiers vs Static Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SurFox offers learning-based plans that get smarter over time. Competitors charge more for basic features that never improve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* SurFox Learning Plans */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-300 mb-6 flex items-center">
                <Brain className="w-6 h-6 mr-3" />
                SurFox Learning Plans
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-gray-900/60 to-purple-900/60 border border-purple-400/30 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-purple-300">Starter - $197/month</h4>
                      <p className="text-sm text-purple-200">No learning, basic AI functionality</p>
                    </div>
                    <div className="text-2xl font-bold text-purple-300">$197</div>
                  </div>
                  <ul className="text-sm text-purple-200 space-y-1">
                    <li>• Static AI responses</li>
                    <li>• Default "Friendly & Casual" tone</li>
                    <li>• Basic psychological profiling</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-900/60 to-cyan-900/60 border-2 border-purple-400/50 rounded-2xl p-6 backdrop-blur-xl shadow-lg shadow-purple-500/25">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-cyan-300">Growth - $397/month</h4>
                      <p className="text-sm text-cyan-200">100 conversation memory & learning</p>
                    </div>
                    <div className="text-2xl font-bold text-cyan-300">$397</div>
                  </div>
                  <ul className="text-sm text-cyan-200 space-y-1">
                    <li>• AI learns from last 100 conversations</li>
                    <li>• Personality pattern recognition</li>
                    <li>• Psychological tone optimization</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-900/60 to-indigo-900/60 border border-blue-400/30 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-blue-300">Scale - $997/month</h4>
                      <p className="text-sm text-blue-200">1000+ conversation memory</p>
                    </div>
                    <div className="text-2xl font-bold text-blue-300">$997</div>
                  </div>
                  <ul className="text-sm text-blue-200 space-y-1">
                    <li>• Advanced behavioral adaptation</li>
                    <li>• Comprehensive psychological insights</li>
                    <li>• Custom learning models</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Competitor Static Pricing */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-400 mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3" />
                Competitor Static Plans
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 border border-gray-600/30 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-gray-400">TextUs</h4>
                      <p className="text-sm text-gray-500">Manual messaging platform</p>
                    </div>
                    <div className="text-2xl font-bold text-gray-400">$500+</div>
                  </div>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Manual message crafting</li>
                    <li>• No AI or learning</li>
                    <li>• Basic inbox management</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 border border-gray-600/30 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-gray-400">Launch Control</h4>
                      <p className="text-sm text-gray-500">Basic SMS automation</p>
                    </div>
                    <div className="text-2xl font-bold text-gray-400">$300+</div>
                  </div>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Fixed automation sequences</li>
                    <li>• No psychological analysis</li>
                    <li>• Template-based messaging</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 border border-gray-600/30 rounded-2xl p-6 backdrop-blur-xl">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-gray-400">Smarter Contact</h4>
                      <p className="text-sm text-gray-500">Contact management focus</p>
                    </div>
                    <div className="text-2xl font-bold text-gray-400">$400+</div>
                  </div>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Contact database management</li>
                    <li>• Limited AI capabilities</li>
                    <li>• Manual lead qualification</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Value Proposition */}
          <div className="mt-12 bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-400/30 rounded-2xl p-8 text-center backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white mb-4">The Clear Choice</h3>
            <p className="text-lg text-purple-200 mb-6">
              Get more advanced AI capability for less money. Plus, your AI actually gets smarter over time instead of staying static forever.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50% Less</div>
                <div className="text-sm text-purple-300">Starting price vs competitors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">90% Automation</div>
                <div className="text-sm text-cyan-300">vs 0% with manual platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Always Learning</div>
                <div className="text-sm text-green-300">vs static capabilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Technology Advantage */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              What 50+ Psychological Dimensions Actually Means
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              While competitors track basic metrics like "opened" and "replied," SurFox analyzes the psychology behind every interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: 'Personality Profiling',
                desc: 'Decisiveness level, skepticism index, motivation patterns, communication preferences',
                items: ['Decision-making speed', 'Trust building requirements', 'Information processing style', 'Response to urgency'],
                gradient: 'from-purple-500 to-cyan-500'
              },
              {
                icon: Activity,
                title: 'Behavioral Patterns',
                desc: 'Engagement curves, sentiment trends, conversation flow preferences, timing patterns',
                items: ['Best contact times', 'Message length preferences', 'Question response patterns', 'Escalation triggers'],
                gradient: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Lightbulb,
                title: 'Conversation Intelligence',
                desc: 'Depth analysis, timing optimization, flow patterns, psychological adaptation',
                items: ['Conversation depth scores', 'Optimal follow-up timing', 'Successful sequence patterns', 'Psychological state changes'],
                gradient: 'from-blue-500 to-purple-500'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{feature.desc}</p>
                <div className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-4">What Competitors Track:</h3>
                <div className="space-y-2">
                  {['Message delivered', 'Message opened', 'Message replied', 'Contact information', 'Basic timestamps'].map((item, idx) => (
                    <div key={idx} className="flex items-center text-gray-400">
                      <X className="w-4 h-4 text-red-400 mr-3" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-300 mb-4">What SurFox Analyzes:</h3>
                <div className="space-y-2">
                  {['50+ psychological dimensions', 'Behavioral learning patterns', 'Conversation intelligence', 'Personality-based optimization', 'Predictive engagement scoring'].map((item, idx) => (
                    <div key={idx} className="flex items-center text-purple-200">
                      <Check className="w-4 h-4 text-green-400 mr-3" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Ready to Upgrade from Manual to Psychological?
          </h2>
          <p className="text-2xl text-purple-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            Stop paying more for less. Join the Sales Psychology AI revolution and watch your conversion rates transform.
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            <strong className="text-white">Free 14-day trial.</strong> No setup fees. Experience the psychological advantage risk-free.
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
              See Psychology AI Demo
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-purple-200">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-400" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Brain className="w-4 h-4 mr-2 text-green-400" />
              AI learns from day one
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-green-400" />
              Cancel anytime
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-400 mb-4">The future of sales is psychological, not manual</p>
            <div className="text-xs text-gray-500">
              * SurFox is currently in development. Features and pricing subject to change.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SurFoxCompetitorComparison