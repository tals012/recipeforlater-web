"use client";

import React from "react";
import { Hero } from "./landing/Hero";
import { Features } from "./landing/Features";
import { PricingComparison } from "./landing/PricingComparison";
import { FeatureTabs } from "./landing/FeatureTabs";
import { SimplePricing } from "./landing/SimplePricing";
import { Testimonials } from "./landing/Testimonials";
import { CTA } from "./landing/CTA";
import { Contact } from "./landing/Contact";
import { FAQ } from "./landing/FAQ";
import { Footer } from "./landing/Footer";
import { Header } from "./landing/Header";

export default function NewLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <PricingComparison />
      <FeatureTabs />
      <SimplePricing />
      <Testimonials />
      <CTA />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

