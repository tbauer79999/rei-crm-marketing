'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, MessageSquare, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';

const API_URL = 'https://api.surfox.ai/api/public/contact-sales';

/**
 * Single source of truth for the SMS consent disclosure. Referenced in exactly two
 * places: the rendered checkbox label and the submitted payload. Never inline this
 * string anywhere else, or the stored consent proof can drift from what the user saw.
 * If the wording changes, bump SMS_CONSENT_VERSION in the same commit.
 */
export const SMS_CONSENT_TEXT = 'By submitting this form you agree to receive SMS notifications related to your SurFox AI account, product updates, and platform communications. Message and data rates may apply. Reply STOP to unsubscribe.';

export const SMS_CONSENT_VERSION = 'contact-form-v1';

/** Minimum time on page before a submit is treated as human, in milliseconds. */
const MIN_TIME_TO_SUBMIT_MS = 3000;

/** Abort a hanging request so the submit button cannot stay stuck forever. */
const REQUEST_TIMEOUT_MS = 10000;

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  phone: string;
  interest: string;
  message: string;
  smsConsent: boolean;
  /** Honeypot. Real users never see or fill this. */
  website: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

type FormErrorType = 'network' | 'api' | 'validation';

/** Thrown when the request reached the API but the API rejected it. */
class ApiResponseError extends Error {
  readonly httpStatus: number;

  constructor(message: string, httpStatus: number) {
    super(message);
    this.name = 'ApiResponseError';
    this.httpStatus = httpStatus;
  }
}

const EMPTY_FORM: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  role: '',
  phone: '',
  interest: '',
  message: '',
  smsConsent: false,
  website: '',
};

