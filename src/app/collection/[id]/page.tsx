"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users as UsersIcon } from "lucide-react";

interface Collection {
    id: string;
    title: string;
    imageUrl: string;
    recipeCount?: number;
    isShared?: boolean;
}

const getCollection = async (id: string): Promise<Collection> => {
    try {
        const response = await fetch(`/api/collections/${id}`, {
            cache: 'no-store', // Always fetch fresh data
        });

        if (!response.ok) {
            throw new Error('Collection not found');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching collection:', error);
        // Fallback to mock data if API fails
        return {
            id,
            title: "Family Favorites",
            imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80",
            recipeCount: 12,
            isShared: true,
        };
    }
};

function CollectionContent() {
    const params = useParams();
    const searchParams = useSearchParams();
    const id = params.id as string;
    const invite = searchParams.get("invite");
    const [collection, setCollection] = useState<Collection | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCollection = async () => {
            try {
                const collectionData = await getCollection(id);
                setCollection(collectionData);
            } catch (error) {
                console.error("Error loading collection:", error);
            } finally {
                setLoading(false);
            }
        };

        loadCollection();
    }, [id]);

    const handleOpenInApp = () => {
        const appDeepLink = `recipeforlater://collection/${id}${invite ? "?invite=true" : ""}`;
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
                    <h1 className="font-oswald text-2xl font-semibold text-[#0a090b]">Loading collection...</h1>
                </motion.div>
            </div>
        );
    }

    if (!collection) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f4e2]">
                <h1 className="font-oswald text-2xl font-semibold text-[#0a090b]">Collection not found</h1>
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
                    src={collection.imageUrl}
                    alt={collection.title}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Shared Badge */}
                {collection.isShared && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="absolute top-6 right-6 flex items-center gap-2 bg-[#177654] text-white px-4 py-2 rounded-full shadow-lg"
                    >
                        <UsersIcon className="h-4 w-4" />
                        <span className="font-oswald text-sm font-semibold">Shared</span>
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
                    <h1 className="mb-2 font-oswald text-3xl font-semibold leading-tight text-[#0a090b] md:text-5xl">
                        {collection.title}
                    </h1>

                    {invite && (
                        <p className="mb-6 font-oswald text-base text-[#177654]">
                            🎉 You've been invited to this collection!
                        </p>
                    )}

                    {/* Collection Info */}
                    {collection.recipeCount && (
                        <div className="mb-8 flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-[#7f7d83]" />
                            <p className="font-oswald text-base text-[#7f7d83]">
                                {collection.recipeCount} {collection.recipeCount === 1 ? 'recipe' : 'recipes'}
                            </p>
                        </div>
                    )}

                    {/* CTA Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="rounded-2xl bg-[#f7f4e2] p-6 md:p-8"
                    >
                        <h2 className="mb-4 font-oswald text-2xl font-semibold text-[#0a090b]">
                            {invite ? 'Accept Invitation' : 'View Collection'}
                        </h2>
                        <p className="mb-6 font-oswald text-base leading-relaxed text-[#4f4d55]">
                            {invite
                                ? 'Open the RecipeForLater app to accept this collection invitation and start cooking together!'
                                : 'View all recipes in this collection and start cooking in the RecipeForLater app.'}
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

export default function CollectionPage() {
    return (
        <Suspense fallback={
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f4e2]">
                <div className="h-12 w-12 border-4 border-[#177654] border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <CollectionContent />
        </Suspense>
    );
}
