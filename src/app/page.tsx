'use client';

import Link from "next/link";

export default function HomePage() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-brand-bgTop to-brand-bgBottom text-gray-900">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">RecipeForLater</h1>

        <p className="text-xl text-center max-w-2xl">Save recipes for later, organized perfectly</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white p-4 hover:bg-brand-muted/60 shadow-sm border border-black/5"
            href="/recipe/demo"
          >
            <h3 className="text-2xl font-bold">Recipe Demo →</h3>
            <div className="text-lg">Try out our recipe deep linking feature</div>
          </Link>

          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white p-4 hover:bg-brand-muted/60 shadow-sm border border-black/5"
            href="/auth/magic-link"
          >
            <h3 className="text-2xl font-bold">Magic Link Demo →</h3>
            <div className="text-lg">Try our magic link authentication</div>
          </Link>
        </div>
      </div>
    </main>
  );
}
