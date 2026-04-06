import { isSanityConfigured } from "@/sanity/env";
import { sanityFetch } from "@/sanity/client";
import { eventsQuery } from "@/sanity/queries/events";
import { events as staticData } from "@/data/events";
import { EventType } from "@/types";

export async function getEvents(): Promise<EventType[]> {
  if (!isSanityConfigured) return staticData;
  const data = await sanityFetch<EventType[]>(eventsQuery);
  if (!data || data.length === 0) return staticData;
  return data;
}
