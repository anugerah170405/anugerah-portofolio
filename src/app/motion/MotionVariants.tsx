/**
 * MotionVariants.tsx
 *
 * Reusable motion components.
 *
 * PENTING: Pakai `m` bukan `motion` karena kita pakai LazyMotion.
 * `motion` = full bundle langsung load.
 * `m`      = hanya load fitur yang didaftarkan di LazyMotion (domAnimation).
 *
 * Cara import di komponen lain:
 *   import { FadeUp, StaggerContainer, StaggerItem } from "@/app/components/MotionVariants";
 */

import { m, type Variants, type MotionProps } from "motion/react";
import { useMotionPreference } from "../providers/MotionProvider";
import { type ReactNode, type CSSProperties } from "react";

// ─────────────────────────────────────────────
// 1. CONSTANTS
// ─────────────────────────────────────────────
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const DURATION_FAST = 0.38;
const DURATION_BASE = 0.55;
const DURATION_SLOW = 0.75;

// ─────────────────────────────────────────────
// 2. VARIANTS — dibuat sekali di module level
//    Tidak realokasi object tiap render
// ─────────────────────────────────────────────
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0,  transition: { duration: DURATION_BASE, ease: EASE_OUT } },
  // Versi reduced: tidak ada y movement, hanya fade cepat
  reduced: { opacity: 1, y: 0, transition: { duration: 0.15 } },
};

export const fadeLeftVariants: Variants = {
  hidden:   { opacity: 0, x: -20 },
  show:     { opacity: 1, x: 0, transition: { duration: DURATION_BASE, ease: EASE_OUT } },
  reduced:  { opacity: 1, x: 0, transition: { duration: 0.15 } },
};

export const fadeRightVariants: Variants = {
  hidden:   { opacity: 0, x: 20 },
  show:     { opacity: 1, x: 0, transition: { duration: DURATION_BASE, ease: EASE_OUT } },
  reduced:  { opacity: 1, x: 0, transition: { duration: 0.15 } },
};

export const scaleInVariants: Variants = {
  hidden:   { opacity: 0, scale: 0.94, y: 20 },
  show:     { opacity: 1, scale: 1, y: 0, transition: { duration: DURATION_SLOW, ease: EASE_OUT } },
  reduced:  { opacity: 1, scale: 1, y: 0, transition: { duration: 0.15 } },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
  // Reduced: stagger sangat cepat
  reduced: {
    transition: { staggerChildren: 0.03, delayChildren: 0 },
  },
};

export const staggerItemVariants: Variants = {
  hidden:   { opacity: 0, y: 20 },
  show:     { opacity: 1, y: 0, transition: { duration: DURATION_BASE, ease: EASE_OUT } },
  reduced:  { opacity: 1, y: 0, transition: { duration: 0.1 } },
};

export const staggerItemLeftVariants: Variants = {
  hidden:   { opacity: 0, x: -8 },
  show:     { opacity: 1, x: 0, transition: { duration: DURATION_FAST, ease: EASE_OUT } },
  reduced:  { opacity: 1, x: 0, transition: { duration: 0.1 } },
};

// ─────────────────────────────────────────────
// 3. TYPES
// ─────────────────────────────────────────────
interface BaseProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  motionProps?: Omit<MotionProps, "variants" | "initial" | "animate" | "whileInView" | "viewport">;
}

// ─────────────────────────────────────────────
// 4. HELPER — pilih animate state berdasarkan reduceMotion
// ─────────────────────────────────────────────
/** Jika reduceMotion aktif → langsung ke state "reduced", skip animasi */
function useAnimateState() {
  const { reduceMotion } = useMotionPreference();
  return reduceMotion ? "reduced" : "show";
}

// ─────────────────────────────────────────────
// 5. KOMPONEN — scroll-triggered (whileInView)
// ─────────────────────────────────────────────

/**
 * <FadeUp>
 * Animasi fade + slide dari bawah saat masuk viewport.
 * Otomatis dimatikan jika reduceMotion aktif (mobile / a11y).
 */
