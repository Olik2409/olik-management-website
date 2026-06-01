import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pl", "en"],
  defaultLocale: "pl",
  // pl is served at the root (no prefix), en under /en — matches all
  // canonical/hreflang/sitemap URLs.
  localePrefix: "as-needed",
});
