"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { contact, navLinks } from "@/lib/portfolio-data";

function useTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem("sg-theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      window.localStorage.setItem("sg-theme", next ? "dark" : "light");
      return next;
    });
  };

  return { dark, toggle };
}

export function Nav() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Back to top">
          <span className="font-display text-sm font-semibold tracking-tight sm:text-base">
            SG
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
            Sphoorthi Gurram
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid size-9 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-primary"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid size-9 place-items-center rounded-lg border border-border bg-card text-muted-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background/95 px-5 py-3 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2.5 text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold">Sphoorthi Gurram</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Computer Engineering Honors · Texas A&amp;M
          </p>
          <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="size-3.5" /> {contact.location}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email Sphoorthi"
            className="grid size-10 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Mail className="size-4" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="grid size-10 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="grid size-10 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Github className="size-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-border px-5 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sphoorthi Gurram. Designed and built with care.
      </div>
    </footer>
  );
}
