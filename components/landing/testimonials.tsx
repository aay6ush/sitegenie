"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/constants";

export default function Testimonials() {
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
            Loved by innovative teams
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who are revolutionizing their
            web presence with SiteGenie.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map(({ id, quote, author, role }) => (
            <TestimonialCard
              key={id}
              id={id}
              quote={quote}
              author={author}
              role={role}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(94,53,177,0.05),transparent_50%)]" />
    </section>
  );
}

const TestimonialCard = ({ id, quote, author, role }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: id * 0.2 }}
      className="relative group"
    >
      <div className="relative z-10 h-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
        <div className="absolute -top-4 -left-2">
          <div className="p-3 rounded-full bg-purple-500/10">
            <Quote className="w-5 h-5 text-purple-500" />
          </div>
        </div>

        <div className="mb-8 pt-4">
          <p className="text-lg text-gray-300 leading-relaxed">
            &ldquo;{quote}&rdquo;
          </p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />

        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <Avatar className="size-12">
              <AvatarFallback className="text-black text-xl font-medium">
                {`${author.split(" ")[0][0]}${author.split(" ")[1]?.[0]}`}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#020817] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white">{author}</h3>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500" />
    </motion.div>
  );
};
