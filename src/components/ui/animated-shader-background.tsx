"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float iTime;
  uniform vec2 iResolution;

  #define NUM_OCTAVES 3

  float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);

    float res = mix(
      mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
      mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
    return res * res;
  }

  vec4 tanh4(vec4 x) {
    vec4 e = exp(2.0 * x);
    return (e - 1.0) / (e + 1.0);
  }

  float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.3;
    vec2 shift = vec2(100);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
      v += a * noise(x);
      x = rot * x * 2.0 + shift;
      a *= 0.4;
    }
    return v;
  }

  void main() {
    vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
    vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
    vec2 v;
    vec4 o = vec4(0.0);

    float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

    for (float i = 0.0; i < 26.0; i++) {
      v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
      float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 26.0));
      vec4 auroraColors = vec4(
        0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),
        0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),
        0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),
        1.0
      );
      vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
      float thinnessFactor = smoothstep(0.0, 1.0, i / 26.0) * 0.6;
      o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
    }

    o = tanh4(pow(o / 100.0, vec4(1.6)));
    gl_FragColor = o * 1.7;
  }
`;

export function AuroraShader({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new THREE.Vector2(container.clientWidth, container.clientHeight),
        },
      },
      vertexShader,
      fragmentShader,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId: number;
    let lastTime = performance.now();
    let onScreen = true; // hero in viewport
    let tabActive = !document.hidden; // tab visible

    const animate = (now: number) => {
      frameId = requestAnimationFrame(animate);
      let delta = (now - lastTime) / 1000;
      lastTime = now;

      // Skip all GPU work when hero is scrolled away or tab is hidden
      if (!onScreen || !tabActive) return;

      // Clamp delta so a stutter / tab refocus never produces a time jump
      if (delta > 0.05) delta = 0.05;

      // Render every frame for smooth motion (matches display refresh).
      // Cost is kept in check by reduced shader iterations + DPR 1.0.
      material.uniforms.iTime.value += delta;
      renderer.render(scene, camera);
    };
    if (prefersReduced) {
      // Respect prefers-reduced-motion: paint one static frame, no loop.
      material.uniforms.iTime.value = 8.0;
      renderer.render(scene, camera);
    } else {
      frameId = requestAnimationFrame(animate);
    }

    // Pause rendering when the hero leaves the viewport
    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(container);

    // Pause when the browser tab is hidden
    const onVisibility = () => {
      tabActive = !document.hidden;
      lastTime = performance.now(); // avoid a large time jump on resume
    };
    document.addEventListener("visibilitychange", onVisibility);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      material.uniforms.iResolution.value.set(w, h);
      // Static mode never re-renders via the loop, so repaint on resize.
      if (prefersReduced) renderer.render(scene, camera);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 ${className}`}
      aria-hidden="true"
    />
  );
}
