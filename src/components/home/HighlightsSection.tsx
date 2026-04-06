import { Utensils, Wine, Mountain } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Divider from "@/components/ui/Divider";

const highlights = [
  {
    icon: Utensils,
    title: "Fresh Local Cuisine",
    description:
      "Our menu changes with the seasons and the tides. Every ingredient is sourced within miles of our door — from the loch, the forest, and the fields beyond.",
  },
  {
    icon: Wine,
    title: "Craft Drinks & Wines",
    description:
      "From locally distilled gins to hand-selected wines and valley-brewed ales, our bar celebrates the finest producers Scotland and beyond has to offer.",
  },
  {
    icon: Mountain,
    title: "Lakeside Views",
    description:
      "Watch the light change over the water from our dining room or al fresco terrace. The loch is always the best table in the house.",
  },
];

export default function HighlightsSection() {
  return (
    <section className="bg-brand-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <SectionHeading
            title="Why Hemingways"
            subtitle="Three reasons guests keep coming back"
            centered
          />
        </div>
        <Divider className="mb-14" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-brand-parchment p-8 border border-brand-tan/60 hover:border-brand-amber/60 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-brand-amber/10 flex items-center justify-center mb-6 group-hover:bg-brand-amber/20 transition-colors duration-300">
                <Icon size={24} className="text-brand-amber" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-brand-bark mb-3">
                {title}
              </h3>
              <p className="font-sans text-brand-driftwood leading-relaxed text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
