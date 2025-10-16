"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4e2] px-[120px] py-20 pt-36">
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
            <div className="relative">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-['Oswald'] text-[72px] font-bold leading-[1.2] tracking-[-2.16px] text-[#0a090b]"
              >
                Save any Recipe.
                <br />
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#e74c3c]">With</span>
                  {/* exact pot slice image */}
                  <img src="/assets/logo_hero.png" alt="Recipe For Later" className="inline-block h-16 w-auto" />

                </span>
                <br />

              </motion.h1>
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
              className="flex w-fit items-center gap-2 rounded-md bg-[#177654] px-3.5 py-2.5 font-['Inter'] text-sm font-[475] text-white shadow-lg transition-all hover:bg-[#145d45]"
            >
              Watch Demo
              <img src="/assets/arrow-right.svg" alt="" className="h-6 w-6" />
            </motion.button>
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
          className="relative flex-1"
        >
          <div className="relative h-[700px] w-full">
            {/* Center iPhone with bezel + notch */}
            <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[330px] rounded-[41px] bg-[#0a0a0a] shadow-2xl">
              {/* Bezel */}
              <div className="relative m-[12px] h-[676px] rounded-[36px] bg-black">
                {/* Notch */}
                <div className="absolute left-1/2 top-0 z-10 h-[30px] w-[150px] -translate-x-1/2 rounded-b-[20px] bg-black" />
                {/* Screen */}
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
            <div
              className="absolute left-[5%] top-1/2 z-10 h-[583px] w-[322px] -translate-y-1/2 rotate-[-5.8deg] rounded-[34px] bg-[#0a0a0a] shadow-xl"
            >
              <div className="relative m-[10px] h-[563px] rounded-[30px] bg-black">
                <div className="absolute left-1/2 top-0 z-10 h-[20px] w-[122px] -translate-x-1/2 rounded-b-[14px] bg-black" />
                <img src="/assets/hero-screen-left.png" alt="" className="absolute inset-0 h-full w-full rounded-[28px] object-cover" />
              </div>
            </div>

            {/* Right iPhone - rotated */}
            <div
              className="absolute right-[5%] top-1/2 z-10 h-[583px] w-[322px] -translate-y-1/2 rotate-[4.75deg] rounded-[34px] bg-[#0a0a0a] shadow-xl"
            >
              <div className="relative m-[10px] h-[563px] rounded-[30px] bg-black">
                <div className="absolute left-1/2 top-0 z-10 h-[20px] w-[122px] -translate-x-1/2 rounded-b-[14px] bg-black" />
                <img src="/assets/hero-screen-right.png" alt="" className="absolute inset-0 h-full w-full rounded-[28px] object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
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
      className="absolute inset-0 h-full w-full rounded-[32px] object-contain"
    >
      {sources.map((s) => (
        <source key={s.src} src={s.src} type={s.type} />
      ))}
    </video>
  );
}

