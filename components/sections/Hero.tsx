"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, FileText } from "lucide-react";
import { useTranslations } from "next-intl";
import { personalInfo } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, color-mix(in srgb, var(--accent) 12%, transparent), transparent)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl w-full text-center flex flex-col items-center gap-6"
      >
        <motion.div variants={item}>
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full border border-[var(--border)] text-[var(--muted)] bg-[var(--card)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {t("available")}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.05]"
        >
          {t("greeting")}{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 60%, var(--foreground)))",
            }}
          >
            {personalInfo.name.split(" ")[0]}
          </span>
          <span className="text-[var(--accent)]">.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl sm:text-2xl text-[var(--muted)] font-light tracking-wide"
        >
          {useTranslations("personal")("tagline")}
        </motion.p>

        <motion.p
          variants={item}
          className="text-base text-[var(--muted)] max-w-xl leading-relaxed"
        >
          {useTranslations("personal")("bio")}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3 justify-center">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
            style={{ background: "var(--accent)" }}
          >
            {t("cta_projects")}
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-sm font-medium border border-[var(--border)] text-[var(--foreground)] bg-[var(--card)] hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all duration-200"
          >
            {t("cta_contact")}
          </a>
          {personalInfo.cv && (
            <a
              href={personalInfo.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-sm font-medium border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <FileText size={14} />
              {t("cta_cv")}
            </a>
          )}
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] border border-transparent hover:border-[var(--border)] transition-all duration-200"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] border border-transparent hover:border-[var(--border)] transition-all duration-200"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] border border-transparent hover:border-[var(--border)] transition-all duration-200"
          >
            <Mail size={18} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
