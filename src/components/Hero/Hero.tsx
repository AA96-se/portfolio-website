const focusRingStyles =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-50";

const primaryButtonStyles = `rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 ${focusRingStyles}`;

const secondaryButtonStyles = `rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800 ${focusRingStyles}`;

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-start justify-center gap-6 px-6 sm:px-12 lg:px-24"
    >
      <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400">
        Hi, I&apos;m
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
        Angel Armas
      </h1>
      <p className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 sm:text-2xl">
        Full-Stack Software Engineer
      </p>
      <p className="max-w-xl text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
        Full-Stack Software Engineer building production web applications
        with React, Next.js, TypeScript, and Node.js. Experienced across
        frontend development, APIs, databases, deployment, and real-world
        client projects.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href="#projects" className={primaryButtonStyles}>
          View Projects
        </a>
        <a
          href="https://github.com/AA96-se"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub (opens in a new tab)"
          className={secondaryButtonStyles}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/angel-armas-se/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
          className={secondaryButtonStyles}
        >
          LinkedIn
        </a>
        <a href="#contact" className={secondaryButtonStyles}>
          Contact
        </a>
      </div>
    </section>
  );
}
