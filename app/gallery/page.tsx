"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1200&q=85",
    alt: "Craft cocktails being prepared at the mobile bar",
  },
  {
    src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1200&q=85",
    alt: "Mobile bar trailer exterior at an outdoor event",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=85",
    alt: "Guests enjoying drinks at the mobile bar",
  },
  {
    src: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=1200&q=85",
    alt: "Bar setup at an evening wedding reception",
  },
  {
    src: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=1200&q=85",
    alt: "Cocktail detail shot with fresh garnish",
  },
  {
    src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1200&q=85",
    alt: "Bar tools and glassware at the mobile bar",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=85",
    alt: "Premium mobile bar interior",
  },
  {
    src: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1200&q=85",
    alt: "Mobile bar at an outdoor evening party",
  },
  {
    src: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=1200&q=85",
    alt: "Bartender preparing drinks at a private event",
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=85",
    alt: "Champagne pour at a wedding reception",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
    alt: "Draft beer pour at corporate event",
  },
  {
    src: "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?w=1200&q=85",
    alt: "Evening outdoor event with premium bar setup",
  },
];

export default function GalleryPage() {
  const [index, setIndex] = useState(-1);

  const slides = photos.map((p) => ({ src: p.src }));

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-[#1C2B38] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">
            The Experience
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-[#F5F0E8]">
            Gallery
          </h1>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
          >
            {photos.map((photo, i) => (
              <div
                key={i}
                className="relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setIndex(i)}
              >
                <Image
                  src={photo.src.replace("w=1200", "w=600")}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#0F1923]/0 group-hover:bg-[#C9A84C]/10 transition-colors duration-300" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-[#9AA8B2] mb-5">
            Like what you see? Check your date and let&apos;s make it happen.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A84C] text-[#0F1923] px-8 py-4 rounded text-sm font-semibold tracking-wide hover:bg-[#d4b56a] transition-colors"
          >
            Book the Bar
          </Link>
        </div>
      </section>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </div>
  );
}
