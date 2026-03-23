'use client'

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

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

    // Capture referral code from URL and store in localStorage
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const refCode = urlParams.get('ref');
    if (refCode) {
      localStorage.setItem('surfox_ref', refCode);
    }
  }, []);

  const handleSubscribe = async () => {
  if (!selectedPlan) return;
  
  // Get referral code from URL OR localStorage
  const urlParams = new URLSearchParams(window.location.search);
  let referralCode = urlParams.get('ref');
  
  // If not in URL, check localStorage (set from pricing page or initial landing)
  if (!referralCode) {
    referralCode = localStorage.getItem('surfox_ref');
  }
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stripe/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      priceId: selectedPlan.priceId,
      referralCode: referralCode
    })
  });
  
  const { url } = await response.json();
  window.location.href = url;
};

  if (!selectedPlan) {
    return <div className="p-8">Plan not found</div>;
  }

  return (
    <>
      <style>{`
        .text-white {
          color: #1e293b;
        }

        .bg-card-bg {
          background-color: #1e293b;
        }

        .text-blue-400 {
          color: #c2410c;
        }

        .gradient-bg {
          background-color: #c2410c;
        }
      `}</style>

      <div className="min-h-screen bg-card-bg flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full bg-card-bg rounded-2xl border-2 border-white/[0.08] p-8 shadow-xl">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-sm font-medium text-white/50 mb-2 tracking-wide">CONFIRMATION</div>
            <h1 className="text-4xl font-semibold text-white mb-2">
              You've Selected
            </h1>
            <h2 className="text-3xl font-bold text-white mb-2">SurFox {selectedPlan.name}</h2>
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

          {/* CTA Button */}
          <button 
            onClick={handleSubscribe}
            className="w-full gradient-bg text-white px-8 py-4 rounded-xl hover:gradient-bg-600 transition-all font-semibold text-lg shadow-sm shadow-blue-500/5 shadow-blue-500/5"
          >
            Continue to Secure Checkout
          </button>

          {/* Security notice */}
          <div className="text-center mt-4 text-sm text-white/50">
            🔒 Secured by Stripe • SSL Encrypted
          </div>
        </div>
      </div>
    </>
  );
}