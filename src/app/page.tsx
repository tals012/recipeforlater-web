'use client';

import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          {t('title')}
        </h1>

        <p className="text-xl text-center max-w-2xl">
          {t('description')}
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="/recipe/demo"
          >
            <h3 className="text-2xl font-bold">{t('recipeDemo')} →</h3>
            <div className="text-lg">
              {t('recipeDemoDesc')}
            </div>
          </Link>

          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="/auth/magic-link"
          >
            <h3 className="text-2xl font-bold">{t('magicLinkDemo')} →</h3>
            <div className="text-lg">
              {t('magicLinkDemoDesc')}
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
