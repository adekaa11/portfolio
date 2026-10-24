import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#06080c",
        "bg-2": "#0c1017",
        line: "#1a2230",
        "line-2": "#263246",
        fg: "#e9eef5",
        muted: "#8793a6",
        dim: "#566174",
        sky: "#5ec4f0",
        gold: "#f0bf55",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        spot: { from: { opacity: "0", translate: "-80px -60px" }, to: { opacity: "1", translate: "0 0" } },
        scan: { "0%,100%": { top: "-40px" }, "50%": { top: "100%" } },
      },
      animation: {
        spot: "spot 2.2s cubic-bezier(.2,.8,.2,1) both",
        scan: "scan 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
