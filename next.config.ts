import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    // Enable image optimization
    formats: ['image/webp', 'image/avif'],
    // Configure image sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable optimization for external images if needed
    remotePatterns: [],
  },
  // Enable compression
  compress: true,
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Bundle analyzer configuration
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: any) => {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: true,
        })
      );
      return config;
    },
  }),
};

export default withNextIntl(nextConfig);
