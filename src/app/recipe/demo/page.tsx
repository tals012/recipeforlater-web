"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function RecipeDemoContent() {
    const searchParams = useSearchParams();
    const recipeId = searchParams.get("id");

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-brand-bgTop to-brand-bgBottom text-gray-900">
            <h1 className="text-4xl font-bold mb-8">Recipe Demo</h1>
            {recipeId ? (
                <div className="text-xl">
                    Viewing recipe: {recipeId}
                </div>
            ) : (
                <div className="text-xl">
                    No recipe selected
                </div>
            )}
        </div>
    );
}

export default function RecipeDemoPage() {
    return (
        <Suspense fallback={
            <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-brand-bgTop to-brand-bgBottom text-gray-900">
                <h1 className="text-2xl font-bold">Loading...</h1>
            </div>
        }>
            <RecipeDemoContent />
        </Suspense>
    );
} 