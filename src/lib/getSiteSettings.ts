import { isSanityConfigured } from "@/sanity/env";
import { sanityFetch } from "@/sanity/client";
import { siteSettingsQuery } from "@/sanity/queries/siteSettings";

export interface SiteSettings {
  address: string;
  phone: string;
  email: string;
  instagramUrl?: string;
  facebookUrl?: string;
  openingHours: { days: string; hours: string }[];
}

const fallback: SiteSettings = {
  address: "Lochside Road, Loch Awe\nArgyll, PA33 1AW",
  phone: "01866 123 456",
  email: "info@hemingwayslakeside.com",
  openingHours: [
    { days: "Mon–Thu", hours: "12pm – 10pm" },
    { days: "Fri–Sat", hours: "12pm – 11pm" },
    { days: "Sunday", hours: "12pm – 9pm" },
  ],
};

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSanityConfigured) return fallback;
  const data = await sanityFetch<SiteSettings>(siteSettingsQuery);
  if (!data) return fallback;
  return data;
}
