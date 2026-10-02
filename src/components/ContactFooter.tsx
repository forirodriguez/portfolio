import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DownloadCV from "./DescargaCV";
import { getContent, type Locale } from "@/content";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, MAILTO_URL, WHATSAPP_URL } from "@/lib/links";

export default function ContactFooter({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  return (
    <footer className="contact-footer" id="contact">
      <p className="contact-question">{t.home.contactSmall}</p>
      <h2>
        <Link href={MAILTO_URL} className="contact-title">
          {t.nav.talk}<ArrowUpRight strokeWidth={1} aria-hidden="true" />
        </Link>
      </h2>
      <div className="contact-description">
        <p>{t.home.contactIntro}</p>
        <a className="footer-email" href={MAILTO_URL}>{EMAIL}</a>
      </div>
      <div className="footer-bottom">
        <span>Alfonso Rodríguez</span>
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
