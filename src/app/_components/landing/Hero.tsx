"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#f7f4e2] px-4 pt-24 pb-12 md:px-[60px] md:pt-32 md:pb-8">
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center gap-8 md:flex-row-reverse md:gap-[60px]">
        {/* Left Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex w-full flex-col items-center gap-6 text-center md:w-auto md:items-start md:gap-10 md:text-left"
        >
          {/* Main Heading */}
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden">
              <h1 className="font-oswald text-center text-[48px] font-bold leading-[1.2] tracking-[-1.5px] text-[#0a090b] md:text-left md:text-[72px] md:tracking-[-2.16px]">
                {/* Animated words */}
                <div className="flex flex-wrap justify-center gap-2 overflow-hidden md:justify-start">
                  {["Save", "any", "Recipe."].map((word, index) => (
                    <div key={index} className="overflow-hidden">
                      <motion.span
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.7,
                          delay: 0.4 + index * 0.2,
                          ease: [0.33, 1, 0.68, 1],
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    </div>
                  ))}
                </div>

                <span className="inline-flex items-center justify-center gap-2 md:justify-start">
                  <motion.span
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 1.0,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    className="inline-block text-[#e74c3c]"
                  >
                    With
                  </motion.span>
                  <motion.img
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 1.2,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    src="/assets/logo_hero.png"
                    alt="RecipeForLater - AI-Powered Recipe Organization App"
                    className="inline-block h-12 w-auto md:h-16"
                  />
                </span>
                <br />
              </h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-oswald max-w-[541px] text-center text-lg font-light leading-6 text-[#0a090b] md:text-left md:text-2xl md:leading-7"
            >
              Stop losing recipes in screenshots and bookmarks. Import from anywhere, cook
              hands-free, and share what you love, all powered by AI.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoModalOpen(true)}
              className="font-inter flex w-full items-center justify-center gap-2 rounded-md bg-[#177654] px-3.5 py-2.5 text-sm font-[475] text-white shadow-lg transition-all hover:bg-[#145d45] md:w-fit"
            >
              Watch How It Works Demo
              <img src="/assets/arrow-right.svg" alt="" className="h-6 w-6" />
            </motion.button>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-2 md:justify-start">
              {[
                { icon: "youtube.png", name: "YouTube" },
                { icon: "instagram.png", name: "Instagram" },
                { icon: "tiktok.png", name: "TikTok" },
                { icon: "facebook_icon.png", name: "Facebook" },
                { icon: "internet.png", name: "Website" },
              ].map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-white shadow-md"
                >
                  <img
                    src={`/assets/icons/${social.icon}`}
                    alt={social.name}
                    className="h-5 w-5 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex w-full flex-col items-center gap-3 md:w-auto md:items-start"
          >
            <div className="hidden flex-col gap-0.5 md:flex">
              <h3 className="font-oswald text-xl font-light text-[#0a090b]">
                Get Started Free
              </h3>
              <p className="font-oswald max-w-[410px] text-base font-light leading-[1.2] text-[#0a090b]">
                Join thousands of home cooks who've organized their recipe chaos into a clean,
                voice-controlled cooking experience.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 md:justify-start">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-10 w-[138px] cursor-pointer"
              >
                <img
                  src="/assets/app-store.svg"
                  alt="Download on App Store"
                  className="h-full w-full object-contain"
                />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-10 w-[138px] cursor-pointer"
              >
                <img
                  src="/assets/google_store.png"
                  alt="Get it on Google Play"
                  className="h-full w-full object-contain"
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Phone Mockups */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full md:flex-1"
        >
          <div
            className="relative flex h-[500px] w-full items-center justify-center pb-0 md:mb-[-112px] md:h-[700px] md:items-end"
          >
            {/* Center iPhone - video with frame */}
            <div className="relative z-30 mb-0 h-[450px] w-auto md:h-[650px]">
              {/* Aura */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: "110%",
                  height: "110%",
                  borderRadius: "50%",
                  filter: "blur(60px)",
                  background: "radial-gradient(circle, #cbf4ea 0%, #ffd14080 70%, transparent 100%)",
                  opacity: 0.7,
                  zIndex: -1,
                }}
              />
              {/* Video with built-in frame */}
              <video
                autoPlay
                muted
                playsInline
                loop
                preload="auto"
                poster="/assets/hero-screen-center.png"
                onError={(e) => console.error("Video error:", e)}
                className="h-full w-auto object-contain"
                style={{ backgroundColor: 'transparent' }}
              >
                <source src="/videos/v1/hero_video_new1.webm" type="video/webm" />
                <source src="/videos/v1/hero_new.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Left iPhone - rotated - Desktop only */}
            <div className="hidden md:block">
              <div className="absolute left-[5%] bottom-0 z-10 h-[540px] w-[298px]">
                {/* Aura */}
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: "110%",
                    height: "110%",
                    borderRadius: "50%",
                    filter: "blur(50px)",
                    background: "radial-gradient(circle, #cbf4ea 0%, #ffd14080 70%, transparent 100%)",
                    opacity: 0.6,
                    zIndex: -1,
                  }}
                />
                <img src="/assets/left_iphone.png" alt="RecipeForLater app interface showing recipe collection and diet conversion features" className="h-full w-full object-contain" />
              </div>

              {/* Right iPhone - rotated - Desktop only */}
              <div className="absolute right-[5%] bottom-0 z-10 hidden h-[540px] w-[298px] md:block">
                {/* Aura */}
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: "110%",
                    height: "110%",
                    borderRadius: "50%",
                    filter: "blur(50px)",
                    background: "radial-gradient(circle, #cbf4ea 0%, #ffd14080 70%, transparent 100%)",
                    opacity: 0.6,
                    zIndex: -1,
                  }}
                />
                <img src="/assets/iphone_right.png" alt="RecipeForLater app showing smart meal planner and grocery list features" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute -right-4 -top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:scale-110 hover:bg-gray-100"
              >
                <X className="h-5 w-5 text-gray-800" />
              </button>

              {/* Video Container */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <video
                  autoPlay
                  controls
                  className="h-full w-full object-cover"
                  src="/videos/v1/exmaple_hero_vid.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function VideoAutoPlay({
  sources,
  poster,
}: {
  sources: { src: string; type: string }[];
  poster?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const play = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay blocked, will start on user gesture
      }
    };
    if (video.readyState >= 2) play();
    else video.addEventListener("canplay", play, { once: true });
    return () => video.removeEventListener("canplay", play as any);
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      playsInline
      loop
      preload="metadata"
      poster={poster}
      className="h-full w-full object-contain"
    >
      {sources.map((s) => (
        <source key={s.src} src={s.src} type={s.type} />
      ))}
    </video>
  );
}

