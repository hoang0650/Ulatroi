/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  swcMinify: true,
  images: {
    domains: ['cdn.ulatroi.net','i.pinimg.com'],
  },
  experimental: {
    images: {
        layoutRaw: true,
        allowFutureImage: true
    }
},
}

module.exports = nextConfig
