import { defineField, defineType } from "sanity";
import { injectLanguage } from "@/utilities";

export default defineType({
  name: "articlesList",
  title: "Articles List",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Latest Articles",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    injectLanguage(),
  ],
  preview: {
    prepare() {
      return {
        title: "Articles List Page",
      };
    },
  },
});
