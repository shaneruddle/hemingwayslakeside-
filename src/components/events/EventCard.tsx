import Image from "next/image";
import Link from "next/link";
import { EventType } from "@/types";
import { Calendar, Clock } from "lucide-react";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return {
    day: date.toLocaleDateString("en-GB", { day: "numeric" }),
    month: date.toLocaleDateString("en-GB", { month: "short" }),
    year: date.toLocaleDateString("en-GB", { year: "numeric" }),
    full: date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };
}

interface EventCardProps {
  event: EventType;
}

export default function EventCard({ event }: EventCardProps) {
  const date = formatDate(event.date);

  return (
    <article className="bg-brand-parchment border border-brand-tan overflow-hidden group hover:border-brand-amber/60 transition-colors duration-300">
      {/* Image */}
      {event.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {event.isFeatured && (
            <div className="absolute top-3 left-3 bg-brand-amber text-brand-cream font-heading text-xs font-semibold px-2 py-1 uppercase tracking-wide">
              Featured
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        {/* Date badge */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1.5 text-brand-amber">
            <Calendar size={14} />
            <span className="font-heading text-xs font-semibold uppercase tracking-wide">
              {date.full}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-brand-driftwood mb-4">
          <Clock size={14} className="text-brand-amber shrink-0" />
          <span className="font-sans text-sm">{event.time}</span>
        </div>

        <h3 className="font-serif text-xl font-bold text-brand-bark mb-2 leading-snug">
          {event.title}
        </h3>
        <p className="font-sans text-sm text-brand-driftwood leading-relaxed mb-5">
          {event.description}
        </p>

        <Link
          href="/reservations"
          className="inline-block font-heading text-sm font-semibold text-brand-amber hover:text-brand-amber-dark underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber"
        >
          Enquire about tickets →
        </Link>
      </div>
    </article>
  );
}
