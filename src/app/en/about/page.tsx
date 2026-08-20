import AboutView from "@/components/pages/AboutView";
import { getContent } from "@/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  ...getContent("en").meta.about,
  locale: "en",
  esPath: "/sobre-mi",
  enPath: "/en/about",
});

export default function AboutPageEn() {
  return <AboutView locale="en" />;
}
