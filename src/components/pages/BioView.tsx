import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";
import { getContent, type Locale } from "@/content";

export default function BioView({ locale }: { locale: Locale }) {
  const t = getContent(locale);

  return (
    <div lang={t.htmlLang} className="site-shell">
      <Header locale={locale} altHref={locale === "es" ? "/bio" : "/es/bio"} />
      <main id="main" tabIndex={-1} className="max-w-3xl mx-auto pt-10 sm:pt-14">

        <h1 className="text-4xl sm:text-5xl font-bold text-teal mb-10">
          {t.bio.title}
        </h1>

        <div className="space-y-6 pb-12">
          {t.bio.sections.map((section) => (
            <div key={section.heading} className="bio-section">
              <h2 className="text-2xl font-bold mb-3">{section.heading}</h2>
              {section.body && <p className="text-lg">{section.body}</p>}
              {section.bullets && (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>
      <ContactFooter locale={locale} />
    </div>
  );
}
