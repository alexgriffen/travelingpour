"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BookingBanner() {
  return (
    <section className="bg-[#C9A84C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#0F1923] mb-4">
            Your Date Isn&apos;t Booked Until You Ask
          </h2>
          <p className="text-[#0F1923]/70 text-lg mb-8">
            Fill out our inquiry form and we&apos;ll confirm availability within 24
            hours. Popular weekends fill fast.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0F1923] text-[#F5F0E8] px-10 py-4 rounded text-base font-semibold tracking-wide hover:bg-[#1C2B38] transition-colors"
          >
            Check My Date
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
