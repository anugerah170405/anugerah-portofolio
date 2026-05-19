import { motion, type Transition, type Variant } from "motion/react";

// ─── Types ────────────────────────────────────────────────────────────────────

type MotionVariant =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "slide-up"
  | "slide-down"
  | "bounce-in"
  | "flip-x"
  | "blur-in"
  | "spin-in";

interface MotionProps {
  variant?: MotionVariant;
  duration?: number;
  delay?: number;
  once?: boolean;
  amount?: number | "some" | "all";
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  as?: React.ElementType;
}

// ─── Variant Definitions ──────────────────────────────────────────────────────

const variantMap: Record<MotionVariant, { hidden: Variant; visible: Variant }> = {
  "fade": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "fade-up": {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
  "zoom-out": {
    hidden: { opacity: 1, scale: 1 },
    visible: { opacity: 0, scale: 0.88 },
  },
  "slide-up": {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  "slide-down": {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  "bounce-in": {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { opacity: 1, scale: 1 },
  },
  "flip-x": {
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0 },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  "spin-in": {
    hidden: { opacity: 0, rotate: -180, scale: 0.5 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
  },
};

// ─── Easing per variant ───────────────────────────────────────────────────────

const easingMap: Record<MotionVariant, Transition["ease"]> = {
  "fade": "easeOut",
  "fade-up": "easeOut",
  "fade-down": "easeOut",
  "fade-left": "easeOut",
  "fade-right": "easeOut",
  "zoom-in": [0.34, 1.56, 0.64, 1],
  "zoom-out": "easeIn",
  "slide-up": [0.22, 0.68, 0, 1.2],
  "slide-down": "easeOut",
  "bounce-in": [0.34, 1.56, 0.64, 1],
  "flip-x": "easeOut",
  "blur-in": "easeOut",
  "spin-in": [0.34, 1.56, 0.64, 1],
};

// ─── Component ────────────────────────────────────────────────────────────────

export function Motion({
  variant = "fade-up",
  duration = 0.45,
  delay = 0,
  once = true,
  amount = 0.2,
  className,
  style,
  children,
  as: Tag = "div",
}: MotionProps) {
  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;
  const variants = variantMap[variant];

  const transition: Transition = {
    duration,
    delay,
    ease: easingMap[variant],
  };

  return (
    <MotionTag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={transition}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
}

// ─── Stagger wrapper (untuk list / grid) ──────────────────────────────────────

interface StaggerProps {
  staggerDelay?: number;
  className?: string;
  children?: React.ReactNode;
}

export function MotionStagger({
  staggerDelay = 0.2,
  className,
  children,
}: StaggerProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger item — pakai variant apapun ──────────────────────────────────────

interface StaggerItemProps {
  variant?: MotionVariant;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function MotionItem({
  variant = "fade-up",
  duration = 0.45,
  className,
  style,
  children,
}: StaggerItemProps) {
  const variants = variantMap[variant];

  return (
    <motion.div
      variants={variants}
      transition={{ duration, ease: easingMap[variant] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface MotionModalProp {
  className?: string;
  children?: React.ReactNode;
}

export function MotionModal({ className, children }: MotionModalProp) {
  return <motion.div
    key="cv-panel"
    initial={{ opacity: 0, scale: 0.93, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.93, y: 20 }}
    transition={{ type: "spring", damping: 30, stiffness: 340 }}
    className={className}
  >{children}</motion.div>
}