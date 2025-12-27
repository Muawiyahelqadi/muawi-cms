import { defineType, defineField, defineArrayMember } from "sanity";
import { appendLanguageSubtitle, injectLanguage } from "@/utilities";
import { LinkIcon } from "@sanity/icons";
import iconsField from "@/schemaTypes/fields/iconsField";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "copyright",
      title: "Copyright",
      type: "string",
    }),
    defineField({
      name: "socialMediaItems",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "socialMediaItem",
          fields: [
            iconsField,
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
            select: { url: "url" },
            prepare({ url }) {
              return {
                title: url,
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
