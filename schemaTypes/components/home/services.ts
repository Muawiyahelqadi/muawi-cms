import { appendLanguageSubtitle, toPlainText } from "@/utilities";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "services",
  type: "object",
  title: "Services Section",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "items",
      type: "array",
      title: "Service Items",
      of: [defineArrayMember({ type: "serviceItem" })],
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
