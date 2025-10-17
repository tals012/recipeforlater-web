"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  {
    name: "🧠 Smart Importer",
    rfl: { text: "Paste from anywhere - instantly organized", icon: "check" },
    other: { text: "Limited to few recipes or weekly limit", icon: "x" },
  },
  {
    name: "🛒 Smart Shopping List",
    rfl: { text: "Grouped by supermarket sections", icon: "check" },
    other: { text: "Basic list", icon: "warning" },
  },
  {
    name: "🔮 Convert Recipe in a Click",
    rfl: { text: "Keto, Vegan, GF with AI", icon: "check" },
    other: { icon: "x" },
  },
  {
    name: "📊 Automatic Nutrition Facts",
    rfl: { text: "Calories, macros & insights", icon: "check" },
    other: { icon: "x" },
  },
  {
    name: "👥 Share collections with family",
    rfl: { text: "Collaborate & share", icon: "check" },
    other: { text: "Basic sharing", icon: "warning" },
  },
  {
    name: "🎙️ Cook hands-free",
    rfl: { text: "AI Chef reads aloud - say 'Next'", icon: "check" },
    other: { icon: "x" },
  },
  {
    name: "📅 Plan your meals",
    rfl: { text: "Drag & drop into your week", icon: "check" },
    other: { text: "Limited", icon: "warning" },
  },
  {
    name: "🌐 Translate recipes instantly",
    rfl: { text: "One tap - any language", icon: "check" },
    other: { icon: "x" },
  },
  {
    name: "Price",
    rfl: { text: "$4.99/mo or $34.99/yr + 7 days free trial" },
    other: { text: "$39.99/yr+" },
  },
  {
    name: "Free Trial",
    rfl: { text: "7 days - Full features", icon: "check" },
    other: { text: "Limited features", icon: "warning" },
  },
];

const IconBadge = ({ icon }: { icon: "check" | "x" | "warning" }) => {
  if (icon === "check") {
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e4ffe2]">
        <Check className="h-3 w-3 text-[#019939]" strokeWidth={3} />
      </div>
    );
  }
  if (icon === "x") {
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe2e2]">
        <X className="h-3 w-3 text-[#df421a]" strokeWidth={3} />
      </div>
    );
  }
  if (icon === "warning") {
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fffbdc]">
        <span className="text-xs">⚠</span>
      </div>
    );
  }
  return null;
};

export function PricingComparison() {
  const scrollToFeatures = () => {
    // Find the FeatureTabs section by looking for its unique heading
    const featureTabsSection = Array.from(document.querySelectorAll('h2')).find(
      (h2) => h2.textContent?.includes('Key Differentiators')
    )?.closest('section');

    if (featureTabsSection) {
      featureTabsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#fffef9] px-4 py-12 md:px-[120px] md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center md:mb-16"
        >
          <h2 className="mb-3 font-oswald text-3xl font-semibold leading-[1.2] text-[#0a090b] md:text-5xl">
            Why RecipeForLater <span className="text-[#e74c3c]">Wins</span>
          </h2>
          <p className="font-oswald text-base font-normal leading-[1.2] text-[#4f4d55] md:text-2xl">
            How We're Different from the Competition
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto overflow-hidden rounded-2xl border border-[#ececed] md:rounded-3xl"
        >
          <div className="grid min-w-[800px] grid-cols-3 bg-white md:min-w-0">
            {/* Header Row */}
            <div className="border-r border-[#ececed] bg-white px-4 py-4 md:px-8 md:py-5">
              <div className="mb-1 font-oswald text-base font-semibold text-[#0a090b] md:text-xl">
                Feature
              </div>
              <p className="font-oswald text-lg leading-[22px] text-[#4f4d55]">
                Compare what makes us different
              </p>
            </div>
            <div className="border-r border-[#ececed] bg-white px-8 py-5">
              <div className="flex flex-row items-center gap-2 mb-1 font-oswald text-xl font-semibold text-[#0a090b]">
                <img src="/assets/logonew.png" alt="RecipeForLater" className="h-6 w-6  " />
                RecipeForLater
              </div>
              <p className="font-oswald text-lg leading-[22px] text-[#4f4d55]">
                Smart AI-powered recipe assistant
              </p>
            </div>
            <div className="bg-white px-8 py-5">
              <div className="mb-1 font-oswald text-xl font-semibold text-[#0a090b]">
                Other Apps
              </div>
              <p className="font-oswald text-lg leading-[22px] text-[#4f4d55]">
                Traditional recipe managers
              </p>
            </div>

            {/* Feature Rows */}
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                {/* Feature Name Column */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center border-t border-r border-[#ececed] bg-white px-8 py-4"
                >
                  <span className="font-oswald text-base font-[550] leading-5 text-[#0a090b]">
                    {feature.name}
                  </span>
                </motion.div>

                {/* RecipeForLater Column */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 + 0.1 }}
                  className="flex items-center gap-[9px] border-t border-r border-[#ececed] bg-white px-8 py-4"
                >
                  {feature.rfl.icon && <IconBadge icon={feature.rfl.icon as any} />}
                  {feature.rfl.text && (
                    <span className="font-oswald text-base font-[550] leading-5 text-[#0a090b]">
                      {feature.rfl.text}
                    </span>
                  )}
                </motion.div>

                {/* Other Apps Column */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 + 0.15 }}
                  className="flex items-center gap-[9px] border-t border-[#ececed] bg-white px-8 py-4"
                >
                  {feature.other.icon && <IconBadge icon={feature.other.icon as any} />}
                  {feature.other.text && (
                    <span className="font-oswald text-base font-[550] leading-5 text-[#0a090b]">
                      {feature.other.text}
                    </span>
                  )}
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* CTA Button after table */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 font-oswald text-2xl font-semibold text-[#0a090b]">
            We have soooo many more features! 🎉
          </p>
          <motion.button
            onClick={scrollToFeatures}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-md bg-[#177654] px-8 py-4 font-inter text-base font-medium text-white shadow-lg transition-all hover:bg-[#145d45]"
          >
            Click here to see them all →
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 md:mt-16"
        >
          <h3 className="mb-6 text-center font-oswald text-2xl font-semibold leading-[1.2] text-[#0a090b] md:mb-10 md:text-5xl">
            Key Differentiators
          </h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {[
              {
                title: "We're the only app with full voice control",
                description:
                  `Cook completely hands-free. Ask "what's next?" while your hands are messy-RecipeForLater reads each step aloud.`,
              },
              {
                title: "Instant diet conversions",
                description:
                  "Any recipe becomes Keto, Vegan, or Gluten-Free in seconds-with smart ingredient swaps.",
              },
              {
                title: "We analyze audio-only content",
                description:
                  "Found a recipe podcast or voice-only video? Our AI extracts ingredients and steps from pure audio.",
              },
              {
                title: "Built-in translation",
                description:
                  "Cook recipes from anywhere in the world, automatically translated into your language.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                className="flex gap-4 rounded-2xl border border-[#ececed] bg-white p-4 transition-all md:gap-6 md:rounded-3xl md:p-6"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#c1f4d4] md:h-10 md:w-10">
                  <Check className="h-4 w-4 text-[#019939] md:h-5 md:w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-inter text-base font-semibold leading-[1.2] text-[#0a090b] md:mb-2 md:text-xl">
                    {item.title}
                  </h4>
                  <p className="font-inter text-sm leading-[1.4] text-[#4f4d55] md:text-base md:leading-[22px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

