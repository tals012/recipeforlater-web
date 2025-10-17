import "@/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Header } from "./_components/landing/Header";

export const metadata: Metadata = {
  metadataBase: new URL('https://recipeforlater.com'),
  title: {
    default: "RecipeForLater - Save, Organize & Cook Any Recipe with AI Voice Assistant",
    template: "%s | RecipeForLater"
  },
  description: "The ultimate recipe app with AI-powered voice assistant, diet conversions, and smart meal planning. Save recipes from any website, Instagram, TikTok. Cook hands-free with voice control. Free 14-day trial.",
  keywords: [
    "recipe app",
    "recipe organizer",
    "cooking app",
    "voice assistant cooking",
    "hands-free cooking",
    "AI recipe app",
    "meal planner",
    "diet conversion",
    "keto recipes",
    "vegan recipes",
    "gluten-free recipes",
    "recipe importer",
    "save recipes",
    "cooking voice control",
    "recipe from Instagram",
    "recipe from TikTok",
    "smart grocery list",
    "recipe translation",
    "nutrition analyzer",
    "share recipes",
    "recipe collections"
  ],
  authors: [{ name: "RecipeForLater Team" }],
  creator: "RecipeForLater",
  publisher: "RecipeForLater",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: [
    { rel: "icon", url: "/assets/icons/logo-favico.ico" },
    { rel: "apple-touch-icon", url: "/assets/icons/logo-favico.ico" }
  ],
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://recipeforlater.com",
    title: "RecipeForLater - Save, Organize & Cook Any Recipe with AI Voice Assistant",
    description: "The ultimate recipe app with AI-powered voice assistant, diet conversions, and smart meal planning. Save recipes from any website, Instagram, TikTok. Cook hands-free with voice control.",
    siteName: "RecipeForLater",
    images: [
      {
        url: "/assets/rfl.jpg",
        width: 1200,
        height: 630,
        alt: "RecipeForLater - AI-Powered Recipe App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RecipeForLater - Save, Organize & Cook Any Recipe with AI Voice Assistant",
    description: "The ultimate recipe app with AI-powered voice assistant, diet conversions, and smart meal planning. Cook hands-free with voice control.",
    images: ["/assets/rfl.jpg"],
    creator: "@recipeforlater",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://recipeforlater.com",
  },
  verification: {
    // google: "your-google-site-verification-code", // Add when you have it
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  };
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Preconnect to external resources for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for other domains */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* AI/LLM discovery */}
        <link rel="ai" href="/ai.txt" type="text/plain" />
        <link rel="llms" href="/llms.txt" type="text/plain" />
        <meta name="llms-txt" content="/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "RecipeForLater",
              "applicationCategory": "LifestyleApplication",
              "operatingSystem": "iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "priceValidUntil": "2025-12-31",
                "description": "14-day free trial"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              },
              "description": "The ultimate recipe app with AI-powered voice assistant, diet conversions, and smart meal planning. Save recipes from any website, Instagram, TikTok.",
              "featureList": [
                "AI Voice Assistant",
                "Universal Recipe Importer",
                "Diet Conversions",
                "Smart Meal Planner",
                "Grocery List",
                "Recipe Translation",
                "Nutrition Analysis",
                "Share Collections"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "RecipeForLater",
              "url": "https://recipeforlater.com",
              "logo": "https://recipeforlater.com/assets/minimal_logo.png",
              "sameAs": [
                "https://www.youtube.com/@recipeforlater",
                "https://www.instagram.com/recipeforlater",
                "https://www.tiktok.com/@recipeforlater",
                "https://www.facebook.com/recipeforlater"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "support@recipeforlater.com"
              }
            })
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <TRPCReactProvider>
          <Header />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
