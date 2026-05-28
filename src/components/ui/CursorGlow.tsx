"use client";
import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const el = ref.current;
    if (!el) return;

    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (el.style.opacity === "0") el.style.opacity = "1";
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    const onEnterInteractive = () => el.classList.add("hover");
    const onLeaveInteractive = () => el.classList.remove("hover");

    const interactiveSelectors = "a, button, [data-cursor='hover']";
    document.querySelectorAll(interactiveSelectors).forEach((node) => {
      node.addEventListener("mouseenter", onEnterInteractive);
      node.addEventListener("mouseleave", onLeaveInteractive);
    });

    const animate = () => {
      curX += (targetX - curX) * 0.18;
      curY += (targetY - curY) * 0.18;
      el.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
      document.querySelectorAll(interactiveSelectors).forEach((node) => {
        node.removeEventListener("mouseenter", onEnterInteractive);
        node.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return <div ref={ref} className="cursor-glow" style={{ opacity: 0 }} aria-hidden />;
}
