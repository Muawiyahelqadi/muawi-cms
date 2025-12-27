import { defineType, defineArrayMember, defineField } from "sanity";
import { ColorWheelIcon } from "@sanity/icons";

export const contentBlock = defineType({
  name: "contentBlock",
  type: "array",
  title: "Content Block",
  of: [
    defineArrayMember({
      type: "block",
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          defineField({
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              defineField({
                name: "href",
                title: "URL or email",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["http", "https", "mailto", "tel", "/"],
                  }),
              }),
              defineField({
                name: "openInNewTab",
                title: "Open in new tab",
                type: "boolean",
                initialValue: true,
              }),
            ],
          }),
          defineArrayMember({
            name: "color",
            type: "object",
            title: "Color",
            icon: ColorWheelIcon,
            fields: [
              defineField({
                name: "color",
                type: "color",
                title: "Color",
              }),
            ],
          }),
        ],
      },
    }),
  ],
});

export default contentBlock;
