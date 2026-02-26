import FadeIn from "@/components/ui/FadeIn";
import { skills } from "@/lib/data";
import { getTranslations } from "next-intl/server";

const techColors: Record<string, string> = {
  react: "#61DAFB",
  nextjs: "#000000",
  typescript: "#3178C6",
  tailwind: "#06B6D4",
  html: "#E34F26",
  nodejs: "#339933",
  python: "#3776AB",
  java: "#ED8B00",
  postgresql: "#4169E1",
  firebase: "#FFCA28",
  flutter: "#02569B",
  swift: "#FA7343",
  kotlin: "#7F52FF",
  git: "#F05032",
  docker: "#2496ED",
  vercel: "#000000",
  github: "#181717",
  figma: "#F24E1E",
};

const TechIcon = ({ icon, name }: { icon: string; name: string }) => {
  const color = techColors[icon] || "var(--accent)";
  const initial = name.substring(0, 2).toUpperCase();

  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-xl border border-[var(--border)] bg-[var(--background)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-200 group cursor-default">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
        style={{ background: color }}
      >
        {initial}
      </div>
      <span className="text-xs text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors text-center leading-tight">
        {name}
      </span>
    </div>
  );
};

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
