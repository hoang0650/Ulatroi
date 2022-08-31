/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportTrailingSlash: true,
  exportPathMap: function(){
    return {
      '/': {page: '/'}
    }
  },
  swcMinify: true,
  future: { webpack5: true },
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
