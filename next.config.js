/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ],
    domains: ['res.cloudinary.com', 'avatars.githubusercontent.com'],
  }
}

module.exports = nextConfig
