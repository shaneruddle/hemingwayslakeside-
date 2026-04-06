import Link from "next/link";
import { MapPin, Phone, Clock, Share2, Globe } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-tan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-serif text-brand-cream text-2xl font-bold block">
                Hemingways
              </span>
              <span className="font-heading text-brand-tan text-xs tracking-[0.2em] uppercase">
                Lakeside
              </span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-brand-tan/80 mb-6">
              A lakeside haven for fine dining, craft drinks, and unforgettable
              moments by the water. Open year-round, rain or shine.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-tan hover:text-brand-amber transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
                aria-label="Follow us on Instagram"
              >
                <Share2 size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-tan hover:text-brand-amber transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
                aria-label="Follow us on Facebook"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-brand-cream mb-4 uppercase tracking-wider text-sm">
              Explore
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-brand-tan/80 hover:text-brand-amber transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-heading font-semibold text-brand-cream mb-4 uppercase tracking-wider text-sm">
              Find Us
            </h3>
            <div className="flex flex-col gap-4 text-sm font-sans">
              <div className="flex gap-3">
                <MapPin size={16} className="text-brand-amber mt-0.5 shrink-0" />
                <span className="text-brand-tan/80 leading-relaxed">
                  Lochside Road, Loch Awe
                  <br />
                  Argyll, PA33 1AW
                </span>
              </div>
              <div className="flex gap-3">
                <Phone size={16} className="text-brand-amber mt-0.5 shrink-0" />
                <a
                  href="tel:+441866123456"
                  className="text-brand-tan/80 hover:text-brand-amber transition-colors"
                >
                  01866 123 456
                </a>
              </div>
              <div className="flex gap-3">
                <Clock size={16} className="text-brand-amber mt-0.5 shrink-0" />
                <div className="text-brand-tan/80 leading-relaxed">
                  <p>Mon–Thu: 12pm – 10pm</p>
                  <p>Fri–Sat: 12pm – 11pm</p>
                  <p>Sunday: 12pm – 9pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-driftwood/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-brand-tan/50">
          <p>
            &copy; {new Date().getFullYear()} Hemingways Lakeside. All rights reserved.
          </p>
          <p>Designed with care in Scotland</p>
        </div>
      </div>
    </footer>
  );
}
