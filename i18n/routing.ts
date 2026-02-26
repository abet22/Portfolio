import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en", "ca", "de"],
  defaultLocale: "es",
  localePrefix: "always",
});
