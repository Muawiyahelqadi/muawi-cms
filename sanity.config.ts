import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { documentInternationalization } from "@sanity/document-internationalization";
import { schemaTypesName } from "@/structure";
import { linkField } from "sanity-plugin-link-field";
import { colorInput } from "@sanity/color-input";

export const LOCALES = [
  { id: "ar", title: "Arabic" },
  { id: "en", title: "English" },
];

export default defineConfig({
  name: "default",
  title: process.env.SANITY_STUDIO_PROJECT_Name || "My Project",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "",
  dataset: process.env.SANITY_STUDIO_DATASET || "",

  plugins: [
    structureTool(),
    visionTool(),
    colorInput(),
    documentInternationalization({
      supportedLanguages: [...LOCALES],
      schemaTypes: [...schemaTypesName],
    }),
    linkField({
      linkableSchemaTypes: [...schemaTypesName],
      referenceFilterOptions: {
        filter: ({ document }) => {
          const currentLanguage = document?.language || document?.lang;
          const defaultLanguage = "en";

          if (currentLanguage) {
            return {
              filter: "language == $language || !defined(language)",
              params: {
                language: currentLanguage,
                defaultLanguage: defaultLanguage,
              },
            };
          }

          // If no language is set, show all documents
          return {};
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
