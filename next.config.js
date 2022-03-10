/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.google.com", "crimons.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
