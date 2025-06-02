'use client';

import { useLanguage } from "@/hooks/useLanguage";

export default function TermsOfServicePage() {
    const { t, language } = useLanguage();

    return (
        <div className={`min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ${language === 'he' ? 'rtl' : 'ltr'}`}>
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                        {t('terms.title')}
                    </h1>

                    <p className="text-gray-600 text-center mb-8">
                        {t('terms.lastUpdated')}: {new Date().toLocaleDateString(language === 'he' ? 'he-IL' : 'en-US')}
                    </p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        {/* Acceptance */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('terms.acceptance.title')}</h2>
                            <p className="text-gray-700 leading-relaxed">{t('terms.acceptance.content')}</p>
                        </section>

                        {/* Service Description */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('terms.serviceDescription.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('terms.serviceDescription.content')}</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {(t('terms.serviceDescription.list') as unknown as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Registration */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('terms.registration.title')}</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('terms.registration.eligibility')}</h3>
                            <p className="text-gray-700 mb-6">{t('terms.registration.eligibilityContent')}</p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('terms.registration.responsibility')}</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {(t('terms.registration.responsibilityList') as unknown as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Usage */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('terms.usage.title')}</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('terms.usage.permitted')}</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                                {(t('terms.usage.permittedList') as unknown as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('terms.usage.prohibited')}</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {(t('terms.usage.prohibitedList') as unknown as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Content */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('terms.content.title')}</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('terms.content.ownership')}</h3>
                            <p className="text-gray-700 mb-6">{t('terms.content.ownershipContent')}</p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('terms.content.license')}</h3>
                            <p className="text-gray-700 mb-6">{t('terms.content.licenseContent')}</p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('terms.content.responsibility')}</h3>
                            <p className="text-gray-700">{t('terms.content.responsibilityContent')}</p>
                        </section>

                        {/* Privacy */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('terms.privacy.title')}</h2>
                            <p className="text-gray-700">{t('terms.privacy.content')}</p>
                        </section>

                        {/* Availability */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('terms.availability.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('terms.availability.content')}</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {(t('terms.availability.list') as unknown as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Liability */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('terms.liability.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('terms.liability.content')}</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                {(t('terms.liability.list') as unknown as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p className="text-gray-700 font-semibold">{t('terms.liability.limitation')}</p>
                        </section>

                        {/* Termination */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('terms.termination.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('terms.termination.content')}</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                {(t('terms.termination.list') as unknown as string[]).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <p className="text-gray-700">{t('terms.termination.dataRetrieval')}</p>
                        </section>

                        {/* Changes */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('terms.changes.title')}</h2>
                            <p className="text-gray-700">{t('terms.changes.content')}</p>
                        </section>

                        {/* Service End */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('terms.serviceEnd.title')}</h2>
                            <p className="text-gray-700">{t('terms.serviceEnd.content')}</p>
                        </section>

                        {/* Law */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('terms.law.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('terms.law.content')}</p>
                            <p className="text-gray-700">{t('terms.law.mediation')}</p>
                        </section>

                        {/* General */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('terms.general.title')}</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('terms.general.severability')}</h3>
                            <p className="text-gray-700 mb-6">{t('terms.general.severabilityContent')}</p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('terms.general.waiver')}</h3>
                            <p className="text-gray-700 mb-6">{t('terms.general.waiverContent')}</p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('terms.general.assignment')}</h3>
                            <p className="text-gray-700">{t('terms.general.assignmentContent')}</p>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('terms.contact.title')}</h2>
                            <p className="text-gray-700 mb-4">{t('terms.contact.content')}</p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700 mb-2">{t('terms.contact.email')}</p>
                                <p className="text-gray-700">{t('terms.contact.address')}</p>
                            </div>
                        </section>

                        {/* Language */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('terms.language.title')}</h2>
                            <p className="text-gray-700">{t('terms.language.content')}</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
} 