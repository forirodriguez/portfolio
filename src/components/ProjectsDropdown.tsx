"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import { projectsData } from "@/app/ProjectDetails";

const ProjectsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center transition-colors cursor-pointer p-2
                     ${
                       isOpen
                         ? "bg-cream text-teal rounded-tl-md rounded-tr-md"
                         : "hover:text-gold"
                     }`}
      >
        <span className="hidden sm:inline">PROYECTOS</span>
        <Briefcase className="sm:hidden" />
      </button>
      <ul
        className={`absolute left-0 w-48 bg-cream rounded-br-md rounded-bl-md rounded-tr-md shadow-lg z-10 overflow-hidden transition-all duration-300 ease-in-out
                      ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      } dropdown-mobile`}
      >
        {projectsData.map((project) => (
          <li key={project.id}>
            <Link
              href={`/${project.id}`}
              className="block px-4 py-2 text-sm text-teal hover:bg-gold hover:text-charcoal"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ProjectsDropdown;
