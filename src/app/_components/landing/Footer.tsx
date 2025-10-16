"use client";

import React from "react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a090b] px-[120px] py-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center justify-between">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="RecipeForLater" className="h-8 w-auto" />
              <div className="flex items-center gap-2">
                <span className="font-['Oswald'] text-xl font-bold text-white">
                  RecipeForLater
                </span>
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-8"
          >
            <a
              href="/privacy"
              className="font-['Oswald'] text-base text-white/70 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="font-['Oswald'] text-base text-white/70 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
            <span className="font-['Oswald'] text-base text-white/50">
              © {currentYear} RecipeForLater
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

