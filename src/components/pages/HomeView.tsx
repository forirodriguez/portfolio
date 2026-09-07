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
            <p className="eyebrow mb-5 pr-20 md:pr-0">{t.home.eyebrow}</p>
            <h1 id="intro-title" className="hero-title">{t.home.heroTitle}<span className="block text-teal">{t.home.heroHighlight}</span></h1>
            <p className="mt-5 max-w-2xl text-lg text-charcoal/80 leading-relaxed">{t.home.intro}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6">
              <a href="#work" className="button-dark">{t.home.selectedWork}<ArrowDown size={18} aria-hidden="true" /></a>
              <DownloadCV label={t.nav.cv} locale={locale} />
            </div>
          </div>
          <Link href={href(locale, "/bio")} className="portrait-link group" aria-label={`${t.nav.bio} · Alfonso Rodríguez`}>
            <span className="portrait-frame"><Image src="/images/profilePic.jpeg" alt="Alfonso Rodríguez" width={240} height={256} priority sizes="(max-width: 767px) 80px, 280px" className="portrait" /></span>
            <span className="hidden md:flex items-center justify-between mt-3 text-sm text-teal group-hover:underline">{t.bio.title}<ArrowUpRight size={18} aria-hidden="true" /></span>
          </Link>
        </section>

        <section id="work" className="section-space scroll-mt-6" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">{t.home.selectedWork}</h2>
            <p>{t.home.selectedIntro}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {featured.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-proof">
                  <h3 className="text-3xl font-semibold tracking-tight mb-6"><Link className="project-title-link" href={href(locale, `/${project.id}`)}>{project.title}<ArrowUpRight size={24} aria-hidden="true" /></Link></h3>
                  <p className="eyebrow text-cream/75">{project.featured!.label}</p>
                  <p className="proof-value">{project.featured!.value}</p>
                  <p className="text-sm text-cream/80 leading-relaxed max-w-md">{project.featured!.detail}</p>
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <p className="text-xs text-teal mb-3">{project.role} · {project.period}</p>
                  <p className="mt-3 leading-relaxed text-charcoal/80">{project.shortDescription}</p>
                  <p className="text-xs text-teal leading-relaxed mt-auto pt-6">{project.technologies.slice(0, 5).join(" · ")}</p>
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
                <div><h3 className="text-xl font-semibold"><Link href={href(locale, `/${project.id}`)} className="inline-flex items-center gap-2 min-h-11 hover:underline">{project.title}<ArrowUpRight size={18} aria-hidden="true" /></Link></h3><p className="text-xs text-teal">{project.period}</p></div>
                <p className="text-charcoal/80 leading-relaxed">{project.shortDescription}</p>
                <p className="text-xs text-teal leading-relaxed">{project.technologies.slice(0, 3).join(" · ")}</p>
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
