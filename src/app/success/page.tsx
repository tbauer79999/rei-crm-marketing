export default function Success() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8 shadow-2xl text-center">
        
        {/* Success Icon */}
        <div className="text-6xl mb-6">🚀</div>
        
        {/* Main Headline */}
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
          You're In! Welcome to the Future of Lead Qualification
        </h1>
        
        {/* Value-focused description */}
        <div className="space-y-4 text-lg text-purple-200 mb-8">
          <p className="font-semibold text-white">
            Say goodbye to generic text blasts and manual follow-ups.
          </p>
          <p>
            Your AI-powered lead qualification system is ready to turn cold prospects into HOT conversations so you focus on closing deals.
          </p>
        </div>

        {/* What's Next Steps */}
        <div className="bg-black/30 rounded-xl p-6 mb-8 text-left">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">What's happening now:</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-xs font-bold">✓</span>
              </span>
              <div>
                <div className="font-medium text-white">Account Created</div>
                <div className="text-sm text-gray-300">Your SurFox dashboard is being prepared</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white text-xs font-bold">
                2
              </span>
              <div>
                <div className="font-medium text-white">Setup Email Sent</div>
                <div className="text-sm text-gray-300">Check your inbox for login credentials and setup guide</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 text-white text-xs font-bold">
                3
              </span>
              <div>
                <div className="font-medium text-white">AI Training Ready</div>
                <div className="text-sm text-gray-300">Upload your knowledge base and customize your AI persona</div>
              </div>
            </div>
          </div>
        </div>

        {/* Value reinforcement */}
        <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl p-6 mb-8">
          <p className="text-white font-medium mb-2">
            You're about to experience:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-2">📈</div>
              <div className="text-cyan-300 font-medium">Higher Response Rates</div>
              <div className="text-gray-300">AI-personalized messaging</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-cyan-300 font-medium">Instant Follow-ups</div>
              <div className="text-gray-300">24/7 lead engagement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-cyan-300 font-medium">Qualified Prospects</div>
              <div className="text-gray-300">Only hot leads reach you</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href="https://surfox.ai" 
          className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all font-bold text-lg mb-4"
        >
          Access Your AI Dashboard
        </a>
        
        {/* Support note */}
        <p className="text-sm text-gray-400">
          Need help getting started? Our setup guide will walk you through everything step-by-step.
        </p>
      </div>
    </div>
  );
}