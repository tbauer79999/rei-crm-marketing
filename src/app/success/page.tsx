import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Success() {
  return (
    <>

      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full bg-white rounded-2xl border-2 border-[#E4E6E2] p-10 shadow-xl text-center">
          
          {/* Success Icon */}
          <div className="text-6xl mb-6">🚀</div>
          
          {/* Main Headline */}
          <h1 className="text-4xl font-bold mb-4 text-[#13171F]">
            You're In! Welcome to the Future of Lead Qualification
          </h1>
          
          {/* Value-focused description */}
          <div className="space-y-4 text-lg text-[#5A626E] mb-8">
            <p className="font-semibold text-[#13171F]">
              Say goodbye to generic text blasts and manual follow-ups.
            </p>
            <p>
              Your AI-powered lead qualification system is ready to turn cold prospects into HOT conversations so you focus on closing deals.
            </p>
          </div>

          {/* What's Next Steps */}
          <div className="bg-[#F4F5F3] rounded-xl p-6 mb-8 text-left border border-[#E4E6E2]">
            <h2 className="text-xl font-semibold text-[#13171F] mb-4 text-center">What's happening now:</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#13171F] text-xs font-bold">✓</span>
                </span>
                <div>
                  <div className="font-semibold text-[#13171F]">Account Created</div>
                  <div className="text-sm text-[#5A626E]">Your SurFox AI dashboard is being prepared</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-[#13171F] text-xs font-bold">
                  2
                </span>
                <div>
                  <div className="font-semibold text-[#13171F]">Setup Email Sent</div>
                  <div className="text-sm text-[#5A626E]">Check your inbox for login credentials and setup guide</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-[#13171F] text-xs font-bold">
                  3
                </span>
                <div>
                  <div className="font-semibold text-[#13171F]">AI Training Ready</div>
                  <div className="text-sm text-[#5A626E]">Upload your knowledge base and customize your AI persona</div>
                </div>
              </div>
            </div>
          </div>

          {/* Value reinforcement */}
          <div className="bg-[#EAF7F9] border border-[#dCEEF1] rounded-xl p-6 mb-8 border border-[#dCEEF1]">
            <p className="text-[#13171F] font-semibold mb-4">
              You're about to experience:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl mb-2">📈</div>
                <div className="text-[#0A7C8C] font-semibold">Higher Response Rates</div>
                <div className="text-[#5A626E]">AI-personalized messaging</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-[#0A7C8C] font-semibold">Instant Follow-ups</div>
                <div className="text-[#5A626E]">24/7 lead engagement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-[#0A7C8C] font-semibold">Qualified Prospects</div>
                <div className="text-[#5A626E]">Only hot leads reach you</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="https://surfox.ai" 
            className="inline-block bg-[#13171F] text-white px-8 py-4 rounded-xl hover:gradient-bg-600 transition-all font-semibold text-lg mb-4 shadow-sm shadow-blue-500/5 shadow-blue-500/5"
          >
            Access Your AI Dashboard
          </a>
          
          {/* Support note */}
          <p className="text-sm text-[#8A92A0]">
            Need help getting started? Our setup guide will walk you through everything step-by-step.
          </p>
        </div>
      </div>
    </>
  );
}