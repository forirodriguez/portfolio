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
    <nav className="flex flex-wrap gap-x-1 gap-y-2 justify-start mb-8">
      {projects.filter((project) => project.id !== currentProjectId).map((project) => (
        <Link
          key={project.id}
          href={href(locale, `/${project.id}`)}
          className="rounded-full px-3 py-2 min-h-11 inline-flex items-center text-sm text-teal hover:bg-teal hover:text-cream"
        >
          {project.title}
        </Link>
      ))}
    </nav>
  );
}
