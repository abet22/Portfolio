import FadeIn from "@/components/ui/FadeIn";
import { skills } from "@/lib/data";
import { getTranslations } from "next-intl/server";
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siHtml5,
  siNodedotjs,
  siPython,
  siPostgresql,
  siFirebase,
  siFlutter,
  siSwift,
  siKotlin,
  siGit,
  siDocker,
  siVercel,
  siGithub,
  siFigma,
} from "simple-icons";

type SimpleIcon = { path: string; hex: string; title: string };

const iconMap: Record<string, SimpleIcon> = {
  react: siReact,
  nextjs: siNextdotjs,
  typescript: siTypescript,
  tailwind: siTailwindcss,
  html: siHtml5,
  nodejs: siNodedotjs,
  python: siPython,
  postgresql: siPostgresql,
  firebase: siFirebase,
  flutter: siFlutter,
  swift: siSwift,
  kotlin: siKotlin,
  git: siGit,
  docker: siDocker,
  vercel: siVercel,
  github: siGithub,
  figma: siFigma,
};

// Java SVG path (custom, since simple-icons doesn't include it)
const javaPath =
  "M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.888 9.58 1.553 17.462-.7 14.977-1.821M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0 0 .07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832 0 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.189-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0 0 .553.457 3.393.639";

function TechIcon({ icon, name }: { icon: string; name: string }) {
  const siIcon = iconMap[icon];

  if (siIcon) {
    const isLight =
      icon === "nextjs" || icon === "vercel" || icon === "github";

    return (
      <div className="flex flex-col items-center gap-2.5 p-3 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-200 group cursor-default">
        <div
          className="w-8 h-8 flex items-center justify-center rounded-lg"
          style={{
            background: `#${siIcon.hex}18`,
          }}
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            style={{
              fill: isLight ? "var(--foreground)" : `#${siIcon.hex}`,
            }}
            aria-label={name}
          >
            <path d={siIcon.path} />
          </svg>
        </div>
        <span className="text-xs text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors text-center leading-tight">
          {name}
        </span>
      </div>
    );
  }

  // Fallback for Java (no simple-icons entry)
  if (icon === "java") {
    return (
      <div className="flex flex-col items-center gap-2.5 p-3 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-200 group cursor-default">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#ED8B0018]">
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="w-5 h-5"
            style={{ fill: "#ED8B00" }}
            aria-label="Java"
          >
            <path d={javaPath} />
          </svg>
        </div>
        <span className="text-xs text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors text-center leading-tight">
          {name}
        </span>
      </div>
    );
  }

  // Generic fallback
  return (
    <div className="flex flex-col items-center gap-2.5 p-3 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-200 group cursor-default">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[var(--card)] text-xs font-bold text-[var(--accent)]">
        {name.substring(0, 2).toUpperCase()}
      </div>
      <span className="text-xs text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

export default async function Skills() {
  const t = await getTranslations("skills");

  const categoryLabels: Record<string, string> = {
    Frontend: t("cat_frontend"),
    Backend: t("cat_backend"),
    Mobile: t("cat_mobile"),
    "Tools & DevOps": t("cat_tools"),
  };

  return (
    <section id="skills" className="py-24 px-6 bg-[var(--card)]">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.1}>
              <div className="flex flex-col gap-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  {categoryLabels[group.category] ?? group.category}
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {group.skills.map((skill) => (
                    <TechIcon key={skill.name} icon={skill.icon} name={skill.name} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
