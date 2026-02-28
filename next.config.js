const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cloudflare Pages does not support Next.js image optimisation by default.
    // Use unoptimized mode — images still load correctly, just without server-side resizing.
    unoptimized: true,
  },
}

// Only run in development
if (process.env.NODE_ENV === 'development') {
  ;(async () => {
    await setupDevPlatform()
  })()
}

module.exports = nextConfig
