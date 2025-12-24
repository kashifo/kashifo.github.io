import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "github-readme-stats.vercel.app" },
      { protocol: "https", hostname: "github-readme-stats-plus.vercel.app" },
      { protocol: "https", hostname: "kashifo-github-readme-stats.vercel.app" },
      { protocol: "https", hostname: "github-contributions.vercel.app" },
      { protocol: "https", hostname: "github-readme-stackoverflow-kashifo.vercel.app" },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
