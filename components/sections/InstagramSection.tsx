"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Share2 } from "lucide-react";
import { siteConfig } from "@/lib/content";

const placeholderPosts = [
  "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&q=80",
  "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&q=80",
  "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=400&q=80",
  "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=400&q=80",
  "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
];

export default function Share2Section() {
  return (
    <section className="py-24 bg-[#1C2B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Share2 size={20} className="text-[#C9A84C]" />
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C]">
              Follow Along
            </p>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#F5F0E8]">
            {siteConfig.instagramHandle}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-2"
        >
          {placeholderPosts.map((src, i) => (
            <a
              key={i}
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Share2 post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-[#0F1923]/0 group-hover:bg-[#C9A84C]/20 transition-colors duration-300 flex items-center justify-center">
                <Share2
                  size={24}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#F5F0E8]/20 text-[#F5F0E8] px-7 py-3 rounded text-sm font-semibold tracking-wide hover:border-[#F5F0E8]/40 hover:bg-white/5 transition-colors"
          >
            <Share2 size={16} />
            Follow Us on Share2
          </a>
        </div>
      </div>
    </section>
  );
}
