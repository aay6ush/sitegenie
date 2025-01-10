"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { plans } from "@/constants";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative bg-[#020817] text-white py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 via-purple-600/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020817] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pricing that fits your vision
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unlock the power of AI-driven web design with plans tailored for
            everyone, from startups to enterprises.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <motion.div
            className="inline-flex items-center bg-white/5 rounded-full p-1"
            whileHover={{ scale: 1.02 }}
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                !isYearly
                  ? "bg-[#c1f736] text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                isYearly
                  ? "bg-[#c1f736] text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Yearly
            </button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map(
            ({
              id,
              description,
              features,
              monthlyPrice,
              name,
              isPopular,
              yearlyPrice,
            }) => (
              <PricingPlanCard
                key={id}
                id={id}
                description={description}
                monthlyPrice={monthlyPrice}
                features={features}
                name={name}
                yearlyPrice={yearlyPrice}
                isPopular={isPopular}
                isYearly={isYearly}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

const PricingPlanCard = ({
  id,
  name,
  isPopular,
  description,
  features,
  yearlyPrice,
  monthlyPrice,
  isYearly,
}: PricingPlanCard) => {
  return (
    <motion.div
      key={name}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: id * 0.2 }}
      className="relative group"
    >
      <div
        className={`relative z-10 h-full p-8 rounded-2xl backdrop-blur-sm border ${
          isPopular
            ? "bg-white/10 border-purple-500/50"
            : "bg-white/5 border-white/10"
        }`}
      >
        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1 rounded-full bg-[#c1f736] text-black text-sm font-medium">
              Most popular
            </span>
          </div>
        )}

        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-400 mb-6">{description}</p>

        <div className="mb-6">
          <span className="text-5xl font-bold">
            ${isYearly ? yearlyPrice : monthlyPrice}
          </span>
          <span className="text-gray-400 ml-2">
            per {isYearly ? "year" : "month"}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 rounded-full font-medium mb-8 ${
            isPopular
              ? "bg-[#c1f736] text-black hover:bg-[#d4ff4d]"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          Subscribe
        </motion.button>

        <div className="space-y-4">
          <div className="text-sm text-gray-400 mb-4">This includes:</div>
          {features.map((feature) => (
            <div key={feature} className="flex items-center">
              <Check className="w-5 h-5 text-[#c1f736] mr-3 shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 ${
          isPopular ? "opacity-5" : ""
        }`}
      />
    </motion.div>
  );
};
