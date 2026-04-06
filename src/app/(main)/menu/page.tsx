import type { Metadata } from "next";
import Image from "next/image";
import { getMenuCategories } from "@/lib/getMenu";
import MenuSection from "@/components/menu/MenuSection";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore our seasonal menu of fresh local cuisine, craft drinks, and Scottish favourites at Hemingways Lakeside.",
};

export default async function MenuPage() {
  const menuCategories = await getMenuCategories();
  return (
    <>
      {/* Page Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
          alt="Food at Hemingways Lakeside"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-charcoal/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="font-heading text-brand-amber text-sm tracking-[0.3em] uppercase mb-2">
            Seasonal & Local
          </p>
          <h1 className="font-serif text-brand-cream text-4xl md:text-5xl font-bold">
            Our Menu
          </h1>
        </div>
      </div>

      {/* Sticky Tab Navigation */}
      <div className="sticky top-[64px] z-20 bg-brand-parchment border-b border-brand-tan shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto gap-0" aria-label="Menu sections">
            {menuCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 font-heading text-sm font-medium text-brand-driftwood hover:text-brand-amber px-5 py-4 border-b-2 border-transparent hover:border-brand-amber transition-colors duration-150 whitespace-nowrap"
              >
                {cat.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {menuCategories.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}

        {/* Dietary Key */}
        <div className="border-t border-brand-tan pt-8">
          <p className="font-heading text-xs font-semibold text-brand-driftwood uppercase tracking-wider mb-3">
            Dietary Key
          </p>
          <div className="flex flex-wrap gap-4 font-sans text-sm text-brand-driftwood">
            <span>
              <span className="font-semibold text-brand-forest">V</span> — Vegetarian
            </span>
            <span>
              <span className="font-semibold text-brand-forest">Ve</span> — Vegan
            </span>
            <span>
              <span className="font-semibold text-brand-amber-dark">GF</span> —
              Gluten Free
            </span>
          </div>
          <p className="mt-3 text-xs text-brand-driftwood/70 font-sans">
            Please inform your server of any allergies or dietary requirements before
            ordering. We cannot guarantee a completely allergen-free environment.
          </p>
        </div>
      </div>
    </>
  );
}
