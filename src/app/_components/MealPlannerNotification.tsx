"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const notifications = [
    {
        title: "Time to cook Cinnamon Apple Cake!",
        subtitle: "Dessert Time",
        delay: 0,
    },
    {
        title: "Lunch Time! 🍝 Spicy Risotto Alla Romana",
        subtitle: "Bon Appétit",
        delay: 1200,
    },
];

export function MealPlannerNotification() {
    const [visibleNotifications, setVisibleNotifications] = useState<number[]>([]);
    const [hasTriggered, setHasTriggered] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasTriggered) {
                        setHasTriggered(true);

                        // Show notifications one by one with different delays
                        notifications.forEach((notif, index) => {
                            setTimeout(() => {
                                setVisibleNotifications((prev) => [...prev, index]);
                            }, notif.delay);
                        });
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [hasTriggered]);

    return (
        <div ref={containerRef} className="relative w-full max-w-full" style={{ minHeight: expandedIndex !== null ? 'auto' : '90px' }}>
            {/* Stacked notifications when not expanded */}
            {expandedIndex === null && (
                <div className="relative h-[90px]">
                    {notifications.map((notif, index) => {
                        const isVisible = visibleNotifications.includes(index);
                        const reverseIndex = visibleNotifications.length - 1 - visibleNotifications.indexOf(index);

                        return isVisible ? (
                            <motion.div
                                key={`${index}-${notif.title}-stacked`}
                                initial={{ opacity: 0, y: -60, scale: 1 }}
                                animate={{
                                    opacity: 1,
                                    y: reverseIndex * 8,
                                    scale: 1 - reverseIndex * 0.02,
                                    zIndex: visibleNotifications.indexOf(index) + 1
                                }}
                                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                                onClick={() => setExpandedIndex(index)}
                                className="absolute left-0 top-0 w-full max-w-[340px] overflow-hidden rounded-xl bg-gradient-to-r from-[#7dd3c0]/90 to-[#78c9e8]/90 backdrop-blur-xl text-[#333] shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                                style={{
                                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                                }}
                            >
                                <div className="flex items-center gap-2.5 px-3 py-2">
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/95">
                                        <img src="/assets/logo.png" alt="Recipe For Later" className="h-full w-full object-contain" />
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-[14px] font-semibold leading-tight truncate">
                                            {notif.title}
                                        </p>
                                        <p className="text-[11px] leading-tight mt-0.5 opacity-90 truncate">
                                            {notif.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ) : null;
                    })}
                </div>
            )}

            {/* Expanded notification */}
            <AnimatePresence>
                {expandedIndex !== null && (
                    <motion.div
                        key={`${expandedIndex}-expanded`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                            type: "spring",
                            damping: 18,
                            stiffness: 350,
                            mass: 0.6
                        }}
                        onClick={() => setExpandedIndex(null)}
                        className="w-full max-w-[340px] overflow-hidden rounded-xl bg-gradient-to-r from-[#7dd3c0]/90 to-[#78c9e8]/90 backdrop-blur-xl text-[#333] shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                        style={{
                            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                        }}
                        layout
                        layoutId={`notification-${expandedIndex}`}
                    >
                        <div className="flex items-center gap-2.5 px-3 py-2">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/95">
                                <img src="/assets/logo.png" alt="Recipe For Later" className="h-full w-full object-contain" />
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-[14px] font-semibold leading-tight">
                                    {notifications[expandedIndex]?.title}
                                </p>
                                <p className="text-[11px] leading-tight mt-0.5 opacity-90">
                                    {notifications[expandedIndex]?.subtitle}
                                </p>
                            </div>
                        </div>

                        <motion.div
                            initial={{ maxHeight: 0, opacity: 0 }}
                            animate={{ maxHeight: 200, opacity: 1 }}
                            exit={{ maxHeight: 0, opacity: 0 }}
                            transition={{
                                duration: 0.4,
                                ease: [0.4, 0.0, 0.2, 1]
                            }}
                            className="overflow-hidden border-t border-white/20"
                        >
                            <div className="px-3 py-2.5">
                                <p className="text-[12px] leading-[1.4] text-[#333]/80">
                                    Your meal is scheduled for today. Get ready to cook something delicious!
                                </p>
                                <div className="mt-2 flex gap-2">
                                    <button className="flex-1 rounded-lg bg-white/90 px-2.5 py-1.5 text-[12px] font-semibold text-[#333] hover:bg-white transition-colors">
                                        View Recipe
                                    </button>
                                    <button className="flex-1 rounded-lg bg-[#177654] px-2.5 py-1.5 text-[12px] font-semibold text-white hover:bg-[#145d45] transition-colors">
                                        Start Cooking
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

