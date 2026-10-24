"use client";

import { type ReactNode, type KeyboardEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/** Aceternity-style 3D Card: tilts toward the pointer, children can use CardItem to lift on Z. */
export function Card3D({ children, className, onSelect, label }: { children: ReactNode; className?: string; onSelect?: () => void; label?: string }) {
  const rx = useSpring(0, { stiffness: 200, damping: 20 });
  const ry = useSpring(0, { stiffness: 200, damping: 20 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(0);
  const glare = useMotionTemplate`radial-gradient(500px circle at ${gx}% ${gy}%, rgba(255,255,255,.07), transparent 50%)`;

  return (
    <div className={cn("[perspective:1200px]", className)}>
      <motion.article
        role="button"
        tabIndex={0}
        aria-label={label}
        onClick={onSelect}
        onKeyDown={(e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect?.();
          }
        }}
        onMouseMove={(e) => {
          if (window.matchMedia("(pointer: coarse)").matches) return;
          const r = e.currentTarget.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          ry.set((px - 0.5) * 12);
          rx.set((0.5 - py) * 10);
          gx.set(px * 100);
          gy.set(py * 100);
        }}
        onMouseLeave={() => {
          rx.set(0);
          ry.set(0);
        }}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="group relative h-full cursor-pointer rounded-[22px] border border-line bg-[linear-gradient(160deg,#0f1520,#090c12)] p-7 transition-colors hover:border-line-2"
      >
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity group-hover:opacity-100" style={{ background: glare }} />
        {children}
      </motion.article>
    </div>
  );
}

export function CardItem({ children, z = 40, className }: { children: ReactNode; z?: number; className?: string }) {
  return (
    <div className={className} style={{ transform: `translateZ(${z}px)` }}>
      {children}
    </div>
  );
}

/** Aceternity-style 3D Pin label with a thread that drops on hover. */
export function Pin({ children }: { children: ReactNode }) {
  return (
    <span className="absolute right-[22px] top-[22px] z-10 flex items-center gap-1.5 rounded-full border border-gold/35 bg-gold/10 px-2.5 py-1 font-mono text-[11px] text-gold [transform:translateZ(60px)]">
      {children}
      <span className="absolute left-1/2 top-full h-0 w-px bg-gradient-to-b from-gold to-transparent transition-all duration-500 group-hover:h-9" />
    </span>
  );
}
