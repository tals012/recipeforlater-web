'use client';

import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageToggle from "./LanguageToggle";

export default function Footer() {
    const { t, language } = useLanguage();

    return (
        <footer className="bg-gray-900 text-white py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Company Info */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-2">{t('title')}</h3>
                        <p className="text-gray-400 text-sm max-w-md">
                            {t('description')}
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                        <LanguageToggle />
                        <div className="flex space-x-6">
                            <Link
                                href="/privacy-policy"
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                {t('privacyPolicy')}
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                {t('termsOfService')}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-6 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 RecipeForLater. {t('allRightsReserved')}.
                    </p>
                </div>
            </div>
        </footer>
    );
} 