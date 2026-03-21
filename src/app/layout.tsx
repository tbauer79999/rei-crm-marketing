import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Nav from "./components/nav";
import Footer from "./components/footer";
import "./globals.css";
import { Suspense } from "react";
import GtmPageViewPusher from "./GtmPageViewPusher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.getsurfox.com"),
  title: {
    template: '%s | SurFox',
    default: 'SurFox AI | AI SDR Platform for SMS Lead Qualification',
  },
  description: 'Replace expensive SDRs with AI. SurFox qualifies cold leads via SMS automatically - 60–80% lower cost per lead. Your team only talks to hot prospects.',
  keywords: ['AI SDR', 'AI SDR platform', 'SMS lead qualification', 'lead qualification', 'automated lead qualification', 'AI sales development', 'lead scoring', 'outbound sales AI'],
  authors: [{ name: 'SurFox Team' }],
  creator: 'SurFox',
  publisher: 'SurFox',
  openGraph: {
    siteName: "SurFox",
    type: "website",
    url: "https://www.getsurfox.com",
    title: 'SurFox | AI SDR Platform for SMS Lead Qualification',
    description: 'Replace expensive SDRs with AI. SurFox qualifies cold leads via SMS automatically - 60–80% lower cost per lead. Your team only talks to hot prospects.',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@getSurFox",
    creator: "@getSurFox",
    title: 'SurFox AI | AI SDR Platform for SMS Lead Qualification',
    description: 'Replace expensive SDRs with AI. SurFox qualifies cold leads via SMS automatically - 60–80% lower cost per lead. Your team only talks to hot prospects.',
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager - lazyOnload to defer until idle */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TH5L46KW');
            `
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TH5L46KW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* SurFox Chat Widget */}
        <Script
          id="surfox-chat-widget"
          src="https://surfox.ai/chat-widget.js"
          data-widget-key="wk_5c3a82cabe46479da8d56b797483ac3c"
          data-supabase-url="https://wuuqrdlfgkasnwydyvgk.supabase.co"
          data-supabase-anon-key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dXFyZGxmZ2thc253eWR5dmdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2OTk4NjMsImV4cCI6MjA4NjA1OTg2M30.OmWp-AMlD2ZAADDr9oY9pEgMTI2mKXPYSCrFLZRqc9U"
          strategy="lazyOnload"
        />

        {/* Wrap client router hooks in Suspense per Next.js 15 requirement */}
        <Suspense fallback={null}>
          <GtmPageViewPusher />
        </Suspense>

        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
