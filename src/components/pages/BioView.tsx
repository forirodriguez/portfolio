import GoBackButton from "@/components/GoBackButton";
import Reveal from "@/components/ui/reveal";
import { getContent, type Locale } from "@/content";

export default function BioView({ locale }: { locale: Locale }) {
  const t = getContent(locale);

  return (
    <div lang={t.htmlLang} className="bg-cream min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <GoBackButton
          locale={locale}
          label={t.nav.back}
          homeLabel={t.nav.home}
        />

        <h1 className="text-4xl sm:text-5xl font-bold text-teal mb-10">
          {t.bio.title}
        </h1>

        <div className="space-y-6 pb-12">
          {t.bio.sections.map((section, index) => (
            <Reveal
              key={section.heading}
              delay={index * 60}
              className={`p-6 rounded-lg ${
                index % 2 === 0
                  ? "bg-teal text-cream"
                  : "bg-gold text-charcoal"
              }`}
            >
              <h2 className="text-2xl font-bold mb-3">{section.heading}</h2>
              {section.body && <p className="text-lg">{section.body}</p>}
              {section.bullets && (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>— {bullet}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
