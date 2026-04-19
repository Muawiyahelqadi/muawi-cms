import { defineField, defineType } from "sanity";

export default defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "password",
      title: "Password",
      type: "string",
      validation: (Rule) => Rule.required().min(6),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [{ title: "Admin", value: "admin" }],
      },
      initialValue: "admin",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: { name: "name", email: "email" },
    prepare({ name, email }) {
      return {
        title: name,
        subtitle: email,
      };
    },
  },
});
