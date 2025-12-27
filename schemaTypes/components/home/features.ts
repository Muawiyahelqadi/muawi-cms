import { appendLanguageSubtitle } from "@/utilities";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "features",
  type: "object",
  title: "Features Section",
  fields: [
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [defineArrayMember({ type: "featureItem" })],
    }),
  ],
  preview: {
    select: {
      language: "language",
    },
    prepare({ language }) {
      return {
        title: "Features",
        subtitle: appendLanguageSubtitle(language),
      };
    },
  },
});
