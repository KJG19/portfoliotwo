"use client";

import { siteConfig } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <FadeIn>
          <p className="text-sm uppercase tracking-widest text-neutral-400 mb-2">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-neutral-500 max-w-md mx-auto mb-10 leading-relaxed">
            Got a project in mind or just want to chat? Feel free to reach out.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-sm border border-neutral-300 rounded-full px-6 py-3 text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
            >
              Send an email
              <ArrowUpRight size={14} />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border border-neutral-300 rounded-full px-6 py-3 text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border border-neutral-300 rounded-full px-6 py-3 text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
