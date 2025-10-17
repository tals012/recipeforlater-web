"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-[#f7f4e2] px-4 py-12 md:px-[120px] md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-[160px]">
          {/* Left - Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex w-full flex-col gap-6 md:flex-1 md:gap-12"
          >
            {/* Header */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              <h2 className="font-['Oswald'] text-3xl font-semibold leading-[1.2] tracking-[-1px] text-[#0a090b] md:text-[48px] md:tracking-[-1.44px]">
                Get in <span className="text-[#e74c3c]">touch</span> with us
              </h2>
              <p className="font-['Oswald'] text-[24px] font-normal leading-[22px] tracking-[-0.18px] text-[#4f4d55]">
                Let us know if there is anything we can do for you
              </p>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <input
                  type="text"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-10 w-full rounded-lg border border-[#e6e6e6] bg-white px-3 font-['Inter'] text-[14px] font-normal leading-[20px] tracking-[-0.05px] text-[#0a090b] placeholder:text-[#7f7d83] transition-all focus:border-[#177654] focus:outline-none focus:ring-2 focus:ring-[#177654]/20"
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <input
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-10 w-full rounded-lg border border-[#e6e6e6] bg-white px-3 font-['Inter'] text-[14px] font-normal leading-[20px] tracking-[-0.05px] text-[#0a090b] placeholder:text-[#7f7d83] transition-all focus:border-[#177654] focus:outline-none focus:ring-2 focus:ring-[#177654]/20"
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col gap-1.5"
              >
                <label className="font-['Inter'] text-[14px] font-[475] leading-[20px] tracking-[-0.05px] text-[#2d2b32]">
                  Message
                </label>
                <textarea
                  placeholder="Enter your message"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  rows={4}
                  className="w-full resize-none rounded-lg border border-[#e6e6e6] bg-white px-3 py-2 font-['Inter'] text-[14px] font-normal leading-[20px] tracking-[-0.05px] text-[#0a090b] placeholder:text-[#7f7d83] transition-all focus:border-[#177654] focus:outline-none focus:ring-2 focus:ring-[#177654]/20"
                />
              </motion.div>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex h-10 w-full items-center justify-center rounded-lg bg-[#177654] px-3.5 font-['Inter'] text-[14px] font-[550] leading-[20px] tracking-[-0.02px] text-white transition-all hover:bg-[#145d45]"
              >
                Contact us
              </motion.button>
            </form>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-1 items-end justify-center"
          >
            <div className="relative w-[412px] mb-[-98px]">
              <img
                src="/assets/stop_losing.png"
                alt="Recipe App Demo"
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

