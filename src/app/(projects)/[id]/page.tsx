import ProjectDetailsPage from "@/components/ProjectDetailsPage";
import { projectsData } from "@/app/ProjectDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = params;
  const project = projectsData.find((project) => project.id === id);

  if (!project) {
    return {
      title: "Projecto no encontrado",
      description: "El projecto que estás buscando no existe.",
      robots: "noindex, nofollow",
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
        url: "https://portfolio-alfonsorodriguez-20.vercel.app/",
      },
    ],
    openGraph: {
      title: `Alfonso Rodriguez | ${project.title}`,
      description: project.shortDescription,
      url: `https://portfolio-alfonsorodriguez-20.vercel.app/${project.id}`,
      images: [
        {
          url: project.imageSrc,
          width: 800,
          height: 600,
          alt: project.title,
        },
      ],
      siteName: "Alfonso Rodriguez Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: `Alfonso Rodriguez | ${project.title}`,
      description: project.shortDescription,
      images: [project.imageSrc],
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://portfolio-alfonsorodriguez-20.vercel.app/${project.id}`,
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = params;
  const project = projectsData.find((project) => project.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsPage project={project} />;
}
