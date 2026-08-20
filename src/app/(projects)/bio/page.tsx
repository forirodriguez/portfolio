import BioView from "@/components/pages/BioView";
import { getContent } from "@/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  ...getContent("en").meta.bio,
  locale: "en",
  esPath: "/es/bio",
  enPath: "/bio",
});

export default function BioPage() {
  return <BioView locale="en" />;
}
