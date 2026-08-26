const focusRingStyles =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary";

const primaryLinkStyles = `rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-primary/90 ${focusRingStyles}`;

const secondaryLinkStyles = `rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent-primary hover:text-accent-primary ${focusRingStyles}`;

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-start justify-center gap-6 px-6 sm:px-12 lg:px-24"
    >
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-accent-primary" />
        <p className="font-mono text-sm tracking-widest text-text-secondary">
          Hi, I&apos;m
        </p>
      </div>
      <h1 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
        Angel Armas
      </h1>
      <p className="font-display text-xl font-semibold text-accent-primary sm:text-2xl">
        Full-Stack Software Engineer
      </p>
      <p className="max-w-xl text-base text-text-secondary sm:text-lg">
        Full-Stack Software Engineer building production web applications
        with React, Next.js, TypeScript, and Node.js. Experienced across
        frontend development, APIs, databases, deployment, and real-world
        client projects.
      </p>
      <div className="flex flex-wrap gap-4">
        <a href="#projects" className={primaryLinkStyles}>
          View Projects
        </a>
        <a
          href="https://github.com/AA96-se"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub (opens in a new tab)"
          className={secondaryLinkStyles}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/angel-armas-se/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
          className={secondaryLinkStyles}
        >
          LinkedIn
        </a>
        <a href="#contact" className={secondaryLinkStyles}>
          Contact
        </a>
      </div>
    </section>
  );
}
