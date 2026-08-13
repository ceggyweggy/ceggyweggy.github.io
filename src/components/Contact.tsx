import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <section className="py-16 sm:py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        Best way to reach me is email.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-4 inline-block font-medium text-black underline-offset-4 hover:underline dark:text-white"
      >
        {profile.email}
      </a>
    </section>
  );
}
