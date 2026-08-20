import Link from "next/link";
import type { Locale, Project } from "@/content";
import { href } from "@/content";

interface Props {
  locale: Locale;
  projects: Project[];
  currentProjectId: string;
}

export default function ProjectsNav({
  locale,
  projects,
  currentProjectId,
}: Props) {
  return (
    <nav className="flex flex-wrap gap-x-1 gap-y-2 justify-end mb-8">
      {projects.map((project) => {
        const isCurrent = project.id === currentProjectId;
        return (
          <Link
            key={project.id}
            href={href(locale, `/${project.id}`)}
            aria-current={isCurrent ? "page" : undefined}
            className={`rounded-md px-2 py-1 text-sm transition-colors ${
              isCurrent
                ? "bg-teal text-gold"
                : "text-teal hover:bg-gold hover:text-charcoal"
            }`}
          >
            {project.title}
          </Link>
        );
      })}
    </nav>
  );
}
