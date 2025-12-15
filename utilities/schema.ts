import { startCase } from "@/utilities";
import { defineField } from "sanity";

export type SingletonMeta = {
  id: string;
  schemaType: string;
  title: string;
};

export function extractSchemas(
  modules: Record<string, { default: any }>,
): SingletonMeta[] {
  return Object.entries(modules)
    .filter(([path]) => !path.endsWith("index.ts"))
    .flatMap(([_, m]) => {
      const def = m.default;
      const arr = Array.isArray(def) ? def : [def];
      return arr.map((schema) => ({
        id: `${schema.name}Page`,
        schemaType: schema.name,
        title: schema.title
          ? startCase(schema.title)
          : startCase(`${schema.name} Page`),
      }));
    });
}

export const createSections = (widgetsName: string[]) => {
  return defineField({
    name: "sections",
    title: "Sections",
    type: "array",
    of: widgetsName.map((type) => ({ type })),
  });
};

export const injectLanguage = () => {
  return defineField({
    name: "language",
    type: "string",
    readOnly: true,
    hidden: true,
  });
};
