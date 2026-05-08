import Home from "@/schemaTypes/pages/home";
import Header from "@/schemaTypes/pages/header";
import Footer from "@/schemaTypes/pages/footer";
import Article from "@/schemaTypes/pages/article";
import Author from "@/schemaTypes/pages/author";
import Category from "@/schemaTypes/pages/category";
import ArticlesList from "@/schemaTypes/pages/article-list";
import { startCase } from "@/utilities";

const allPageSchemas = [Home, Header, Footer, Author, ArticlesList, Article, Category];

export interface SingletonMeta {
  id: string;
  schemaType: string;
  title: string;
}

export const schemaPages: SingletonMeta[] = allPageSchemas.flatMap((def) => {
  const arr = Array.isArray(def) ? def : [def];
  return arr.map((schema) => ({
    id: `${schema.name}Page`,
    schemaType: schema.name,
    title: schema.title
      ? startCase(schema.title)
      : startCase(`${schema.name} Page`),
  }));
});

export const schemaTypesName = schemaPages.map((s) => s.schemaType);

export default allPageSchemas;