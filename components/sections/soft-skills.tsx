import { languages, softSkills } from "@/lib/data";

export function SoftSkills() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1180px] px-4">
        <div className="eyebrow">Soft skills &amp; languages</div>
        <h2 className="h2">Code is half the job</h2>
        <div className="mt-14 grid gap-[22px] md:grid-cols-2">
          <div className="min-w-0 rounded-[20px] border border-line bg-bg-2 p-7">
            <h4 className="mb-5 font-display text-lg font-semibold">How I work with people</h4>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span key={s} className="rounded-full border border-line-2 px-3.5 py-2 text-sm font-semibold">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="min-w-0 rounded-[20px] border border-line bg-bg-2 p-7">
            <h4 className="mb-5 font-display text-lg font-semibold">Languages</h4>
            {languages.map((l) => (
              <div key={l.code} className="grid grid-cols-[64px_1fr_auto] items-center gap-3.5 border-b border-line py-3 last:border-b-0">
                <span className="font-display text-xl font-extrabold">{l.code}</span>
                <span className="h-1.5 overflow-hidden rounded-full bg-line">
                  <i className="block h-full rounded-full bg-gradient-to-r from-sky to-gold" style={{ width: `${l.pct}%` }} />
                </span>
                <span className="whitespace-nowrap font-mono text-xs text-muted">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
