import Image from "next/image";
import Link from "next/link";
import { Briefcase, GraduationCap, Code, Globe, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";
import DownloadCV from "@/components/DescargaCV";
import Reveal from "@/components/ui/reveal";
import { getContent, href, type Locale } from "@/content";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/links";

export default function AboutView({ locale }: { locale: Locale }) {
  const t = getContent(locale);

  return (
    <div lang={t.htmlLang} className="site-shell">
      <Header locale={locale} altHref={locale === "es" ? "/about" : "/es/sobre-mi"} />
      <main id="main" tabIndex={-1} className="max-w-4xl mx-auto pt-10 sm:pt-14">

        <h1 className="text-4xl sm:text-5xl font-bold text-teal mb-8">
          {t.about.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-4">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg text-charcoal">
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap gap-4 pt-2 text-teal font-semibold">
              <DownloadCV label={t.nav.cv} locale={locale} />
              <Link
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                GitHub
              </Link>
              <Link
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/profilePic.jpeg"
              alt="Alfonso Rodríguez"
              fill
              sizes="(max-width: 768px) 0px, 280px"
              className="object-cover object-bottom"
            />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal mb-6 flex items-center">
            <Briefcase className="hidden sm:block mr-2" aria-hidden="true" />
            {t.about.experienceTitle}
          </h2>
          {t.about.jobs.map((job, index) => (
            <Reveal
              key={`${job.company}-${job.period}`}
              delay={index * 70}
              className="mb-6 bg-teal text-cream p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold">{job.company}</h3>
              <p className="text-gold">{job.role}</p>
              <p className="text-sm mb-3 text-cream/80">{job.period}</p>
              <p>{job.description}</p>
              {job.projectId && (
                <Link
                  className="text-gold inline-flex items-center mt-4"
                  href={href(locale, `/${job.projectId}`)}
                >
                  {t.nav.viewProject}
                  <ArrowUpRight className="ml-1" size={20} />
                </Link>
              )}
            </Reveal>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal mb-6 flex items-center">
            <Code className="hidden sm:block mr-2" aria-hidden="true" />
            {t.about.skillsTitle}
          </h2>
          {[...t.about.skills.slice(-1), ...t.about.skills.slice(0, -1)].map((group) => (
            <div key={group.title} className="mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-charcoal">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill, index) => (
                  <Reveal
                    as="li"
                    key={skill}
                    delay={index * 40}
                    className="border border-teal/25 text-teal px-3 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal mb-6 flex items-center">
            <GraduationCap className="hidden sm:block mr-2" aria-hidden="true" />
            {t.about.educationTitle}
          </h2>
          {t.about.education.map((edu) => (
            <div key={edu.title} className="mb-4">
              <h3 className="text-xl font-bold text-charcoal">{edu.title}</h3>
              <p className="text-teal">
                {edu.institution}
                {edu.year ? ` · ${edu.year}` : ""}
              </p>
            </div>
          ))}
        </section>

        <section className="pb-12">
          <h2 className="text-3xl font-bold text-teal mb-6 flex items-center">
            <Globe className="hidden sm:block mr-2" aria-hidden="true" />
            {t.about.languagesTitle}
          </h2>
          <p className="text-lg text-charcoal mb-6">{t.about.international}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.about.languages.map((lang) => (
              <li key={lang.language}>
                <div className="w-full">
                  <span className="block bg-teal text-cream p-4 rounded-lg">
                    <span className="block font-bold">{lang.language}</span>
                    <span className="block">{lang.level}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <ContactFooter locale={locale} />
    </div>
  );
}
