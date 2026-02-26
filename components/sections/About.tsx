import Image from "next/image";
import { MapPin, Code2, Smartphone, Layers } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { personalInfo } from "@/lib/data";

const highlights = [
  { icon: Code2, label: "Full Stack", desc: "Frontend & Backend" },
  { icon: Smartphone, label: "Mobile", desc: "iOS, Android & Cross-platform" },
  { icon: Layers, label: "Arquitectura", desc: "Sistemas escalables" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[var(--accent)] font-mono text-sm">01.</span>
            <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
              Sobre mí
            </h2>
            <div className="flex-1 h-px bg-[var(--border)] max-w-xs" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 flex flex-col gap-6">
            <FadeIn delay={0.1}>
              <p className="text-[var(--muted)] leading-relaxed text-base">
                {personalInfo.bio}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[var(--muted)] leading-relaxed text-base">
                Me apasiona construir productos que combinen una experiencia de usuario cuidada
                con código limpio y mantenible. Siempre buscando aprender nuevas tecnologías
                y aplicar buenas prácticas en cada proyecto.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                <MapPin size={14} className="text-[var(--accent)]" />
                <span>{personalInfo.location}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="grid grid-cols-3 gap-3 pt-2">
                {highlights.map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] flex flex-col gap-2 hover:border-[var(--accent)] transition-colors duration-200"
                  >
                    <Icon size={18} className="text-[var(--accent)]" />
                    <p className="text-sm font-semibold text-[var(--foreground)]">{label}</p>
                    <p className="text-xs text-[var(--muted)]">{desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left" className="md:col-span-2">
            <div className="relative group">
              <div
                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                style={{ background: "linear-gradient(135deg, var(--accent), transparent)" }}
              />
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)]">
                {personalInfo.avatar ? (
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-[var(--border)]">
                      {personalInfo.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
