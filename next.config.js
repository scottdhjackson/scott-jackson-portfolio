/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Ensure trailing slashes are consistent
  trailingSlash: false,
}

module.exports = nextConfig
