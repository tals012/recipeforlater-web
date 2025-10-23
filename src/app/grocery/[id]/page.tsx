"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Users as UsersIcon } from "lucide-react";

interface GroceryList {
    id: string;
    title: string;
    itemCount?: number;
    isShared?: boolean;
}

const getGroceryList = async (id: string): Promise<GroceryList> => {
    try {
        const response = await fetch(`/api/grocery/${id}`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error('Grocery list not found');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching grocery list:', error);
        return {
            id,
            title: "Shopping List",
            itemCount: 15,
            isShared: true,
        };
    }
};

function GroceryContent() {
    const params = useParams();
    const searchParams = useSearchParams();
    const id = params.id as string;
    const invite = searchParams.get("invite");
    const [groceryList, setGroceryList] = useState<GroceryList | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadGroceryList = async () => {
            try {
                const groceryData = await getGroceryList(id);
                setGroceryList(groceryData);
            } catch (error) {
                console.error("Error loading grocery list:", error);
            } finally {
                setLoading(false);
            }
        };

        loadGroceryList();
    }, [id]);

    const handleOpenInApp = () => {
        const appDeepLink = `recipeforlater://grocery/${id}${invite ? "?invite=true" : ""}`;
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
                    <h1 className="font-oswald text-2xl font-semibold text-[#0a090b]">Loading grocery list...</h1>
                </motion.div>
            </div>
        );
    }

    if (!groceryList) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f4e2]">
                <h1 className="font-oswald text-2xl font-semibold text-[#0a090b]">Grocery list not found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f7f4e2]">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden bg-gradient-to-br from-[#177654] to-[#0f5d42]"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="flex h-32 w-32 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
                    >
                        <ShoppingCart className="h-16 w-16 text-white" />
                    </motion.div>
                </div>

                {/* Shared Badge */}
                {groceryList.isShared && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="absolute top-6 right-6 flex items-center gap-2 bg-white text-[#177654] px-4 py-2 rounded-full shadow-lg"
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
                        {groceryList.title}
                    </h1>

                    {invite && (
                        <p className="mb-6 font-oswald text-base text-[#177654]">
                            🎉 You've been invited to this grocery list!
                        </p>
                    )}

                    {/* List Info */}
                    {groceryList.itemCount && (
                        <div className="mb-8 flex items-center gap-2">
                            <ShoppingCart className="h-5 w-5 text-[#7f7d83]" />
                            <p className="font-oswald text-base text-[#7f7d83]">
                                {groceryList.itemCount} {groceryList.itemCount === 1 ? 'item' : 'items'}
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
                            {invite ? 'Accept Invitation' : 'View Grocery List'}
                        </h2>
                        <p className="mb-6 font-oswald text-base leading-relaxed text-[#4f4d55]">
                            {invite
                                ? 'Open the RecipeForLater app to accept this grocery list invitation and start shopping together!'
                                : 'View and manage your grocery list in the RecipeForLater app.'}
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

export default function GroceryPage() {
    return (
        <Suspense fallback={
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#f7f4e2]">
                <div className="h-12 w-12 border-4 border-[#177654] border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <GroceryContent />
        </Suspense>
    );
}

