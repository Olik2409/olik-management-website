"use client";
import { useEffect, useRef, useState } from "react";

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

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

function loadCalendly(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return;

    // CSS
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }

    // Already loaded
    if (window.Calendly) {
      resolve();
      return;
    }

    // Script already in flight
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_JS}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject());
      // In case it finished loading between checks
      if (window.Calendly) resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_JS;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.body.appendChild(script);
  });
}

export function CalendlyInline({ url, minHeight = 700 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const themedUrl = `${url}?hide_event_type_details=0&hide_gdpr_banner=1&background_color=0a0a12&text_color=ffffff&primary_color=2563eb`;

  useEffect(() => {
    let cancelled = false;

    loadCalendly()
      .then(() => {
        if (cancelled || !ref.current || !window.Calendly) return;
        // Clear any prior render then init explicitly (survives SPA navigation)
        ref.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: themedUrl,
          parentElement: ref.current,
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [themedUrl]);

  if (failed) {
    return (
      <div
        className="flex flex-col items-center justify-center gap-4 text-center px-6"
        style={{ minHeight: `${minHeight}px` }}
      >
        <p className="text-sm text-[var(--color-text-muted)]">
          Nie udało się załadować kalendarza.
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
          style={{ background: "var(--color-led-blue)", boxShadow: "0 8px 32px var(--color-led-blue-glow)" }}
        >
          Otwórz kalendarz w nowej karcie
        </a>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="calendly-inline-widget"
      style={{ minWidth: "320px", height: `${minHeight}px` }}
    />
  );
}
