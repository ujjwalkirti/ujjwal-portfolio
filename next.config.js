/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "firebasestorage.googleapis.com",
      "tghtovqmkscbuoezwsqx.supabase.co",
      'cdn.sanity.io'
    ],
  },
};

module.exports = nextConfig;
