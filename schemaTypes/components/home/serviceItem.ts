import { appendLanguageSubtitle } from "@/utilities";
import { defineField, defineType } from "sanity";
import iconsField from "@/schemaTypes/fields/iconsField";

export default defineType({
  name: "serviceItem",
  type: "object",
  title: "Service Item",
  fields: [
    iconsField,
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      language: "language",
    },
    prepare({ title, language }) {
      return {
        title: title,
        subtitle: appendLanguageSubtitle(language),
      };
    },
  },
});
