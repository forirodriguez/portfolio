import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";
import DownloadCV from "@/components/DescargaCV";
import CaseVisual from "@/components/CaseVisual";
import { getContent, href, type Locale } from "@/content";

export default function HomeView({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const featured = t.projects.filter((project) => project.featured);
  const otherWork = t.projects.filter((project) => !project.featured && project.id !== "portfolio");

  return (
    <div lang={t.htmlLang} className="site-shell home-shell">
      <Header locale={locale} altHref={locale === "es" ? "/" : "/es"} />
      <main id="main" tabIndex={-1}>
        <section className="name-hero" aria-labelledby="intro-title">
          <p className="eyebrow">{t.home.eyebrow}</p>
          <div className="name-composition">
            <h1 id="intro-title" className="name-title"><span>Alfonso</span><span>Rodríguez<span className="name-stop" aria-hidden="true">.</span></span></h1>
            <p className="hero-principle">{t.home.heroTitle}<br />{t.home.heroHighlight}</p>
          </div>
          <div className="hero-bridge">
            <p>{t.home.intro}</p>
            <div className="hero-actions">
              <a href="#work" className="hero-work-link">{t.home.selectedWork}<ArrowDown size={24} strokeWidth={1.5} aria-hidden="true" /></a>
              <DownloadCV label={t.nav.cv} locale={locale} />
            </div>
          </div>
          <nav className="hero-projects" aria-label={t.home.selectedWork}>
            {featured.map(project => <a key={project.id} href={`#${project.id}-case`}><span>{project.title}</span><ArrowUpRight size={28} strokeWidth={1.5} aria-hidden="true" /></a>)}
          </nav>
        </section>

        <section id="work" className="work-sequence" aria-labelledby="work-title">
          <div className="work-heading"><h2 id="work-title">{t.home.selectedWork}</h2><p>{t.home.selectedIntro}</p></div>
          <nav className="work-navigation" aria-label={t.home.selectedWork}>
            {featured.map(project => <a key={project.id} href={`#${project.id}-case`}>{project.title}</a>)}
          </nav>
          {featured.map(project => (
            <article key={project.id} id={`${project.id}-case`} className={project.id === "medshift" ? "case-chapter chapter-medshift" : project.id === "weedly" ? "case-chapter chapter-weedly" : "case-chapter chapter-parking"}>
              <div className="chapter-inner">
                <div className="chapter-heading">
                  <h3><Link href={href(locale, `/${project.id}`)}>{project.title}<ArrowUpRight strokeWidth={1} aria-hidden="true" /></Link></h3>
                  <p>{project.role}<br />{project.period}</p>
                </div>
                <div className="chapter-body">
                  <div className="chapter-story">
                    <p className="chapter-description">{project.shortDescription}</p>
                    <div className="chapter-proof"><strong>{project.id === "iparkings" ? "−40%" : project.featured!.value}</strong><p>{project.id === "iparkings" ? (locale === "es" ? "Tickets de quejas registrados en Jira" : "Complaint tickets recorded in Jira") : project.featured!.label}</p></div>
                    <p className="chapter-decision">{project.featured!.detail}</p>
                    <Link href={href(locale, `/${project.id}`)} className="chapter-link">{locale === "es" ? "Recorrer el caso" : "Explore the case"}<ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" /></Link>
                    <p className="chapter-stack">{project.technologies.slice(0, 5).join(" / ")}</p>
                  </div>
                  <CaseVisual project={project.id === "medshift" ? "medshift" : project.id === "weedly" ? "weedly" : "iparkings"} locale={locale} scope="home" />
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="work-archive" aria-labelledby="more-title">
          <h2 id="more-title">{t.home.moreWork}</h2>
          {otherWork.map((project, index) => (
            <details key={project.id} className="archive-entry" open={index === 0}>
              <summary><span>{project.title}</span><span className="archive-period">{project.period}</span><ChevronDown strokeWidth={1} aria-hidden="true" /></summary>
              <div className="archive-body">
                {project.imageSrc && <figure><Image src={project.imageSrc} alt={project.imageCaption || project.title} width={1000} height={650} sizes="(max-width: 767px) 90vw, 55vw" /><figcaption>{project.imageCaption}</figcaption></figure>}
                <div className="archive-story"><p className="project-role">{project.role}</p><p>{project.shortDescription}</p><Link href={href(locale, `/${project.id}`)} className="text-link">{locale === "es" ? "Ver el proyecto" : "View the project"}<ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" /></Link></div>
              </div>
            </details>
          ))}
        </section>

        <section className="about-composition" aria-labelledby="about-title">
          <h2 id="about-title">{t.home.aboutTitle}</h2>
          <div className="about-picture"><Image src="/images/profilePic.jpeg" alt="Alfonso Rodríguez" width={841} height={900} quality={80} sizes="(max-width: 767px) 90vw, 35vw" /></div>
          <div className="about-story"><p>{t.home.aboutIntro}</p><div className="about-links"><Link href={href(locale, locale === "es" ? "/sobre-mi" : "/about")} className="text-link">{t.nav.about}<ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" /></Link><Link href={href(locale, "/bio")} className="text-link">{t.bio.title}<ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" /></Link></div></div>
        </section>
      </main>
      <ContactFooter locale={locale} />
    </div>
  );
}
