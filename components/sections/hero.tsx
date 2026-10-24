"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { profile, socials } from "@/lib/data";
import { SpotlightBackground } from "@/components/ui/spotlight";
import { TextLoop } from "@/components/ui/text-loop";
import { TextGenerate } from "@/components/ui/text-generate";
import { Magnetic } from "@/components/ui/magnetic";
import { SocialIcon } from "@/components/ui/icons";

export function Hero() {
  const mx = useMotionValue(-999);
  const my = useMotionValue(-999);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(94,196,240,.08), transparent 60%)`;

  return (
    <header
      id="top"
      className="relative isolate overflow-hidden pb-[90px] pt-[110px]"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
    >
      <SpotlightBackground />
      <motion.div aria-hidden className="absolute inset-0 -z-10" style={{ background: glow }} />

      <div className="mx-auto max-w-[1180px] px-4">
        <div className="flex flex-wrap gap-2.5">
          <span className="pill">{profile.school}</span>
          <span className="pill">{profile.focus}</span>
          <span className="pill">{profile.location}</span>
        </div>

        <h1 className="mt-7 font-display text-[clamp(40px,9vw,112px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
          {profile.name}
          <span className="block text-transparent [-webkit-text-stroke:1.2px_#8793a6]">{profile.surname}</span>
        </h1>

        <div className="mt-7 flex flex-wrap items-baseline gap-[0.4em] font-display text-[clamp(20px,3.4vw,34px)]">
          <span className="text-muted">I build as</span>
          <TextLoop items={profile.roles} className="min-h-[1.2em] text-gold" />
        </div>

        <div className="mt-11 grid items-end gap-8 md:grid-cols-[1.3fr_1fr]">
          <TextGenerate
            text={profile.bio}
            highlight={["9th-grade", "NIS", "Astana-Nura", "Python", "WasteWise"]}
            className="min-w-0 max-w-[56ch] text-[17px] text-muted"
          />
          <div className="grid grid-cols-3 overflow-hidden rounded-[14px] border border-line bg-bg-2/60">
            {profile.facts.map((f) => (
              <div key={f.k} className="border-r border-line p-4 last:border-r-0">
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-dim">{f.k}</div>
                <div className="mt-1 font-display text-[22px] font-semibold tabular-nums">{f.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-2.5">
          {socials.map((s, i) => (
            <Magnetic key={s.id}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className={i === 0 ? "btn btn-primary" : "btn"}>
                <SocialIcon id={s.id} />
                {s.handle}
              </a>
            </Magnetic>
          ))}
        </div>
      </div>
    </header>
  );
}
