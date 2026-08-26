const focusRingStyles =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary";

const primaryLinkStyles = `rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent-primary/90 ${focusRingStyles}`;

const secondaryLinkStyles = `rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-accent-primary hover:text-accent-primary ${focusRingStyles}`;

const secondaryVioletLinkStyles = `rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-accent-secondary hover:border-accent-secondary ${focusRingStyles}`;

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-6 py-24 sm:px-12 lg:px-24"
    >
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-accent-primary" />
        <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary">
          Contact
        </h2>
      </div>
      <p className="text-base leading-relaxed text-text-secondary">
        Best places to reach me or see more of my work:
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:angelandresarmas@gmail.com"
          className={primaryLinkStyles}
        >
          Email
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
          className={secondaryVioletLinkStyles}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
