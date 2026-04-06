import Image from "next/image";
import { GalleryImageType } from "@/types";

interface GalleryImageProps {
  image: GalleryImageType;
  onClick: () => void;
}

export default function GalleryImage({ image, onClick }: GalleryImageProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-amber focus-visible:ring-offset-2"
      aria-label={`View larger: ${image.alt}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-brand-amber/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}
