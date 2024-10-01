import React from "react";
import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Code,
  Globe,
  ArrowUpRight,
} from "lucide-react";

import GoBackButton from "@/components/GoBackButton";
import BlurFade from "@/components/ui/blur-fade";
import BoxReveal from "@/components/ui/box-reveal";
import Link from "next/link";

export const metadata = {
  title: "Alfonso Rodriguez | Full Stack Developer y Especialista UX/UI",
  description:
    "Conoce a Alfonso Rodriguez, Full Stack Developer con experiencia en UX/UI. Experto en React, Next.js y desarrollo web, con un enfoque internacional y multidisciplinario. Descubre cómo combino tecnología y creatividad para crear soluciones digitales innovadoras.",
  keywords:
    "Full Stack Developer, UX/UI, React, Next.js, JavaScript, MongoDB, Desarrollo Web, Uruguay, Experiencia Internacional, Innovación Digital",
  author: "Alfonso Rodriguez",
  openGraph: {
    title: "Alfonso Rodriguez | Desarrollador Full Stack con Visión Global",
    description:
      "Explora el perfil de Alfonso Rodriguez: desde su experiencia en desarrollo frontend hasta su background en UX/UI y negocios. Un desarrollador bilingüe creando soluciones digitales innovadoras desde Uruguay para el mundo.",
    type: "profile",
    url: "https://portfolio-alfonsorodriguez-20.vercel.app//sobre-mi",
    image: "/images/portfolio.jpg",
  },
};

const SobreMi = () => {
  return (
    <div className="bg-cream min-h-screen p-6">
      <div className="flex justify-between max-w-4xl mx-auto">
        <GoBackButton />
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-teal mb-8">Sobre Mí</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <p className="text-lg text-charcoal mb-4">
              Soy Alfonso Rodríguez, un Full Stack Developer con una sólida
              experiencia en desarrollo web y un trasfondo en UX/UI. Mi enfoque
              multidisciplinario se combina con un deseo constante de aprender y
              explorar nuevas tecnologías. Soy proactivo y apasionado por
              encontrar soluciones creativas a los problemas de los clientes, y
              mi compromiso con la calidad y el trabajo en equipo es la base de
              mi contribución al mundo IT.
            </p>
            <p className="text-lg text-charcoal">
              Desde Uruguay, trabajo en proyectos internacionales, aplicando mis
              habilidades bilingües y mi experiencia multicultural para crear
              soluciones digitales innovadoras y user-centric.
            </p>
          </div>
          <div className="hidden sm:block relative aspect-square rounded-full overflow-hidden">
            <Image
              src="/images/profilePic.jpeg"
              alt="Alfonso Rodríguez"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal mb-6 flex items-center">
            <Briefcase className="hidden sm:block mr-2" /> Experiencia
            Profesional
          </h2>
          {[
            {
              company: "Digitax",
              role: "Frontend Developer",
              period: "Mayo 2024 - Actualmente",
              description:
                "Co-desarrollé una aplicación para cálculo de impuestos y gestión fiscal usando Next.js y MongoDB.",
              link: "/digitax",
            },
            {
              company: "iParkings",
              role: "Frontend Developer",
              period: "Noviembre 2023 - Actualmente",
              description:
                "Optimicé la UX/UI en sistemas de auto-cobro y gestión de parkings, integrando JavaScript y PHP con MySQL.",
              link: "/iparkings",
            },
            {
              company: "TengoKarga",
              role: "Full Stack Developer",
              period: "Noviembre 2021 - Diciembre 2023",
              description:
                "Desarrollé features en React, mantuve el backend y elaboré planes de testing y QA.",
              link: "/tengokarga",
            },
          ].map((job, index) => (
            <div key={index} className="mb-6 bg-teal text-cream p-6 rounded-lg">
              <h3 className="text-xl font-bold">{job.company}</h3>
              <p className="text-gold">{job.role}</p>
              <p className="text-sm mb-2">{job.period}</p>
              <p>{job.description}</p>
              <Link className="text-gold" href={job.link}>
                <div className="flex justify-start mt-4">
                  Ver proyecto
                  <ArrowUpRight className="text-gold ml-1" size={24} />
                </div>
              </Link>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal mb-6 flex items-center">
            <Code className="hidden sm:block mr-2" /> Habilidades Técnicas
          </h2>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-charcoal">
              Frontend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "JavaScript",
                "React",
                "Next.js",
                "HTML",
                "CSS",
                "Tailwind",
                "Redux",
              ].map((skill, index) => (
                <BlurFade delay={0.25} inView key={index}>
                  <div className="bg-gold text-charcoal p-3 rounded-lg text-center font-semibold">
                    {skill}
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-charcoal">
              Backend
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Node.js", "MongoDB", "MySQL"].map((skill, index) => (
                <BlurFade delay={0.25} inView key={index}>
                  <div className="bg-gold text-charcoal p-3 rounded-lg text-center font-semibold">
                    {skill}
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-charcoal">
              Herramientas de Diseño
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Figma",
                "Prototyping",
                "Human Centered Design",
                "Design Thinking",
              ].map((skill, index) => (
                <BlurFade delay={0.25} inView key={index}>
                  <div className="bg-gold text-charcoal p-3 rounded-lg text-center font-semibold">
                    {skill}
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-charcoal">
              Control de Versiones
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Git"].map((skill, index) => (
                <BlurFade delay={0.25} inView key={index}>
                  <div className="bg-gold text-charcoal p-3 rounded-lg text-center font-semibold">
                    {skill}
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal mb-6 flex items-center">
            <GraduationCap className="hidden sm:block mr-2" /> Educación
          </h2>
          {[
            {
              title: "Licenciatura en Administración de Empresas",
              institution: "Universidad de Montevideo",
            },
            {
              title: "Diploma UX/UI",
              institution: "Academia Senpai, Montevideo",
            },
            {
              title: "Diploma Fullstack Developer",
              institution: "Academia Senpai, Montevideo",
            },
          ].map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-bold text-charcoal">{edu.title}</h3>
              <p className="text-teal">{edu.institution}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-3xl font-bold text-teal mb-6 flex items-center">
            <Globe className="hidden sm:block mr-2" /> Idiomas y Experiencia
            Internacional
          </h2>
          <p className="text-lg text-charcoal mb-4">
            Mi experiencia internacional incluye un intercambio universitario en
            la University of Western Australia, lo que ha enriquecido mi
            perspectiva global y mi capacidad para trabajar en entornos
            multiculturales.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { language: "Español", level: "Nativo" },
              { language: "Inglés", level: "C2" },
              { language: "Portugués", level: "Básico" },
            ].map((lang, index) => (
              <BoxReveal
                boxColor={"#EFEEE5"}
                duration={0.5}
                width="100%"
                key={index}
              >
                <div className="bg-teal text-cream p-4 rounded-lg">
                  <h3 className="font-bold">{lang.language}</h3>
                  <p>{lang.level}</p>
                </div>
              </BoxReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SobreMi;
