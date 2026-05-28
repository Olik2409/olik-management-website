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

  // FBM (Fractional Brownian Motion) noise
  vec2 hash2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
          dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
      mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
          dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
  }

  float fbm(vec2 p, int octaves) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 3; i++) {
      if (i >= octaves) break;
      value += amplitude * noise(p * frequency);
      frequency *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  // Particle glow
  float particle(vec2 uv, vec2 pos, float size) {
    float d = length(uv - pos);
    return size / (d * d + size * 0.01);
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
    float t = iTime * 0.12;

    // Base dark background matching --color-bg: #05050f
    vec3 col = vec3(0.02, 0.02, 0.06);

    // Aurora bands – multiple color layers
    for (int i = 0; i < 3; i++) {
      float fi = float(i);
      float yOffset = -0.2 + fi * 0.25;
      float speed = 0.7 + fi * 0.3;
      vec2 noiseCoord = vec2(uv.x * 1.2 + t * speed, (uv.y + yOffset) * 0.6);
      float n = fbm(noiseCoord, 3);

      float band = exp(-pow((uv.y - yOffset - n * 0.35) * 4.0, 2.0));
      band *= smoothstep(-0.6, 0.6, uv.x + 0.5) * smoothstep(1.4, 0.4, uv.x + 0.5);

      // LED palette colors: blue, violet, green
      vec3 auroraColor;
      if (i == 0) {
        auroraColor = vec3(0.23, 0.51, 0.96);  // blue #3b82f6
      } else if (i == 1) {
        auroraColor = vec3(0.66, 0.33, 0.97);  // violet #a855f7
      } else {
        auroraColor = vec3(0.0, 1.0, 0.62);    // green #00ff9d
      }
      col += auroraColor * band * (0.09 + 0.05 * sin(t * 1.5 + fi * 2.0));
    }

    // 35 scattered LED particles
    vec2 positions[35];
    positions[0]  = vec2(-0.82, 0.38);
    positions[1]  = vec2(-0.65, -0.12);
    positions[2]  = vec2(-0.51, 0.51);
    positions[3]  = vec2(-0.40, -0.35);
    positions[4]  = vec2(-0.28, 0.22);
    positions[5]  = vec2(-0.18, 0.62);
    positions[6]  = vec2(-0.09, -0.48);
    positions[7]  = vec2(0.04,  0.41);
    positions[8]  = vec2(0.13,  -0.25);
    positions[9]  = vec2(0.22,  0.55);
    positions[10] = vec2(0.31,  -0.41);
    positions[11] = vec2(0.43,  0.18);
    positions[12] = vec2(0.52,  0.67);
    positions[13] = vec2(0.61,  -0.32);
    positions[14] = vec2(0.71,  0.10);
    positions[15] = vec2(0.79,  0.48);
    positions[16] = vec2(0.88,  -0.55);
    positions[17] = vec2(-0.74, 0.05);
    positions[18] = vec2(-0.57, -0.58);
    positions[19] = vec2(-0.33, 0.75);
    positions[20] = vec2(-0.14, -0.72);
    positions[21] = vec2(0.07,  0.85);
    positions[22] = vec2(0.24,  -0.68);
    positions[23] = vec2(0.47,  0.42);
    positions[24] = vec2(0.64,  -0.18);
    positions[25] = vec2(0.81,  0.72);
    positions[26] = vec2(-0.90, -0.28);
    positions[27] = vec2(-0.44, 0.44);
    positions[28] = vec2(-0.21, 0.08);
    positions[29] = vec2(0.36,  0.80);
    positions[30] = vec2(0.55,  -0.62);
    positions[31] = vec2(0.72,  0.30);
    positions[32] = vec2(-0.69, -0.44);
    positions[33] = vec2(-0.05, 0.58);
    positions[34] = vec2(0.90,  -0.10);

    vec3 particleColors[4];
    particleColors[0] = vec3(0.23, 0.51, 0.96);  // blue
    particleColors[1] = vec3(0.66, 0.33, 0.97);  // violet
    particleColors[2] = vec3(0.0, 1.0, 0.62);    // green
    particleColors[3] = vec3(0.96, 0.45, 0.71);  // pink #f472b6

    for (int i = 0; i < 35; i++) {
      float fi = float(i);
      // Animate particles with individual drift
      vec2 animPos = positions[i] + vec2(
        sin(t * (0.5 + mod(fi, 5.0) * 0.2) + fi) * 0.04,
        cos(t * (0.4 + mod(fi, 3.0) * 0.3) + fi * 1.3) * 0.04
      );

      float pulse = 0.5 + 0.5 * sin(t * (2.0 + mod(fi, 7.0) * 0.5) + fi * 2.1);
      float size = 0.000008 * (0.4 + 0.6 * pulse);
      float glow = particle(uv, animPos, size);

      vec3 pCol = particleColors[int(mod(fi, 4.0))];
      col += pCol * glow * 0.6;
    }

    // Subtle vignette
    float vignette = 1.0 - smoothstep(0.4, 1.2, length(uv * vec2(1.0, 1.4)));
    col *= 0.6 + 0.4 * vignette;

    // Tone mapping
    col = col / (col + vec3(0.7));
    col = pow(col, vec3(0.9));

    gl_FragColor = vec4(col, 1.0);
  }
`;

export function AuroraShader({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
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

    let frameId: number;
    let lastTime = performance.now();

    const animate = (now: number) => {
      frameId = requestAnimationFrame(animate);
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      material.uniforms.iTime.value += delta;
      renderer.render(scene, camera);
    };
    frameId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      material.uniforms.iResolution.value.set(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
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
