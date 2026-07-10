export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repos: { label: string; url: string }[];
  liveUrl?: string;
  thumbnail?: string;
  video?: string;
}
