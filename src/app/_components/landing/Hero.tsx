"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#f7f4e2] px-[60px] pt-3">
      <div className="relative mx-auto flex max-w-[1440px] flex-row-reverse items-center gap-[60px]">
        {/* Left Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-10"
        >
          {/* Main Heading */}
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden">
              <h1 className="font-['Oswald'] text-[72px] font-bold leading-[1.2] tracking-[-2.16px] text-[#0a090b]">
                {/* Animated words */}
                <div className="flex flex-wrap gap-2 overflow-hidden">
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

                <span className="inline-flex items-center gap-2">
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
                    alt="Recipe For Later"
                    className="inline-block h-16 w-auto"
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
              className="max-w-[541px] font-['Oswald'] text-2xl font-light leading-7 text-[#0a090b]"
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
              className="flex w-fit items-center gap-2 rounded-md bg-[#177654] px-3.5 py-2.5 font-['Inter'] text-sm font-[475] text-white shadow-lg transition-all hover:bg-[#145d45]"
            >
              Watch Demo
              <img src="/assets/arrow-right.svg" alt="" className="h-6 w-6" />
            </motion.button>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
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
            className="flex flex-col gap-3"
          >
            <div className="flex flex-col gap-0.5">
              <h3 className="font-['Oswald'] text-xl font-light text-[#0a090b]">
                Get Started Free
              </h3>
              <p className="max-w-[410px] font-['Oswald'] text-base font-light leading-[1.2] text-[#0a090b]">
                Join thousands of home cooks who've organized their recipe chaos into a clean,
                voice-controlled cooking experience.
              </p>
            </div>

            <div className="flex items-center gap-3">
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
                  src="/assets/google-play.svg"
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
          className="relative  flex-1"
        >
          <div className="relative h-[700px] w-full">
            {/* Center iPhone with thin bezel (no notch) */}
            <div className="absolute left-1/2 top-1/2 z-30 mt-30 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[330px] rounded-[41px] border-[3px] border-[#0a0a0a] bg-[#0a0a0a]">
              {/* Screen */}
              <div className="relative h-full w-full overflow-hidden rounded-[38px]">
                <VideoAutoPlay
                  poster="/assets/hero-screen-center.png"
                  sources={[
                    { src: "/_videos/v1/main.webm", type: "video/webm" },
                    { src: "/_videos/v1/hero_new.mp4", type: "video/mp4" },
                    { src: "/_videos/v1/hero_new.mp4", type: "video/mp4" },
                  ]}
                />
              </div>
            </div>

            {/* Left iPhone - rotated */}
            <div className="mt-[165px]">
              <div
                className="absolute left-[5%] top-1/2 z-10 mt-2 h-[583px] w-[322px] -translate-y-1/2 rotate-[-5.8deg] rounded-[34px] border-[3px] border-[#0a0a0a] bg-[#0a0a0a]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[30px]">
                  <img src="/assets/hero-screen-left.png" alt="" className="h-full w-full object-cover" />
                </div>
              </div>

              {/* Right iPhone - rotated */}
              <div
                className="absolute right-[5%] top-1/2 z-10 mt-6 h-[583px] w-[322px] -translate-y-1/2 rotate-[4.75deg] rounded-[34px] border-[3px] border-[#0a0a0a] bg-[#0a0a0a]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[30px]">
                  <img src="/assets/hero-screen-right.png" alt="" className="h-full w-full object-cover" />
                </div>
              </div>
              {/* Baseline crop overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-[-50px] z-50 h-[200px] border-t border-[#e8e4cf] bg-[#f7f4e2]" />
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
                  className="h-full w-full"
                  src="/_videos/v1/exmaple_hero_vid.mp4"
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
      className="absolute inset-0 h-auto w-full rounded-[38px] object-contain bg-transparent"
    >
      {sources.map((s) => (
        <source key={s.src} src={s.src} type={s.type} />
      ))}
    </video>
  );
}

