import Image from "next/image";
import Link from "next/link";
import { Briefcase, GraduationCap, Code, Globe, ArrowUpRight } from "lucide-react";
import GoBackButton from "@/components/GoBackButton";
import DownloadCV from "@/components/DescargaCV";
import Reveal from "@/components/ui/reveal";
import BoxReveal from "@/components/ui/box-reveal";
import { getContent, href, type Locale } from "@/content";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/links";

export default function AboutView({ locale }: { locale: Locale }) {
  const t = getContent(locale);

  return (
    <div lang={t.htmlLang} className="bg-cream min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <GoBackButton
          locale={locale}
          label={t.nav.back}
          homeLabel={t.nav.home}
        />

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
              <DownloadCV label={t.nav.cv} />
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
          <div className="hidden sm:block relative aspect-square rounded-full overflow-hidden">
            <Image
              src="/images/profilePic.jpeg"
              alt="Alfonso Rodríguez"
              fill
              sizes="(max-width: 768px) 0px, 280px"
              className="object-cover"
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
          {t.about.skills.map((group) => (
            <div key={group.title} className="mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-charcoal">
                {group.title}
              </h3>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {group.items.map((skill, index) => (
                  <Reveal
                    as="li"
                    key={skill}
                    delay={index * 40}
                    className="bg-gold text-charcoal p-3 rounded-lg text-center font-semibold"
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
            {t.about.languages.map((lang, index) => (
              <li key={lang.language}>
                <BoxReveal delay={index * 90} className="w-full">
                  <span className="block bg-teal text-cream p-4 rounded-lg">
                    <span className="block font-bold">{lang.language}</span>
                    <span className="block">{lang.level}</span>
                  </span>
                </BoxReveal>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
