'use client'

import React, { useState, useEffect } from 'react'
import { Brain, Shield, Eye, Zap, Lock, ChevronDown } from 'lucide-react'

const SurFoxMystery = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [typingText, setTypingText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const mysteryPhrases = [
    "reading minds through text messages",
    "understanding human psychology at scale", 
    "seeing what others miss in conversations",
    "turning cold leads into warm prospects",
    "decoding the language of buying intent"
  ]

  // Typing animation effect
  useEffect(() => {
    const phrase = mysteryPhrases[currentPhrase]
    let index = 0
    const timer = setInterval(() => {
      if (index <= phrase.length) {
        setTypingText(phrase.slice(0, index))
        index++
      } else {
        setTimeout(() => {
          setCurrentPhrase((prev) => (prev + 1) % mysteryPhrases.length)
          setTypingText('')
        }, 3000)
        clearInterval(timer)
      }
    }, 80)

    return () => clearInterval(timer)
  }, [currentPhrase])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-auto relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-blue-900/30"></div>
        
        {/* Floating Neural Network Pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Dynamic Connecting Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            {[...Array(20)].map((_, i) => (
              <line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="url(#gradient)"
                strokeWidth="1"
                className="animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}
        />
        
        {/* Moving Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-40 w-36 h-36 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Logo/Brand */}
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                <Brain className="w-7 h-7 text-white relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold tracking-wider">SurFox</span>
            </div>
            
            {/* Patent Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-400/30 backdrop-blur-sm">
              <Shield className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-yellow-200 font-medium text-sm">Patent Pending Technology</span>
            </div>
          </div>

          {/* Mystery Headline */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                We're building something
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                revolutionary
              </span>
            </h1>
            
            {/* Typing Animation */}
            <div className="h-20 flex items-center justify-center">
              <p className="text-3xl text-purple-300 font-light">
                Imagine <span className="text-white font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{typingText}</span>
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-cyan-400 font-bold text-4xl`}>|</span>
              </p>
            </div>
          </div>

          {/* Mysterious Hints */}
          <div className="grid md:grid-cols-3 gap-8 py-12">
            <div className="group">
              <div className="bg-gradient-to-br from-purple-900/60 to-black/60 rounded-3xl border-2 border-purple-500/50 p-8 backdrop-blur-2xl transition-all duration-700 group-hover:scale-110 group-hover:border-purple-400/80 group-hover:shadow-2xl group-hover:shadow-purple-500/50">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-purple-500/50">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Psychology AI</h3>
                <p className="text-purple-300 leading-relaxed">Understanding human behavior at a level never seen before</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-blue-900/60 to-black/60 rounded-3xl border-2 border-blue-500/50 p-8 backdrop-blur-2xl transition-all duration-700 group-hover:scale-110 group-hover:border-blue-400/80 group-hover:shadow-2xl group-hover:shadow-blue-500/50">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-blue-500/50">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Hidden Insights</h3>
                <p className="text-blue-300 leading-relaxed">Seeing patterns in communication that others miss entirely</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-green-900/60 to-black/60 rounded-3xl border-2 border-green-500/50 p-8 backdrop-blur-2xl transition-all duration-700 group-hover:scale-110 group-hover:border-green-400/80 group-hover:shadow-2xl group-hover:shadow-green-500/50">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-green-500/50">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Instant Impact</h3>
                <p className="text-green-300 leading-relaxed">Results that will reshape how sales teams operate forever</p>
              </div>
            </div>
          </div>

          {/* Email Capture */}
          <div className="max-w-lg mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-semibold text-white">Be among the first to know</h3>
                  <p className="text-gray-400">Join the waitlist for early access to revolutionary sales technology</p>
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for early access"
                    className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 backdrop-blur-xl focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    required
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 transition-opacity pointer-events-none focus-within:opacity-100"></div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Lock className="w-5 h-5 mr-2" />
                        Get Early Access
                      </>
                    )}
                  </div>
                </button>
              </form>
            ) : (
              <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl border border-green-500/30 p-8 backdrop-blur-xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">You're In</h3>
                <p className="text-green-300">You'll be among the first to experience what we're building. Something big is coming.</p>
              </div>
            )}
          </div>

          {/* Mysterious Footer */}
          <div className="pt-16 pb-8">
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
              <span>Building in stealth mode</span>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>Launch: Soon</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
    </div>
  )
}

export default SurFoxMystery