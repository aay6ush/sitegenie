"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a1b] text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#0a0a1b] to-[#0a0a1b]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <span className="text-[20vw] font-bold text-white/[0.02] whitespace-nowrap">
          SITEGENIE
        </span>
      </div>

      <div className="container mx-auto px-6 mt-20 py-12 relative z-10 flex justify-between items-center text-lg">
        <div className="text-white/60">
          &copy; {new Date().getFullYear()} SiteGenie. All rights reserved.
        </div>

        <nav className="flex space-x-4">
          {["Privacy Policy", "Terms of Service", "Contact Us"].map((link) => (
            <Link
              key={link}
              href="#"
              className="text-white/60 hover:text-purple-500 transition-colors"
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </footer>
  );
}
