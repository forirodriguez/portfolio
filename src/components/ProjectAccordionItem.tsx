import Image from "next/image";
import Link from "next/link";
import BoxReveal from "./ui/box-reveal";
import type { Locale, Project } from "@/content";
import { href } from "@/content";

interface ProjectAccordionItemProps {
  project: Project;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
  locale: Locale;
  viewMoreLabel: string;
}

export default function ProjectAccordionItem({
  project,
  index,
  isOpen,
  onToggle,
  locale,
  viewMoreLabel,
}: ProjectAccordionItemProps) {
  const panelId = `project-panel-${project.id}`;

  return (
    <div className="border-b-4 border-cream/50 last:border-b-0 flex flex-col">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full text-left flex justify-between items-center py-4 gap-4"
        onClick={() => onToggle(index)}
      >
        <BoxReveal delay={index * 90}>
          <span
            className={`text-lg font-bold ${isOpen ? "text-gold" : ""}`}
          >
            {project.title}
          </span>
        </BoxReveal>
        <span aria-hidden="true" className="text-xl shrink-0">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div id={panelId} className="pb-4 space-y-3">
          <p className="text-xs uppercase tracking-wide text-gold">
            {project.period}
          </p>
          <p className="text-sm text-cream/80">
            {project.technologies.slice(0, 5).join(" · ")}
          </p>
          <p className="text-sm text-cream">
            {project.shortDescription}{" "}
            <Link
              className="text-gold underline underline-offset-2"
              href={href(locale, `/${project.id}`)}
            >
              {viewMoreLabel}
            </Link>
          </p>

          {project.imageSrc && (
            <div className="accordion-thumb relative aspect-video max-h-60 rounded-lg overflow-hidden bg-cream/10">
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-contain"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
