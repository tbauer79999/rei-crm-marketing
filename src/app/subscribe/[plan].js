import { useRouter } from 'next/router';

const PLANS = {
  starter: {
    name: 'Starter',
    price: 197,
    priceId: 'price_1RrUsuG76DDD8srY1vlotYI5'
  },
  growth: {
    name: 'Growth', 
    price: 397,
    priceId: 'price_1RrUz6G76DDD8srYjVAr3d2Y'
  },
  scale: {
    name: 'Scale',
    price: 997, 
    priceId: 'price_1RrUzhG76DDD8srY21GALug4'
  }
};

export default function Subscribe() {
  const router = useRouter();
  const { plan } = router.query;
  const selectedPlan = PLANS[plan];

  const handleSubscribe = async () => {
    // Call your Express backend API
    const response = await fetch('http://localhost:10000/api/stripe/create-checkout-session', {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="max-w-md w-full bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8 shadow-2xl">
        <h1 className="text-3xl font-bold mb-4 text-white">SurFox - {selectedPlan.name}</h1>
        <p className="text-2xl mb-6 text-purple-200">${selectedPlan.price}/month</p>
        <button 
          onClick={handleSubscribe}
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all font-bold"
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
}