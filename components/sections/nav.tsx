const links = [
  ["#work", "Projects"],
  ["#timeline", "Timeline"],
  ["#stack", "Stack"],
  ["#contact", "Contact"],
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[60px] max-w-[1180px] items-center justify-between gap-4 px-4">
        <a href="#top" className="font-display text-[15px] font-extrabold tracking-wide">
          AK<span className="text-gold">.</span>
        </a>
        <div className="hidden gap-[22px] text-sm text-muted md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="hover:text-fg">
              {label}
            </a>
          ))}
        </div>
        <span className="pill">
          <i className="h-[7px] w-[7px] rounded-full bg-[#43d98a] shadow-[0_0_10px_#43d98a]" />
          Open to hackathons
        </span>
      </div>
    </nav>
  );
}
