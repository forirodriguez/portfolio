import BioView from "@/components/pages/BioView";
import { getContent } from "@/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  ...getContent("es").meta.bio,
  locale: "es",
  esPath: "/es/bio",
  enPath: "/bio",
});

export default function BioPageEs() {
  return <BioView locale="es" />;
}
