'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Play,
  Check,
  X,
  Brain,
  MessageSquare,
  Target,
  User,
  ChevronRight,
  Phone,
  Mail,
  Zap,
  Activity,
  Shield,
  Eye,
  TrendingUp,
  BarChart3,
  Clock,
  ArrowRight,
  Building,
  Users,
  Cpu,
  Database,
  Lightbulb,
  Layers,
  Gauge,
  Sparkles,
  Send,
  Bot,
  Menu,
  HelpCircle,
  Plus,
  Minus
} from 'lucide-react'
import Nav from './components/nav'
import Head from 'next/head'

const SurFoxHomepage = () => {
  const [activeTab, setActiveTab] = useState('psychology')
  const [typingText, setTypingText] = useState('')
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [activeFAQ, setActiveFAQ] = useState(null)

  const messages = [
    "Hi Sarah, I see you're analytical - here's the exact ROI data you need...",
    "Mark, you seem decisive - let's cut to the chase and schedule that demo...",
    "Jennifer, I know you're skeptical - here's proof from companies just like yours..."
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

const [activeFAQ, setActiveFAQ] = useState<number | null>(null)

const toggleFAQ = (index: number) => {
  setActiveFAQ(activeFAQ === index ? null : index)
}

  return (
    <>
      <Head>
        <title>AI Sales Automation Software | SurFox Conversation Intelligence Platform</title>

        <meta
          name="description"
          content="Transform cold outreach with AI sales automation that reads prospect psychology, qualifies leads automatically, and delivers only ready-to-buy conversations. Replace manual texting with intelligent AI agents."
        />
        <meta
          name="keywords"
          content="AI sales automation, conversation intelligence, cold outreach AI, lead qualification software, sales psychology AI, automated lead nurturing, sales AI platform, prospect qualification, agentic AI sales"
        />
        <link rel="canonical" href="https://www.getsurfox.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="AI Sales Automation That Reads Prospect Psychology | SurFox" />
        <meta
          property="og:description"
          content="Revolutionary AI sales platform that has real conversations with prospects, reads their psychology, and delivers only qualified leads ready to buy."
        />
        <meta property="og:url" content="https://www.getsurfox.com" />
        <meta property="og:site_name" content="SurFox" />
        <meta property="og:image" content="https://www.getsurfox.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@getSurFox" />
        <meta name="twitter:title" content="AI Sales Automation That Reads Prospect Psychology | SurFox" />
        <meta
          name="twitter:description"
          content="Stop manual texting. AI agents have real conversations, qualify prospects automatically, and deliver only ready buyers."
        />
        <meta name="twitter:image" content="https://www.getsurfox.com/og-image.jpg" />
        <meta name="twitter:creator" content="@TomFromSurFox" />

        {/* Structured Data - Software Application */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'SurFox',
              applicationCategory: 'Sales & Marketing AI Software',
              description:
                'AI sales automation platform that reads prospect psychology and conducts intelligent conversations to qualify leads automatically.',
              url: 'https://www.getsurfox.com',
              logo: 'https://www.getsurfox.com/logo.png',
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '197',
                highPrice: '1997',
                priceCurrency: 'USD'
              },
              sameAs: ['https://twitter.com/getSurFox', 'https://www.linkedin.com/company/surfox']
            })
          }}
        />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is agentic AI in sales automation?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Agentic AI in sales automation refers to artificial intelligence that acts independently to conduct full sales conversations, make decisions based on prospect psychology, and qualify leads without human intervention. Unlike template-based systems, agentic AI adapts its approach in real-time based on how prospects respond.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'How does AI sales automation differ from text blasting?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'AI sales automation conducts personalized conversations with each prospect, reads their psychology and communication style, and adapts messaging accordingly. Text blasting sends identical messages to thousands of prospects without personalization or intelligence.'
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white overflow-hidden">
        <Nav />

        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-40 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 pt-24 lg:pt-20 min-h-[85vh] flex items-center">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 backdrop-blur-sm">
                  <Zap className="w-4 h-4 mr-2 text-red-300" />
                  <span className="text-red-200 font-medium text-sm">The Evolution Is Here • Text Blasting Is Dead</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                    AI Sales Automation That Reads Prospect Psychology
                  </span>
                </h1>

                <div className="text-xl text-purple-200 space-y-4">
                  <p className="text-lg text-gray-300 font-medium">
                    Revolutionary conversation intelligence platform that qualifies leads automatically
                  </p>
                  <p className="text-lg text-gray-300">
                    Transform cold outreach with <strong className="text-white">agentic AI</strong> that conducts real
                    conversations, adapts to each prospect's psychology, and delivers only qualified leads ready to buy.{' '}
                    <strong className="text-white">No more manual texting or sorting through "not interested" replies.</strong>
                  </p>
                  <div className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-400/30 backdrop-blur-sm">
                    <Target className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-yellow-200 font-medium text-sm">End Of Manual Outreach Era</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => {
                      const pricingSection = document.getElementById('pricing')
                      if (pricingSection) {
                        pricingSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Start Free Trial
                    </div>
                  </button>

                  <Link href="#how-it-works">
                    <button className="px-6 py-3 border-2 border-purple-400/50 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300">
                      See How It Works
                    </button>
                  </Link>
                </div>

                {/* Tom's Quote */}
                <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-xl rounded-xl border border-purple-500/30 p-6 mt-6">
                  <p className="text-purple-200 text-base mb-3 italic">
                    "Text blasters send 10,000 generic messages and waste hours sorting replies. SurFox has intelligent conversations
                    and only gives you qualified prospects."
                  </p>
                  <p className="text-purple-300 text-sm">Tom Bauer, Founder & CEO</p>
                </div>
              </div>

              {/* Live AI Demo */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-purple-200">Live AI Conversation Intelligence</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-300 text-xs">ANALYZING</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="bg-black/40 rounded-lg p-3 border border-cyan-500/30">
                      <div className="text-cyan-300 text-xs mb-2">AI Reading Prospect Psychology...</div>
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

                    <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg p-3 border border-purple-400/30">
                      <div className="text-purple-300 text-xs mb-2">Adaptive Conversation:</div>
                      <div className="bg-black/60 rounded-lg p-2 font-mono text-xs text-green-300 min-h-[40px] flex items-center">
                        {typingText}
                        <span className="animate-pulse">|</span>
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

                {/* Floating Elements */}
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

        {/* Revolutionary Declaration Section */}
        <section className="relative py-20 bg-gradient-to-r from-red-900/50 to-orange-900/50 backdrop-blur-xl border-y border-red-500/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
                The Text Blasting Era Is Over.
                <br />
                <span className="text-white">The Conversation Era Begins Now.</span>
              </h2>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-400/30 backdrop-blur-sm mb-6">
                <Target className="w-5 h-5 mr-3 text-red-400" />
                <span className="text-red-200 font-bold">We're Taking Over</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-red-900/40 to-red-600/40 rounded-2xl border border-red-400/30 p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center">
                  <X className="w-8 h-8 mr-3" />
                  Text Blasters (The Old Way):
                </h3>
                <div className="space-y-4 text-red-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Send 10,000 identical messages</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Manually sort through garbage replies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Waste hours on "not interested" responses</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Treat analytical prospects like emotional ones</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Never learn what actually works</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-cyan-600/40 rounded-2xl border border-cyan-400/30 p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center">
                  <Brain className="w-8 h-8 mr-3" />
                  SurFox Agentic AI (The Future):
                </h3>
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-2 mb-4 border border-yellow-400/30">
                  <div className="text-xs font-bold text-yellow-300 flex items-center justify-center">
                    <Zap className="w-3 h-3 mr-2" />
                    INTELLIGENT CONVERSATIONS
                  </div>
                </div>
                <div className="space-y-4 text-cyan-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>AI has real conversations with prospects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Only qualified prospects reach you</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Reads psychology and adapts in real-time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Learns from every conversation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Gets smarter while you sleep</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Definition - Original Section */}
        <section className="relative py-20 bg-black/20 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
                You're drowning in replies you can't use
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Text blasters create more work, not less. You send thousands of messages, then spend hours sorting through "stop," "not
                interested," and "maybe later" responses. That's not scaling — that's suffering.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-red-900/40 to-red-600/40 rounded-2xl border border-red-400/30 p-8 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <X className="w-8 h-8 text-red-400 mr-3" />
                  <h3 className="text-2xl font-bold text-red-300">Text Blasting Reality:</h3>
                </div>
                <ul className="space-y-4 text-red-200">
                  <li className="flex items-start">
                    <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                    <div>
                      <strong>Mass generic messages</strong> — Same SMS to everyone, no personalization
                    </div>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                    <div>
                      <strong>Manual reply sorting</strong> — Hours wasted reading "not interested" responses
                    </div>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                    <div>
                      <strong>Zero psychology awareness</strong> — Treating skeptical prospects like decisive ones
                    </div>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                    <div>
                      <strong>Sales reps become text operators</strong> — Spending day typing instead of selling
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-cyan-600/40 rounded-2xl border border-cyan-400/30 p-8 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <Brain className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-cyan-300">SurFox Conversation AI:</h3>
                </div>
                <ul className="space-y-4 text-cyan-200">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                    <div>
                      <strong>AI handles all conversations</strong> — No manual texting or reply sorting
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                    <div>
                      <strong>Only qualified prospects escalated</strong> — You only talk to ready buyers
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                    <div>
                      <strong>Psychology-based adaptation</strong> — Different approach for each personality type
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                    <div>
                      <strong>Sales reps focus on closing</strong> — AI does the work, you get the results
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What is Agentic AI Section */}
        <section className="relative py-20" id="features">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                What is Agentic AI for Sales?
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Agentic AI goes beyond chatbots and templates. It's artificial intelligence that acts independently, makes decisions,
                and adapts strategies based on real-time conversation analysis and prospect psychology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Psychology-Based Conversations</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Unlike template-based systems that send identical messages, agentic AI reads each prospect's communication style,
                  decision-making patterns, and psychological triggers to create personalized conversation strategies.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Identifies analytical vs emotional decision-makers
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Adapts to skeptical vs trusting personalities
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Matches communication pace and style preferences
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Autonomous Decision Making</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Agentic AI makes real-time decisions about conversation flow, qualification questions, objection handling, and
                  escalation timing without human intervention or pre-programmed scripts.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Chooses optimal response strategies dynamically
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Determines when to provide proof vs build rapport
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Adapts follow-up sequences to prospect behavior
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Continuous Learning System</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Each conversation improves the AI's understanding of what works for different prospect types, industries, and
                  objection patterns, creating a self-improving sales intelligence system.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Maps successful conversation patterns by personality
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Learns industry-specific language and concerns
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Improves objection handling through pattern recognition
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
                Why Traditional Cold Outreach Fails
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Mass texting and generic email campaigns create more work, not more sales. Here's why the old approach is broken and
                how AI conversation intelligence fixes it.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-red-900/40 to-red-600/40 rounded-2xl border border-red-400/30 p-8 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <X className="w-8 h-8 text-red-400 mr-3" />
                  <h3 className="text-2xl font-bold text-red-300">Traditional Mass Outreach Problems</h3>
                </div>
                <ul className="space-y-4 text-red-200">
                  <li className="flex items-start">
                    <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                    <div>
                      <strong>Generic Message Blasting</strong> - Same message to thousands of prospects regardless of industry, role,
                      or psychology
                    </div>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                    <div>
                      <strong>Manual Reply Management</strong> - Hours spent sorting through "not interested," "stop," and "maybe later"
                      responses
                    </div>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                    <div>
                      <strong>No Psychology Awareness</strong> - Treating analytical prospects like emotional ones, skeptical like
                      trusting
                    </div>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-red-400" />
                    <div>
                      <strong>Poor Qualification Process</strong> - No systematic way to identify truly interested prospects vs polite
                      responses
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-cyan-600/40 rounded-2xl border border-cyan-400/30 p-8 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <Brain className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-cyan-300">SurFox Agentic AI Solution</h3>
                </div>
                <ul className="space-y-4 text-cyan-200">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                    <div>
                      <strong>Personalized Conversations</strong> - AI crafts unique approaches based on prospect's industry, role, and
                      psychological profile
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                    <div>
                      <strong>Qualified Prospects Only</strong> - AI handles all conversations and escalates only genuinely interested,
                      sales-ready prospects
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                    <div>
                      <strong>Real-Time Psychology Reading</strong> - Adapts conversation style, proof level, and pacing to match each
                      prospect's personality
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-cyan-400" />
                    <div>
                      <strong>Intelligent Qualification Scoring</strong> - Multi-factor analysis of buying signals, timeline, budget,
                      and decision-making authority
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="relative py-20 bg-black/20 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                How AI Conversation Intelligence Works
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Our agentic AI system follows a systematic process to identify, engage, qualify, and convert cold leads into
                sales-ready prospects using advanced conversation intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  number: '1',
                  icon: Target,
                  title: 'AI Analyzes Prospect Data',
                  description:
                    "The system analyzes prospect information including industry, role, company size, and any available background data to create an initial psychological profile and conversation strategy.",
                  color: 'from-purple-500 to-cyan-500'
                },
                {
                  number: '2',
                  icon: MessageSquare,
                  title: 'Initiates Personalized Conversation',
                  description:
                    "AI crafts a personalized opening message based on the prospect's profile and begins a natural conversation, avoiding generic templates or obvious automation.",
                  color: 'from-cyan-500 to-blue-500'
                },
                {
                  number: '3',
                  icon: Brain,
                  title: 'Reads Psychology & Adapts',
                  description:
                    'As the conversation develops, AI analyzes response patterns, communication style, objection types, and buying signals to refine its psychological understanding.',
                  color: 'from-blue-500 to-purple-500'
                },
                {
                  number: '4',
                  icon: BarChart3,
                  title: 'Qualifies Based on Multiple Factors',
                  description:
                    'AI evaluates prospects using advanced qualification criteria including budget indicators, timeline signals, decision-making authority, and genuine interest level.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  number: '5',
                  icon: TrendingUp,
                  title: 'Escalates Only Qualified Prospects',
                  description:
                    'When AI determines a prospect meets qualification thresholds and shows genuine buying interest, it escalates to your sales team with full conversation context.',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  number: '6',
                  icon: Lightbulb,
                  title: 'Learns & Improves Continuously',
                  description:
                    'The system learns from every conversation outcome, refining its psychological models, qualification criteria, and conversation strategies to improve performance over time.',
                  color: 'from-pink-500 to-purple-500'
                }
              ].map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-gray-900/60 to-purple-900/60 rounded-3xl border border-purple-400/40 p-8 text-center backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/50">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500`}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-purple-300 mb-3">{step.number}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-purple-200 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20" id="faq">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from white to-purple-300 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about AI sales automation and conversation intelligence
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  question: 'What makes agentic AI different from chatbots or templates?',
                  answer:
                    "Agentic AI operates independently and makes real-time decisions about conversation flow, unlike chatbots that follow predetermined scripts. It reads prospect psychology, adapts its communication style, and chooses optimal strategies based on each individual's responses and behavior patterns."
                },
                {
                  question: 'How does the AI read prospect psychology?',
                  answer:
                    'The AI analyzes communication patterns, response timing, language choices, objection types, and question patterns to identify psychological traits like decision-making style (analytical vs intuitive), trust levels (skeptical vs accepting), communication preferences (direct vs relationship-focused), and motivation triggers.'
                },
                {
                  question: 'What industries work best with AI sales automation?',
                  answer:
                    "AI conversation intelligence works across all B2B industries including SaaS, real estate, financial services, professional services, healthcare, manufacturing, and more. The AI adapts to industry-specific language, concerns, and buying cycles automatically."
                },
                {
                  question: 'How does AI qualification compare to human qualification?',
                  answer:
                    'AI qualification is more consistent and thorough than human qualification because it analyzes multiple data points simultaneously, never gets tired or distracted, and applies consistent criteria across all prospects. It also learns from successful outcomes to improve qualification accuracy over time.'
                },
                {
                  question: "What happens to prospects who aren't qualified?",
                  answer:
                    "Unqualified prospects continue in AI-managed nurture sequences tailored to their specific objections or timeline. The AI maintains these relationships and re-evaluates qualification status as circumstances change, ensuring no opportunities are lost."
                },
                {
                  question: 'How long does it take to see results?',
                  answer:
                    "Most clients see qualified prospects within the first week of launch. The AI's conversation quality and qualification accuracy improve continuously, with significant optimization typically occurring within the first month as the system learns your specific market and prospect patterns."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 mb-4 backdrop-blur-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-500/10 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {activeFAQ === index ? (
                      <Minus className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    )}
                  </button>
                  {activeFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from white to-purple-300 bg-clip-text text-transparent">
                AI Sales Automation Pricing
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                Choose the plan that scales with your sales team's needs. All plans include AI conversation intelligence,
                psychology-based qualification, and continuous learning capabilities.
              </p>
              <p className="text-lg text-purple-300 font-medium">Higher tiers = Smarter AI = Better conversations = More qualified prospects</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Starter Plan */}
              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-8 text-center backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                <div className="text-3xl font-bold text-white mb-4">
                  $197<span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Perfect for individual sales professionals ready to eliminate manual outreach
                </p>

                <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-3 mb-6 border border-gray-600/30">
                  <div className="text-sm font-medium text-gray-300">AI Capability:</div>
                  <div className="text-sm text-gray-400">Basic conversations with context</div>
                  <div className="text-xs text-gray-500 mt-1">No learning, but still way better than blasting</div>
                </div>

                <ul className="text-left space-y-3 mb-8 text-sm">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>500 monthly leads</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>AI conversation intelligence</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Psychology-based qualification</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Automated follow-up sequences</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Basic analytics dashboard</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>1 team member</span>
                  </li>
                </ul>

                <button
                  onClick={() => (window.location.href = 'https://www.getsurfox.com/subscribe/starter')}
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-3 rounded-xl hover:from-gray-600 hover:to-gray-500 transition-colors font-medium"
                >
                  Start Free Trial
                </button>
              </div>

              {/* Growth Plan */}
              <div className="relative bg-gradient-to-br from-purple-900/60 to-blue-900/60 rounded-2xl border-2 border-purple-400/50 p-8 text-center backdrop-blur-xl transform scale-105 shadow-2xl shadow-purple-500/25">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
                <div className="text-3xl font-bold text-white mb-4">
                  $497<span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-gray-300 mb-4">For growing sales teams ready to scale AI-powered conversations</p>

                <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-lg p-3 mb-6 border border-purple-400/30">
                  <div className="text-sm font-medium text-purple-300">AI Capability:</div>
                  <div className="text-sm text-purple-200">Learning AI with 100 conversation memory</div>
                  <div className="text-xs text-purple-300 mt-1">Gets smarter with every conversation</div>
                </div>

                <ul className="text-left space-y-3 mb-8 text-sm">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>2,500 monthly leads</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Everything in Starter, plus:</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Advanced learning AI (100 conversation memory)</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Custom qualification scoring</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Team performance analytics</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>5 team members</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                </ul>

                <button
                  onClick={() => (window.location.href = 'https://www.getsurfox.com/subscribe/growth')}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-purple-500 hover:to-cyan-500 transition-colors font-medium shadow-lg"
                >
                  Start Free Trial
                </button>
              </div>

              {/* Scale Plan */}
              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-8 text-center backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white mb-2">Scale</h3>
                <div className="text-3xl font-bold text-white mb-4">
                  $1,997<span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-gray-300 mb-4">For enterprise teams replacing all manual outreach with AI automation</p>

                <div className="bg-gradient-to-r from-cyan-800/50 to-green-800/50 rounded-lg p-3 mb-6 border border-cyan-400/30">
                  <div className="text-sm font-medium text-cyan-300">AI Capability:</div>
                  <div className="text-sm text-cyan-200">Expert-level AI (1,000 conversation memory)</div>
                  <div className="text-xs text-cyan-300 mt-1">Advanced psychology insights</div>
                </div>

                <ul className="text-left space-y-3 mb-8 text-sm">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>10,000+ monthly leads</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Everything in Growth, plus:</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Expert-level AI (1,000 conversation memory)</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Custom AI training & optimization</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>White-glove onboarding</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span>Dedicated success manager</span>
                  </li>
                </ul>

                <button
                  onClick={() => (window.location.href = 'https://www.getsurfox.com/subscribe/scale')}
                  className="w-full border border-gray-600 text-gray-300 px-6 py-3 rounded-xl hover:bg-gray-800/50 transition-colors font-medium"
                >
                  Contact Sales
                </button>
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-yellow-700/30 to-orange-700/30 rounded-xl p-6 max-w-3xl mx-auto border border-yellow-500/40">
                <h3 className="text-xl font-bold text-yellow-300 mb-4">Franchise & White Label Opportunities</h3>
                <p className="text-gray-300 mb-6">Interested in partnering with SurFox at the franchise or white label level? Let's talk.</p>
                <button
                  onClick={() => (window.location.href = '/contact-sales')}
                  className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all shadow-lg"
                >
                  Contact Sales
                </button>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-sm text-gray-400 mb-4">All plans include: 30-day money-back guarantee • Cancel anytime • No setup fees</p>
              <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-4 max-w-2xl mx-auto border border-red-500/30">
                <p className="text-sm text-red-300 font-medium flex items-center justify-center">
                  <Target className="w-4 h-4 mr-2" />
                  Ready to transform your sales process? Start with a free trial and see qualified prospects within 7 days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Stop Manual Outreach. Start AI Conversations.
            </h2>
            <p className="text-2xl text-purple-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              You've got prospects sitting in your CRM right now who are ready to buy - they just need someone who understands their
              psychology. Let SurFox AI find them and deliver them to you qualified and sales-ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-8">
              <button
                onClick={() => {
                  const pricingSection = document.getElementById('pricing')
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl font-bold text-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center">
                  <Zap className="w-6 h-6 mr-3" />
                  Start Free Trial
                </div>
              </button>
              <Link href="/demo">
                <button className="px-12 py-6 border-2 border-purple-400/50 rounded-2xl font-bold text-2xl backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-500 hover:scale-105">
                  See AI In Action
                </button>
              </Link>
            </div>

            <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-xl rounded-2xl p-6 max-w-2xl mx-auto border border-purple-500/30">
              <h3 className="font-bold mb-4 text-xl">Questions? Ready to eliminate manual outreach?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a href="mailto:tom@surfox.com" className="flex items-center text-purple-200 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  tom@surfox.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default SurFoxHomepage
