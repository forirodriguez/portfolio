"use client";

import React, { useState } from "react";
import { ProjectAccordionItem } from "./ProjectAccordionItem";

interface Project {
  name: string;
  description: string;
  technologies: string;
  image: string;
  path: string;
}

const projects: Project[] = [
  {
    name: "Digitax",
    description:
      "Aplicación para facilitar el cálculo de impuestos y la gestión fiscal para profesionales e independientes.",
    technologies: "Next.js | React | MongoDB",
    image: "/images/digitax.png",
    path: "/digitax",
  },
  {
    name: "Mi Portfolio",
    description:
      "Sitio web personal para mostrar proyectos y habilidades como desarrollador frontend.",
    technologies: "Next.js | TypeScript | Tailwind CSS",
    image: "/images/portfolio.jpg",
    path: "/portfolio",
  },
  /*   {
    name: "Ecommerce",
    description:
      "Plataforma de comercio electrónico con funcionalidades avanzadas de gestión de inventario y pagos.",
    technologies: "React | Node.js | Express | MySQL",
    image: "/images/ecommerce.jpg",
    path: "ecommerce",
  }, */
];

const workProjects: Project[] = [
  {
    name: "iParkings",
    description:
      "Diseño UX/UI y desarrollo full-stack para sistemas de auto-cobro, gestión de parkings y página web.",
    technologies:
      "JavaScript | HTML | CSS | PHP | MySQL | UX/UI Design | Responsive Design",
    image: "/images/iparkings.jpg",
    path: "iparkings",
  },
  {
    name: "TengoKarga",
    description:
      "Desarrollo full stack para plataforma logística, implementando nuevas características y manteniendo servicios existentes.",
    technologies: "React | Redux | Sagas | Node.js | Testing",
    image: "/images/tengokarga.jpg",
    path: "tengokarga",
  },
  {
    name: "Timb Arquitectura",
    description:
      "Diseño y desarrollo de sitio web responsive para estudio de arquitectos, con personalizaciones específicas.",
    technologies: "WordPress | CSS | Responsive Design",
    image: "/images/timb1.jpg",
    path: "timb-arquitectura",
  },
];

export default function ProjectsAccordion() {
  const [activeTab, setActiveTab] = useState<"projects" | "works">("works");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const currentList = activeTab === "projects" ? projects : workProjects;

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-around  space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-t-lg font-bold ${
            activeTab === "works" ? "bg-gold text-charcoal" : "text-cream"
          }`}
          onClick={() => {
            setActiveTab("works");
            setOpenIndex(null);
          }}
        >
          Trabajos
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-bold ${
            activeTab === "projects" ? "bg-gold text-charcoal" : "text-cream"
          }`}
          onClick={() => {
            setActiveTab("projects");
            setOpenIndex(null);
          }}
        >
          Proyectos
        </button>
      </div>
      <div className="flex-grow overflow-y-auto">
        <div className="flex flex-col h-full justify-between">
          {currentList.map((item, index) => (
            <ProjectAccordionItem
              key={item.name}
              item={item}
              index={index}
              isOpen={openIndex === index}
              toggleProject={toggleProject}
              totalItems={currentList.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
