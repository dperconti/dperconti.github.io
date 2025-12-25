/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Disable automatic static optimization data fetching for static export
  generateBuildId: async () => {
    return 'static-build'
  },
  webpack: (config, { isServer }) => {
    // Ensure Spline runtime is properly bundled
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;

