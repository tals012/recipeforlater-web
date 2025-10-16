"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 bg-[#f7f4e2]"
    >
      <div className="mx-auto flex items-center justify-center px-[100px] py-5">
        <div className="flex w-full max-w-[1240px] items-center justify-center gap-5 rounded-xl bg-white px-3 py-3 shadow-[0px_10px_18px_-2px_rgba(10,9,11,0.07)]">
          {/* Logo */}
          <div className="flex h-[33px] w-[42px] items-center overflow-hidden rounded">
            <img src="/assets/logo.png" alt="RecipeForLater" className="h-full w-full object-contain" />
          </div>

          {/* Divider */}
          <div className="h-[17px] w-px bg-gray-300" />

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            <a
              href="#home"
              className="rounded-lg px-2 py-2 font-['Oswald'] text-sm font-medium text-[#4f4d55] transition-colors hover:bg-gray-50"
            >
              Home
            </a>
            <button className="flex items-center gap-1.5 rounded-lg px-2 py-2 font-['Oswald'] text-sm font-medium text-[#4f4d55] transition-colors hover:bg-gray-50">
              Products
              <ChevronDown className="h-4 w-4" />
            </button>
            <a
              href="#pricing"
              className="rounded-lg px-2 py-2 font-['Oswald'] text-sm font-medium text-[#4f4d55] transition-colors hover:bg-gray-50"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="rounded-lg px-2 py-2 font-['Oswald'] text-sm font-medium text-[#4f4d55] transition-colors hover:bg-gray-50"
            >
              FAQ
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <button className="rounded-md border border-[#e6e6e6] bg-white px-2.5 py-1.5 font-['Oswald'] text-sm font-medium text-[#0c211d] transition-colors hover:bg-gray-50">
              Watch Demo
            </button>
            <button className="flex items-center gap-2 rounded-md bg-[#177654] px-2.5 py-1.5 font-['Oswald'] text-sm font-medium text-white transition-colors hover:bg-[#145d45]">
              Free Trial
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

