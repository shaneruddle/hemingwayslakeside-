import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
        alt="Stunning lakeside landscape at Hemingways"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/60 via-brand-charcoal/40 to-brand-charcoal/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="font-heading text-brand-amber text-sm md:text-base tracking-[0.3em] uppercase mb-4">
          Restaurant & Bar
        </p>
        <h1 className="font-serif text-brand-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          Hemingways
          <span className="block text-brand-tan text-3xl sm:text-4xl md:text-5xl mt-2 font-normal italic">
            Lakeside
          </span>
        </h1>
        <p className="font-sans text-brand-tan text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Fresh local cuisine, craft drinks, and breathtaking views — all on the
          shores of Loch Awe. Come as you are. Stay for the moment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/menu" variant="primary" size="lg">
            View Our Menu
          </Button>
          <Button href="/reservations" variant="outline" size="lg">
            Book a Table
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-tan/60">
        <span className="font-sans text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-brand-tan/40 animate-pulse" />
      </div>
    </section>
  );
}
