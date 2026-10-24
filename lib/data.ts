export const profile = {
  name: "Adilzhan",
  surname: "Kadyrgazhy",
  school: "9A · NIS Astana-Nura",
  focus: "CS & AI Engineering",
  location: "Astana, KZ · UTC+5",
  email: "kadyrgazhyadilzhan@gmail.com",
  roles: ["AI Engineer", "Daryn Winner", "NIS Student", "TEDx Organizer", "Team Lead"],
  bio: "I'm a 9th-grade student at NIS Astana-Nura, previously NIS Semey. I train computer-vision models, ship Python backends and lead hackathon teams. My flagship, WasteWise, sorts waste with YOLO and is built for schools across Kazakhstan.",
  facts: [
    { k: "GPA", v: "4.5–5.0" },
    { k: "IELTS", v: "5.5" },
    { k: "Дарын", v: "2nd" },
  ],
};

export const socials = [
  { id: "github", label: "GitHub", handle: "adekaa11", href: "https://github.com/adekaa11" },
  { id: "telegram", label: "Telegram", handle: "@crybaby_c", href: "https://t.me/crybaby_c" },
  { id: "instagram", label: "Instagram", handle: "@_kadyrgazhy_a", href: "https://instagram.com/_kadyrgazhy_a" },
] as const;

export type Project = {
  id: string;
  tag: string;
  title: string;
  summary: string;
  pin?: string;
  badges: string[];
  arch: [string, string][];
  link?: { href: string; label: string };
};

export const projects: Project[] = [
  {
    id: "wastewise",
    tag: "Flagship · AI / CV",
    title: "WasteWise",
    summary:
      "An AI waste-sorting service. Point a camera at trash, YOLO classifies it into 7 categories, and a GPT-4o-mini consultant explains where it goes. Schools compete through a gamified eco-box network.",
    badges: ["Python", "YOLO", "OpenAI API", "Supabase", "Streamlit", "GitHub Actions"],
    arch: [
      ["Vision", "YOLO (Ultralytics), 7 waste classes, 85.7% accuracy"],
      ["Assistant", "GPT-4o-mini consultant explaining how to dispose of each item"],
      ["Gamification", "School leaderboards across 1000+ eco-boxes in 129 schools"],
      ["Data", "Supabase (Postgres)"],
      ["Frontend", "Streamlit"],
      ["DevOps", "CI/CD with GitHub Actions"],
    ],
    link: { href: "https://wastewise-kz.streamlit.app", label: "Open live demo" },
  },
  {
    id: "lura",
    tag: "Research · Analytics",
    title: "LURA",
    pin: "🥈 Дарын · 2nd place",
    summary:
      "An intelligent system that monitors a business and runs automated analysis of its performance. Took 2nd place at the «Дарын» scientific projects competition.",
    badges: ["Python", "OpenAI API", "SQLite"],
    arch: [
      ["Input", "Business metrics and operating data"],
      ["Analysis", "Automated analysis pipeline with LLM-generated insights"],
      ["Output", "Reports and alerts for the owner"],
      ["Result", "2nd place, «Дарын» scientific projects competition"],
    ],
  },
  {
    id: "ventorme",
    tag: "Frontend · Case Ventorme",
    title: "Ventorme Landing",
    pin: "Hacknext 2026",
    summary: "Led team «The Naimandar» on the Ventorme case and built the promo landing page myself.",
    badges: ["HTML/CSS", "JavaScript", "Netlify"],
    arch: [
      ["Role", "Team Lead & Frontend Developer"],
      ["Team", "The Naimandar, 4 people"],
      ["Build", "Hand-written HTML, CSS and JavaScript"],
      ["Deploy", "Netlify"],
    ],
    link: { href: "https://ventorme-team.netlify.app", label: "Open landing" },
  },
];

export const hackathons = [
  { event: "VentureHack 2026", org: "Venture KZ", title: "Open Innovation track", text: "An AI service built in Python for the open innovation track.", role: "Team Lead" },
  { event: "Hackathon", org: "Backend", title: "Атлас кампусов", text: "A university campus photo search service. I designed the FastAPI REST backend.", role: "Team Lead · Backend Dev" },
  { event: "Hacknext 2026", org: "Ventorme", title: "The Naimandar", text: "Four-person team on a real business case, from research to a live landing.", role: "Team Lead · Frontend Dev" },
];

export const timeline = [
  { tab: "Дарын", when: "Science projects contest", title: "2nd place · «Дарын»", medal: "🥈", text: "Presented LURA, an intelligent business monitoring and analytics system, and took second place in the national scientific projects competition." },
  { tab: "NIS Jedi Cup", when: "Debate · NIS Semey", title: "Finalist, NIS Jedi Cup", medal: "Final", text: "Reached the final of the NIS Jedi Cup debate tournament. Fast argument building under time pressure." },
  { tab: "Model UN", when: "Diplomacy", title: "Model United Nations delegate", text: "Represented countries at MUN conferences: drafting resolutions, negotiating blocs and speaking in committee." },
  { tab: "TEDx Semey", when: "City event", title: "TEDx organizer, Semey", text: "Helped run a city-wide TEDx event in Semey, coordinating the organizing team, and organized 4 school events." },
  { tab: "Informatics", when: "Olympiads", title: "Informatics olympiads", text: "Competitive programming in C++: algorithms and data structures." },
  { tab: "Student council", when: "NIS Semey · 2025–2026", title: "Assistant to the School President’s Secretary", text: "Worked inside the student government on events, communication and coordination." },
];

export const stack = [
  { key: "/ lang", title: "Programming", items: [["Python", "main"], ["C++", "olymp"], ["JavaScript", "web"], ["HTML / CSS", "web"], ["Algorithmic Logic", "DSA"]] },
  { key: "/ server", title: "Backend & API", items: [["FastAPI", "REST"], ["aiogram", "bots"], ["SQLite", "db"], ["REST API", "design"]] },
  { key: "/ ml", title: "AI Engineering", items: [["YOLO", "Ultralytics"], ["CLIP / SigLIP", "embed"], ["OpenAI API", "LLM"], ["Prompt Engineering", "craft"]] },
  { key: "/ ship", title: "Tools & Deploy", items: [["Git", "vcs"], ["GitHub", "CI/CD"], ["Streamlit", "apps"], ["Vercel", "hosting"]] },
] as const;

export const softSkills = ["Public speaking", "Debate", "Team leadership", "Event organizing", "Diplomacy · MUN", "Pitching"];

export const languages = [
  { code: "KZ", level: "Native", pct: 100 },
  { code: "RU", level: "Native", pct: 100 },
  { code: "EN", level: "IELTS 5.5", pct: 61 },
];
