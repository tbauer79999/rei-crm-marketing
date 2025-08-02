export default function Success() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="max-w-md w-full bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8 shadow-2xl text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold mb-4 text-white">Welcome to SurFox!</h1>
        <p className="text-lg text-purple-200 mb-6">
          Your subscription is now active. Check your email for next steps.
        </p>
        <a 
          href="https://surfox.ai" 
          className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all font-bold"
        >
          Access Your Dashboard
        </a>
      </div>
    </div>
  );
}