"use client";
import { useEffect, useRef } from "react";

interface Props {
  url: string;
  minHeight?: number;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

export function CalendlyInline({ url, minHeight = 700 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  // Official embed uses only hide_gdpr_banner — extra color params can break loading
  const dataUrl = `${url}?hide_gdpr_banner=1`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If Calendly is already available (script cached / prior navigation),
    // initialize this widget explicitly.
    if (window.Calendly?.initInlineWidget) {
      el.innerHTML = "";
      window.Calendly.initInlineWidget({ url: dataUrl, parentElement: el });
      return;
    }

    // Otherwise inject the official widget script. On load it auto-scans for
    // `.calendly-inline-widget[data-url]` elements and initializes them.
    let script = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_JS}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = CALENDLY_JS;
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Script tag exists but Calendly not ready yet — init once it loads.
      script.addEventListener("load", () => {
        if (window.Calendly?.initInlineWidget && ref.current) {
          ref.current.innerHTML = "";
          window.Calendly.initInlineWidget({ url: dataUrl, parentElement: ref.current });
        }
      });
    }
  }, [dataUrl]);

  return (
    <div
      ref={ref}
      className="calendly-inline-widget"
      data-url={dataUrl}
      style={{ minWidth: "320px", height: `${minHeight}px` }}
    />
  );
}
