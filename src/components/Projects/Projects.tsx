import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-24 sm:px-12 lg:px-24"
    >
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-accent-primary" />
        <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
