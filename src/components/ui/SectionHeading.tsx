import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl font-bold leading-tight",
          light ? "text-brand-cream" : "text-brand-bark"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-3 h-0.5 w-16",
          centered && "mx-auto",
          light ? "bg-brand-amber" : "bg-brand-amber"
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-brand-tan" : "text-brand-driftwood"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
