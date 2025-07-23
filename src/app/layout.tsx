'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from './components/nav'
import Footer from './components/footer'
import "./globals.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "./lib/posthog";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SurFox — Convert Cold Leads Into Hot Conversations with AI",
  description: "The world's first Messaging Intelligence platform that reads buyer psychology and converts conversations into revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    posthog.capture('$pageview');
  }, [pathname]);

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
