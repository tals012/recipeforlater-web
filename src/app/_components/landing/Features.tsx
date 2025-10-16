"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Share2, Upload } from "lucide-react";

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
    <section className="bg-white px-[120px] py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-[60px] text-center"
        >
          <h2 className="mb-3 font-['Oswald'] text-5xl font-semibold leading-[1.2] text-[#0a090b]">
            Your Kitchen Deserves Better
          </h2>
          <p className="mx-auto max-w-[900px] font-['Oswald'] text-2xl font-normal leading-[22px] text-[#4f4d55]">
            You save recipes everywhere, Instagram, TikTok, screenshots, notes, but when it's time
            to cook, nothing's where you need it.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Feature 1 - Full Width */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="flex h-[207px] items-center gap-6 rounded-3xl bg-[rgba(252,251,243,0.49)] p-6 transition-all"
            >
              <div className="h-[164px] w-[203px] flex-shrink-0 overflow-hidden rounded-2xl shadow-lg">
                <img src="/assets/feature-create-collection.png" alt="Create collection" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="whitespace-pre-line font-['Oswald'] text-2xl font-medium leading-[1.2] text-[#0a090b]">
                  Save from social media
                  <br />
                  OR organize your collection
                </h3>
                <p className="font-['Oswald'] text-base font-normal leading-[22px] text-[#4f4d55]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </motion.div>

            {/* Features 2 & 3 - Side by Side */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="flex h-[251px] flex-col gap-6 overflow-hidden rounded-3xl bg-[rgba(252,251,243,0.49)] p-6 transition-all"
              >
                <div className="h-[71px] w-full overflow-hidden rounded-2xl shadow-md">
                  <img src="/assets/feature-share-notification.png" alt="Share notification" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="whitespace-pre-line font-['Oswald'] text-2xl font-medium leading-[1.2] text-[#0a090b]">
                    Share Recipes Collection with Friends & Family
                  </h3>
                  <p className="font-['Oswald'] text-base font-normal leading-[22px] text-[#4f4d55]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="flex h-[251px] flex-col justify-between rounded-3xl bg-[rgba(252,251,243,0.49)] p-6 transition-all"
              >
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg border-[1.5px] border-[#f9bd23] bg-[#f7f4e2]">
                  <Share2 className="h-6 w-6 text-[#f9bd23]" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="whitespace-pre-line font-['Oswald'] text-2xl font-medium leading-[1.2] text-[#0a090b]">
                    Read on your phone
                    <br />
                    OR cook hands-free
                  </h3>
                  <p className="font-['Oswald'] text-base font-normal leading-[22px] text-[#4f4d55]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Feature 4 - Full Width */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="flex items-center rounded-3xl bg-[rgba(252,251,243,0.49)] p-6 transition-all"
            >
              <div className="flex flex-col gap-2">
                <h3 className="whitespace-pre-line font-['Oswald'] text-2xl font-medium leading-[1.2] text-[#0a090b]">
                  Follow the recipe
                  <br />
                  OR adapt to your diet
                </h3>
                <p className="font-['Oswald'] text-base font-normal leading-[22px] text-[#4f4d55]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Large Feature */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className="flex h-[642px] flex-col items-center gap-5 overflow-hidden rounded-3xl bg-[rgba(252,251,243,0.49)] p-6 transition-all"
          >
            <div className="w-full">
              <h3 className="mb-2 font-['Oswald'] text-[44px] font-medium leading-[1.2] text-[#0a090b]">
                Smart Shopping list
              </h3>
              <p className="font-['Oswald'] text-base font-normal leading-[22px] text-[#4f4d55]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            {/* Phone Mockup */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex-1"
            >
              <div className="h-full w-[350px] overflow-hidden rounded-[40px] bg-white shadow-2xl">
                <img src="/assets/iphone-screen-2.png" alt="Shopping list" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

