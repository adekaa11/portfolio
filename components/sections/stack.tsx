import { stack } from "@/lib/data";

export function Stack() {
  return (
    <section id="stack" className="py-24">
      <div className="mx-auto max-w-[1180px] px-4">
        <div className="eyebrow">Tech stack</div>
        <h2 className="h2">The tools I reach for</h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[20px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((c) => (
            <div key={c.title} className="min-w-0 bg-bg p-[26px] transition-colors hover:bg-bg-2">
              <div className="ptag text-sky">{c.key}</div>
              <h4 className="mb-[18px] mt-3.5 font-display text-lg font-semibold">{c.title}</h4>
              <ul className="flex flex-col gap-[9px]">
                {c.items.map(([name, note]) => (
                  <li key={name} className="flex justify-between gap-2.5 border-b border-dashed border-line pb-[9px] text-[14.5px] last:border-b-0">
                    <span>{name}</span>
                    <span className="font-mono text-[11px] text-dim">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
