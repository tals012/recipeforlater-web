"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  {
    name: "Voice Cooking Assistant",
    rfl: { text: "Full hands-free control", icon: "check" },
    recime: { icon: "x" },
    deglaze: { icon: "x" },
  },
  {
    name: "Audio-Only Video Import",
    rfl: { text: "AI analyzes voice", icon: "check" },
    recime: { icon: "x" },
    deglaze: { icon: "x" },
  },
  {
    name: "Diet Conversion (AI)",
    rfl: { text: "Keto, Vegan, GF", icon: "check" },
    recime: { icon: "x" },
    deglaze: { icon: "x" },
  },
  {
    name: "Smart Translation",
    rfl: { text: "Auto-detect + cooking terms", icon: "check" },
    recime: { icon: "x" },
    deglaze: { icon: "x" },
  },
  {
    name: "Story Mode",
    rfl: { text: "Video-synced steps", icon: "check" },
    recime: { icon: "x" },
    deglaze: { icon: "x" },
  },
  {
    name: "Price",
    rfl: { text: "$4.99/mo or $34.99/yr" },
    recime: { text: "$39.99/yr" },
    deglaze: { text: "Unknown" },
  },
  {
    name: "Free Trial",
    rfl: { text: "Full features", icon: "check" },
    recime: { text: "Limited to 8 saves", icon: "warning" },
    deglaze: { text: "Unknown" },
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
  return (
    <div className="bg-[#fffef9] px-[120px] py-20">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-3 font-['Oswald'] text-5xl font-semibold leading-[1.2] text-[#0a090b]">
            Why RecipeForLater Wins
          </h2>
          <p className="font-['Oswald'] text-2xl font-normal leading-[1.2] text-[#4f4d55]">
            How We're Different from ReciMe & Deglaze
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden rounded-3xl border border-[#ececed]"
        >
          <div className="grid grid-cols-4 bg-white">
            {/* Header Row */}
            <div className="border-r border-[#ececed] bg-white px-8 py-5">
              <div className="mb-1 font-['Oswald'] text-xl font-semibold text-[#0a090b]">
                Feature
              </div>
              <p className="font-['Oswald'] text-lg leading-[22px] text-[#4f4d55]">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
            <div className="border-r border-[#ececed] bg-white px-8 py-5">
              <div className="mb-1 font-['Oswald'] text-xl font-semibold text-[#0a090b]">
                RecipeForLater
              </div>
              <p className="font-['Oswald'] text-lg leading-[22px] text-[#4f4d55]">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
            <div className="border-r border-[#ececed] bg-white px-8 py-5">
              <div className="mb-1 font-['Oswald'] text-xl font-semibold text-[#0a090b]">
                ReciMe
              </div>
              <p className="font-['Oswald'] text-lg leading-[22px] text-[#4f4d55]">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
            <div className="bg-white px-8 py-5">
              <div className="mb-1 font-['Oswald'] text-xl font-semibold text-[#0a090b]">
                Deglaze
              </div>
              <p className="font-['Oswald'] text-lg leading-[22px] text-[#4f4d55]">
                Lorem Ipsum is simply dummy text of the printing.
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
                  <span className="font-['Oswald'] text-base font-[550] leading-5 text-[#0a090b]">
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
                    <span className="font-['Oswald'] text-base font-[550] leading-5 text-[#0a090b]">
                      {feature.rfl.text}
                    </span>
                  )}
                </motion.div>

                {/* ReciMe Column */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 + 0.15 }}
                  className="flex items-center gap-[9px] border-t border-r border-[#ececed] bg-white px-8 py-4"
                >
                  {feature.recime.icon && <IconBadge icon={feature.recime.icon as any} />}
                  {feature.recime.text && (
                    <span className="font-['Oswald'] text-base font-[550] leading-5 text-[#0a090b]">
                      {feature.recime.text}
                    </span>
                  )}
                </motion.div>

                {/* Deglaze Column */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 + 0.2 }}
                  className="flex items-center gap-[9px] border-t border-[#ececed] bg-white px-8 py-4"
                >
                  {feature.deglaze.icon && <IconBadge icon={feature.deglaze.icon as any} />}
                  {feature.deglaze.text && (
                    <span className="font-['Oswald'] text-base font-[550] leading-5 text-[#0a090b]">
                      {feature.deglaze.text}
                    </span>
                  )}
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="mb-10 text-center font-['Oswald'] text-5xl font-semibold leading-[1.2] text-[#0a090b]">
            Key Differentiators
          </h3>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "We're the only app with full voice control",
                description:
                  `Cook completely hands-free. Ask "what's next?" while your hands are messy—RecipeForLater reads each step aloud.`,
              },
              {
                title: "Instant diet conversions",
                description:
                  "Any recipe becomes Keto, Vegan, or Gluten-Free in seconds—with smart ingredient swaps.",
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
                className="flex gap-6 rounded-3xl border border-[#ececed] bg-white p-6 transition-all"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#c1f4d4]">
                  <Check className="h-5 w-5 text-[#019939]" />
                </div>
                <div>
                  <h4 className="mb-2 font-['Inter'] text-xl font-semibold leading-[1.2] text-[#0a090b]">
                    {item.title}
                  </h4>
                  <p className="font-['Inter'] text-base leading-[22px] text-[#4f4d55]">
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

