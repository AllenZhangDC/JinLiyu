import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index_zh.html",
        destination: "/zh",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
