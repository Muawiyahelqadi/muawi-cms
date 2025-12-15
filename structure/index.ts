import { extractSchemas } from "@/utilities";
import type { StructureBuilder, StructureResolver } from "sanity/structure";
import { createPageContentSection } from "@/structure/pageContentSection";

const pagesModules = import.meta.glob<
  true,
  string,
  {
    default:
      | { name: string; title?: string }
      | { name: string; title?: string }[];
  }
>(["../schemaTypes/pages/**/*.ts", "!../schemaTypes/pages/index.ts"], {
  eager: true,
});

export const pages = extractSchemas(pagesModules);

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Pages")
    .items([createPageContentSection(S), S.divider()]);
