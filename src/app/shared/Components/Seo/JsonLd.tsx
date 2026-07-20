import React from "react";

/**
 * Renders a schema.org payload as a JSON-LD script tag. Server component, so
 * the markup is present in the initial HTML where crawlers can read it without
 * executing JavaScript.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
