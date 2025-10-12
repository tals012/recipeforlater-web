"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CollectionPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const id = params.id as string;
    const invite = searchParams.get("invite");
    const [redirecting, setRedirecting] = useState(false);

    useEffect(() => {
        if (id) {
            const timer = setTimeout(() => {
                setRedirecting(true);
                const appDeepLink = `recipeforlater://collection/${id}${invite ? "?invite=true" : ""}`;
                window.location.href = appDeepLink;
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [id, invite]);

    const handleOpenInApp = () => {
        const appDeepLink = `recipeforlater://collection/${id}${invite ? "?invite=true" : ""}`;
        window.location.href = appDeepLink;
    };

    return (
        <div style={{ padding: "40px", textAlign: "center" }}>
            <h1>Opening Collection...</h1>
            {redirecting && <p>If the app doesn't open, please install it first.</p>}
            <button onClick={handleOpenInApp}>
                Open in App
            </button>
        </div>
    );
}


