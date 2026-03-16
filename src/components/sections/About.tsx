"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiDotnet,
  SiFlask,
  SiPostgresql,
  SiGooglecloud,
  SiGo,
} from "react-icons/si";

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Angular", icon: FaAngular, color: "#DD0031" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "C#", icon: SiDotnet, color: "#512BD4" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Flask", icon: SiFlask, color: "#000000" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    ],
  },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-neutral-50">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm uppercase tracking-widest text-neutral-400 mb-2">
            About
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mb-8">
            A bit about me
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-neutral-500 leading-relaxed">
              <p>
                I&apos;m a Software Development graduate from SAIT, currently
                attending the University of Lethbridge to finish my Computer
                Science degree. I have a passion for building clean, performant
                web applications and enjoy working across the full stack, from
                crafting responsive interfaces to designing robust backend
                systems.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies and working on personal projects to sharpen my
                skills.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-8">
              {techStack.map((group) => (
                <div key={group.category}>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-900 mb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex flex-col items-center gap-1 group"
                        title={item.name}
                      >
                        <item.icon
                          size={28}
                          className="text-neutral-400 transition-colors group-hover:text-[var(--icon-color)]"
                          style={{ "--icon-color": item.color } as React.CSSProperties}
                        />
                        <span className="text-[10px] text-neutral-400">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
