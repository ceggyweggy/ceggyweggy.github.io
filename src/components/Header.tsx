"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  // { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  // { href: "/media", label: "Media" },
  { href: "/now", label: "Now" },
  { href: "/dino-cam", label: "Dino Cam" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          {profile.name}
        </Link>
        <nav className="flex gap-6 text-sm text-muted">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "font-medium text-accent"
                    : "transition-colors hover:text-accent"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
