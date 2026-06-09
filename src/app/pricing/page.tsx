import { generatePageMetadata } from '@/data/page-metadata';
import PricingClient from './PricingClient';

export const metadata = generatePageMetadata('pricing');

export default function Page() {
  // Product Schema for all three pricing tiers
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SurFox AI Messaging Intelligence",
    "description": "AI-powered sales automation and lead qualification platform that turns cold outreach into qualified conversations.",
"brand": {
  "@type": "Brand",
  "name": "SurFox AI"
},
"url": "https://www.getsurfox.com/pricing",
"image": "https://www.getsurfox.com/newSurFoxLogo1.png",
"offers": [
      {
        "@type": "Offer",
        "name": "Starter Plan",
        "description": "For operators testing the waters on a focused list. Core AI that texts, qualifies, and books, without conversation learning.",
        "price": "147",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://www.getsurfox.com/subscribe/starter",
        "billingIncrement": "P1M",
        "category": "Subscription",
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "value": "1",
          "unitText": "team member"
        },
        "itemOffered": {
          "@type": "Service",
          "name": "SurFox Starter",
          "description": "2,000 messages per month (in & out), psychology-based conversations, automated qualification questions, basic objection handling, basic analytics dashboard, email support"
        }
      },
      {
        "@type": "Offer",
        "name": "Growth Plan",
        "description": "For teams ready to work a full list every month. Learning AI that studies your last 100 conversations and gets sharper over time.",
        "price": "597",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://www.getsurfox.com/subscribe/growth",
        "billingIncrement": "P1M",
        "category": "Subscription",
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "value": "5",
          "unitText": "team members"
        },
        "itemOffered": {
          "@type": "Service",
          "name": "SurFox Growth",
          "description": "10,000 messages per month (in & out), 5 team member accounts, AI learns from 100 conversations, advanced objection handling, Chrome extension for lead capture, priority email & chat support, funnel module"
        }
      },
      {
        "@type": "Offer",
        "name": "Scale Plan",
        "description": "For high-volume operations running constant campaigns. Maximum intelligence, learning from your last 1,000 conversations across every campaign.",
        "price": "2497",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://www.getsurfox.com/subscribe/scale",
        "billingIncrement": "P1M",
        "category": "Subscription",
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "value": "15",
          "unitText": "team members"
        },
        "itemOffered": {
          "@type": "Service",
          "name": "SurFox Scale",
          "description": "40,000+ messages per month (in & out), 15+ team member accounts, AI learns from 1000 conversations, unlimited knowledge base uploads, message A/B testing, white-glove onboarding, dedicated success manager"
        }
      }
    ]
  };

  // FAQPage Schema for the pricing FAQ section
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What happens if I exceed my message limit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We email you as you approach your limit so there are no surprises. You approve any overage before it is added, and you can move up a plan at any time."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from text blasting tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Text blasters send identical messages to thousands of people and leave you to handle every reply. SurFox AI holds a real, qualifying conversation with each contact, reads intent, and only hands off the contacts genuinely ready to talk. You get fewer calls, but every one is worth taking."
        }
      },
      {
        "@type": "Question",
        "name": "When will I see my first qualified lead?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most customers see their first qualified lead within 7 to 14 days, depending on your industry and the quality of your list. Real estate and B2B services typically see faster results."
        }
      },
      {
        "@type": "Question",
        "name": "Can I cancel anytime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Cancel anytime with 24 hours notice. No contracts, no cancellation fees. SurFox AI finishes any active conversations, then stops working new contacts."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer annual discounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are focused on monthly pricing while we are early stage. Annual options may come later once we have proven consistent value."
        }
      }
    ]
  };

  return (
    <>
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PricingClient />
    </>
  );
}
