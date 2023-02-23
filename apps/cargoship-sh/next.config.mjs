import nextMDX from "@next/mdx";
import { withPlausibleProxy } from "next-plausible";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/cargoshipsh/cargoship",
        permanent: false,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: false,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/FJcdC8K6tf",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/cargoshipsh/cargoship",
        permanent: false,
      },
    ];
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

export default withPlausibleProxy({ customDomain: "https://plausible.stackocean.com" })(withMDX(nextConfig));
