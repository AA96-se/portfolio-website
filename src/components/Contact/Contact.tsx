const linkStyles =
  "rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-6 py-24 sm:px-12 lg:px-24"
    >
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Contact
      </h2>
      <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        Best places to reach me or see more of my work:
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="https://github.com/AA96-se"
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyles}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/angel-armas-se/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyles}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
