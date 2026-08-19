export type Locale = "pt" | "en";

export interface SkillCategoryDict {
  title: string;
  items: string[];
}

export interface ExperienceItemDict {
  role: string;
  company: string;
  period: string;
  mode: string | null;
  bullets: string[];
}

export interface ProjectItemDict {
  title: string;
  description: string;
}

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
  };
  about: {
    title: string;
    text: string;
    downloadCv: string;
  };
  skills: {
    title: string;
    categories: SkillCategoryDict[];
  };
  experience: {
    title: string;
    items: ExperienceItemDict[];
  };
  projects: {
    title: string;
    items: ProjectItemDict[];
    viewCode: string;
    viewSite: string;
  };
  contact: {
    title: string;
    whatsapp: string;
    email: string;
    linkedin: string;
    github: string;
  };
  footer: {
    catOwner: string;
    catNames: string[];
    frontendTitle: string;
    frontendItems: string[];
    backendTitle: string;
    backendItems: string[];
    rights: string;
  };
}
