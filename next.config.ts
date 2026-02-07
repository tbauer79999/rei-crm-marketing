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
};

export default nextConfig;
