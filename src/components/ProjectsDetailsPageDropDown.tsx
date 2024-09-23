"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import { projectsData } from "@/app/ProjectDetails";

// Agregar la prop currentProjectId para marcar el proyecto seleccionado
interface ProjectsDetailsPageDropDownProps {
  currentProjectId: string;
}

const ProjectsDetailsPageDropDown = ({
  currentProjectId,
}: ProjectsDetailsPageDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Mobile Dropdown */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex transition-colors cursor-pointer p-2
            ${
              isOpen && currentProjectId === "iparkings"
                ? "bg-gold text-teal rounded-tl-md rounded-tr-md "
                : isOpen
                ? "bg-teal text-gold rounded-tl-md rounded-tr-md "
                : "hover:text-charcoal"
            }`}
        >
          <Briefcase className="sm:hidden" size={24} />
        </button>
        <ul
          className={`absolute top-full right-0 w-48 bg-teal text-charcoal rounded-br-md rounded-bl-md rounded-tl-md shadow-lg z-10 overflow-hidden transition-all duration-300 ease-in-out
                        ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
        >
          {projectsData.map((project) => (
            <li key={project.id}>
              <Link
                href={`/${project.id}`}
                className={`block px-4 py-2 text-sm hover:bg-gold hover:text-charcoal ${
                  project.id === currentProjectId ? "bg-gold " : "text-gold"
                }`}
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Project Links */}
      <div className="hidden md:block">
        {projectsData.map((project, index) => (
          <React.Fragment key={project.id}>
            <Link
              href={`/${project.id}`}
              className={`rounded-md p-2 hover:text-charcoal hover:bg-gold ${
                project.id === currentProjectId
                  ? "bg-teal text-gold"
                  : "text-teal"
              }`}
            >
              {project.title}
            </Link>
            {index < projectsData.length - 1 && " | "}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProjectsDetailsPageDropDown;
