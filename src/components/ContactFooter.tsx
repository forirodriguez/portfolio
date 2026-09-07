import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DownloadCV from "./DescargaCV";
import { getContent, type Locale } from "@/content";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, MAILTO_URL, WHATSAPP_URL } from "@/lib/links";

export default function ContactFooter({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  return (
    <footer className="contact-footer">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{t.home.contactSmall}</h2>
          <p className="mt-3 text-cream/80 leading-relaxed">{t.home.contactIntro}</p>
        </div>
        <Link href={MAILTO_URL} className="button-primary self-start md:self-center shrink-0">
          {t.home.contactBig}<ArrowUpRight size={20} aria-hidden="true" />
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-4 border-t border-cream/20 mt-8 pt-5 text-sm">
        <a className="inline-flex items-center min-h-11 break-all underline underline-offset-4" href={MAILTO_URL}>{EMAIL}</a>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link className="footer-link" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</Link>
          <Link className="footer-link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          <Link className="footer-link" href={WHATSAPP_URL[locale]} target="_blank" rel="noopener noreferrer">WhatsApp</Link>
          <DownloadCV label={t.nav.cv} locale={locale} />
        </div>
      </div>
    </footer>
  );
}
