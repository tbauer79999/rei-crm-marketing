import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Success() {
  return (
    <>

      <div className="min-h-screen bg-card-bg flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full bg-card-bg rounded-2xl border-2 border-white/[0.08] p-10 shadow-xl text-center">
          
          {/* Success Icon */}
          <div className="text-6xl mb-6">🚀</div>
          
          {/* Main Headline */}
          <h1 className="text-4xl font-bold mb-4 text-white">
            You're In! Welcome to the Future of Lead Qualification
          </h1>
          
          {/* Value-focused description */}
          <div className="space-y-4 text-lg text-white/60 mb-8">
            <p className="font-semibold text-white">
              Say goodbye to generic text blasts and manual follow-ups.
            </p>
            <p>
              Your AI-powered lead qualification system is ready to turn cold prospects into HOT conversations so you focus on closing deals.
            </p>
          </div>

          {/* What's Next Steps */}
          <div className="bg-background rounded-xl p-6 mb-8 text-left border border-white/[0.08]">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">What's happening now:</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </span>
                <div>
                  <div className="font-semibold text-white">Account Created</div>
                  <div className="text-sm text-white/60">Your SurFox AI dashboard is being prepared</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-card-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white text-xs font-bold">
                  2
                </span>
                <div>
                  <div className="font-semibold text-white">Setup Email Sent</div>
                  <div className="text-sm text-white/60">Check your inbox for login credentials and setup guide</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-card-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white text-xs font-bold">
                  3
                </span>
                <div>
                  <div className="font-semibold text-white">AI Training Ready</div>
                  <div className="text-sm text-white/60">Upload your knowledge base and customize your AI persona</div>
                </div>
              </div>
            </div>
          </div>

          {/* Value reinforcement */}
          <div className="glass-card border border-blue-500/20 rounded-xl p-6 mb-8 border border-orange/20">
            <p className="text-white font-semibold mb-4">
              You're about to experience:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl mb-2">📈</div>
                <div className="text-blue-400 font-semibold">Higher Response Rates</div>
                <div className="text-white/60">AI-personalized messaging</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-blue-400 font-semibold">Instant Follow-ups</div>
                <div className="text-white/60">24/7 lead engagement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-blue-400 font-semibold">Qualified Prospects</div>
                <div className="text-white/60">Only hot leads reach you</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="https://surfox.ai" 
            className="inline-block gradient-bg text-white px-8 py-4 rounded-xl hover:gradient-bg-600 transition-all font-semibold text-lg mb-4 shadow-sm shadow-blue-500/5 shadow-blue-500/5"
          >
            Access Your AI Dashboard
          </a>
          
          {/* Support note */}
          <p className="text-sm text-white/50">
            Need help getting started? Our setup guide will walk you through everything step-by-step.
          </p>
        </div>
      </div>
    </>
  );
}