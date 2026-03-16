export const siteConfig = {
  name: "Kyle Guenter",
  title: "Software Engineer",
  email: "kyleguenter25@gmail.com",
  github: "https://github.com/KJG19",
  linkedin: "https://www.linkedin.com/in/kyle-guenter-ab53b8299/",
  description:
    "I build clean, fast, and user-friendly web applications. SAIT Software Development graduate with a focus on full-stack development.",
};

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Rise Website",
    description:
      "A modern website built for Rise, featuring a clean design and responsive layout.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "",
    live: "https://www.rise-basketball.com/",
    image: "/images/riseweb.png",
  },
  {
    title: "Zhub",
    description:
      "A collaborative project management platform built for streamlined team workflows.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    github: "",
    image: "/images/zhub.png",
  },
  {
    title: "Rise AP",
    description:
      "A mobile application built for Rise Basketball to manage team operations.",
    tags: ["React Native", "Mobile"],
    github: "",
    image: "/images/riseap.png",
  },
  {
    title: "Google Cloud Sales Dashboard",
    description:
      "Capstone project built for Google Cloud during my time at SAIT. Full-stack analytics dashboard for sales data visualization.",
    tags: ["Angular", "Flask", "Google Cloud"],
    github: "https://github.com/ConDavison1/Sales-Analytic-Dashboard",
    live: "https://sales-analytic-dashboard.web.app/",
    image: "/images/gcpweb.png",
  },
  {
    title: "Coding Quiz",
    description:
      "A 10-question interactive coding quiz built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/KJG19/webdev2quiz",
    live: "https://webdev2quiz.vercel.app",
    image: "/images/codequiz.png",
  },
  {
    title: "Tic Tac Toe",
    description: "Classic Tic Tac Toe game built with React Native.",
    tags: ["React Native", "Mobile"],
    github: "https://github.com/KJG19/Tic-Tac-Toe",
    image: "/images/tictactoe.png",
  },
  {
    title: "Crossword Puzzle",
    description: "An interactive crossword puzzle game built with React.",
    tags: ["React", "JavaScript"],
    github: "https://github.com/KJG19/crossword-app-three",
    image: "/images/crossword.png",
  },
];

export const showcaseItems = [
  { title: "Coding Quiz", image: "/images/codequiz.png" },
  { title: "Rise Website", image: "/images/riseweb.png" },
  { title: "Zhub", image: "/images/zhub.png" },
  { title: "Rise AP", image: "/images/riseap.png" },

  { title: "Google Cloud Sales Dashboard", image: "/images/gcpweb.png" },
];

export const skills = [
  { category: "Frontend", items: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Angular", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Python", "C#", "Java", "Node.js", "Flask", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "GitHub", "Docker", "Google Cloud"] },
];
