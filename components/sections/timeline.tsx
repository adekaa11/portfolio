"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export function Timeline() {
  const [active, setActive] = useState(0);

  return (
    <section id="timeline" className="bg-gradient-to-b from-transparent via-bg-2 to-transparent py-24">
      <div className="mx-auto max-w-[1180px] px-4">
        <div className="eyebrow">Achievements &amp; leadership</div>
        <h2 className="h2">Stage time, podiums and the teams behind them</h2>

        <div className="mt-14 grid gap-10 md:grid-cols-[280px_1fr]">
          <div role="tablist" aria-label="Achievements" className="flex gap-1 overflow-x-auto pb-1.5 md:flex-col md:overflow-visible">
            {timeline.map((t, i) => (
              <button
                key={t.tab}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`relative flex items-center gap-3.5 whitespace-nowrap rounded-xl px-3.5 py-3 text-left text-[14.5px] font-semibold transition-colors ${
                  active === i ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === i && (
                  <motion.span layoutId="tl-active" className="absolute inset-0 -z-0 rounded-xl bg-bg-2 ring-1 ring-line-2" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
                <span className={`relative w-6 font-mono text-[11px] ${active === i ? "text-gold" : "text-dim"}`}>{String(i + 1).padStart(2, "0")}</span>
                <span className="relative">{t.tab}</span>
              </button>
            ))}
          </div>

          <div className="relative min-w-0 border-l border-line pl-[22px] md:pl-9">
            {timeline.map((t, i) => {
              const on = active === i;
              return (
                <div key={t.tab} onClick={() => setActive(i)} className={`relative cursor-pointer pb-[30px] transition-opacity duration-300 ${on ? "opacity-100" : "opacity-45"}`}>
                  <span
                    className={`absolute -left-[27.5px] top-2 h-[11px] w-[11px] rounded-full border-2 transition-all duration-300 md:-left-[41.5px] ${
                      on ? "border-gold bg-gold shadow-[0_0_0_6px_rgba(240,191,85,.13)]" : "border-line-2 bg-bg"
                    }`}
                  />
                  <div className="font-mono text-xs tracking-[0.06em] text-dim">{t.when}</div>
                  <h4 className={`my-1.5 font-display text-xl font-semibold transition-colors ${on ? "text-gold" : ""}`}>
                    {t.title}
                    {t.medal && <span className="ml-2 rounded-md border border-line-2 px-2 py-0.5 align-middle font-mono text-[11px] text-fg">{t.medal}</span>}
                  </h4>
                  <p className="max-w-[58ch] text-[15px] text-muted">{t.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
