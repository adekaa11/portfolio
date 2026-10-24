"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { profile, socials } from "@/lib/data";
import { Magnetic } from "@/components/ui/magnetic";

type Status = { kind: "idle" | "error" | "ok"; text: string };

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle", text: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the address stays selectable */
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const email = String(f.get("email") ?? "").trim();
    const message = String(f.get("message") ?? "").trim();
    if (!name || !email || !message) return setStatus({ kind: "error", text: "Fill in your name, email and message first." });
    if (!/^\S+@\S+\.\S+$/.test(email)) return setStatus({ kind: "error", text: "That email address looks incomplete. Check it and try again." });

    const subject = encodeURIComponent(`Portfolio: message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus({ kind: "ok", text: "Your mail app should open with the message filled in. If it doesn't, write to the address on the left." });
  };

  const field =
    "peer w-full resize-y rounded-[14px] border border-line-2 bg-bg px-4 pb-2.5 pt-[22px] text-[15px] text-fg transition focus:border-sky focus:outline-none focus:ring-4 focus:ring-sky/15";
  const label = "pointer-events-none absolute left-[17px] top-4 text-[15px] text-dim transition-all";

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-[1180px] px-4">
        <div className="eyebrow">Contact</div>
        <h2 className="h2">Got a hackathon, a project or a question?</h2>

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.1fr]">
          <div className="min-w-0">
            <div className="mt-2.5 select-all break-all font-display text-[clamp(17px,2.4vw,26px)] font-semibold">{profile.email}</div>
            <button type="button" onClick={copyEmail} className="btn mt-3.5">
              {copied ? "Copied ✓" : "Copy email"}
            </button>
            <div className="mt-[26px] flex flex-col border-t border-line">
              {[...socials, { id: "demo", label: "Demo", handle: "wastewise-kz.streamlit.app", href: "https://wastewise-kz.streamlit.app" }].map((s) => (
                <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 border-b border-line py-4 font-semibold">
                  <span>
                    <span className="mr-2 font-mono text-xs font-normal text-dim">{s.label}</span>
                    {s.handle}
                  </span>
                  <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold">↗</span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3.5">
            <div className="field relative">
              <input id="name" name="name" placeholder=" " autoComplete="name" className={field} />
              <label htmlFor="name" className={label}>Your name</label>
            </div>
            <div className="field relative">
              <input id="email" name="email" type="email" placeholder=" " autoComplete="email" className={field} />
              <label htmlFor="email" className={label}>Your email</label>
            </div>
            <div className="field relative">
              <textarea id="message" name="message" placeholder=" " className={`${field} min-h-[130px]`} />
              <label htmlFor="message" className={label}>Message</label>
            </div>
            <Magnetic strength={0.15}>
              <motion.button type="submit" whileTap={{ scale: 0.97 }} className="btn btn-primary relative w-full justify-center overflow-hidden py-4">
                <motion.span
                  aria-hidden
                  className="absolute inset-0 bg-gold"
                  initial={false}
                  animate={{ x: status.kind === "ok" ? "0%" : "-101%" }}
                  transition={{ duration: 0.5, ease: [0.7, 0, 0.2, 1] }}
                />
                <span className="relative">{status.kind === "ok" ? "Opening mail ✓" : "Send message"}</span>
              </motion.button>
            </Magnetic>
            <p role="status" className={`min-h-5 text-[13px] ${status.kind === "error" ? "text-[#f08a7a]" : "text-muted"}`}>
              {status.text}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
