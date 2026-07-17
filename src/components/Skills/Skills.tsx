const skillGroups = [
  {
    category: "Frontend",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "Next.js",
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
  "rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-24 sm:px-12 lg:px-24"
    >
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Skills
      </h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category} className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
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
