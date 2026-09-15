"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Copy, Check, Sparkles } from "lucide-react";
import { roles, stats, contact } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

function RotatingRole() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setShow(true);
      }, 320);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-flex h-[1.15em] items-baseline overflow-hidden align-bottom">
      <span
        className="text-gradient transition-all duration-300"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(0.5em)",
        }}
      >
        {roles[index]}
      </span>
    </span>
  );
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(contact.email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          setCopied(false);
        }
      }}
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
    >
      {copied ? <Check className="size-4 text-primary" /> : <Copy className="size-4" />}
      {copied ? "Email copied" : contact.email}
    </button>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 size-[520px] -translate-x-1/2 rounded-full opacity-40 blur-3xl float-slow"
        style={{ background: "var(--gradient-signal)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
          <Sparkles className="size-3.5" />
          CPEN Honors · Texas A&amp;M
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 font-display text-5xl font-semibold leading-[0.95] sm:text-7xl lg:text-8xl">
            Sphoorthi
            <br />
            Gurram
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 font-display text-2xl font-medium sm:text-3xl">
            <RotatingRole />
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Building autonomous robots, designing power electronics, and bridging hardware with
            intelligence.
          </p>
        </Reveal>

        <Reveal delay={260} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-ring"
          >
            Explore Projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
          >
            Get in Touch
          </a>
          <CopyEmail />
        </Reveal>
      </div>
    </section>
  );
}

export function StatsBanner() {
  return (
    <section className="relative border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px px-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 90}
            className="group relative py-8 sm:px-6 lg:first:pl-0"
          >
            <p className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium">{stat.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.detail}</p>
            <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
