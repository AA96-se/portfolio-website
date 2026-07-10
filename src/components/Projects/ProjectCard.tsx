import Image from "next/image";
import { Project } from "@/types";

const tagStyles =
  "rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300";

const linkStyles =
  "rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, technologies, repos, liveUrl, thumbnail, video } =
    project;

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
        {video ? (
          <video
            src={video}
            controls
            className="h-full w-full object-cover"
          />
        ) : thumbnail ? (
          <Image
            src={thumbnail}
            alt={`${title} screenshot`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-lg font-semibold text-zinc-400 dark:text-zinc-600">
              {title}
            </span>
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className={tagStyles}>
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {repos.map((repo) => (
          <a
            key={repo.url}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
          >
            {repo.label}
          </a>
        ))}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
