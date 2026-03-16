import { projects } from "@/lib/data";
import { techIcons } from "@/lib/techIcons";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";

const professionalProjects = projects.slice(0, 4);
const personalProjects = projects.slice(4);

function ProjectCard({ project, i }: { project: typeof projects[0]; i: number }) {
  return (
    <FadeIn delay={i * 0.1}>
      <div className="group">
        <div className="aspect-[16/9] bg-neutral-200 overflow-hidden mb-6">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-neutral-400 text-lg font-medium">
              {project.title}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <div className="flex flex-wrap gap-3 mb-3">
              {project.tags.map((tag) => {
                const tech = techIcons[tag];
                if (!tech) return null;
                const Icon = tech.icon;
                return (
                  <div
                    key={tag}
                    className="flex items-center gap-1.5 text-neutral-400"
                    title={tag}
                  >
                    <Icon size={16} />
                    <span className="text-xs">{tag}</span>
                  </div>
                );
              })}
            </div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
              {project.title}
            </h2>
            <p className="text-neutral-500 leading-relaxed max-w-xl">
              {project.description}
            </p>
          </div>

          <div className="flex gap-3 sm:mt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-neutral-900 border border-neutral-300 px-4 py-2 transition-colors hover:bg-neutral-900 hover:text-white"
              >
                GitHub <ArrowUpRight size={14} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-neutral-900 border border-neutral-300 px-4 py-2 transition-colors hover:bg-neutral-900 hover:text-white"
              >
                View live <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function ProjectsPage() {
  return (
    <section className="pt-32 pb-32 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm uppercase tracking-widest text-neutral-400 mb-2">
            All Work
          </p>
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-neutral-900 mb-16">
            Projects
          </h1>
        </FadeIn>

        <div className="space-y-16">
          {professionalProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>

        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 mt-32 mb-16">
            Personal Projects
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {personalProjects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <div className="group">
                <div className="aspect-[16/10] bg-neutral-200 overflow-hidden mb-4">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-400 text-sm font-medium">
                      {project.title}
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      GitHub <ArrowUpRight size={12} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
                    >
                      Live <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
