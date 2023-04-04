/**
 * @type {import('next').NextConfig}
 */

var path = require("path");

module.exports = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  transpile: ["@cargoship/database"],
  webpack: (config) => {
    config.externals = [...(config.externals || []), "@prisma/client"];
    // Important: return the modified config
    return config;
  },
  /* async redirects() {
    return [
      {
        source: "/",
        destination: "/app/",
        permanent: false,
      },
    ];
  }, */
  env: {
    NEXT_PUBLIC_CARGOSHIP_URL: process.env.CARGOSHIP_URL,
    NEXTAUTH_URL: process.env.CARGOSHIP_URL,
  },
};
