"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const tabs = [
  {
    id: "universal",
    title: "Universal Recipe Importer",
    features: [
      "Imports from Instagram, TikTok, YouTube, websites-anywhere",
      "Extracts recipes from photos, videos, and web pages",
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
    title: "Voice Assistant & Hey Chef! Mode",
    features: [
      "Completely hands-free cooking experience",
      "Ask 'what's next?' or 'repeat that step' to hear instructions",
      "Talk to the recipe in your own language",
      "Hey Chef! 'What can i replace the Sugar with?'",
    ],
  },
  {
    id: "diet",
    title: "AI Diet Conversions",
    features: [
      "Instant Keto, Vegan, Gluten-Free conversions",
      "Smart ingredient substitutions",
      "Maintains flavor profiles",
      "Creates a copy of the recipe with the diet you converted to",
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
    id: "story",
    title: "Story Mode",
    features: [
      "Step-by-Step Instructions: Clean, focused steps with timers and tips",
      "Hands-Free Voice Control: Say 'Next,' 'Back,' 'Repeat,' or 'Ingredients'",
      "Ask Anytime: 'What's the next step?' 'How long to simmer?' 'How much salt?'",
      "On-Screen + Voice Guidance: Text and spoken cues keep you in the flow",
      "Optional Video Sync: Match steps to video moments for visual confidence",
      "Kitchen-Friendly UI: Large text, high contrast, and big buttons when you need them",
    ],
  },
  {
    id: "grocery",
    title: "Intelligent Grocery List",
    features: [
      "Auto-Combine Ingredients: Merges items from multiple recipes into one clean list",
      "Organized by Store Aisle: Grouped by category for faster shopping",
      "Smart Adjustments: Updates quantities when you change servings or remove meals",
      "Shared Lists: Share with family or roommates so everyone stays synced",
    ],
  },
  {
    id: "planner",
    title: "Smart Meal Planner",
    features: [
      "Weekly Meal Planning: Easily plan breakfast, lunch, and dinner for the entire week",
      "Auto Sync with Shopping List: Ingredients are automatically added to your Smart Shopping List",
      "Shared Family Access: Share plans and collections with family or friends",
      "AI Suggestions: Get smart recipe recommendations based on your diet and preferences",
      "Flexible Editing: Drag, swap, or update meals anytime - everything stays in sync",
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
    id: "share",
    title: "Share Collections",
    features: [
      "Custom Collections: Create Dinner, Lunch, Dessert, or Holiday recipe groups",
      "Instant Sharing: Share collections with friends, family, or your cooking team",
      "Real-Time Updates: Any changes you make sync automatically for everyone",
      "Perfect for Collaboration: Plan meals, swap ideas, and discover new favorites together",
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
            Core Features (Detailed)
          </h2>
          <p className="mx-auto max-w-[900px] font-['Oswald'] text-2xl font-normal leading-[22px] text-[#4f4d55]">
            Your all-in-one solution for saving and cooking recipes
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex items-center justify-center gap-2">
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
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
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
                    extracts ingredients, steps, and cooking times-organizing everything into a
                    clean, easy-to-follow format.
                  </p>
                </motion.div>
              )}

              {tabs[activeTab]?.id === "diet" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <p className="mb-3 font-['Oswald'] text-lg font-semibold text-[#0a090b]">
                    Transform any recipe with a single tap.
                  </p>
                  <p className="mb-4 font-['Oswald'] text-base leading-[1.6] text-[#4f4d55]">
                    The AI identifies all ingredients that don't fit your diet and automatically replaces them - keeping the structure and steps intact.
                  </p>
                  <div className="flex items-center gap-2">
                    <motion.img
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      src="/assets/keto-green2.png"
                      alt="Keto label"
                      className="h-8 w-auto select-none object-contain"
                    />
                    <motion.img
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      src="/assets/gluten.svg"
                      alt="Gluten free"
                      className="h-8 w-auto select-none object-contain"
                    />
                    <motion.img
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      src="/assets/vegi.png"
                      alt="Vegetarian"
                      className="h-8 w-auto select-none object-contain"
                    />
                  </div>
                </motion.div>
              )}

              {tabs[activeTab]?.id === "nutrition" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <p className="mb-3 font-['Oswald'] text-lg font-semibold text-[#0a090b]">
                    Understand exactly what's on your plate - instantly.
                  </p>
                  <p className="font-['Oswald'] text-base leading-[1.6] text-[#4f4d55]">
                    The AI Nutrition Analyzer gives you a complete nutritional snapshot for every recipe you import or create.
                  </p>
                </motion.div>
              )}

              {tabs[activeTab]?.id === "planner" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <p className="mb-3 font-['Oswald'] text-lg font-semibold text-[#0a090b]">
                    Plan your week like a pro - organize every meal effortlessly and stay consistent with your goals.
                  </p>
                  <p className="font-['Oswald'] text-base leading-[1.6] text-[#4f4d55]">
                    Your recipes, schedule, and shopping list - all connected in one place.
                  </p>
                </motion.div>
              )}

              {tabs[activeTab]?.id === "grocery" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <p className="mb-3 font-['Oswald'] text-lg font-semibold text-[#0a090b]">
                    Your grocery list - now actually smart.
                  </p>
                  <p className="font-['Oswald'] text-base leading-[1.6] text-[#4f4d55]">
                    Automatically combines ingredients from all your planned recipes and keeps everything organized for a smooth shopping experience.
                  </p>
                </motion.div>
              )}

              {tabs[activeTab]?.id === "share" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <p className="mb-3 font-['Oswald'] text-lg font-semibold text-[#0a090b]">
                    Organize and share your favorite recipes - together.
                  </p>
                  <p className="font-['Oswald'] text-base leading-[1.6] text-[#4f4d55]">
                    Create curated recipe collections for every occasion and share them instantly with the people you love.
                  </p>
                </motion.div>
              )}

              {tabs[activeTab]?.id === "story" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <p className="mb-3 font-['Oswald'] text-lg font-semibold text-[#0a090b]">
                    Cook like a pro with clear, bite-size steps - totally hands-free with voice commands.
                  </p>
                  <p className="font-['Oswald'] text-base leading-[1.6] text-[#4f4d55]">
                    Enter Story Mode, say "Next" or "Back," and get guided through every instruction on screen and by voice.
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
                {tabs[activeTab]?.id === "voice" ? (
                  <img
                    src="/assets/voice_assitant.png"
                    alt="Voice Assistant"
                    className="h-auto w-full max-w-[500px] object-contain"
                  />
                ) : tabs[activeTab]?.id === "diet" ? (
                  <img
                    src="/assets/convert.png"
                    alt="AI Diet Conversions"
                    className="h-auto w-full max-w-[500px] object-contain"
                  />
                ) : tabs[activeTab]?.id === "translation" ? (
                  <img
                    src="/assets/lang.png"
                    alt="Smart Translation"
                    className="h-auto w-full max-w-[500px] object-contain"
                  />
                ) : tabs[activeTab]?.id === "nutrition" ? (
                  <img
                    src="/assets/nutrition.png"
                    alt="AI Nutrition Analyzer"
                    className="h-auto w-full max-w-[500px] object-contain"
                  />
                ) : tabs[activeTab]?.id === "planner" ? (
                  <img
                    src="/assets/weeklyplan.png"
                    alt="Smart Meal Planner"
                    className="h-auto w-full max-w-[500px] object-contain"
                  />
                ) : tabs[activeTab]?.id === "grocery" ? (
                  <img
                    src="/assets/shopping_list.png"
                    alt="Intelligent Grocery List"
                    className="h-auto w-full max-w-[500px] object-contain"
                  />
                ) : tabs[activeTab]?.id === "share" ? (
                  <img
                    src="/assets/shared.png"
                    alt="Share Collections"
                    className="h-auto w-full max-w-[500px] object-contain"
                  />
                ) : tabs[activeTab]?.id === "story" ? (
                  <img
                    src="/assets/story.png"
                    alt="Story Mode"
                    className="h-auto w-full max-w-[500px] object-contain"
                  />
                ) : (
                  <img
                    src="/assets/Container.png"
                    alt="Feature visual"
                    className="h-auto w-full max-w-[500px] object-contain"
                  />
                )}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

