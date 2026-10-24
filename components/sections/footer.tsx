export function Footer() {
  return (
    <footer className="border-t border-line py-[30px] text-[13px] text-dim">
      <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-3 px-4">
        <span>© {new Date().getFullYear()} Adilzhan Kadyrgazhy · Astana</span>
        <span>Next.js · Tailwind · Framer Motion · Vercel</span>
      </div>
    </footer>
  );
}
