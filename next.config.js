const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/pagead2\.googlesyndication\.com\/.*/,
      handler: 'NetworkOnly',
      options: {
        cacheName: 'google-adsense',
      },
    },
    {
      urlPattern: /\.(?:css|less|scss|sass)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'css-cache',
      },
    },
    {
      urlPattern: /_next\/data\/.+\/.+\.json$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'next-data',
      },
    },
  ],
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['ca-central-1.graphassets.com', 'ca-central-1.cdn.hygraph.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
}

module.exports = withPWA(nextConfig)
