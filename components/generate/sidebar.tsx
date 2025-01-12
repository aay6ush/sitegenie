"use client";

import { menuItems } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Sidebar() {
  return (
    <aside className="w-16 border-r border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="fixed inset-y-0 flex w-16 flex-col items-center justify-between py-4">
        <div className="space-y-4">
          <div className="p-2">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Avatar className="size-10">
                  <AvatarImage />
                  <AvatarFallback>
                    {"Aayush Jaiswal".split(" ")?.[0]?.[0]}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
            </Link>
          </div>
          <nav className="space-y-2 flex flex-col items-center">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-white/60 hover:bg-white/10 hover:text-white transition-colors duration-200"
                >
                  <item.icon className="h-5 w-5" />
                </motion.button>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
