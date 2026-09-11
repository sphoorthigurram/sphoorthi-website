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
          <svg
            viewBox="0 0 247 203"
            aria-hidden="true"
            className="h-7 w-auto text-cyan-400 transition-transform group-hover:scale-105 dark:text-cyan-300 sm:h-8"
          >
            <path d="M217.9,66.4l-18.2,38l-18.2,-38h-27.5v17.2h6.3v52.5h-6.6v17.2h31v-17.2h-6.7v-37.2l21.85,45l21.85,-45v37.2h-6.6v17.2h31v-17.2h-6.6v-52.5h6.6v-17.3z" fill="currentColor" />
            <path d="M27.4,66h36.9v17.1h-4.5l23,53h9.4v17.1h-33.5v-17h5l-3.7,-8.8h-27.6l-3.7,8.8h5v17.1h-33.5v-17.1h9.4l23,-53h-5v-17.1zM46.2,95.5l-6.5,14.8h13z" fill="currentColor" />
            <path d="M27.4,0h191v54.7h-37.6v-20.7h-39.5v130.7h21v37.3h-79.2v-37.3h21v-130.7h-39.5v20.7h-37.6v-54.7z" fill="currentColor" />
            <path d="M34.5,7.7h172.4l-10.4,8h-153.8z" fill="currentColor" />
            <path d="M125.7,18.5l7.9,7.8v146.6l-7.9,7.8z" fill="currentColor" />
            <path d="M210.9,11.8v35.9l-7.9,-7.6v-20.2z" fill="currentColor" />
            <path d="M154.65,172.2v22.3l-8,-7.5v-6.5z" fill="currentColor" />
          </svg>
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
            className="grid size-9 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:text-primary"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid size-9 place-items-center rounded-lg border border-border bg-surface text-muted-foreground md:hidden"
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
    <footer className="border-t border-border bg-surface">
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
