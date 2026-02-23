import { generatePageMetadata } from '@/data/page-metadata';
import PricingClient from './PricingClient';

export const metadata = generatePageMetadata('pricing');

export default function Page() {
  // Product Schema for all three pricing tiers
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SurFox AI Messaging Intelligence",
    "description": "AI-powered sales automation and conversation intelligence platform that turns cold outreach into qualified conversations.",
"brand": {
  "@type": "Brand",
  "name": "SurFox AI"
},
"url": "https://www.getsurfox.com/pricing",
"image": "https://www.getsurfox.com/logo.png",
"offers": [
      {
        "@type": "Offer",
        "name": "Starter Plan",
        "description": "Perfect for individual sales professionals ready to eliminate manual outreach. Basic AI that handles conversations but does not learn.",
        "price": "97",
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
          "description": "1,000 new messages per month, unlimited follow-up conversations, psychology-based conversations, automated qualification questions, basic objection handling, basic analytics dashboard, email support"
        }
      },
      {
        "@type": "Offer",
        "name": "Growth Plan",
        "description": "For growing sales teams ready to scale AI-powered conversations. Learning AI with 100 conversation memory that gets smarter with every conversation.",
        "price": "497",
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
          "description": "10,000 new messages per month, unlimited follow-up conversations, 5 team member accounts, AI learns from 100 conversations, advanced objection handling, Chrome extension for lead capture, advanced analytics & insights, priority email & chat support, funnel module"
        }
      },
      {
        "@type": "Offer",
        "name": "Scale Plan",
        "description": "Full-featured plan for enterprises scaling AI-powered sales operations. Advanced learning AI with 1000 conversation memory for maximum intelligence.",
        "price": "1997",
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
          "description": "50,000+ new messages per month, unlimited follow-up conversations, 15+ team member accounts, AI learns from 1000 conversations, unlimited knowledge base uploads, message A/B testing, white-glove onboarding, dedicated success manager"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "124"
    }
  };

  // FAQPage Schema for the pricing FAQ section
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What happens if I exceed my prospect limit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Additional prospects are $0.20 each. We will email you when you are approaching your limit. No surprise charges - you approve any overages first."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from text blasting tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Text blasters send identical messages to thousands of people. Our AI has unique conversations with each prospect, reads their psychology, and only escalates genuinely interested buyers. You get fewer calls, but they are all worth taking."
        }
      },
      {
        "@type": "Question",
        "name": "When will I see my first qualified prospect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most customers receive their first qualified prospect within 7-14 days, depending on your industry and the quality of your prospect list. Real estate and B2B services typically see faster results."
        }
      },
      {
        "@type": "Question",
        "name": "Can I cancel anytime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, cancel anytime with 24 hours notice. No contracts, no cancellation fees. Your AI will finish any active conversations, then stop processing new prospects."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer annual discounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are focused on monthly pricing while we are early stage. Annual options may be available later in 2025 after we have proven consistent value delivery."
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
