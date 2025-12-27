import { defineType, defineField, defineArrayMember } from "sanity";

export const LOCALES = [
  { id: "en", title: "English" },
  { id: "ar", title: "Arabic" },
];

export default defineType({
  name: "dictionaries",
  title: "Dictionaries",
  type: "document",
  fields: [
    defineField({
      name: "entries",
      title: "Entries",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "entry",
          fields: [
            defineField({
              name: "keyword",
              title: "Keyword",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            ...LOCALES.map((loc) =>
              defineField({
                name: loc.id,
                title: loc.title,
                type: "string",
              }),
            ),
          ],
          preview: {
            select: { title: "keyword", en: "en", ar: "ar" },
            prepare({ title, en, ar }) {
              return {
                title,
                subtitle: `EN: ${en || "—"} | AR: ${ar || "—"}`,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Dictionaries",
      };
    },
  },
});
