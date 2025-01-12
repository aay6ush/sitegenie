"use client";

import { socialLinks } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Developer() {
  return (
    <section className="relative bg-[#020817] text-white py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 via-purple-600/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020817] to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the Developer
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building the future of AI-powered web development, one page at a
              time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden aspect-square max-w-md mx-auto">
                <Image
                  src="/pfp.jpeg"
                  alt="Developer portrait"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-50" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">
                  Hey, I&apos;m Aayush Jaiswal
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  As a full-stack developer with a passion for AI and design, I
                  created SiteGenie to revolutionize how we build landing pages.
                  With over 2 years of experience in web development, I
                  understand the challenges of creating engaging,
                  high-converting pages quickly.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  SiteGenie is my solution to streamline the web development
                  process, making it accessible to everyone while maintaining
                  professional quality and performance.
                </p>

                <div className="flex gap-6 pt-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      aria-label={social.label}
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(94,53,177,0.05),transparent_50%)]" />
    </section>
  );
}
