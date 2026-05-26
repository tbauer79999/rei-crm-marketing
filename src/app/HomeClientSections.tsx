'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'How is SurFox AI different from text blasters like SmarterContact or Launch Control?',
    answer:
      'Text blasters send identical messages to thousands of contacts and rely on you to manually handle the replies. SurFox AI has real, qualifying conversations with each contact. It asks follow-up questions, handles objections, and flags only the contacts ready to talk. You get fewer calls, but every one is worth taking.',
  },
  {
    question: 'How does the 50-point lead scoring system work?',
    answer:
      "The AI analyzes each conversation across multiple dimensions - response quality, engagement level, buying signals, timing, and your qualification criteria. As conversations progress, the lead's score rises until they hit 'hot' status (typically 40+ points), triggering a handoff to your sales team.",
  },
  {
    question: "What happens when a lead becomes 'hot'?",
    answer:
      "Your sales team receives an instant notification with the lead's full conversation history, contact details, and score breakdown. The handoff is seamless - your closer has everything they need to pick up the conversation with full context and close the deal.",
  },
  {
    question: "Can I customize the AI's tone and scoring threshold?",
    answer:
      "Yes. You can adjust the AI's persona (professional, casual, consultative) to match your brand, and set the score threshold for what counts as a hot lead. The AI's logic continuously improves based on conversation outcomes.",
  },
  {
    question: 'How does the knowledge base work?',
    answer:
      'Upload PDFs, pricing sheets, case studies, or FAQs. The AI automatically indexes them and references the content during conversations to answer prospect questions accurately. Update your docs and the AI picks it up immediately - no retraining.',
  },
  {
    question: 'Is SurFox AI TCPA compliant?',
    answer:
      'SurFox AI is built with TCPA compliance in mind - opt-in verification, clear sender identification, automated opt-out handling, and full conversation logging. We recommend consulting your legal team to confirm your specific use case.',
  },
  {
    question: 'How fast can I get started?',
    answer:
      'Faster than you think. When you sign up, you start a 14-day free trial and are immediately placed on our pre-approved Twilio A2P campaign - so you can start texting leads within minutes. During your trial, you register your own A2P campaign. By the time your trial ends, you own your sending infrastructure.',
  },
];

export default function HomeClientSections() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-card-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">

          {/* Left: Label + Heading + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: 'var(--font-sora)' }}>
              Questions we{' '}
              <span className="gradient-text">get asked a lot.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 text-sm sm:text-base">
              Everything you need to know about SurFox AI. Can&apos;t find your answer? Talk to our team.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg border border-white/[0.12] text-white/80 hover:text-white hover:border-white/25 text-sm font-medium transition-all glass-card"
            >
              Contact Sales
            </a>
          </motion.div>

          {/* Right: Accordion */}
          <div className="space-y-2">
            {faqItems.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`rounded-xl overflow-hidden border transition-colors duration-200 ${
                    isOpen
                      ? 'border-blue-500/30 bg-blue-500/[0.04]'
                      : 'border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12]'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className={`text-sm sm:text-base font-semibold leading-snug transition-colors ${isOpen ? 'text-white' : 'text-white/80'}`}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 flex-shrink-0 transition-all duration-200 ${
                        isOpen ? 'text-blue-400 rotate-180' : 'text-white/40 rotate-0'
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 border-t border-white/[0.06]">
                      <p className="text-white/55 leading-relaxed text-sm sm:text-base pt-4">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
