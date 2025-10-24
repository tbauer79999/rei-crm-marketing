"use client"

import React, { useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowRight, MessageSquare, Mail, Phone, Smartphone, Database, Zap, Link2, Code, Webhook, Globe, FileText, BarChart, Users, Calendar, ShoppingCart, CreditCard } from 'lucide-react';

export default function Integrations() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [hoveredIntegration, setHoveredIntegration] = useState<number | null>(null);

  return (
    <div ref={containerRef} className="bg-white text-gray-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .text-navy {
          color: #1e293b;
        }
        
        .bg-navy {
          background-color: #1e293b;
        }
        
        .border-navy {
          border-color: #1e293b;
        }
        
        .text-orange {
          color: #ea580c;
        }
        
        .bg-orange {
          background-color: #ea580c;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }

        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        .animate-connect {
          animation: subtle-pulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange/5 rounded-full blur-3xl animate-connect" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange/5 rounded-full blur-3xl animate-connect" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              Connect Every<br className="hidden sm:block" />
              <span className="sm:inline"> </span>Human Signal
            </h1>
            
            <p className="text-base sm:text-lg font-semibold text-orange mb-6 sm:mb-8">
              Powered by SurFox Infinity
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              SurFox ingests data from any source - communication channels, business systems, and transaction platforms - creating unified intelligence across every interaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Integration Categories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Native connectors and flexible APIs for seamless data flow
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: MessageSquare,
                title: 'Communication Channels', 
                desc: 'SMS, email, chat platforms, and messaging apps',
                count: '10+',
                color: 'orange'
              },
              { 
                icon: Database,
                title: 'CRM Systems', 
                desc: 'Customer relationship management and sales platforms',
                count: '8+',
                color: 'cyan-500'
              },
              { 
                icon: BarChart,
                title: 'Analytics Platforms', 
                desc: 'Business intelligence and data visualization tools',
                count: '6+',
                color: 'purple-500'
              },
              { 
                icon: ShoppingCart,
                title: 'E-Commerce', 
                desc: 'Shopping platforms and transaction systems',
                count: '5+',
                color: 'emerald-500'
              },
              { 
                icon: Calendar,
                title: 'Productivity Tools', 
                desc: 'Calendars, task management, and collaboration',
                count: '7+',
                color: 'blue-500'
              },
              { 
                icon: Code,
                title: 'Custom Integrations', 
                desc: 'REST APIs, webhooks, and developer tools',
                count: 'Unlimited',
                color: 'orange'
              }
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredCategory(i)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`
                  p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                  ${hoveredCategory === i 
                    ? 'border-orange bg-white shadow-lg scale-[1.02]' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                  }
                `}
              >
                <div className={`
                  w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300
                  ${hoveredCategory === i ? 'bg-orange' : `bg-${category.color}/10`}
                `}>
                  <category.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${hoveredCategory === i ? 'text-white' : `text-${category.color}`}`} />
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-navy">{category.title}</h3>
                  <span className="text-xs font-semibold text-orange bg-orange/10 px-2 py-1 rounded">
                    {category.count}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{category.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Channels */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Communication Channels
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Capture every conversation across all channels
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4">
            {[
              { name: 'Twilio SMS', icon: Smartphone, desc: 'Native SMS integration' },
              { name: 'Email (SMTP)', icon: Mail, desc: 'Standard email protocols' },
              { name: 'WhatsApp', icon: MessageSquare, desc: 'WhatsApp Business API' },
              { name: 'Voice Calls', icon: Phone, desc: 'Call recording & transcription' },
              { name: 'Web Chat', icon: MessageSquare, desc: 'Live chat widgets' },
              { name: 'Slack', icon: MessageSquare, desc: 'Team messaging' },
              { name: 'Microsoft Teams', icon: MessageSquare, desc: 'Enterprise chat' },
              { name: 'Webhooks', icon: Webhook, desc: 'Custom channels' }
            ].map((channel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-orange/30 hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-orange/10 flex items-center justify-center">
                  <channel.icon className="w-6 h-6 text-orange" />
                </div>
                <h3 className="text-sm font-semibold text-navy mb-1">{channel.name}</h3>
                <p className="text-xs text-gray-500">{channel.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM & Business Systems */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              CRM & Business Systems
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Sync customer data and enrich interactions with business context
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                name: 'Salesforce',
                icon: Database,
                desc: 'Bi-directional sync with leads, contacts, and opportunities. Automatically log interactions and update records in real-time.',
                features: ['Contact sync', 'Activity logging', 'Custom fields']
              },
              { 
                name: 'HubSpot',
                icon: Database,
                desc: 'Connect to HubSpot CRM for unified contact management. Enrich conversations with deal stage and contact properties.',
                features: ['Deal tracking', 'Contact enrichment', 'Workflow triggers']
              },
              { 
                name: 'Pipedrive',
                icon: Database,
                desc: 'Integrate sales pipeline data to prioritize high-value interactions. Auto-create deals from qualified conversations.',
                features: ['Pipeline sync', 'Auto-create deals', 'Stage tracking']
              },
              { 
                name: 'Custom CRM',
                icon: Link2,
                desc: 'REST API integration for any CRM system. Flexible mapping and bidirectional data flow with custom field support.',
                features: ['REST API', 'Custom mapping', 'Real-time sync']
              }
            ].map((system, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredIntegration(i)}
                onMouseLeave={() => setHoveredIntegration(null)}
                className={`
                  p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300
                  ${hoveredIntegration === i 
                    ? 'border-orange bg-white shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                  }
                `}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300
                    ${hoveredIntegration === i ? 'bg-orange' : 'bg-cyan-500/10'}
                  `}>
                    <system.icon className={`w-6 h-6 ${hoveredIntegration === i ? 'text-white' : 'text-cyan-500'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">{system.name}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">{system.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {system.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="text-xs font-medium text-navy bg-gray-100 px-3 py-1.5 rounded-lg"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Commerce & Transaction Data */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              E-Commerce & Transactions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Understand customer behavior through purchase and transaction signals
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4">
            {[
              { name: 'Shopify', icon: ShoppingCart, type: 'E-Commerce' },
              { name: 'WooCommerce', icon: ShoppingCart, type: 'E-Commerce' },
              { name: 'Stripe', icon: CreditCard, type: 'Payments' },
              { name: 'Square', icon: CreditCard, type: 'Payments' },
              { name: 'PayPal', icon: CreditCard, type: 'Payments' },
              { name: 'Custom Store', icon: Link2, type: 'API' }
            ].map((platform, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-orange/30 hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <platform.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-sm font-semibold text-navy mb-1">{platform.name}</h3>
                <span className="text-xs text-gray-500">{platform.type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer APIs */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-navy/5 border border-navy/20 mb-6">
              <span className="text-sm font-semibold text-navy">FOR DEVELOPERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Built for Extensibility
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive APIs and webhooks for custom integrations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: Code,
                title: 'REST API', 
                desc: 'Complete programmatic access to SurFox functionality. Create, read, update, and manage all platform resources.',
                link: 'View API Docs'
              },
              { 
                icon: Webhook,
                title: 'Webhooks', 
                desc: 'Real-time event notifications for interactions, score changes, and system events. Push data to any endpoint.',
                link: 'Configure Webhooks'
              },
              { 
                icon: FileText,
                title: 'SDKs & Libraries', 
                desc: 'Official client libraries for Python, Node.js, and other popular languages. Get started in minutes.',
                link: 'Browse SDKs'
              }
            ].map((api, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-orange/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                  <api.icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-3">{api.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{api.desc}</p>
                
                <a href="#" className="text-sm font-semibold text-orange hover:text-orange-600 transition inline-flex items-center gap-2">
                  {api.link}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Architecture */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              How Integrations Work
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Flexible architecture supports any data source
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 relative px-4">
            {/* Connecting arrows - hide on mobile */}
            <div className="hidden md:block absolute top-24 left-1/3 right-1/3 flex items-center justify-between px-16">
              <ArrowRight className="w-8 h-8 text-orange/30" />
              <ArrowRight className="w-8 h-8 text-orange/30" />
            </div>

            {[
              { 
                step: 1,
                icon: Link2,
                title: 'Connect Source', 
                desc: 'Authenticate with your platform or configure API credentials. SurFox supports OAuth, API keys, and custom auth methods.'
              },
              { 
                step: 2,
                icon: Zap,
                title: 'Data Flow', 
                desc: 'Real-time or scheduled data sync based on your needs. SurFox normalizes and enriches incoming signals automatically.'
              },
              { 
                step: 3,
                icon: Globe,
                title: 'Unified Intelligence', 
                desc: 'All signals feed into SurFox Infinity - where advanced predictive analytics and machine learning models create intelligence from your unified interaction data within your isolated tenant environment.'
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="text-center relative z-10"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 + 0.2 }}
                  className="relative mx-auto mb-6"
                  style={{ width: 'fit-content' }}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-orange/10 flex items-center justify-center mx-auto">
                    <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-orange" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.step}
                  </div>
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4 leading-tight">
              Ready to Connect Your Systems?
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              SurFox integrates with the tools you already use. If you don't see your platform listed, our flexible API architecture can connect to virtually any system. All data remains isolated within your tenant environment.
            </p>

            <p className="text-base sm:text-lg font-semibold text-orange mb-10 sm:mb-12 px-4">
              Every SurFox integration runs on one foundation: SurFox Infinity.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
            >
              View API Documentation
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
