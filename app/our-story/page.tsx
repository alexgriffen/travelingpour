import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `Our Story | ${siteConfig.name}`,
  description:
    "Learn about the people behind Traveling Pour Bar and how a love of great drinks became a mobile bar experience for the San Francisco Bay Area.",
};

export default function OurStoryPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-[#1C2B38] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C9A84C] mb-3">
            Who We Are
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-[#F5F0E8]">
            Our Story
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Photo */}
          <div className="relative aspect-[16/7] rounded-2xl overflow-hidden mb-14">
            <Image
              src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=80"
              alt="The Traveling Pour Bar team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/50 to-transparent" />
          </div>

          {/* Body */}
          <div className="space-y-6 text-[#9AA8B2] text-lg leading-relaxed">
            <p>
              Traveling Pour Bar started with a simple conviction: the best events
              deserve a real bar — not a folding table, not a basic cooler rental,
              but an actual, fully-built bar experience that arrives at your door.
              We&apos;re based in the San Francisco Bay Area and built this for the
              Bay Area host who expects the best.
            </p>
            <p>
              We spent years attending events across Alameda and Santa Clara County
              and kept noticing the same gap: the food was great, the venue was
              beautiful, but the bar? An afterthought. We decided to fix that. We
              designed and built a mobile bar trailer from the ground up — climate
              controlled, draft tap system, premium decor, comfortable pub-style seating —
              everything a great bar should have, on wheels.
            </p>
            <p>
              California law means we operate as a dry hire: you supply the
              alcohol, we supply everything else. That means we&apos;re fully legal, and
              it means you get to stock your bar with the exact beers, kegs, and
              bottles your guests love. We&apos;re not a one-size-fits-all operation — every
              rental is tailored to your event.
            </p>
            <p>
              Whether it&apos;s a backyard birthday in Oakland, a corporate party in
              San Jose, or a wine country wedding in the Tri-Valley, Traveling Pour
              Bar brings the full experience to you. We handle everything — delivery,
              setup, the bar itself, and full teardown when the night&apos;s over. You
              just show up and enjoy.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-14 pt-10 border-t border-[#1C2B38]">
            <p className="text-[#F5F0E8] font-serif text-xl mb-5">
              Ready to bring the bar to your event?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#C9A84C] text-[#0F1923] px-8 py-4 rounded text-sm font-semibold tracking-wide hover:bg-[#d4b56a] transition-colors"
            >
              Check My Date
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
