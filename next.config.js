/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "tghtovqmkscbuoezwsqx.supabase.co" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
};

module.exports = nextConfig;
