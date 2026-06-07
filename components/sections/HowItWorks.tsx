"use client";

import { motion } from "framer-motion";
import { howItWorks } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#0F1923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">
            Simple Process
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#F5F0E8]">
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector lines (desktop) */}
          <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-px bg-[#C9A84C]/20" />

          {howItWorks.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center px-4"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#C9A84C]/40 mb-6">
                <span className="font-serif text-2xl font-bold text-[#C9A84C]">
                  {step.step}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#F5F0E8] mb-3">
                {step.title}
              </h3>
              <p className="text-[#9AA8B2] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
