"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Share2, CheckCircle } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/content";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  guestCount: string;
  referral: string;
  message: string;
};

const eventTypes = [
  "Birthday",
  "Wedding",
  "Corporate",
  "Graduation",
  "Private Party",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-[#1C2B38] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">
            Let&apos;s Talk
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-[#F5F0E8]">
            Book the Bar
          </h1>
          <p className="mt-5 text-[#9AA8B2] text-lg">
            Tell us about your event and we&apos;ll check availability.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info sidebar */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-xl font-bold text-[#F5F0E8] mb-4">
                  Get in Touch
                </h2>
                <div className="flex flex-col gap-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-[#9AA8B2] hover:text-[#F5F0E8] transition-colors text-sm"
                  >
                    <Mail size={16} className="text-[#C9A84C]" />
                    {siteConfig.email}
                  </a>
                  <span className="flex items-center gap-3 text-[#9AA8B2] text-sm">
                    <Phone size={16} className="text-[#C9A84C]" />
                    {siteConfig.phone}
                  </span>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#9AA8B2] hover:text-[#F5F0E8] transition-colors text-sm"
                  >
                    <Share2 size={16} className="text-[#C9A84C]" />
                    {siteConfig.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="bg-[#1C2B38] rounded-xl p-5">
                <p className="text-[#F5F0E8] font-medium text-sm mb-2">
                  Response Time
                </p>
                <p className="text-[#9AA8B2] text-sm">
                  We typically respond within 24 hours. For urgent inquiries,
                  email us directly.
                </p>
              </div>

              <div className="bg-[#1C2B38] rounded-xl p-5">
                <p className="text-[#F5F0E8] font-medium text-sm mb-2">
                  When to Book
                </p>
                <p className="text-[#9AA8B2] text-sm">
                  4–6 weeks for most events. 3+ months for weddings. Popular
                  dates go fast.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#1C2B38] rounded-2xl p-12 text-center"
                  >
                    <CheckCircle size={48} className="text-[#4CAF7D] mx-auto mb-5" />
                    <h2 className="font-serif text-2xl font-bold text-[#F5F0E8] mb-3">
                      Inquiry Sent!
                    </h2>
                    <p className="text-[#9AA8B2] mb-6">
                      Thanks for reaching out. We&apos;ll check availability and get
                      back to you within 24 hours.
                    </p>
                    <Link
                      href="/"
                      className="inline-block border border-[#C9A84C]/50 text-[#C9A84C] px-6 py-3 rounded text-sm font-semibold hover:bg-[#C9A84C]/10 transition-colors"
                    >
                      Back to Home
                    </Link>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold tracking-wide uppercase text-[#9AA8B2] mb-1.5">
                          Name *
                        </label>
                        <input
                          {...register("name", { required: "Required" })}
                          className="w-full bg-[#1C2B38] border border-[#1C2B38] focus:border-[#C9A84C]/50 text-[#F5F0E8] rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#9AA8B2]/40"
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold tracking-wide uppercase text-[#9AA8B2] mb-1.5">
                          Email *
                        </label>
                        <input
                          {...register("email", {
                            required: "Required",
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "Invalid email",
                            },
                          })}
                          type="email"
                          className="w-full bg-[#1C2B38] border border-[#1C2B38] focus:border-[#C9A84C]/50 text-[#F5F0E8] rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#9AA8B2]/40"
                          placeholder="you@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold tracking-wide uppercase text-[#9AA8B2] mb-1.5">
                          Phone
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          className="w-full bg-[#1C2B38] border border-[#1C2B38] focus:border-[#C9A84C]/50 text-[#F5F0E8] rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#9AA8B2]/40"
                          placeholder="(415) 555-0100"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold tracking-wide uppercase text-[#9AA8B2] mb-1.5">
                          Event Type
                        </label>
                        <select
                          {...register("eventType")}
                          className="w-full bg-[#1C2B38] border border-[#1C2B38] focus:border-[#C9A84C]/50 text-[#F5F0E8] rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                        >
                          <option value="">Select one...</option>
                          {eventTypes.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold tracking-wide uppercase text-[#9AA8B2] mb-1.5">
                          Event Date
                        </label>
                        <input
                          {...register("eventDate")}
                          type="date"
                          className="w-full bg-[#1C2B38] border border-[#1C2B38] focus:border-[#C9A84C]/50 text-[#F5F0E8] rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold tracking-wide uppercase text-[#9AA8B2] mb-1.5">
                          Location / City
                        </label>
                        <input
                          {...register("location")}
                          className="w-full bg-[#1C2B38] border border-[#1C2B38] focus:border-[#C9A84C]/50 text-[#F5F0E8] rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#9AA8B2]/40"
                          placeholder="Oakland, CA"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold tracking-wide uppercase text-[#9AA8B2] mb-1.5">
                          Estimated Guest Count
                        </label>
                        <input
                          {...register("guestCount")}
                          className="w-full bg-[#1C2B38] border border-[#1C2B38] focus:border-[#C9A84C]/50 text-[#F5F0E8] rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#9AA8B2]/40"
                          placeholder="e.g. 75"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold tracking-wide uppercase text-[#9AA8B2] mb-1.5">
                          How Did You Hear About Us?
                        </label>
                        <input
                          {...register("referral")}
                          className="w-full bg-[#1C2B38] border border-[#1C2B38] focus:border-[#C9A84C]/50 text-[#F5F0E8] rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#9AA8B2]/40"
                          placeholder="Instagram, Google, friend..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-wide uppercase text-[#9AA8B2] mb-1.5">
                        Message / Additional Details
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className="w-full bg-[#1C2B38] border border-[#1C2B38] focus:border-[#C9A84C]/50 text-[#F5F0E8] rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#9AA8B2]/40 resize-none"
                        placeholder="Tell us more about your event — venue type, vision, any questions..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#C9A84C] text-[#0F1923] py-4 rounded-lg text-sm font-semibold tracking-wide hover:bg-[#d4b56a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send My Inquiry"}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
