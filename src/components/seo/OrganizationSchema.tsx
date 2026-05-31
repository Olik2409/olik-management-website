const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Olik Management",
  url: "https://olikmanagement.com",
  telephone: "+48788589821",
  email: "kontakt@olikmanagement.com",
  areaServed: "PL",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["Polish", "English"],
  },
  sameAs: [
    "https://www.instagram.com/olik.management/",
    "https://www.linkedin.com/in/olik-management/",
  ],
};

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
