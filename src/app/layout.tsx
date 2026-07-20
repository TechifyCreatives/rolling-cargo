import type { Metadata } from "next";
import Script from "next/script";
import "./shared/styles/globals.scss";
import Footer from "./shared/Components/Footer/Footer";
import ScrollToTopButton from "./shared/Components/ScrollToTopButton/ScrollToTopButton";
import Navbar from "./shared/Components/Navbar/Navbar";
import WhatsAppButton from "./shared/Components/WhatsAppButton/WhatsAppButton";
import GoogleAnalytics from "./shared/Components/Analytics/google";
import JsonLd from "./shared/Components/Seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Rolling Cargo | Air & Sea Freight Forwarding to Kenya",
    // Page-level titles get the brand appended automatically.
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Rolling Cargo ships your goods to Kenya by air and sea from the UK, Dubai, China, Turkey, Italy, the Netherlands and South Africa. Customs clearance, online shopping and door-to-door delivery.",
  applicationName: SITE_NAME,
  keywords: [
    "freight forwarding Kenya",
    "air cargo Kenya",
    "sea freight Kenya",
    "shipping to Kenya",
    "customs clearance Nairobi",
    "cargo from China to Kenya",
    "cargo from Dubai to Kenya",
    "cargo from UK to Kenya",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_KE",
    url: SITE_URL,
    title: "Rolling Cargo | Air & Sea Freight Forwarding to Kenya",
    description:
      "Air freight, sea freight, customs clearance and online shopping services into Kenya from the UK, Dubai, China, Turkey, Italy, the Netherlands and South Africa.",
    // Card image comes from src/app/opengraph-image.tsx.
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolling Cargo | Air & Sea Freight Forwarding to Kenya",
    description:
      "Air freight, sea freight, customs clearance and online shopping services into Kenya.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Warm up the connections for the deferred third-party widgets. */}
        <link rel="preconnect" href="https://salesiq.zohopublic.com" />
        <link rel="dns-prefetch" href="https://salesiq.zohopublic.com" />

        {/* Site-wide structured data. Deliberately in <head>: Google reads
            JSON-LD from <body> too, but simpler third-party SEO crawlers only
            parse <head> and report the markup as missing. */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body>
        {/* Google Analytics */}
        <GoogleAnalytics />

        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        {children}

        {/* Floating buttons */}
        <WhatsAppButton />
        <ScrollToTopButton />

        {/* Footer */}
        <Footer />

        {/* === Zoho SalesIQ Live Chat Widget === */}
        <Script id="zoho-init" strategy="lazyOnload">
          {`
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready: function(){} };
          `}
        </Script>
        <Script
          id="zoho-salesiq"
          strategy="lazyOnload"
          src="https://salesiq.zohopublic.com/widget?wc=siq6a532bee01e82351ccdcd99fba49f76e5b44b27b51f2b5e0e565315602bbfe03"
        />
      </body>
    </html>
  );
}
