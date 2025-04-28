/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/recipe/demo",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/auth/magic-link",
        destination: "/auth/magic-link",
      },
      {
        source: "/recipe/:path*",
        destination: "/recipe/:path*",
      },
    ];
  },
};

export default config;
