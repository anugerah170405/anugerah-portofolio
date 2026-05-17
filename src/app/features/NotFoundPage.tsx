import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router";
import { PrimaryButton } from "../components/ui/PrimaryButton";

const fg = (pct: number) =>
  `color-mix(in oklch, var(--foreground) ${pct}%, transparent)`;

export function NotFoundPage() {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Single motion wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-md"
      >
        {/* 404 background */}
        <div
          className="absolute select-none pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            fontSize: "clamp(160px, 28vw, 340px)",
            fontWeight: 700,
            letterSpacing: "-0.06em",
            lineHeight: 1,
            color: fg(4),
          }}
        >
          404
        </div>

        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div
            className="h-px w-6"
            style={{ background: "rgba(59,130,246,0.4)" }}
          />
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: fg(35) }}
          >
            Page Not Found
          </span>
          <div
            className="h-px w-6"
            style={{ background: "rgba(59,130,246,0.4)" }}
          />
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.2rem,6vw,4rem)] leading-tight tracking-tight mb-4">
          Lost in the void.
        </h1>

        {/* Description */}
        <p className="text-base leading-relaxed mb-2" style={{ color: fg(45) }}>
          The page{" "}
          <span
            className="font-mono text-sm px-1.5 py-0.5 rounded"
            style={{
              background: "rgba(59,130,246,0.1)",
              color: "#3b82f6",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            {location.pathname}
          </span>{" "}
          doesn't exist or has been moved.
        </p>

        <p className="text-sm mb-8" style={{ color: fg(32) }}>
          Let's get you back somewhere familiar.
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <PrimaryButton
            variant="ghost"
            label="Back to Home"
            onClick={() => navigate("/")}
          />
        </div>
      </motion.div>
    </div>
  );
}