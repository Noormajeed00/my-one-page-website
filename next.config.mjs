/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// next.config.js
module.exports = {
    reactStrictMode: true,
    experimental: {
      appDir: true, // This is optional and only if you're using the `/app` directory
    },
  };
  