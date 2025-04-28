"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function MagicLinkContent() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    useEffect(() => {
        if (token && email) {
            // Here you would typically validate the token and handle the authentication
            console.log("Magic link received:", { token, email });

            // Instead of redirecting, we'll show a success message
            // The app will handle the deep link
            const appLink = `recipeforlater://auth/magic-link?token=${token}&email=${email}`;
            window.location.href = appLink;
        }
    }, [token, email]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <h1 className="text-2xl font-bold mb-4">Processing magic link...</h1>
            {token && email ? (
                <p className="text-lg">Redirecting to app...</p>
            ) : (
                <p className="text-lg text-red-400">Invalid magic link</p>
            )}
        </div>
    );
}

export default function MagicLinkPage() {
    return (
        <Suspense fallback={
            <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
                <h1 className="text-2xl font-bold">Loading...</h1>
            </div>
        }>
            <MagicLinkContent />
        </Suspense>
    );
}
