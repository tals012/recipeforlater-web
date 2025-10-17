"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const imgRef = useRef<HTMLImageElement>(null);
    const [gifLoaded, setGifLoaded] = useState(false);

    useEffect(() => {
        // Hide after GIF plays once (approximately 3 seconds for the GIF)
        // or after 5 seconds max
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Preload the GIF
        if (imgRef.current && !gifLoaded) {
            imgRef.current.onload = () => setGifLoaded(true);
        }
    }, [gifLoaded]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white md:hidden"
                >
                    <img
                        ref={imgRef}
                        src="/assets/Mainpla.gif?v=1"
                        alt="Loading..."
                        className="h-screen w-screen object-contain"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

