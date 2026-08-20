import { nowThen } from "@/lib/content";

export default function NowThen() {
  return (
    <section className="py-16 sm:py-20">
      <h2 className="text-2xl font-semibold tracking-tight">Now-then</h2>
      <div>
        {nowThen.map(({updated, text}) => 
            <>
            <p className="mt-2 text-sm text-muted">
                Date: {updated}
            </p>
            <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
                {text}
            </p>
            </>
        )}
      </div>
    </section>
  );
}
