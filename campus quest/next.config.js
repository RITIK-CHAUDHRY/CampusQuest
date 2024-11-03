/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  // Remove static export for auth to work
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;