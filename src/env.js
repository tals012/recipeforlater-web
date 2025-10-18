import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    RESEND_API_KEY: z.string().min(1),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_APP_NAME: z.string().optional(),
    NEXT_PUBLIC_APP_DESCRIPTION: z.string().optional(),
    NEXT_PUBLIC_IOS_APP_STORE_LINK: z.string().url().optional(),
    NEXT_PUBLIC_ANDROID_PLAY_STORE_LINK: z.string().url().optional(),
    NEXT_PUBLIC_APP_SCHEME: z.string().optional(),
    NEXT_PUBLIC_WEBSITE_DOMAIN: z.string().optional(),
    NEXT_PUBLIC_MAGIC_LINK_EXPIRY: z.string().optional().transform(Number),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    NEXT_PUBLIC_IOS_APP_STORE_LINK: process.env.NEXT_PUBLIC_IOS_APP_STORE_LINK,
    NEXT_PUBLIC_ANDROID_PLAY_STORE_LINK:
      process.env.NEXT_PUBLIC_ANDROID_PLAY_STORE_LINK,
    NEXT_PUBLIC_APP_SCHEME: process.env.NEXT_PUBLIC_APP_SCHEME,
    NEXT_PUBLIC_WEBSITE_DOMAIN: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN,
    NEXT_PUBLIC_MAGIC_LINK_EXPIRY: process.env.NEXT_PUBLIC_MAGIC_LINK_EXPIRY,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
