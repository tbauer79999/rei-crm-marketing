import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from './components/nav'
import Footer from './components/footer'
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
  // DO NOT set title or description here, so per-page <Head> wins
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
