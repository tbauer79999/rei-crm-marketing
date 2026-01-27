"use client"

import React, { useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Shield, Lock, Eye, FileCheck, Server, Key, AlertCircle, CheckCircle, Users, Database, Activity, Globe } from 'lucide-react';

export default function SecurityCompliance() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <div ref={containerRef} className="bg-white text-gray-900">
      <style>{`
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
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        .animate-shield {
          animation: subtle-pulse 4s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange/5 rounded-full blur-3xl animate-shield" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange/5 rounded-full blur-3xl animate-shield" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              Security Built into<br className="hidden sm:block" />
              <span className="sm:inline"> </span>Every Layer
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              Enterprise-grade protection designed for the most sensitive human interaction data. Built for compliance, architected for trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Framework */}
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
              Security Framework
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Multi-layered protection across infrastructure, application, and data
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: Database,
                title: 'Data Protection', 
                desc: 'End-to-end encryption for data at rest and in transit. AES-256 encryption standards with secure key management and rotation policies.',
                features: ['AES-256 encryption', 'TLS 1.3 in transit', 'Key rotation']
              },
              { 
                icon: Lock,
                title: 'Access Control', 
                desc: 'Role-based access control with multi-factor authentication. Granular permissions ensure users access only what they need.',
                features: ['Multi-factor auth', 'RBAC policies', 'Session management']
              },
              { 
                icon: Eye,
                title: 'Monitoring & Logging', 
                desc: 'Comprehensive audit trails and real-time threat detection. All system activities logged and monitored for security events.',
                features: ['Audit logging', 'Threat detection', 'Activity monitoring']
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-orange/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                
                <div className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Compliance Standards
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Architected to meet enterprise security and privacy requirements
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                title: 'SOC 2 Type II',
                status: 'Roadmap',
                desc: 'SurFox AI is architected with SOC 2 Type II compliance in mind. Our infrastructure, policies, and controls are designed to meet Trust Services Criteria for security, availability, and confidentiality.',
                icon: Shield,
                gradient: 'from-orange/10 to-orange/5'
              },
              { 
                title: 'ISO 27001',
                status: 'Roadmap',
                desc: 'Building toward ISO 27001 certification with comprehensive information security management systems. Our architecture follows international standards for data protection and risk management.',
                icon: FileCheck,
                gradient: 'from-cyan-500/10 to-cyan-500/5'
              },
              { 
                title: 'GDPR Ready',
                status: 'Active',
                desc: 'Data protection by design and by default. User data rights, consent management, and data portability built into the platform foundation.',
                icon: Globe,
                gradient: 'from-purple-500/10 to-purple-500/5'
              },
              { 
                title: 'HIPAA Capable',
                status: 'Roadmap',
                desc: 'Infrastructure designed to support HIPAA compliance for healthcare organizations. BAA agreements available for qualifying deployments.',
                icon: AlertCircle,
                gradient: 'from-emerald-500/10 to-emerald-500/5'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredItem(i)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`
                  p-8 sm:p-10 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                  ${hoveredItem === i 
                    ? 'border-orange bg-gradient-to-br ' + item.gradient + ' shadow-lg scale-[1.02]' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                  }
                `}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`
                    w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300
                    ${hoveredItem === i ? 'bg-orange' : 'bg-orange/10'}
                  `}>
                    <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${hoveredItem === i ? 'text-white' : 'text-orange'}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-semibold text-navy">{item.title}</h3>
                      <span className={`
                        text-xs font-semibold px-2 py-1 rounded
                        ${item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange/10 text-orange'}
                      `}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Security */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-navy/5 border border-navy/20 mb-6">
              <span className="text-sm font-semibold text-navy">INFRASTRUCTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Built on Trusted Infrastructure
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Enterprise-grade cloud infrastructure with proven security credentials
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: Server,
                title: 'Cloud Security', 
                desc: 'Hosted on AWS and Google Cloud Platform - both SOC 2 and ISO 27001 certified. Inherit enterprise security controls from day one.',
                details: ['Multi-region redundancy', 'DDoS protection', 'Network isolation']
              },
              { 
                icon: Key,
                title: 'Secret Management', 
                desc: 'Centralized secret management with automatic rotation. API keys, tokens, and credentials stored in encrypted vaults with audit trails.',
                details: ['Encrypted storage', 'Automatic rotation', 'Access logging']
              },
              { 
                icon: Activity,
                title: 'Uptime & Reliability', 
                desc: 'Distributed architecture with automated failover. Real-time monitoring and incident response ensure continuous availability.',
                details: ['99.9% uptime SLA', 'Automated failover', '24/7 monitoring']
              },
              { 
                icon: Users,
                title: 'Data Isolation', 
                desc: 'Complete multi-tenant isolation ensures customer data never crosses boundaries. Logical and physical separation at every layer.',
                details: ['Tenant isolation', 'Encrypted boundaries', 'Access controls']
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-orange/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                
                <div className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Security Practices
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Continuous improvement through testing, training, and transparency
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            {[
              { 
                title: 'Tenant Data Isolation',
                desc: 'Complete logical and physical separation ensures your data never crosses tenant boundaries. SurFox Infinity learns exclusively from your data within your isolated environment - no cross-customer intelligence sharing.'
              },
              { 
                title: 'Vulnerability Management',
                desc: 'Regular security assessments and penetration testing. Automated vulnerability scanning with rapid remediation protocols.'
              },
              { 
                title: 'Incident Response',
                desc: 'Documented incident response plan with defined escalation procedures. 24/7 security monitoring and rapid response team.'
              },
              { 
                title: 'Employee Security Training',
                desc: 'Mandatory security awareness training for all team members. Background checks and ongoing education on security best practices.'
              },
              { 
                title: 'Secure Development',
                desc: 'Security built into the development lifecycle. Code reviews, automated security testing, and secure coding standards.'
              },
              { 
                title: 'Third-Party Risk Management',
                desc: 'Vendor security assessments and ongoing monitoring. All third-party integrations evaluated for security posture.'
              },
              { 
                title: 'Data Retention & Deletion',
                desc: 'Clear data retention policies with secure deletion procedures. Customer data can be permanently deleted upon request.'
              }
            ].map((practice, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-orange/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-2">{practice.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{practice.desc}</p>
                  </div>
                </div>
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
              Trust Through Transparency
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed px-4 max-w-3xl mx-auto">
              Security and compliance are foundational to the SurFox AI Platform. We are committed to maintaining the highest standards of data protection as we grow.
            </p>

            <p className="text-base sm:text-lg font-semibold text-orange mb-10 sm:mb-12 px-4">
              Questions about our security practices? Contact our security team.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}