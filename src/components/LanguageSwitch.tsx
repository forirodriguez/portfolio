"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Al cambiar de idioma marcamos <html> antes de navegar: la pagina nueva monta
 *  ya dentro de [data-retype] y el CSS reescribe los textos (ver globals.css). */
export default function LanguageSwitch({ href, label, hrefLang }: { href: string; label: string; hrefLang: string }) {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!("retype" in root.dataset)) return;
    const id = setTimeout(() => delete root.dataset.retype, 1400);
    return () => clearTimeout(id);
  }, [pathname]);

  return (
    <li>
      <Link href={href} hrefLang={hrefLang} lang={hrefLang} onClick={() => { document.documentElement.dataset.retype = ""; }} aria-label={hrefLang === "es" ? "Ver en español" : "Read in English"} className="nav-link font-semibold border border-teal/20 rounded-full">
        {label}
      </Link>
    </li>
  );
}
