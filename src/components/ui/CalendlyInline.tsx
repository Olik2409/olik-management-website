"use client";
import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

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
  const [loaded, setLoaded] = useState(false);
  // Official embed uses only hide_gdpr_banner — extra color params can break loading
  const dataUrl = `${url}?hide_gdpr_banner=1`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Mark as loaded once Calendly injects its iframe, so we can hide the placeholder.
    const observer = new MutationObserver(() => {
      if (el.querySelector("iframe")) {
        setLoaded(true);
        observer.disconnect();
      }
    });
    observer.observe(el, { childList: true, subtree: true });

    // If Calendly is already available (script cached / prior navigation),
    // initialize this widget explicitly.
    if (window.Calendly?.initInlineWidget) {
      el.innerHTML = "";
      window.Calendly.initInlineWidget({ url: dataUrl, parentElement: el });
      return () => observer.disconnect();
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

    return () => observer.disconnect();
  }, [dataUrl]);

  return (
    <div className="relative" style={{ minHeight: `${minHeight}px` }}>
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
          <span
            className="h-7 w-7 rounded-full border-2 border-white/20 border-t-white/80 animate-spin"
            aria-hidden="true"
          />
          <p className="text-sm text-[var(--color-text-muted)]">
            Ładowanie kalendarza…{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-white underline underline-offset-2">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      )}
      <div
        ref={ref}
        className="calendly-inline-widget relative z-10"
        data-url={dataUrl}
        style={{ minWidth: "280px", height: `${minHeight}px` }}
      />
    </div>
  );
}
