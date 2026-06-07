"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1600&q=80"
          alt="Mobile bar trailer at an outdoor event"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0F1923]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-4"
        >
          {siteConfig.counties}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F5F0E8] leading-tight mb-6"
        >
          {siteConfig.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-[#9AA8B2] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {siteConfig.subTagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="bg-[#C9A84C] text-[#0F1923] px-8 py-4 rounded text-base font-semibold tracking-wide hover:bg-[#d4b56a] transition-all duration-200 hover:scale-105"
          >
            Check My Date
          </Link>
          <a
            href="#gallery"
            className="border border-[#F5F0E8]/30 text-[#F5F0E8] px-8 py-4 rounded text-base font-semibold tracking-wide hover:border-[#F5F0E8]/60 hover:bg-white/5 transition-all duration-200"
          >
            See the Bar
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C]/60 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
