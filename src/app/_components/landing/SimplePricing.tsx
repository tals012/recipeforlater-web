"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "$4.99",
    period: "per month",
    features: [
      "Unlimited recipe imports",
      "Voice cooking assistant",
      "AI diet conversions",
      "Smart translation",
      "Nutrition analysis",
    ],
    popular: false,
  },
  {
    name: "Annual",
    price: "$34.99",
    period: "per year",
    badge: "Save 42% ($59.88 value)",
    features: [
      "Everything in Monthly",
      "Priority customer support",
      "Early access to new features",
    ],
    popular: true,
  },
];

export function SimplePricing() {
  return null;

  return (
    <section className="bg-[#fffef9] px-[120px] py-20">
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
            Ridiculously Simple Pricing
          </h2>
          <p className="font-['Oswald'] text-2xl font-normal leading-[22px] text-[#4f4d55]">
            Try free for 14 days. No credit card required.
          </p>
          <p className="mt-2 font-['Oswald'] text-lg font-normal leading-[22px] text-[#4f4d55]">
            Cancel anytime-we promise no hard feelings.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              className={`relative overflow-hidden rounded-3xl border-2 ${plan.popular ? "border-[#177654]" : "border-[#ececed]"
                } bg-white p-8 transition-all`}
            >
              {plan.badge && (
                <div className="absolute right-8 top-8 rounded-full bg-[#f9bd23] px-3 py-1 font-['Oswald'] text-xs font-semibold text-[#0a090b]">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8 flex items-baseline justify-between border-b border-[#ececed] pb-8">
                <div>
                  <h3 className="mb-2 font-['Oswald'] text-2xl font-semibold text-[#0a090b]">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="font-['Oswald'] text-5xl font-bold text-[#0a090b]">
                      {plan.price}
                    </span>
                    <span className="font-['Oswald'] text-lg text-[#4f4d55]">{plan.period}</span>
                  </div>
                </div>

                <div className="h-px flex-1 bg-[#ececed]" />

                <div className="text-right">
                  <p className="font-['Oswald'] text-sm font-semibold uppercase tracking-wide text-[#4f4d55]">
                    Features
                  </p>
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#e4ffe2]">
                      <Check className="h-3 w-3 text-[#019939]" />
                    </div>
                    <span className="font-['Oswald'] text-base text-[#0a090b]">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 font-['Oswald'] text-base font-semibold transition-all ${plan.popular
                  ? "bg-[#177654] text-white shadow-lg hover:bg-[#145d45]"
                  : "border-2 border-[#177654] text-[#177654] hover:bg-[#177654] hover:text-white"
                  }`}
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="mb-8 font-['Oswald'] text-xl font-semibold text-[#0a090b]">
            Trusted by 10,000+ home cooks
          </p>
          <div className="flex justify-center gap-12">
            {["⭐ 4.9/5 on App Store", "⭐ 4.8/5 on Google Play", "✓ 14-day money-back guarantee"].map(
              (text, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="font-['Oswald'] text-lg font-medium text-[#4f4d55]"
                >
                  {text}
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

