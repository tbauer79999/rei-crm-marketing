'use client'

import React, { useState, useEffect } from 'react'
import { Brain, Shield, Eye, Zap, Lock, X } from 'lucide-react'

const SurFoxMystery = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [typingText, setTypingText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const mysteryPhrases = [
    "reading minds through conversations",
    "understanding human psychology at scale", 
    "seeing what others miss entirely",
    "turning cold prospects into believers",
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

  const handleCloseTab = () => {
    // Try multiple methods to close the tab
    if (window.opener) {
      window.close()
    } else {
      // If that doesn't work, try going back or redirecting
      if (window.history.length > 1) {
        window.history.back()
      } else {
        window.location.href = 'about:blank'
      }
    }
  }

  const handleEmailSubmit = async () => {
    if (!email) return
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_38foyus',
          template_id: 'template_26breuf',
          user_id: 'pX0lVTbWCpKUVhPwR',
          template_params: {
            user_email: email,
            reply_to: email
          }
        })
      })
      
      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('Error sending email. Please try again.')
      }
    } catch {
      alert('Network error. Please try again.')
    }
    
    setIsSubmitting(false)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black text-white overflow-hidden">
      {!submitted ? (
        <>
          {/* Simple Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
          
          {/* Static Neural Network Lines Only */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" style={{ opacity: 0.15 }}>
              <defs>
            
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <line x1="15%" y1="25%" x2="35%" y2="45%" stroke="url(#line-gradient)" strokeWidth="1" />
              <line x1="65%" y1="20%" x2="85%" y2="40%" stroke="url(#line-gradient)" strokeWidth="1" />
              <line x1="25%" y1="70%" x2="45%" y2="85%" stroke="url(#line-gradient)" strokeWidth="1" />
              <line x1="60%" y1="65%" x2="80%" y2="80%" stroke="url(#line-gradient)" strokeWidth="1" />
              <line x1="10%" y1="50%" x2="30%" y2="35%" stroke="url(#line-gradient)" strokeWidth="1" />
              <line x1="70%" y1="55%" x2="90%" y2="25%" stroke="url(#line-gradient)" strokeWidth="1" />
            </svg>
          </div>

          {/* Main Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 py-8">
            <div className="max-w-4xl mx-auto text-center space-y-8 w-full">
              
              {/* Logo/Brand */}
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <span className="text-xl md:text-2xl font-bold tracking-wider">SurFox</span>
                </div>
                
                {/* Patent Badge */}
                <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-400/30 backdrop-blur-sm">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2 text-yellow-400" />
                  <span className="text-yellow-200 font-medium text-xs md:text-sm">Patent Pending Technology</span>
                </div>
              </div>

              {/* Mystery Headline */}
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                    We're building something
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    revolutionary
                  </span>
                </h1>
                
                {/* Typing Animation */}
                <div className="py-4">
                  <p className="text-base md:text-lg text-purple-300 font-light text-center leading-relaxed min-h-[60px] flex items-center justify-center px-8">
                    Imagine <span className="text-white font-medium ml-2">{typingText}</span>
                    <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity ml-1`}>|</span>
                  </p>
                </div>
              </div>

              {/* Mysterious Hints */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                <div className="group">
                  <div className="bg-gradient-to-br from-purple-900/40 to-black/40 rounded-2xl border border-purple-500/30 p-4 backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:border-purple-400/50">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform duration-300">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">Psychology AI</h3>
                    <p className="text-purple-300 text-xs leading-relaxed">Understanding human behavior at a level never seen before</p>
                  </div>
                </div>
                
                <div className="group">
                  <div className="bg-gradient-to-br from-blue-900/40 to-black/40 rounded-2xl border border-blue-500/30 p-4 backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:border-blue-400/50">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform duration-300">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">Hidden Insights</h3>
                    <p className="text-blue-300 text-xs leading-relaxed">Seeing patterns in communication that others miss entirely</p>
                  </div>
                </div>
                
                <div className="group">
                  <div className="bg-gradient-to-br from-green-900/40 to-black/40 rounded-2xl border border-green-500/30 p-4 backdrop-blur-xl transition-all duration-500 group-hover:scale-105 group-hover:border-green-400/50">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform duration-300">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">Instant Impact</h3>
                    <p className="text-green-300 text-xs leading-relaxed">Results that will reshape how sales teams operate forever</p>
                  </div>
                </div>
              </div>

              {/* Email Capture */}
              <div className="max-w-md md:max-w-lg mx-auto px-4 pt-4">
                <div className="text-center space-y-3 mb-4">
                  <h3 className="text-lg font-semibold text-white">Be among the first to know</h3>
                  <p className="text-gray-400 text-sm">Join the waitlist for early access to revolutionary sales technology</p>
                </div>
                
                <div className="relative mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for early access"
                    className="w-full px-6 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 backdrop-blur-xl focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    required
                  />
                </div>
                
                <button
                  onClick={handleEmailSubmit}
                  disabled={isSubmitting || !email}
                  className="w-full group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center">
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 mr-2" />
                        Get Early Access
                      </>
                    )}
                  </div>
                </button>
              </div>

              {/* Mysterious Footer */}
              <div className="pt-6 pb-4">
                <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
                  <span>Building in stealth mode</span>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>Launch: Soon</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Animated Success State */
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 animate-fade-in">
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 animate-scale-in">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 animate-slide-up">You're in</h3>
            <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto leading-relaxed animate-slide-up-delay mb-8">You'll be among the first to experience what we're building.</p>
            
            {/* Close Tab Button */}
            <button
              onClick={handleCloseTab}
              className="inline-flex items-center px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-xl font-medium text-gray-300 hover:text-white transition-all duration-300 animate-slide-up-delay"
            >
              <X className="w-4 h-4 mr-2" />
              Close Tab
            </button>
          </div>
        </div>
      )}
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.5); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out 0.5s both;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 0.6s ease-out 0.8s both;
        }
      `}</style>
    </div>
  )
}
console.log("hello")
export default SurFoxMystery