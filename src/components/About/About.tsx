export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-24 sm:px-12 lg:px-24"
    >
      <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary">
        About
      </h2>
      <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
        I&apos;m a full-stack software engineer focused on building
        reliable, user-friendly web applications with React, Next.js,
        TypeScript, and Node.js.
      </p>
      <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
        My experience spans collaborative engineering work in an existing
        production codebase and independently delivering software for real
        clients — from requirements and development through deployment and
        production support.
      </p>
      <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
        I enjoy turning real-world problems into clean, maintainable
        software, and I&apos;m especially interested in opportunities where
        I can contribute to a strong engineering team while continuing to
        grow as an engineer.
      </p>
    </section>
  );
}
