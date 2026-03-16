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
  SiReact as SiReactNative,
} from "react-icons/si";
import { IconType } from "react-icons";

interface TechIcon {
  icon: IconType;
  color: string;
}

export const techIcons: Record<string, TechIcon> = {
  "HTML5": { icon: FaHtml5, color: "#E34F26" },
  "HTML/CSS": { icon: FaHtml5, color: "#E34F26" },
  "CSS3": { icon: FaCss3Alt, color: "#1572B6" },
  "JavaScript": { icon: FaJs, color: "#F7DF1E" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "React": { icon: FaReact, color: "#61DAFB" },
  "React Native": { icon: FaReact, color: "#61DAFB" },
  "Angular": { icon: FaAngular, color: "#DD0031" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "C#": { icon: SiDotnet, color: "#512BD4" },
  "Go": { icon: SiGo, color: "#00ADD8" },
  "Python": { icon: FaPython, color: "#3776AB" },
  "Java": { icon: FaJava, color: "#ED8B00" },
  "Node.js": { icon: FaNodeJs, color: "#339933" },
  "Flask": { icon: SiFlask, color: "#000000" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "Git": { icon: FaGitAlt, color: "#F05032" },
  "GitHub": { icon: FaGithub, color: "#181717" },
  "Docker": { icon: FaDocker, color: "#2496ED" },
  "Google Cloud": { icon: SiGooglecloud, color: "#4285F4" },
  "Mobile": { icon: FaReact, color: "#61DAFB" },
  "Capstone": { icon: SiGooglecloud, color: "#4285F4" },
};
