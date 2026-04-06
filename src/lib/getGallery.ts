import { isSanityConfigured } from "@/sanity/env";
import { sanityFetch } from "@/sanity/client";
import { galleryQuery } from "@/sanity/queries/gallery";
import { galleryImages as staticData } from "@/data/gallery";
import { GalleryImageType } from "@/types";

export async function getGalleryImages(): Promise<GalleryImageType[]> {
  if (!isSanityConfigured) return staticData;
  const data = await sanityFetch<GalleryImageType[]>(galleryQuery);
  if (!data || data.length === 0) return staticData;
  return data;
}
