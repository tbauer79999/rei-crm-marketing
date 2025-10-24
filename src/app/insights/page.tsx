"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp, Brain, Zap, Target, BarChart3, LineChart, Activity, Shield, CheckCircle, Lightbulb, Settings, Users, Eye } from 'lucide-react';
import Image from 'next/image';

export default function SurFoxInsights() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="text-sm font-medium text-gray-500 mb-4 tracking-wide">SURFOX INSIGHTS</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              Predict What's Next.<br className="hidden sm:block" />
              <span className="sm:inline"> </span>Optimize What's Now.
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              Go beyond visibility. SurFox Insights forecasts trends, models outcomes, and recommends optimizations — turning your data into strategic advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                Get Predictive Intelligence
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              How Insights Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              From historical patterns to future predictions in four steps
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                number: '01',
                icon: Activity,
                title: 'Data Integration', 
                desc: 'Insights consumes processed metrics from SurFox Pulse, aggregating historical performance and interaction patterns.'
              },
              { 
                number: '02',
                icon: Brain,
                title: 'Pattern Recognition', 
                desc: 'Advanced ML models identify trends, anomalies, and predictive signals across your entire dataset.'
              },
              { 
                number: '03',
                icon: TrendingUp,
                title: 'Predictive Modeling', 
                desc: 'Forecast future outcomes with confidence intervals. See what is likely to happen before it does.'
              },
              { 
                number: '04',
                icon: Lightbulb,
                title: 'Optimization Recommendations', 
                desc: 'Actionable suggestions to improve performance based on predictive scenarios and what-if modeling.'
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                  className="relative mx-auto mb-6"
                  style={{ width: 'fit-content' }}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-orange/10 flex items-center justify-center mx-auto">
                    <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-orange" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.number}
                  </div>
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Predictive Modules Section */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Predictive Intelligence Modules
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Every dimension of future performance, modeled and actionable
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: TrendingUp,
                title: 'Revenue Forecasting', 
                desc: 'Predict future revenue with confidence intervals based on historical conversion patterns and current pipeline health.',
                features: ['30/60/90 day projections', 'Confidence scoring', 'Scenario planning']
              },
              { 
                icon: Target,
                title: 'Conversion Optimization', 
                desc: 'Model which changes will have the biggest impact on conversion rates. Test before you implement.',
                features: ['A/B test predictions', 'Impact modeling', 'Resource allocation']
              },
              { 
                icon: Users,
                title: 'Churn Prediction', 
                desc: 'Identify customers at risk before they leave. Understand churn drivers and intervention effectiveness.',
                features: ['Risk scoring', 'Early warning alerts', 'Retention strategies']
              },
              { 
                icon: BarChart3,
                title: 'Performance Optimization', 
                desc: 'Discover which tactics, timing, and approaches will yield the best results based on historical success patterns.',
                features: ['Best practice identification', 'Team benchmarking', 'Workflow optimization']
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 sm:p-10 rounded-2xl border-2 border-gray-200 bg-white hover:border-orange/30 hover:shadow-xl hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-orange" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.desc}</p>
                
                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenario Simulator Preview */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
              <span className="text-sm font-semibold text-orange">SCENARIO SIMULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Model Before You Move
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Test strategies in simulation before committing resources. See predicted outcomes for different approaches.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl border-2 border-gray-200 bg-white shadow-2xl overflow-hidden">
              {/* Simulator placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <LineChart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-400 font-medium">Scenario Simulator Preview</p>
                  <p className="text-sm text-gray-300 mt-2">insights-simulator.png</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Who Uses Insights
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Strategic intelligence for every revenue function
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: Target,
                title: 'Sales Leaders', 
                desc: 'Forecast pipeline accurately, identify top performers\' patterns, and predict which deals will close.'
              },
              { 
                icon: TrendingUp,
                title: 'Marketing Teams', 
                desc: 'Model campaign ROI before launch, optimize spend allocation, and predict customer acquisition costs.'
              },
              { 
                icon: Users,
                title: 'Customer Success', 
                desc: 'Predict churn risk, identify expansion opportunities, and model the impact of retention strategies.'
              }
            ].map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-6 sm:p-8"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-orange/10 flex items-center justify-center">
                  <useCase.icon className="w-7 h-7 text-orange" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Why Teams Choose Insights
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Foresight, recommendations, and confidence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: Brain,
                title: 'Strategic Foresight', 
                desc: 'Stop reacting to the present. Start preparing for the future with predictive intelligence that shows you what is coming.'
              },
              { 
                icon: Lightbulb,
                title: 'Actionable Recommendations', 
                desc: 'Not just predictions — concrete suggestions on what to do next, backed by data and modeled outcomes.'
              },
              { 
                icon: Zap,
                title: 'Faster Decisions', 
                desc: 'Reduce analysis paralysis. Insights gives you the confidence to move quickly on high-impact opportunities.'
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-orange/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration with Pulse */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-orange/5 to-orange/10 rounded-2xl border-2 border-orange/20 p-8 sm:p-10 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 rounded-xl bg-orange flex items-center justify-center flex-shrink-0">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-navy mb-3">
                    Insights + Pulse = Complete Intelligence
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    SurFox Pulse shows you what's happening now. SurFox Insights shows you what happens next. Together, they create a complete intelligence layer — awareness plus foresight.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-navy mb-1">Data Lineage</p>
                    <p className="text-sm text-gray-600">Every prediction traces back to Pulse event data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-navy mb-1">Unified Platform</p>
                    <p className="text-sm text-gray-600">One login, seamless workflow from visibility to prediction</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-green-100 border border-green-300 mb-6">
              <span className="text-sm font-semibold text-green-700">SECURE & COMPLIANT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Predictive Intelligence, Privately
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Your models, your data, your predictions — completely isolated
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: Shield,
                title: 'Model Isolation', 
                desc: 'Predictive models train exclusively on your data. No cross-customer learning, no shared intelligence.'
              },
              { 
                icon: Eye,
                title: 'Explainable AI', 
                desc: 'Every prediction comes with explanation. Understand the factors driving forecasts and recommendations.'
              },
              { 
                icon: CheckCircle,
                title: 'Data Governance', 
                desc: 'Full audit trails, retention policies, and deletion capabilities. You control your predictive data.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-green-100 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="space-y-6 px-4">
            {[
              {
                q: 'How accurate are the predictions?',
                a: 'Insights provides confidence intervals with every prediction. Accuracy improves over time as the model learns from your data. Most forecasts achieve 85%+ accuracy within 30 days of historical data.'
              },
              {
                q: 'Do I need SurFox Pulse to use Insights?',
                a: 'Insights works best with Pulse data, but can also consume data from other sources via API. The tightest integration and most accurate predictions come from using both products together.'
              },
              {
                q: 'Can I customize the predictive models?',
                a: 'Yes. Insights comes with pre-built models for common use cases, but you can configure model parameters, feature weights, and even train custom models on your specific business logic.'
              },
              {
                q: 'How far into the future can Insights predict?',
                a: 'Standard forecasts cover 30, 60, and 90 days. For longer-term strategic planning, we can model up to 12 months with decreasing confidence intervals as timeframes extend.'
              },
              {
                q: 'What happens if predictions are wrong?',
                a: 'Models continuously learn from prediction errors. When actual outcomes differ from forecasts, the system adjusts its weights and improves future predictions. You can also provide feedback to accelerate learning.'
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 hover:border-orange/30 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-navy mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4 leading-tight">
              Stop Guessing.<br />Start Knowing.
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              SurFox Insights gives you the foresight to make confident decisions. Predict outcomes, optimize strategy, and stay ahead of the curve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition inline-flex items-center justify-center gap-2"
              >
                Activate Insights
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
