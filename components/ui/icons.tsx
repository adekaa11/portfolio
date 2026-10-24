export function SocialIcon({ id, className = "h-4 w-4" }: { id: string; className?: string }) {
  if (id === "github")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.2 4.7 18.2 5 18.2 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  if (id === "telegram")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2l-11 6.9L1.8 11.7c-1-.3-1-1 .2-1.5L20.5 3c.9-.3 1.6.2 1.4 1.3Z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
    </svg>
  );
}
