import { defineField } from "sanity";

export default defineField({
  name: "icon",
  title: "Icon",
  type: "string",
  description:
    "https://icon-sets.iconify.design find icon name — e.g. mdi:account-arrow-up",
  validation: (r) => r.required(),
});
