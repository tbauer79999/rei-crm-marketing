import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Nav from "./components/nav";
import Footer from "./components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // keep only site-wide, non-conflicting defaults
  metadataBase: new URL("https://www.getsurfox.com"),
  openGraph: {
    siteName: "SurFox",
    type: "website",
    url: "https://www.getsurfox.com",
  },
  twitter: {
    card: "summary_large_image",
    site: "@getSurFox",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Google Tag Manager */}
      <Script 
        id="gtm-script" 
        strategy="beforeInteractive"
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

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Rest of your body content */}
      </body>
    </html>
  );
}