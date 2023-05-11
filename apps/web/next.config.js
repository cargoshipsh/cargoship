/**
 * @type {import('next').NextConfig}
 */
require("dotenv").config({ path: "../../.env" });

/* if (!process.env.NEXTAUTH_SECRET) throw new Error("Please set NEXTAUTH_SECRET"); */

module.exports = {
  experimental: {
    appDir: true,
  },
  output: "standalone",
  transpilePackages: ["@cargoship/database", "@cargoship/ee", "@cargoship/ui", "@cargoship/lib"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), "@prisma/client"];
    // Important: return the modified config
    return config;
  },
};
