'use client'

import React, { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const SurFoxVideoDemo = () => {
  const [isLoading, setIsLoading] = useState(true)

  // Loading animation
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (index: number) => {
    const element = document.getElementById(`section-${index}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg font-semibold">Loading Your Demo Experience...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Text */}
      <section id="section-0" className="min-h-screen flex items-center justify-center relative px-4 py-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -right-24 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute w-96 h-96 -bottom-48 -left-24 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
  <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
    Welcome to the 
    <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      End of Text Blasting
    </span>
    Your SurFox AI Demo
  </h1>

  <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
    <p className="text-2xl font-bold text-white">
      Welcome! You’re about to see how SurFox replaces text blasters with agentic, psychology-aware conversations that surface real buyers.
    </p>

    <p>
      Whether you’re solo or leading a team, every minute counts—and every lead needs real qualification. 
      This demo isn’t a walkthrough; it’s how you spend less time sorting and more time closing.
    </p>

    <p>
      We know the grind: blasting thousands, generic follow-ups, and sifting through “not interested.” 
      SurFox reads psychology, adapts tone in real time, and only escalates genuine intent.
    </p>

    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      Blasts create noise. Our AI creates buyers. Watch.
    </p>
  </div>
</div>

          
                    <button
            onClick={() => scrollToSection(1)}
            className="mt-12 inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all group"
          >
            Begin Your Journey
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>

        {/* Scroll indicator */}

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* Section 1 - Supademo Video Embed */}
      <section id="section-1" className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="w-full max-w-5xl mx-auto">
          <div 
            style={{ position: 'relative', boxSizing: 'content-box', maxHeight: '80vh', width: '100%', aspectRatio: '2.0317460317460316', padding: '40px 0' }}
          >
<iframe
  src="https://app.supademo.com/embed/cmeui5tem6h8wv9kqd6x6rxev?embed_v=2&utm_source=embed"
  loading="lazy"
  title="Surfox Demo"
  allow="clipboard-write"
  frameBorder="0"
  allowFullScreen
  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
/>

          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="section-2" className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4 py-20 relative overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 -top-48 -right-24 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute w-96 h-96 -bottom-48 -left-24 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Choice Is Clear.
            </span>
            <br />
            <span className="text-white">The Future of Sales Is Now.</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
  <p>
    You’ve just seen how SurFox replaces mass blasting with agentic, psychology-aware conversations that surface real intent.
    No generic templates. No manual sifting.
  </p>

  <p>
    In a competitive market, sticking with a blaster is choosing noise. Your competitors are wasting hours; 
    <span className="italic text-purple-400">*you*</span> could be closing deals. They’re chasing ghosts; 
    <span className="italic text-purple-400">*you*</span> could be building relationships with validated prospects.
  </p>

  <p className="text-2xl font-bold text-white">
    SurFox isn’t a “better blaster.” It’s the blaster’s replacement.
  </p>

  <p>
    It reads personality, adapts tone in real time, learns from outcomes, and escalates only qualified prospects — 24/7.
    Fewer messages, more meetings, clearer signal.
  </p>

  <p className="text-2xl font-bold text-white">
    Incremental tweaks won’t cut it. This is a step-change.
  </p>

  <p>
    Stop equating volume with results. Stop guessing. Start compounding signal with conversations that convert.
  </p>

  <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
    Ready to ditch the blaster and let AI deliver real buyers?
  </p>

  <p className="text-xl font-bold text-white">
    Don’t let another qualified lead hide in the noise. Make the switch now.
  </p>
</div>

          
          <Link
            href="/#pricing"
            className="group inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-pulse hover:animate-none"
          >
            <span className="mr-2">🔥</span>
            CLICK HERE TO START 30 DAY MONEY BACK GUARANTEE
            <span className="ml-2">🔥</span>
          </Link>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              No credit card required
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              30-day money back guarantee
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Setup in 5 minutes
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default SurFoxVideoDemo
