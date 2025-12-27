import { appendLanguageSubtitle, toPlainText } from "@/utilities";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  type: "object",
  title: "About Section",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "contentBlock",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "file",
      title: "File",
      type: "file",
    }),
  ],
  preview: {
    select: {
      language: "language",
    },
    prepare({ language }) {
      return {
        title: "About Section",
        subtitle: appendLanguageSubtitle(language),
      };
    },
  },
});
