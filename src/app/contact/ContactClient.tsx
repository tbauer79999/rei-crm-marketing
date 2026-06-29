'use client'

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, MessageSquare, Linkedin } from 'lucide-react';

const API_URL = 'https://api.surfox.ai/api/public/contact-sales';

export default function Contact() {
  const containerRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    interest: '',
    message: '',
    smsConsent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          interest: formData.interest,
          message: `Role: ${formData.role}\n\n${formData.message}`,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed');
      alert('Thanks! We\'ll get back to you shortly.');
      setFormData({ firstName: '', lastName: '', email: '', company: '', role: '', phone: '', interest: '', message: '', smsConsent: false });
    } catch {
      alert('Something went wrong. Please email sales@getsurfox.com directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div ref={containerRef} className="bg-[#F4F5F3] text-[#13171F]">

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
                  Our team typically responds within 24 hours. For urgent inquiries, please call us directly.
                </p>
              </motion.div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E4E6E2] hover:border-blue-500/30 hover:shadow-sm shadow-blue-500/5 transition-all"
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
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E4E6E2] hover:border-blue-500/30 hover:shadow-sm shadow-blue-500/5 transition-all"
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
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E4E6E2] hover:border-blue-500/30 hover:shadow-sm shadow-blue-500/5 transition-all"
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
                <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[#5A626E] mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E4E6E2] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-[#F4F5F3] text-[#13171F] placeholder:text-[#8A92A0] outline-none transition"
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
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E4E6E2] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-[#F4F5F3] text-[#13171F] placeholder:text-[#8A92A0] outline-none transition"
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
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E4E6E2] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-[#F4F5F3] text-[#13171F] placeholder:text-[#8A92A0] outline-none transition"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Company & Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-[#13171F] mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E4E6E2] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-[#F4F5F3] text-[#13171F] placeholder:text-[#8A92A0] outline-none transition"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-semibold text-[#13171F] mb-2">
                        Role *
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E4E6E2] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-[#F4F5F3] text-[#13171F] placeholder:text-[#8A92A0] outline-none transition"
                        placeholder="Sales Manager"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#13171F] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E4E6E2] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-[#F4F5F3] text-[#13171F] placeholder:text-[#8A92A0] outline-none transition"
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
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E4E6E2] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-[#F4F5F3] text-[#13171F] placeholder:text-[#8A92A0] outline-none transition resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  {/* SMS Consent Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="smsConsent"
                      name="smsConsent"
                      checked={formData.smsConsent}
                      onChange={handleCheckboxChange}
                      className="mt-1 w-4 h-4 rounded border-[#E4E6E2] text-[#0A7C8C] focus:ring-2 focus:ring-blue-500/20 accent-blue-500"
                    />
                    <label htmlFor="smsConsent" className="text-sm text-[#5A626E] leading-relaxed">
                      By submitting this form you agree to receive SMS notifications related to your SurFox AI account, product updates, and platform communications. Message and data rates may apply. Reply STOP to unsubscribe.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#13171F] text-white font-semibold hover:gradient-bg-600 transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                      {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                    <p className="text-sm text-[#8A92A0] mt-4">
                      * Required fields
                    </p>
                  </div>
                </form>
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
                linkText: 'Schedule Demo'
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
                link: 'mailto:sales@getsurfox.com',
                linkText: 'Get Support'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border border-[#E4E6E2] bg-white hover:border-blue-500/30 hover:shadow-sm shadow-blue-500/5 shadow-blue-500/5 hover-lift"
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
                a: 'Yes! You can request a demo through our Request Access page, or mention it in the contact form above. We will follow up to schedule a time that works for you.'
              },
              {
                q: 'Do you offer custom enterprise solutions?',
                a: 'Absolutely. SurFox AI can be customized for enterprise deployments with dedicated support, custom integrations, and specialized configurations. Contact our sales team to discuss your needs.'
              },
              {
                q: 'What if I am an existing customer with a technical issue?',
                a: 'Current customers should email support@getsurfox.com or use the in-app support chat for the fastest response. You can also call our support line during business hours.'
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-[#E4E6E2] p-6 sm:p-8 hover:border-blue-500/30 hover:shadow-sm shadow-blue-500/5 transition-all duration-300"
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