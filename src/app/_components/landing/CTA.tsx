"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

// Tooltip component
const Tooltip = ({ children, text }: { children: React.ReactNode; text: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
      >
        {children}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap z-50 pointer-events-none"
          >
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function CTA() {
  return (
    <section className="bg-white px-4 py-12 md:px-[120px] md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="rounded-2xl border border-[#ececed] bg-[#fcfbf3] p-6 md:rounded-[24px] md:p-12">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-[58px]">
            {/* Left - Phone Mockup */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex w-full max-w-[300px] items-center justify-center md:mb-[-48px] md:w-[412px] md:max-w-none"
            >
              <div className="relative">
                <img
                  src="/assets/stop_losing.png"
                  alt="Recipe App Demo"
                  className="h-auto w-full object-contain"
                />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex w-full flex-col gap-6 text-center md:w-[462px] md:gap-12 md:text-left"
            >
              {/* Header */}
              <div className="flex flex-col gap-3">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-oswald text-3xl font-semibold leading-[1.2] tracking-[-1px] text-[#0a090b] md:text-[48px] md:tracking-[-1.44px]"
                >
                  Stop Losing Recipes.
                  <br />
                  Start Cooking <span className="text-[#e74c3c]">Smarter</span>.
                </motion.h2>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="font-oswald text-[24px] font-normal leading-[28px] tracking-[-0.18px] text-[#4f4d55]"
                >
                  Join thousands of cooks who've organized
                  <br />
                  their kitchen with RecipeForLater.
                </motion.p>
              </div>

              {/* Benefits - 2x2 Grid */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-5"
              >
                {[
                  "7-day free trial",
                  "Unlimited recipe imports",
                  "Cancel anytime",
                  "AI-powered cooking assistant",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c1f4d4] p-1">
                      <Check className="h-4 w-4 text-[#019939]" />
                    </div>
                    <span className="font-inter text-[16px] font-[475] leading-[22px] tracking-[-0.18px] text-[#0a090b]">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Download Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
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
                <Tooltip text="Soon">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-10 w-[138px] cursor-pointer"
                  >
                    <img
                      src="/assets/google_store.png"
                      alt="Get it on Google Play"
                      className="h-full w-full object-contain"
                    />
                  </motion.div>
                </Tooltip>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

