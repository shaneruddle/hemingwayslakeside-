import { MenuItemType } from "@/types";
import { cn } from "@/lib/utils";

const dietaryLabels: Record<string, string> = {
  vegan: "Ve",
  vegetarian: "V",
  "gluten-free": "GF",
};

const dietaryColors: Record<string, string> = {
  vegan: "bg-brand-forest/20 text-brand-forest",
  vegetarian: "bg-brand-forest/10 text-brand-forest",
  "gluten-free": "bg-brand-amber/10 text-brand-amber-dark",
};

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div
      className={cn(
        "flex items-start justify-between gap-4 py-5 border-b border-brand-tan/40 last:border-0",
        item.featured && "relative"
      )}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <h3 className="font-heading font-semibold text-brand-bark text-base">
            {item.name}
          </h3>
          {item.dietary?.map((d) => (
            <span
              key={d}
              className={cn(
                "text-xs font-sans font-medium px-1.5 py-0.5",
                dietaryColors[d]
              )}
              title={d}
            >
              {dietaryLabels[d]}
            </span>
          ))}
        </div>
        <p className="font-sans text-sm text-brand-driftwood leading-relaxed">
          {item.description}
        </p>
      </div>
      <div className="shrink-0 font-heading font-semibold text-brand-amber text-base tabular-nums">
        {item.price}
      </div>
    </div>
  );
}
