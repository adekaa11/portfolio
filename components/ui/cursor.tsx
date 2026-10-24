"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Motion Primitives-style Cursor: spring-follow ring + exact dot, grows over interactive elements. */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 380, damping: 28, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.body.classList.add("has-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHovering(Boolean(target?.closest("a,button,[role='button'],[role='tab']")));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("has-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] rounded-full border-[1.5px] border-white mix-blend-difference"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: hovering ? 72 : 38, height: hovering ? 72 : 38, backgroundColor: hovering ? "#fff" : "rgba(255,255,255,0)" }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
