export default function Success() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .text-navy {
          color: #1e293b;
        }
        
        .bg-navy {
          background-color: #1e293b;
        }
        
        .text-orange {
          color: #ea580c;
        }
        
        .bg-orange {
          background-color: #ea580c;
        }
      `}</style>

      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-24">
        <div className="max-w-2xl w-full bg-white rounded-2xl border-2 border-gray-200 p-10 shadow-xl text-center">
          
          {/* Success Icon */}
          <div className="text-6xl mb-6">🚀</div>
          
          {/* Main Headline */}
          <h1 className="text-4xl font-semibold mb-4 text-navy">
            You're In! Welcome to the Future of Lead Qualification
          </h1>
          
          {/* Value-focused description */}
          <div className="space-y-4 text-lg text-gray-600 mb-8">
            <p className="font-semibold text-navy">
              Say goodbye to generic text blasts and manual follow-ups.
            </p>
            <p>
              Your AI-powered lead qualification system is ready to turn cold prospects into HOT conversations so you focus on closing deals.
            </p>
          </div>

          {/* What's Next Steps */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left border border-gray-200">
            <h2 className="text-xl font-semibold text-navy mb-4 text-center">What's happening now:</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </span>
                <div>
                  <div className="font-semibold text-navy">Account Created</div>
                  <div className="text-sm text-gray-600">Your SurFox dashboard is being prepared</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-navy rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white text-xs font-bold">
                  2
                </span>
                <div>
                  <div className="font-semibold text-navy">Setup Email Sent</div>
                  <div className="text-sm text-gray-600">Check your inbox for login credentials and setup guide</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 bg-navy rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white text-xs font-bold">
                  3
                </span>
                <div>
                  <div className="font-semibold text-navy">AI Training Ready</div>
                  <div className="text-sm text-gray-600">Upload your knowledge base and customize your AI persona</div>
                </div>
              </div>
            </div>
          </div>

          {/* Value reinforcement */}
          <div className="bg-orange/10 rounded-xl p-6 mb-8 border border-orange/20">
            <p className="text-navy font-semibold mb-4">
              You're about to experience:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl mb-2">📈</div>
                <div className="text-orange font-semibold">Higher Response Rates</div>
                <div className="text-gray-600">AI-personalized messaging</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-orange font-semibold">Instant Follow-ups</div>
                <div className="text-gray-600">24/7 lead engagement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-orange font-semibold">Qualified Prospects</div>
                <div className="text-gray-600">Only hot leads reach you</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href="https://surfox.ai" 
            className="inline-block bg-orange text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition-all font-semibold text-lg mb-4 shadow-lg"
          >
            Access Your AI Dashboard
          </a>
          
          {/* Support note */}
          <p className="text-sm text-gray-500">
            Need help getting started? Our setup guide will walk you through everything step-by-step.
          </p>
        </div>
      </div>
    </>
  );
}