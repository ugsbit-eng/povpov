import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slelguoygbfzlpylpxfs.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'fonts.googleapis.com',
      },
      {
        protocol: 'http',
        hostname: 'jeweethetzelftoch.ct.ws',
      },
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack: (config, { dev, isServer }) => {
    // Add component tagger loader for vibe annotations (development only, client-side only)
    if (dev && !isServer) {
      config.module.rules.push({
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js'),
          },
        ],
      });
    }
    return config;
  },
};

export default nextConfig;
