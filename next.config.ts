// next.config.mjs
import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "u81ejkwpsfwmax3s.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withNextVideo(nextConfig);
