import type { Metadata } from "next";
import { SITE_URL, type Locale } from "@/content";

interface BuildMetadataArgs {
  title: string;
  description: string;
  keywords: string;
  locale: Locale;
  /** Ruta de esta pagina en español, empezando con "/" ("/" para el home) */
  esPath: string;
  /** Ruta de esta pagina en ingles */
  enPath: string;
}

/**
 * Metadata consistente para todas las paginas: canonical, hreflang y tarjetas
 * de Open Graph / Twitter. La imagen la genera `opengraph-image.tsx`.
 */
const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Alfonso Rodriguez — Full Stack Developer",
};

export function buildMetadata({
  title,
  description,
  keywords,
  locale,
  esPath,
  enPath,
}: BuildMetadataArgs): Metadata {
  const path = locale === "es" ? esPath : enPath;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Alfonso Rodriguez", url: SITE_URL }],
    alternates: {
      canonical: path,
      languages: {
        "es-UY": esPath,
        en: enPath,
        "x-default": esPath,
      },
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Alfonso Rodriguez",
      type: "website",
      locale: locale === "es" ? "es_UY" : "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
    robots: { index: true, follow: true },
  };
}
