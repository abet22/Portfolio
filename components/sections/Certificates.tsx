import { Award, ExternalLink } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { certificates } from "@/lib/data";
import { getTranslations } from "next-intl/server";

export default async function Certificates() {
  const t = await getTranslations("certificates");

  return (
    <section id="certificates" className="py-24 px-6">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 0.1}>
              <div className="group flex flex-col gap-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] transition-all duration-300">
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "color-mix(in srgb, var(--accent) 15%, transparent)" }}
                  >
                    <Award size={20} className="text-[var(--accent)]" />
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver credencial"
                      className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors mt-1"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-[var(--foreground)] text-sm leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-[var(--muted)]">
                    {t("issued_by")} {cert.issuer}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-2 mt-auto">
                  {cert.level && (
                    <span
                      className="px-2.5 py-1 text-xs font-medium rounded-lg"
                      style={{
                        background: "color-mix(in srgb, var(--accent) 12%, transparent)",
                        color: "var(--accent)",
                      }}
                    >
                      {cert.level}
                    </span>
                  )}
                  <span className="text-xs text-[var(--muted)] font-mono ml-auto">
                    {cert.date}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
