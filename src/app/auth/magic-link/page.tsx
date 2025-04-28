"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function MagicLinkPage() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    useEffect(() => {
        if (token && email) {
            // Here you would typically validate the token and handle the authentication
            console.log("Magic link received:", { token, email });

            // For now, just redirect to home
            window.location.href = "/";
        }
    }, [token, email]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">Processing magic link...</h1>
        </div>
    );
}
