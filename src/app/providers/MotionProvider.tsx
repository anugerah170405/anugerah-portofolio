/**
 * MotionProvider.tsx
 *
 * Taruh ini di root app (Layout.tsx), wrap seluruh aplikasi.
 *
 * Yang dilakukan:
 *  1. LazyMotion + domAnimation  → code-split ~18kb bundle animasi,
 *                                   hanya di-load saat dibutuhkan
 *  2. ReducedMotionProvider      → detect prefers-reduced-motion (aksesibilitas)
 *                                   + screen mobile kecil
 *
 * Cara pakai di Layout.tsx:
 *   import { MotionProvider } from "./MotionProvider";
 *   <MotionProvider><Outlet /></MotionProvider>
 */

import { LazyMotion, domAnimation } from "motion/react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

// ─── Context ──────────────────────────────────
interface MotionContextValue {
  /** true jika animasi harus dikurangi/dimatikan */
  reduceMotion: boolean;
}

const MotionContext = createContext<MotionContextValue>({ reduceMotion: false });

export function useMotionPreference() {
  return useContext(MotionContext);
}

// ─── Provider ─────────────────────────────────
export function MotionProvider({ children }: { children: ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Mobile kecil: layar < 480px → kurangi animasi agar tidak lag
    const mobileQuery = window.matchMedia("(max-width: 480px)");

    const update = () => {
      setReduceMotion(motionQuery.matches || mobileQuery.matches);
    };

    update(); // cek saat pertama mount

    motionQuery.addEventListener("change", update);
    mobileQuery.addEventListener("change", update);
    return () => {
      motionQuery.removeEventListener("change", update);
      mobileQuery.removeEventListener("change", update);
    };
  }, []);

  return (
    <MotionContext.Provider value={{ reduceMotion }}>
      {/* LazyMotion: bundle animasi (~18kb) hanya di-load saat dibutuhkan */}
      {/* strict=true: paksa pakai `m.` bukan `motion.` agar tree-shaking optimal */}
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionContext.Provider>
  );
}