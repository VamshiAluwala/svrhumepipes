/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "svrhumepipes.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/hume-pipes", destination: "/products/rcc-hume-pipes", permanent: true },
      { source: "/rcc-hume-pipes", destination: "/products/rcc-hume-pipes", permanent: true },
      { source: "/products/hume-pipes", destination: "/products/rcc-hume-pipes", permanent: true },
      { source: "/rcc-pipes", destination: "/products/rcc-hume-pipes", permanent: true },
      { source: "/product", destination: "/products", permanent: true },
      { source: "/services", destination: "/products", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
        ],
      },
    ];
  },
};

export default nextConfig;
