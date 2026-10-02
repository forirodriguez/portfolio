import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";
import DownloadCV from "@/components/DescargaCV";
import { getContent, href, type Locale } from "@/content";

export default function HomeView({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const featured = t.projects.filter((project) => project.featured);
  const otherWork = t.projects.filter((project) => !project.featured && project.id !== "portfolio");

  return (
    <div lang={t.htmlLang} className="site-shell">
      <Header locale={locale} altHref={locale === "es" ? "/" : "/es"} />
      <main id="main" tabIndex={-1}>
        <section className="home-hero" aria-labelledby="intro-title">
          <p className="eyebrow hero-eyebrow">{t.home.eyebrow}</p>
          <h1 id="intro-title" className="hero-title">
            <span className="hero-line">{t.home.heroTitle}</span>
            <span className="hero-line hero-outline">{t.home.heroHighlight}</span>
          </h1>
          <div className="hero-bottom">
            <div className="hero-intro">
              <p>{t.home.intro}</p>
              <div className="hero-actions">
              <a href="#work" className="button-dark">{t.home.selectedWork}<ArrowDown size={18} aria-hidden="true" /></a>
              <DownloadCV label={t.nav.cv} locale={locale} />
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <Image src="/images/product-sculpture.jpg" alt="" width={1200} height={800} priority sizes="(max-width: 767px) 90vw, 50vw" />
            </div>
          </div>
        </section>

        <section id="work" className="section-space scroll-mt-6" aria-labelledby="work-title">
          <div className="section-heading" data-reveal>
            <h2 id="work-title">{t.home.selectedWork}</h2>
            <p>{t.home.selectedIntro}</p>
          </div>
          <div className="featured-grid">
            {featured.map((project) => (
              <article key={project.id} className={project.id === "iparkings" ? "project-card project-iparkings" : "project-card"} data-reveal>
                {project.id === "iparkings" ? (
                  <figure>
                    <span className="project-media block">
                    <Image src="/images/parking-context.webp" alt={locale === "es" ? "Imagen conceptual de un estacionamiento, generada con IA" : "AI-generated conceptual parking image"} width={1000} height={667} sizes="(max-width: 767px) 100vw, 45vw" className="project-image" />
                    </span>
                    <figcaption className="text-xs text-charcoal/80 mt-2">{locale === "es" ? "Imagen ilustrativa. Interfaces confidenciales." : "Illustrative image. Interfaces are confidential."}</figcaption>
                  </figure>
                ) : (
                  <figure>
                    <div className="project-media medshift-stage">
                      <Image src="/images/medshift-home.webp" alt={locale === "es" ? "Inicio de MedShift con proyección de ingresos. Datos ficticios." : "MedShift home with projected income. Fictional data."} width={390} height={844} sizes="(max-width: 767px) 42vw, 24vw" className="medshift-screen medshift-home" />
                      <Image src="/images/medshift-calendar.webp" alt={locale === "es" ? "Calendario de guardias de MedShift. Datos ficticios." : "MedShift shift calendar. Fictional data."} width={390} height={844} sizes="(max-width: 767px) 36vw, 20vw" className="medshift-screen medshift-calendar" />
                    </div>
                    <figcaption className="text-xs text-charcoal/80 mt-2">{locale === "es" ? "Pantallas reales de MedShift. Datos ficticios." : "Real MedShift screens. Fictional data."}</figcaption>
                  </figure>
                )}
                <div className="project-summary">
                  <h3><Link className="project-title-link" href={href(locale, `/${project.id}`)}>{project.title}<span className="project-arrow"><ArrowUpRight size={28} strokeWidth={1.5} aria-hidden="true" /></span></Link></h3>
                  <p className="project-role">{project.role}</p>
                  <p className="mt-3 leading-relaxed text-charcoal/80">{project.shortDescription}</p>
                  <div className="project-result"><p className="proof-value">{project.featured!.value}</p><p className="text-sm text-teal">{project.featured!.label}</p></div>
                  <p className="project-stack">{project.technologies.slice(0, 5).join(" / ")}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-space more-work" aria-labelledby="more-title">
          <h2 id="more-title" className="section-title" data-reveal>{t.home.moreWork}</h2>
          <div className="border-t border-teal/20">
            {otherWork.map((project) => (
              <article key={project.id} className="project-row" data-reveal>
                {project.imageSrc && <Image src={project.imageSrc} alt={project.imageCaption || project.title} width={400} height={260} sizes="(max-width: 767px) 100vw, 140px" className="work-thumbnail" />}
                <div><h3><Link href={href(locale, `/${project.id}`)} className="archive-link">{project.title}<ArrowUpRight size={24} strokeWidth={1.5} aria-hidden="true" /></Link></h3><p className="project-role">{project.period}</p></div>
                <p className="text-charcoal/80 leading-relaxed">{project.shortDescription}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-strip" aria-labelledby="about-title" data-reveal>
          <h2 id="about-title">{t.home.aboutTitle}</h2>
          <div className="about-content">
            <Link href={href(locale, "/bio")} className="portrait-link group">
              <span className="portrait-frame"><Image src="/images/profilePic.jpeg" alt="Alfonso Rodríguez" width={841} height={900} quality={80} sizes="(max-width: 767px) 90vw, 320px" className="portrait" /></span>
              <span className="portrait-caption">{t.bio.title}<ArrowUpRight size={18} aria-hidden="true" /></span>
            </Link>
            <div><p className="leading-relaxed text-charcoal/80">{t.home.aboutIntro}</p><Link href={href(locale, locale === "es" ? "/sobre-mi" : "/about")} className="text-link">{t.nav.about}<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
          </div>
        </section>
      </main>
      <ContactFooter locale={locale} />
    </div>
  );
}
