export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'fullstack' | 'backend' | 'frontend' | 'cloud';
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  highlights: string[];
  image: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
  level: number; // 0 to 100
  iconName: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  type: 'work' | 'education' | 'project';
}

export interface ProfileInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  twitter?: string;
  bio: string;
  availableForHire: boolean;
  yearsOfExperience: number;
  completedProjects: number;
  contributions: number;
}
