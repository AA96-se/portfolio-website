type ExperienceEntry = {
  id: string;
  role: string;
  organization: string;
  period: string;
  description?: string;
  bullets?: string[];
};

const experience: ExperienceEntry[] = [
  {
    id: "freelance",
    role: "Freelance Software Engineer",
    organization: "Self-Employed",
    period: "2026 – Present",
    bullets: [
      "Build and deploy production web applications for small-business clients using Next.js, React, TypeScript, and Tailwind CSS.",
      "Manage deployment, DNS/domain configuration, technical SEO, production troubleshooting, and client requirements from discovery through launch.",
    ],
  },
  {
    id: "synth-tree",
    role: "Software Engineering Extern",
    organization: "Synth-Tree NPO",
    period: "May 2026 – June 2026",
    bullets: [
      "Contributed to an existing full-stack application in a collaborative engineering environment using TypeScript, React, pnpm, Prisma/PostgreSQL, GraphQL/Pothos, and Docker.",
      "Implemented application features and worked within an established monorepo and development workflow.",
    ],
  },
  {
    id: "tripleten",
    role: "Fullstack Software Engineering Bootcamp",
    organization: "TripleTen",
    period: "June 2025 – June 2026",
    description:
      "Completed an intensive full-stack software engineering program covering the MERN stack — React, JavaScript, Node.js, Express, and MongoDB. Built multiple full-stack projects from scratch, including Spots and WTWR.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-24 sm:px-12 lg:px-24"
    >
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-accent-secondary" />
        <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary">
          Experience
        </h2>
      </div>
      <div className="flex flex-col gap-10 divide-y divide-border">
        {experience.map((entry) => (
          <div key={entry.id} className="flex flex-col gap-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-lg font-bold text-text-primary">
                {entry.role}
              </h3>
              <span className="font-mono text-sm text-text-secondary">
                {entry.period}
              </span>
            </div>
            <p className="text-sm font-semibold text-text-secondary">
              {entry.organization}
            </p>
            {entry.bullets ? (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-text-secondary">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {entry.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
