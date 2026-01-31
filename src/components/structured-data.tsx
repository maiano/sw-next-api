export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Star Wars API",
    alternateName: "SW API BFF",
    url: "https://sw-next-api.vercel.app",
    description:
      "Modern Star Wars API with aggregation, expand, filtering and pagination. Educational backend for frontend developers.",
    author: {
      "@type": "Person",
      name: "maiano",
      url: "https://github.com/maiano",
    },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://sw-next-api.vercel.app/api/v1/people?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data is safe
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
