import { Hero } from "@/components/sections/Hero";
import { Showcase } from "@/components/sections/Showcase";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <About />
      <Projects />
    </>
  );
}
