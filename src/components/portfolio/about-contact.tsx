"use client";

import { useState } from "react";
import { Copy, Check, Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { contact } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="relative">
          <div
            className="pointer-events-none absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
            style={{ background: "var(--gradient-signal)" }}
            aria-hidden="true"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://sphoorthigurram.github.io/sphoorthi-website/headshot.jpg"
            alt="Portrait of Sphoorthi Gurram"
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-3xl border border-border object-cover"
          />
        </Reveal>

        <div>
          <SectionHeading eyebrow="About" title="Where hardware meets intelligence" />
          <Reveal delay={80} className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a Computer Engineering Honors student at Texas A&amp;M University. My work sits
              at the seam between physical power and machine reasoning: one week I&apos;m tuning a
              GaN totem-pole PFC stage for a bidirectional EV charger, the next I&apos;m writing a
              LIDAR raycast engine so a humanoid robot can understand a room.
            </p>
            <p>
              That range is deliberate. Efficient converters, clean PCB layouts, and reliable power
              rails are what let intelligent systems actually leave the simulator. I care about the
              full chain — from a boost converter feeding an 18 V rail on an underwater vehicle to
              the vision model deciding where it should swim next.
            </p>
            <p>
              Leadership came with the engineering. I direct a 40+ member autonomous underwater
              vehicle team, lead the technical side of Team Electra, and have taught 125+ students
              across 25 countries through Schoolhouse.world. Before all of that, competitive speech
              and debate taught me to make hard ideas land — I finished in the top 4.89% nationally
              and earned the National Degree of Distinction.
            </p>
          </Reveal>

          <Reveal delay={140} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { k: "Focus", v: "Power electronics & robotics" },
              { k: "Based in", v: "College Station, TX" },
              { k: "Languages", v: "EN · ES · TE · HI" },
            ].map((item) => (
              <div key={item.k} className="rounded-xl border border-border bg-card p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  {item.k}
                </p>
                <p className="mt-1.5 text-sm font-medium">{item.v}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in every field.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app with the message ready to send.");
  };

  const links = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "in/sphoorthi-gurram", href: contact.linkedin },
    { icon: Github, label: "GitHub", value: "sphoorthigurram", href: contact.github },
    { icon: MapPin, label: "Location", value: contact.location },
  ];

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-card py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something that runs on real current"
          description="Open to research, internships, and hardware collaborations. The fastest way to reach me is email."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <div className="space-y-4">
              {links.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="flex items-center gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {label}
                      </p>
                      <p className="truncate text-sm font-medium">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="block rounded-xl border border-transparent p-2 transition-colors hover:border-border hover:bg-card"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="p-2">
                    {content}
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(contact.email);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1800);
                } catch {
                  /* ignore */
                }
              }}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary transition-all hover:glow-ring"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Copied!" : "Quick copy email"}
            </button>
          </Reveal>

          <Reveal delay={90} className="rounded-2xl border border-border bg-background p-6 sm:p-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Name
                  </span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Email
                  </span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-lg border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
                  />
                </label>
              </div>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </span>
                <textarea
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the project, role, or idea."
                  className="mt-2 w-full resize-none rounded-lg border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
                />
              </label>
              {status ? (
                <p className="text-sm text-muted-foreground">{status}</p>
              ) : null}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-ring"
              >
                <Send className="size-4" />
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
