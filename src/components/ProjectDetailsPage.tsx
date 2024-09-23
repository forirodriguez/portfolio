import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import ProjectsDetailsPageDropDown from "@/components/ProjectsDetailsPageDropDown";
import GoBackButton from "./GoBackButton";

interface ProjectDetails {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageSrc: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

interface ProjectDetailsPageProps {
  project: ProjectDetails;
}

export default function ProjectDetailsPage({
  project,
}: ProjectDetailsPageProps) {
  return (
    <div className="bg-cream min-h-screen p-6 font-sans text-charcoal">
      <div className="flex justify-between max-w-4xl mx-auto">
        <GoBackButton />
        <ProjectsDetailsPageDropDown currentProjectId={project.id} />
      </div>
      <main className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <p className="text-xl text-charcoal ">{project.shortDescription}</p>
          <div className="mt-4 sm:mt-0 flex justify-center space-x-6">
            {project.githubLink && (
              <Link
                target="_blank"
                href={project.githubLink}
                className="bg-teal text-cream p-4 rounded-full inline-flex items-center hover:bg-gold transition-colors"
              >
                <Github size={20} />
              </Link>
            )}
            {project.liveLink && (
              <Link
                target="_blank"
                href={project.liveLink}
                className="bg-teal text-cream px-4 py-2 rounded-full inline-flex items-center hover:bg-gold transition-colors"
              >
                <ExternalLink className="mr-2" size={20} />
                Ver Proyecto
              </Link>
            )}
          </div>
        </div>

        <div className="mb-12">
          <Image
            src={project.imageSrc}
            alt={`${project.title} screenshot`}
            width={1000}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold mb-4">
              Descripción del Proyecto
            </h2>
            <p className="mb-4">{project.fullDescription}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Tecnologías Utilizadas
            </h2>
            <ul className="list-disc list-inside space-y-2 text-teal">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
