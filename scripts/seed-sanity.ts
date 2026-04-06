/**
 * Seed script: migrates static data into Sanity.
 *
 * Requirements:
 *   - NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local
 *   - NEXT_PUBLIC_SANITY_DATASET in .env.local
 *   - SANITY_WRITE_TOKEN in .env.local (create a write token in sanity.io/manage → API → Tokens)
 *
 * Run with:
 *   npx tsx scripts/seed-sanity.ts
 *
 * Safe to re-run — uses createOrReplace with deterministic IDs.
 * Delete the SANITY_WRITE_TOKEN from .env.local after seeding.
 */

import { createClient } from "@sanity/client";
import { menuCategories } from "../src/data/menu";
import { events } from "../src/data/events";
import { galleryImages } from "../src/data/gallery";

// Load env vars
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId) {
  console.error("❌ NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local");
  process.exit(1);
}
if (!token) {
  console.error("❌ SANITY_WRITE_TOKEN is not set in .env.local");
  console.error("   Create a write token at sanity.io/manage → API → Tokens");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

async function seed() {
  console.log(`\n🌱 Seeding Sanity project: ${projectId} / ${dataset}\n`);

  // ── Menu Categories ──────────────────────────────────────────────────────
  console.log("📋 Seeding menu categories...");
  for (let i = 0; i < menuCategories.length; i++) {
    const cat = menuCategories[i];
    await client.createOrReplace({
      _id: `menuCategory-${cat.id}`,
      _type: "menuCategory",
      label: cat.label,
      categoryId: { _type: "slug", current: cat.id },
      order: i,
      items: cat.items.map((item) => ({
        _key: item.id,
        _type: "menuItem",
        name: item.name,
        description: item.description,
        price: item.price,
        dietary: item.dietary ?? [],
        featured: item.featured ?? false,
      })),
    });
    console.log(`   ✓ ${cat.label} (${cat.items.length} items)`);
  }

  // ── Events ───────────────────────────────────────────────────────────────
  console.log("\n📅 Seeding events...");
  for (const event of events) {
    await client.createOrReplace({
      _id: `event-${event.id}`,
      _type: "event",
      title: event.title,
      date: event.date,
      time: event.time,
      description: event.description,
      legacyImageUrl: event.imageUrl,
      isFeatured: event.isFeatured ?? false,
    });
    console.log(`   ✓ ${event.title}`);
  }

  // ── Gallery ──────────────────────────────────────────────────────────────
  console.log("\n🖼️  Seeding gallery images...");
  for (let i = 0; i < galleryImages.length; i++) {
    const img = galleryImages[i];
    await client.createOrReplace({
      _id: `galleryImage-${img.id}`,
      _type: "galleryImage",
      alt: img.alt,
      legacyImageUrl: img.src,
      category: img.category,
      order: i,
      // image field is left empty — staff upload real photos via the Studio
    });
    console.log(`   ✓ ${img.alt.slice(0, 50)}`);
  }

  // ── Site Settings ────────────────────────────────────────────────────────
  console.log("\n⚙️  Seeding site settings...");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    address: "Lochside Road, Loch Awe\nArgyll, PA33 1AW",
    phone: "01866 123 456",
    email: "info@hemingwayslakeside.com",
    openingHours: [
      { _key: "mon-thu", days: "Mon–Thu", hours: "12pm – 10pm" },
      { _key: "fri-sat", days: "Fri–Sat", hours: "12pm – 11pm" },
      { _key: "sunday", days: "Sunday", hours: "12pm – 9pm" },
    ],
  });
  console.log("   ✓ Site settings");

  console.log("\n✅ Seeding complete!\n");
  console.log("Next steps:");
  console.log("  1. Visit /studio to see your content in the CMS");
  console.log("  2. Upload real photos to replace the Unsplash placeholders");
  console.log("  3. Remove SANITY_WRITE_TOKEN from .env.local\n");
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
