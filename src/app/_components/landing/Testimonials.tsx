"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Home Cook, Mom of 3",
    image: "/testimonial-1.jpg",
    quote:
      "RecipeForLater completely transformed how I cook. I used to have recipes scattered everywhere-screenshots, bookmarks, random notes. Now everything's in one place, and the voice assistant means I never have to touch my phone with messy hands!",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "Food Blogger",
    image: "/testimonial-2.jpg",
    quote:
      "The AI diet conversion feature is a game-changer. I can instantly adapt any recipe for my dietary needs. Plus, the translation feature lets me explore recipes from around the world without language barriers.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Culinary Student",
    image: "/testimonial-3.jpg",
    quote:
      "As someone learning to cook, the hands-free voice assistant is incredible. I can focus on technique while the app guides me through each step. It's like having a personal cooking instructor!",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            Loved By Home Cooks Everywhere
          </h2>
          <p className="font-['Oswald'] text-2xl font-normal leading-[22px] text-[#4f4d55]">
            Join thousands who've organized their cooking life
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-[1200px]"
        >
          <div className="grid grid-cols-[400px_1fr] gap-8 rounded-3xl bg-gradient-to-br from-[#f7f4e2] to-white p-12 shadow-xl">
            {/* Left - Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="h-[394px] w-[394px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#177654] to-[#0f5239] shadow-2xl">
                  <div className="flex h-full items-center justify-center">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <span className="text-6xl">👤</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right - Content */}
            <div className="flex flex-col justify-between py-8">
              <div>
                {/* Stars */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6 flex gap-1"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-[#f9bd23] text-[#f9bd23]" />
                  ))}
                </motion.div>

                {/* Quote */}
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 font-['Oswald'] text-3xl font-light leading-[1.4] text-[#0a090b]"
                  >
                    "{testimonials[currentIndex]?.quote}"
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Author & Navigation */}
              <div className="flex items-center justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#177654]">
                        <span className="text-xl">
                          {testimonials[currentIndex]?.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-['Oswald'] text-lg font-semibold text-[#0a090b]">
                          {testimonials[currentIndex]?.name}
                        </p>
                        <p className="font-['Oswald'] text-base text-[#4f4d55]">
                          {testimonials[currentIndex]?.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#177654" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={previous}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-[#0a090b]" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#177654" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={next}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-[#0a090b]" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-[#177654]" : "w-2 bg-[#ececed]"
                  }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

