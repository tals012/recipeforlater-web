"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, ChefHat, Star } from "lucide-react";

interface Ingredient {
    id: string;
    name: string;
    thumbnailUrl: string;
}

interface Recipe {
    id: string;
    title: string;
    imageUrl: string;
    ingredients?: Ingredient[];
    totalTime?: string;
    servings?: number;
    difficulty?: string;
    rating?: number;
}

const getRecipe = async (id: string): Promise<Recipe> => {
    try {
        const response = await fetch(`/api/recipes/${id}`, {
            cache: 'no-store', // Always fetch fresh data
        });

        if (!response.ok) {
            throw new Error('Recipe not found');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching recipe:', error);
        // Fallback to mock data if API fails
        return {
            id,
            title: "Recipe Loading...",
            imageUrl: "/assets/recipe_placeholder.png",
            ingredients: [],
            totalTime: undefined,
            servings: undefined,
            difficulty: undefined,
            rating: undefined,
        };
    }
};

function RecipeContent() {
    const params = useParams();
    const id = params.id as string;
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState(true);

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
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f4e2]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <div className="h-12 w-12 mx-auto mb-4 border-4 border-[#177654] border-t-transparent rounded-full animate-spin" />
                    <h1 className="font-oswald text-2xl font-semibold text-[#0a090b]">Loading recipe...</h1>
                </motion.div>
            </div>
        );
    }

    if (!recipe) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f4e2]">
                <h1 className="font-oswald text-2xl font-semibold text-[#0a090b]">Recipe not found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f7f4e2]">
            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden"
            >
                <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Rating Badge */}
                {recipe.rating && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="absolute bottom-6 right-6 flex items-center gap-2 bg-[#177654] text-white px-4 py-2 rounded-full shadow-lg"
                    >
                        <Star className="h-5 w-5 fill-current" />
                        <span className="font-oswald text-lg font-semibold">{recipe.rating}</span>
                    </motion.div>
                )}
            </motion.div>

            {/* Content */}
            <div className="relative -mt-8 rounded-t-3xl bg-white px-6 py-8 md:px-12">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mx-auto max-w-4xl"
                >
                    {/* Title */}
                    <h1 className="mb-2 font-darkmode text-3xl font-bold leading-tight text-[#0a090b] md:text-5xl">
                        {recipe.title}
                    </h1>
                    <p className="mb-0 font-oswald text-base text-[#7f7d83]">
                        by recipeforlater_app
                    </p>

                    {/* Recipe Info */}
                    <div className="mb-8 flex flex-wrap items-center gap-6">
                        {recipe.totalTime && (
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-[#7f7d83]" />
                                <div>
                                    <p className="font-oswald text-xs text-[#7f7d83]">Total Time</p>
                                    <p className="font-oswald text-base font-medium text-[#0a090b]">
                                        {recipe.totalTime}
                                    </p>
                                </div>
                            </div>
                        )}

                        {recipe.difficulty && (
                            <div className="flex items-center gap-2">
                                <ChefHat className="h-5 w-5 text-[#7f7d83]" />
                                <div>
                                    <p className="font-oswald text-xs text-[#7f7d83]">Difficulty</p>
                                    <p className="font-oswald text-base font-medium text-[#0a090b]">
                                        {recipe.difficulty}
                                    </p>
                                </div>
                            </div>
                        )}

                        {recipe.servings && (
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-[#7f7d83]" />
                                <div>
                                    <p className="font-oswald text-xs text-[#7f7d83]">Servings</p>
                                    <p className="font-oswald text-base font-medium text-[#0a090b]">
                                        {recipe.servings}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Ingredients Preview */}
                    {recipe.ingredients && recipe.ingredients.length > 0 && (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="rounded-2xl bg-white p-0 shadow-sm"
                        >
                            <h2 className="mb-4 font-darkmode text-xl font-semibold text-[#0a090b]">
                                Ingredients Preview
                            </h2>
                            <div className="space-y-3">
                                {recipe.ingredients.map((ingredient, index) => (
                                    <motion.div
                                        key={ingredient.id}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                                            <img
                                                src={ingredient.thumbnailUrl}
                                                alt={ingredient.name}
                                                className="h-full w-full object-contain rounded-full"
                                            />
                                        </div>
                                        <p className="font-darkmode text-base text-[#0a090b]">
                                            {ingredient.name}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Blur overlay to indicate more content */}
                            <div className="relative mt-4 overflow-hidden rounded-lg bg-gradient-to-b from-transparent to-white p-4">
                                <div className="absolute inset-0 backdrop-blur-sm" />
                                <div className="relative text-center">
                                    <p className="font-darkmode text-sm text-[#7f7d83]">
                                        + More ingredients...
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* CTA Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="rounded-2xl bg-[#f7f4e2] p-6 md:p-8"
                    >
                        <h2 className="mb-4 font-oswald text-2xl font-semibold text-[#0a090b]">
                            🔒 Download to View Full Recipe
                        </h2>
                        <p className="mb-6 font-oswald text-base leading-relaxed text-[#4f4d55]">
                            Get the complete recipe with all ingredients, step-by-step instructions, cooking tips, and hands-free voice control in the RecipeForLater app.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleOpenInApp}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#177654] px-6 py-4 font-oswald text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#145d45]"
                        >
                            Open in App
                            <ArrowRight className="h-5 w-5" />
                        </motion.button>

                        <div className="mt-8 border-t border-[#ececed] pt-6">
                            <p className="mb-4 text-center font-oswald text-base text-[#4f4d55]">
                                Don't have the app yet?
                            </p>
                            <div className="flex items-center justify-center gap-3">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleDownloadApp('ios')}
                                    className="h-10 w-[138px] cursor-pointer"
                                >
                                    <img
                                        src="/assets/app-store.svg"
                                        alt="Download on App Store"
                                        className="h-full w-full object-contain"
                                    />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleDownloadApp('android')}
                                    className="h-10 w-[138px] cursor-pointer"
                                >
                                    <img
                                        src="/assets/google_store.png"
                                        alt="Get it on Google Play"
                                        className="h-full w-full object-contain"
                                    />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default function RecipePage() {
    return (
        <Suspense fallback={
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f4e2]">
                <div className="h-12 w-12 border-4 border-[#177654] border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <RecipeContent />
        </Suspense>
    );
}
