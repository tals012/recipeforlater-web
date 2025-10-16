"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-[#f7f4e2] px-[120px] py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-[1fr_462px] items-center gap-24">
          {/* Left - Phone Mockup */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="h-[700px] w-[345px] rounded-[41px] bg-[#0a0a0a] shadow-2xl">
                <div className="relative m-[12px] h-[676px] rounded-[36px] bg-black">
                  <div className="absolute left-1/2 top-0 z-10 h-[24px] w-[138px] -translate-x-1/2 rounded-b-[16px] bg-black" />
                  <img src="/assets/iphone-screen-3.png" alt="" className="absolute inset-0 h-full w-full rounded-[32px] object-cover" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4 inline-block rounded-lg bg-[#f9bd23] px-3 py-1 font-['Oswald'] text-sm font-semibold uppercase tracking-wide text-[#0a090b]"
              >
                Start Today
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-4 font-['Oswald'] text-5xl font-semibold leading-[1.2] text-[#0a090b]"
              >
                Stop Losing Recipes.
                <br />
                Start Cooking Smarter.
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-['Oswald'] text-xl font-light leading-[1.6] text-[#4f4d55]"
              >
                Your kitchen deserves better than scattered screenshots and forgotten bookmarks.
                RecipeForLater brings order to your cooking chaos.
              </motion.p>
            </div>

            {/* Benefits */}
            <motion.ul
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                "Import from anywhere",
                "Dietary preferences",
                "Voice-controlled cooking",
                "Share with family",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c1f4d4]">
                    <Check className="h-4 w-4 text-[#019939]" />
                  </div>
                  <span className="font-['Oswald'] text-base text-[#0a090b]">{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-3"
            >
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
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="font-['Oswald'] text-sm text-[#4f4d55]"
            >
              ✓ 14-day free trial • No credit card required • Cancel anytime
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

