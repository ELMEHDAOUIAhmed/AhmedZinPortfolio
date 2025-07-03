export interface Experience {
  id: string;
  title: string;
  company: string;
  timeline: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface Language {
  code: 'en' | 'fr';
  name: string;
}