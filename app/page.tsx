import { Cursor } from "@/components/ui/cursor";
import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Timeline } from "@/components/sections/timeline";
import { Stack } from "@/components/sections/stack";
import { SoftSkills } from "@/components/sections/soft-skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Timeline />
        <Stack />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
