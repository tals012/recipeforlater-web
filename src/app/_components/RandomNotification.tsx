"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const notifications = [
    {
        user: "Jack",
        recipe: "Brownies au chocolat",
    },
    {
        user: "Sarah",
        recipe: "Pasta Carbonara",
    },
    {
        user: "Mike",
        recipe: "Chicken Tikka Masala",
    },
    {
        user: "Emma",
        recipe: "Chocolate Chip Cookies",
    },
    {
        user: "David",
        recipe: "Thai Green Curry",
    },
];

export function RandomNotification() {
    const [showNotification, setShowNotification] = useState(false);
    const [currentNotification, setCurrentNotification] = useState(notifications[0]);

    useEffect(() => {
        // Random delay between 3-8 seconds for first appearance
        const initialDelay = Math.random() * 5000 + 3000;

        const showRandomNotification = () => {
            const randomNotif = notifications[Math.floor(Math.random() * notifications.length)];
            setCurrentNotification(randomNotif);
            setShowNotification(true);

            // Hide after 4 seconds
            setTimeout(() => {
                setShowNotification(false);
            }, 4000);
        };

        const initialTimeout = setTimeout(() => {
            showRandomNotification();

            // Show notification every 15-25 seconds
            const interval = setInterval(() => {
                showRandomNotification();
            }, Math.random() * 10000 + 15000);

            return () => clearInterval(interval);
        }, initialDelay);

        return () => clearTimeout(initialTimeout);
    }, []);

    return (
        <AnimatePresence>
            {showNotification && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="fixed left-1/2 top-4 z-[9998] w-full max-w-[600px] -translate-x-1/2 px-4"
                >
                    <div className="overflow-hidden rounded-[20px] bg-gradient-to-r from-[#7dd3c0]/95 to-[#78c9e8]/95 shadow-2xl backdrop-blur-xl">
                        <div className="flex items-center gap-4 px-5 py-4">
                            {/* App Icon */}
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-white shadow-md">
                                <img
                                    src="/assets/logo.png"
                                    alt="Recipe For Later"
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-hidden">
                                <div className="flex items-center justify-between">
                                    <p className="font-['Oswald'] text-sm font-semibold text-[#0a090b]">
                                        New recipe in Shared
                                    </p>
                                    <span className="font-['Inter'] text-xs font-normal text-[#0a090b]/70">
                                        now
                                    </span>
                                </div>
                                <p className="font-['Inter'] text-base font-normal text-[#0a090b]">
                                    {currentNotification.user} added "{currentNotification.recipe}"
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

