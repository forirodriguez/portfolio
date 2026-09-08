import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Header from "./Header";
import ContactFooter from "./ContactFooter";
import ProjectsNav from "./ProjectsDetailsPageDropDown";
import { getContent, href, type Locale, type Project } from "@/content";

export default function ProjectDetailsPage({ project, locale }: { project: Project; locale: Locale }) {
  const t = getContent(locale);
  return (
    <div lang={t.htmlLang} className="site-shell">
      <Header locale={locale} altHref={href(locale === "es" ? "en" : "es", `/${project.id}`)} />
      <main id="main" tabIndex={-1} className="max-w-4xl mx-auto pt-8 sm:pt-12">
        <Link href={`${href(locale)}#work`} className="inline-flex items-center gap-2 min-h-11 text-sm text-teal mb-6 hover:underline"><ArrowLeft size={18} aria-hidden="true" />{t.home.selectedWork}</Link>
        <p className="eyebrow mb-3">{project.role} · {project.period}</p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">{project.title}</h1>
        <p className="mt-5 text-xl sm:text-2xl leading-relaxed max-w-3xl">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-3 mt-6 mb-10">
          {project.liveLink && <Link className="button-dark" href={project.liveLink} target="_blank" rel="noopener noreferrer">{t.nav.liveSite}<ExternalLink size={18} aria-hidden="true" /></Link>}
          {project.githubLink && <Link className="button-outline" href={project.githubLink} target="_blank" rel="noopener noreferrer">{t.nav.repo}<Github size={18} aria-hidden="true" /></Link>}
        </div>
        {project.featured && (
          <div className="project-proof rounded-2xl mb-10">
            <p className="text-sm text-teal">{project.featured.label}</p>
            <p className="proof-value">{project.featured.value}</p>
            <p className="text-charcoal/80 leading-relaxed">{project.featured.detail}</p>
          </div>
        )}
        <div className="grid md:grid-cols-3 gap-8 border-y border-teal/20 py-8 mb-10">
          <div className="md:col-span-2"><h2 className="text-xl font-semibold mb-3">{t.nav.description}</h2><p className="leading-relaxed text-charcoal/80">{project.fullDescription}</p></div>
          <div><h2 className="text-xl font-semibold mb-3">{t.nav.stack}</h2><ul className="flex flex-wrap gap-2">{project.technologies.map(tech => <li key={tech} className="border border-teal/20 text-teal rounded-full px-3 py-1 text-sm">{tech}</li>)}</ul></div>
        </div>
        {project.highlights && (
          <ul className="grid sm:grid-cols-2 gap-4 mb-12">
            {project.highlights.map(item => <li key={item} className="border-l-2 border-teal pl-4 leading-relaxed">{item}</li>)}
          </ul>
        )}
        <div className="case-study">
          {project.caseStudy?.map(section => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">{section.heading}</h2>
              {section.body && <p className="mb-5">{section.body}</p>}
              {section.bullets && <ul className="list-disc pl-5 space-y-4 marker:text-teal">{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
            </section>
          ))}
        </div>
        {project.imageSrc && (
          <figure className="my-10">
            <Image src={project.imageSrc} alt={project.imageCaption || project.title} width={1000} height={500} sizes="(max-width: 960px) 100vw, 896px" className="rounded-xl w-full h-auto max-h-[420px] object-contain bg-teal/5" />
            {project.imageCaption && <figcaption className="text-sm text-teal mt-3">{project.imageCaption}</figcaption>}
          </figure>
        )}
        <div className="border-t border-teal/20 pt-6 mt-12 mb-10">
          <h2 className="text-xl font-semibold mb-4">{t.home.moreWork}</h2>
          <ProjectsNav locale={locale} projects={t.projects} currentProjectId={project.id} />
        </div>
      </main>
      <ContactFooter locale={locale} />
    </div>
  );
}
