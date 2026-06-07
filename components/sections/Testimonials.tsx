"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0F1923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">
            What Clients Say
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#F5F0E8]">
            Events They&apos;ll Never Forget
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-[#1C2B38] rounded-xl p-8 flex flex-col gap-5 hover:shadow-[0_0_30px_rgba(201,168,76,0.08)] transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={15}
                    className="text-[#C9A84C] fill-[#C9A84C]"
                  />
                ))}
              </div>

              <blockquote className="text-[#F5F0E8] text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div>
                <p className="text-[#F5F0E8] font-semibold text-sm">{t.name}</p>
                <p className="text-[#9AA8B2] text-xs mt-0.5">{t.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
