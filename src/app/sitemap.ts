import type { MetadataRoute } from "next";
import { getContent, SITE_URL } from "@/content";

/** Una entrada por pagina y por idioma. Las rutas salen del contenido, asi que
 *  un proyecto nuevo entra al sitemap sin tocar este archivo. */
export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getContent("en").projects.map((project) => `/${project.id}`);
  const enPaths = ["/", "/about", "/bio", ...projects];
  const esPaths = ["/es", "/es/sobre-mi", "/es/bio", ...projects.map((path) => `/es${path}`)];
  const lastModified = new Date();

  return [...enPaths, ...esPaths].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
