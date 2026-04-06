"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-brand-charcoal/80 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-72 bg-brand-bark z-50 flex flex-col transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between p-6 border-b border-brand-driftwood/40">
          <span className="font-serif text-brand-cream text-lg font-bold">
            Hemingways
          </span>
          <button
            onClick={onClose}
            className="text-brand-tan hover:text-brand-cream transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                "font-heading text-lg py-3 px-4 transition-colors duration-150 border-b border-brand-driftwood/20",
                pathname === link.href
                  ? "text-brand-amber font-semibold"
                  : "text-brand-tan hover:text-brand-cream"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto p-6">
          <Link
            href="/reservations"
            onClick={onClose}
            className="block w-full text-center bg-brand-amber text-brand-cream font-heading font-semibold py-3 px-6 hover:bg-brand-amber-dark transition-colors duration-200"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </>
  );
}
