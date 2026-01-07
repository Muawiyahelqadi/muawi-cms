import Pages from "@/schemaTypes/pages";
import Components from "@/schemaTypes/components";
import Dictionaries from "@/schemaTypes/translation";
import Objects from "@/schemaTypes/objects";
import Auth from "@/schemaTypes/auth";
import Appointment from "@/schemaTypes/appointment";

export const schemaTypes = [
  ...Objects,
  ...Components,
  ...Pages,
  ...Dictionaries,
  ...Auth,
  ...Appointment,
];
