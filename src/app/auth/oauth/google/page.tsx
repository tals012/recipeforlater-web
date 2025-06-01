'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function GoogleOAuthCallbackContent() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const code = searchParams.get('code');
        const error = searchParams.get('error');

        if (error) {
            // הפניה לאפליקציה עם שגיאה
            window.location.href = `recipeforlater://auth/google-callback?error=${error}`;
        } else if (code) {
            // הפניה לאפליקציה עם הקוד
            window.location.href = `recipeforlater://auth/google-callback?code=${code}`;
        } else {
            // אין קוד ואין שגיאה
            window.location.href = `recipeforlater://auth/google-callback?error=no_code`;
        }
    }, [searchParams]);

    const code = searchParams.get('code');
    const error = searchParams.get('error');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center p-8">
                <h2 className="text-2xl font-bold mb-4">מתחבר לחשבון Google...</h2>
                <p className="text-gray-600 mb-6">אנא המתן, אנחנו מעבירים אותך חזרה לאפליקציה</p>

                {error && (
                    <a
                        href={`recipeforlater://auth/google-callback?error=${error}`}
                        className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors"
                    >
                        חזרה לאפליקציה (שגיאה)
                    </a>
                )}

                {code && (
                    <a
                        href={`recipeforlater://auth/google-callback?code=${code}`}
                        className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors"
                    >
                        חזרה לאפליקציה
                    </a>
                )}

                {!code && !error && (
                    <a
                        href={`recipeforlater://auth/google-callback?error=no_code`}
                        className="inline-block bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition-colors"
                    >
                        חזרה לאפליקציה
                    </a>
                )}
            </div>
        </div>
    );
}

export default function GoogleOAuthCallback() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8">
                    <h2 className="text-2xl font-bold mb-4">טוען...</h2>
                </div>
            </div>
        }>
            <GoogleOAuthCallbackContent />
        </Suspense>
    );
} 