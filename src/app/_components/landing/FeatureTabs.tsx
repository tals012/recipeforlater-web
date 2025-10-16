"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const tabs = [
  {
    id: "universal",
    title: "Universal Recipe Importer",
    features: [
      "Imports from Instagram, TikTok, YouTube, websites—anywhere",
      "Extracts recipes from photos, videos, and PDFs",
      "Works with handwritten recipes",
      "Saves to your personal library instantly",
      "Never lose a recipe again",
    ],
    description:
      "Whether it's a social media post, a blog, or a screenshot, RecipeForLater can import it. Our AI understands recipe formats across all platforms and automatically organizes them for you.",
    tagline: "Import from anywhere",
  },
  {
    id: "voice",
    title: "Voice Assistant",
    features: [
      "Completely hands-free cooking experience",
      "Ask 'what's next?' to hear instructions",
      "Set timers with your voice",
      "Scale recipes verbally",
    ],
  },
  {
    id: "diet",
    title: "AI Diet Conversions",
    features: [
      "Instant Keto, Vegan, Gluten-Free conversions",
      "Smart ingredient substitutions",
      "Maintains flavor profiles",
    ],
  },
  {
    id: "translation",
    title: "Smart Translation",
    features: [
      "Auto-detect language",
      "Cooking-specific terminology",
      "100+ languages supported",
    ],
  },
  {
    id: "nutrition",
    title: "AI Nutrition Analyzer",
    features: [
      "Automatic nutritional breakdown",
      "Calorie and macro tracking",
      "Dietary restriction highlighting",
    ],
  },
  {
    id: "planner",
    title: "Smart Meal Planner",
    features: [
      "Weekly meal planning",
      "Auto-generate shopping lists",
      "Dietary preferences included",
    ],
  },
  {
    id: "grocery",
    title: "Intelligent Grocery List",
    features: [
      "Combines ingredients from multiple recipes",
      "Organizes by store aisle",
      "Share with family",
    ],
  },
  {
    id: "share",
    title: "Share Collections",
    features: [
      "Create themed collections",
      "Share with friends and family",
      "Collaborate on meal plans",
    ],
  },
  {
    id: "story",
    title: "Story Mode",
    features: [
      "Video-synced cooking steps",
      "TikTok-style vertical format",
      "Follow along seamlessly",
    ],
  },
  {
    id: "assistant",
    title: "Personal Cooking Assistant",
    features: [
      "AI-powered cooking tips",
      "Ingredient substitution suggestions",
      "Real-time Q&A while cooking",
    ],
  },
];

export function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white px-[120px] py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-3 font-['Oswald'] text-5xl font-semibold leading-[1.2] text-[#0a090b]">
            Key Differentiators
          </h2>
          <p className="mx-auto max-w-[900px] font-['Oswald'] text-2xl font-normal leading-[22px] text-[#4f4d55]">
            Your all-in-one solution for saving and cooking recipes
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap gap-4">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(index)}
              className={`rounded-lg px-4 py-2 font-['Oswald'] text-base font-medium transition-all ${activeTab === index
                  ? "bg-[#177654] text-white shadow-lg"
                  : "bg-[#f7f4e2] text-[#4f4d55] hover:bg-[#ebe8d4]"
                }`}
            >
              {tab.title}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-12 rounded-3xl bg-gradient-to-br from-[#f7f4e2] to-white p-12"
          >
            {/* Left - Content */}
            <div className="flex flex-col justify-center gap-8">
              <div>
                <div className="mb-4 inline-block rounded-lg bg-[#f9bd23] px-3 py-1 font-['Oswald'] text-sm font-semibold uppercase tracking-wide text-[#0a090b]">
                  {tabs[activeTab]?.tagline ?? "Feature"}
                </div>
                <h3 className="mb-4 font-['Oswald'] text-4xl font-semibold leading-[1.2] text-[#0a090b]">
                  {tabs[activeTab]?.title}
                </h3>
                {tabs[activeTab]?.description && (
                  <p className="font-['Oswald'] text-lg leading-[1.6] text-[#4f4d55]">
                    {tabs[activeTab].description}
                  </p>
                )}
              </div>

              <ul className="space-y-4">
                {tabs[activeTab]?.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#c1f4d4]">
                      <Check className="h-4 w-4 text-[#019939]" />
                    </div>
                    <span className="font-['Oswald'] text-base text-[#0a090b]">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {tabs[activeTab]?.id === "universal" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <p className="mb-3 font-['Oswald'] text-lg font-semibold text-[#0a090b]">
                    Here's how it works:
                  </p>
                  <p className="font-['Oswald'] text-base leading-[1.6] text-[#4f4d55]">
                    Share any recipe link, screenshot, or video to RecipeForLater. Our AI instantly
                    extracts ingredients, steps, and cooking times—organizing everything into a
                    clean, easy-to-follow format.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Right - Visual */}
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-[560px] w-[310px] rounded-[38px] bg-[#0a0a0a] shadow-2xl"
                >
                  <div className="relative m-[8px] h-[544px] rounded-[34px] bg-black">
                    <div className="absolute left-1/2 top-0 z-10 h-[18px] w-[108px] -translate-x-1/2 rounded-b-[12px] bg-black" />
                    <img src="/assets/iphone-screen-1.png" alt="Feature visual" className="absolute inset-0 h-full w-full rounded-[30px] object-cover" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

