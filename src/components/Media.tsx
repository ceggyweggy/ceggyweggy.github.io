import Image from "next/image";
import { media } from "@/lib/content";

export default function Media() {
  return (
    <section className="py-16 sm:py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Media</h2>

      {media.length === 0 ? (
        <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
          Photos coming soon.
        </p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {media.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-lg border border-white/10"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
              {item.caption ? (
                <figcaption className="p-3 text-sm text-muted">
                  {item.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
