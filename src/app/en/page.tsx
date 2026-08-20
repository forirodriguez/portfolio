import HomeView from "@/components/pages/HomeView";
import { getContent } from "@/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  ...getContent("en").meta.home,
  locale: "en",
  esPath: "/",
  enPath: "/en",
});

export default function HomePageEn() {
  return <HomeView locale="en" />;
}
