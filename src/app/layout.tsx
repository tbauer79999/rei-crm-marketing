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

console.log("hello")

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
