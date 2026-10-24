/** Aceternity-style Spotlight + Grid and Dot backgrounds + pointer glow. Place inside a `relative isolate overflow-hidden` section. */
export function SpotlightBackground() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-55 [background-image:linear-gradient(#1a2230_1px,transparent_1px),linear-gradient(90deg,#1a2230_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_30%,transparent_80%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-50 [background-image:radial-gradient(#263246_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(180deg,transparent,#000_60%,transparent)]"
      />
      <div
        aria-hidden
        className="absolute -left-[260px] -top-[360px] -z-10 h-[700px] w-[1100px] -rotate-[28deg] animate-spot blur-[10px] [background:radial-gradient(ellipse_at_center,rgba(94,196,240,.22),rgba(94,196,240,.06)_40%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute -right-[380px] -top-[300px] -z-10 h-[700px] w-[1100px] rotate-[26deg] animate-spot blur-[10px] [animation-delay:.3s] [background:radial-gradient(ellipse_at_center,rgba(240,191,85,.12),transparent_65%)]"
      />
    </>
  );
}
