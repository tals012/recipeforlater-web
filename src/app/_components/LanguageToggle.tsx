'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === 'en' ? 'he' : 'en')}
            className="flex items-center space-x-2 px-3 py-1 text-sm bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors"
            aria-label="Toggle language"
        >
            <span className="text-lg">🌐</span>
            <span>{language === 'en' ? 'עברית' : 'English'}</span>
        </button>
    );
} 