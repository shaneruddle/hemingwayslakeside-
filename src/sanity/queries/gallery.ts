export const galleryQuery = `*[_type == "galleryImage"] | order(order asc) {
  "id": _id,
  "src": select(
    defined(image.asset) => image.asset->url + "?auto=format&fit=crop&w=1200&q=80",
    legacyImageUrl
  ),
  alt,
  "width": coalesce(image.asset->metadata.dimensions.width, 1200),
  "height": coalesce(image.asset->metadata.dimensions.height, 800),
  category
}`;
