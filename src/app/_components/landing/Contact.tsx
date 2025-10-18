"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { sendContactEmail } from "@/app/actions/sendContactEmail";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      if (result.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <h2 className="font-oswald text-3xl font-semibold leading-[1.2] tracking-[-1px] text-[#0a090b] md:text-[48px] md:tracking-[-1.44px]">
                Get in <span className="text-[#e74c3c]">touch</span> with us
              </h2>
              <p className="font-oswald text-[24px] font-normal leading-[22px] tracking-[-0.18px] text-[#4f4d55]">
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
                  className="h-10 w-full rounded-lg border border-[#e6e6e6] bg-white px-3 font-inter text-[14px] font-normal leading-[20px] tracking-[-0.05px] text-[#0a090b] placeholder:text-[#7f7d83] transition-all focus:border-[#177654] focus:outline-none focus:ring-2 focus:ring-[#177654]/20"
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
                  className="h-10 w-full rounded-lg border border-[#e6e6e6] bg-white px-3 font-inter text-[14px] font-normal leading-[20px] tracking-[-0.05px] text-[#0a090b] placeholder:text-[#7f7d83] transition-all focus:border-[#177654] focus:outline-none focus:ring-2 focus:ring-[#177654]/20"
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col gap-1.5"
              >
                <label className="font-inter text-[14px] font-[475] leading-[20px] tracking-[-0.05px] text-[#2d2b32]">
                  Message
                </label>
                <textarea
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full resize-none rounded-lg border border-[#e6e6e6] bg-white px-3 py-2 font-inter text-[14px] font-normal leading-[20px] tracking-[-0.05px] text-[#0a090b] placeholder:text-[#7f7d83] transition-all focus:border-[#177654] focus:outline-none focus:ring-2 focus:ring-[#177654]/20"
                />
              </motion.div>

              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`rounded-lg px-4 py-3 text-sm ${submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="flex h-10 w-full items-center justify-center rounded-lg bg-[#177654] px-3.5 font-inter text-[14px] font-[550] leading-[20px] tracking-[-0.02px] text-white transition-all hover:bg-[#145d45] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Contact us"}
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

