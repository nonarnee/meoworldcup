/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cataas.com', 'cdn2.thecatapi.com'],
  },
  env: {
    API_KEY: 'cf93b080-c841-44a4-9d01-469415efb5ae',
  },
}

module.exports = nextConfig
