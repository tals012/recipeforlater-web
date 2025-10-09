'use client';

import React from 'react';
import Script from 'next/script';

const CSE_ID = '24bca6403c0d04411';

export default function SearchPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="text-center mb-6">
                <img
                    src="/rfl.jpg"
                    alt="Recipe For Later logo"
                    className="mx-auto h-16 w-auto rounded"
                />
                <h1 className="mt-4 text-2xl font-semibold">
                    Search for a recipe and import it
                </h1>
            </div>
            <Script
                id="google-cse"
                src={`https://cse.google.com/cse.js?cx=${CSE_ID}`}
                strategy="afterInteractive"
                onLoad={() => {
                    const executeQueryIfPresent = () => {
                        const params = new URLSearchParams(window.location.search);
                        const q = params.get('q');
                        const googleObj = (window as any).google;
                        if (!q || !googleObj || !googleObj.search || !googleObj.search.cse || !googleObj.search.cse.element) return false;
                        const el = googleObj.search.cse.element.getElement('standard0');
                        if (!el) return false;
                        el.execute(q);
                        return true;
                    };
                    if (executeQueryIfPresent()) return;
                    const start = Date.now();
                    const timer = setInterval(() => {
                        if (executeQueryIfPresent() || Date.now() - start > 3000) {
                            clearInterval(timer);
                        }
                    }, 100);
                }}
            />
            <div className="rfl-cse">
                <div className="gcse-search" />
            </div>
            <style jsx global>{`
                /* Scope all overrides under our wrapper to avoid bleeding */
                .rfl-cse .gsc-control-cse {
                    background: transparent !important;
                    border: none !important;
                    padding: 0 !important;
                    margin: 0 auto !important;
                    max-width: 48rem; /* ~768px */
                }

                .rfl-cse .gsc-search-box-tools .gsc-search-box .gsc-input {
                    padding: 0 !important;
                }
                .rfl-cse .gsc-input-box {
                    border-radius: 0.75rem !important; /* rounded-xl */
                    border: 1px solid #e5e7eb !important; /* gray-200 */
                    box-shadow: none !important;
                    background: #ffffff !important;
                }
                .rfl-cse input.gsc-input {
                    padding: 0.75rem 1rem !important; /* py-3 px-4 */
                    height: 3rem !important;
                    line-height: 1.5rem !important;
                    color: #111827 !important; /* gray-900 */
                    background: transparent !important;
                }
                .rfl-cse input.gsc-input:focus {
                    outline: none !important;
                }
                /* focus ring */
                .rfl-cse .gsc-input-box:focus-within {
                    border-color: #2e026d !important;
                    box-shadow: 0 0 0 3px rgba(46, 2, 109, 0.25) !important;
                }

                /* Search button */
                .rfl-cse .gsc-search-button-v2,
                .rfl-cse .gsc-search-button-v2:hover,
                .rfl-cse .gsc-search-button-v2:focus {
                    background-color: #2e026d !important;
                    border-color: #2e026d !important;
                    border-radius: 0.75rem !important;
                    height: 3rem !important;
                    padding: 0 1rem !important;
                }
                .rfl-cse .gsc-search-button-v2 svg,
                .rfl-cse .gsc-search-button-v2 .gsc-search-button-v2-icon {
                    filter: brightness(0) invert(1);
                }

                /* Results container centering */
                .rfl-cse .gsc-results-wrapper-overlay,
                .rfl-cse .gsc-results-wrapper-visible,
                .rfl-cse .gsc-wrapper {
                    margin-left: auto !important;
                    margin-right: auto !important;
                    max-width: 48rem !important;
                }

                /* Result cards */
                .rfl-cse .gsc-webResult.gsc-result,
                .rfl-cse .gsc-imageResult {
                    border: 1px solid #e5e7eb !important; /* gray-200 */
                    border-radius: 0.75rem !important;
                    padding: 1rem !important;
                    background: #ffffff !important;
                }
                .rfl-cse .gs-title a {
                    color: #2e026d !important; /* brand purple */
                }
                .rfl-cse .gs-title a:hover {
                    text-decoration: underline !important;
                }
                .rfl-cse .gsc-url-top,
                .rfl-cse .gsc-url-bottom {
                    color: #6b7280 !important; /* gray-500 */
                }

                /* Pagination */
                .rfl-cse .gsc-cursor-box {
                    display: flex !important;
                    justify-content: center !important;
                    gap: 0.5rem !important;
                }
                .rfl-cse .gsc-cursor-page {
                    padding: 0.25rem 0.5rem !important;
                    border-radius: 0.375rem !important;
                }
                .rfl-cse .gsc-cursor-current-page {
                    background: #2e026d !important;
                    color: white !important;
                }
            `}</style>
        </div>
    );
}


