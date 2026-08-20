import Link from "next/link";
import { MessageCircleCode, UserRound } from "lucide-react";
import ProjectsDropdown from "./ProjectsDropdown";
import LanguageSwitch from "./LanguageSwitch";
import Reveal from "./ui/reveal";
import { getContent, href, type Locale } from "@/content";
import { WHATSAPP_URL } from "@/lib/links";

interface HeaderProps {
  locale: Locale;
  /** Ruta equivalente en el otro idioma */
  altHref: string;
}

export default function Header({ locale, altHref }: HeaderProps) {
  const t = getContent(locale);
  const other: Locale = locale === "es" ? "en" : "es";

  return (
    <Reveal>
      <header className="bg-teal p-4 rounded-lg flex justify-between items-center mb-10">
        <Link href={href(locale)} className="text-2xl hidden sm:block">
          <span className="italic font-extralight">M. Alfonso </span>
          <span className="font-bold">Rodríguez</span>
        </Link>
        <Link href={href(locale)} className="text-3xl text-gold sm:hidden">
          <span className="italic font-extralight">A.</span>
          <span className="font-bold">R</span>
        </Link>
        <nav>
          <ul className="flex items-center space-x-1 sm:space-x-2 text-sm">
            <ProjectsDropdown
              locale={locale}
              projects={t.projects}
              label={t.nav.projects}
            />
            <li>
              <Link
                href={href(locale, locale === "es" ? "/sobre-mi" : "/about")}
                className="flex items-center hover:text-gold transition-colors p-2 rounded-md"
              >
                <span className="hidden sm:inline">{t.nav.about}</span>
                <UserRound className="sm:hidden" />
              </Link>
            </li>
            <li>
              <Link
                href={WHATSAPP_URL[locale]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gold transition-colors p-2 rounded-md"
              >
                <span className="hidden sm:inline">{t.nav.talk}</span>
                <MessageCircleCode className="sm:hidden" />
              </Link>
            </li>
            <LanguageSwitch
              href={altHref}
              label={t.switchLabel}
              hrefLang={other}
            />
          </ul>
        </nav>
      </header>
    </Reveal>
  );
}
