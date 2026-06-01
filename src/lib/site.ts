/**
 * Central site configuration.
 *
 * When the production domain changes, update SITE_URL here (or set the
 * NEXT_PUBLIC_SITE_URL environment variable in Vercel) and every canonical,
 * hreflang, sitemap, robots and JSON-LD URL follows automatically.
 *
 * SITE_URL must NOT have a trailing slash.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://olikmanagement.com"
).replace(/\/$/, "");

export const CONTACT_EMAIL = "kontakt@olikmanagement.com";

export const SOCIAL = {
  instagram: "https://www.instagram.com/olik.management/",
  linkedin: "https://www.linkedin.com/in/olik-management/",
} as const;

/** Locale-aware canonical URL helper. pl = root (no prefix), en = /en. */
export function localeUrl(locale: string, path = ""): string {
  const clean = path.replace(/^\//, "");
  const prefix = locale === "pl" ? "" : `/${locale}`;
  const suffix = clean ? `/${clean}` : "";
  return `${SITE_URL}${prefix}${suffix}`;
}
