import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Check } from "lucide-react";
import ProjectsNav from "./ProjectsDetailsPageDropDown";
import GoBackButton from "./GoBackButton";
import BoxReveal from "./ui/box-reveal";
import Reveal from "./ui/reveal";
import { getContent, type Locale, type Project } from "@/content";
import { WHATSAPP_URL, MAILTO_URL } from "@/lib/links";

interface ProjectDetailsPageProps {
  project: Project;
  locale: Locale;
}

export default function ProjectDetailsPage({
  project,
  locale,
}: ProjectDetailsPageProps) {
  const t = getContent(locale);

  return (
    <div
      lang={t.htmlLang}
      className="bg-cream min-h-screen p-6 font-sans text-charcoal"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <GoBackButton
            locale={locale}
            label={t.nav.back}
            homeLabel={t.nav.home}
          />
          <ProjectsNav
            locale={locale}
            projects={t.projects}
            currentProjectId={project.id}
          />
        </div>

        <main>
          <BoxReveal>
            <h1 className="text-4xl sm:text-5xl font-bold">{project.title}</h1>
          </BoxReveal>

          {(project.role || project.period) && (
            <p className="mt-3 text-sm uppercase tracking-wide text-teal">
              {[project.role, project.period].filter(Boolean).join(" · ")}
            </p>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4 mb-8">
            <p className="text-xl max-w-xl">{project.shortDescription}</p>
            <div className="flex gap-3 shrink-0">
              {project.githubLink && (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.githubLink}
                  className="bg-teal text-cream px-4 py-2 rounded-full inline-flex items-center hover:bg-gold hover:text-charcoal transition-colors"
                >
                  <Github className="mr-2" size={18} />
                  {t.nav.repo}
                </Link>
              )}
              {project.liveLink && (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.liveLink}
                  className="bg-teal text-cream px-4 py-2 rounded-full inline-flex items-center hover:bg-gold hover:text-charcoal transition-colors"
                >
                  <ExternalLink className="mr-2" size={18} />
                  {t.nav.liveSite}
                </Link>
              )}
            </div>
          </div>

          {project.imageSrc && (
            <Reveal className="mb-12">
              <Image
                src={project.imageSrc}
                alt={`${project.title} — screenshot`}
                width={1000}
                height={500}
                priority
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </Reveal>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {project.highlights.map((item, index) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={index * 70}
                  className="bg-teal text-cream p-4 rounded-lg flex gap-3"
                >
                  <Check className="text-gold shrink-0 mt-1" size={18} />
                  <span>{item}</span>
                </Reveal>
              ))}
            </ul>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">
                {t.nav.description}
              </h2>
              <p>{project.fullDescription}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.nav.stack}</h2>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="bg-gold text-charcoal text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {project.caseStudy?.map((section, index) => (
            <section key={section.heading} className="mb-10">
              <BoxReveal delay={index * 60}>
                <h2 className="text-2xl font-semibold mb-4">
                  {section.heading}
                </h2>
              </BoxReveal>
              {section.body && <p className="mb-4">{section.body}</p>}
              {section.bullets && (
                <ul className="space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="text-gold font-bold shrink-0"
                      >
                        —
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <aside className="bg-teal text-cream rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-12">
            <p className="text-lg">{t.home.contactSmall}</p>
            <div className="flex gap-3">
              <Link
                href={MAILTO_URL}
                className="bg-gold text-charcoal px-4 py-2 rounded-full font-bold"
              >
                {t.home.contactBig}
              </Link>
              <Link
                href={WHATSAPP_URL[locale]}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cream/40 px-4 py-2 rounded-full"
              >
                {t.nav.talk}
              </Link>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
