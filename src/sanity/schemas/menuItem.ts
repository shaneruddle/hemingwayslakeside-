import { defineField, defineArrayMember } from "sanity";

export const menuItemSchema = defineArrayMember({
  name: "menuItem",
  title: "Menu Item",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Dish Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: 'e.g. "£14.50"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dietary",
      title: "Dietary Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Vegan", value: "vegan" },
          { title: "Vegetarian", value: "vegetarian" },
          { title: "Gluten Free", value: "gluten-free" },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Featured Item",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "price" },
  },
});
