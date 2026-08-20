import AboutView from "@/components/pages/AboutView";
import { getContent } from "@/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  ...getContent("en").meta.about,
  locale: "en",
  esPath: "/es/sobre-mi",
  enPath: "/about",
});

export default function AboutPage() {
  return <AboutView locale="en" />;
}
