import Hero from "@/schemaTypes/components/home/hero";
import Features from "@/schemaTypes/components/home/features";
import About from "@/schemaTypes/components/home/about";
import Services from "@/schemaTypes/components/home/services";
import ServiceItem from "@/schemaTypes/components/home/serviceItem";
import FeatureItem from "@/schemaTypes/components/home/featureItem";
import Appointment from "@/schemaTypes/components/home/appointment";

const widgets = [
  Hero,
  Features,
  FeatureItem,
  About,
  Services,
  ServiceItem,
  Appointment,
];

export const homeWidgetNames = widgets
  .filter((widget) => !["serviceItem", "featureItem"].includes(widget.name))
  .map((widget) => widget.name);

export default widgets;
