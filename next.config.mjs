/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // SSG 設定
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
