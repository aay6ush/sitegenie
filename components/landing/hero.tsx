"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import WordRotate from "@/components/ui/word-rotate";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { BorderBeam } from "@/components/ui/border-beam";
import { words } from "@/constants";

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#020817] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 via-purple-600/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020817] to-transparent" />
      </div>

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8">
              Create{" "}
              <span className="relative inline-flex items-center">
                <span className="absolute inset-0 bg-white/5 rounded-2xl transform -skew-x-6" />

                <WordRotate className="relative px-4 py-2" words={words} />
              </span>{" "}
              Websites with AI
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
              Transform your ideas into professional websites in minutes. No
              design skills needed – just describe what you want, and watch the
              magic happen.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/generate">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 tracking-wide bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg shadow-purple-500/30 w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold text-lg border border-purple-500/30 backdrop-blur-sm transition-all duration-300 overflow-hidden relative"
              >
                <span className="relative z-10">Start Creating Now</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
                <svg
                  className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-5xl mx-auto mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                thumbnailAlt="Hero Video"
              />
            </div>
            <BorderBeam size={250} duration={12} delay={9} />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] aspect-[2/1] bg-gradient-to-t from-purple-500/20 to-transparent rounded-[100%] blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
    </div>
  );
}
