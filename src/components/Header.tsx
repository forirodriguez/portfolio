import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LanguageSwitch from "./LanguageSwitch";
import { getContent, href, type Locale } from "@/content";
import { MAILTO_URL } from "@/lib/links";

export default function Header({ locale, altHref }: { locale: Locale; altHref: string }) {
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
            <li><Link className="nav-link" href={`${href(locale)}#work`}>{t.nav.projects}</Link></li>
            <li><Link className="nav-link" href={href(locale, locale === "es" ? "/sobre-mi" : "/about")}>{t.nav.about}</Link></li>
            <li>
              <Link className="nav-link" href={MAILTO_URL} aria-label={t.nav.talk} title={t.nav.talk}>
                <span className="hidden sm:inline">{t.nav.talk}</span><ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            </li>
            <LanguageSwitch href={altHref} label={t.switchLabel} hrefLang={locale === "es" ? "en" : "es"} />
          </ul>
        </nav>
      </header>
    </>
  );
}
