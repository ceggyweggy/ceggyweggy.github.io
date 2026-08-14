// Refreshes src/lib/substack-posts.json from the Substack archive API.
//
// This has to run locally (or anywhere not on a GitHub Actions IP): Substack
// sits behind Cloudflare, and Cloudflare serves a JS challenge instead of
// data to GitHub Actions' shared runner IP range, so this can't run in CI.
//
// Usage: npm run fetch:substack

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const ARCHIVE_URL = "https://slippyslide.substack.com/api/v1/archive";
const PAGE_SIZE = 50;
const MAX_PAGES = 20; // safety cap against a runaway loop
const OUTPUT_PATH = fileURLToPath(
  new URL("../src/lib/substack-posts.json", import.meta.url)
);

async function fetchAllPosts() {
  const posts = [];
  let offset = 0;

  for (let page = 0; page < MAX_PAGES; page++) {
    const res = await fetch(
      `${ARCHIVE_URL}?sort=new&limit=${PAGE_SIZE}&offset=${offset}`
    );
    if (!res.ok) {
      throw new Error(`archive fetch failed: ${res.status} ${res.statusText}`);
    }

    const entries = await res.json();
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

const posts = await fetchAllPosts();
const data = { fetchedAt: new Date().toISOString(), posts };

await writeFile(OUTPUT_PATH, `${JSON.stringify(data, null, 2)}\n`);
console.log(`Wrote ${posts.length} posts to ${OUTPUT_PATH}`);
