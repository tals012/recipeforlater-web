import "@/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: "RecipeForLater",
  description: "Recipe sharing and discovery platform",
  icons: [{ rel: "icon", url: "/assets/icons/logo-favico.ico" }],
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
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
