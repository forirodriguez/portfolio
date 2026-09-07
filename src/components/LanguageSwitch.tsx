import Link from "next/link";

export default function LanguageSwitch({ href, label, hrefLang }: { href: string; label: string; hrefLang: string }) {
  return (
    <li>
      <Link href={href} hrefLang={hrefLang} lang={hrefLang} aria-label={hrefLang === "es" ? "Ver en español" : "Read in English"} className="nav-link font-semibold border border-teal/20 rounded-full">
        {label}
      </Link>
    </li>
  );
}
