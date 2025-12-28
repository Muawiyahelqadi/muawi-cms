import { defineType, defineField, defineArrayMember } from "sanity";
import { ComponentIcon, MobileDeviceIcon, EnvelopeIcon } from "@sanity/icons";
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
      name: "phonesNumber",
      title: "Phone Numbers",
      description: "Add phone numbers or WhatsApp links",
      type: "array",
      of: [
        // Regular phone number
        defineArrayMember({
          type: "object",
          name: "phoneNumber",
          title: "Phone Number",
          icon: MobileDeviceIcon,
          fields: [
            defineField({
              name: "number",
              title: "Phone Number",
              type: "string",
              placeholder: "299999999",
              validation: (Rule) =>
                Rule.custom((value) => {
                  if (!value) return true;
                  // Validate phone number format (adjust regex as needed)
                  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
                  return (
                    phoneRegex.test(value) ||
                    "Please enter a valid phone number (e.g., +299077055)"
                  );
                }),
            }),
          ],
          preview: {
            select: { number: "number" },
            prepare({ number }) {
              return {
                title: number,
                subtitle: "Phone Number",
              };
            },
          },
        }),
        // WhatsApp link
        defineArrayMember({
          type: "object",
          name: "whatsappLink",
          title: "WhatsApp Link",
          icon: EnvelopeIcon,
          fields: [
            defineField({
              name: "url",
              title: "WhatsApp URL",
              type: "url",
              placeholder: "https://wa.me/299999999",
              validation: (Rule) =>
                Rule.uri({
                  allowRelative: false,
                  scheme: ["https"],
                }).custom((value) => {
                  if (!value) {
                    return true;
                  }
                  if (!value.startsWith("https://wa.me/")) {
                    return "Please use WhatsApp format: https://wa.me/299999999";
                  }
                  return true;
                }),
            }),
          ],
          preview: {
            select: { url: "url" },
            prepare({ url }) {
              return {
                title: url,
                subtitle: "WhatsApp",
              };
            },
          },
        }),
      ],
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
