import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailsPage from "@/components/ProjectDetailsPage";
import { getContent, SITE_URL } from "@/content";

interface ProjectPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return getContent("es").projects.map((project) => ({ id: project.id }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getContent("es").projects.find((p) => p.id === params.id);

  if (!project) {
    return { title: "Alfonso Rodriguez", robots: { index: false } };
  }

  // Los proyectos sin imagen propia caen en la tarjeta generada del sitio: sin
  // esto comparten sin preview.
  const ogImages = project.imageSrc
    ? [{ url: project.imageSrc, alt: project.title }]
    : [{ url: "/opengraph-image", width: 1200, height: 630, alt: project.title }];

  return {
    title: `${project.title} | Alfonso Rodriguez`,
    description: project.shortDescription,
    keywords: `${project.title}, Alfonso Rodriguez, ${project.technologies.join(
      ", "
    )}`,
    authors: [{ name: "Alfonso Rodriguez", url: SITE_URL }],
    alternates: {
      canonical: `/es/${project.id}`,
      languages: {
        "es-UY": `/es/${project.id}`,
        en: `/${project.id}`,
        "x-default": `/${project.id}`,
      },
    },
    openGraph: {
      title: `${project.title} | Alfonso Rodriguez`,
      description: project.shortDescription,
      url: `/es/${project.id}`,
      siteName: "Alfonso Rodriguez",
      type: "article",
      locale: "es_UY",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Alfonso Rodriguez`,
      description: project.shortDescription,
      images: ogImages.map((image) => image.url),
    },
  };
}

export default function ProjectPageEs({ params }: ProjectPageProps) {
  const project = getContent("es").projects.find((p) => p.id === params.id);

  if (!project) notFound();

  return <ProjectDetailsPage project={project} locale="es" />;
}
