"use client";

import { useState } from "react";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import type { Locale, Project } from "@/content";
import { href } from "@/content";

interface ProjectsDropdownProps {
  locale: Locale;
  projects: Project[];
  label: string;
}

export default function ProjectsDropdown({
  locale,
  projects,
  label,
}: ProjectsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className={`flex items-center transition-colors cursor-pointer p-2 ${
          isOpen
            ? "bg-cream text-teal rounded-tl-md rounded-tr-md"
            : "hover:text-gold"
        }`}
      >
        <span className="hidden sm:inline">{label}</span>
        <Briefcase className="sm:hidden" />
      </button>
      <ul
        className={`absolute left-0 w-52 bg-cream rounded-br-md rounded-bl-md rounded-tr-md shadow-lg z-30 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              href={href(locale, `/${project.id}`)}
              className="block px-4 py-2 text-sm text-teal hover:bg-gold hover:text-charcoal"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
