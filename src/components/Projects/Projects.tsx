import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-24 sm:px-12 lg:px-24"
    >
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
