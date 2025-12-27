import { defineField, defineType } from "sanity";

export default defineType({
  name: "cta",
  type: "object",
  title: "CTA",
  fields: [
    defineField({
      name: "text",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "url",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: true,
        }),
    }),
    defineField({
      name: "openInNewTab",
      type: "boolean",
      hidden: ({ parent }) => {
        const url = parent?.url;
        if (!url) return false;

        // Hide if URL is relative (starts with / or #)
        return url.startsWith("/") || url.startsWith("#");
      },
    }),
  ],
  preview: {
    select: {
      text: "text",
      url: "url",
    },
    prepare({ text, url }) {
      return {
        title: text,
        subtitle: url,
      };
    },
  },
});
