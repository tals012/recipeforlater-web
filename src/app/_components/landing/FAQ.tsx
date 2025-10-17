"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does the voice assistant work?",
    answer:
      "Our voice assistant uses advanced AI to understand natural language commands. Simply say 'what's next?' or 'repeat that step' while cooking, and it will respond with clear, hands-free guidance. It works even when your hands are messy!",
  },
  {
    question: "Can I import recipes from any website or social media?",
    answer:
      "Yes! RecipeForLater can import recipes from Instagram, TikTok, YouTube, food blogs, and virtually any website. Just share the link or screenshot to the app, and our AI will automatically extract the ingredients and instructions.",
  },
  {
    question: "What dietary conversions are supported?",
    answer:
      "We support Keto, Vegan, Vegetarian, Gluten-Free, Dairy-Free, Paleo, and many more. Our AI intelligently suggests ingredient substitutions while maintaining the flavor profile of the original recipe.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Absolutely. We take your privacy seriously. All your recipes and personal data are encrypted and stored securely. We never share your information with third parties, and you can delete your account and all data at any time.",
  },
  {
    question: "Can I share my recipes with family and friends?",
    answer:
      "Yes! You can create collections and share them with anyone. They can view your recipes even without a RecipeForLater account. If they want to save and organize their own recipes, they'll need to sign up.",
  },
  {
    question: "What happens after my free trial ends?",
    answer:
      "After your 14-day free trial, you can choose to subscribe to continue accessing all features. If you don't subscribe, you'll still be able to view your saved recipes, but you won't be able to add new ones or use premium features like voice assistant and AI conversions.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel anytime from your account settings. There are no cancellation fees, and you'll retain access to all features until the end of your billing period.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#fffef9] px-[120px] py-20">
      <div className="mx-auto max-w-[900px]">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-3 font-['Oswald'] text-5xl font-semibold leading-[1.2] text-[#0a090b]">
            Frequently Asked <span className="text-[#e74c3c]">Questions</span>
          </h2>
          <p className="font-['Oswald'] text-xl font-normal leading-[1.2] text-[#4f4d55]">
            Everything you need to know about RecipeForLater
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="overflow-hidden rounded-2xl border border-[#ececed] bg-white transition-all hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[#f7f4e2]/30"
              >
                <span className="pr-8 font-['Oswald'] text-xl font-semibold text-[#0a090b]">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#177654] text-white"
                >
                  {openIndex === index ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[#ececed] px-6 pb-6 pt-4">
                      <p className="font-['Oswald'] text-lg leading-[1.6] text-[#4f4d55]">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl bg-gradient-to-br from-[#f7f4e2] to-white p-8 text-center"
        >
          <p className="mb-4 font-['Oswald'] text-xl font-semibold text-[#0a090b]">
            Still have questions?
          </p>
          <p className="mb-6 font-['Oswald'] text-lg text-[#4f4d55]">
            We're here to help! Reach out to our support team anytime.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-lg bg-[#177654] px-8 py-3 font-['Oswald'] text-base font-semibold text-white shadow-lg transition-all hover:bg-[#145d45]"
          >
            Contact Support
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

