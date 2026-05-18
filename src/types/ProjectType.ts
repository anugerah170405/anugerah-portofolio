
export interface ProjectLink {
  icon: string;
  label: string;
  url: string;
}

export interface ProjectAuthor {
  name: string;
  role: string;
  avatar: string;
  socialUrl: string;
}

export interface Project {
  title: string;
  year: number;
  category: string;
  description: string;
  tags: string[];
  thumbnail: string;
  challenge: string;
  solution: string;
  process: string;
  result: string;
  links: ProjectLink[];
  authors: ProjectAuthor[];
}