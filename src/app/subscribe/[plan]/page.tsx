'use client'

import { useParams } from 'next/navigation';

const PLANS = {
  starter: {
    name: 'Starter',
    price: 197,
    priceId: 'price_1RrVuSG76DDD8srYqxbf5wPF',
    leads: '1,000 monthly leads',
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
    priceId: 'price_1RrVueG76DDD8srYmSGMWvRt',
    leads: '5,000 monthly leads',
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
    priceId: 'price_1RrVupG76DDD8srY32NzCyHl',
    leads: '50,000+ monthly leads',
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

  const handleSubscribe = async () => {
    if (!selectedPlan) return;
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stripe/create-checkout-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId: selectedPlan.priceId })
    });
    
    const { url } = await response.json();
    window.location.href = url;
  };

  if (!selectedPlan) {
    return <div className="p-8">Plan not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8 shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            You've Selected
          </h1>
          <h2 className="text-3xl font-bold text-white mb-2">SurFox {selectedPlan.name}</h2>
          <p className="text-purple-200">{selectedPlan.description}</p>
        </div>

        {/* Plan Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Pricing & Leads */}
          <div className="bg-black/20 rounded-xl p-6 border border-purple-500/20">
            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-white mb-1">
                ${selectedPlan.price}
              </div>
              <div className="text-purple-200">per month</div>
              <div className="text-cyan-300 font-semibold mt-2">
                {selectedPlan.leads}
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Cancel anytime
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Setup in 5 minutes
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                24/7 support included
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="bg-black/20 rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold text-white mb-4">What's included:</h3>
            <ul className="space-y-3">
              {selectedPlan.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl p-6 mb-8 border border-purple-500/20">
          <h3 className="text-lg font-semibold text-white mb-3">What happens next?</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-200">
            <div className="text-center">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">1</div>
              <div>Secure checkout with Stripe</div>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">2</div>
              <div>Instant account creation</div>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">3</div>
              <div>Start qualifying leads today</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={handleSubscribe}
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all font-bold text-lg"
        >
          Continue to Secure Checkout
        </button>

        {/* Security notice */}
        <div className="text-center mt-4 text-sm text-gray-400">
          🔒 Secured by Stripe • SSL Encrypted
        </div>
      </div>
    </div>
  );
}