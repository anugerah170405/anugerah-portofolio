import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../../utils/ImageWithFallback";
import { PrimaryButton } from "./ui/PrimaryButton";
import { STATS } from "../../data/StatsData";
import { PORTRAIT } from "../../data/PortraitData";


const textSecondary = { color: "rgba(var(--text-secondary-rgb), 0.75)" };
const textTertiary = { color: "rgba(var(--text-tertiary-rgb), 0.55)" };

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
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="inline-flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 animate-pulse" />
              {/* TERTIARY */}
              <span
                className="text-[10px] uppercase tracking-[0.18em]"
                style={textTertiary}
              >
                Available for work
              </span>
            </div>
            {/* TERTIARY */}
            <p
              className="text-xs uppercase tracking-widest leading-loose"
              style={textTertiary}
            >
              UI / UX Designer
              <br />
              Frontend Developer
            </p>
          </motion.div>

          {/* Big headline */}
          <div className="my-auto py-6 lg:py-0">
            <motion.h1
              className="text-[clamp(2.8rem,6vw,5rem)] leading-[1.04] tracking-tight text-center lg:text-left"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="flex flex-wrap justify-center lg:justify-start xl:flex-col gap-x-4 gap-y-0">
                <span>Crafting</span>
                <span style={textSecondary}>Digital</span>
                <span>Experiences</span>
              </span>
            </motion.h1>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-end justify-center lg:justify-start gap-8"
          >
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center lg:items-start">
                <span className="text-2xl lg:text-3xl text-blue-500">{s.value}</span>
                <span
                  className="text-[9px] lg:text-[10px] uppercase tracking-widest mt-0.5"
                  style={textTertiary}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── CENTER — PHOTO ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-shrink-0 order-1 lg:order-2 mx-auto my-auto"
          style={{ width: "clamp(180px, 50vw, 380px)" }}
        >
          <div
            className="absolute -inset-6 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />

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

            {/* Bottom vignette */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 45%)",
              }}
            />

            {/* Name tag — selalu di atas vignette gelap, hardcode white */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <p className="text-white/90 text-sm sm:text-base tracking-tight font-medium">
                Anugerah Gari
              </p>
              <p className="text-white/40 text-[10px] sm:text-[11px] uppercase tracking-widest mt-0.5">
                Designer · Developer
              </p>
            </div>

            {/* Blue corner accent */}
            <div
              className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(59,130,246,0.22) 0%, transparent 65%)",
              }}
            />
          </div>

          {/* Floating "Based in Indonesia" tag */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -right-2 sm:-right-4 top-8 px-3 py-2 rounded-xl border border-foreground/8 shadow-lg"
            style={{
              backdropFilter: "blur(12px)",
              background: "color-mix(in srgb, var(--background) 85%, transparent)",
            }}
          >
            {/* TERTIARY */}
            <p
              className="text-[10px] uppercase tracking-widest whitespace-nowrap"
              style={textTertiary}
            >
              📍 Indonesia
            </p>
          </motion.div>

          {/* Floating "Open to collab" tag */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.95, duration: 0.5 }}
            className="absolute -left-2 sm:-left-4 bottom-20 px-3 py-2 rounded-xl border border-blue-500/15 shadow-lg"
            style={{
              backdropFilter: "blur(12px)",
              background: "color-mix(in srgb, var(--background) 85%, transparent)",
            }}
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 flex-shrink-0 animate-pulse" />
              {/* TERTIARY */}
              <p
                className="text-[10px] whitespace-nowrap"
                style={textTertiary}
              >
                OPEN TO COLLAB
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN ── */}
        {/* ── RIGHT COLUMN ── */}
        <div className="flex flex-col justify-between items-center lg:items-end h-full py-6 lg:py-16 lg:pl-10 order-3">

          {/* Tagline — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <p
              className="text-[10px] text-right uppercase tracking-[0.18em] mb-4"
              style={textTertiary}
            >
              — My Quotes
            </p>
            <p
              className="text-sm text-right leading-relaxed max-w-[300px]"
              style={textSecondary}
            >
              Where design thinking meets developer precision — building products that feel
              as good as they look.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="my-auto py-6 lg:py-0 flex flex-col gap-2.5 items-stretch lg:items-end w-full lg:w-auto"
          >
            <PrimaryButton
              onClick={() => navigate("/work")}
              variant="primary" label="View My Work" icon={ArrowUpRight} size="md" className="lg:w-[200px]" />

            <PrimaryButton
              onClick={() => navigate("/contact")}
              variant="ghost" label="Get in Touch" icon={ArrowRight} size="md" className="lg:w-[200px]" />

          </motion.div>

          {/* Stats row — mobile only
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex lg:hidden items-center justify-center gap-8 pb-2 w-full"
          >
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-xl text-blue-500">{s.value}</span>
                <span
                  className="text-[9px] uppercase tracking-widest mt-0.5"
                  style={textTertiary}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div> */}

          {/* Scroll indicator — desktop only */}
          <motion.div className="hidden lg:flex flex-col items-center gap-2 self-end">
            <div
              className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
              style={{ borderColor: "rgba(var(--text-tertiary-rgb), 0.4)" }}
            >
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-0.5 h-1.5 rounded-full"
                style={{ background: "rgba(var(--text-tertiary-rgb), 0.4)" }}
              />
            </div>
            <span
              className="text-[10px] uppercase tracking-widest"
              style={textTertiary}
            >
              Scroll Down
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}