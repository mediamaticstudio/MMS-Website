const nextConfig = {
  trailingSlash: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mediamaticstudio.com",
      },
      {
        protocol: "https",
        hostname: "blog.mediamaticstudio.com",
      },
    ],
  },

  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;