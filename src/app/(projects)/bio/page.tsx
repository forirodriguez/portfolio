import React from "react";
import Link from "next/link";
import {
  Dumbbell,
  Coffee,
  Code,
  Briefcase,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import GoBackButton from "@/components/GoBackButton";
import BoxReveal from "@/components/ui/box-reveal";

export const metadata = {
  title: "Alfonso Rodriguez | Mi Viaje Personal y Profesional",
  description:
    "Explora mi trayectoria desde el mundo de los negocios al desarrollo frontend. Descubre cómo mis experiencias en gastronomía, fitness y tecnología moldean mi enfoque único en el desarrollo de soluciones digitales innovadoras.",
  keywords:
    "Desarrollo Frontend, Transición de Carrera, Aprendizaje Continuo, Liderazgo, Emprendimiento, UX/UI, Desarrollo Personal, Innovación Tecnológica",
  author: "Alfonso Rodriguez",
  openGraph: {
    title:
      "Alfonso Rodriguez | De los Negocios al Código: Un Viaje de Aprendizaje Continuo",
    description:
      "Conoce cómo fusiono mi experiencia en negocios, gastronomía y tecnología para crear soluciones digitales únicas. Un vistazo a mi journey personal y profesional.",
    type: "website",
    url: "https://portfolio-alfonsorodriguez-20.vercel.app/.dev/bio",
    image: "/images/portfolio.jpg",
  },
};

const Bio = () => {
  return (
    <div className="bg-cream min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <GoBackButton />

        <h1 className="text-5xl font-bold text-teal mb-8">
          Siempre Aprendiendo, Siempre Creciendo
        </h1>

        <section className="mb-12 bg-teal text-cream p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Lightbulb className="mr-2" /> La Vida Misma
          </h2>
          <p className="text-lg mb-4">
            Pasé de estar en el mundo de los negocios a sumergirme de cabeza en
            el desarrollo. No fue solo cambiar de trabajo, fue más bien como
            descubrir un nuevo universo lleno de posibilidades. Siempre hay algo
            nuevo por aprender a la vuelta de la esquina.
          </p>
          <p className="text-lg">
            Creo que tengo una mezcla interesante: las habilidades sociales que
            pulí en el mundo empresarial y esta curiosidad insaciable por la
            tecnología. Me encanta poder aportar ideas frescas y ver los
            problemas desde diferentes ángulos en cada proyecto que toco.
          </p>
        </section>

        <section className="mb-12">
          <div className="bg-gold text-charcoal p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-charcoal mb-6 flex items-center">
              <Briefcase className="hidden sm:block mr-2" /> De Traje y Corbata
              a Hoodie y Laptop
            </h2>
            <p className="text-lg mb-4">
              Mi salto del mundo corporativo al desarrollo fue como aprender a
              andar en bicicleta de nuevo, pero con el motor de una moto. Toda
              esa experiencia en negocios no se fue a la basura; más bien, es
              como si hubiera encontrado el manual secreto para entender tanto
              el código como las necesidades reales de los usuarios y clientes.
            </p>
            <p className="text-lg">
              Ahora, cuando me siento a programar, no solo pienso en cómo hacer
              que algo funcione, sino en por qué lo estoy haciendo y cómo va a
              impactar al usuario final. Es como tener visión de rayos X para
              los proyectos.
            </p>
          </div>
        </section>

        <BoxReveal boxColor={"#EFEEE5"} duration={0.5}>
          <section>
            <div className="bg-teal text-cream p-6 rounded-lg">
              <h2 className="text-3xl font-bold  mb-6 flex items-center">
                <Code className="hidden sm:block mr-2 text-cream" /> Digitax:
                Donde Todo se Junta
              </h2>
              <p className="text-lg mb-4">
                Digitax es donde todo lo que he aprendido y vivido se fusiona en
                algo tangible. Cada línea de código lleva un poco de mi
                experiencia en negocios, mi pasión por la tecnología y todas
                esas horas en cursos aprendiendo cosas nuevas.
              </p>
              <p className="text-lg">
                Con Digitax, estamos creando algo que realmente entiende los
                dolores de cabeza de los profesionales independientes con sus
                impuestos. Es como si hubieramos tomado todos esos formularios
                complicados y los hubieramos traducido a un lenguaje que
                cualquiera puede entender.
                <span>
                  <Link href={"/digitax"} className="ml-2 text-gold">
                    Un poco más sobre Digitax
                  </Link>
                </span>
              </p>
            </div>
          </section>
        </BoxReveal>

        <BoxReveal boxColor={"#EFEEE5"} duration={0.5}>
          <section className="mt-12 mb-12 bg-gold text-charcoal p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <GraduationCap className="hidden sm:block mr-2" /> Lo Que Viene
            </h2>
            <p className="text-lg">
              Mi aventura en el desarrollo es como una serie que no para de
              sacar temporadas nuevas. Cada día es un episodio diferente, lleno
              de desafíos y aprendizajes. Mi meta es seguir mezclando todo lo
              que sé y he vivido para crear cosas que no solo funcionen genial,
              sino que realmente hagan la diferencia en la vida de las personas.
            </p>
          </section>
        </BoxReveal>
        <section className="mb-12">
          <BoxReveal boxColor={"#EFEEE5"} duration={0.5}>
            <h2 className="text-3xl font-bold text-charcoal mb-6">
              Desafíos que Me Han Formado
            </h2>
          </BoxReveal>
          <BoxReveal boxColor={"#EFEEE5"} duration={0.5}>
            <div className="bg-teal text-cream p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <Dumbbell className="hidden sm:block mr-2" /> Del Gym al Teclado
              </h3>
              <p>
                Crear una rutina de gimnasio fue como aprender a programar: al
                principio todo era confuso y agotador. Pero esa lucha contra la
                pereza y las excusas me enseñó más sobre consistencia que
                cualquier libro de autoayuda. Ahora, cada vez que me siento a
                codear, es como si mi cerebro hiciera sentadillas mentales. La
                disciplina que construí levantando pesas es la misma que uso
                para levantar proyectos y mantenerme al día en este mundo tech.
              </p>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#EFEEE5"} duration={0.5}>
            <div className="bg-teal text-cream p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <Coffee className="hidden sm:block mr-2" /> Mi Aventura en
                Gastronomía: Club Silvergate
              </h3>
              <p>
                Mi aventura gastronómica fue un máster en habilidades humanas.
                Lideré un equipo diverso, equilibrando sus necesidades con las
                exigencias del negocio. Negociar con proveedores afinó mi
                comunicación, mientras que idear estrategias comerciales agudizó
                mi creatividad. Aprendí que la satisfacción del cliente comienza
                con un equipo motivado. Hoy, estas lecciones son mi receta
                secreta: liderar con empatía, comunicar con claridad y poner la
                satisfacción de usuarios y equipo en el centro de cada proyecto.
              </p>
            </div>
          </BoxReveal>
        </section>
      </div>
    </div>
  );
};

export default Bio;
