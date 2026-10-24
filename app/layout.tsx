import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope, Unbounded } from "next/font/google";
import "./globals.css";

const display = Unbounded({ subsets: ["latin", "cyrillic"], weight: ["400", "600", "800"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin", "cyrillic"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Adilzhan Kadyrgazhy — CS & AI Engineering",
  description: "Portfolio of Adilzhan Kadyrgazhy: WasteWise, LURA, hackathons, achievements and tech stack.",
  openGraph: {
    title: "Adilzhan Kadyrgazhy",
    description: "CS & AI Engineering · NIS Astana-Nura · Astana, Kazakhstan",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#06080c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
