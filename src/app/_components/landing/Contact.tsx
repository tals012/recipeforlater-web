"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white px-[120px] py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-[520px_1fr] items-center gap-20">
          {/* Left - Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10"
            >
              <h2 className="mb-3 font-['Oswald'] text-5xl font-semibold leading-[1.2] text-[#0a090b]">
                Get in touch with us
              </h2>
              <p className="font-['Oswald'] text-xl font-normal leading-[1.2] text-[#4f4d55]">
                Have questions? We'd love to hear from you.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-[#ececed] bg-white px-4 py-3 font-['Oswald'] text-base text-[#0a090b] transition-all focus:border-[#177654] focus:outline-none focus:ring-2 focus:ring-[#177654]/20"
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
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-[#ececed] bg-white px-4 py-3 font-['Oswald'] text-base text-[#0a090b] transition-all focus:border-[#177654] focus:outline-none focus:ring-2 focus:ring-[#177654]/20"
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <textarea
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full resize-none rounded-lg border border-[#ececed] bg-white px-4 py-3 font-['Oswald'] text-base text-[#0a090b] transition-all focus:border-[#177654] focus:outline-none focus:ring-2 focus:ring-[#177654]/20"
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
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#177654] px-4 py-3 font-['Oswald'] text-base font-semibold text-white shadow-lg transition-all hover:bg-[#145d45]"
              >
                Send Message
                <Send className="h-5 w-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="h-[700px] w-[345px] overflow-hidden rounded-[40px] bg-white shadow-2xl">
                <div className="h-full w-full bg-gradient-to-br from-[#177654] to-[#0f5239] p-4">
                  <div className="h-full w-full rounded-[32px] bg-white/10 backdrop-blur-sm" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

