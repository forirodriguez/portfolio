import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailsPage from "@/components/ProjectDetailsPage";
import { getContent, SITE_URL } from "@/content";

interface ProjectPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return getContent("en").projects.map((project) => ({ id: project.id }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getContent("en").projects.find((p) => p.id === params.id);

  if (!project) {
    return { title: "Alfonso Rodriguez", robots: { index: false } };
  }

  return {
    title: `${project.title} | Alfonso Rodriguez`,
    description: project.shortDescription,
    keywords: `${project.title}, Alfonso Rodriguez, ${project.technologies.join(
      ", "
    )}`,
    authors: [{ name: "Alfonso Rodriguez", url: SITE_URL }],
    alternates: {
      canonical: `/en/${project.id}`,
      languages: {
        "es-UY": `/${project.id}`,
        en: `/en/${project.id}`,
        "x-default": `/${project.id}`,
      },
    },
    openGraph: {
      title: `${project.title} | Alfonso Rodriguez`,
      description: project.shortDescription,
      url: `/en/${project.id}`,
      siteName: "Alfonso Rodriguez",
      type: "article",
      locale: "en_US",
      images: project.imageSrc
        ? [{ url: project.imageSrc, alt: project.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Alfonso Rodriguez`,
      description: project.shortDescription,
      images: project.imageSrc ? [project.imageSrc] : undefined,
    },
  };
}

export default function ProjectPageEn({ params }: ProjectPageProps) {
  const project = getContent("en").projects.find((p) => p.id === params.id);

  if (!project) notFound();

  return <ProjectDetailsPage project={project} locale="en" />;
}
