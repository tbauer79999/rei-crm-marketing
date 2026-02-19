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
        source: '/compare/spara-vs-qualified',
        destination: '/compare/surfox-vs-spara?ref=spara-qualified',
        permanent: false,
      },
      {
        source: '/compare/spara-vs-salesmonk',
        destination: '/compare/surfox-vs-spara?ref=spara-salesmonk',
        permanent: false,
      },
      {
        source: '/compare/spara-vs-drift',
        destination: '/compare/surfox-vs-spara?ref=spara-drift',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
