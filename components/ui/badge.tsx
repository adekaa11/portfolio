import type { ReactNode } from "react";

/** shadcn/ui-style Badge (outline variant). */
export function Badge({ children }: { children: ReactNode }) {
  return <span className="rounded-[7px] border border-line bg-white/[0.04] px-2 py-1 font-mono text-[11.5px] text-[#b9c3d2]">{children}</span>;
}
