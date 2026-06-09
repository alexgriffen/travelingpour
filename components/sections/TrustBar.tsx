"use client";

import { motion } from "framer-motion";
import { Star, Truck, ShieldCheck, MapPin, PlugZap } from "lucide-react";

const signals = [
  { icon: Star, text: "5-Star Rated Events" },
  { icon: MapPin, text: "Alameda & Santa Clara County" },
  { icon: PlugZap, text: "Self-Powered — Set Up Anywhere" },
  { icon: ShieldCheck, text: "Dry Hire — You Supply the Alcohol" },
  { icon: Truck, text: "Delivery & Setup Included" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#1C2B38] border-y border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4"
        >
          {signals.map((signal, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-[#9AA8B2]"
            >
              <signal.icon
                size={15}
                className="text-[#C9A84C] flex-shrink-0"
              />
              <span>{signal.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
