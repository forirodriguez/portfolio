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
          <div>
            <p className="eyebrow mb-5">{t.home.eyebrow}</p>
            <h1 id="intro-title" className="hero-title">{t.home.heroTitle}<span className="block text-teal">{t.home.heroHighlight}</span></h1>
            <p className="mt-5 max-w-xl text-lg text-charcoal/80 leading-relaxed">{t.home.intro}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
              <a href="#work" className="button-dark">{t.home.selectedWork}<ArrowDown size={18} aria-hidden="true" /></a>
              <DownloadCV label={t.nav.cv} locale={locale} />
            </div>
          </div>
          <div>
          <Link href={href(locale, "/bio")} className="portrait-link group">
            <span className="portrait-frame"><Image src="/images/profilePic.jpeg" alt="Alfonso Rodríguez" width={560} height={600} quality={65} priority sizes="(max-width: 767px) 100vw, 280px" className="portrait" /></span>
            <span className="flex items-center justify-between mt-3 text-sm text-teal group-hover:underline">{t.bio.title}<ArrowUpRight size={18} aria-hidden="true" /></span>
          </Link>
          </div>
        </section>

        <section id="work" className="section-space scroll-mt-6" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">{t.home.selectedWork}</h2>
            <p>{t.home.selectedIntro}</p>
          </div>
          <div className="featured-grid">
            {featured.map((project) => (
              <article key={project.id} className="project-card">
                {project.id === "iparkings" ? (
                  <figure>
                    <span className="project-media block">
                    <Image src="/images/parking-context.webp" alt={locale === "es" ? "Imagen conceptual de un estacionamiento, generada con IA" : "AI-generated conceptual parking image"} width={1200} height={800} priority sizes="(max-width: 767px) 100vw, 540px" className="project-image" />
                    </span>
                    <figcaption className="text-xs text-charcoal/80 mt-2">{locale === "es" ? "Imagen ilustrativa. Interfaces confidenciales." : "Illustrative image. Interfaces are confidential."}</figcaption>
                  </figure>
                ) : (
                  <div className="project-proof min-h-[220px] lg:min-h-[270px] flex flex-col justify-center">
                    <p className="text-sm text-teal">{project.featured!.label}</p>
                    <p className="proof-value !text-7xl">{project.featured!.value}</p>
                    <p className="text-sm text-charcoal/80 leading-relaxed max-w-sm">{project.featured!.detail}</p>
                  </div>
                )}
                <div className="project-summary">
                  <h3 className="text-2xl font-semibold tracking-tight"><Link className="project-title-link" href={href(locale, `/${project.id}`)}>{project.title}<ArrowUpRight size={24} aria-hidden="true" /></Link></h3>
                  <p className="text-sm text-teal mt-2">{project.role}</p>
                  <p className="mt-3 leading-relaxed text-charcoal/80">{project.shortDescription}</p>
                  {project.id === "iparkings" && <div className="project-result"><p className="proof-value">{project.featured!.value}</p><p className="text-sm text-teal">{project.featured!.label}</p></div>}
                  <p className="text-xs text-teal leading-relaxed mt-auto pt-5">{project.technologies.slice(0, 5).join(" / ")}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-space" aria-labelledby="more-title">
          <h2 id="more-title" className="text-2xl font-semibold tracking-tight mb-5">{t.home.moreWork}</h2>
          <div className="border-t border-teal/20">
            {otherWork.map((project) => (
              <article key={project.id} className="project-row">
                {project.imageSrc && <Image src={project.imageSrc} alt={project.imageCaption || project.title} width={400} height={260} sizes="(max-width: 767px) 100vw, 140px" className="work-thumbnail" />}
                <div><h3 className="text-xl font-semibold"><Link href={href(locale, `/${project.id}`)} className="inline-flex items-center gap-2 min-h-11 hover:underline">{project.title}<ArrowUpRight size={18} aria-hidden="true" /></Link></h3><p className="text-xs text-teal">{project.period}</p></div>
                <p className="text-charcoal/80 leading-relaxed">{project.shortDescription}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-strip" aria-labelledby="about-title">
          <h2 id="about-title" className="text-3xl font-semibold tracking-tight">{t.home.aboutTitle}</h2>
          <div><p className="leading-relaxed text-charcoal/80">{t.home.aboutIntro}</p><Link href={href(locale, locale === "es" ? "/sobre-mi" : "/about")} className="inline-flex gap-2 items-center mt-3 min-h-11 text-teal font-semibold hover:underline">{t.nav.about}<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        </section>
      </main>
      <ContactFooter locale={locale} />
    </div>
  );
}
