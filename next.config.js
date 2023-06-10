/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: "/_next/image",
    loader: "default",
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: ["image/webp"],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
    unoptimized: false,
    domains: ["res.cloudinary.com", "https://res.cloudinary.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};
const { withSuperjson } = require("next-superjson");
module.exports = withSuperjson()(nextConfig);

module.exports = nextConfig;
