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
  webpack: (config) => {
    config.externals = [...(config.externals || []), "@prisma/client"];
    // Important: return the modified config
    return config;
  },
};
