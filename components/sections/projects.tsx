"use client";

import { useEffect, useState } from "react";
import { animate, useInView } from "framer-motion";
import { useRef } from "react";
import { hackathons, projects, type Project } from "@/lib/data";
import { Card3D, CardItem, Pin } from "@/components/ui/card-3d";
import { BorderTrail } from "@/components/ui/border-trail";
import { Badge } from "@/components/ui/badge";
import { Dialog } from "@/components/ui/dialog";
import { ShiftCard } from "@/components/ui/shift-card";

const CLASSES = ["PET", "GLS", "PAP", "MET", "ORG", "CRD", "MIX"];

function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const fmt = (v: number) => v.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
  const [text, setText] = useState(fmt(to));

  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = animate(0, to, { duration: 1.4, ease: [0.2, 0.8, 0.2, 1], onUpdate: (v) => setText(fmt(v)) });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, to]);

  return <span ref={ref}>{text}</span>;
}

function ScanViz() {
  const [heights, setHeights] = useState([72, 48, 64, 38, 55, 44, 30]);
  const top = heights.indexOf(Math.max(...heights));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      const t = Math.floor(Math.random() * 7);
      setHeights(CLASSES.map((_, i) => (i === t ? 85 + Math.random() * 12 : 20 + Math.random() * 50)));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mt-6 overflow-hidden rounded-2xl border border-line bg-[#070a0f] p-4">
      <div aria-hidden className="absolute inset-x-0 h-10 animate-scan bg-gradient-to-b from-transparent via-sky/10 to-transparent" />
      <div className="flex justify-between gap-2 font-mono text-xs text-dim">
        <span>yolo.predict() · 7 classes</span>
        <span>mAP ▸ 85.7%</span>
      </div>
      <div className="mt-3.5 grid h-[110px] grid-cols-7 items-end gap-1.5">
        {heights.map((h, i) => (
          <div
            key={i}
            className={`rounded-t-md rounded-b-sm transition-[height] duration-1000 ease-[cubic-bezier(.2,.8,.2,1)] ${
              i === top ? "bg-gradient-to-b from-gold to-gold/15" : "bg-gradient-to-b from-sky to-sky/15"
            }`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-1.5 grid grid-cols-7 gap-1.5 text-center font-mono text-[10px] text-dim">
        {CLASSES.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ p, onOpen, flagship }: { p: Project; onOpen: () => void; flagship?: boolean }) {
  return (
    <Card3D onSelect={onOpen} label={`${p.title} details`} className={flagship ? "md:row-span-2" : undefined}>
      {flagship && <BorderTrail />}
      {p.pin && <Pin>{p.pin}</Pin>}
      <CardItem z={40}>
        <div className="ptag">
          <span className="text-gold">{p.tag}</span>
          {flagship && <span>2025 — now</span>}
        </div>
        <h3 className="mb-2.5 mt-[18px] font-display text-[clamp(26px,3vw,40px)] font-semibold tracking-[-0.02em]">{p.title}</h3>
        <p className="max-w-[52ch] text-muted">{p.summary}</p>
      </CardItem>
      {flagship && (
        <CardItem z={22}>
          <ScanViz />
          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {[
              { n: <Counter to={85.7} decimals={1} />, t: "accuracy, %" },
              { n: <Counter to={1000} suffix="+" />, t: "eco-boxes" },
              { n: <Counter to={129} />, t: "schools in KZ" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display text-[clamp(20px,2.4vw,28px)] font-semibold tabular-nums">{s.n}</div>
                <div className="text-xs text-dim">{s.t}</div>
              </div>
            ))}
          </div>
        </CardItem>
      )}
      <CardItem z={22}>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.badges.map((b) => (
            <Badge key={b}>{b}</Badge>
          ))}
        </div>
        <span className="mt-[22px] inline-flex text-[13px] font-semibold text-sky">Architecture →</span>
      </CardItem>
    </Card3D>
  );
}

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-[1180px] px-4">
        <div className="eyebrow">Flagship projects</div>
        <h2 className="h2">Things I&apos;ve shipped, judged and pitched</h2>
        <p className="mt-4 max-w-[60ch] text-muted">Click any card for the architecture breakdown.</p>

        <div className="mt-14 grid gap-[22px] md:grid-cols-[1.25fr_1fr]">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} flagship={i === 0} onOpen={() => setOpen(p)} />
          ))}
        </div>

        <div className="mt-[22px] grid gap-4 md:grid-cols-3">
          {hackathons.map((h) => (
            <ShiftCard key={h.title}>
              <div className="ptag mb-3">
                <span className="text-gold">{h.event}</span>
                <span>{h.org}</span>
              </div>
              <h4 className="mb-2 font-display text-[19px] font-semibold">{h.title}</h4>
              <p className="text-[14.5px] text-muted">{h.text}</p>
              <div className="mt-3.5 text-[13px] font-semibold">{h.role}</div>
            </ShiftCard>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onClose={() => setOpen(null)} labelledBy="project-title">
        {open && (
          <>
            <div className="ptag pr-12">
              <span className="text-gold">{open.tag}</span>
            </div>
            <h3 id="project-title" className="mb-1.5 mt-2.5 font-display text-[26px] font-semibold">
              {open.title}
            </h3>
            <p className="text-muted">{open.summary}</p>
            <div className="my-5 flex flex-col gap-2">
              {open.arch.map(([k, v]) => (
                <div key={k} className="grid gap-1 rounded-[10px] border border-line bg-bg px-3 py-2.5 text-sm sm:grid-cols-[110px_1fr] sm:gap-3">
                  <b className="pt-0.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.06em] text-sky">{k}</b>
                  <span>{v}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {open.badges.map((b) => (
                <Badge key={b}>{b}</Badge>
              ))}
            </div>
            {open.link && (
              <a href={open.link.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-[22px]">
                {open.link.label} ↗
              </a>
            )}
          </>
        )}
      </Dialog>
    </section>
  );
}
