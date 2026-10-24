import type { CSSProperties } from "react";

/** BorderTrail: a neon beam that travels around the parent's border. Parent needs `relative` + rounded corners. */
export function BorderTrail({ duration = 5, from = "#5ec4f0", to = "#f0bf55" }: { duration?: number; from?: string; to?: string }) {
  return (
    <div
      aria-hidden
      className="border-trail"
      style={{ "--trail-duration": `${duration}s`, "--trail-a": from, "--trail-b": to } as CSSProperties}
    />
  );
}
