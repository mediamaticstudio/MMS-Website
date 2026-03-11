/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mediamaticstudio.com',
            },
            {
                protocol: 'https',
                hostname: 'blog.mediamaticstudio.com',
            },
        ],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    },
    compiler: { removeConsole: process.env.NODE_ENV === 'production' },
    // experimental: { optimizeCss: true },
    async redirects() {
        return [
            // Add any 301 redirects from your .htaccess
            { source: '/old-path', destination: '/new-path', permanent: true }
        ]
    },
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig
