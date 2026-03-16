"use client";

import { projects } from "@/lib/data";
import { techIcons } from "@/lib/techIcons";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";

const featured = projects.slice(0, 2);

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-sm uppercase tracking-widest text-neutral-400 mb-2">
            Selected Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mb-16">
            Featured Projects
          </h2>
        </FadeIn>

        <div className="space-y-32">
          {featured.map((project, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <FadeIn key={project.title} delay={i * 0.1}>
                <div
                  className={`flex flex-col md:flex-row items-center gap-10 ${
                    imageLeft ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Image */}
                  <div className="w-full md:w-[60%] flex-shrink-0">
                    <div className="aspect-[16/10] bg-neutral-200 overflow-hidden flex items-center justify-center text-neutral-400 text-lg font-medium">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        project.title
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="w-full md:w-[40%]">
                    <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-5">
                      {project.tags.map((tag) => {
                        const tech = techIcons[tag];
                        if (!tech) return null;
                        const Icon = tech.icon;
                        return (
                          <div
                            key={tag}
                            className="flex flex-col items-center gap-1 group"
                            title={tag}
                          >
                            <Icon
                              size={22}
                              className="text-neutral-400 transition-colors group-hover:text-[var(--icon-color)]"
                              style={{ "--icon-color": tech.color } as React.CSSProperties}
                            />
                            <span className="text-[10px] text-neutral-400">{tag}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                        >
                          GitHub <ArrowUpRight size={14} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                        >
                          Live <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16 text-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              View all projects <ArrowUpRight size={14} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
