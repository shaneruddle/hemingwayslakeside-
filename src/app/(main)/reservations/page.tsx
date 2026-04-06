import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import ReservationForm from "@/components/reservations/ReservationForm";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Book a table at Hemingways Lakeside. Reserve your spot for lunch or dinner by the water in Argyll, Scotland.",
};

export default function ReservationsPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1464093515883-ec948246accb?auto=format&fit=crop&w=2000&q=80"
          alt="Lakeside terrace at Hemingways"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-charcoal/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="font-heading text-brand-amber text-sm tracking-[0.3em] uppercase mb-2">
            Join Us
          </p>
          <h1 className="font-serif text-brand-cream text-4xl md:text-5xl font-bold">
            Reservations
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <SectionHeading
              title="Book a Table"
              subtitle="Fill in your details and we'll be in touch to confirm your reservation."
            />
            <div className="mt-8">
              <ReservationForm />
            </div>
          </div>

          {/* Sidebar info */}
          <div className="lg:col-span-1">
            <div className="bg-brand-parchment p-8 border border-brand-tan sticky top-24">
              <h2 className="font-heading font-semibold text-brand-bark text-lg mb-6">
                Contact & Hours
              </h2>
              <div className="space-y-5 font-sans text-sm">
                <div className="flex gap-3">
                  <MapPin
                    size={16}
                    className="text-brand-amber mt-0.5 shrink-0"
                  />
                  <div className="text-brand-driftwood leading-relaxed">
                    <p className="font-semibold text-brand-bark">Find Us</p>
                    <p>Lochside Road, Loch Awe</p>
                    <p>Argyll, PA33 1AW</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone
                    size={16}
                    className="text-brand-amber mt-0.5 shrink-0"
                  />
                  <div className="text-brand-driftwood">
                    <p className="font-semibold text-brand-bark">Call Us</p>
                    <a
                      href="tel:+441866123456"
                      className="hover:text-brand-amber transition-colors"
                    >
                      01866 123 456
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail
                    size={16}
                    className="text-brand-amber mt-0.5 shrink-0"
                  />
                  <div className="text-brand-driftwood">
                    <p className="font-semibold text-brand-bark">Email Us</p>
                    <a
                      href="mailto:hello@hemingwayslakeside.co.uk"
                      className="hover:text-brand-amber transition-colors"
                    >
                      hello@hemingwayslakeside.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock
                    size={16}
                    className="text-brand-amber mt-0.5 shrink-0"
                  />
                  <div className="text-brand-driftwood leading-relaxed">
                    <p className="font-semibold text-brand-bark mb-1">
                      Opening Hours
                    </p>
                    <p>Mon–Thu: 12pm – 10pm</p>
                    <p>Fri–Sat: 12pm – 11pm</p>
                    <p>Sunday: 12pm – 9pm</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-tan">
                <p className="font-sans text-xs text-brand-driftwood/70 leading-relaxed">
                  For parties of 10 or more, or for private dining enquiries,
                  please contact us directly by phone or email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
