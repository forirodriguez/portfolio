import AboutView from "@/components/pages/AboutView";
import { getContent } from "@/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  ...getContent("es").meta.about,
  locale: "es",
  esPath: "/es/sobre-mi",
  enPath: "/about",
});

export default function AboutPageEs() {
  return <AboutView locale="es" />;
}
