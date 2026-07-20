/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats; AVIF first, WebP as the fallback.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
