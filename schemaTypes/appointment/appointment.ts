import { defineField, defineType } from "sanity";

export default defineType({
  name: "appointmentPage",
  title: "Appointment",
  type: "document",
  fields: [
    defineField({
      name: "service",
      title: "Service",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Preferred Date",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Confirmed", value: "confirmed" },
          { title: "Cancelled", value: "cancelled" },
          { title: "Completed", value: "completed" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      readOnly: true,
    }),
    defineField({
      name: "submittedFrom",
      title: "Submitted From IP",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "notes",
      title: "Internal Notes",
      type: "text",
      description: "Private notes for staff only",
      rows: 3,
    }),
    defineField({
      name: "timeSpent",
      type: "string",
    }),
    defineField({
      name: "expectedPaymentAmount",
      type: "string",
    }),
  ],
  preview: {
    select: {
      name: "name",
      service: "service",
      date: "date",
      status: "status",
    },
    prepare(selection) {
      const { name, service, date, status } = selection;
      const statusEmoji = {
        pending: "⏳",
        confirmed: "✅",
        cancelled: "❌",
        completed: "🎉",
      };

      return {
        title: `${name} - ${service}`,
        subtitle: `${date} • ${statusEmoji[status as keyof typeof statusEmoji] || ""} ${status}`,
      };
    },
  },
  orderings: [
    {
      title: "Date, New to Old",
      name: "dateDesc",
      by: [{ field: "createdAt", direction: "desc" }],
    },
    {
      title: "Date, Old to New",
      name: "dateAsc",
      by: [{ field: "createdAt", direction: "asc" }],
    },
    {
      title: "Status",
      name: "status",
      by: [
        { field: "status", direction: "asc" },
        { field: "createdAt", direction: "desc" },
      ],
    },
  ],
});
