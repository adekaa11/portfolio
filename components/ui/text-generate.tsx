"use client";

import { motion } from "framer-motion";

/** Aceternity-style Text Generate Effect: words fade in one by one. Words in `highlight` render brighter. */
export function TextGenerate({ text, highlight = [], className }: { text: string; highlight?: string[]; className?: string }) {
  const words = text.split(" ");
  return (
    <p className={className}>
      {words.map((w, i) => {
        const clean = w.replace(/[.,]/g, "");
        return (
          <motion.span
            key={i}
            className={highlight.includes(clean) ? "font-semibold text-fg" : undefined}
            initial={{ opacity: 0.08, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.3 + i * 0.045, duration: 0.5 }}
          >
            {w}{" "}
          </motion.span>
        );
      })}
    </p>
  );
}
