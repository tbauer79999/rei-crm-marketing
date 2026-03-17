import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize package imports for better tree-shaking
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Compiler optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      {
        source: '/engage',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/conversation-intelligence-deep-dive',
        destination: '/blog/ai-sdr-vs-hiring-sdr-roi-2026',
        permanent: true,
      },
      {
        source: '/blog/roi-conversation-intelligence',
        destination: '/roi',
        permanent: true,
      },
      {
        source: '/compare/spara-vs-qualified',
        destination: '/compare/surfox-vs-spara?ref=spara-qualified',
        permanent: true,
      },
      {
        source: '/compare/spara-vs-salesmonk',
        destination: '/compare/surfox-vs-spara?ref=spara-salesmonk',
        permanent: true,
      },
      {
        source: '/compare/spara-vs-drift',
        destination: '/compare/surfox-vs-spara?ref=spara-drift',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
