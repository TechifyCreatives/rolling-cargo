import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

type Route = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

/**
 * Public routes only — /admin, /profile and /not-found are excluded
 * deliberately and are also disallowed in robots.ts.
 */
const routes: Route[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/our-services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/air-cargo", changeFrequency: "monthly", priority: 0.9 },
  { path: "/sea-cargo", changeFrequency: "monthly", priority: 0.9 },
  { path: "/custom-clearance", changeFrequency: "monthly", priority: 0.9 },
  { path: "/online-shopping", changeFrequency: "monthly", priority: 0.8 },
  { path: "/tracking", changeFrequency: "monthly", priority: 0.8 },
  { path: "/cost-estimator", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.5 },
  { path: "/careers", changeFrequency: "monthly", priority: 0.5 },
  { path: "/apply", changeFrequency: "monthly", priority: 0.4 },
  { path: "/feedback", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-&-conditions", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    // Encode the ampersand so the emitted XML stays valid.
    url: `${SITE_URL}${path.replace(/&/g, "%26")}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
