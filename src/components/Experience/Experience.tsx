const experience = [
  {
    id: "tripleten",
    role: "Fullstack Software Engineering Bootcamp",
    organization: "TripleTen",
    period: "June 2025 – June 2026",
    description:
      "Completed an intensive full-stack software engineering program covering the MERN stack — React, JavaScript, Node.js, Express, and MongoDB. Built multiple full-stack projects from scratch, including Spots and WTWR.",
  },
  {
    id: "synth-tree",
    role: "Software Engineering Extern",
    organization: "Synth-Tree NPO",
    period: "May 2026 – June 2026",
    description:
      "Worked as a software engineering extern with Synth-Tree, a nonprofit organization, applying full-stack development skills in a collaborative team setting.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-24 sm:px-12 lg:px-24"
    >
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Experience
      </h2>
      <div className="flex flex-col gap-10">
        {experience.map((entry) => (
          <div key={entry.id} className="flex flex-col gap-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                {entry.role}
              </h3>
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {entry.period}
              </span>
            </div>
            <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              {entry.organization}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {entry.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
