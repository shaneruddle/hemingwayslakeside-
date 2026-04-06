import type { Metadata } from "next";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of our food, drinks, lakeside venue, and events at Hemingways Lakeside in Argyll, Scotland.",
};

export default function GalleryPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80"
          alt="Hemingways Lakeside interior"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-charcoal/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="font-heading text-brand-amber text-sm tracking-[0.3em] uppercase mb-2">
            Life by the Loch
          </p>
          <h1 className="font-serif text-brand-cream text-4xl md:text-5xl font-bold">
            Gallery
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <GalleryGrid images={galleryImages} />
      </div>
    </>
  );
}
