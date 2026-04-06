import type { Metadata } from "next";
import Image from "next/image";
import { getEvents } from "@/lib/getEvents";
import EventCard from "@/components/events/EventCard";
import PrivateHireSection from "@/components/events/PrivateHireSection";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming events and private hire at Hemingways Lakeside. Live music, tasting evenings, seasonal feasts, and more.",
};

export const revalidate = 60;

export default async function EventsPage() {
  const events = await getEvents();
  return (
    <>
      {/* Page Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=2000&q=80"
          alt="Live music event at Hemingways Lakeside"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-charcoal/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="font-heading text-brand-amber text-sm tracking-[0.3em] uppercase mb-2">
            What&apos;s On
          </p>
          <h1 className="font-serif text-brand-cream text-4xl md:text-5xl font-bold">
            Events
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          title="Upcoming Events"
          subtitle="From lakeside feasts to whisky evenings — there's always something happening at Hemingways."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <PrivateHireSection />
    </>
  );
}
