import { SITE_URL, SITE_NAME, SOCIAL_PROFILES } from "@/lib/seo";
import { faqData, countries } from "@/data/data";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Organization + LocalBusiness for the Nairobi headquarters. Contact points are
 * derived from the same `countries` list the footer renders, so the schema and
 * the visible page never drift apart.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/banner3.jpg`,
    description:
      "Rolling Cargo is an international freight forwarding and logistics company offering air freight, sea freight, customs clearance and online shopping services from the UK, Italy, Netherlands, Turkey, Dubai, China and South Africa into Kenya.",
    email: "salesinquiries@rollingcargo.co.ke",
    telephone: "+254 709 286 286",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 Funzi Road, Off Enterprise Road",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    areaServed: [
      "KE",
      "GB",
      "AE",
      "CN",
      "ZA",
      "IT",
      "NL",
      "TR",
    ].map((code) => ({ "@type": "Country", identifier: code })),
    contactPoint: countries.map((c) => ({
      "@type": "ContactPoint",
      contactType: "customer service",
      name: c.name,
      telephone: c.phone,
      email: c.email,
      availableLanguage: ["en"],
    })),
    sameAs: SOCIAL_PROFILES,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/tracking?trackingNumber={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Answer-engine friendly Q&A markup for the FAQ page. */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Kenya" },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path.replace(/&/g, "%26")}`,
    })),
  };
}
