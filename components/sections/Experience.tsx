import { Briefcase, GraduationCap } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { experience, Experience } from "@/lib/data";
import { getTranslations } from "next-intl/server";

type TranslatedExperience = Experience & {
  title: string;
  organization: string;
  period: string;
  description: string;
};

function ExperienceItem({ item, index }: { item: TranslatedExperience; index: number }) {
  return (
    <FadeIn delay={index * 0.1}>
      <div className="relative flex gap-5 pl-12">
        <div
          className="absolute left-3 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 top-0.5"
          style={{ borderColor: "var(--accent)", background: "var(--card)" }}
        >
          {item.type === "work" ? (
            <Briefcase size={10} className="text-[var(--accent)]" />
          ) : (
            <GraduationCap size={10} className="text-[var(--accent)]" />
          )}
        </div>

        <div className="flex flex-col gap-2 pb-6">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-[var(--foreground)] text-base leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--accent)]">{item.organization}</p>
            </div>
            <span className="text-xs text-[var(--muted)] font-mono shrink-0 mt-0.5">
              {item.period}
            </span>
          </div>

          <p className="text-sm text-[var(--muted)] leading-relaxed">
            {item.description}
          </p>

          {item.skills && item.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 text-xs rounded-md border border-[var(--border)] text-[var(--muted)] bg-[var(--background)] font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

function ExperienceGroup({
  label,
  items,
}: {
  label: string;
  items: TranslatedExperience[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
        {label}
      </h3>
      <div className="relative">
        <div className="absolute left-[26px] top-0 bottom-0 w-px bg-[var(--border)]" />
        <div className="flex flex-col">
          {items.map((item, i) => (
            <ExperienceItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function Experience() {
  const t = await getTranslations("experience");

  const translatedItems: TranslatedExperience[] = experience.map((item, i) => ({
    ...item,
    title: t(`items.${i}.title`),
    organization: t(`items.${i}.organization`),
    period: t(`items.${i}.period`),
    description: t(`items.${i}.description`),
  }));

  const workItems = translatedItems.filter((item) => item.type === "work");
  const educationItems = translatedItems.filter((item) => item.type === "education");

  return (
    <section id="experience" className="py-24 px-6 bg-[var(--card)]">
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

        <div className="grid md:grid-cols-2 gap-12">
          <ExperienceGroup label={t("label_work")} items={workItems} />
          <ExperienceGroup label={t("label_education")} items={educationItems} />
        </div>
      </div>
    </section>
  );
}
