export type Locale = "es" | "en";

export const LOCALES: Locale[] = ["es", "en"];

/** Prefijo de ruta por idioma. El español vive en la raíz. */
export const localePrefix: Record<Locale, string> = { es: "", en: "/en" };

export interface CaseSection {
  heading: string;
  body?: string;
  bullets?: string[];
}

export interface Project {
  id: string;
  title: string;
  role?: string;
  period?: string;
  shortDescription: string;
  fullDescription: string;
  imageSrc?: string;
  technologies: string[];
  /** Bullets con resultado concreto. Se muestran arriba de la descripción. */
  highlights?: string[];
  /** Secciones largas: solo para los proyectos que ameritan case study. */
  caseStudy?: CaseSection[];
  liveLink?: string;
  githubLink?: string;
  type: "work" | "project";
}

export interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  /** id de proyecto, si tiene página propia */
  projectId?: string;
}

export interface Education {
  title: string;
  institution: string;
  year?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Meta {
  title: string;
  description: string;
  keywords: string;
}

export interface Content {
  locale: Locale;
  htmlLang: string;
  switchLabel: string;
  nav: {
    projects: string;
    about: string;
    talk: string;
    cv: string;
    back: string;
    home: string;
    bio: string;
    info: string;
    viewProject: string;
    viewMore: string;
    liveSite: string;
    repo: string;
    stack: string;
    description: string;
    role: string;
    period: string;
  };
  home: {
    heroPrefix: string;
    rotatingWords: string[];
    heroMiddle: string;
    heroHighlight: string;
    intro: string;
    contactSmall: string;
    contactBig: string;
    tabWork: string;
    tabProjects: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    experienceTitle: string;
    skillsTitle: string;
    educationTitle: string;
    languagesTitle: string;
    international: string;
    jobs: Job[];
    skills: SkillGroup[];
    education: Education[];
    languages: { language: string; level: string }[];
  };
  bio: {
    title: string;
    sections: CaseSection[];
  };
  notFound: { title: string; text: string; cta: string };
  projects: Project[];
  meta: { home: Meta; about: Meta; bio: Meta };
}
