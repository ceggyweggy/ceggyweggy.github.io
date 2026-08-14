import { now } from "@/lib/content";

export default function Now() {
  return (
    <section className="py-16 sm:py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Now</h2>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Last updated {now.updated}
      </p>
      <p className="mt-6 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {now.text}
      </p>
      <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
        This is a{" "}
        <a
          href="https://nownownow.com/about"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-black underline-offset-4 hover:underline dark:text-white"
        >
          now page
        </a>
        . If you have your own site, you should make one, too.
      </p>
    </section>
  );
}
