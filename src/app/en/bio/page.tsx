import BioView from "@/components/pages/BioView";
import { getContent } from "@/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  ...getContent("en").meta.bio,
  locale: "en",
  esPath: "/bio",
  enPath: "/en/bio",
});

export default function BioPageEn() {
  return <BioView locale="en" />;
}
