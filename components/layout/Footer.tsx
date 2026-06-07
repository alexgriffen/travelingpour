import Link from "next/link";
import { Share2, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#0A1218] border-t border-[#1C2B38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#F5F0E8]">
              {siteConfig.name}
            </h3>
            <p className="text-[#9AA8B2] text-sm leading-relaxed">
              Premium mobile bar trailer rental for the San Francisco Bay Area.
              Dry hire. Fully equipped. Unforgettable.
            </p>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#d4b56a] transition-colors text-sm"
            >
              <Share2 size={16} />
              {siteConfig.instagramHandle}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#9AA8B2] mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#9AA8B2] hover:text-[#F5F0E8] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-[#9AA8B2] mb-4">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-[#9AA8B2] hover:text-[#F5F0E8] transition-colors text-sm"
              >
                <Mail size={15} />
                {siteConfig.email}
              </a>
              <span className="flex items-center gap-2 text-[#9AA8B2] text-sm">
                <Phone size={15} />
                {siteConfig.phone}
              </span>
              <span className="flex items-center gap-2 text-[#9AA8B2] text-sm">
                <MapPin size={15} />
                {siteConfig.location}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1C2B38] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#9AA8B2]">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </span>
          <span>AKRS LLC · Bay Area, CA</span>
        </div>
      </div>
    </footer>
  );
}
