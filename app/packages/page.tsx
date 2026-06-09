import Link from "next/link";
import {
  Check,
  UserCheck,
  Lightbulb,
  Dices,
  Armchair,
  PartyPopper,
  GlassWater,
} from "lucide-react";
import type { Metadata } from "next";
import {
  packages,
  siteConfig,
  addOns,
  packageDisclaimers,
} from "@/lib/content";

const addOnIconMap: Record<string, React.ElementType> = {
  UserCheck,
  Lightbulb,
  Dices,
  Armchair,
  PartyPopper,
  GlassWater,
};

export const metadata: Metadata = {
  title: `Packages & Pricing | ${siteConfig.name}`,
  description:
    "Explore mobile bar rental packages from Traveling Pour Bar. Dry hire bar trailer rental for events in the San Francisco Bay Area.",
};

export default function PackagesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-[#1C2B38] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">
            What We Offer
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-[#F5F0E8]">
            Packages & Pricing
          </h1>
          <p className="mt-5 text-[#9AA8B2] text-lg max-w-xl mx-auto">
            Every package is dry hire — you supply the alcohol, we supply
            everything else.
          </p>
        </div>
      </section>

      {/* Package cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-2xl p-8 flex flex-col gap-6 bg-[#1C2B38] border border-[#1C2B38]"
              >

                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#F5F0E8]">
                    {pkg.name}
                  </h2>
                  <p className="text-[#9AA8B2] text-sm mt-1">{pkg.tagline}</p>
                  <p className="text-[#C9A84C] text-sm font-semibold mt-2">
                    {pkg.duration}
                  </p>
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#9AA8B2]"
                    >
                      <Check
                        size={15}
                        className="text-[#C9A84C] flex-shrink-0 mt-0.5"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#0F1923]">
                  <Link
                    href="/contact"
                    className="block text-center py-3 rounded text-sm font-semibold tracking-wide transition-colors bg-[#C9A84C] text-[#0F1923] hover:bg-[#d4b56a]"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-10 text-center">
            <p className="text-[#9AA8B2] text-sm max-w-xl mx-auto">
              All packages are dry hire — you supply the alcohol. We supply the
              bar, equipment, delivery, setup, teardown, and optionally a
              bartender.
            </p>
          </div>

          {/* Optional Add-Ons */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">
                Make It Yours
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#F5F0E8]">
                Optional Add-Ons
              </h2>
              <p className="mt-4 text-[#9AA8B2] text-sm max-w-lg mx-auto">
                Customize any package with extras. Add-ons are priced per event
                — just ask for a quote.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {addOns.map((addon) => {
                const Icon = addOnIconMap[addon.icon];
                return (
                  <div
                    key={addon.title}
                    className="bg-[#1C2B38] rounded-xl p-5 flex items-center gap-3"
                  >
                    {Icon && (
                      <div className="w-9 h-9 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-[#C9A84C]" />
                      </div>
                    )}
                    <span className="text-[#F5F0E8] text-sm font-medium leading-tight">
                      {addon.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Disclaimers */}
          <div className="mt-16 max-w-2xl mx-auto">
            <ul className="space-y-2">
              {packageDisclaimers.map((note, i) => (
                <li
                  key={i}
                  className="text-[#9AA8B2]/80 text-xs leading-relaxed flex gap-2"
                >
                  <span className="text-[#C9A84C] flex-shrink-0">*</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="bg-[#1C2B38] py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-[#9AA8B2] mb-4">
            Have questions about how it works, what&apos;s included, or whether we
            serve your area?
          </p>
          <Link
            href="/faq"
            className="inline-block border border-[#C9A84C]/50 text-[#C9A84C] px-6 py-3 rounded text-sm font-semibold tracking-wide hover:bg-[#C9A84C]/10 transition-colors"
          >
            Read the FAQ
          </Link>
        </div>
      </section>
    </div>
  );
}
