import { isSanityConfigured } from "@/sanity/env";
import { sanityFetch } from "@/sanity/client";
import { menuQuery } from "@/sanity/queries/menu";
import { menuCategories as staticData } from "@/data/menu";
import { MenuCategory } from "@/types";

export async function getMenuCategories(): Promise<MenuCategory[]> {
  if (!isSanityConfigured) return staticData;
  const data = await sanityFetch<MenuCategory[]>(menuQuery);
  if (!data || data.length === 0) return staticData;
  return data;
}
