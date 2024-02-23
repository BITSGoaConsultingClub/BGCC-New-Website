/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.dribbble.com", "i.imgur.com"],
  },
};

module.exports = nextConfig;
