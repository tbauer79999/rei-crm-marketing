'use client'

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const PLANS = {
  starter: {
    name: 'Starter',
    price: 147,
    priceId: 'price_1TDcQU2Mug1fO97sWchG4ILV',
    leads: '2,000 monthly messages (in & out)',
    keyFeatures: [
      'AI-generated initial SMS',
      'AI auto-replies',
      'Cold follow-up automations',
      'Basic analytics',
      '1 team seat'
    ],
    description: 'Perfect for individual sales professionals'
  },
  growth: {
    name: 'Growth', 
    price: 597,
    priceId: 'price_1TDcSA2Mug1fO97sywh4ejnB',
    leads: '10,000 monthly messages (in & out)',
    keyFeatures: [
      'Everything in Starter, plus:',
      'Funnel module (Cold → Escalated)',
      'Chrome extension',
      '100 conversation memory/learning',
      '5 team seats'
    ],
    description: 'Advanced features for growing businesses'
  },
  scale: {
    name: 'Scale',
    price: 2497,
    priceId: 'price_1TDcSs2Mug1fO97sEHhXl38Y',
    leads: '40,000+ monthly messages (in & out)',
    keyFeatures: [
      'Everything in Growth, plus:',
      'Unlimited AI knowledge base uploads',
      '1000 conversation memory/learning',
      'Message A/B testing',
      '15+ team seats'
    ],
    description: 'Full-featured plan for scaling operations'
  }
};

