"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { pitchContent } from "@/lib/content";

export default function ThePitch() {
  return (
    <section className="py-24 bg-[#1C2B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=900&q=80"
              alt="Premium mobile bar interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/40 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C]">
              Why Traveling Pour
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#F5F0E8] leading-tight">
              {pitchContent.headline}
            </h2>
            <div className="space-y-4">
              {pitchContent.paragraphs.map((p, i) => (
                <p key={i} className="text-[#9AA8B2] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
