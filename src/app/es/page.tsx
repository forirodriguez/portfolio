import HomeView from "@/components/pages/HomeView";
import { getContent } from "@/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  ...getContent("es").meta.home,
  locale: "es",
  esPath: "/es",
  enPath: "/",
});

export default function HomePageEs() {
  return <HomeView locale="es" />;
}
