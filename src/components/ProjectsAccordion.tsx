"use client";

import { useState } from "react";
import ProjectAccordionItem from "./ProjectAccordionItem";
import type { Locale, Project } from "@/content";

interface ProjectsAccordionProps {
  locale: Locale;
  projects: Project[];
  tabWork: string;
  tabProjects: string;
  viewMoreLabel: string;
}

export default function ProjectsAccordion({
  locale,
  projects,
  tabWork,
  tabProjects,
  viewMoreLabel,
}: ProjectsAccordionProps) {
  const [activeTab, setActiveTab] = useState<"work" | "project">("work");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentList = projects.filter((p) => p.type === activeTab);

  const switchTab = (tab: "work" | "project") => {
    setActiveTab(tab);
    setOpenIndex(0);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-around space-x-4 mb-2">
        {(
          [
            ["work", tabWork],
            ["project", tabProjects],
          ] as const
        ).map(([tab, label]) => (
          <button
            key={tab}
            type="button"
            className={`px-4 py-2 rounded-t-lg font-bold transition-colors ${
              activeTab === tab ? "bg-gold text-charcoal" : "text-cream"
            }`}
            onClick={() => switchTab(tab)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex-grow overflow-y-auto">
        {currentList.map((project, index) => (
          <ProjectAccordionItem
            key={project.id}
            project={project}
            index={index}
            isOpen={openIndex === index}
            onToggle={(i) => setOpenIndex((prev) => (prev === i ? null : i))}
            locale={locale}
            viewMoreLabel={viewMoreLabel}
          />
        ))}
      </div>
    </div>
  );
}
