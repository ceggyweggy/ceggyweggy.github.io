import { education, experience, skills } from "@/lib/content";

export default function Resume() {
  return (
    <section id="resume" className="py-16 sm:py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Resume</h2>

      <div className="mt-8">
        <h3 className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Experience
        </h3>
        <div className="mt-4 space-y-6">
          {experience.map((job) => (
            <div key={`${job.org}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-medium">
                  {job.role} · {job.org}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {job.period}
                </p>
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
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
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <h3 className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Skills
        </h3>
        {skills.map((group) => (
          <div key={group.category} className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
            <p className="w-28 shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
              {group.category}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-black/[.05] px-2.5 py-1 text-xs text-zinc-700 dark:bg-white/[.08] dark:text-zinc-300"
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
