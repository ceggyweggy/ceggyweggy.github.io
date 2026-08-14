import { profile } from "@/lib/content";
import { getSubstackPosts } from "@/lib/substack";

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Substack() {
  const posts = await getSubstackPosts();

  return (
    <section className="py-16 sm:py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Substack</h2>
      <p className="mt-2 text-sm text-muted">
        Writing over on{" "}
        <a
          href={profile.social.substack}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline-offset-4 hover:underline"
        >
          slippy slide
        </a>
        .
      </p>

      {posts.length === 0 ? (
        <p className="mt-8 max-w-xl text-sm leading-6 text-muted">
          Couldn&apos;t load posts right now — check the{" "}
          <a
            href={profile.social.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline-offset-4 hover:underline"
          >
            Substack
          </a>{" "}
          directly.
        </p>
      ) : (
        <div className="mt-8 rounded-lg border border-white/10">
          {posts.map((post) => (
            <a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-white/10 p-5 transition-colors last:border-b-0 hover:bg-white/[.03]"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium group-hover:text-accent group-hover:underline">
                  {post.title}
                </h3>
                <span className="shrink-0 text-xs text-muted">
                  {formatDate(post.pubDate)}
                </span>
              </div>
              {post.subtitle ? (
                <p className="mt-1 text-sm text-muted">{post.subtitle}</p>
              ) : null}
              {post.excerpt ? (
                <p className="mt-3 text-sm leading-6 text-muted/80">
                  {post.excerpt}
                </p>
              ) : null}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
