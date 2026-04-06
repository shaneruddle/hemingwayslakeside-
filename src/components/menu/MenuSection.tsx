import { MenuCategory } from "@/types";
import MenuItem from "./MenuItem";
import SectionHeading from "@/components/ui/SectionHeading";

interface MenuSectionProps {
  category: MenuCategory;
}

export default function MenuSection({ category }: MenuSectionProps) {
  return (
    <section id={category.id} className="scroll-mt-28">
      <SectionHeading title={category.label} />
      <div className="mt-6">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
