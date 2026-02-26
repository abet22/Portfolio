"use client";

import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");
  const [showAll, setShowAll] = useState(false);

  const translatedProjects = projects.map((p, i) => ({
    ...p,
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }));

  const featured = translatedProjects.filter((p) => p.featured);
  const displayed = showAll ? translatedProjects : featured;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[var(--accent)] font-mono text-sm">{t("number")}</span>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
              {t("title")}
            </h2>
            <div className="flex-1 h-px bg-[var(--border)] max-w-xs" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <article className="group flex flex-col h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold text-[var(--foreground)] text-base leading-snug">
                        {project.title}
                      </h3>
                      {project.personal && (
                        <span className="inline-flex w-fit items-center px-2 py-0.5 text-[10px] font-medium rounded-md"
                          style={{
                            background: "color-mix(in srgb, var(--accent) 12%, transparent)",
                            color: "var(--accent)",
                          }}
                        >
                          Proyecto personal
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Frontend"
                          className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1"
                        >
                          <Github size={16} />
                          {project.githubBack && (
                            <span className="text-[10px] font-mono">FE</span>
                          )}
                        </a>
                      )}
                      {project.githubBack && (
                        <a
                          href={project.githubBack}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Backend"
                          className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1"
                        >
                          <Github size={16} />
                          <span className="text-[10px] font-mono">BE</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Demo"
                          className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-[var(--muted)] leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-md border border-[var(--border)] text-[var(--muted)] bg-[var(--background)] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {projects.length > featured.length && (
          <FadeIn delay={0.3}>
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-5 py-2.5 rounded-lg text-sm font-medium border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-all duration-200"
              >
                {showAll ? t("show_less") : t("show_all", { count: projects.length })}
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
