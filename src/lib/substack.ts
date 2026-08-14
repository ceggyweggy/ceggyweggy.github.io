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
const FEED_URL = "https://slippyslide.substack.com/feed";
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

async function fetchFromArchive(): Promise<SubstackPost[]> {
  const posts: SubstackPost[] = [];
  let offset = 0;

  for (let page = 0; page < MAX_PAGES; page++) {
    const res = await fetch(
      `${ARCHIVE_URL}?sort=new&limit=${PAGE_SIZE}&offset=${offset}`
    );
    if (!res.ok) {
      console.error(
        `[substack] archive fetch failed: ${res.status} ${res.statusText}`
      );
      break;
    }

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

  return posts;
}

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

function decodeEntities(text: string) {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) =>
      String.fromCharCode(parseInt(code, 16))
    )
    .replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (_, name) => NAMED_ENTITIES[name]);
}

function stripTags(html: string) {
  return decodeEntities(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ")).trim();
}

function extractTag(block: string, tag: string) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  if (!match) return "";
  return match[1].replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/, "$1");
}

function openingWords(text: string, wordCount = 40) {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= wordCount) return words.join(" ");
  return `${words.slice(0, wordCount).join(" ")}…`;
}

async function fetchFromFeed(): Promise<SubstackPost[]> {
  const res = await fetch(FEED_URL);
  if (!res.ok) {
    console.error(`[substack] feed fetch failed: ${res.status} ${res.statusText}`);
    return [];
  }

  const xml = await res.text();
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

  return items.map((item) => {
    const link = extractTag(item, "link").trim();
    return {
      title: decodeEntities(extractTag(item, "title")),
      link,
      pubDate: extractTag(item, "pubDate").trim(),
      subtitle: stripTags(extractTag(item, "description")),
      excerpt: openingWords(stripTags(extractTag(item, "content:encoded"))),
      slug: link.split("/p/")[1] ?? link,
    };
  });
}

export async function getSubstackPosts(): Promise<SubstackPost[]> {
  let posts: SubstackPost[] = [];

  try {
    posts = await fetchFromArchive();
    if (posts.length > 0) {
      console.log(`[substack] loaded ${posts.length} posts from archive`);
    }
  } catch (err) {
    console.error("[substack] archive fetch threw:", err);
  }

  if (posts.length === 0) {
    try {
      posts = await fetchFromFeed();
      if (posts.length > 0) {
        console.log(`[substack] loaded ${posts.length} posts from feed fallback`);
      }
    } catch (err) {
      console.error("[substack] feed fetch threw:", err);
    }
  }

  return posts.filter((post) => !excludedSubstackSlugs.includes(post.slug));
}
