'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Shield, Database, Cpu, Globe, Lock, Award, ChevronDown, Terminal, GitBranch, MessageSquare, Clock, Sparkles, AlertCircle, Star, Crown, DollarSign, Workflow, Bot, User, FileText, Settings, Timer, Phone, Mail, Eye, Lightbulb, Layers, Activity, Calendar, Building, Headphones } from 'lucide-react'
import Nav from './components/nav'

const SurFoxVsSkipio = () => {
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
      category: 'AI Power',
      icon: Brain,
      color: 'purple',
      features: [
        { name: 'AI handles your conversations', surfox: 'AI writes every message and handles responses automatically', skipio: 'You write drafts manually, then review every response' },
        { name: 'Remembers every conversation', surfox: 'AI knows the full conversation history with each lead', skipio: 'No memory - treats every message as first contact' },
        { name: 'Gets smarter over time', surfox: 'AI learns your business and improves with every conversation', skipio: 'Same templates forever - no learning or improvement' },
        { name: 'Detects buying signals', surfox: 'AI reads when prospects are ready to buy and alerts you', skipio: 'You manually read every message to find hot leads' },
        { name: 'Understands what prospects mean', surfox: 'AI reads between the lines and responds appropriately', skipio: 'Basic keyword triggers only - misses context and tone' }
      ]
    },
    {
      category: 'Lead Results',
      icon: Target,
      color: 'cyan',
      features: [
        { name: 'Automatically finds hot leads', surfox: 'AI scores every lead and flags the ones ready to buy', skipio: 'You manually sort through all responses to find good ones' },
        { name: 'Qualification without your time', surfox: 'AI asks the right questions and qualifies leads for you', skipio: 'You have to qualify every lead manually' },
        { name: 'Knows when to escalate', surfox: 'AI alerts you only when prospects are sales-ready', skipio: 'You monitor everything - no intelligent escalation' },
        { name: 'Prioritizes your best opportunities', surfox: 'AI ranks leads by likelihood to close', skipio: 'All leads look the same - you decide priority manually' },
        { name: 'Delivers ready-to-close prospects', surfox: 'AI hands you leads that are motivated and qualified', skipio: 'You get raw responses - good luck figuring out who to call' }
      ]
    },
    {
      category: 'Automation Intelligence',
      icon: Zap,
      color: 'blue',
      features: [
        { name: 'Adapts to each conversation', surfox: 'AI changes approach based on how each prospect responds', skipio: 'Same linear sequence for everyone regardless of responses' },
        { name: 'Perfect timing every time', surfox: 'AI knows when each prospect is most likely to respond', skipio: 'Fixed schedules that ignore individual behavior patterns' },
        { name: 'Handles objections intelligently', surfox: 'AI responds to concerns and keeps conversations moving forward', skipio: 'Basic auto-replies that often miss the point' },
        { name: 'Never drops the ball', surfox: 'AI ensures every lead gets the right follow-up at the right time', skipio: 'You manually manage all follow-ups and timing' },
        { name: 'Scales without more work', surfox: 'Handle 10x more leads without hiring more people', skipio: 'More leads = more manual work for your team' }
      ]
    },
    {
      category: 'Business Focus',
      icon: Building,
      color: 'green',
      features: [
        { name: 'Built for deal-makers', surfox: 'Designed for businesses that need to close sales', skipio: 'Built for appointment booking and basic follow-ups' },
        { name: 'Success = closed deals', surfox: 'Measures success by qualified leads and revenue generated', skipio: 'Measures success by appointments booked and messages sent' },
        { name: 'ROI-focused pricing', surfox: 'Pay based on the value you get from better conversions', skipio: 'Pay per message regardless of results' },
        { name: 'Scales with your growth', surfox: 'AI gets better as your business grows', skipio: 'Same basic tools whether you have 10 or 10,000 leads' },
        { name: 'Built for sales teams', surfox: 'Everything designed around converting prospects to customers', skipio: 'General communication tool adapted for sales' }
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
                  <div className="text-xs md:text-sm text-purple-300">AI That Closes Deals</div>
                </div>
              </div>
              
              <div className="text-gray-400 text-2xl md:text-4xl font-bold">VS</div>
              
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-800/40 to-gray-700/40 rounded-2xl border border-gray-600/30">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-600/50 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl md:text-3xl font-bold text-gray-400">Skipio</div>
                  <div className="text-xs md:text-sm text-gray-500">Appointment Booking</div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                AI That Actually
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Closes Deals
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                vs Basic Scheduling
              </span>
            </h1>
            
            <div className="text-lg md:text-2xl text-purple-200 space-y-4 mb-8">
              <p>Skipio helps you book appointments efficiently.</p>
              <p className="text-base md:text-lg text-gray-300">
                <strong className="text-white">SurFox turns your dead leads into actual deals that close.</strong> 
                See why AI that gets results beats basic appointment booking.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12">
              <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-base md:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  See How SurFox Wins
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <a href="#demo" className="px-6 md:px-8 py-3 md:py-4 border-2 border-purple-400/50 rounded-2xl font-bold text-base md:text-lg backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300">
                <Play className="mr-2 w-4 h-4 md:w-5 md:h-5 inline" />
                Watch Demo
              </a>
            </div>

            {/* Key Stats Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-4 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">3-5X</div>
                <div className="text-sm text-white font-medium">More Deals Closed</div>
                <div className="text-xs text-purple-300 mt-2">vs appointment tools</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-4 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">90%</div>
                <div className="text-sm text-white font-medium">AI Handles Everything</div>
                <div className="text-xs text-purple-300 mt-2">vs manual work</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/90 to-cyan-900/90 backdrop-blur-xl rounded-2xl border-2 border-purple-400/50 p-4 md:p-6 text-center shadow-2xl shadow-purple-500/25">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">Zero</div>
                <div className="text-sm text-white font-medium">Manual Qualification</div>
                <div className="text-xs text-purple-300 mt-2">AI does it all</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Comparison */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Two Different Results
            </h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
              Skipio gets you appointments. SurFox gets you deals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Skipio Approach - Muted */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 rounded-2xl border border-gray-600/30 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-600/50 rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-300">Skipio</h3>
                  <p className="text-gray-400 text-sm md:text-base">Basic Appointment Booking</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800/40 border border-gray-600/30 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-gray-300 mb-2 text-sm md:text-base">What You Get:</h4>
                  <p className="text-xs md:text-sm text-gray-400">"Help with scheduling appointments and basic follow-up automation"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-gray-500 flex-shrink-0" />
                    <span>Good for booking appointments</span>
                  </div>
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-gray-500 flex-shrink-0" />
                    <span>Multi-channel communication</span>
                  </div>
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-gray-500 flex-shrink-0" />
                    <span>Basic campaign sequencing</span>
                  </div>
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>You manually write and review everything</span>
                  </div>
                  <div className="flex items-start text-gray-400 text-sm md:text-base">
                    <X className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-red-500 flex-shrink-0" />
                    <span>No AI to find your best leads</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-gray-800/40 border border-gray-600/30 rounded-xl">
                <p className="text-gray-400 text-xs md:text-sm font-medium">
                  <strong>Result:</strong> Appointments booked, but you still do all the selling work
                </p>
              </div>
            </div>

            {/* SurFox Approach - Bright & Prominent */}
            <div className="bg-gradient-to-br from-purple-900/80 to-cyan-900/80 rounded-2xl border-2 border-purple-400/70 p-6 md:p-8 backdrop-blur-sm shadow-2xl shadow-purple-500/50 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <img src="/logo.png" alt="SurFox" className="w-10 h-10 md:w-12 md:h-12 mr-4" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">SurFox</h3>
                  <p className="text-purple-200 text-sm md:text-base font-medium">AI That Closes Deals</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-900/50 border border-purple-400/50 rounded-xl p-3 md:p-4">
                  <h4 className="font-semibold text-white mb-2 text-sm md:text-base">What You Get:</h4>
                  <p className="text-xs md:text-sm text-purple-200">"AI that turns your dead leads into actual deals that close"</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>AI handles all conversations for you</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Automatically finds your hottest leads</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Delivers qualified prospects ready to buy</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Gets smarter with every conversation</span>
                  </div>
                  <div className="flex items-start text-white text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                    <span>Works 24/7 without breaks or oversight</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 md:p-4 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-400/50 rounded-xl">
                <p className="text-white text-xs md:text-sm font-bold">
                  <strong>Result:</strong> More deals closed with less work from your team
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
              Same Lead, Different Results
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Watch how SurFox turns a cold real estate lead into a hot prospect while Skipio just tries to book a meeting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Skipio Conversation - Muted */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-700/40 border border-gray-600/30 rounded-2xl p-4 md:p-6 backdrop-blur-xl">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-600/50 rounded-lg flex items-center justify-center mr-3">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-300">Skipio: Appointment Focused</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-gray-400 text-xs">Day 1 - Template Message</span>
                  </div>
                  <p className="text-gray-300">"Hi Sarah, I'd love to schedule a quick call to discuss your home selling needs. When works better - mornings or afternoons?"</p>
                </div>
                
                <div className="text-center text-gray-500 text-xs py-2">
                  ... no response for 3 days ...
                </div>
                
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-gray-400 text-xs">Day 4 - Follow-up Template</span>
                  </div>
                  <p className="text-gray-300">"Hi Sarah, just following up on scheduling that call. I have slots open this week. Let me know what works!"</p>
                </div>
                
                <div className="text-center text-gray-500 text-xs py-2">
                  ... still no response ...
                </div>
                
                <div className="bg-gray-700/40 rounded-lg p-2 md:p-3 text-xs md:text-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-gray-400 text-xs">Day 11 - Final Attempt</span>
                  </div>
                  <p className="text-gray-300">"Hi Sarah, haven't heard back. Should I remove you from my list?"</p>
                </div>
              </div>
              
              <div className="bg-red-900/40 border border-red-400/30 rounded-lg p-3 md:p-4 text-center">
                <X className="w-5 h-5 md:w-6 md:h-6 text-red-400 mx-auto mb-2" />
                <p className="text-red-300 font-medium text-sm md:text-base">Result: Lead Lost</p>
                <p className="text-red-400 text-xs md:text-sm">Generic templates, no psychology, no deal</p>
              </div>
            </div>

            {/* SurFox AI Conversation - Bright & Prominent */}
            <div className="bg-gradient-to-br from-purple-900/80 to-cyan-900/80 border-2 border-purple-400/70 rounded-2xl p-4 md:p-6 backdrop-blur-xl shadow-2xl shadow-purple-500/50">
              <div className="flex items-center mb-6">
                <img src="/logo.png" alt="SurFox" className="w-6 h-6 md:w-8 md:h-8 mr-3" />
                <h3 className="text-base md:text-lg font-semibold text-white">SurFox: AI Deal Closer</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4 mb-6">
                <div className="bg-purple-900/50 rounded-lg p-2 md:p-3 text-xs md:text-sm border border-purple-400/30">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-purple-300 text-xs">Day 1 - AI Psychology Opening</span>
                  </div>
                  <p className="text-white">"Hey Sarah — noticed you filled out that home valuation form. Most folks do that when they're just curious, but occasionally someone's actually ready to move. Which camp are you in?"</p>
                </div>
                
                <div className="text-center text-purple-300 text-xs py-2">
                  ... AI waits for optimal timing ...
                </div>
                
                <div className="bg-purple-900/50 rounded-lg p-2 md:p-3 text-xs md:text-sm border border-purple-400/30">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-purple-300 text-xs">Day 4 - AI Reframes Approach</span>
                  </div>
                  <p className="text-white">"Sarah, totally get it if you're not ready. Real estate can feel overwhelming. But I'm curious — what would need to happen for selling to make sense for you?"</p>
                </div>
                
                <div className="bg-emerald-900/50 rounded-lg p-2 md:p-3 text-xs md:text-sm border border-emerald-400/30">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                    <span className="text-emerald-300 text-xs">Day 5 - Lead Responds!</span>
                  </div>
                  <p className="text-emerald-200">"Honestly? We're thinking about it but worried about timing and market conditions."</p>
                </div>
                
                <div className="bg-purple-900/50 rounded-lg p-2 md:p-3 text-xs md:text-sm border border-purple-400/30">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                    <span className="text-purple-300 text-xs">AI Reads Psychology & Responds</span>
                  </div>
                  <p className="text-white">"That's smart thinking, Sarah. What's driving the 'thinking about it' part? New job, family changes, or just ready for something different?"</p>
                </div>
              </div>
              
              <div className="bg-emerald-900/40 border border-emerald-400/50 rounded-lg p-3 md:p-4 text-center">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 mx-auto mb-2" />
                <p className="text-emerald-300 font-bold text-sm md:text-base">Result: Hot Lead Ready!</p>
                <p className="text-emerald-200 text-xs md:text-sm">AI understands psychology, lead is motivated to sell</p>
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
              Why SurFox Wins Every Time
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              See exactly why AI that closes deals beats basic appointment booking.
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
                  <div className="bg-gradient-to-br from-purple-900/60 to-cyan-900/60 border-2 border-purple-400/50 rounded-lg p-3 shadow-lg">
                    <div className="flex items-center mb-2">
                      <img src="/logo.png" alt="SurFox" className="w-3 h-3 mr-2" />
                      <span className="font-bold text-white text-xs">SurFox</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white font-medium text-xs">{item.surfox}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/40 border border-gray-600/30 rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-gray-500 rounded mr-2"></div>
                      <span className="font-medium text-gray-400 text-xs">Skipio</span>
                    </div>
                    <div className="flex items-start">
                      <X className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400 text-xs">{item.skipio}</span>
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
                <h3 className="font-bold text-white text-lg">Capability</h3>
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
                  <span className="font-medium text-gray-400">Skipio</span>
                </div>
              </div>
            </div>

            {featureSets[activeFeatureSet].features.map((item, index) => (
              <div key={index} className="grid grid-cols-12 border-b border-gray-700/50 hover:bg-purple-900/20 transition-colors">
                <div className="col-span-6 p-6">
                  <span className="text-white font-medium">{item.name}</span>
                </div>
                <div className="col-span-3 p-6 border-l border-gray-700/50">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-white font-medium text-sm">{item.surfox}</span>
                  </div>
                </div>
                <div className="col-span-3 p-6 border-l border-gray-700/50">
                  <div className="flex items-start">
                    <X className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{item.skipio}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Choose What */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Choose The Right Tool
            </h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
              Both have their place, but they solve very different problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Choose Skipio When - Muted */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 border border-gray-600/30 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
              <h3 className="text-xl md:text-2xl font-bold text-gray-300 mb-6 flex items-center">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                Choose Skipio When
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 bg-gray-800/40 border border-gray-600/30 rounded-xl">
                  <div className="font-semibold text-gray-300 mb-2 text-sm md:text-base">Your Main Problem:</div>
                  <div className="text-xs md:text-sm text-gray-400">You just need help booking appointments</div>
                </div>
                
                <div className="space-y-3 text-xs md:text-sm text-gray-400">
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-gray-500 flex-shrink-0" />You're happy writing all your own messages</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-gray-500 flex-shrink-0" />Your business is appointment-driven (coaching, medical)</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-gray-500 flex-shrink-0" />You need multiple communication channels</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-gray-500 flex-shrink-0" />Budget is your main concern</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-gray-500 flex-shrink-0" />You want manual control over everything</div>
                </div>
                
                <div className="p-3 md:p-4 bg-gray-800/30 rounded-xl">
                  <div className="text-gray-400 font-medium text-xs md:text-sm">
                    <strong>Good For:</strong> Service businesses that just need appointment scheduling help
                  </div>
                </div>
              </div>
            </div>

            {/* Choose SurFox When - Bright & Prominent */}
            <div className="bg-gradient-to-br from-purple-900/80 to-cyan-900/80 border-2 border-purple-400/70 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl shadow-purple-500/50 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center">
                <img src="/logo.png" alt="SurFox" className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                Choose SurFox When
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="p-3 md:p-4 bg-purple-900/50 border border-purple-400/50 rounded-xl">
                  <div className="font-semibold text-white mb-2 text-sm md:text-base">Your Main Problem:</div>
                  <div className="text-xs md:text-sm text-purple-200">Your leads aren't turning into deals</div>
                </div>
                
                <div className="space-y-3 text-xs md:text-sm text-white">
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />Your follow-ups aren't working</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You need more deals, not just appointments</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You want AI to handle conversations for you</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />You have leads that go cold and never respond</div>
                  <div className="flex items-start"><Check className="w-4 h-4 mr-3 mt-0.5 text-green-400 flex-shrink-0" />Results matter more than monthly cost</div>
                </div>
                
                <div className="p-3 md:p-4 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-400/50 rounded-xl">
                  <div className="text-white font-bold text-xs md:text-sm">
                    <strong>Perfect For:</strong> Businesses that need to convert prospects into actual customers
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Outcome Comparison */}
          <div className="bg-gradient-to-br from-purple-900/60 to-cyan-900/60 border-2 border-purple-400/50 rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">The Bottom Line</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-base md:text-lg text-purple-200 mb-2">Skipio Gives You</div>
                <div className="text-2xl md:text-3xl font-bold text-gray-400 mb-2">Appointments</div>
                <div className="text-xs md:text-sm text-gray-500">But you still do all the selling</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-purple-200 mb-2">vs</div>
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">AI</div>
                <div className="text-xs md:text-sm text-purple-300">That does the selling for you</div>
              </div>
              <div className="text-center">
                <div className="text-base md:text-lg text-purple-200 mb-2">SurFox Gives You</div>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">Deals</div>
                <div className="text-xs md:text-sm text-cyan-300">Qualified prospects ready to buy</div>
              </div>
            </div>
            <div className="mt-6 p-3 md:p-4 bg-purple-900/30 rounded-xl">
              <p className="text-white font-bold text-sm md:text-base">
                <strong>Simple choice:</strong> Do you want help booking meetings, or do you want more deals?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="relative py-16 md:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <img src="/logo.png" alt="SurFox" className="w-16 h-16 md:w-20 md:h-20" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Ready for More Deals?
          </h2>
          <p className="text-lg md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            Stop settling for appointments. Get AI that turns your leads into actual deals.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            <strong className="text-white">14-day free trial.</strong> No setup fees. See how many more deals you close.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center mb-8">
            <button className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl font-bold text-lg md:text-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center">
                Start Closing More Deals
                <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <a href="#" className="px-8 md:px-12 py-4 md:py-6 border-2 border-purple-400/50 rounded-2xl font-bold text-lg md:text-2xl backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-500 hover:scale-105">
              Book a Demo
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
              <Target className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
              See results in your first week
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SurFoxVsSkipio