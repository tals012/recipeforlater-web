'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleOAuthCallback() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const idToken = searchParams.get('id_token');

        if (idToken) {
            // Redirect to mobile app
            const deepLink = `recipeforlater://auth/google-callback?id_token=${idToken}`;
            window.location.href = deepLink;
        }
    }, [searchParams]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center p-8">
                <h1 className="text-2xl font-bold mb-4">מעביר אותך לאפליקציה...</h1>
                <p className="text-gray-600 mb-6">אם האפליקציה לא נפתחת אוטומטית, לחץ כאן:</p>
                <a
                    href={`recipeforlater://auth/google-callback?id_token=${searchParams.get('id_token')}`}
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                    פתח את האפליקציה
                </a>
            </div>
        </div>
    );
} 