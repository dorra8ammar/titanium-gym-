import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',  // ✅ AJOUTEZ CETTE LIGNE
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static9.depositphotos.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;