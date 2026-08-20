import { es } from "./es";
import { en } from "./en";
import type { Content, Locale } from "./types";

export * from "./types";

const content: Record<Locale, Content> = { es, en };

export function getContent(locale: Locale): Content {
  return content[locale];
}

/** Prefija una ruta interna con el idioma. El ingles es el default y vive en
 *  la raiz; el español va bajo /es. */
export function href(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path;
  return locale === "en" ? clean || "/" : `/es${clean}`;
}

export const SITE_URL = "https://portfolio-alfonsorodriguez-20.vercel.app";
