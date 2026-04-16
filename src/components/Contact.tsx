"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "gurramsphoorthi@tamu.edu",
    href: "mailto:gurramsphoorthi@tamu.edu",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sphoorthi-gurram",
    href: "https://linkedin.com/in/sphoorthi-gurram",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "College Station, TX",
    href: null,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 text-sm font-mono mb-2 tracking-widest uppercase">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-spektr-cyan-50 mb-4">
            Let&apos;s connect
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            I&apos;m always open to research opportunities, internships, and
            interesting engineering conversations. Don&apos;t hesitate to reach
            out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-4 mb-8"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            const inner = (
              <div
                className={`rounded-xl border ${link.border} bg-card p-5 flex flex-col items-center gap-3 text-center hover:${link.bg} transition-colors group`}
              >
                <div
                  className={`w-10 h-10 rounded-full ${link.bg} border ${link.border} flex items-center justify-center`}
                >
                  <Icon className={`w-5 h-5 ${link.color}`} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">
                    {link.label}
                  </p>
                  <p
                    className={`text-sm font-medium ${link.color} break-all leading-snug`}
                  >
                    {link.value}
                  </p>
                </div>
              </div>
            );

            return link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {inner}
              </a>
            ) : (
              <div key={link.label}>{inner}</div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="gap-3 bg-cyan-500 text-gray-950 hover:bg-cyan-400 font-semibold"
            asChild
          >
            <a href="mailto:gurramsphoorthi@tamu.edu">
              Send me a message <MoveRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
