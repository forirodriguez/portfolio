import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Header from "./Header";
import ContactFooter from "./ContactFooter";
import ProjectsNav from "./ProjectsDetailsPageDropDown";
import CaseVisual from "./CaseVisual";
import { getContent, href, type Locale, type Project } from "@/content";

export default function ProjectDetailsPage({ project, locale }: { project: Project; locale: Locale }) {
  const t = getContent(locale);
  return (
    <div lang={t.htmlLang} className="site-shell">
      <Header locale={locale} altHref={href(locale === "es" ? "en" : "es", `/${project.id}`)} current="work" />
      <main id="main" tabIndex={-1} className="interior-main project-page">
        <Link href={`${href(locale)}#work`} className="case-back"><ArrowLeft size={18} aria-hidden="true" />{t.home.selectedWork}</Link>
        {/* El titulo y el meta repiten la composicion de los capitulos del home:
            display a la izquierda, rol y periodo en mono a la derecha. */}
        <div className="case-head">
          <h1 className="page-title">{project.title}</h1>
          <p className="project-role case-meta">{project.role}<br />{project.period}</p>
          <p className="project-deck">{project.shortDescription}</p>
          <div className="case-actions">
            {project.liveLink && <Link className="button-dark" href={project.liveLink} target="_blank" rel="noopener noreferrer">{t.nav.liveSite}<ExternalLink size={18} aria-hidden="true" /></Link>}
            {project.githubLink && <Link className="button-outline" href={project.githubLink} target="_blank" rel="noopener noreferrer">{t.nav.repo}<Github size={18} aria-hidden="true" /></Link>}
          </div>
        </div>
        {(project.id === "medshift" || project.id === "iparkings" || project.id === "weedly") && (
          <div className="case-visual"><CaseVisual project={project.id} locale={locale} scope="detail" /></div>
        )}
        {project.featured && (
          <div className="project-proof case-result mb-10">
            <p className="text-sm text-teal">{project.featured.label}</p>
            <p className="proof-value">{project.featured.value}</p>
            <p className="text-charcoal/80 leading-relaxed">{project.featured.detail}</p>
          </div>
        )}
        <div className="case-overview grid md:grid-cols-3 gap-8 border-b border-teal/20 pb-8 mb-10">
          <div className="md:col-span-2"><h2>{t.nav.description}</h2><p className="leading-relaxed text-charcoal/80">{project.fullDescription}</p></div>
          <div><h2>{t.nav.stack}</h2><ul className="flex flex-wrap gap-2">{project.technologies.map(tech => <li key={tech} className="border border-teal/20 text-teal rounded-full px-3 py-1 text-sm">{tech}</li>)}</ul></div>
        </div>
        {project.highlights && (
          <ul className="grid sm:grid-cols-2 gap-4 mb-12">
            {project.highlights.map(item => <li key={item} className="border-l-2 border-teal pl-4 leading-relaxed">{item}</li>)}
          </ul>
        )}
        <div className="case-study">
          {project.caseStudy?.map(section => (
            <section key={section.heading} className="case-section">
              <h2>{section.heading}</h2>
              {section.body && <p className="mb-5">{section.body}</p>}
              {section.bullets && <ul className="list-disc pl-5 space-y-4 marker:text-teal">{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
            </section>
          ))}
        </div>
        {project.imageSrc && project.id !== "weedly" && (
          <figure className="my-10">
            <Image src={project.imageSrc} alt={project.imageCaption || project.title} width={1000} height={500} sizes="(max-width: 960px) 100vw, 896px" className="rounded-xl w-full h-auto max-h-[420px] object-contain bg-teal/5" />
            {project.imageCaption && <figcaption className="text-sm text-teal mt-3">{project.imageCaption}</figcaption>}
          </figure>
        )}
        <div className="case-more">
          <h2>{t.home.moreWork}</h2>
          <ProjectsNav locale={locale} projects={t.projects} currentProjectId={project.id} />
        </div>
      </main>
      <ContactFooter locale={locale} />
    </div>
  );
}
