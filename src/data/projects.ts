import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "dcooler",
    title: "D'Cooler Cooling & Heating",
    description:
      "Rebuilt and migrated a production website for a South Florida HVAC company, replacing a compromised legacy WordPress installation with a modern Next.js application. Managed responsive development, deployment, DNS migration, technical SEO, production troubleshooting, and ongoing client support.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    repos: [],
    liveUrl: "https://dcooler.com",
    thumbnail: "/images/dcooler_screenshot.png",
  },
  {
    id: "spots",
    title: "Spots",
    description:
      "Spots is an image-sharing platform similar to Instagram, where users can upload, share, and interact with each other's photos. This was my first project where I built the entire thing — backend and frontend — from scratch.",
    technologies: ["HTML", "CSS", "React", "Express"],
    repos: [
      { label: "GitHub", url: "https://github.com/AA96-se/se_project_spots" },
    ],
    thumbnail: "/images/spots.png",
  },
  {
    id: "wtwr",
    title: "What to Wear (WTWR)",
    description:
      "WTWR tracks local weather using a weather API and sorts a user's uploaded clothing items into three temperature levels — hot, warm, and cold — filtering to potentially wearable items based on the current weather threshold.",
    technologies: ["React", "Node.js", "JavaScript", "Express", "MongoDB"],
    repos: [
      { label: "Frontend", url: "https://github.com/AA96-se/se_project_react" },
      { label: "Backend", url: "https://github.com/AA96-se/se_project_express" },
    ],
    thumbnail: "/images/wtwr.png",
  },
];
