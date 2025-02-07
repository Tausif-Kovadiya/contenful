import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   domains: ["images.ctfassets.net"],
  // },  //Deprecated.

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '"images.ctfassets.net"',
        port: "",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
