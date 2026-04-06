export const menuQuery = `*[_type == "menuCategory"] | order(order asc) {
  "id": categoryId.current,
  "label": label,
  "items": items[] {
    "id": _key,
    name,
    description,
    price,
    dietary,
    featured
  }
}`;
