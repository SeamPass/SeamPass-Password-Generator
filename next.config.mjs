/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: ["**/node_modules", "**/.git", "**/.next"],
    };
    return config;
  },
  experimental: {
    optimizePackageImports: ["hugeicons-react"],
  },
};

export default nextConfig;
