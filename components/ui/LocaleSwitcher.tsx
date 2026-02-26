"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition, useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const locales = [
  { code: "es", label: "Español", flagCode: "es" },
  { code: "en", label: "English", flagCode: "gb" },
  { code: "ca", label: "Català",  flagCode: "ca-flag" },
  { code: "de", label: "Deutsch", flagCode: "de" },
];

function CatalanFlag() {
  return (
    <svg
      width="20"
      height="13"
      viewBox="0 0 270 180"
      className="rounded-sm shrink-0"
      aria-label="Català"
    >
      <rect width="270" height="180" fill="#FCDD09" />
      <rect y="20"  width="270" height="20" fill="#DA121A" />
      <rect y="60"  width="270" height="20" fill="#DA121A" />
      <rect y="100" width="270" height="20" fill="#DA121A" />
      <rect y="140" width="270" height="20" fill="#DA121A" />
    </svg>
  );
}

function FlagImage({ code, label }: { code: string; label: string }) {
  if (code === "ca-flag") return <CatalanFlag />;
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
      width={20}
      height={15}
      alt={label}
      className="rounded-sm object-cover shrink-0"
      style={{ width: 20, height: 15 }}
    />
  );
}

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = locales.find((l) => l.code === locale) ?? locales[0];

  const handleChange = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || "/";
    setOpen(false);
    startTransition(() => router.replace(newPath));
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-xs font-medium text-[var(--foreground)] hover:border-[var(--accent)] transition-all duration-150 disabled:opacity-50"
      >
        <FlagImage code={current.flagCode} label={current.label} />
        <span className="hidden sm:inline">{current.label}</span>
        <ChevronDown
          size={12}
          className={`text-[var(--muted)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 w-36 rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-lg overflow-hidden z-50">
          {locales.map(({ code, label, flagCode }) => (
            <button
              key={code}
              onClick={() => handleChange(code)}
              disabled={isPending || locale === code}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-xs transition-colors duration-100 ${
                locale === code
                  ? "bg-[var(--accent)] text-white font-medium"
                  : "text-[var(--foreground)] hover:bg-[var(--background)]"
              } disabled:cursor-default`}
            >
              <FlagImage code={flagCode} label={label} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
