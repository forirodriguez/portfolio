import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";
import { getContent, href, type Locale } from "@/content";
import { MAILTO_URL } from "@/lib/links";

/** `current` marca en que parte del sitio esta el visitante. Sin esto la unica
 *  diferencia entre un link del nav y el de la pagina abierta es el hover. */
export default function Header({ locale, altHref, current }: { locale: Locale; altHref: string; current?: "work" | "about" }) {
  const t = getContent(locale);

  return (
    <>
      <a href="#main" className="skip-link">{t.nav.skip}</a>
      <header className="site-header">
        <Link href={href(locale)} className="site-name" aria-label={`Alfonso Rodríguez · ${t.nav.home}`}>
          Alfonso <strong>Rodríguez<span className="text-teal">.</span></strong>
        </Link>
        <nav aria-label={t.nav.home}>
          <ul className="flex flex-wrap items-center gap-1 sm:gap-3 text-sm">
            <li><Link className="nav-link" href={`${href(locale)}#work`} aria-current={current === "work" ? "true" : undefined}>{t.nav.projects}</Link></li>
            <li><Link className="nav-link" href={href(locale, locale === "es" ? "/sobre-mi" : "/about")} aria-current={current === "about" ? "page" : undefined}>{t.nav.about}</Link></li>
            <li>
              <Link className="nav-link" href={MAILTO_URL} aria-label={t.nav.talk} title={t.nav.talk}>
                <span className="hidden sm:inline">{t.nav.talk}</span><ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            </li>
            <LanguageSwitch href={altHref} label={t.switchLabel} hrefLang={locale === "es" ? "en" : "es"} />
            <ThemeToggle locale={locale} />
          </ul>
        </nav>
      </header>
    </>
  );
}
