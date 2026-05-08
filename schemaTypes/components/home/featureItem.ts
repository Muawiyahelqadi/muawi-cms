import { appendLanguageSubtitle, toPlainText } from "@/utilities";
import { defineField, defineType, defineArrayMember } from "sanity";
import iconsField from "@/schemaTypes/fields/iconsField";
import { HomeIcon, MobileDeviceIcon, EnvelopeIcon } from "@sanity/icons";

export default defineType({
  name: "featureItem",
  type: "object",
  title: "Feature Item",
  fields: [
    iconsField,
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "cta",
      title: "CTA Button",
      type: "cta",
    }),
    defineField({
      name: "contactLinks",
      title: "Contact Links",
      description: "Add Emails/PhoneNumbers/WhatsApp links",
      type: "array",
      of: [
        // Regular Emails
        defineArrayMember({
          type: "object",
          name: "emails",
          title: "Email",
          icon: HomeIcon,
          fields: [
            defineField({
              name: "email",
              title: "Email",
              type: "string",
              placeholder: "your-email@example.com",
              validation: (Rule) => Rule.required().email(),
            }),
          ],
          preview: {
            select: { email: "email" },
            prepare({ email }) {
              return {
                title: email,
                subtitle: "Email",
              };
            },
          },
        }),
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
  ],
  preview: {
    select: {
      title: "title",
      language: "language",
    },
    prepare({ title, language }) {
      return {
        title: title,
        subtitle: appendLanguageSubtitle(language),
      };
    },
  },
});
