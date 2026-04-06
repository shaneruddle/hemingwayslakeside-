"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
          scrolled
            ? "bg-brand-charcoal/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
            >
              <span className="font-serif text-brand-cream text-xl font-bold tracking-wide">
                Hemingways
              </span>
              <span className="font-heading text-brand-tan text-xs tracking-[0.2em] uppercase">
                Lakeside
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-heading text-sm tracking-wide transition-colors duration-150",
                    pathname === link.href
                      ? "text-brand-amber font-semibold"
                      : "text-brand-tan hover:text-brand-cream"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/reservations"
                className="ml-2 bg-brand-amber text-brand-cream font-heading font-semibold text-sm px-5 py-2 hover:bg-brand-amber-dark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber focus-visible:ring-offset-1"
              >
                Book a Table
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-brand-tan hover:text-brand-cream transition-colors p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
