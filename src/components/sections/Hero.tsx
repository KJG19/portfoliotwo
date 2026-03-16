"use client";

import { siteConfig } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { MessageCircle, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="w-full max-w-6xl">
        <FadeIn>
          <h1 className="text-7xl sm:text-9xl font-bold tracking-tight text-neutral-900">
            {siteConfig.name}
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-neutral-500 leading-relaxed">
            Software engineer specializing in web development and full-stack
            applications, from React and Angular frontends to
            C# and Go backends.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="flex items-center gap-5 mt-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-neutral-400 hover:text-neutral-900 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.25}>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 mt-10 text-sm text-neutral-900 border border-neutral-300 px-6 py-3 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            Let&apos;s talk
            <MessageCircle size={14} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
