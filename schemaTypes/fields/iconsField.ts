import { defineField } from "sanity";

export const availableIcons = [
  { title: "Flask Comical", value: "flask-conical" },
  { title: "Heart Pulse", value: "heart-pulse" },
  { title: "Pill", value: "pill" },
  { title: "Accessibility", value: "accessibility" },
  { title: "Brain", value: "brain" },
  { title: "Dna", value: "dna" },
  { title: "Clock", value: "clock" },
  { title: "Stethoscope", value: "stethoscope" },
  { title: "Headphones", value: "headphones" },
  { title: "Phone", value: "phone" },
  { title: "Arrow Right", value: "arrow-right" },
  { title: "Arrow Up", value: "arrow-up" },
  { title: "Linkedin", value: "linkedin" },
  { title: "Twitter", value: "twitter" },
  { title: "Facebook", value: "facebook" },
  { title: "Instagram", value: "instagram" },
];

export default defineField({
  name: "iconName",
  title: "IconName",
  type: "string",
  options: {
    list: availableIcons,
    layout: "dropdown",
  },
  validation: (Rule) => Rule.required(),
});
