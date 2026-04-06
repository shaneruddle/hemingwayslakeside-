import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function AboutBlurb() {
  return (
    <section className="bg-brand-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative h-80 lg:h-[520px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="The warm and inviting interior of Hemingways Lakeside"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Amber accent corner */}
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-brand-amber" />
          </div>

          {/* Text */}
          <div>
            <SectionHeading
              title="Our Story"
              subtitle="Born from a love of wild landscapes and honest cooking"
            />
            <div className="mt-6 space-y-4 font-sans text-brand-driftwood leading-relaxed">
              <p>
                Nestled on the southern shores of Loch Awe, Hemingways Lakeside
                has been a gathering place for locals and travellers alike since
                1987. What began as a small waterside inn has grown into one of
                Argyll&apos;s most cherished dining destinations — without ever
                losing its soul.
              </p>
              <p>
                We believe great food starts with great ingredients. Our kitchen
                works closely with local farmers, fishermen, and foragers to bring
                the very best of the Scottish larder to your plate. From the
                morning&apos;s catch to the season&apos;s wild harvest, every dish
                tells a story of this remarkable place.
              </p>
              <p>
                Whether you&apos;re here for a leisurely Sunday lunch, a romantic
                dinner by the window, or a celebratory evening with friends — you
                are always welcome at Hemingways.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/menu" variant="primary">
                Explore the Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
