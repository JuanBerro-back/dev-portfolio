export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'python' | 'backend' | 'frontend' | 'fullstack';
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  highlights: string[];
  image: string;
  monkeyMascot?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'languages' | 'frameworks' | 'tools';
  level: number; // 0 to 100
  iconName: string;
  description: string;
  emoji?: string;
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
  bio: string;
  availableForHire: boolean;
  yearsOfExperience: number;
  completedProjects: number;
  contributions: number;
  githubRepos: number;
  githubFollowers: number;
  githubStars: number;
  jungleMotto: string;
}
