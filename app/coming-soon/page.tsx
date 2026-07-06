import type { Metadata } from "next";
import ComingSoon from "@/components/sections/ComingSoon";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Coming Soon`,
  description: `${siteConfig.name} is coming soon to the ${siteConfig.location}. Leave your email to be the first to know when we're open for bookings.`,
};

export default function ComingSoonPage() {
  return <ComingSoon />;
}
