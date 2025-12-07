'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Check, AlertCircle, Building2, Sparkles } from 'lucide-react';

export default function BusinessSignupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const invitationId = searchParams.get('invitation_id');

  const [loading, setLoading] = useState(true);
  const [invitation, setInvitation] = useState(null);
  const [error, setError] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('growth');
  const [processingPayment, setProcessingPayment] = useState(false);

  // Standard pricing (before discount)
  const standardPricing = {
    starter: { monthly: 197, yearly: 1970 },
    growth: { monthly: 497, yearly: 4970 },
    scale: { monthly: 1997, yearly: 19970 }
  };

  useEffect(() => {
    if (!invitationId) {
      setError('Invalid invitation link. Please contact your partner administrator.');
      setLoading(false);
      return;
    }

    fetchInvitation();
  }, [invitationId]);

  const fetchInvitation = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/get-business-invitation`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ invitation_id: invitationId })
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch invitation');
      }

      const data = await response.json();

      // Validate invitation
      if (data.status !== 'pending') {
        throw new Error('This invitation has already been used or expired');
      }

      if (new Date(data.expires_at) < new Date()) {
        throw new Error('This invitation has expired. Please contact your partner administrator.');
      }

      setInvitation(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching invitation:', err);
      setError(err.message || 'Failed to load invitation details');
      setLoading(false);
    }
  };

  const calculateDiscountedPrice = (price) => {
    if (!invitation?.business_admin_discount) return price;
    const discount = invitation.business_admin_discount / 100;
    return Math.round(price * (1 - discount));
  };

  const handleCheckout = async (plan, interval) => {
    setProcessingPayment(true);

    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan,
          interval,
          invitation_id: invitationId,
          email: invitation.email,
          first_name: invitation.first_name,
          last_name: invitation.last_name,
          phone_number: invitation.phone_number,
          role: 'business_admin',
          tenant_id: invitation.tenant_id,
          parent_tenant_id: invitation.parent_tenant_id,
          business_admin_discount: invitation.business_admin_discount,
          partner_name: invitation.partner_name,
          is_business_admin: 'true'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (err) {
      console.error('Checkout error:', err);
      setError('Failed to process payment. Please try again.');
      setProcessingPayment(false);
    }
  };

  const getPartnerBadge = () => {
    if (!invitation?.partner_type) return null;

    const badges = {
      franchise: { text: 'Franchise Partner', color: 'bg-blue-100 text-blue-800' },
      white_label: { text: 'White Label Partner', color: 'bg-purple-100 text-purple-800' },
      enterprise: { text: 'Enterprise Partner', color: 'bg-green-100 text-green-800' }
    };

    const badge = badges[invitation.partner_type] || badges.franchise;

    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${badge.color}`}>
        <Building2 className="w-4 h-4 mr-1" />
        {badge.text}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">Invitation Error</h1>
          <p className="text-gray-600 text-center">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Welcome to SurFox!</h1>
          </div>
          
          {invitation.partner_name && (
            <div className="flex items-center justify-center gap-2 mb-4">
              <p className="text-lg text-gray-600">
                You've been invited by <span className="font-semibold text-blue-600">{invitation.partner_name}</span>
              </p>
              {getPartnerBadge()}
            </div>
          )}

          {invitation.business_admin_discount > 0 && (
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              🎉 Special Partner Pricing: {invitation.business_admin_discount}% OFF
            </div>
          )}

          <p className="text-gray-600 mt-4">
            Setting up location for: <span className="font-medium">{invitation.first_name} {invitation.last_name}</span>
          </p>
          <p className="text-sm text-gray-500">{invitation.email}</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Starter Plan */}
          <div className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${
            selectedPlan === 'starter' ? 'border-blue-500' : 'border-gray-200'
          }`}>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 text-sm mb-4">Perfect for getting started</p>
              
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  {invitation.business_admin_discount > 0 && (
                    <span className="text-2xl text-gray-400 line-through">
                      ${standardPricing.starter.monthly}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-gray-900">
                    ${calculateDiscountedPrice(standardPricing.starter.monthly)}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                {invitation.business_admin_discount > 0 && (
                  <p className="text-sm text-green-600 font-medium mt-1">
                    Save ${standardPricing.starter.monthly - calculateDiscountedPrice(standardPricing.starter.monthly)}/month
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Up to 500 leads/month</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">AI-powered responses</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic analytics</span>
                </li>
              </ul>

              <button
                onClick={() => handleCheckout('starter', 'monthly')}
                disabled={processingPayment}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {processingPayment ? 'Processing...' : 'Get Started'}
              </button>
            </div>
          </div>

          {/* Growth Plan */}
          <div className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${
            selectedPlan === 'growth' ? 'border-blue-500' : 'border-blue-300'
          } relative`}>
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
              RECOMMENDED
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600 text-sm mb-4">For scaling businesses</p>
              
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  {invitation.business_admin_discount > 0 && (
                    <span className="text-2xl text-gray-400 line-through">
                      ${standardPricing.growth.monthly}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-gray-900">
                    ${calculateDiscountedPrice(standardPricing.growth.monthly)}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                {invitation.business_admin_discount > 0 && (
                  <p className="text-sm text-green-600 font-medium mt-1">
                    Save ${standardPricing.growth.monthly - calculateDiscountedPrice(standardPricing.growth.monthly)}/month
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Up to 2,000 leads/month</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced AI features</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom integrations</span>
                </li>
              </ul>

              <button
                onClick={() => handleCheckout('growth', 'monthly')}
                disabled={processingPayment}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {processingPayment ? 'Processing...' : 'Get Started'}
              </button>
            </div>
          </div>

          {/* Scale Plan */}
          <div className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${
            selectedPlan === 'scale' ? 'border-blue-500' : 'border-gray-200'
          }`}>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scale</h3>
              <p className="text-gray-600 text-sm mb-4">For enterprise teams</p>
              
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  {invitation.business_admin_discount > 0 && (
                    <span className="text-2xl text-gray-400 line-through">
                      ${standardPricing.scale.monthly}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-gray-900">
                    ${calculateDiscountedPrice(standardPricing.scale.monthly)}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                {invitation.business_admin_discount > 0 && (
                  <p className="text-sm text-green-600 font-medium mt-1">
                    Save ${standardPricing.scale.monthly - calculateDiscountedPrice(standardPricing.scale.monthly)}/month
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited leads</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">White-label options</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom SLA</span>
                </li>
              </ul>

              <button
                onClick={() => handleCheckout('scale', 'monthly')}
                disabled={processingPayment}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {processingPayment ? 'Processing...' : 'Get Started'}
              </button>
            </div>
          </div>
        </div>

        {/* 14-Day Trial Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <p className="text-blue-900 font-medium">
            ✨ Start with a 14-day free trial • Cancel anytime • No credit card required to start
          </p>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>This invitation expires on {new Date(invitation.expires_at).toLocaleDateString()}</p>
          <p className="mt-2">Questions? Contact {invitation.partner_name || 'your partner administrator'}</p>
        </div>
      </div>
    </div>
  );
}