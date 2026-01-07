import { defineField, defineType } from "sanity";

export default defineType({
  name: "appointmentPage",
  title: "Appointment",
  type: "document",
  fields: [
    defineField({
      name: "service",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "datetime",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fullName",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "email",
    }),
    defineField({
      name: "phoneNumber",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "message",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      fullName: "fullName",
      phoneNumber: "phoneNumber",
    },
    prepare({ fullName, phoneNumber }) {
      return {
        title: fullName,
        subtitle: phoneNumber,
      };
    },
  },
});
