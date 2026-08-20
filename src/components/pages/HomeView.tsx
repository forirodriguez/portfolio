import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import ProjectsAccordion from "@/components/ProjectsAccordion";
import DownloadCV from "@/components/DescargaCV";
import Reveal from "@/components/ui/reveal";
import BoxReveal from "@/components/ui/box-reveal";
import WordRotate from "@/components/ui/word-rotate";
import { getContent, href, type Locale } from "@/content";
import { GITHUB_URL, LINKEDIN_URL, MAILTO_URL } from "@/lib/links";

export default function HomeView({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const altHref = locale === "es" ? "/en" : "/";
  const aboutPath = locale === "es" ? "/sobre-mi" : "/about";

  return (
    <div
      lang={t.htmlLang}
      className="home-screen bg-cream p-6 font-sans text-cream min-h-screen flex flex-col"
    >
      <Header locale={locale} altHref={altHref} />

      <main className="flex-grow min-h-0 grid grid-cols-1 lg:grid-cols-6 gap-8">
        <div className="lg:col-span-4 flex flex-col h-full min-h-0">
          <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-5 gap-8">
            <Reveal
              delay={60}
              className="lg:col-span-4 bg-teal text-cream p-8 rounded-3xl flex flex-col justify-end relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none">
                <div className="relative w-full h-[250px]">
                  <Image
                    src="/images/patterns.png"
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(max-width: 640px) 0px, 50vw"
                    className="hidden sm:block object-contain object-right-top"
                  />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight relative z-10">
                {t.home.heroPrefix}{" "}
                <span className="font-light italic text-gold">
                  <WordRotate duration={3200} words={t.home.rotatingWords} />
                </span>{" "}
                {t.home.heroMiddle}{" "}
                <span className="font-light italic text-gold">
                  {t.home.heroHighlight}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160} className="rounded-3xl overflow-hidden">
              <Link
                href={href(locale, "/bio")}
                className="block bg-teal text-cream overflow-hidden relative rounded-3xl group cursor-pointer h-56 lg:h-full lg:min-h-56"
              >
                <Image
                  src="/images/portfolioPic.jpeg"
                  alt="Alfonso Rodríguez"
                  fill
                  sizes="(max-width: 1024px) 100vw, 20vw"
                  className="object-cover object-[center_62%] lg:object-center"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gold via-charcoal/70 to-transparent flex items-center justify-end gap-1 text-charcoal font-bold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t.nav.bio}
                  <ArrowUpRight size={20} />
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Reveal delay={220} className="flex">
              <Link
                href={href(locale, aboutPath)}
                className="bg-charcoal text-cream p-6 rounded-3xl flex flex-col w-full transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-teal opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                <p className="text-lg sm:text-xl relative z-10 mb-8">
                  {t.home.intro}
                </p>
                <span className="mt-auto self-end flex items-center relative z-10">
                  <span className="text-gold font-bold mr-2">{t.nav.info}</span>
                  <ArrowUpRight size={24} className="text-gold" />
                </span>
              </Link>
            </Reveal>

            <Reveal delay={280} className="flex">
              <Link
                href={MAILTO_URL}
                className="bg-gold p-6 rounded-3xl text-charcoal w-full flex flex-col justify-between transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-lg">{t.home.contactSmall}</p>
                <span className="mt-auto flex justify-between items-end">
                  <span className="text-3xl font-bold">
                    {t.home.contactBig}
                  </span>
                  <ArrowUpRight size={32} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="space-y-8 lg:col-span-2 flex flex-col min-h-0">
          <Reveal
            delay={200}
            className="bg-teal text-cream p-6 rounded-3xl flex-grow min-h-0"
          >
            <ProjectsAccordion
              locale={locale}
              projects={t.projects}
              tabWork={t.home.tabWork}
              tabProjects={t.home.tabProjects}
              viewMoreLabel={t.nav.viewMore}
            />
          </Reveal>

          <Reveal
            delay={320}
            className="flex justify-between items-center bg-teal text-sm p-8 rounded-2xl"
          >
            <BoxReveal delay={340}>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={GITHUB_URL}
                className="hover:text-gold transition-colors"
              >
                GITHUB
              </Link>
            </BoxReveal>
            <BoxReveal delay={400}>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={LINKEDIN_URL}
                className="hover:text-gold transition-colors"
              >
                LINKEDIN
              </Link>
            </BoxReveal>
            <BoxReveal delay={460}>
              <DownloadCV label={t.nav.cv} />
            </BoxReveal>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
