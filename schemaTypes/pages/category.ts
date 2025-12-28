import { defineField, defineType } from "sanity";
import { injectLanguage } from "@/utilities";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().min(1).max(96),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      description:
        "Gradient color for category badge (e.g., from-teal-500 to-cyan-500)",
      options: {
        list: [
          { title: "Teal to Cyan", value: "from-teal-500 to-cyan-500" },
          { title: "Blue to Indigo", value: "from-blue-500 to-indigo-500" },
          { title: "Purple to Pink", value: "from-purple-500 to-pink-500" },
          { title: "Orange to Red", value: "from-orange-500 to-red-500" },
          { title: "Green to Emerald", value: "from-green-500 to-emerald-500" },
          { title: "Amber to Orange", value: "from-amber-500 to-orange-500" },
          { title: "Rose to Pink", value: "from-rose-500 to-pink-500" },
          { title: "Violet to Purple", value: "from-violet-500 to-purple-500" },
        ],
      },
      initialValue: "from-teal-500 to-cyan-500",
    }),
    injectLanguage(),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
    },
  },
});
