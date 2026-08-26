const skillGroups = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "GraphQL", "Prisma"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Docker", "Vercel", "pnpm"],
  },
];

const tagStyles =
  "rounded-md border border-border px-3 py-1 font-mono text-sm text-text-secondary";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-24 sm:px-12 lg:px-24"
    >
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-accent-primary" />
        <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary">
          Skills
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category} className="flex flex-col gap-3">
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-text-secondary">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className={tagStyles}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
