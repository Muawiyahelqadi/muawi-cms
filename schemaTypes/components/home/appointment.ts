import { defineType, defineField, defineArrayMember } from "sanity";
import { ComponentIcon } from "@sanity/icons";
import { appendLanguageSubtitle } from "@/utilities";

export default defineType({
  name: "appointment",
  title: "Appointment",
  type: "object",
  icon: ComponentIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "services",
      type: "array",
      of: [
        defineArrayMember({
          name: "name",
          type: "string",
          validation: (r) => r.required(),
        }),
      ],
      validation: (r) => r.min(1),
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "phone",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["tel"],
        }),
    }),
    defineField({
      name: "blockedDates",
      title: "Blocked Dates",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "date",
              title: "Date",
              type: "date",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "reason",
              title: "Reason (optional)",
              type: "string",
              description: 'E.g., "Public Holiday", "Staff Training"',
            },
          ],
          preview: {
            select: {
              date: "date",
              reason: "reason",
            },
            prepare({ date, reason }) {
              return {
                title: date,
                subtitle: reason || "Blocked",
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "blockedDateRanges",
      title: "Blocked Date Ranges",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            {
              name: "startDate",
              title: "Start Date",
              type: "date",
            },
            {
              name: "endDate",
              title: "End Date",
              type: "date",
            },
            {
              name: "reason",
              title: "Reason",
              type: "string",
            },
          ],
          preview: {
            select: {
              startDate: "startDate",
              endDate: "endDate",
              reason: "reason",
            },
            prepare({ startDate, endDate, reason }) {
              return {
                title: `${startDate} - ${endDate}`,
                subtitle: reason,
              };
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", language: "language" },
    prepare({ title, language }) {
      return {
        title,
        subtitle: appendLanguageSubtitle(language),
      };
    },
  },
});
