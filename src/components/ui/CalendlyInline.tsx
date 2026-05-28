"use client";
import Script from "next/script";

interface Props {
  url: string;
  minHeight?: number;
}

export function CalendlyInline({ url, minHeight = 700 }: Props) {
  const themedUrl = `${url}?hide_event_type_details=0&hide_gdpr_banner=1&background_color=0a1428&text_color=ffffff&primary_color=2563eb`;

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <div
        className="calendly-inline-widget"
        data-url={themedUrl}
        style={{ minWidth: "320px", height: `${minHeight}px` }}
      />
    </>
  );
}
