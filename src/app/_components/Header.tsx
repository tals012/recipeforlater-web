"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
    return (
        <header className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3">
                    <div className="relative w-9 h-9">
                        <Image src="/rfl.jpg" alt="Recipe For Later" fill className="object-cover rounded" priority />
                    </div>
                    <span className="font-semibold text-lg hidden sm:inline">Recipe For Later</span>
                </Link>

                <div className="flex items-center space-x-3">
                    <LanguageToggle />
                </div>
            </div>
        </header>
    );
}


