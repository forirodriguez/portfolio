import BotonDescarga from "@/components/DescargaCV";
import Header from "@/components/Header";
import ProjectsAccordion from "@/components/ProjectsAccordion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Alfonso Rodriguez | Frontend Developer & UX/UI Specialist",
  description:
    "Desarrollador Frontend especializado en crear experiencias digitales intuitivas y atractivas. Experto en React, Next.js y UX/UI. Transformando ideas en interfaces user-centric desde Uruguay para el mundo.",
  keywords:
    "Frontend Developer, UX/UI, React, Next.js, Desarrollo Web, Uruguay, Experiencia de Usuario, Diseño de Interfaces",
  author: "Alfonso Rodriguez",
  openGraph: {
    title: "Alfonso Rodriguez | Innovando en Desarrollo Frontend",
    description:
      "Descubre cómo transformo ideas en experiencias digitales user-centric. Especialista en Frontend, UX/UI y soluciones web innovadoras.",
    type: "website",
    url: "https://www.alfonsorodriguez.dev", // Asegúrate de reemplazar esto con tu URL real
    image: "/path-to-your-og-image.jpg", // Reemplaza con la ruta a tu imagen OG
  },
};

export default function HomePage() {
  return (
    <div className="bg-cream p-6 font-sans text-cream min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow grid grid-cols-1 lg:grid-cols-6 gap-8 ">
        <div className="lg:col-span-4 flex flex-col h-full">
          <div className="flex-[60%] grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-4 bg-teal text-cream p-8 rounded-3xl flex flex-col justify-end relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-1/2">
                <Image
                  src="/images/patterns.png"
                  alt="Patrón decorativo"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="top right"
                  className="hidden sm:block"
                />
              </div>
              <h2 className="text-4xl  sm:text-5xl font-semibold leading-tight mb-4 relative z-0">
                Transformando
                <br />
                <span className="font-light italic text-gold">Ideas</span>
                <br />
                en Desarrollos{" "}
                <span className="font-light italic text-gold">
                  User-Centric
                </span>
              </h2>
            </div>

            <Link
              href={"/bio"}
              className="lg:col-span-1 bg-teal text-cream overflow-hidden relative rounded-3xl group cursor-pointer"
            >
              <Image
                src="/images/profilePic.jpg"
                alt="Alfonso Rodríguez"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-end"
                style={{
                  backgroundImage: `linear-gradient(to top, 
         #F2A541 5%, 
         #F2A541 10%, 
         rgba(51, 51, 51, 0.7) 30%, 
         rgba(51, 51, 51, 0.4) 70%)`,
                }}
              >
                <span className="text-charcoal flex items-center font-bold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Bio <ArrowUpRight className="ml-2" size={20} />
                </span>
              </div>
            </Link>
          </div>

          <div className="flex-[40%] grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Link
              href={"/sobre-mi"}
              className="bg-charcoal text-cream p-6 rounded-3xl flex flex-col transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-teal opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"></div>
              <p className="text-xl relative z-20 mb-8">
                Soy Alfonso, desarrollador Front-End especializado en crear
                experiencias digitales intuitivas. Con habilidades Full Stack,
                transformo ideas en interfaces atractivas y funcionales. Desde
                Uruguay, innovo en UX/UI para usuarios globales.
              </p>
              <div className="absolute bottom-4 right-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="text-gold font-bold mr-2">Info</span>
                <ArrowUpRight size={24} className="text-gold" />
              </div>
            </Link>
            <Link
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rodriguezalfonso20@gmail.com"
              className="bg-gold p-6 rounded-3xl text-charcoal h-full flex flex-col justify-between transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <p className="text-lg">Hablamos?</p>
              </div>
              <div className="mt-auto flex justify-between">
                <p className="text-3xl font-bold">Contactame</p>
                <ArrowUpRight size={32} />
              </div>
            </Link>
          </div>
        </div>

        <div className="space-y-8 lg:col-span-2 flex flex-col">
          <div className="bg-teal text-cream p-6  rounded-3xl flex-grow">
            <ProjectsAccordion />
          </div>
          <div className="flex justify-between bg-teal text-sm p-8 rounded-2xl">
            <Link
              target="_blank"
              href="https://github.com/forirodriguez"
              className="hover:text-gold transition-colors flex items-center"
            >
              GITHUB
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/m-alfonso-rodriguez/"
              className="hover:text-gold transition-colors flex items-center"
            >
              LINKEDIN
            </Link>
            <BotonDescarga />
          </div>
        </div>
      </main>
    </div>
  );
}
