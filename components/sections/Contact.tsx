import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { personalInfo } from "@/lib/data";
import { getTranslations } from "next-intl/server";

export default async function Contact() {
  const t = await getTranslations("contact");

  const socialLinks = [
    {
      label: "GitHub",
      href: personalInfo.github,
      icon: Github,
      desc: t("github_desc"),
    },
    {
      label: "LinkedIn",
      href: personalInfo.linkedin,
      icon: Linkedin,
      desc: t("linkedin_desc"),
    },
    {
      label: "Email",
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      desc: personalInfo.email,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            <FadeIn delay={0.1}>
              <h3 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] leading-tight">
                {t("heading")}
              </h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[var(--muted)] leading-relaxed">{t("description")}</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white self-start transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: "var(--accent)" }}
              >
                <Mail size={15} />
                {t("cta")}
              </a>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-3">
            {socialLinks.map(({ label, href, icon: Icon, desc }, i) => (
              <FadeIn key={label} delay={0.1 + i * 0.1} direction="left">
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-[var(--border)] bg-[var(--background)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-all duration-200">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--foreground)]">{label}</p>
                    <p className="text-xs text-[var(--muted)] truncate">{desc}</p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-[var(--muted)] group-hover:text-[var(--accent)] shrink-0 transition-colors"
                  />
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <FadeIn delay={0.4}>
        <div className="max-w-5xl mx-auto mt-24 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[var(--muted)]">
            {t("footer_by")}{" "}
            <span className="text-[var(--foreground)] font-medium">{personalInfo.name}</span>
          </p>
          <p className="text-xs text-[var(--muted)]">{t("footer_stack")}</p>
        </div>
      </FadeIn>
    </section>
  );
}
