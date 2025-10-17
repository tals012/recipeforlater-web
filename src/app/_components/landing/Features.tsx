"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Share2, Upload } from "lucide-react";
import { NotificationStack } from "../NotificationStack";
import { MealPlannerNotification } from "../MealPlannerNotification";

const features = [
  {
    title: "Save from social media\nOR organize your collection",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/feature-1.jpg",
    fullWidth: true,
  },
  {
    title: "Share Recipes Collection with Friends & Family",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/feature-2.jpg",
  },
  {
    title: "Read on your phone\nOR cook hands-free",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <Upload className="h-6 w-6" />,
  },
  {
    title: "Follow the recipe\nOR adapt to your diet",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    fullWidth: true,
    simple: true,
  },
];

export function Features() {
  return (
    <section className="bg-white px-4 py-12 md:px-[120px] md:py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center md:mb-[60px]"
        >
          <h2 className="mb-3 font-['Oswald'] text-3xl font-semibold leading-[1.2] text-[#0a090b] md:text-5xl">
            Your Kitchen Deserves <span className="text-[#e74c3c]">Better</span>
          </h2>
          <p className="mx-auto max-w-[900px] font-['Oswald'] text-base font-normal leading-[1.4] text-[#4f4d55] md:text-2xl md:leading-[22px]">
            You save recipes everywhere, Instagram, TikTok, screenshots, notes, but when it's time
            to cook, nothing's where you need it.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Feature 1 - Full Width */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="flex items-start justify-between rounded-2xl bg-[rgba(252,251,243,0.49)] p-4 transition-all md:rounded-3xl md:p-6"
            >
              <div className="flex flex-col gap-2">
                <h3 className="whitespace-pre-line font-['Oswald'] text-xl font-medium leading-[1.2] text-[#0a090b] md:text-2xl">
                  Story Mode: Step-by-Step Cooking
                  <br />
                  Hands-Free with Voice Commands
                </h3>
                <p className="font-['Oswald'] text-sm font-normal leading-[1.4] text-[#4f4d55] md:text-base md:leading-[22px]">
                  Enter Story Mode to cook step-by-step-just say <span className="font-semibold text-[#019939]">"Next"</span> or <span className="font-semibold text-[#019939]">"Back"</span> to go through each instruction.
                  Ask for <span className="font-semibold text-[#019939]">ingredients</span> or <span className="font-semibold text-[#019939]">directions</span> anytime. Cook totally hands-free, guided by voice and on-screen steps!
                </p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative mt-2 w-fit"
                >
                  {/* Aura blur background */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      width: "80%",
                      height: "80%",
                      borderRadius: "50%",
                      filter: "blur(40px)",
                      background: "radial-gradient(circle, #cbf4ea 0%, #ffd14080 70%, transparent 100%)",
                      opacity: 0.8,
                      zIndex: 0,
                    }}
                  />
                  <img src="/assets/lets_start_cooking_new.png" alt="Story Mode demo" className="relative z-10 h-auto w-[280px] object-contain rounded-2xl shadow-lg" />
                </motion.div>
              </div>
            </motion.div>

            {/* Feature 2 - Share Collection */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="flex items-start justify-between rounded-2xl bg-[rgba(252,251,243,0.49)] p-4 transition-all md:rounded-3xl md:p-6"
            >
              <div className="flex flex-col gap-2">
                <h3 className="whitespace-pre-line font-['Oswald'] text-xl font-medium leading-[1.2] text-[#0a090b] md:text-2xl">
                  Share Recipes Collection
                  <br />
                  with Friends & Family
                </h3>
                <p className="font-['Oswald'] text-sm font-normal leading-[1.4] text-[#4f4d55] md:text-base md:leading-[22px]">
                  Get notified when someone shares a recipe with you. Share your collections and get feedback.
                </p>
                <div className="mt-2">
                  <NotificationStack />
                </div>
              </div>
            </motion.div>

            {/* Feature 3 - Cook hands-free */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="flex items-start justify-between rounded-2xl bg-[rgba(252,251,243,0.49)] p-4 transition-all md:rounded-3xl md:p-6"
            >
              <div className="flex flex-col gap-2">
                <h3 className="whitespace-pre-line font-['Oswald'] text-xl font-medium leading-[1.2] text-[#0a090b] md:text-2xl">
                  Weekly Meal Planner
                  <br />
                  App will remind you before each meal
                </h3>
                <p className="font-['Oswald'] text-sm font-normal leading-[1.4] text-[#4f4d55] md:text-base md:leading-[22px]">
                  App will remind you before each meal. You can also set reminders for specific recipes.
                </p>
                <div className="mt-2">
                  <MealPlannerNotification />
                </div>
              </div>
            </motion.div>

            {/* Feature 4 - Full Width */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="flex items-start justify-between rounded-2xl bg-[rgba(252,251,243,0.49)] p-4 transition-all md:rounded-3xl md:p-6"
            >
              <div className="flex flex-col gap-2">
                <h3 className="whitespace-pre-line font-['Oswald'] text-xl font-medium leading-[1.2] text-[#0a090b] md:text-2xl">
                  Follow the recipe
                  <br />
                  OR adapt to your diet
                </h3>
                <p className="font-['Oswald'] text-sm font-normal leading-[1.4] text-[#4f4d55] md:text-base md:leading-[22px]">
                  Convert any recipe to fit your diet. Smart ingredient substitutions.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <img
                    src="/assets/keto-green2.png"
                    alt="Keto label"
                    className="h-8 w-auto select-none object-contain"
                  />
                  <img
                    src="/assets/gluten.svg"
                    alt="Gluten free"
                    className="h-8 w-auto select-none object-contain"
                  />
                  <img
                    src="/assets/vegi.png"
                    alt="Vegetarian"
                    className="h-8 w-auto select-none object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Large Feature */}
          <motion.div
            className="flex w-full flex-col gap-4 overflow-hidden rounded-2xl p-4 md:w-[588px] md:gap-6 md:rounded-3xl md:p-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}          >
            <div className="w-full">
              <h3 className="mb-2 font-['Oswald'] text-2xl font-medium leading-[1.2] text-[#0a090b] md:text-[44px]">
                Smart Shopping list
              </h3>
              <p className="font-['Oswald'] text-sm font-normal leading-[1.4] text-[#4f4d55] md:text-base md:leading-[22px]">
                Create a shopping list from your recipes in seconds. Sort by aisle and Share with your loved ones.
              </p>
            </div>

            {/* Phone Mockup */}

            <div className="relative flex h-[300px] w-full items-center justify-center overflow-visible md:h-full md:w-[450px]">
              {/* Move aura in front with negative z-index if needed */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                  zIndex: 2,
                  width: "75%",
                  height: "75%",
                  borderRadius: "50%",
                  filter: "blur(64px)",
                  background:
                    "radial-gradient(circle at 55% 53%, #cbf4ea 0%, #ffd14080 70%, transparent 100%)",
                  opacity: 0.9,
                }}
              />
              <img
                src="/assets/iphone_mask_shopping_list.png"
                alt="Shopping List phone"
                className="relative z-10 h-full w-full object-contain"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

