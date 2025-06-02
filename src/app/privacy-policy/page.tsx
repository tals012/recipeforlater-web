'use client';

import { useLanguage } from "@/hooks/useLanguage";

export default function PrivacyPolicyPage() {
    const { t, language } = useLanguage();

    return (
        <div className={`min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ${language === 'he' ? 'rtl' : 'ltr'}`}>
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                        {t('privacy.title')}
                    </h1>

                    <p className="text-gray-600 text-center mb-8">
                        {t('privacy.lastUpdated')}: {new Date().toLocaleDateString(language === 'he' ? 'he-IL' : 'en-US')}
                    </p>

                    <div className="prose prose-lg max-w-none">
                        {/* Introduction */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('privacy.introduction.title')}</h2>
                            <p className="text-gray-700 leading-relaxed">{t('privacy.introduction.content')}</p>
                        </section>

                        {/* Data Collection */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('privacy.dataCollection.title')}</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('privacy.dataCollection.providedInfo')}</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                                {(t('privacy.dataCollection.providedList') as unknown as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('privacy.dataCollection.automaticInfo')}</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {(t('privacy.dataCollection.automaticList') as unknown as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Data Use */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('privacy.dataUse.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('privacy.dataUse.content')}</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {(t('privacy.dataUse.list') as unknown as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Data Sharing */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('privacy.dataSharing.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('privacy.dataSharing.content')}</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {(t('privacy.dataSharing.list') as unknown as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Data Security */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('privacy.dataSecurity.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('privacy.dataSecurity.content')}</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {(t('privacy.dataSecurity.list') as unknown as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* User Rights */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('privacy.userRights.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('privacy.userRights.content')}</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {(t('privacy.userRights.list') as unknown as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Data Retention */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('privacy.dataRetention.title')}</h2>
                            <p className="text-gray-700">{t('privacy.dataRetention.content')}</p>
                        </section>

                        {/* Third Party Services */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('privacy.thirdPartyServices.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('privacy.thirdPartyServices.content')}</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                {(t('privacy.thirdPartyServices.list') as unknown as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p className="text-gray-600 italic">{t('privacy.thirdPartyServices.note')}</p>
                        </section>

                        {/* Minors */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('privacy.minors.title')}</h2>
                            <p className="text-gray-700">{t('privacy.minors.content')}</p>
                        </section>

                        {/* Policy Changes */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('privacy.policyChanges.title')}</h2>
                            <p className="text-gray-700">{t('privacy.policyChanges.content')}</p>
                        </section>

                        {/* Contact */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('privacy.contact.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('privacy.contact.content')}</p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700 mb-2">{t('privacy.contact.email')}</p>
                                <p className="text-gray-700">{t('privacy.contact.address')}</p>
                            </div>
                        </section>

                        {/* Language */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('privacy.language.title')}</h2>
                            <p className="text-gray-700">{t('privacy.language.content')}</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
} 