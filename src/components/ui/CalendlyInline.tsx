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

export function CalendlyInline({ url, minHeight = 700 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;
    let timer: ReturnType<typeof setTimeout>;

    const themedUrl = `${url}?hide_gdpr_banner=1&background_color=0a0a12&text_color=ffffff&primary_color=2563eb`;

    // Inject Calendly stylesheet once
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }

    const tryInit = (): boolean => {
      if (cancelled || !ref.current) return false;
      if (window.Calendly?.initInlineWidget) {
        // Clear any prior render then init explicitly (survives SPA navigation)
        ref.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: themedUrl,
          parentElement: ref.current,
        });
        return true;
      }
      return false;
    };

    // Poll until Calendly's global is ready — robust against script caching,
    // load-event races and client-side navigation.
    const poll = () => {
      if (cancelled) return;
      if (tryInit()) return;
      attempts += 1;
      if (attempts > 75) {
        setFailed(true);
        return;
      }
      timer = setTimeout(poll, 200);
    };

    // Ensure script is present
    if (!window.Calendly) {
      const existing = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_JS}"]`);
      if (!existing) {
        const script = document.createElement("script");
        script.src = CALENDLY_JS;
        script.async = true;
        script.onerror = () => {
          if (!cancelled) setFailed(true);
        };
        document.body.appendChild(script);
      }
    }

    poll();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [url]);

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
