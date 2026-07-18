import type { Metadata } from "next";
import { Sora, DM_Sans, Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import Nav from "./components/nav";
import Footer from "./components/footer";
import "./globals.css";
import { Suspense } from "react";
import GtmPageViewPusher from "./GtmPageViewPusher";
import TimeOnPageTracker from "./TimeOnPageTracker";

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

// Homepage redesign ("Thread") typeface trio, exposed as CSS variables.
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.getsurfox.com"),
  title: {
    template: '%s | SurFox AI',
    default: 'SurFox AI | SMS Lead Qualification at SMB Pricing',
  },
  description: 'SurFox AI qualifies your contact list via SMS. Upload thousands of leads, AI works every conversation, your team only talks to the contacts ready to buy. Real conversational AI at SMB pricing.',
  keywords: ['SMS lead qualification', 'AI lead qualification software', 'automated lead qualification', 'AI SMS for real estate', 'AI SMS for staffing', 'cold list activation', 'speed to lead AI', 'real estate wholesaler SMS', 'conversational AI SMS', 'lead scoring software'],
  authors: [{ name: 'SurFox Team' }],
  creator: 'SurFox AI',
  publisher: 'SurFox AI',
  openGraph: {
    siteName: "SurFox AI",
    type: "website",
    url: "https://www.getsurfox.com",
    title: 'SurFox AI | SMS Lead Qualification at SMB Pricing',
    description: 'SurFox AI qualifies your contact list via SMS. Upload thousands of leads, AI works every conversation, your team only talks to the contacts ready to buy. Real conversational AI at SMB pricing.',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.getsurfox.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'SurFox AI - SMS Lead Qualification Platform',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ['https://www.getsurfox.com/og-default.png'],
    title: 'SurFox AI | SMS Lead Qualification at SMB Pricing',
    description: 'SurFox AI qualifies your contact list via SMS. Upload thousands of leads, AI works every conversation, your team only talks to the contacts ready to buy. Real conversational AI at SMB pricing.',
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
      <body className={`${sora.variable} ${dmSans.variable} ${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`} style={{ fontFamily: 'var(--font-ibm-plex-sans)' }}>
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

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '328435827569053');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=328435827569053&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

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
