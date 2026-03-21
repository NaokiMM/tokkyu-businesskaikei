import type { MetadataRoute } from "next";

function baseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

const paths: { path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/dashboard", changeFrequency: "weekly", priority: 0.9 },
  { path: "/transactions", changeFrequency: "weekly", priority: 0.9 },
  { path: "/accounts", changeFrequency: "weekly", priority: 0.8 },
  { path: "/reports", changeFrequency: "weekly", priority: 0.8 },
  { path: "/settings", changeFrequency: "monthly", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const root = baseUrl();
  const lastModified = new Date();

  return paths.map(({ path, changeFrequency, priority }) => ({
    url: `${root}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
