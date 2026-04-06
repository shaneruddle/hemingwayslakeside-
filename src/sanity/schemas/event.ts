import { defineField, defineType } from "sanity";

export const eventSchema = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "time",
      title: "Time",
      type: "string",
      description: 'e.g. "7:00 PM"',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Event Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "legacyImageUrl",
      title: "External Image URL (legacy)",
      type: "url",
      description: "Used if no Sanity image is uploaded. Will be replaced once you upload a real image.",
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Event",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [{ title: "Date (Upcoming First)", name: "dateAsc", by: [{ field: "date", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "date", media: "image" },
  },
});
