"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["an engineer", "a researcher", "a builder", "a leader", "an innovator"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial vignette darkening edges */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, hsl(240 12% 2%) 100%)" }} />
        {/* Core cyan glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-cyan-500/15 blur-[130px]" />
        {/* Indigo accent — upper left */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] rounded-full bg-indigo-500/12 blur-[110px]" />
        {/* Teal accent — lower right */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[350px] rounded-full bg-cyan-400/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex gap-6 py-20 lg:py-40 items-center justify-center flex-col">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#about">
              <span className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-sm hover:bg-cyan-500/10 transition-colors cursor-pointer">
                EE Honors · Texas A&M · Class of 2029{" "}
                <MoveRight className="w-4 h-4" />
              </span>
            </a>
          </motion.div>

          {/* Headline */}
          <div className="flex gap-3 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-normal">
              <motion.span
                className="text-spektr-cyan-50 block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                Hi, I&apos;m Sphoorthi —
              </motion.span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-2 h-[1.2em]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-gradient-cyan"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                            y: titleNumber > index ? "-150%" : "150%",
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center mx-auto mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              EE honors student at Texas A&M working in robotics, power electronics, and AI.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            className="flex flex-row gap-3 flex-wrap justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Button size="lg" className="gap-3" variant="outline" asChild>
              <a href="#projects">
                View Projects <MoveRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              className="gap-3 bg-cyan-500 text-gray-950 hover:bg-cyan-400 font-semibold"
              asChild
            >
              <a href="#contact">
                Get in Touch <Mail className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-5 h-8 rounded-full border border-border flex items-start justify-center pt-1.5"
            >
              <div className="w-1 h-2 rounded-full bg-cyan-400/60" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
