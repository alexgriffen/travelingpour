"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80",
    alt: "A fresh draft beer being poured at the mobile bar",
    className: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=600&q=80",
    alt: "Mobile bar trailer exterior at an outdoor event",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
    alt: "Guests enjoying drinks at the bar",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=600&q=80",
    alt: "Bar setup at an evening wedding reception",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=600&q=80",
    alt: "Close-up of a cold draft beer",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=600&q=80",
    alt: "Bar tools and glassware at the mobile bar",
    className: "",
  },
];

export default function HomeGallery() {
  return (
    <section id="gallery" className="py-24 bg-[#0F1923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">
            The Experience
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#F5F0E8]">
            See the Bar in Action
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]"
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden group ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#0F1923]/0 group-hover:bg-[#0F1923]/20 transition-colors duration-300" />
            </div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border border-[#C9A84C]/50 text-[#C9A84C] px-7 py-3 rounded text-sm font-semibold tracking-wide hover:bg-[#C9A84C]/10 transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
