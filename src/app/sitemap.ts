import type { MetadataRoute } from "next";

const BASE = "https://olikmanagement.com";

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "",            priority: 1.0, changeFrequency: "weekly"  },
  { path: "/uslugi",     priority: 0.9, changeFrequency: "monthly" },
  { path: "/kontakt",    priority: 0.9, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" },
  { path: "/o-nas",      priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap(({ path, priority, changeFrequency }) => [
    {
      url: `${BASE}${path}`,
      lastModified,
      changeFrequency,
      priority,
    },
    {
      url: `${BASE}/en${path}`,
      lastModified,
      changeFrequency,
      priority,
    },
  ]);
}
