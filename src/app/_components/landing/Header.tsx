"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Dynamic Island Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-0 right-0 top-0 z-50 md:hidden"
      >
        <div className="mx-auto flex items-center justify-center px-4 py-3">
          <motion.div
            animate={{
              width: isMobileMenuOpen ? "100%" : "auto",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center justify-between gap-3 rounded-full bg-white px-4 py-3 shadow-lg"
          >
            {/* Logo */}
            <div className="flex h-[33px] w-[42px] items-center overflow-hidden rounded">
              <img src="/assets/logo.png" alt="RecipeForLater" className="h-full w-full object-cover" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center rounded-full p-1.5 text-[#4f4d55] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </motion.div>
        </div>
      </motion.header>

      {/* Desktop Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-0 right-0 top-0 z-50 hidden md:block "
      >
        <div className="mx-auto flex items-center justify-center px-[100px] py-5">
          <div className="flex w-full max-w-[580px] items-center justify-center gap-5 rounded-xl bg-white px-3 py-3 shadow-[0px_10px_18px_-2px_rgba(10,9,11,0.07)]">
            {/* Logo */}
            <div className="flex h-[33px] w-[42px] items-center overflow-hidden rounded">
              <img src="/assets/minimal_logo.png" alt="RecipeForLater" className="h-full w-full object-contain" />
            </div>

            {/* Divider */}
            <div className="h-[17px] w-px bg-gray-300" />

            {/* Navigation */}
            <nav className="flex items-center gap-2">
              <a
                href="#home"
                className="rounded-lg px-2 py-2 font-oswald text-sm font-medium text-[#4f4d55] transition-colors hover:bg-gray-50"
              >
                Home
              </a>
              <button className="flex items-center gap-1.5 rounded-lg px-2 py-2 font-oswald text-sm font-medium text-[#4f4d55] transition-colors hover:bg-gray-50">
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              <a
                href="#pricing"
                className="rounded-lg px-2 py-2 font-oswald text-sm font-medium text-[#4f4d55] transition-colors hover:bg-gray-50"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="rounded-lg px-2 py-2 font-oswald text-sm font-medium text-[#4f4d55] transition-colors hover:bg-gray-50"
              >
                FAQ
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2">
              <button className="rounded-md border border-[#e6e6e6] bg-white px-2.5 py-1.5 font-oswald text-sm font-medium text-[#0c211d] transition-colors hover:bg-gray-50">
                Watch Demo
              </button>
              <button className="flex items-center gap-2 rounded-md bg-[#177654] px-2.5 py-1.5 font-oswald text-sm font-medium text-white transition-colors hover:bg-[#145d45]">
                Free Trial
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-white md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onClick={(e) => e.stopPropagation()}
              className="flex w-full max-w-md flex-col items-center justify-center gap-8 px-8"
            >
              {/* Navigation Links */}
              <nav className="flex w-full flex-col items-center gap-4">
                <motion.a
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  href="#home"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full rounded-2xl bg-[#f7f4e2] px-6 py-4 text-center font-oswald text-2xl font-semibold text-[#0a090b] transition-all hover:bg-[#ebe8d4]"
                >
                  Home
                </motion.a>
                <motion.button
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f7f4e2] px-6 py-4 font-oswald text-2xl font-semibold text-[#0a090b] transition-all hover:bg-[#ebe8d4]"
                >
                  Products
                  <ChevronDown className="h-6 w-6" />
                </motion.button>
                <motion.a
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  href="#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full rounded-2xl bg-[#f7f4e2] px-6 py-4 text-center font-oswald text-2xl font-semibold text-[#0a090b] transition-all hover:bg-[#ebe8d4]"
                >
                  Pricing
                </motion.a>
                <motion.a
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  href="#faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full rounded-2xl bg-[#f7f4e2] px-6 py-4 text-center font-oswald text-2xl font-semibold text-[#0a090b] transition-all hover:bg-[#ebe8d4]"
                >
                  FAQ
                </motion.a>
              </nav>

              {/* Mobile CTA Buttons */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="flex w-full flex-col gap-3"
              >
                <button className="w-full rounded-2xl border-2 border-[#177654] bg-white px-6 py-4 font-oswald text-lg font-semibold text-[#177654] transition-all hover:bg-gray-50">
                  Watch Demo
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#177654] px-6 py-4 font-oswald text-lg font-semibold text-white transition-all hover:bg-[#145d45]">
                  Free Trial
                  <ArrowRight className="h-5 w-5" />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

