import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // 静的配信ではNext.jsの画像変換サーバーが使えないため必須
  },
};

export default nextConfig;
