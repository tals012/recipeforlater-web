'use client';

import React from 'react';
import Script from 'next/script';

const CSE_ID = '24bca6403c0d04411';

export default function SearchPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <Script
                id="google-cse"
                src={`https://cse.google.com/cse.js?cx=${CSE_ID}`}
                strategy="afterInteractive"
            />
            <div className="gcse-search" />
        </div>
    );
}


