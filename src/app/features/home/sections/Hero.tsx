import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../../../../utils/ImageWithFallback";
import { PrimaryButton } from "../../../components/ui/PrimaryButton";
import { STATS } from "../../../../data/StatsData";
import { PORTRAIT } from "../../../../data/PortraitData";
import { motion } from "motion/react";
import { Motion } from "@/app/components/motion/Motions";

const fg = (pct: number) =>
  `color-mix(in oklch, var(--foreground) ${pct}%, transparent)`;

const textSecondary = { color: fg(48) };
const textTertiary = { color: fg(32) };

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-12">

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(59, 131, 246, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Horizontal rule lines */}
      <div className="absolute inset-x-0 top-1/3 h-px bg-gray-500/15 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-1/4 h-px bg-gray-500/15 pointer-events-none" />

      {/* ── Grid Layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0 items-end min-h-[82vh]">

        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col justify-between h-full py-6 lg:py-16 lg:pr-10 order-2 lg:order-1">

          {/* Role badge */}
          <Motion variant="fade-down" delay={0.1} className="hidden lg:block">
            <div className="inline-flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.18em]" style={textTertiary}>
                Available for work
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest leading-loose" style={textSecondary}>
              UI / UX Designer
              <br />
              Frontend Developer
            </p>
          </Motion>

          {/* Big headline */}
          <Motion variant="fade-up" delay={0.15} className="my-auto py-6 lg:py-0">
            <h1 className="text-[clamp(2.8rem,6vw,5rem)] leading-[1.04] tracking-tight text-center lg:text-left">
              <span className="flex flex-wrap justify-center lg:justify-start xl:flex-col gap-x-4 gap-y-0">
                <span>Crafting</span>
                <span style={textSecondary}>Digital</span>
                <span>Experiences</span>
              </span>
            </h1>
          </Motion>

          {/* Stats */}
          <Motion variant="fade-up" delay={0.25} className="flex items-end justify-center lg:justify-start gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center lg:items-start">
                <span className="text-2xl lg:text-3xl text-blue-500">{s.value}</span>
                <span className="text-[9px] lg:text-[10px] uppercase tracking-widest mt-0.5" style={textTertiary}>
                  {s.label}
                </span>
              </div>
            ))}
          </Motion>
        </div>

        {/* ── CENTER — PHOTO ── */}
        <div
          className="relative flex-shrink-0 order-1 lg:order-2 mx-auto my-auto"
          style={{ width: "clamp(240px, 50vw, 380px)" }}
        >
          {/* Photo frame */}
          <div
            className="relative bottom-4 overflow-hidden rounded-2xl border border-foreground/10 shadow-2xl"
            style={{ aspectRatio: "3/4" }}
          >
            <ImageWithFallback
              src={PORTRAIT}
              alt="Anugerah Gari"
              className="w-full h-full object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 45%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <p className="text-white/90 text-sm sm:text-base tracking-tight font-medium">
                Anugerah Gari
              </p>
              <p className="text-white/40 text-[10px] sm:text-[11px] uppercase tracking-widest mt-0.5">
                Designer · Developer
              </p>
            </div>
          </div>

          {/* Floating tags */}
          <Motion variant="fade" delay={0.35}
            className="absolute -right-2 sm:-right-4 top-8 px-3 py-2 rounded-xl border border-foreground/8 shadow-lg"
            style={{
              backdropFilter: "blur(12px)",
              background: "color-mix(in srgb, var(--background) 85%, transparent)",
            }}
          >
            <p className="text-[10px] uppercase tracking-widest whitespace-nowrap" style={textTertiary}>
              📍 Indonesia
            </p>
          </Motion>

          <Motion variant="fade" delay={0.4}
            className="absolute -left-2 sm:-left-4 bottom-20 px-3 py-2 rounded-xl border border-blue-500/15 shadow-lg"
            style={{
              backdropFilter: "blur(12px)",
              background: "color-mix(in srgb, var(--background) 85%, transparent)",
            }}
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 flex-shrink-0 animate-pulse" />
              <p className="text-[10px] whitespace-nowrap" style={textTertiary}>
                OPEN TO COLLAB
              </p>
            </div>
          </Motion>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex flex-col justify-between items-center lg:items-end h-full py-6 lg:py-16 lg:pl-10 order-3">

          {/* Tagline */}
          <Motion variant="fade-down" delay={0.1} className="hidden lg:block">
            <p className="text-[10px] text-right uppercase tracking-[0.18em] mb-4" style={textTertiary}>
              — My Quotes
            </p>
            <p className="text-sm text-right leading-relaxed max-w-[300px]" style={textSecondary}>
              Where design thinking meets developer precision — building products that feel
              as good as they look.
            </p>
          </Motion>

          {/* CTAs */}
          <Motion variant="fade-up" delay={0.2}
            className="my-auto py-6 lg:py-0 flex flex-col gap-2.5 items-stretch lg:items-end w-full lg:w-auto"
          >
            <PrimaryButton
              onClick={() => navigate("/work")}
              variant="primary" label="View My Work" icon={ArrowUpRight} size="md" className="lg:w-[200px]"
            />
            <PrimaryButton
              onClick={() => navigate("/contact")}
              variant="ghost" label="Get in Touch" icon={ArrowRight} size="md" className="lg:w-[200px]"
            />
          </Motion>

          {/* Scroll indicator */}
          <div className="hidden lg:flex flex-col items-center gap-2 self-end">
            <div
              className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
              style={{ borderColor: fg(20) }}
            >
              <motion.div
                animate={{ y: [0, 5, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }}
                className="w-0.5 h-1.5 rounded-full"
                style={{ background: fg(20) }}
              />
            </div>
            <span className="text-[10px] uppercase tracking-widest" style={textTertiary}>
              Scroll Down
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}