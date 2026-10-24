"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** TextLoop + TextMorph: cycles words, animating each character in. */
export function TextLoop({ items, interval = 2600, className }: { items: string[]; interval?: number; className?: string }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((v) => (v + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  return (
    <span className={className} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span key={items[i]} className="inline-flex" exit={{ opacity: 0, y: -10, filter: "blur(4px)" }} transition={{ duration: 0.25 }}>
          {items[i].split("").map((ch, idx) => (
            <motion.span
              key={idx}
              className="inline-block whitespace-pre"
              initial={{ opacity: 0, y: "0.5em", rotateX: -70, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              transition={{ delay: idx * 0.028, type: "spring", stiffness: 260, damping: 18 }}
            >
              {ch}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
