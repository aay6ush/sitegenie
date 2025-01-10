"use client";

import { features } from "@/constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Features() {
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
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to create stunning landing pages in minutes,
            powered by artificial intelligence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map(
            ({ id, title, accentColor, icon, description, buttonColor }) => (
              <FeatureCard
                key={id}
                title={title}
                accentColor={accentColor}
                icon={icon}
                description={description}
                buttonColor={buttonColor}
              />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}

const FeatureCard = ({
  title,
  accentColor,
  icon,
  description,
  buttonColor,
}: FeatureCardProps) => {
  return (
    <motion.div key={title} variants={cardVariants} className="relative group">
      <div className="relative z-10 h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
        <div
          className={`inline-block p-3 rounded-xl bg-gradient-to-r ${accentColor}`}
        >
          {icon}
        </div>

        <h3 className="text-2xl font-semibold mt-6 mb-4">{title}</h3>

        <ul className="space-y-3 mb-8">
          {description.map((item: string, i: number) => (
            <li key={i} className="flex items-start">
              <svg
                className="w-6 h-6 mr-2 text-purple-500 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full ${buttonColor} text-white font-medium`}
          >
            Learn More
          </motion.button>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-r ${accentColor} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`}
      />
    </motion.div>
  );
};
