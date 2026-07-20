import type { Metadata } from "next";

export const SITE_URL = "https://www.rollingcargo.co.ke";
export const SITE_NAME = "Rolling Cargo";
/**
 * The card rendered by src/app/opengraph-image.tsx. Referenced explicitly
 * because a child segment's `openGraph` object replaces the parent's rather
 * than merging into it, so the file convention alone only covers "/".
 */
export const DEFAULT_OG_IMAGE = "/opengraph-image";

/**
 * Social profiles used for schema.org `sameAs`. Kept separate from the
 * `socialLinks` in @/data/data because those carry trailing whitespace and
 * feed the footer icons rather than structured data.
 */
export const SOCIAL_PROFILES = [
  "https://www.facebook.com/rollingcargo",
  "https://twitter.com/rollingcargo",
  "https://www.linkedin.com/company/rollingcargo",
  "https://www.instagram.com/rollingcargo",
];

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

/**
 * Builds a full Metadata object for a page: canonical URL, Open Graph and
 * Twitter cards. `title` is passed bare — the root layout's title template
 * appends the site name.
 */
export function buildMetadata({
  title,
  description,
  path,
}: PageSeo): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = {
    url: DEFAULT_OG_IMAGE,
    width: 1200,
    height: 630,
    alt: `${title} — ${SITE_NAME}`,
  };

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_KE",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}