export function FadeUp({ children, className, style, delay = 0, motionProps }: BaseProps) {
  const animateState = useAnimateState();

  return (
    <m.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView={animateState}
      viewport={{ once: true, margin: "-40px" }}
      transition={delay ? { delay } : undefined}
      className={className}
      style={style}
      {...motionProps}
    >
      {children}
    </m.div>
  );
}

/**
 * <FadeLeft> — slide masuk dari kiri
 */
export function FadeLeft({ children, className, style, delay = 0, motionProps }: BaseProps) {
  const animateState = useAnimateState();

  return (
    <m.div
      variants={fadeLeftVariants}
      initial="hidden"
      whileInView={animateState}
      viewport={{ once: true, margin: "-40px" }}
      transition={delay ? { delay } : undefined}
      className={className}
      style={style}
      {...motionProps}
    >
      {children}
    </m.div>
  );
}

/**
 * <FadeRight> — slide masuk dari kanan
 */
export function FadeRight({ children, className, style, delay = 0, motionProps }: BaseProps) {
  const animateState = useAnimateState();

  return (
    <m.div
      variants={fadeRightVariants}
      initial="hidden"
      whileInView={animateState}
      viewport={{ once: true, margin: "-40px" }}
      transition={delay ? { delay } : undefined}
      className={className}
      style={style}
      {...motionProps}
    >
      {children}
    </m.div>
  );
}

/**
 * <ScaleIn> — scale + fade, cocok untuk foto / hero image
 */
export function ScaleIn({ children, className, style, delay = 0, motionProps }: BaseProps) {
  const animateState = useAnimateState();

  return (
    <m.div
      variants={scaleInVariants}
      initial="hidden"
      whileInView={animateState}
      viewport={{ once: true, margin: "-40px" }}
      transition={delay ? { delay } : undefined}
      className={className}
      style={style}
      {...motionProps}
    >
      {children}
    </m.div>
  );
}

/**
 * <StaggerContainer>
 * Children muncul berurutan satu-satu.
 * Pasangkan dengan <StaggerItem> atau <StaggerItemLeft>.
 *
 * @example
 * <StaggerContainer className="grid grid-cols-3 gap-4">
 *   {items.map(item => (
 *     <StaggerItem key={item.id}>
 *       <Card {...item} />
 *     </StaggerItem>
 *   ))}
 * </StaggerContainer>
 */
export function StaggerContainer({ children, className, style, delay = 0, motionProps }: BaseProps) {
  const animateState = useAnimateState();

  return (
    <m.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView={animateState}
      viewport={{ once: true, margin: "-60px" }}
      transition={delay ? { delayChildren: delay } : undefined}
      className={className}
      style={style}
      {...motionProps}
    >
      {children}
    </m.div>
  );
}

/**
 * <StaggerItem> — item di dalam StaggerContainer, slide dari bawah
 */
export function StaggerItem({ children, className, style, motionProps }: Omit<BaseProps, "delay">) {
  return (
    <m.div
      variants={staggerItemVariants}
      className={className}
      style={style}
      {...motionProps}
    >
      {children}
    </m.div>
  );
}

/**
 * <StaggerItemLeft> — item di dalam StaggerContainer, slide dari kiri
 * Cocok untuk skill list
 */
export function StaggerItemLeft({ children, className, style, motionProps }: Omit<BaseProps, "delay">) {
  return (
    <m.div
      variants={staggerItemLeftVariants}
      className={className}
      style={style}
      {...motionProps}
    >
      {children}
    </m.div>
  );
}

/**
 * <AnimateOnMount>
 * Untuk elemen Hero/Header yang langsung muncul saat load.
 * TIDAK scroll-triggered — langsung animate saat komponen mount.
 *
 * @example
 * <AnimateOnMount variants={fadeUpVariants} delay={0.2}>
 *   <h1>Judul besar</h1>
 * </AnimateOnMount>
 */
export function AnimateOnMount({
  children,
  className,
  style,
  delay = 0,
  variants = fadeUpVariants,
  motionProps,
}: BaseProps & { variants?: Variants }) {
  const animateState = useAnimateState();

  return (
    <m.div
      variants={variants}
      initial="hidden"
      animate={animateState}
      transition={delay ? { delay } : undefined}
      className={className}
      style={style}
      {...motionProps}
    >
      {children}
    </m.div>
  );
}