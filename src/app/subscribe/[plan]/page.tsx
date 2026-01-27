'use client'

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

const PLANS = {
  starter: {
    name: 'Starter',
    price: 197,
    priceId: 'price_1SsxgB2Mug1fO97stcHUADPr',
    leads: '1,000 monthly messages',
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
    price: 497,
    priceId: 'price_1Ssxfn2Mug1fO97sN23TW9KB',
    leads: '10,000 monthly messages',
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
    price: 1997, 
    priceId: 'price_1Ssxep2Mug1fO97sKunJKlTB',
    leads: '50,000+ monthly messages',
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
        .text-navy {
          color: #1e293b;
        }

        .bg-navy {
          background-color: #1e293b;
        }

        .text-orange {
          color: #c2410c;
        }

        .bg-orange {
          background-color: #c2410c;
        }
      `}</style>

      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-xl">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-sm font-medium text-gray-500 mb-2 tracking-wide">CONFIRMATION</div>
            <h1 className="text-4xl font-semibold text-navy mb-2">
              You've Selected
            </h1>
            <h2 className="text-3xl font-bold text-navy mb-2">SurFox {selectedPlan.name}</h2>
            <p className="text-gray-600">{selectedPlan.description}</p>
          </div>

          {/* Plan Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Left Column - Pricing & Leads */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-navy mb-1">
                  ${selectedPlan.price}
                </div>
                <div className="text-gray-600">per month</div>
                <div className="text-orange font-semibold mt-2">
                  {selectedPlan.leads}
                </div>
              </div>
              
              {/* Trust indicators */}
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-orange rounded-full"></span>
                  Cancel anytime
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-orange rounded-full"></span>
                  Setup in 5 minutes
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-orange rounded-full"></span>
                  24/7 support included
                </div>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-navy mb-4">What's included:</h3>
              <ul className="space-y-3">
                {selectedPlan.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-orange rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-orange/10 rounded-xl p-6 mb-8 border border-orange/20">
            <h3 className="text-lg font-semibold text-navy mb-4">What happens next?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="text-center">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">1</div>
                <div>Secure checkout with Stripe</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">2</div>
                <div>Instant account creation</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-orange rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">3</div>
                <div>Start qualifying leads today</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleSubscribe}
            className="w-full bg-orange text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition-all font-semibold text-lg shadow-lg"
          >
            Continue to Secure Checkout
          </button>

          {/* Security notice */}
          <div className="text-center mt-4 text-sm text-gray-500">
            🔒 Secured by Stripe • SSL Encrypted
          </div>
        </div>
      </div>
    </>
  );
}