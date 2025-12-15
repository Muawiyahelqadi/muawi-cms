import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'

export const LOCALES = [
  { id: "ar", title: "Arabic" },
  { id: "en", title: "English" },
];

export default defineConfig({
  name: 'default',
  title: process.env.SANITY_STUDIO_PROJECT_Name || "My Project",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "",
  dataset: process.env.SANITY_STUDIO_DATASET || "",

  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [...LOCALES],
      schemaTypes: [],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
