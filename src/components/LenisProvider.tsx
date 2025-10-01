"use client";
import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.08, wheelMultiplier: 0.9 });
    let raf: number;
    const frame = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(frame); }
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <>{children}</>;
}
