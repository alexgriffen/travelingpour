"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useActionState } from "react";
import { Share2 } from "lucide-react";
import { siteConfig } from "@/lib/content";
import { subscribe, type NotifyState } from "@/app/coming-soon/actions";

const initialState: NotifyState = { success: false };

export default function ComingSoon() {
  const [state, formAction, isPending] = useActionState(subscribe, initialState);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1593887937265-2a09787dcc19?w=1600&q=80"
          alt="Beer taps at a premium bar"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0F1923]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto py-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-5"
        >
          {siteConfig.counties} · Coming Soon
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F0E8] leading-tight mb-4"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-serif text-xl sm:text-2xl text-[#C9A84C] mb-6"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-base sm:text-lg text-[#9AA8B2] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          We&apos;re putting the finishing touches on the Bay Area&apos;s premium
          mobile bar trailer experience. Leave your email and you&apos;ll be the
          first to know the moment we&apos;re open for bookings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {state.success ? (
            <p
              role="status"
              className="text-[#4CAF7D] text-lg font-medium bg-[#4CAF7D]/10 border border-[#4CAF7D]/30 rounded-lg px-6 py-4 max-w-md mx-auto"
            >
              You&apos;re on the list — we&apos;ll be in touch soon. Cheers! 🍻
            </p>
          ) : (
            <form
              action={formAction}
              className="max-w-md mx-auto"
              noValidate
            >
              {/* Honeypot — hidden from real users; bots that fill it are dropped. */}
              <div
                aria-hidden="true"
                className="absolute left-[-9999px] top-[-9999px]"
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  aria-label="Email address"
                  className="flex-1 bg-[#F5F0E8]/5 border border-[#F5F0E8]/20 text-[#F5F0E8] placeholder:text-[#9AA8B2]/70 px-5 py-4 rounded focus:outline-none focus:border-[#C9A84C] focus:bg-[#F5F0E8]/10 transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={isPending}
                  className="bg-[#C9A84C] text-[#0F1923] px-8 py-4 rounded text-base font-semibold tracking-wide hover:bg-[#d4b56a] transition-all duration-200 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isPending ? "Signing up…" : "Notify Me"}
                </button>
              </div>

              {state.error && (
                <p role="alert" className="text-[#e07a7a] text-sm mt-3 text-left">
                  {state.error}
                </p>
              )}
            </form>
          )}
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#9AA8B2] hover:text-[#C9A84C] transition-colors duration-200 mt-10 text-sm"
        >
          <Share2 className="w-4 h-4" />
          Follow {siteConfig.instagramHandle}
        </motion.a>
      </div>
    </section>
  );
}
