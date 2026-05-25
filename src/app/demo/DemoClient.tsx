'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

/**
 * Side-effect-only client component that initializes Lenis smooth scroll
 * for the /demo page. Renders nothing. All marketing markup lives in
 * the server-rendered page.tsx so Googlebot sees real content.
 */
export default function DemoClient() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
