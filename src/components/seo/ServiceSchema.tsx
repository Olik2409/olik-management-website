interface Props {
  locale: string;
}

export function ServiceSchema({ locale }: Props) {
  const isPl = locale === "pl";

  const services = isPl
    ? [
        {
          name: "Performance Advertising",
          description:
            "Kampanie Meta Ads i Google Ads zorientowane na leady, sprzedaż i produkty. Server-side tracking CAPI, optymalizacja kosztów pozyskania i skalowanie budżetów reklamowych.",
          serviceType: "Performance Marketing",
        },
        {
          name: "Brand & Tracking",
          description:
            "Kompleksowy setup śledzenia: piksel Meta, CAPI, Google Tag Manager, GA4, konwersje offline. Pełna widoczność ścieżki zakupowej od kliknięcia do sprzedaży.",
          serviceType: "Analytics & Tracking",
        },
        {
          name: "AI Lead Automation",
          description:
            "Chatbot AI i voice AI kwalifikujące leady w 30 sekund, automatyczny follow-up w ciągu 60 sekund od kontaktu. System pracuje 24/7 bez angażowania zespołu sprzedaży.",
          serviceType: "AI Automation",
        },
        {
          name: "Growth Engine",
          description:
            "Kompletny system wzrostu: kampanie + automatyzacja + CRM + live dashboard z danymi w czasie rzeczywistym. Wszystkie kanały i procesy zarządzane z jednego miejsca.",
          serviceType: "Growth Marketing",
        },
      ]
    : [
        {
          name: "Performance Advertising",
          description:
            "Meta Ads and Google Ads campaigns focused on leads, sales and products. Server-side CAPI tracking, acquisition cost optimisation and ad budget scaling.",
          serviceType: "Performance Marketing",
        },
        {
          name: "Brand & Tracking",
          description:
            "Full tracking setup: Meta pixel, CAPI, Google Tag Manager, GA4, offline conversions. Complete visibility of the purchase path from click to sale.",
          serviceType: "Analytics & Tracking",
        },
        {
          name: "AI Lead Automation",
          description:
            "AI chatbot and voice AI qualifying leads in 30 seconds, automatic follow-up within 60 seconds of contact. The system works 24/7 without engaging the sales team.",
          serviceType: "AI Automation",
        },
        {
          name: "Growth Engine",
          description:
            "Complete growth system: campaigns + automation + CRM + live dashboard with real-time data. All channels and processes managed from one place.",
          serviceType: "Growth Marketing",
        },
      ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "Olik Management",
          url: "https://olikmanagement.com",
        },
        serviceType: service.serviceType,
        areaServed: "PL",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
