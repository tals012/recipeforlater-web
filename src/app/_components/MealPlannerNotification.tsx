"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const notifications = [
    {
        title: "Time to cook Cinnamon Apple Cake!",
        subtitle: "Dessert Time",
    },
    {
        title: "Lunch Time! 🍝 Spicy Risotto Alla Romana",
        subtitle: "Bon Appétit",
    },
];

export function MealPlannerNotification() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let showTimer: ReturnType<typeof setTimeout> | undefined;
        let cycleTimer: ReturnType<typeof setTimeout> | undefined;

        const cycle = () => {
            setVisible(true);
            showTimer = setTimeout(() => {
                setVisible(false);
                cycleTimer = setTimeout(() => {
                    setIndex((i) => (i + 1) % notifications.length);
                    cycle();
                }, 500); // exit duration
            }, 2800); // visible duration
        };

        cycle();
        return () => {
            if (showTimer) clearTimeout(showTimer);
            if (cycleTimer) clearTimeout(cycleTimer);
        };
    }, []);

    const notif = notifications[index] ?? notifications[0];

    return (
        <div className="relative h-[60px] w-full max-w-full">
            <AnimatePresence mode="wait">
                {visible && notif && (
                    <motion.div
                        key={`${index}-${notif.title}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ type: "spring", damping: 22, stiffness: 280 }}
                        className="absolute left-0 top-0 w-full max-w-[380px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#7dd3c0]/90 to-[#78c9e8]/90 backdrop-blur-xl text-[#333]"
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                    >
                        <div className="flex items-center gap-3 px-4 py-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/95">
                                <img src="/assets/logo.png" alt="Recipe For Later" className="h-full w-full object-contain" />
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-[14px] font-semibold leading-[1.3]">
                                    {notif?.title}
                                </p>
                                <p className="text-[12px] leading-[1.4] opacity-90">
                                    {notif?.subtitle}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

