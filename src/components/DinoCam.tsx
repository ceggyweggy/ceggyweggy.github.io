import Image from "next/image";
import { dinoCam } from "@/lib/content";

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function DinoCam() {
  return (
    <section className="py-16 sm:py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Dino Cam</h2>

      {dinoCam.length === 0 ? (
        <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
          Photos coming soon.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-1 sm:grid-cols-3">
          {dinoCam.map((item) => (
            <div
              key={item.src}
              className="group relative aspect-square overflow-hidden bg-white/[.03]"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-background/80 p-3 text-center opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-xs font-medium tracking-wide text-accent">
                  {formatDate(item.date)}
                </p>
                <p className="text-sm text-foreground">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
