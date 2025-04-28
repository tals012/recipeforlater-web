/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/auth/magic-link",
        destination: "/auth/magic-link",
      },
      {
        source: "/recipe/demo",
        destination: "/recipe/demo",
      },
      {
        source: "/recipe/:path*",
        destination: "/recipe/:path*",
      },
      {
        source: "/.well-known/apple-app-site-association",
        destination: "/api/.well-known/apple-app-site-association",
      },
      {
        source: "/.well-known/assetlinks.json",
        destination: "/api/.well-known/assetlinks.json",
      },
    ];
  },
  // Ensure trailing slashes are handled consistently
  trailingSlash: false,
  // Ensure we're using the correct base path
  basePath: "",
  // Enable static page generation for these routes
  async generateStaticParams() {
    return {
      "/auth/magic-link": true,
      "/recipe/demo": true,
    };
  },
};

export default config;
