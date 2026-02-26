"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

const locales = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "ca", label: "CA" },
];

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (newLocale: string) => {
    // pathname is like /es/... or /en/..., replace first segment
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || "/";

    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-[var(--border)] bg-[var(--card)] p-0.5">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleChange(code)}
          disabled={isPending || locale === code}
          className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all duration-150 ${
            locale === code
              ? "bg-[var(--accent)] text-white"
              : "text-[var(--muted)] hover:text-[var(--foreground)]"
          } disabled:cursor-default`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
