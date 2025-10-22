"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Sparkles, Zap, ArrowRight, Play } from 'lucide-react';
import * as THREE from 'three';

// Particle Field Component for Three.js
function ParticleField({ scrollProgress }: { scrollProgress: number }) {

  const pointsRef = useRef();
  const particleCount = 2000;
  
  const positions = React.useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.075;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#818cf8"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Glowing Orbs Component
function GlowingOrbs() {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        const radius = 3;
        return (
          <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshBasicMaterial color={i % 2 === 0 ? "#fb923c" : "#818cf8"} />
          </mesh>
        );
      })}
    </group>
  );
}

// Main Component
export default function SurFoxUniverse() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest < 0.2) setCurrentSection(0);
      else if (latest < 0.4) setCurrentSection(1);
      else if (latest < 0.6) setCurrentSection(2);
      else if (latest < 0.8) setCurrentSection(3);
      else setCurrentSection(4);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.8]);
  
  const problemOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]);
  const systemOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.55], [0, 1, 0]);
  const visionOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
  const futureOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  return (
    <div ref={containerRef} className="relative bg-black text-white overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        
        .gradient-text-warm {
          background: linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-text-cool {
          background: linear-gradient(135deg, #818cf8 0%, #6366f1 50%, #4f46e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .ambient-glow {
          filter: blur(100px);
          opacity: 0.3;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .animate-float {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tight"
          >
            <span className="gradient-text-warm">SurFox</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#system" className="hover:text-indigo-400 transition-colors">System</a>
            <a href="#products" className="hover:text-orange-400 transition-colors">Products</a>
            <a href="#technology" className="hover:text-indigo-400 transition-colors">Technology</a>
            <a href="#company" className="hover:text-orange-400 transition-colors">Company</a>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-indigo-500 hover:from-orange-600 hover:to-indigo-600 transition-all duration-300 font-medium text-sm"
          >
            Enter the System
          </motion.button>
        </div>
      </nav>

      {/* Three.js Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#fb923c" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#818cf8" />
          <ParticleField scrollProgress={scrollYProgress} />
          {currentSection === 0 && <GlowingOrbs />}
        </Canvas>
      </div>

      {/* Ambient Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500 ambient-glow animate-pulse-glow"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500 ambient-glow animate-pulse-glow"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Content Sections */}
      <div className="relative z-10">
        
        {/* Section 1: Arrival / Hero */}
        <motion.section 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="min-h-screen flex items-center justify-center px-6"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Introducing SurFox Infinity™
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-none"
            >
              We're building the
              <br />
              <span className="gradient-text-warm">intelligence layer</span>
              <br />
              for the world's conversations
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              SurFox captures, interprets, and optimizes communication across every channel — powered by SurFox Infinity™
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(251, 146, 60, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-full bg-gradient-to-r from-orange-500 to-coral-400 hover:from-orange-600 hover:to-coral-500 transition-all duration-300 font-medium text-lg flex items-center gap-3 group"
              >
                Explore the System
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-full border border-indigo-500/50 bg-indigo-500/10 hover:bg-indigo-500/20 transition-all duration-300 font-medium text-lg flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                See SurFox in Action
              </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll to explore</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-0.5 h-12 bg-gradient-to-b from-orange-500 to-transparent rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 2: The Problem */}
        <motion.section 
          style={{ opacity: problemOpacity }}
          className="min-h-screen flex items-center justify-center px-6"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div className="mb-16">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                Communication is the world's
                <br />
                <span className="text-red-500">largest untapped dataset</span>
              </h2>
              <p className="text-2xl text-gray-400 font-light">
                Millions of messages. Thousands of calls. Endless noise.
              </p>
            </motion.div>

            {/* Swirling Messages Visualization */}
            <div className="relative h-96 mb-16">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Chaotic state */}
                <div className="grid grid-cols-4 gap-3 opacity-40">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 3 + (i % 3),
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                      className="w-16 h-16 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center"
                    >
                      <div className="w-2 h-2 rounded-full bg-gray-600" />
                    </motion.div>
                  ))}
                </div>

                {/* Center convergence point */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                  className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-indigo-600/30 via-violet-600/20 to-purple-600/30 border border-indigo-500/50 backdrop-blur-xl flex items-center justify-center"
                >
                  <Brain className="w-16 h-16 text-indigo-400" />
                </motion.div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 gradient-text-cool">
                SurFox Infinity™ brings order
              </h3>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Every message becomes insight. Every conversation becomes intelligence.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 3: The System */}
        <motion.section 
          style={{ opacity: systemOpacity }}
          className="min-h-screen flex items-center justify-center px-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
                The <span className="gradient-text-cool">Cognition Engine</span>
              </h2>
              <p className="text-2xl text-gray-400 font-light max-w-3xl mx-auto">
                One platform. Multiple products. Infinite intelligence.
              </p>
            </div>

            {/* Vertical System Architecture */}
            <div className="space-y-12">
              {/* Products Layer */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-400 text-sm font-medium z-10">
                  Products
                </div>
                <div className="glass-card rounded-3xl p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { name: 'SurFox Engage', desc: 'Conversations that adapt', active: true, color: 'orange' },
                      { name: 'SurFox Recruit', desc: 'Hiring intelligence', active: false, color: 'violet' },
                      { name: 'SurFox Insight', desc: 'Communication analytics', active: false, color: 'indigo' }
                    ].map((product, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: product.active ? 1.05 : 1 }}
                        className={`p-6 rounded-2xl ${
                          product.active 
                            ? 'bg-gradient-to-br from-orange-500/20 to-coral-400/10 border-2 border-orange-500/50' 
                            : 'bg-gray-900/50 border border-gray-800 opacity-50'
                        } transition-all duration-300`}
                      >
                        <div className={`w-12 h-12 rounded-xl ${
                          product.active ? 'bg-orange-500/20' : 'bg-gray-800'
                        } flex items-center justify-center mb-4`}>
                          <Zap className={`w-6 h-6 ${product.active ? 'text-orange-400' : 'text-gray-600'}`} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                        <p className="text-gray-400 text-sm">{product.desc}</p>
                        {!product.active && (
                          <div className="mt-3 text-xs text-gray-500 font-medium">Coming Soon</div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Connection Flow */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-24 bg-gradient-to-b from-orange-500 via-purple-500 to-indigo-500 rounded-full"
                />
              </div>

              {/* Platform Layer */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/50 text-indigo-400 text-sm font-medium z-10">
                  Platform
                </div>
                <div className="glass-card rounded-3xl p-12 bg-gradient-to-br from-indigo-950/30 to-violet-950/20 border-2 border-indigo-500/30">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20 mx-auto mb-6"
                    >
                      <Brain className="w-full h-full text-indigo-400" />
                    </motion.div>
                    <h3 className="text-4xl font-bold mb-4">
                      <span className="gradient-text-cool">SurFox Infinity™</span>
                    </h3>
                    <p className="text-xl text-gray-400 mb-6 font-light">
                      The cognition engine behind every conversation
                    </p>
                    <div className="inline-block px-6 py-3 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-medium">
                      Built once. Learned everywhere.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: The Vision */}
        <motion.section 
          style={{ opacity: visionOpacity }}
          className="min-h-screen flex items-center justify-center px-6"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mb-12"
            >
              <div className="w-40 h-40 mx-auto mb-12 rounded-full bg-gradient-to-br from-orange-500/20 via-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center animate-float">
                <Brain className="w-20 h-20 text-indigo-400" />
              </div>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight"
            >
              "Communication is the world's
              <br />
              <span className="gradient-text-warm">largest untapped dataset</span>"
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 text-left max-w-3xl mx-auto mb-16"
            >
              <p className="text-2xl text-gray-400 leading-relaxed font-light">
                Every interaction contains intelligence. Most organizations let it slip away.
              </p>
              <p className="text-2xl text-gray-400 leading-relaxed font-light">
                SurFox captures it. Interprets it. Transforms it into action.
              </p>
              <p className="text-2xl text-gray-400 leading-relaxed font-light">
                This isn't automation. It's <span className="text-white font-medium">augmentation</span>.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 5: The Future */}
        <motion.section 
          style={{ opacity: futureOpacity }}
          className="min-h-screen flex items-center justify-center px-6"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight">
                Join the
                <br />
                <span className="gradient-text-cool">Intelligence Layer</span>
              </h2>
              
              <p className="text-2xl text-gray-400 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
                The future of communication isn't louder. It's smarter.
              </p>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 60px rgba(251, 146, 60, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-6 rounded-full bg-gradient-to-r from-orange-500 via-coral-400 to-indigo-500 hover:shadow-2xl transition-all duration-500 font-medium text-xl inline-flex items-center gap-4 group"
              >
                Enter the System
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Soft fade out */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="mt-32 text-gray-600 text-sm"
            >
              SurFox AI, Inc. — 2025
            </motion.div>
          </div>
        </motion.section>

        {/* Spacer for scroll */}
        <div className="h-screen" />

      </div>
    </div>
  );
}