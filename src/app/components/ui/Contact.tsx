import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";
import { PrimaryButton } from "./PrimaryButton";

export function Contact() {
  const navigate = useNavigate();
  const textSecondary = { color: "rgba(var(--text-secondary-rgb), 0.75)" };
  const textTertiary = { color: "rgba(var(--text-tertiary-rgb), 0.55)" };



  return (
    <section
      id="contact"
      className="relative px-6 py-28 md:py-40 overflow-hidden border-t border-foreground/6"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 110%, rgba(59,130,246,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Label */}
        <div
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-px w-6 bg-blue-500/40" />
          <span className="text-xs uppercase tracking-widest" style={textTertiary}>Get in Touch</span>
          <div className="h-px w-6 bg-blue-500/40" />
        </div>

        {/* Headline */}
        <div className="overflow-hidden mb-2">
          <h2 className="text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-tight">
            Let's Work
          </h2>
        </div>

        <div className="overflow-hidden mb-10 pb-3">
          <h2
            className="text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-tight"
            style={textSecondary}
          >
            Together.
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-base md:text-lg leading-relaxed max-w-md mx-auto mb-10"
        >
          Have a project in mind? I'd love to hear about it. Whether it's a product,
          a design system, or something from scratch — let's make it remarkable.
        </p>

        <PrimaryButton
          onClick={() => navigate("/contact")}
          variant="primary" label="Get in Touch" icon={ArrowUpRight} size="md" className="lg:w-[200px]" />

      </div>
    </section>
  );
}