export const eventsQuery = `*[_type == "event"] | order(date asc) {
  "id": _id,
  title,
  date,
  time,
  description,
  "imageUrl": select(
    defined(image.asset) => image.asset->url + "?auto=format&fit=crop&w=800&q=80",
    legacyImageUrl
  ),
  isFeatured
}`;
