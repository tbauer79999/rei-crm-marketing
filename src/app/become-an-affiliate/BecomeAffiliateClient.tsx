'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, RefreshCw, CheckCircle2, AlertCircle, Send, ShieldCheck, Clock } from 'lucide-react';

const API_URL = 'https://api.surfox.ai/api/affiliates/apply';

/** Minimum time on page before a submit is treated as human, in milliseconds. */
const MIN_TIME_TO_SUBMIT_MS = 3000;

/** Abort a hanging request so the submit button cannot stay stuck forever. */
const REQUEST_TIMEOUT_MS = 10000;

interface ApplicationFormData {
  name: string;
  email: string;
  applicationLink: string;
  applicationNote: string;
  /** Honeypot. Real users never see or fill this. */
  website: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY_FORM: ApplicationFormData = {
  name: '',
  email: '',
  applicationLink: '',
  applicationNote: '',
  website: '',
};

function pushToDataLayer(payload: Record<string, string | boolean>): void {
  if (typeof window === 'undefined') return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  } catch (err: unknown) {
    console.error('[affiliate-apply] dataLayer push failed', err);
  }
}

export default function BecomeAffiliateClient() {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState<ApplicationFormData>(EMPTY_FORM);

  const statusRef = useRef<HTMLDivElement | null>(null);
  const mountedAtRef = useRef<number>(Date.now());

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      statusRef.current?.focus();
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Bot traps, same shape as the contact form: show success without ever
    // hitting the API, and don't record a conversion for either signal.
    const filledHoneypot = formData.website.trim().length > 0;
    const submittedTooFast = Date.now() - mountedAtRef.current < MIN_TIME_TO_SUBMIT_MS;
    if (filledHoneypot || submittedTooFast) {
      setStatus('success');
      setFormData(EMPTY_FORM);
      return;
    }

    setStatus('submitting');
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          application_link: formData.applicationLink,
          application_note: formData.applicationNote,
        }),
      });

      let payload: { applied?: boolean; error?: string } = {};
      try {
        payload = (await res.json()) as { applied?: boolean; error?: string };
      } catch {
        // Non-JSON body — still an API-side problem below.
      }

      if (!res.ok || payload.applied !== true) {
        throw new Error(payload.error || `Request failed with status ${res.status}`);
      }

      pushToDataLayer({ event: 'affiliate_application_submit' });
      setStatus('success');
      setFormData(EMPTY_FORM);
    } catch (err: unknown) {
      console.error('[affiliate-apply] submit failed', err);
      pushToDataLayer({ event: 'affiliate_application_error' });
      setErrorMessage(
        err instanceof Error && err.message && !err.message.startsWith('Request failed')
          ? err.message
          : 'We could not submit your application. Please try again, or email sales@getsurfox.com.'
      );
      setStatus('error');
    } finally {
      clearTimeout(timeoutId);
    }
  };

  const submitting = status === 'submitting';
  const inputClass = 'w-full px-4 py-3 rounded-lg border border-[#E4E6E2] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-[#F4F5F3] text-[#13171F] placeholder:text-[#8A92A0] outline-none transition';

  return (
    <div className="bg-[#F4F5F3] text-[#13171F]">
      {/* Hero */}
      <section className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F0F8F9] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#F0F8F9] rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-sm sm:text-base font-semibold text-[#0A7C8C] mb-4 tracking-wide uppercase">Affiliate Program</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#13171F] mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              Earn 20% recurring commission, every month, for a year
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-normal px-4">
              Refer a business to SurFox AI and earn 20% of their monthly plan for a full year while they stay active. That means Starter, Growth, or Scale. Extra SMS and Voice usage is not part of the cut. We pay you each month. Real cash, paid directly to you.
            </p>
            <a
              href="#apply"
              className="inline-flex items-center rounded-[9px] bg-[#13171F] text-white text-base font-semibold px-7 py-4 hover:bg-black transition-colors"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Earnings example */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F] mb-3">What one referral is actually worth</h2>
            <p className="text-[#5A626E] max-w-2xl mx-auto">At 20%, here's what a single referral pays out over its first year, by plan.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { plan: 'Growth', price: 597 },
              { plan: 'Growth Plus', price: 1497 },
              { plan: 'Scale', price: 2497 },
            ].map((row, i) => {
              const monthly = Math.round(row.price * 0.2);
              const yearly = monthly * 12;
              return (
                <motion.div
                  key={row.plan}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 sm:p-8 rounded-2xl border border-[#E4E6E2] bg-[#F4F5F3] text-center"
                >
                  <p className="text-sm font-semibold text-[#8A92A0] uppercase tracking-wide mb-1">{row.plan} referral</p>
                  <p className="text-3xl font-bold text-[#0A7C8C] mb-1">${monthly}<span className="text-base font-medium text-[#5A626E]">/mo</span></p>
                  <p className="text-[#5A626E] text-sm">up to ${yearly.toLocaleString()} in year one</p>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-sm text-[#8A92A0] mt-8 max-w-2xl mx-auto">
            Refer more than one business and it compounds: five Growth-plan referrals is over $7,000 in your first year alone.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Send, title: '1. Apply', desc: 'Tell us a bit about yourself and how you’d promote SurFox AI. We review every application personally, usually within a couple of days.' },
            { icon: DollarSign, title: '2. Get your link', desc: 'Once approved, you get a personal referral link and a dashboard to track every referral and commission you’ve earned.' },
            { icon: Users, title: '3. Earn recurring commission', desc: 'You earn 20% of what they pay for 12 months from their signup date, as long as they stay an active customer, paid out to you directly.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl border border-[#E4E6E2] bg-white text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center mb-5 mx-auto">
                <item.icon className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h3 className="text-lg font-semibold text-[#13171F] mb-2">{item.title}</h3>
              <p className="text-[#5A626E] leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Terms, stated plainly */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 p-6 rounded-xl bg-[#F4F5F3] border border-[#E4E6E2]"
          >
            <div className="w-10 h-10 rounded-lg bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#0A7C8C]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#13171F] mb-1">Your first payout is protected</h3>
              <p className="text-[#5A626E] text-sm leading-relaxed">
                SurFox AI has a 30-day money-back guarantee, so your first month's commission is held rather than paid immediately. You don't lose it: it releases in full as soon as your referral makes their second payment.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-start gap-4 p-6 rounded-xl bg-[#F4F5F3] border border-[#E4E6E2]"
          >
            <div className="w-10 h-10 rounded-lg bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-[#0A7C8C]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#13171F] mb-1">12 months per referral</h3>
              <p className="text-[#5A626E] text-sm leading-relaxed">
                Commission runs for 12 months from each referral's signup date, for as long as they stay an active customer. Bring in a steady stream of referrals and you're always earning on a full pipeline of them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#F4F5F3] scroll-mt-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-[#E4E6E2] p-8 sm:p-10">
            {status === 'success' ? (
              <div aria-live="polite">
                <div ref={statusRef} tabIndex={-1} className="flex flex-col items-start gap-4 outline-none">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-[#0A7C8C]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">Application received</h2>
                  <p className="text-[#5A626E] leading-relaxed">
                    Thanks for applying! We review every application personally and will email you once it's been reviewed.
                  </p>
                  <p className="text-[#5A626E] leading-relaxed">
                    Questions in the meantime? Email <a href="mailto:sales@getsurfox.com" className="text-[#0A7C8C] font-semibold hover:underline">sales@getsurfox.com</a>.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F] mb-2">Apply to become an affiliate</h2>
                <p className="text-[#5A626E] mb-8">Takes two minutes. We review every application personally and follow up by email either way.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot. Off screen rather than display:none so bots still fill it. */}
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#13171F] mb-2">Full Name *</label>
                    <input
                      type="text" id="name" name="name" required aria-required="true"
                      autoComplete="name" value={formData.name} onChange={handleChange}
                      className={inputClass} placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#13171F] mb-2">Email *</label>
                    <input
                      type="email" id="email" name="email" required aria-required="true"
                      autoComplete="email" value={formData.email} onChange={handleChange}
                      className={inputClass} placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="applicationLink" className="block text-sm font-semibold text-[#13171F] mb-2">
                      Website or social media (optional)
                    </label>
                    <input
                      type="text" id="applicationLink" name="applicationLink"
                      value={formData.applicationLink} onChange={handleChange}
                      className={inputClass} placeholder="yoursite.com, LinkedIn, Instagram, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="applicationNote" className="block text-sm font-semibold text-[#13171F] mb-2">
                      How would you promote SurFox AI?
                    </label>
                    <textarea
                      id="applicationNote" name="applicationNote" rows={5}
                      value={formData.applicationNote} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E4E6E2] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-[#F4F5F3] text-[#13171F] placeholder:text-[#8A92A0] outline-none transition resize-none"
                      placeholder="Your audience, network, or channel: website, social, industry contacts, etc."
                    />
                  </div>

                  <div>
                    <div aria-live="polite">
                      {status === 'error' && (
                        <div
                          ref={statusRef} tabIndex={-1} role="alert"
                          className="mb-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 outline-none"
                        >
                          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-red-700 leading-relaxed">{errorMessage}</p>
                        </div>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      aria-busy={submitting}
                      className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#13171F] text-white font-semibold hover:bg-[#0A7C8C] transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                      {submitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                    <p className="text-sm text-[#8A92A0] mt-4">* Required fields</p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
