import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {profile.location}
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-1 text-xl text-zinc-600 dark:text-zinc-400">
        {profile.role}
      </p>
      <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {profile.summary}
      </p>
      <div className="mt-6 flex gap-4 text-sm font-medium">
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black underline-offset-4 hover:underline dark:text-white"
        >
          GitHub
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black underline-offset-4 hover:underline dark:text-white"
        >
          LinkedIn
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black underline-offset-4 hover:underline dark:text-white"
        >
          Resume (PDF)
        </a>
      </div>
    </section>
  );
}
