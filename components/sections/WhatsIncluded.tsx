"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Beer,
  Thermometer,
  Users,
  Monitor,
  Sparkles,
  Wine,
  UserCheck,
  MapPin,
  Wifi,
} from "lucide-react";
import { amenities } from "@/lib/content";

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Beer,
  Thermometer,
  Users,
  Monitor,
  Sparkles,
  Wine,
  UserCheck,
  MapPin,
  Wifi,
};

export default function WhatsIncluded() {
  return (
    <section id="whats-included" className="py-24 bg-[#1C2B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">
            Every Rental Includes
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#F5F0E8]">
            What&apos;s Included
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {amenities.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-[#0F1923] rounded-xl p-5 flex flex-col items-center text-center gap-3 hover:shadow-[0_0_20px_rgba(201,168,76,0.07)] transition-shadow duration-300"
              >
                {Icon && (
                  <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <Icon size={20} className="text-[#C9A84C]" />
                  </div>
                )}
                <p className="text-[#F5F0E8] text-sm font-medium leading-tight">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
