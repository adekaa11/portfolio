import type { ReactNode } from "react";

/** Skiper/CULT-style Shift Card: card lifts up-left while its shadow plate shifts down-right. */
export function ShiftCard({ children }: { children: ReactNode }) {
  return (
    <div className="group relative z-0 min-w-0">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-[18px] bg-line-2 transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:bg-sky/15"
      />
      <div className="h-full rounded-[18px] border border-line bg-bg-2 p-[22px] transition-all duration-300 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 group-hover:border-sky">
        {children}
      </div>
    </div>
  );
}
