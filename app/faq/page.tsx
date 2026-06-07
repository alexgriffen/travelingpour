"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs, siteConfig } from "@/lib/content";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#1C2B38]">
      <button
        className="w-full text-left flex items-center justify-between gap-4 py-5"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[#F5F0E8] font-medium">{question}</span>
        <ChevronDown
          size={18}
          className={`text-[#C9A84C] flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-[#9AA8B2] leading-relaxed pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-[#1C2B38] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">
            Got Questions
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-[#F5F0E8]">
            FAQ
          </h1>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 bg-[#1C2B38] rounded-2xl p-8 text-center">
            <p className="font-serif text-xl text-[#F5F0E8] mb-2">
              Still have questions?
            </p>
            <p className="text-[#9AA8B2] mb-6">
              We&apos;re happy to talk through your event details.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="bg-[#C9A84C] text-[#0F1923] px-7 py-3 rounded text-sm font-semibold tracking-wide hover:bg-[#d4b56a] transition-colors"
              >
                Contact Us
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="border border-[#F5F0E8]/20 text-[#9AA8B2] px-7 py-3 rounded text-sm hover:border-[#F5F0E8]/40 hover:text-[#F5F0E8] transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
