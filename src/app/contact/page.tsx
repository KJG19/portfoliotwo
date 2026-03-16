"use client";

import { siteConfig } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { useState, useRef } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    const honeypot = new FormData(formRef.current).get("website");
    if (honeypot) return;

    setSending(true);
    setError(false);

    emailjs
      .sendForm(
        "service_b2ua92q",
        "template_40lwat1",
        formRef.current,
        "RQbJLNNi8zYmcPwfC"
      )
      .then(() => {
        setSubmitted(true);
        setSending(false);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError(true);
        setSending(false);
      });
  }

  return (
    <section className="pt-32 pb-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Left - Info */}
          <div>
            <FadeIn>
              <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-neutral-900 mb-6">
                Let&apos;s talk
              </h1>
              <p className="text-lg text-neutral-500 leading-relaxed mb-10">
                Have a project in mind or just want to connect? Send me a
                message and I&apos;ll get back to you as soon as I can.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mb-10">
                <p className="text-sm uppercase tracking-widest text-neutral-400 mb-3">
                  Email
                </p>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:text-neutral-600 transition-colors cursor-pointer"
                >
                  {siteConfig.email}
                  {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <p className="text-sm uppercase tracking-widest text-neutral-400 mb-3">
                  Connect
                </p>
                <div className="flex gap-4">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    GitHub <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
                  >
                    LinkedIn <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right - Form */}
          <FadeIn delay={0.1}>
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
                    Message sent!
                  </h2>
                  <p className="text-neutral-500">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="title" value="Portfolio Contact" />
                <input
                  type="text"
                  name="website"
                  autoComplete="off"
                  tabIndex={-1}
                  className="absolute opacity-0 h-0 w-0 pointer-events-none"
                />
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-900 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-neutral-300 bg-transparent px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-neutral-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-900 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-neutral-300 bg-transparent px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-neutral-900"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full border border-neutral-300 bg-transparent px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-neutral-900 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-500">
                    Something went wrong. Please try again.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 text-sm text-neutral-900 border border-neutral-300 px-6 py-3 transition-colors hover:bg-neutral-900 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Send message"}
                  <ArrowUpRight size={14} />
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
