/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.edgestore.dev',
        port: '',
        pathname: '/**'
      }
    ],
    domains: ['files.edgestore.dev']
  }
}

module.exports = nextConfig
