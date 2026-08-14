import { education, experience, skills , teaching } from "@/lib/content";

export default function Experience() {
  return (
    <section className="py-16 sm:py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>

      <div className="mt-8">
        <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
          Industry/Research
        </h3>
        <div className="mt-4 space-y-6">
          {experience.map((job) => (
            <div key={`${job.org}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-medium">
                  {job.role} · {job.org}
                </p>
                <p className="text-sm text-muted">
                  {job.period}
                </p>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
          Teaching
        </h3>
        <div className="mt-4 space-y-6">
          {teaching.map((job) => (
            <div key={`${job.org}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-medium">
                  {job.role} · {job.org}
                </p>
                <p className="text-sm text-muted">
                  {job.period}
                </p>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mt-10">
        <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
          Education
        </h3>
        <div className="mt-4 space-y-2">
          {education.map((item) => (
            <div
              key={item.school}
              className="flex flex-wrap items-baseline justify-between gap-x-4"
            >
              <p className="font-medium">
                {item.degree} · {item.school}
              </p>
              <p className="text-sm text-muted">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div> */}

      <div className="mt-10 space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
          Skills
        </h3>
        {skills.map((group) => (
          <div key={group.category} className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
            <p className="w-28 shrink-0 text-sm text-muted">
              {group.category}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-white/[.08] px-2.5 py-1 text-xs text-foreground/80"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
