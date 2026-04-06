import Image from "next/image";
import Button from "@/components/ui/Button";
import { Users, Star, Utensils } from "lucide-react";

const features = [
  { icon: Users, text: "Up to 80 guests" },
  { icon: Utensils, text: "Bespoke menus" },
  { icon: Star, text: "Dedicated events team" },
];

export default function PrivateHireSection() {
  return (
    <section className="relative overflow-hidden mt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=2000&q=80"
          alt="Private dining event at Hemingways Lakeside"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="font-heading text-brand-amber text-sm tracking-[0.3em] uppercase mb-3">
          Private Events
        </p>
        <h2 className="font-serif text-brand-cream text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Host Your Event by the Water
        </h2>
        <p className="font-sans text-brand-tan/90 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          From intimate dinner parties to full wedding receptions, Hemingways
          Lakeside is the perfect backdrop for your special occasion. Our
          dedicated events team will craft a bespoke experience from start to
          finish.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {features.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-brand-cream">
              <Icon size={18} className="text-brand-amber" strokeWidth={1.5} />
              <span className="font-heading text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>

        <Button href="/reservations" variant="primary" size="lg">
          Enquire About Private Hire
        </Button>
      </div>
    </section>
  );
}
