import { defineField, defineType } from "sanity";
import { menuItemSchema } from "./menuItem";

export const menuCategorySchema = defineType({
  name: "menuCategory",
  title: "Menu Category",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Category Name",
      type: "string",
      description: 'e.g. "Starters", "Mains"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categoryId",
      title: "Category ID",
      type: "slug",
      description: "Used for anchor links on the menu page",
      options: { source: "label" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "items",
      title: "Menu Items",
      type: "array",
      of: [menuItemSchema],
    }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "label" },
  },
});
