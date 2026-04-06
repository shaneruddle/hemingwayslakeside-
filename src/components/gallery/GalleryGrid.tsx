"use client";

import { useState } from "react";
import { GalleryImageType } from "@/types";
import GalleryImage from "./GalleryImage";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "drinks", label: "Drinks" },
  { id: "venue", label: "Venue" },
  { id: "events", label: "Events" },
];

interface GalleryGridProps {
  images: GalleryImageType[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.category === activeFilter);

  const slides = filtered.map((img) => ({
    src: img.src,
    alt: img.alt,
    width: img.width,
    height: img.height,
  }));

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={cn(
              "font-heading text-sm font-medium px-4 py-2 border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber",
              activeFilter === cat.id
                ? "bg-brand-amber text-brand-cream border-brand-amber"
                : "bg-transparent text-brand-driftwood border-brand-tan hover:border-brand-amber hover:text-brand-amber"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-0">
        {filtered.map((image, index) => (
          <div key={image.id} className="break-inside-avoid mb-3">
            <GalleryImage
              image={image}
              onClick={() => setLightboxIndex(index)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
      />
    </div>
  );
}