/** Push to GTM. Never throws, even if the container has not loaded yet. */
function pushToDataLayer(payload: Record<string, string | boolean>): void {
  if (typeof window === 'undefined') return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  } catch (err: unknown) {
    console.error('[contact-form] dataLayer push failed', err);
  }
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact SurFox AI',
  url: 'https://www.getsurfox.com/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'SurFox AI',
    url: 'https://www.getsurfox.com',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'support@getsurfox.com',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'sales@getsurfox.com',
        areaServed: 'US',
        availableLanguage: 'English',
      },
    ],
  },
};

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [consentError, setConsentError] = useState('');
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);

  const statusRef = useRef<HTMLDivElement | null>(null);
  const consentInputRef = useRef<HTMLInputElement | null>(null);
  const mountedAtRef = useRef<number>(Date.now());

  // Move focus to the status region whenever the outcome changes, so screen reader
  // and keyboard users land on the result instead of hunting for it.
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      statusRef.current?.focus();
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clearing the phone field removes the reason the consent error existed.
    if (name === 'phone') setConsentError('');
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
    if (name === 'smsConsent' && checked) setConsentError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const hasPhone = formData.phone.trim().length > 0;

    // Consent is only required when a phone number is actually supplied.
    if (hasPhone && !formData.smsConsent) {
      setConsentError('Please agree to receive SMS messages, or clear the phone number field.');
      consentInputRef.current?.focus();
      pushToDataLayer({
        event: 'contact_form_error',
        form_name: 'contact_sales',
        error_type: 'validation' satisfies FormErrorType,
      });
      return;
    }
    setConsentError('');

    // Bot traps. Both show the success state without touching the API, and neither
    // reports a conversion, so measured submissions stay clean.
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
          type: 'contact',
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
          // Consent proof. The IP is attached server side from request headers.
          smsConsent: formData.smsConsent,
          smsConsentText: SMS_CONSENT_TEXT,
          smsConsentVersion: SMS_CONSENT_VERSION,
          smsConsentTimestamp: new Date().toISOString(),
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
        }),
      });

      let payload: { ok?: boolean; error?: string } = {};
      try {
        payload = (await res.json()) as { ok?: boolean; error?: string };
      } catch {
        // Response arrived but the body was not JSON. Still an API-side problem.
      }

      if (!res.ok || payload.ok !== true) {
        throw new ApiResponseError(payload.error || `Request failed with status ${res.status}`, res.status);
      }

      pushToDataLayer({
        event: 'contact_form_submit',
        form_name: 'contact_sales',
        interest: formData.interest,
        has_phone: hasPhone,
      });

      setStatus('success');
      setFormData(EMPTY_FORM);
    } catch (err: unknown) {
      const isApiError = err instanceof ApiResponseError;
      const errorType: FormErrorType = isApiError ? 'api' : 'network';

      console.error('[contact-form] submit failed', {
        errorType,
        httpStatus: isApiError ? err.httpStatus : null,
        name: err instanceof Error ? err.name : 'UnknownError',
        message: err instanceof Error ? err.message : String(err),
        error: err,
      });

      pushToDataLayer({
        event: 'contact_form_error',
        form_name: 'contact_sales',
        error_type: errorType,
      });

      setErrorMessage(
        isApiError
          ? 'Something went wrong on our end and your message was not sent. Please try again, or email support@getsurfox.com.'
          : 'We could not reach our servers. Please check your connection and try again, or email support@getsurfox.com.'
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F0F8F9] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#F0F8F9] rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-4xl font-bold text-[#13171F] mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              Let's Talk About<br className="hidden sm:block" />
              <span className="sm:inline"> </span>Your Lead Qualification
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              Whether you have questions, want to see a demo, or are ready to get started - we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods + Form Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F] mb-6">
                  Get in Touch
                </h2>
                <p className="text-[#5A626E] leading-relaxed mb-8">
                  Our team typically responds within 24 hours. For urgent inquiries, email sales@getsurfox.com and we will prioritize your request.
                </p>
              </motion.div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E4E6E2] hover:border-blue-500/30 hover:shadow-sm hover:shadow-blue-500/5 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#0A7C8C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#13171F] mb-1">Email</h3>
                    <a href="mailto:sales@getsurfox.com" className="text-[#5A626E] hover:text-[#0A7C8C] transition">
                      sales@getsurfox.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E4E6E2] hover:border-blue-500/30 hover:shadow-sm hover:shadow-blue-500/5 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#0A7C8C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#13171F] mb-1">Headquarters</h3>
                    <p className="text-[#5A626E]">
                      Orlando, Florida<br />
                      United States
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E4E6E2] hover:border-blue-500/30 hover:shadow-sm hover:shadow-blue-500/5 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#0A7C8C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#13171F] mb-1">Business Hours</h3>
                    <p className="text-[#5A626E]">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-6 border-t border-[#E4E6E2]"
              >
                <h3 className="font-semibold text-[#13171F] mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/108288465"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white text-[#13171F] flex items-center justify-center hover:bg-[#F4F5F3] border border-[#E4E6E2] transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl border-2 border-[#E4E6E2] p-8 sm:p-10 md:p-12">
                {status === 'success' ? (
                  <div aria-live="polite">
                    <div
                      ref={statusRef}
                      tabIndex={-1}
                      className="flex flex-col items-start gap-4 outline-none"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-[#0A7C8C]" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                        Message received
                      </h2>
                      <p className="text-[#5A626E] leading-relaxed">
                        Thanks for reaching out. Your message is with our team and you can expect a reply by email within 24 hours on business days.
                      </p>
                      <p className="text-[#5A626E] leading-relaxed">
                        Need to add something? Email{' '}
                        <a href="mailto:sales@getsurfox.com" className="text-[#0A7C8C] font-semibold hover:underline">
                          sales@getsurfox.com
                        </a>{' '}
                        and it will reach the same inbox.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F] mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-[#5A626E] mb-8">
                      Fill out the form below and we'll get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
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

                      {/* Name Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-semibold text-[#13171F] mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            aria-required="true"
                            autoComplete="given-name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-semibold text-[#13171F] mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            aria-required="true"
                            autoComplete="family-name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#13171F] mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          aria-required="true"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="john@company.com"
                        />
                      </div>

                      {/* Company & Role */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          {/* Company is required for lead routing today. Candidate for the
                              next A/B test: cold ad traffic may convert better without it. */}
                          <label htmlFor="company" className="block text-sm font-semibold text-[#13171F] mb-2">
                            Company *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            aria-required="true"
                            autoComplete="organization"
                            value={formData.company}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="Acme Inc."
                          />
                        </div>
                        <div>
                          <label htmlFor="role" className="block text-sm font-semibold text-[#13171F] mb-2">
                            Role
                          </label>
                          <input
                            type="text"
                            id="role"
                            name="role"
                            autoComplete="organization-title"
                            value={formData.role}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="Sales Manager"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#13171F] mb-2">
                          Phone Number
                        </label>
                        <p id="phone-hint" className="text-sm text-[#8A92A0] mb-2">
                          Optional. Add it only if you want SurFox AI to text you about your inquiry.
                        </p>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          autoComplete="tel"
                          aria-describedby="phone-hint"
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      {/* Interest */}
                      <div>
                        <label htmlFor="interest" className="block text-sm font-semibold text-[#13171F] mb-2">
                          What are you interested in? *
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          required
                          aria-required="true"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#E4E6E2] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white text-[#13171F] outline-none transition"
                        >
                          <option value="" className="bg-white">Select an option</option>
                          <option value="demo">Request a demo</option>
                          <option value="pricing">Pricing question</option>
                          <option value="partnership">Partnership opportunities</option>
                          <option value="support">Technical support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-[#13171F] mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          aria-required="true"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#E4E6E2] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-[#F4F5F3] text-[#13171F] placeholder:text-[#8A92A0] outline-none transition resize-none"
                          placeholder="Tell us about your needs..."
                        />
                      </div>

                      {/* SMS Consent Checkbox */}
                      <div>
                        <div className="flex items-start gap-3">
                          <input
                            ref={consentInputRef}
                            type="checkbox"
                            id="smsConsent"
                            name="smsConsent"
                            checked={formData.smsConsent}
                            onChange={handleCheckboxChange}
                            aria-invalid={consentError ? true : undefined}
                            aria-describedby={consentError ? 'smsConsent-error' : undefined}
                            className="mt-1 w-4 h-4 rounded border-[#E4E6E2] text-[#0A7C8C] focus:ring-2 focus:ring-blue-500/20 accent-blue-500"
                          />
                          <label htmlFor="smsConsent" className="text-sm text-[#5A626E] leading-relaxed">
                            {SMS_CONSENT_TEXT}
                          </label>
                        </div>
                        {consentError && (
                          <p id="smsConsent-error" className="mt-2 text-sm font-medium text-red-600">
                            {consentError}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div>
                        <div aria-live="polite">
                          {status === 'error' && (
                            <div
                              ref={statusRef}
                              tabIndex={-1}
                              role="alert"
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
                          <Send className="w-5 h-5" />
                          {submitting ? 'Sending...' : 'Send Message'}
                        </button>
                        <p className="text-sm text-[#8A92A0] mt-4">
                          * Required fields
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13171F] mb-4 sm:mb-6 px-4">
              Looking for Something Specific?
            </h2>
            <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed px-4">
              Quick links to common resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              {
                icon: MessageSquare,
                title: 'Request a Demo',
                desc: 'See SurFox AI in action with a personalized walkthrough.',
                link: '/demo',
                linkText: 'Request a Demo'
              },
              {
                icon: Mail,
                title: 'Sales Inquiries',
                desc: 'Get pricing, discuss enterprise plans, or talk to our sales team.',
                link: 'mailto:sales@getsurfox.com',
                linkText: 'Contact Sales'
              },
              {
                icon: MessageSquare,
                title: 'Support',
                desc: 'Already a customer? Get help from our support team.',
                link: 'mailto:support@getsurfox.com',
                linkText: 'Get Support'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border border-[#E4E6E2] bg-white hover:border-blue-500/30 hover:shadow-sm hover:shadow-blue-500/5 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#0A7C8C]" />
                </div>

                <h3 className="text-xl font-semibold text-[#13171F] mb-3">{item.title}</h3>
                <p className="text-[#5A626E] leading-relaxed mb-6">{item.desc}</p>

                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-[#0A7C8C] font-semibold hover:gap-3 transition-all"
                >
                  {item.linkText}
                  <span>→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13171F] mb-4 sm:mb-6 px-4">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-6 px-4">
            {[
              {
                q: 'How quickly can I expect a response?',
                a: 'Our team typically responds to inquiries within 24 hours during business days.'
              },
              {
                q: 'Can I schedule a demo directly?',
                a: 'Yes! You can request a demo through our Request a Demo page, or mention it in the contact form above. We will follow up to schedule a time that works for you.'
              },
              {
                q: 'Do you offer custom enterprise solutions?',
                a: 'Absolutely. SurFox AI can be customized for enterprise deployments with dedicated support, custom integrations, and specialized configurations. Contact our sales team to discuss your needs.'
              },
              {
                q: 'What if I am an existing customer with a technical issue?',
                a: 'Current customers should email support@getsurfox.com or use the in-app support chat for the fastest response.'
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-[#E4E6E2] p-6 sm:p-8 hover:border-blue-500/30 hover:shadow-sm hover:shadow-blue-500/5 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#13171F] mb-3">{faq.q}</h3>
                <p className="text-[#5A626E] leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
