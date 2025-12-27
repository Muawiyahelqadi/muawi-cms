import { appendLanguageSubtitle, toPlainText } from "@/utilities";
import { defineField, defineType } from "sanity";
import iconsField from "@/schemaTypes/fields/iconsField";

export default defineType({
  name: "featureItem",
  type: "object",
  title: "Feature Item",
  fields: [
    iconsField,
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "cta",
      title: "CTA Button",
      type: "cta",
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
