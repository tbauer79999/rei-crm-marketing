'use client'

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface PartnerInvite {
  id: string;
  invite_code: string;
  partner_type: string;
  partner_name: string;
  partner_email: string;
  partner_company: string;
  one_time_payment: number | null;
  recurring_payment: number | null;
  recurring_interval: string | null;
  business_admin_discount: number;
  max_business_admins: number | null;
  status: string;
  expires_at: string;
  target_role: string;
  logo_url: string | null;
  trial_days: number;
  custom_plan_limits: {
    sms_limit?: number;
    campaigns_limit?: number;
    knowledge_docs_limit?: number;
    ai_learning_history_limit?: number;
  } | null;
}

function PartnerSignupContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  
  const [invite, setInvite] = useState<PartnerInvite | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!code) {
      setError('No invite code provided');
      setLoading(false);
      return;
    }

    fetchInvite();
  }, [code]);

  const fetchInvite = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/get-partner-invite`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ invite_code: code })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Invalid or expired invite code');
      }

      const data = await response.json();
      setInvite(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load invite');
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribe = async () => {
    if (!invite) return;
    
    try {
      const response = await fetch('https://api.surfox.ai/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: invite.partner_email,
          metadata: {
            partner_invite_id: invite.id,
            partner_invite_code: invite.invite_code,
            partner_company: invite.partner_company,
            partner_type: invite.partner_type,
            role: invite.target_role || 'partner_admin',
            target_role: invite.target_role || 'partner_admin',
            is_partner: (invite.target_role || 'partner_admin') === 'partner_admin' ? 'true' : 'false',
            one_time_payment: invite.one_time_payment,
            recurring_payment: invite.recurring_payment,
            recurring_interval: invite.recurring_interval,
            business_admin_discount: invite.business_admin_discount,
            max_business_admins: invite.max_business_admins,
            custom_plan_limits: invite.custom_plan_limits
          }
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }
      
      const { url } = await response.json();
      
      if (!url) {
        throw new Error('No checkout URL returned');
      }
      
      window.location.href = url;
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to start checkout. Please try again.');
    }
  };

  const isPartnerAdmin = (invite?.target_role || 'partner_admin') === 'partner_admin';

  if (loading) {
    return (
      <>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-orange-600 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Loading your invitation...</p>
          </div>
        </div>
      </>
    );
  }

  if (error || !invite) {
    return (
      <>
        <style>{`
          .text-navy {
            color: #1e293b;
          }

          .bg-navy {
            background-color: #1e293b;
          }
        `}</style>
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-2xl border-2 border-red-200 p-8 shadow-xl text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-semibold text-navy mb-4">Invalid Invite</h1>
            <p className="text-gray-600 mb-6">
              {error || 'This invitation link is invalid or has expired.'}
            </p>
            <p className="text-sm text-gray-500">
              Please contact your SurFox representative for a new invitation link.
            </p>
          </div>
        </div>
      </>
    );
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

        .text-purple {
          color: #7c3aed;
        }

        .bg-purple {
          background-color: #7c3aed;
        }
      `}</style>

      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full bg-white rounded-2xl border-2 border-purple-200 p-8 shadow-xl">
          
          {/* Header */}
          <div className="text-center mb-8">
            {/* Partner Logo */}
            {invite.logo_url && (
              <div className="mb-6">
                <img
                  src={invite.logo_url}
                  alt={`${invite.partner_company} logo`}
                  className="h-20 w-auto mx-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}

            <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 border-2 ${
              isPartnerAdmin
                ? 'bg-purple-100 text-purple-700 border-purple-300'
                : 'bg-orange-100 text-orange-700 border-orange-300'
            }`}>
              {isPartnerAdmin ? '⭐ PARTNER INVITATION' : '🚀 CUSTOM PLAN INVITATION'}
            </div>
            <h1 className="text-4xl font-semibold text-navy mb-2">
              Welcome, {invite.partner_name}!
            </h1>
            <h2 className={`text-3xl font-bold mb-2 ${isPartnerAdmin ? 'text-purple-600' : 'text-orange-600'}`}>
              {isPartnerAdmin ? 'SurFox Enterprise Partner' : 'SurFox Custom Plan'}
            </h2>
            <p className="text-gray-600">
              {isPartnerAdmin
                ? "You've been invited to join SurFox as an enterprise partner"
                : "You've been invited to join SurFox with a custom plan"}
            </p>
          </div>

          {/* Account Info */}
          <div className={`rounded-xl p-6 mb-6 border-2 ${
            isPartnerAdmin ? 'bg-purple-50 border-purple-200' : 'bg-orange-50 border-orange-200'
          }`}>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-500 font-medium mb-1">Company</div>
                <div className="text-navy font-semibold">{invite.partner_company}</div>
              </div>
              <div>
                <div className="text-gray-500 font-medium mb-1">Account Email</div>
                <div className="text-navy font-semibold">{invite.partner_email}</div>
              </div>
            </div>
          </div>

          {/* Plan Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Left Column - Pricing */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-center mb-4">
                <div className="text-sm text-gray-500 font-medium mb-2 uppercase">
                  {isPartnerAdmin ? `${invite.partner_type.replace('_', ' ')} Partner Pricing` : 'Custom Pricing'}
                </div>
                
                {/* One-time payment */}
                {invite.one_time_payment && (
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-navy mb-1">
                      ${invite.one_time_payment.toLocaleString()}
                    </div>
                    <div className="text-gray-600">one-time setup fee</div>
                  </div>
                )}
                
                {/* Recurring payment */}
                {invite.recurring_payment && (
                  <div className={invite.one_time_payment ? 'border-t border-gray-300 pt-4' : ''}>
                    <div className="text-3xl font-bold text-navy mb-1">
                      ${invite.recurring_payment.toLocaleString()}
                    </div>
                    <div className="text-gray-600">
                      per {invite.recurring_interval || 'month'}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Custom limits if present */}
              {invite.custom_plan_limits && (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">Your Plan Includes:</div>
                  <div className="space-y-1 text-sm text-gray-600">
                    {invite.custom_plan_limits.sms_limit && (
                      <div>• {invite.custom_plan_limits.sms_limit.toLocaleString()} SMS/month</div>
                    )}
                    {invite.custom_plan_limits.campaigns_limit && (
                      <div>• {invite.custom_plan_limits.campaigns_limit} campaigns</div>
                    )}
                    {invite.custom_plan_limits.knowledge_docs_limit && (
                      <div>• {invite.custom_plan_limits.knowledge_docs_limit} knowledge docs</div>
                    )}
                    {invite.custom_plan_limits.ai_learning_history_limit && (
                      <div>• {invite.custom_plan_limits.ai_learning_history_limit} AI learning entries</div>
                    )}
                  </div>
                </div>
              )}
              
              {/* Trust indicators */}
              <div className={`space-y-2 text-sm text-gray-700 ${invite.custom_plan_limits ? 'mt-4 pt-4 border-t border-gray-200' : ''}`}>
                {invite.trial_days > 0 && (
                  <div className="flex items-center justify-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isPartnerAdmin ? 'bg-purple-600' : 'bg-orange-600'}`}></span>
                    {invite.trial_days}-day free trial
                  </div>
                )}
                <div className="flex items-center justify-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isPartnerAdmin ? 'bg-purple-600' : 'bg-orange-600'}`}></span>
                  Cancel anytime
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isPartnerAdmin ? 'bg-purple-600' : 'bg-orange-600'}`}></span>
                  Priority support
                </div>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-navy mb-4">
                {isPartnerAdmin ? 'Enterprise Partner Benefits:' : 'What You Get:'}
              </h3>
              <ul className="space-y-3">
                {isPartnerAdmin ? (
                  <>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-purple-600 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700 text-sm">
                        Invite business admins with {invite.business_admin_discount}% discount
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-purple-600 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700 text-sm">
                        {invite.max_business_admins ? `Up to ${invite.max_business_admins} business admin accounts` : 'Unlimited business admin accounts'}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-purple-600 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700 text-sm">Full platform white-labeling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-purple-600 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700 text-sm">Dedicated partner success manager</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-orange-600 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700 text-sm">AI-powered SMS lead qualification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-orange-600 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700 text-sm">Automated follow-up sequences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-orange-600 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700 text-sm">Real-time conversation analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-orange-600 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700 text-sm">CRM integrations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-orange-600 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700 text-sm">Priority support</span>
                    </li>
                  </>
                )}
                <li className="flex items-start gap-3">
                  <span className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${isPartnerAdmin ? 'bg-purple-600' : 'bg-orange-600'}`}>
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-gray-700 text-sm">Custom AI training & optimization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className={`rounded-xl p-6 mb-8 border-2 ${
            isPartnerAdmin ? 'bg-purple-50 border-purple-200' : 'bg-orange-50 border-orange-200'
          }`}>
            <h3 className="text-lg font-semibold text-navy mb-4">What happens next?</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="text-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold ${isPartnerAdmin ? 'bg-purple-600' : 'bg-orange-600'}`}>1</div>
                <div>Secure checkout with Stripe</div>
              </div>
              <div className="text-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold ${isPartnerAdmin ? 'bg-purple-600' : 'bg-orange-600'}`}>2</div>
                <div>Account activation</div>
              </div>
              <div className="text-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold ${isPartnerAdmin ? 'bg-purple-600' : 'bg-orange-600'}`}>3</div>
                <div>Guided onboarding</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleSubscribe}
            className={`w-full text-white px-8 py-4 rounded-xl hover:opacity-90 transition-all font-semibold text-lg shadow-lg ${
              isPartnerAdmin ? 'bg-purple-600 hover:bg-purple-700' : 'bg-orange-600 hover:bg-orange-700'
            }`}
          >
            Continue to Secure Checkout
          </button>

          {/* Security notice */}
          <div className="text-center mt-4 text-sm text-gray-500">
            🔒 Secured by Stripe • SSL Encrypted
          </div>

          {/* Expiry notice */}
          <div className="text-center mt-3 text-xs text-gray-400">
            This invitation expires on {new Date(invite.expires_at).toLocaleDateString()}
          </div>
        </div>
      </div>
    </>
  );
}

export default function PartnerSignup() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-orange-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <PartnerSignupContent />
    </Suspense>
  );
}