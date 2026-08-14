import data from "./substack-posts.json";
import { excludedSubstackSlugs } from "./substack-excluded";

export type SubstackPost = {
  title: string;
  link: string;
  pubDate: string;
  subtitle: string;
  excerpt: string;
  slug: string;
};

export function getSubstackFetchedAt(): string {
  return data.fetchedAt;
}

export function getSubstackPosts(): SubstackPost[] {
  return data.posts.filter((post) => !excludedSubstackSlugs.includes(post.slug));
}
