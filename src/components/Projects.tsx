import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section className="py-16 sm:py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => {
          const Card = project.href ? "a" : "div";
          return (
            <Card
              key={project.name}
              {...(project.href
                ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group rounded-lg border border-white/10 p-5 transition-colors hover:border-accent/50"
            >
              <h3 className="font-medium group-hover:text-accent group-hover:underline">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-white/[.08] px-2.5 py-1 text-xs text-foreground/80"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
