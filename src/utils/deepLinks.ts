// DeepLinks with includes

import { env } from "@/env";

export const generateDeepLink = (path: string, params?: Record<string, string>) => {
  const baseUrl = env.NEXT_PUBLIC_WEBSITE_DOMAIN;
  const appScheme = "recipeforlater"; // Hardcoded scheme for now
  
  // Create web URL
  const webUrl = new URL(path, baseUrl);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      webUrl.searchParams.append(key, value);
    });
  }

  // Create app deep link
  const appUrl = `${appScheme}://${path}`;
  if (params) {
    const appParams = new URLSearchParams(params);
    return `${appUrl}?${appParams.toString()}`;
  }

  return {
    webUrl: webUrl.toString(),
    appUrl,
  };
};

export const generateMagicLink = (token: string, email: string) => {
  return generateDeepLink("auth/magic-link", { token, email });
};

export const generateRecipeLink = (id: string) => {
  return generateDeepLink(`recipe/${id}`);
};

export const generateResetPasswordLink = (token: string, email: string) => {
  return generateDeepLink("auth/reset-password", { token, email });
};

export const generateGoogleOAuthLink = (code: string) => {
  return `recipeforlater://auth/google-callback?code=${code}`;
};
