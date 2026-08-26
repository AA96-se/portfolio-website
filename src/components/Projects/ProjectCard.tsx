import Image from "next/image";
import { Project } from "@/types";

const tagStyles =
  "rounded-md border border-border px-2.5 py-1 font-mono text-xs text-text-secondary";

const focusRingStyles =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary";

const primaryLinkStyles = `rounded-full bg-accent-primary px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-accent-primary/90 ${focusRingStyles}`;

const secondaryLinkStyles = `rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-text-primary transition-colors hover:border-accent-primary hover:text-accent-primary ${focusRingStyles}`;

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, technologies, repos, liveUrl, thumbnail, video } =
    project;

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent-primary">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-background">
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
            <span className="text-lg font-semibold text-text-muted">
              {title}
            </span>
          </div>
        )}
      </div>

      <h3 className="font-display text-xl font-bold text-text-primary">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-text-secondary">
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
            aria-label={`${title} ${repo.label} repository (opens in a new tab)`}
            className={secondaryLinkStyles}
          >
            {repo.label}
          </a>
        ))}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} live demo (opens in a new tab)`}
            className={primaryLinkStyles}
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
