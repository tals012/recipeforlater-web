"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

// Placeholder recipe data for demo
// In a real app, you would fetch this from your API
interface Recipe {
    id: string;
    title: string;
    cookingTime?: string;
    imageUrl?: string;
    description?: string;
}

const getRecipe = async (id: string): Promise<Recipe> => {
    // This would be replaced with a real API call
    return {
        id,
        title: `Recipe ${id}`,
        cookingTime: "30 minutes",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        description: "This is a delicious recipe you can make at home.",
    };
};

function RecipeContent() {
    const params = useParams();
    const id = params.id as string;
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);
    const [redirecting, setRedirecting] = useState(false);

    useEffect(() => {
        const loadRecipe = async () => {
            try {
                const recipeData = await getRecipe(id);
                setRecipe(recipeData);
            } catch (error) {
                console.error("Error loading recipe:", error);
            } finally {
                setLoading(false);
            }
        };

        loadRecipe();
    }, [id]);

    useEffect(() => {
        if (recipe) {
            // Redirect to app after a short delay
            const timer = setTimeout(() => {
                setRedirecting(true);
                const appDeepLink = `recipeforlater://recipe/${id}`;
                window.location.href = appDeepLink;
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [recipe, id]);

    const handleOpenInApp = () => {
        const appDeepLink = `recipeforlater://recipe/${id}`;
        window.location.href = appDeepLink;
    };

    const handleDownloadApp = (platform: 'ios' | 'android') => {
        if (platform === 'ios') {
            window.open('https://apps.apple.com/app/recipeforlater/id1234567890', '_blank');
        } else {
            window.open('https://play.google.com/store/apps/details?id=com.talshukrun.recipeforlater', '_blank');
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
                <h1 className="text-2xl font-bold">Loading recipe...</h1>
            </div>
        );
    }

    if (!recipe) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
                <h1 className="text-2xl font-bold">Recipe not found</h1>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <div className="w-full max-w-2xl p-6 space-y-6">
                {recipe.imageUrl && (
                    <div className="relative w-full h-64 overflow-hidden rounded-lg">
                        <Image
                            src={recipe.imageUrl}
                            alt={recipe.title}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                )}
                <h1 className="text-3xl font-bold">{recipe.title}</h1>

                {recipe.cookingTime && (
                    <div className="flex items-center space-x-2">
                        <span>⏱️</span>
                        <span>{recipe.cookingTime}</span>
                    </div>
                )}

                {recipe.description && (
                    <p className="text-lg">{recipe.description}</p>
                )}

                <div className="mt-8 space-y-4">
                    {redirecting ? (
                        <div className="p-4 bg-green-800 bg-opacity-50 rounded-lg">
                            <p className="text-lg font-medium">Redirecting to RecipeForLater app...</p>
                        </div>
                    ) : (
                        <button
                            onClick={handleOpenInApp}
                            className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
                        >
                            Open in RecipeForLater app
                        </button>
                    )}

                    <div className="border-t border-white border-opacity-20 pt-4 mt-4">
                        <p className="text-center mb-4">Don't have the app yet?</p>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => handleDownloadApp('ios')}
                                className="py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                            >
                                App Store
                            </button>
                            <button
                                onClick={() => handleDownloadApp('android')}
                                className="py-3 px-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
                            >
                                Google Play
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function RecipePage() {
    return (
        <Suspense fallback={
            <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
                <h1 className="text-2xl font-bold">Loading...</h1>
            </div>
        }>
            <RecipeContent />
        </Suspense>
    );
} 