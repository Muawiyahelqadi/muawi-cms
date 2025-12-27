import { defineField, defineType } from "sanity";
import {
  appendLanguageSubtitle,
  createSections,
  injectLanguage,
} from "@/utilities";
import { homeWidgetNames } from "@/schemaTypes/components/home";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Home Page",
    }),
    createSections(homeWidgetNames),
    injectLanguage(),
  ],
  preview: {
    select: { title: "title", language: "language" },
    prepare({ title, language }) {
      return {
        title: title || "Home Page",
        subtitle: appendLanguageSubtitle(language),
      };
    },
  },
});
