import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './nav'
import Footer from './footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SurFox - Messaging Intelligence Platform',
  description: 'The world\'s first Messaging Intelligence platform that reads buyer psychology and converts conversations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}