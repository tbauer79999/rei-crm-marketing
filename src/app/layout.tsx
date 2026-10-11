import type { Metadata } from "next";
import { Sora, DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import Nav from "./components/nav";
import Footer from "./components/footer";
import "./globals.css";
import { Suspense } from "react";
import GtmPageViewPusher from "./GtmPageViewPusher";
import TimeOnPageTracker from "./TimeOnPageTracker";
import ConsentGatedScripts from "./ConsentGatedScripts";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Sitewide display + body typeface, exposed as a CSS variable. Replaces the former
// Space Grotesk / IBM Plex Sans / IBM Plex Mono trio.
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.getsurfox.com"),
  title: {
    template: '%s | SurFox AI',
    default: 'SurFox AI | AI Lead Qualification for SMS & Website Chat',
  },
  description: 'SurFox AI qualifies your leads over SMS and website chat. Upload your list or add the widget to your site, the AI works every conversation, and your team only talks to the contacts ready to buy.',
  keywords: ['SMS lead qualification', 'website chat lead qualification', 'AI lead qualification software', 'automated lead qualification', 'AI SMS for real estate', 'AI SMS for staffing', 'cold list activation', 'speed to lead AI', 'real estate wholesaler SMS', 'conversational AI SMS', 'lead scoring software'],
  authors: [{ name: 'SurFox Team' }],
  creator: 'SurFox AI',
  publisher: 'SurFox AI',
  openGraph: {
    siteName: "SurFox AI",
    type: "website",
    url: "https://www.getsurfox.com",
    title: 'SurFox AI | AI Lead Qualification for SMS & Website Chat',
    description: 'SurFox AI qualifies your leads over SMS and website chat. Upload your list or add the widget to your site, the AI works every conversation, and your team only talks to the contacts ready to buy.',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.getsurfox.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'SurFox AI - SMS & Website Chat Lead Qualification Platform',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ['https://www.getsurfox.com/og-default.png'],
    title: 'SurFox AI | AI Lead Qualification for SMS & Website Chat',
    description: 'SurFox AI qualifies your leads over SMS and website chat. Upload your list or add the widget to your site, the AI works every conversation, and your team only talks to the contacts ready to buy.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Cookiebot consent banner. Must be the first script. Manual blocking mode:
            GTM, Meta and OpenAI pixels are gated in ConsentGatedScripts, not here. */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="f09945e9-ab3d-4e03-a8ab-23be73c26cdd"
          data-blockingmode="manual"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${sora.variable} ${dmSans.variable} ${plusJakartaSans.variable} antialiased`} style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>
        {/* GTM, Meta Pixel and OpenAI pixel load here only after consent. The
            <noscript> tracking fallbacks were removed: they fire with no consent. */}
        <ConsentGatedScripts />

        {/* SurFox AI Chat Widget */}
        <Script
          id="surfox-chat-widget"
          src="https://surfox.ai/chat-widget.js"
          data-widget-key="wk_5c3a82cabe46479da8d56b797483ac3c"
          data-primary-color="#0FB6C9"
          strategy="lazyOnload"
        />

        {/* Wrap client router hooks in Suspense per Next.js 15 requirement */}
        <Suspense fallback={null}>
          <GtmPageViewPusher />
          <TimeOnPageTracker />
        </Suspense>

        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
