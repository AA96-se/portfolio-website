export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-24 sm:px-12 lg:px-24"
    >
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        About
      </h2>
      <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
        I&apos;m a full-stack software engineer trained through Triple
        Ten&apos;s bootcamp program, working primarily in the MERN stack —
        React, JavaScript, Node.js, Express, and MongoDB. I like building
        things end to end: designing the data model, wiring up the API, and
        shaping the interface that sits on top of it.
      </p>
      <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
        Right now I&apos;m expanding into TypeScript, Next.js, and Tailwind
        CSS — this site is itself part of that process.
      </p>
    </section>
  );
}
