'use client';

import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Language } from '@/lib/i18n';
import { getTranslation } from '@/lib/i18n';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('preferred-language') as Language;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'he')) {
            setLanguageState(savedLanguage);
        } else {
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.includes('he') || browserLang.includes('iw')) {
                setLanguageState('he');
            } else {
                setLanguageState('en');
            }
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('preferred-language', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    };

    const t = (key: string) => getTranslation(language, key);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
} 