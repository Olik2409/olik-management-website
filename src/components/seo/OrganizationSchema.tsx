import { SITE_URL, CONTACT_EMAIL, SOCIAL } from "@/lib/site";

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Olik Management",
  url: SITE_URL,
  logo: `${SITE_URL}/favicons/icon-512.png`,
  telephone: "+48788589821",
  email: CONTACT_EMAIL,
  areaServed: "PL",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+48788589821",
    email: CONTACT_EMAIL,
    availableLanguage: ["Polish", "English"],
  },
  sameAs: [SOCIAL.instagram, SOCIAL.linkedin],
};

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
