'use client';

import React from 'react';

const CSE_ID = '24bca6403c0d04411';

export default function SearchPage() {
    React.useEffect(() => {
        const w = window as any;
        const container = document.getElementById('gcse-container');
        if (container && !container.querySelector('.gcse-search')) {
            const placeholder = document.createElement('div');
            placeholder.className = 'gcse-search';
            placeholder.setAttribute('data-gname', 'rfl');
            container.appendChild(placeholder);
        }

        w.__gcse = w.__gcse || {};
        w.__gcse.parsetags = 'onload';
        w.__gcse.callback = () => {
            try {
                const googleObj = (window as any).google;
                if (!googleObj?.search?.cse?.element) return;
                const params = new URLSearchParams(window.location.search);
                const q = params.get('q');
                const el = googleObj.search.cse.element.getElement('rfl')
                    || (googleObj.search.cse.element.getAllElements && googleObj.search.cse.element.getAllElements()[0]);
                if (q && el && el.execute) {
                    el.execute(q);
                }
                // Fallback: if auto-parse missed, render explicitly
                const hasAny = googleObj.search.cse.element.getAllElements && googleObj.search.cse.element.getAllElements().length > 0;
                if (!hasAny) {
                    googleObj.search.cse.element.render(
                        { div: 'gcse-container', tag: 'search' },
                        { gname: 'rfl' }
                    );
                }
            } catch { }
        };

        if (!document.getElementById('gcse-script')) {
            const script = document.createElement('script');
            script.id = 'gcse-script';
            script.src = `https://cse.google.com/cse.js?cx=${CSE_ID}&hl=en`;
            script.async = true;
            document.body.appendChild(script);
        } else {
            // If already present (Fast Refresh), trigger callback on next tick
            setTimeout(() => w.__gcse && w.__gcse.callback && w.__gcse.callback(), 0);
        }
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-4">
                    <img
                        src="/rfl.jpg"
                        alt="Recipe For Later logo"
                        className="h-16 w-auto rounded"
                    />
                    <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        alt="Google logo"
                        className="h-8 w-auto"
                        referrerPolicy="no-referrer"
                    />
                </div>
                <h1 className="mt-4 text-2xl font-semibold">
                    Search for a recipe and import it
                </h1>
            </div>
            <div className="rfl-cse" suppressHydrationWarning>
                <div id="gcse-container" style={{ minHeight: '3.5rem' }} />
            </div>
            <style jsx global>{`
                /* Minimal, non-intrusive styles to avoid hiding the widget */
                .rfl-cse { display: block; }
                .rfl-cse #gcse-container { display: block; min-height: 3.5rem; }
                .rfl-cse .gsc-control-cse { margin: 0 auto !important; max-width: 48rem; }
                /* Prevent iOS Safari focus zoom by ensuring >=16px font size */
                .rfl-cse .gsc-input-box { font-size: 16px !important; }
                .rfl-cse input.gsc-input { font-size: 16px !important; }
                /* Ensure input text and placeholder are visible */
                .rfl-cse input.gsc-input,
                .rfl-cse .gsc-input-box input,
                .rfl-cse .gsib_a input { color: #111827 !important; -webkit-text-fill-color: #111827 !important; caret-color: #111827 !important; }
                .rfl-cse input.gsc-input::placeholder,
                .rfl-cse .gsc-input-box input::placeholder,
                .rfl-cse .gsib_a input::placeholder { color: #6b7280 !important; opacity: 1 !important; }
            `}</style>
        </div>
    );
}


