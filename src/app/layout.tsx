import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from './components/nav'
import Footer from './components/footer'
import "./globals.css";
import ClientPostHogWrapper from "./lib/ClientPostHogWrapper";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientPostHogWrapper />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
