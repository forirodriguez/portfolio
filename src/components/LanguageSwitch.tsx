import Link from "next/link";
import { Languages } from "lucide-react";

interface LanguageSwitchProps {
  /** Ruta equivalente de esta misma pagina en el otro idioma */
  href: string;
  label: string;
  hrefLang: string;
}

export default function LanguageSwitch({
  href,
  label,
  hrefLang,
}: LanguageSwitchProps) {
  return (
    <li>
      <Link
        href={href}
        hrefLang={hrefLang}
        className="flex items-center gap-1 hover:text-gold transition-colors p-2 rounded-md"
      >
        <Languages size={18} />
        <span className="hidden sm:inline">{label}</span>
      </Link>
    </li>
  );
}
