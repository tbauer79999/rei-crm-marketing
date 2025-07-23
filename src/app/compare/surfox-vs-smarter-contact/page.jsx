'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, MessageSquare, Clock, Sparkles, AlertCircle, Star, Crown, DollarSign, Workflow, Bot, User, FileText, Settings, Timer, Phone, Mail, Eye, Lightbulb, Layers, Activity } from 'lucide-react'
import Nav from '../../components/nav'

const SurFoxVsSmarterContact = () => {
  const [activeFeatureSet, setActiveFeatureSet] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const featureSets = [
    {
      category: 'Conversion Power',
      icon: Brain,
      color: 'purple',
      features: [
        { name: 'Response Generation', surfox: 'AI creates unique conversations for each lead', smarter: 'Template-based automation only' },
        { name: 'Conversation Intelligence', surfox: 'AI remembers and learns from every conversation', smarter: 'Basic contact management, no memory' },
        { name: 'Lead Qualification', surfox: 'AI automatically scores and prioritizes hot leads', smarter: 'Manual qualification required' },
        { name: 'Message Personalization', surfox: 'AI adapts tone and approach per prospect', smarter: 'Fixed template variations' },
        { name: 'Learning Capability', surfox: 'Gets smarter with every conversation', smarter: 'No learning or adaptation' }
      ]
    },
    {
      category: 'Sales Results',
      icon: Target,
      color: 'cyan',
      features: [
        { name: 'Appointment Setting', surfox: 'AI identifies buying signals and books qualified calls', smarter: 'Manual signal interpretation required' },
        { name: 'Lead Scoring', surfox: 'Real-time motivation and urgency scoring', smarter: 'Basic engagement tracking only' },
        { name: 'Hot Lead Detection', surfox: 'AI escalates when prospects are ready to buy', smarter: 'Manual monitoring and handoff' },
        { name: 'Conversion Optimization', surfox: 'AI learns what works and improves messaging', smarter: 'Fixed campaign sequences only' },
        { name: 'Deal Pipeline', surfox: 'Tracks leads from first contact to closed deal', smarter: 'Basic list management' }
      ]
    },
    {
      category: 'Automation Efficiency',
      icon: Zap,
      color: 'blue',
      features: [
        { name: 'Setup Time', surfox: '15-minute Chrome extension setup', smarter: 'Manual list upload and configuration' },
        { name: 'Conversation Handling', surfox: 'AI manages 90% of conversations autonomously', smarter: 'All conversations require manual handling' },
        { name: 'AI Training', surfox: 'Upload PDFs, SOPs to train AI on your business', smarter: 'Template library only' },
        { name: 'Smart Follow-ups', surfox: 'AI determines optimal timing per lead', smarter: 'Fixed retry schedules' },
        { name: 'Spam Prevention', surfox: 'AI prevents spam detection automatically', smarter: 'Risk of spam flags with volume' }
      ]
    },
    {
      category: 'Business Value',
      icon: DollarSign,
      color: 'green',
      features: [
        { name: 'Pricing Model', surfox: 'All-inclusive subscription, no usage fees', smarter: 'Base fee plus per-message costs' },
        { name: 'Time Investment', surfox: 'Minimal ongoing management required', smarter: 'Constant manual conversation monitoring' },
        { name: 'ROI Tracking', surfox: 'Full conversion tracking from lead to close', smarter: 'Basic volume and open rate metrics' },
        { name: 'Scalability', surfox: 'AI scales conversations without adding staff', smarter: 'More leads = more manual work' },
        { name: 'Total Cost of Ownership', surfox: '$197/month all-inclusive', smarter: '$199+ base + usage fees + labor costs' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white overflow-hidden">
      <Nav />

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
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl border-2 border-purple-400/50 shadow-lg shadow-purple-500/25">
                <img src="/logo.png" alt="SurFox" className="w-12 h-12 md:w-16 md:h-16" />
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-white">SurFox</div>
                  <div className="text-xs md:text-sm text-purple-300">AI Conversion Engine</div>
                </div>
              </div>
              
              <div className="text-gray-400 text-2xl md:text-4xl font-bold">VS</div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-800/40 to-gray-700/40 rounded-2xl border border-gray-600/30">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-600/50 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-gray-400">Smarter Contact</div>
                  <div className="text-xs md:text-sm text-gray-500">Mass Messaging</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                5x More Appointments
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                vs Mass Blasting
              </span>
            </h1>
            
            <div className="text-lg md:text-2xl text-purple-200 space-y-4 mb-8">
              <p><strong className="text-white">Most platforms blast thousands and pray for replies.</strong></p>
              <p><strong className="text-cyan-400">SurFox has AI conversations that book qualified appointments.</strong></p>
              <p className="text-base md:text-lg text-gray-300">
                Same cost. Dramatically better results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12">
              <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-base md:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  Stop Blasting, Start Converting
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <a href="#demo" className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-500/50 rounded-2xl font-bold text-base md:text-lg backdrop-blur-sm hover:bg-gray-500/20 transition-all duration-300">
                <Play className="mr-2 w-4 h-4 md:w-5 md:h-5 inline" />
                See the Difference
              </a>
            </div>

            {/* Key Stats Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-4 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">$197</div>
                <div className="text-sm text-purple-200">SurFox All-Inclusive</div>
                <div className="text-xs text-gray-400 mt-2">vs $199+ base + usage</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-4 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-sm text-purple-200">AI Automation</div>
                <div className="text-xs text-gray-400 mt-2">vs 100% manual work</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-4 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">15min</div>
                <div className="text-sm text-purple-200">Setup Time</div>
                <div className="text-xs text-gray-400 mt-2">vs hours of templates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Comparison */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-gray-900/50 to-slate-900/50 backdrop-blur-xl border-y border-gray-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Two Completely Different Approaches
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Smarter Contact focuses on volume and templates. SurFox focuses on AI conversations that actually close deals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Smarter Contact Approach */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 rounded-2xl border border-gray-500/30 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-600/50 rounded-xl flex items-center justify-center mr-4">
                  <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-300">Smarter Contact</h3>
                  <p className="text-gray-400 text-sm md:text-base">Mass Messaging Approach</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-700/40 border border-gray-500/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-gray-300 mb-2 text-sm md:text-base">The Problem They Solve:</h4>
                  <p className="text-xs md:text-sm text-gray-400">"I need to send thousands of messages and hope some people respond"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-gray-300 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Bulk messaging capabilities</span>
                  </div>
                  <div className="flex items-start text-gray-300 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Template library for messages</span>
                  </div>
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>All responses require manual handling</span>
                  </div>
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>No conversation memory or learning</span>
                  </div>
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-400 flex-shrink-0" />
                    <span>Usage fees add up quickly</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-gray-700/40 border border-gray-500/30 rounded-xl">
                <p className="text-gray-300 text-xs md:text-sm font-medium">
                  <strong>Best For:</strong> Teams that want to send high volumes and manually handle all responses
                </p>
              </div>
            </div>

            {/* SurFox Approach */}
            <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 rounded-2xl border-2 border-purple-400/50 p-6 md:p-8 backdrop-blur-sm shadow-lg shadow-purple-500/25">
              <div className="flex items-center mb-6">
                <img src="/logo.png" alt="SurFox" className="w-10 h-10 md:w-12 md:h-12 mr-4" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">SurFox</h3>
                  <p className="text-purple-200 text-sm md:text-base">AI Conversion Engine</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-800/40 border border-purple-400/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-white mb-2 text-sm md:text-base">The Problem We Solve:</h4>
                  <p className="text-xs md:text-sm text-purple-200">"I need qualified appointments, not just random responses to filter through"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>AI creates unique conversations for each lead</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Automatically qualifies and scores prospects</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Escalates hot leads immediately</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Learns and improves with every conversation</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>All-inclusive pricing, no usage fees</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-purple-800/40 border border-purple-400/30 rounded-xl">
                <p className="text-white text-xs md:text-sm font-medium">
                  <strong>Best For:</strong> Sales teams who want qualified appointments, not manual conversation filtering
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
              Same Lead, Completely Different Outcomes
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Watch how the same prospect responds to mass messaging vs AI conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Smarter Contact Conversation */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 border border-gray-500/30 rounded-2xl p-4 md:p-6 backdrop-blur-xl">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-600/50 rounded-lg flex items-center justify-center mr-3">
                  <MessageSquare className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-300">Smarter Contact Approach</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-gray-300 text-xs">Day 1 - Mass Template</span>
                  </div>
                  <p className="text-gray-200">"Hi [NAME], are you interested in selling your house?"</p>
                </div>
                
                <div className="text-center text-gray-400 text-xs py-2">
                  ... no response for 3 days ...
                </div>
                
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-gray-300 text-xs">Day 4 - Same Template</span>
                  </div>
                  <p className="text-gray-200">"Hi [NAME], are you interested in selling your house?"</p>
                </div>
                
                <div className="text-center text-gray-400 text-xs py-2">
                  ... no response for 7 more days ...
                </div>
                
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-gray-300 text-xs">Day 11 - Final Template</span>
                  </div>
                  <p className="text-gray-200">"Hi [NAME], are you interested in selling your house?"</p>
                </div>
              </div>
              
              <div className="bg-red-900/40 border border-red-400/30 rounded-lg p-3 md:p-4 text-center">
                <X className="w-5 h-5 md:w-6 md:h-6 text-red-400 mx-auto mb-2" />
                <p className="text-red-300 font-medium text-sm md:text-base">Result: Lead Lost Forever</p>
                <p className="text-red-200 text-xs md:text-sm">Blocked as spam, zero engagement</p>
              </div>
            </div>

            {/* SurFox AI Conversation */}
            <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 border-2 border-purple-400/50 rounded-2xl p-4 md:p-6 backdrop-blur-xl shadow-lg shadow-purple-500/25">
              <div className="flex items-center mb-6">
                <img src="/logo.png" alt="SurFox" className="w-6 h-6 md:w-8 md:h-8 mr-3" />
                <h3 className="text-base md:text-lg font-semibold text-white">SurFox AI Approach</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="bg-purple-800/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-purple-300 text-xs">Day 1 - AI Smart Opening</span>
                  </div>
                  <p className="text-white">"Hey Sarah — wasn't sure if this was still your number. If you're still thinking about selling, I can keep it simple for you."</p>
                </div>
                
                <div className="text-center text-gray-400 text-xs py-2">
                  ... AI waits 3 days, adjusts approach ...
                </div>
                
                <div className="bg-purple-800/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-purple-300 text-xs">Day 4 - AI Follow-up</span>
                  </div>
                  <p className="text-white">"Just checking in — totally fine if not the right time. Market's been pretty good for sellers lately."</p>
                </div>
                
                <div className="bg-emerald-900/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                    <span className="text-emerald-300 text-xs">Day 5 - Lead Responds!</span>
                  </div>
                  <p className="text-emerald-200">"Yeah I might be. What kind of offers are you seeing?"</p>
                </div>
                
                <div className="bg-purple-800/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-purple-300 text-xs">AI Qualification Response</span>
                  </div>
                  <p className="text-white">"Great question! Most of my sellers in your area have been pleasantly surprised. Want me to pull some recent comps for your street?"</p>
                </div>
              </div>
              
              <div className="bg-emerald-900/40 border border-emerald-400/30 rounded-lg p-3 md:p-4 text-center">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 mx-auto mb-2" />
                <p className="text-emerald-300 font-medium text-sm md:text-base">Result: Qualified Appointment</p>
                <p className="text-emerald-200 text-xs md:text-sm">AI flags as hot lead, books call automatically</p>
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
              See exactly where SurFox outperforms traditional mass messaging platforms.
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
                  <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 border-2 border-purple-400/50 rounded-lg p-3 shadow-lg shadow-purple-500/25">
                    <div className="flex items-center mb-2">
                      <img src="/logo.png" alt="SurFox" className="w-3 h-3 mr-2" />
                      <span className="font-medium text-white text-xs">SurFox</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-green-300 text-xs">{item.surfox}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/40 border border-gray-600/30 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-gray-500 rounded mr-2"></div>
                      <span className="font-medium text-gray-300 text-xs">Smarter Contact</span>
                    </div>
                    <div className="flex items-start">
                      <X className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-red-300 text-xs">{item.smarter}</span>
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
                  <img src="/logo.png" alt="SurFox" className="w-4 h-4 mr-2" />
                  <span className="font-bold text-white">SurFox</span>
                </div>
              </div>
              <div className="col-span-3 p-6 text-center border-l border-purple-400/30">
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-500 rounded mr-2"></div>
                  <span className="font-medium text-gray-300">Smarter Contact</span>
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
                    <span className="text-red-300 text-sm">{item.smarter}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-gray-900/50 to-slate-900/50 backdrop-blur-xl border-y border-gray-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              The Hidden Cost Reality
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              SurFox delivers superior AI while actually costing less when you factor in usage fees and manual work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* True Cost Analysis */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 border border-gray-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
              <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-6 flex items-center">
                <DollarSign className="w-5 h-5 md:w-6 md:h-6 mr-3 text-yellow-400" />
                True Monthly Cost Breakdown
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 bg-gray-700/40 border border-gray-500/30 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <div className="font-semibold text-gray-300 text-sm md:text-base">Smarter Contact Reality</div>
                      <div className="text-xs md:text-sm text-gray-400">Hidden costs add up fast</div>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <div className="text-xl md:text-2xl font-bold text-red-400">$600+</div>
                      <div className="text-xs text-gray-400">per month</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-300 space-y-1">
                    <div>• $199+ base subscription</div>
                    <div>• $0.03/SMS + usage fees</div>
                    <div>• $300+ staff time manually handling responses</div>
                    <div>• Additional carrier fees</div>
                  </div>
                </div>
                
                <div className="p-3 md:p-4 bg-purple-900/40 border border-purple-400/30 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div>
                      <div className="font-semibold text-white text-sm md:text-base">SurFox All-Inclusive</div>
                      <div className="text-xs md:text-sm text-purple-200">True total cost</div>
                    </div>
                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                      <div className="text-xl md:text-2xl font-bold text-green-400">$197</div>
                      <div className="text-xs text-purple-300">per month</div>
                    </div>
                  </div>
                  <div className="text-xs text-purple-200 space-y-1">
                    <div>• $197 complete subscription</div>
                    <div>• $0 usage fees for core features</div>
                    <div>• $0 additional staff time (AI handles it)</div>
                    <div>• All features included</div>
                  </div>
                </div>
                
                <div className="text-center p-3 md:p-4 bg-green-900/40 border border-green-400/30 rounded-xl">
                  <div className="text-xl md:text-2xl font-bold text-green-400">67% Cost Savings</div>
                  <div className="text-xs md:text-sm text-green-300">Plus dramatically better results</div>
                </div>
              </div>
            </div>

            {/* Value Comparison */}
            <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 border-2 border-purple-400/50 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-lg shadow-purple-500/25">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-5 h-5 md:w-6 md:h-6 mr-3 text-cyan-400" />
                Value Delivered Per Dollar
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 bg-gray-800/40 border border-gray-600/30 rounded-xl">
                  <h4 className="font-semibold text-gray-300 mb-2 text-sm md:text-base">What Smarter Contact Gives You</h4>
                  <div className="space-y-2 text-xs md:text-sm text-gray-400">
                    <div>• Template-based bulk messaging</div>
                    <div>• Manual response handling (all day, every day)</div>
                    <div>• Basic contact management</div>
                    <div>• Pay-per-message pricing</div>
                  </div>
                </div>
                
                <div className="p-3 md:p-4 bg-purple-800/40 border border-purple-400/30 rounded-xl">
                  <h4 className="font-semibold text-white mb-2 text-sm md:text-base">What SurFox Gives You</h4>
                  <div className="space-y-2 text-xs md:text-sm text-white">
                    <div>• AI creates unique conversations per lead</div>
                    <div>• AI handles 90% of responses automatically</div>
                    <div>• Automatic lead scoring and qualification</div>
                    <div>• Hot lead escalation and appointment booking</div>
                    <div>• Continuous learning and improvement</div>
                  </div>
                </div>
                
                <div className="text-center p-3 md:p-4 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-400/30 rounded-xl">
                  <div className="text-lg md:text-xl font-bold text-white mb-2">10x Better ROI</div>
                  <div className="text-xs md:text-sm text-purple-200">AI automation vs manual labor</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Line Comparison */}
          <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-400/30 rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl">
            <h3 className="text-xl md:text-2xl font-bold text-green-300 mb-6">The Bottom Line</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-base md:text-lg text-green-200 mb-2">Smarter Contact</div>
                <div className="text-2xl md:text-3xl font-bold text-red-400 mb-2">More Cost</div>
                <div className="text-xs md:text-sm text-gray-400">Base + usage + manual work</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-green-200 mb-2">SurFox</div>
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">Less Cost</div>
                <div className="text-xs md:text-sm text-green-300">All-inclusive AI automation</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-green-200 mb-2">Result</div>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">5x Better ROI</div>
                <div className="text-xs md:text-sm text-gray-400">More appointments, less work</div>
              </div>
            </div>
            <div className="mt-6 p-3 md:p-4 bg-green-900/30 rounded-xl">
              <p className="text-green-200 font-medium text-sm md:text-base">
                <strong className="text-white">Smart choice:</strong> Pay less, get AI automation, and close more deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      // Final CTA section updates  
<section id="cta" className="relative py-16 md:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
  <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
    <div className="flex justify-center mb-8">
      <img src="/logo.png" alt="SurFox" className="w-16 h-16 md:w-20 md:h-20" />
    </div>
    
    <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
      Stop Blasting. Start Converting.
    </h2>
    <p className="text-lg md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto leading-relaxed">
      Join thousands who've upgraded from mass messaging to AI-powered appointments.
    </p>
    <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
      <strong className="text-white">30-day money back guarantee.</strong> No setup fees. See 5x better results in your first week.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center mb-8">
      <button className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl font-bold text-lg md:text-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative flex items-center justify-center">
          Get Started Risk-Free
          <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
        </div>
      </button>
      <a href="#" className="px-8 md:px-12 py-4 md:py-6 border-2 border-gray-400/50 rounded-2xl font-bold text-lg md:text-2xl backdrop-blur-sm hover:bg-gray-500/20 transition-all duration-500 hover:scale-105">
        See SurFox Demo
      </a>
    </div>
    
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-purple-200">
      <div className="flex items-center">
        <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
        No credit card required
      </div>
      <div className="flex items-center">
        <Brain className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
        AI starts working immediately
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

export default SurFoxVsSmarterContact