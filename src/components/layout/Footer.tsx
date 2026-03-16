"use client";

import { siteConfig } from "@/lib/data";
import { useState } from "react";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <footer className="relative bg-[#212224] text-neutral-400 pt-20 pb-6 px-6 overflow-hidden">
      {/* Watermark name */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none">
        <svg viewBox="0 0 1200 200" className="w-full block" preserveAspectRatio="xMidYMax meet">
          <defs>
            <linearGradient id="nameStrokeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="nameFillGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <text
            x="600"
            y="200"
            textAnchor="middle"
            fill="url(#nameFillGradient)"
            stroke="url(#nameStrokeGradient)"
            strokeWidth="1.5"
            className="uppercase"
            style={{ fontSize: "168px", fontWeight: 900, letterSpacing: "-0.02em" }}
          >
            {siteConfig.name}
          </text>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-3 gap-8 mb-24">
          {/* Explore */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-8">
              Explore
            </h4>
            <ul className="space-y-5">
              <li>
                <a href="/" className="inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-white">
                  Home
                  <ArrowRight size={14} className="text-emerald-500" />
                </a>
              </li>
              <li>
                <a href="/projects" className="inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-white">
                  Projects
                  <ArrowRight size={14} className="text-emerald-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-8">
              Contact
            </h4>
            <ul className="space-y-5">
              <li>
                <a href="/contact" className="inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-white">
                  Let&apos;s talk
                  <ArrowRight size={14} className="text-emerald-500" />
                </a>
              </li>
              <li>
                <button
                  onClick={copyEmail}
                  className="text-sm text-neutral-300 transition-colors hover:text-white cursor-pointer"
                >
                  {copied ? "Copied!" : "Copy email"}
                </button>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-8">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.07] flex items-center justify-center text-neutral-400 transition-colors hover:text-white hover:bg-white/[0.12]"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.07] flex items-center justify-center text-neutral-400 transition-colors hover:text-white hover:bg-white/[0.12]"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 flex items-center justify-between text-[11px] text-neutral-500">
          <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
