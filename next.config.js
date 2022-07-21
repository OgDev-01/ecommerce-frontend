/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
module.exports = { nextConfig };
