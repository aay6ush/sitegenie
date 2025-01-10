"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { stats } from "@/constants";

export default function Stats() {
  return (
    <section className="relative bg-[#020817] text-white py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 via-purple-600/5 to-transparent" />
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
            3.1M+ websites created
            <span className="text-gray-400"> (and counting)</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time usage showing totals for users and websites created, along
            with 30-day prompts, requests, and analytics.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-wrap items-center gap-4 justify-between"
              >
                <div className="flex gap-1">
                  {stat.label.split("").map((char, i) => (
                    <CharCell key={i} char={char} />
                  ))}
                </div>
                <AnimatedValue value={stat.value} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(94,53,177,0.05),transparent_50%)]" />
    </section>
  );
}

const CharCell = ({ char }: { char: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="inline-block size-12 mx-[1px] bg-white/[0.02] border border-white/[0.05] rounded-sm"
  >
    <span className="flex items-center justify-center h-full font-mono text-lg text-white/80">
      {char}
    </span>
  </motion.div>
);

const AnimatedValue = ({ value }: { value: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-wrap gap-y-1">
      {value.split("").map((char, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <CharCell char={char} />
        </motion.div>
      ))}
    </div>
  );
};
