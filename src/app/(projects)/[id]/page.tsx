import ProjectDetailsPage from "@/components/ProjectDetailsPage";
import { projectsData } from "@/app/ProjectDetails";
import { Metadata } from "next";

interface ProjectPageProps {
  params: { id: string };
}

// Función para generar metadata de forma dinámica
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = params;

  const project = projectsData.find((project) => project.id === id);

  if (!project) {
    return {
      title: "Project not found",
      description: "The project you are looking for does not exist.",
      robots: "noindex, nofollow", // No indexar si el proyecto no existe
    };
  }

  return {
    title: `Alfonso Rodriguez | ${project.title}`,
    description: project.shortDescription,
    keywords: `${project.title}, Alfonso Rodriguez, ${project.technologies.join(
      ", "
    )}, portfolio`,
    authors: [
      {
        name: "Alfonso Rodriguez",
        url: "https://www.alfonsorodriguez.dev",
      },
    ],
    openGraph: {
      title: `Alfonso Rodriguez | ${project.title}`, // Título optimizado para redes sociales
      description: project.shortDescription,
      url: `https://www.alfonsorodriguez.dev/${project.id}`, // URL canónica
      images: [
        {
          url: project.imageSrc, // Imagen del proyecto para redes sociales
          width: 800,
          height: 600,
          alt: project.title,
        },
      ],
      siteName: "Alfonso Rodriguez Portfolio",
    },
    twitter: {
      card: "summary_large_image", // Tarjeta de Twitter con imagen grande
      title: `Alfonso Rodriguez | ${project.title}`,
      description: project.shortDescription,
      images: [project.imageSrc], // Imagen para Twitter
    },
    robots: "index, follow", // Permitir indexación
    alternates: {
      canonical: `https://www.alfonsorodriguez.dev/${project.id}`, // URL canónica correcta
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = params;

  const project = projectsData.find((project) => project.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <>
      <ProjectDetailsPage project={project} />
    </>
  );
}
