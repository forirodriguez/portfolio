import { es } from "./es";
import { en } from "./en";
import type { Content, Locale } from "./types";

export * from "./types";

const content: Record<Locale, Content> = { es, en };

export function getContent(locale: Locale): Content {
  return content[locale];
}

/** Prefija una ruta interna con el idioma. `/` en español queda `/`. */
export function href(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path;
  return locale === "es" ? clean || "/" : `/en${clean}`;
}

export const SITE_URL = "https://portfolio-alfonsorodriguez-20.vercel.app";
