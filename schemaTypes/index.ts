import Pages from "@/schemaTypes/pages";
import Components from "@/schemaTypes/components";
import Dictionaries from "@/schemaTypes/translation";
import Objects from "@/schemaTypes/objects";

export const schemaTypes = [
  ...Objects,
  ...Components,
  ...Pages,
  ...Dictionaries,
];
