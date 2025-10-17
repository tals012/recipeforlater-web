import "@/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Header } from "./_components/landing/Header";

export const metadata: Metadata = {
  title: "RecipeForLater",
  description: "Recipe sharing and discovery platform",
  icons: [{ rel: "icon", url: "/assets/icons/logo-favico.ico" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="flex flex-col min-h-screen">
        <TRPCReactProvider>
          <Header />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
