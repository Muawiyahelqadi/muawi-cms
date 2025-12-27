import { defineType, defineField, defineArrayMember } from "sanity";
import { appendLanguageSubtitle, injectLanguage } from "@/utilities";
import { LinkIcon } from "@sanity/icons";

export default defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "menuItems",
      title: "Menu Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "menuItem",
          title: "Menu Item",
          fields: [
            defineField({
              name: "title",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "url",
              type: "url",
              validation: (Rule) =>
                Rule.uri({
                  allowRelative: true,
                  scheme: ["http", "https", "mailto", "tel"],
                }),
            }),
          ],
          preview: {
            select: { title: "title", url: "url" },
            prepare({ title, url }) {
              return {
                title: title,
                subtitle: url,
                media: LinkIcon,
              };
            },
          },
        }),
      ],
    }),
    injectLanguage(),
  ],
  preview: {
    select: { language: "language" },
    prepare({ language }) {
      return {
        title: "Header",
        subtitle: appendLanguageSubtitle(language),
      };
    },
  },
});