export default function Subscribe() {
  const params = useParams();
  const plan = Array.isArray(params.plan) ? params.plan[0] : params.plan;
  const selectedPlan = plan ? PLANS[plan as keyof typeof PLANS] : null;

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToTcpa, setAgreedToTcpa] = useState(false);
  const [termsError, setTermsError] = useState('');
  const [tcpaError, setTcpaError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

    // Capture referral + affiliate codes from URL and store in localStorage
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const refCode = urlParams.get('ref');
    if (refCode) {
      localStorage.setItem('surfox_ref', refCode);
    }
    const affCode = urlParams.get('aff');
    if (affCode) {
      localStorage.setItem('surfox_aff', affCode);
    }
  }, []);

  const handleSubscribe = async () => {
  if (!selectedPlan) return;

  // Clickwrap validation
  setTermsError('');
  setTcpaError('');
  setSubmitError('');
  let hasError = false;
  if (!agreedToTerms) {
    setTermsError('You must agree to the Terms of Service and Privacy Policy.');
    hasError = true;
  }
  if (!agreedToTcpa) {
    setTcpaError('You must confirm TCPA compliance responsibility.');
    hasError = true;
  }
  if (hasError) return;

  // Get referral + affiliate codes from URL OR localStorage
  const urlParams = new URLSearchParams(window.location.search);
  let referralCode = urlParams.get('ref');
  let affiliateCode = urlParams.get('aff');

  // If not in URL, check localStorage (set from pricing page or initial landing)
  if (!referralCode) {
    referralCode = localStorage.getItem('surfox_ref');
  }
  if (!affiliateCode) {
    affiliateCode = localStorage.getItem('surfox_aff');
  }

  setIsSubmitting(true);
  try {
    const response = await fetch('https://api.surfox.ai/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        priceId: selectedPlan.priceId,
        referralCode: referralCode,
        affiliateCode: affiliateCode,
        metadata: {
          terms_agreed_at: new Date().toISOString()
        }
      })
    });

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      let backendMessage = '';
      try {
        backendMessage = JSON.parse(text)?.error || '';
      } catch {
        backendMessage = text.slice(0, 200);
      }
      console.error('Checkout session request failed', response.status, text);
      setSubmitError(
        backendMessage
          ? `Checkout failed (${response.status}): ${backendMessage}`
          : `Checkout failed (status ${response.status}). Please try again or email tom@getsurfox.com.`
      );
      return;
    }

    const data = await response.json().catch(() => null);
    if (!data || !data.url) {
      console.error('Checkout session response missing url field', data);
      setSubmitError('Checkout response was invalid. Please try again or email tom@getsurfox.com.');
      return;
    }

    window.location.href = data.url;
  } catch (err) {
    console.error('Checkout request threw', err);
    setSubmitError('We could not reach the checkout service. Please check your connection and try again, or email tom@getsurfox.com.');
  } finally {
    setIsSubmitting(false);
  }
};

  if (!selectedPlan) {
    return <div className="p-8">Plan not found</div>;
  }

  return (
    <>

      <div className="min-h-screen bg-card-bg flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full bg-card-bg rounded-2xl border-2 border-white/[0.08] p-8 shadow-xl">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-sm font-medium text-white/50 mb-2 tracking-wide">CONFIRMATION</div>
            <h1 className="text-4xl font-bold text-white mb-2">
              You've Selected
            </h1>
            <h2 className="text-3xl font-bold text-white mb-2">SurFox AI {selectedPlan.name}</h2>
            <p className="text-white/60">{selectedPlan.description}</p>
          </div>

          {/* Plan Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Left Column - Pricing & Leads */}
            <div className="bg-background rounded-xl p-6 border border-white/[0.08]">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-white mb-1">
                  ${selectedPlan.price}
                </div>
                <div className="text-white/60">per month</div>
                <div className="text-blue-400 font-semibold mt-2">
                  {selectedPlan.leads}
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 gradient-bg rounded-full"></span>
                  Cancel anytime
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 gradient-bg rounded-full"></span>
                  Setup in 5 minutes
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 gradient-bg rounded-full"></span>
                  24/7 support included
                </div>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="bg-background rounded-xl p-6 border border-white/[0.08]">
              <h3 className="text-xl font-semibold text-white mb-4">What's included:</h3>
              <ul className="space-y-3">
                {selectedPlan.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 gradient-bg rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className="glass-card border border-blue-500/20 rounded-xl p-6 mb-8 border border-orange/20">
            <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-white/70">
              <div className="text-center">
                <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">1</div>
                <div>Secure checkout with Stripe</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">2</div>
                <div>Instant account creation</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">3</div>
                <div>Start qualifying leads today</div>
              </div>
            </div>
          </div>

          {/* Terms Agreement Checkboxes */}
          <div className="space-y-3 mb-6">
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => { setAgreedToTerms(e.target.checked); if (e.target.checked) setTermsError(''); }}
                  className="sr-only"
                />
                <span className={`mt-1 h-4 w-4 shrink-0 rounded border flex items-center justify-center transition-colors ${agreedToTerms ? 'bg-blue-500 border-blue-500' : 'bg-transparent border-white/30'}`}>
                  {agreedToTerms && (
                    <svg className="h-3 w-3 text-white" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                    </svg>
                  )}
                </span>
                <span className="text-sm text-white/70">
                  I have read and agree to the SurFox AI{' '}
                  <a href="https://www.getsurfox.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Privacy Policy</a>.
                </span>
              </label>
              {termsError && <p className="text-red-400 text-xs mt-1 ml-7">{termsError}</p>}
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedToTcpa}
                  onChange={(e) => { setAgreedToTcpa(e.target.checked); if (e.target.checked) setTcpaError(''); }}
                  className="sr-only"
                />
                <span className={`mt-1 h-4 w-4 shrink-0 rounded border flex items-center justify-center transition-colors ${agreedToTcpa ? 'bg-blue-500 border-blue-500' : 'bg-transparent border-white/30'}`}>
                  {agreedToTcpa && (
                    <svg className="h-3 w-3 text-white" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                    </svg>
                  )}
                </span>
                <span className="text-sm text-white/70">
                  I accept full responsibility for TCPA compliance and all applicable messaging laws. I understand that SurFox AI is not responsible for my messaging practices.
                </span>
              </label>
              {tcpaError && <p className="text-red-400 text-xs mt-1 ml-7">{tcpaError}</p>}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleSubscribe}
            disabled={isSubmitting}
            className="w-full gradient-bg text-white px-8 py-4 rounded-xl hover:gradient-bg-600 transition-all font-semibold text-lg shadow-sm shadow-blue-500/5 shadow-blue-500/5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Starting Checkout...' : 'Continue to Secure Checkout'}
          </button>
          {submitError && (
            <p className="mt-3 text-sm text-red-400 text-center">{submitError}</p>
          )}

          {/* Security notice */}
          <div className="text-center mt-4 text-sm text-white/50">
            🔒 Secured by Stripe • SSL Encrypted
          </div>
        </div>
      </div>
    </>
  );
}