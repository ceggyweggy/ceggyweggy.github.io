import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import { SiGithub, SiGoodreads, SiInstagram, SiSubstack } from "react-icons/si";
import { profile } from "@/lib/content";

const links = [
  { label: "GitHub", href: profile.social.github, Icon: SiGithub },
  { label: "LinkedIn", href: profile.social.linkedin, Icon: FaLinkedin },
  { label: "Instagram", href: profile.social.instagram, Icon: SiInstagram },
  { label: "Substack", href: profile.social.substack, Icon: SiSubstack },
  { label: "Goodreads", href: profile.social.goodreads, Icon: SiGoodreads },
  { label: "Resume", href: profile.resumeUrl, Icon: FiFileText },
];

export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
        <div>
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
          <div className="mt-6 flex gap-5">
            {links.map(({ label, href, Icon }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="text-zinc-700 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ) : (
                <span
                  key={label}
                  aria-label={`${label} (coming soon)`}
                  title={`${label} (coming soon)`}
                  className="text-zinc-300 dark:text-zinc-700"
                >
                  <Icon className="h-5 w-5" />
                </span>
              ),
            )}
          </div>
        </div>
        <Image
          src="/profile.jpg"
          alt={profile.name}
          width={320}
          height={320}
          priority
          className="h-48 w-48 shrink-0 rounded-full object-cover sm:h-64 sm:w-64 md:h-72 md:w-72"
        />
      </div>
      <div
        style={{
          fontFamily: "monospace",
          fontSize: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
        className="mt-12"
      >
        <a href="https://calwebring.com/prev?current=https://ceggyweggy.github.io/">←</a>
        <a href="https://calwebring.com">
          <img src="https://calwebring.com/badge.png" width="36" />
        </a>
        <a href="https://calwebring.com/next?current=https://ceggyweggy.github.io/">→</a>
      </div>
    </section>
  );
}
