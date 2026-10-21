import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";
import { getContent } from "@/content";

export const metadata = {
  title: "404 | Alfonso Rodríguez",
  description: "This page does not exist.",
  robots: { index: false, follow: true },
};

/** Next sirve un unico not-found para los dos idiomas y no sabe en build cual
 *  pedia el visitante, asi que la pagina habla en ingles (el default, en la
 *  raiz) y deja el cambio de idioma en el header como el resto del sitio. */
export default function NotFound() {
  const t = getContent("en");

  return (
    <div className="site-shell">
      <Header locale="en" altHref="/es" />
      <main id="main" tabIndex={-1} className="interior-main not-found-page">
        <p className="eyebrow">{t.notFound.title}</p>
        <h1 className="page-title">404</h1>
        <p className="project-deck">{t.notFound.text}</p>
        <Link href="/" className="button-dark not-found-cta">
          <ArrowLeft size={20} aria-hidden="true" />
          {t.notFound.cta}
        </Link>
      </main>
      <ContactFooter locale="en" />
    </div>
  );
}
