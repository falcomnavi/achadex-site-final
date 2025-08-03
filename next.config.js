/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs']
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config) => {
    config.externals = [...config.externals, 'bcryptjs']
    return config
  },
}

module.exports = nextConfig 