'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Play, Check, X, Brain, MessageSquare, Target, User, ChevronRight, Phone, Mail, Zap, Activity, Shield, Eye, TrendingUp, BarChart3, Clock, ArrowRight, Building, Users, Cpu, Database, Lightbulb, Layers, Gauge, Sparkles, Send, Bot } from 'lucide-react'

const SurFoxHomepage = () => {
  const [activeTab, setActiveTab] = useState('psychology')
  const [typingText, setTypingText] = useState('')
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  
  const messages = [
    "Hi Sarah, quick question about your recent inquiry...",
    "Mark, following up on your demo request from last week...",
    "Jennifer, noticed you've been researching solutions like ours..."
  ]

  // Typing animation effect
  useEffect(() => {
    const currentMessage = messages[currentMessageIndex]
    let index = 0
    const timer = setInterval(() => {
      if (index <= currentMessage.length) {
        setTypingText(currentMessage.slice(0, index))
        index++
      } else {
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
          setTypingText('')
        }, 2000)
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [currentMessageIndex])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white overflow-hidden">

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-40 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section - Fixed Above Fold */}
      <section className="relative py-12 pt-24 min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 backdrop-blur-sm">
                <MessageSquare className="w-4 h-4 mr-2 text-purple-300" />
                <span className="text-purple-200 font-medium text-sm">World's First SMS Psychology AI Engine</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Not all leads think the same.
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  So why are you texting them like they do?
                </span>
              </h1>
              
              <div className="text-xl text-purple-200 space-y-4">
                <p>After 20 years in sales, I realized we were texting all prospects the same way.</p>
                <p className="text-lg text-gray-300">
                  <strong className="text-white"> Some people are skeptical, others decisive. Some need data, others need emotion.</strong>
                  <br />SurFox learns their psychology and adapts every text message.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Tom's Story
                  </div>
                </button>
                <a href="#how-it-works" className="px-6 py-3 border-2 border-purple-400/50 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300">
                  See The AI In Action
                </a>
              </div>

              {/* Tom's Quote - Condensed */}
              <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-xl rounded-xl border border-purple-500/30 p-6 mt-6">
                <p className="text-purple-200 text-base mb-3 italic">
                  "While other platforms blast the same SMS to everyone, SurFox reads human psychology and adapts each text message."
                </p>
                <p className="text-purple-300 text-sm">
                  Tom Bauer, Founder & CEO
                </p>
              </div>
            </div>

            {/* Live AI Demo - More Compact */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-purple-200">Live Psychology AI</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 text-xs">LEARNING</span>
                  </div>
                </div>
                
                {/* AI Analysis Display - Smaller */}
                <div className="space-y-3 mb-4">
                  <div className="bg-black/40 rounded-lg p-3 border border-cyan-500/30">
                    <div className="text-cyan-300 text-xs mb-2">AI Analyzing Prospect Psychology...</div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Decision Style:</span>
                          <span className="text-yellow-400 font-bold">Analytical</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Trust Level:</span>
                          <span className="text-red-400 font-bold">Skeptical</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Motivation:</span>
                          <span className="text-green-400 font-bold">ROI-Driven</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Communication:</span>
                          <span className="text-blue-400 font-bold">Direct</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Live SMS Generation - Smaller */}
                  <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg p-3 border border-purple-400/30">
                    <div className="text-purple-300 text-xs mb-2">Generating Personalized SMS:</div>
                    <div className="bg-black/60 rounded-lg p-2 font-mono text-xs text-green-300 min-h-[40px] flex items-center">
                      {typingText}<span className="animate-pulse">|</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-green-600/20 to-cyan-600/20 rounded-full border border-green-400/30">
                    <Zap className="w-3 h-3 mr-2 text-green-400" />
                    <span className="text-green-300 text-xs font-medium">Psychology Match: 94%</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements - Smaller */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform rotate-12 shadow-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center transform -rotate-12 shadow-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Category Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              This isn't SMS automation.
              <br />
              This is <span className="text-white">SMS Psychology AI</span>.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-red-900/40 to-red-600/40 rounded-2xl border border-red-400/30 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center">
                <X className="w-8 h-8 mr-3" />
                Traditional SMS Platforms:
              </h3>
              <div className="space-y-4 text-red-200">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Send text messages, track delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Same SMS approach for everyone</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Static, rule-based SMS automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Volume over psychology</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 rounded-2xl border border-purple-400/30 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-purple-300 mb-6 flex items-center">
                <MessageSquare className="w-8 h-8 mr-3" />
                SurFox SMS Psychology AI:
              </h3>
              <div className="space-y-4 text-purple-200">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Reads human psychology from SMS responses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Learns behavioral preferences via text</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Adapts SMS tone to personality types</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Gets smarter with every text conversation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Definition */}
      <section className="relative py-20 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
              Here's the uncomfortable truth about cold leads
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Most sales teams give up too early. But some of those "dead" leads are actually just waiting for the right moment. 
              The challenge is knowing which ones — and <em>how</em> to speak to their specific psychology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-red-900/40 to-red-600/40 rounded-2xl border border-red-400/30 p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <X className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-2xl font-bold text-red-300">What most companies do:</h3>
              </div>
              <ul className="space-y-4 text-red-200">
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                  <div>
                    <strong>Mass follow-up campaigns</strong> — Send the same generic message to hundreds of prospects
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                  <div>
                    <strong>Give up after 3-5 attempts</strong> — Assume silence means "not interested"
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                  <div>
                    <strong>Miss the buying signals</strong> — Can't tell when someone's actually ready vs. just being polite
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                  <div>
                    <strong>Ignore personality differences</strong> — Treat skeptical prospects the same as decisive ones
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-600/40 rounded-2xl border border-cyan-400/30 p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Brain className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-cyan-300">What SurFox does differently:</h3>
              </div>
              <ul className="space-y-4 text-cyan-200">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong>Psychological profiling</strong> — Analyzes 50+ behavioral dimensions per prospect
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong>Adaptive learning</strong> — Gets smarter with every conversation it has
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong>Personality matching</strong> — Different approaches for different psychology types
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong>Conversation intelligence</strong> — Knows when to push vs when to wait
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Revolutionary Visual */}
      <section id="how-it-works" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              How Psychology AI Actually Works
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              While you text, our AI reads psychology. While they respond, it learns their patterns. 
              Every conversation makes it smarter.
            </p>
          </div>
          
          {/* Fixed Steps - Corrected Flow */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative group">
              <div className="bg-gradient-to-br from-purple-900/60 to-purple-600/60 rounded-3xl border border-purple-400/40 p-8 text-center backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/50">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-purple-300 mb-3">1</div>
                <h3 className="text-2xl font-bold text-white mb-4">Send SMS</h3>
                <p className="text-purple-200 leading-relaxed">
                  You text your cold leads. Our AI immediately starts analyzing their responses for psychological patterns — 
                  tone, word choice, response time, engagement level.
                </p>
              </div>
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
            </div>
            
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-900/60 to-cyan-600/60 rounded-3xl border border-cyan-400/40 p-8 text-center backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/50">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-cyan-300 mb-3">2</div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Reads Psychology</h3>
                <p className="text-cyan-200 leading-relaxed">
                  As conversations happen, the AI profiles each prospect across 50+ psychological dimensions. 
                  Skeptical? Decisive? Data-driven? Emotion-focused? It learns in real-time.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-green-500"></div>
            </div>
            
            <div className="relative group">
              <div className="bg-gradient-to-br from-green-900/60 to-green-600/60 rounded-3xl border border-green-400/40 p-8 text-center backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-green-500/50">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-green-300 mb-3">3</div>
                <h3 className="text-2xl font-bold text-white mb-4">Adapts & Learns</h3>
                <p className="text-green-200 leading-relaxed">
                  Every response teaches the AI more about human psychology. It adapts your messaging style 
                  and gets smarter about which approaches work for different personality types.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Psychology Demo */}
          <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-center text-white mb-8">Live Psychology Adaptation</h3>
            
            <div className="flex justify-center mb-8">
              <div className="bg-gray-800/50 rounded-2xl p-2 backdrop-blur-sm">
                {[
                  { id: 'psychology', label: 'Psychology Engine', icon: Brain },
                  { id: 'learning', label: 'Learning System', icon: Lightbulb },
                  { id: 'adaptation', label: 'Real-Time Adaptation', icon: Zap }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-xl text-sm font-medium transition-all flex items-center ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <tab.icon className="w-5 h-5 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="min-h-[400px]">
              {activeTab === 'psychology' && (
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-black/40 rounded-2xl p-6 border border-cyan-500/30">
                    <h4 className="text-xl font-bold text-cyan-300 mb-6 flex items-center">
                      <User className="w-6 h-6 mr-3" />
                      Sarah Chen - Tech Executive
                    </h4>
                    <div className="space-y-4">
                      {[
                        { label: 'Communication Style', value: 'Direct & Data-Driven', color: 'blue' },
                        { label: 'Decision Making', value: 'Analytical & Cautious', color: 'yellow' },
                        { label: 'Trust Building', value: 'Skeptical', color: 'red' },
                        { label: 'Motivation Trigger', value: 'ROI & Efficiency', color: 'green' }
                      ].map((trait, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-xl">
                          <span className="text-gray-300">{trait.label}</span>
                          <span className={`font-bold ${
                            trait.color === 'blue' ? 'text-blue-400' :
                            trait.color === 'yellow' ? 'text-yellow-400' :
                            trait.color === 'red' ? 'text-red-400' :
                            'text-green-400'
                          }`}>{trait.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-black/40 rounded-2xl p-6 border border-purple-500/30">
                    <h4 className="text-xl font-bold text-purple-300 mb-6 flex items-center">
                      <Bot className="w-6 h-6 mr-3" />
                      AI-Generated Message
                    </h4>
                    <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl p-4 border border-purple-400/30 mb-4">
                      <div className="text-white leading-relaxed">
                        "Hi Sarah, saw your LinkedIn post about Q4 planning challenges. We helped a similar fintech company 
                        reduce their sales cycle by 34% last quarter. Here's the specific ROI breakdown: [data]. 
                        Worth a 10-minute call?"
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-green-400">
                        <Check className="w-4 h-4 mr-2" />
                        Data-focused approach
                      </div>
                      <div className="flex items-center text-green-400">
                        <Check className="w-4 h-4 mr-2" />
                        Specific metrics included
                      </div>
                      <div className="flex items-center text-green-400">
                        <Check className="w-4 h-4 mr-2" />
                        Low-commitment ask
                      </div>
                      <div className="flex items-center text-green-400">
                        <Check className="w-4 h-4 mr-2" />
                        Industry relevance
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'learning' && (
                <div className="max-w-5xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        icon: MessageSquare,
                        title: 'Message Psychology',
                        desc: 'Learns which opening lines work for different personality types, optimal message length, question styles that reduce hesitation',
                        gradient: 'from-blue-500 to-cyan-500'
                      },
                      {
                        icon: Brain,
                        title: 'Personality Patterns',
                        desc: 'Identifies best followup timing for each psychology cluster, objection handling strategies that work',
                        gradient: 'from-purple-500 to-pink-500'
                      },
                      {
                        icon: TrendingUp,
                        title: 'Conversation Intelligence',
                        desc: 'Maps successful conversation sequences, optimal timing windows for maximum effectiveness',
                        gradient: 'from-green-500 to-emerald-500'
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-black/40 rounded-2xl p-6 border border-gray-700/50 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-6 border border-purple-400/30 text-center">
                    <h4 className="text-xl font-bold text-white mb-4">Learning Scales By Plan</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-black/40 rounded-xl p-4">
                        <div className="font-bold text-gray-400 mb-2">Growth Plan</div>
                        <div className="text-purple-400 font-bold">100 Conversation Memory</div>
                      </div>
                      <div className="bg-black/40 rounded-xl p-4">
                        <div className="font-bold text-gray-400 mb-2">Scale Plan</div>
                        <div className="text-cyan-400 font-bold">1,000 Conversation Memory</div>
                      </div>
                      <div className="bg-black/40 rounded-xl p-4">
                        <div className="font-bold text-gray-400 mb-2">Enterprise</div>
                        <div className="text-green-400 font-bold">Unlimited Learning</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'adaptation' && (
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-red-900/40 to-red-600/40 rounded-2xl p-6 border border-red-400/30">
                    <h4 className="text-xl font-bold text-red-300 mb-4">Skeptical Prospect</h4>
                    <div className="bg-black/60 rounded-xl p-4 mb-4">
                      <div className="text-red-200 text-sm italic mb-3">"I've heard this before from other vendors..."</div>
                      <div className="text-white text-sm leading-relaxed">
                        <strong>AI Response:</strong> "I understand the skepticism - you've probably been burned before. 
                        Here are 3 specific results from companies just like yours: [data, case studies, verified metrics]. 
                        No sales pitch, just facts. Worth 10 minutes?"
                      </div>
                    </div>
                    <div className="text-xs text-red-300 bg-red-900/30 rounded-lg p-3">
                      <strong>Psychology Approach:</strong> Data-heavy, acknowledgment of skepticism, proof-based
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-900/40 to-green-600/40 rounded-2xl p-6 border border-green-400/30">
                    <h4 className="text-xl font-bold text-green-300 mb-4">Decisive Prospect</h4>
                    <div className="bg-black/60 rounded-xl p-4 mb-4">
                      <div className="text-green-200 text-sm italic mb-3">"Sounds interesting, what's next?"</div>
                      <div className="text-white text-sm leading-relaxed">
                        <strong>AI Response:</strong> "Perfect! Let's move fast. I can show you exactly how this works 
                        in a 15-minute demo. I have Wednesday 2pm or Thursday 10am open. Which works better?"
                      </div>
                    </div>
                    <div className="text-xs text-green-300 bg-green-900/30 rounded-lg p-3">
                      <strong>Psychology Approach:</strong> Direct, fast-moving, specific options, no hesitation
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What It Is / Isn't - Enhanced */}
      <section className="relative py-20 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Let me be crystal clear about what this is
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I built SurFox to solve one specific problem that was costing companies millions in lost revenue. 
              It's not trying to be everything to everyone — it's laser-focused on one thing: 
              <strong className="text-white"> intelligently reviving cold prospects using sales psychology.</strong>
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-red-900/40 to-red-600/40 rounded-2xl border border-red-400/30 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-red-300 mb-8">This is NOT:</h3>
              <ul className="space-y-6 text-red-200">
                <li className="flex items-start">
                  <X className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-red-400" />
                  <div>
                    <strong className="block">Another mass texting tool</strong>
                    <span className="text-red-300">We don't blast the same message to thousands of people</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-red-400" />
                  <div>
                    <strong className="block">A CRM replacement</strong>
                    <span className="text-red-300">Your existing CRM handles records, we handle psychology</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-red-400" />
                  <div>
                    <strong className="block">Marketing automation</strong>
                    <span className="text-red-300">This is sales psychology, not marketing campaigns</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-red-400" />
                  <div>
                    <strong className="block">A chatbot for your website</strong>
                    <span className="text-red-300">We work with existing leads, not new website visitors</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-600/40 rounded-2xl border border-cyan-400/30 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-cyan-300 mb-8">This IS:</h3>
              <ul className="space-y-6 text-cyan-200">
                <li className="flex items-start">
                  <Brain className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong className="block">A Sales Psychology AI Learning Engine</strong>
                    <span className="text-cyan-300">Reads human psychology, learns behavioral patterns, adapts messaging</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong className="block">A personality-based engagement system</strong>
                    <span className="text-cyan-300">Different approaches for skeptical vs decisive vs analytical prospects</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong className="block">An adaptive learning platform</strong>
                    <span className="text-cyan-300">Gets smarter with every conversation, optimizes for psychology patterns</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Eye className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-cyan-400" />
                  <div>
                    <strong className="block">A buying intent detection system</strong>
                    <span className="text-cyan-300">Knows the difference between genuine interest and polite deflection</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Built for every industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cold leads are a universal problem. SurFox adapts to your industry's unique buying patterns, terminology, and psychological triggers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Building, 
                title: 'Real Estate', 
                desc: 'Reactivate buyers who went cold. AI learns when they\'re ready to tour again.',
                psychology: 'Detects emotional vs analytical buyer personalities',
                gradient: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: Cpu, 
                title: 'SaaS & Technology', 
                desc: 'Identify enterprise buyers showing implementation signals.',
                psychology: 'Adapts to technical vs business stakeholder mindsets',
                gradient: 'from-purple-500 to-pink-500'
              },
              { 
                icon: Users, 
                title: 'Professional Services', 
                desc: 'Reconnect with prospects when their project timing aligns.',
                psychology: 'Recognizes decision-maker vs influencer communication styles',
                gradient: 'from-green-500 to-emerald-500'
              },
              { 
                icon: TrendingUp, 
                title: 'Financial Services', 
                desc: 'Detect when prospects are ready for loans, investments, or insurance.',
                psychology: 'Identifies conservative vs aggressive risk tolerance patterns',
                gradient: 'from-yellow-500 to-orange-500'
              },
              { 
                icon: Shield, 
                title: 'Healthcare', 
                desc: 'Re-engage patients for elective procedures and consultations.',
                psychology: 'Adapts to comfort level and decision-making preferences',
                gradient: 'from-red-500 to-pink-500'
              },
              { 
                icon: Target, 
                title: 'Manufacturing', 
                desc: 'Revive B2B prospects when their procurement cycles restart.',
                psychology: 'Learns engineering vs procurement vs executive mindsets',
                gradient: 'from-indigo-500 to-purple-500'
              }
            ].map((industry, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-purple-500/50">
                <div className={`w-12 h-12 bg-gradient-to-br ${industry.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{industry.desc}</p>
                <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-3 border border-purple-500/30">
                  <div className="text-sm text-purple-300 font-medium flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    {industry.psychology}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing with Learning Tiers */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Choose your plan
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Start with what you need. Scale as you grow. No long-term contracts.
            </p>
            <p className="text-lg text-purple-300 font-medium">
              More learning = better results = higher conversions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-8 text-center backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <div className="text-3xl font-bold text-white mb-4">$197<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-4">Perfect for individual sales professionals</p>
              
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-3 mb-6 border border-gray-600/30">
                <div className="text-sm font-medium text-gray-300">AI Learning:</div>
                <div className="text-sm text-gray-400">No learning (static responses)</div>
              </div>
              
              <ul className="text-left space-y-3 mb-8 text-sm">
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>500 monthly leads</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Basic psychological profiling</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>AI-generated initial SMS</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Default "Friendly & Casual" tone</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>1 team seat</span>
                </li>
              </ul>
              
              <button className="w-full border border-gray-600 text-gray-300 px-6 py-3 rounded-xl hover:bg-gray-800/50 transition-colors font-medium">
                Start Free Trial
              </button>
            </div>

            {/* Growth Plan */}
            <div className="relative bg-gradient-to-br from-purple-900/60 to-blue-900/60 rounded-2xl border-2 border-purple-400/50 p-8 text-center backdrop-blur-xl transform scale-105 shadow-2xl shadow-purple-500/25">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
              <div className="text-3xl font-bold text-white mb-4">$397<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-4">For growing sales teams</p>
              
              <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-lg p-3 mb-6 border border-purple-400/30">
                <div className="text-sm font-medium text-purple-300">AI Learning:</div>
                <div className="text-sm text-purple-200">100 conversation memory</div>
              </div>
              
              <ul className="text-left space-y-3 mb-8 text-sm">
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>2,500 monthly leads</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Advanced psychological pattern recognition</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>AI-optimized tone selection</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Conversation flow optimization</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Learning analytics dashboard</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Chrome extension</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>5 team seats</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Zapier/API integration</span>
                </li>
              </ul>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all font-bold shadow-lg">
                Start Free Trial
              </button>
            </div>

            {/* Scale Plan */}
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-8 text-center backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">Scale</h3>
              <div className="text-3xl font-bold text-white mb-4">$997<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-4">For enterprise sales organizations</p>
              
              <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 rounded-lg p-3 mb-6 border border-purple-400/30">
                <div className="text-sm font-medium text-purple-300">AI Learning:</div>
                <div className="text-sm text-purple-200">1,000 conversation memory</div>
              </div>
              
              <ul className="text-left space-y-3 mb-8 text-sm">
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>10,000+ monthly leads</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Advanced behavioral adaptation</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Comprehensive psychological insights</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Message A/B testing (AI-driven)</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Unlimited AI knowledge base uploads</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>Full team metrics</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>15+ team seats</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span>White-glove onboarding & CSM</span>
                </li>
              </ul>
              
              <button className="w-full border border-gray-600 text-gray-300 px-6 py-3 rounded-xl hover:bg-gray-800/50 transition-colors font-medium">
                Contact Sales
              </button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-gray-400 mb-4">
              All plans include: 14-day free trial • No setup fees • Cancel anytime
            </p>
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-4 max-w-2xl mx-auto border border-purple-500/30">
              <p className="text-sm text-purple-300 font-medium flex items-center justify-center">
                <Gauge className="w-4 h-4 mr-2" />
                Higher plans = More AI learning = Better psychology insights = Higher conversion rates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Dramatic */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Stop letting good prospects slip away
          </h2>
          <p className="text-2xl text-purple-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            You've got leads sitting in your CRM right now. Some are ready to buy — they're just waiting for someone who understands their psychology. 
            Let SurFox find them for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-8">
            <button className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl font-bold text-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                Start Free Trial
              </div>
            </button>
            <Link href="/toms-story" className="px-12 py-6 border-2 border-purple-400/50 rounded-2xl font-bold text-2xl backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-500 hover:scale-105">
              Learn More About Tom
            </Link>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-xl rounded-2xl p-6 max-w-2xl mx-auto border border-purple-500/30">
            <h3 className="font-bold mb-4 text-xl">Questions? I'm here to help.</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a href="mailto:tom@surfox.com" className="flex items-center text-purple-200 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                tom@surfox.com
              </a>
              <a href="tel:+15551234567" className="flex items-center text-purple-200 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SurFoxHomepage