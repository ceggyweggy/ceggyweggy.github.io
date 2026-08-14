import { excludedSubstackSlugs } from "./substack-excluded";

export type SubstackPost = {
  title: string;
  link: string;
  pubDate: string;
  subtitle: string;
  excerpt: string;
  slug: string;
};

const ARCHIVE_URL = "https://slippyslide.substack.com/api/v1/archive";
const PAGE_SIZE = 50;
const MAX_PAGES = 20; // safety cap against a runaway loop

type ArchiveEntry = {
  title: string;
  subtitle?: string;
  canonical_url: string;
  post_date: string;
  truncated_body_text?: string;
  slug: string;
};

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  const posts: SubstackPost[] = [];

  try {
    let offset = 0;
    for (let page = 0; page < MAX_PAGES; page++) {
      const res = await fetch(
        `${ARCHIVE_URL}?sort=new&limit=${PAGE_SIZE}&offset=${offset}`
      );
      if (!res.ok) break;

      const entries: ArchiveEntry[] = await res.json();
      if (entries.length === 0) break;

      posts.push(
        ...entries.map((entry) => ({
          title: entry.title,
          link: entry.canonical_url,
          pubDate: entry.post_date,
          subtitle: entry.subtitle ?? "",
          excerpt: entry.truncated_body_text ?? "",
          slug: entry.slug,
        }))
      );

      offset += entries.length;
    }
  } catch {
    return [];
  }

  return posts.filter((post) => !excludedSubstackSlugs.includes(post.slug));
}
