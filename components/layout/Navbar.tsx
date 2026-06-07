"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F1923]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl lg:text-2xl font-bold text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#9AA8B2] hover:text-[#F5F0E8] transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-[#C9A84C] text-[#0F1923] px-5 py-2.5 rounded text-sm font-semibold tracking-wide hover:bg-[#d4b56a] transition-colors"
            >
              Book the Bar
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[#F5F0E8] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0F1923]/98 backdrop-blur-md border-t border-[#1C2B38]">
          <nav className="px-4 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-[#9AA8B2] hover:text-[#F5F0E8] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 bg-[#C9A84C] text-[#0F1923] px-5 py-3 rounded text-sm font-semibold tracking-wide hover:bg-[#d4b56a] transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Book the Bar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
