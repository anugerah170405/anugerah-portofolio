import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";
import { PrimaryButton } from "./ui/PrimaryButton";

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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-px w-6 bg-blue-500/40" />
          <span className="text-xs uppercase tracking-widest" style={textTertiary}>Get in Touch</span>
          <div className="h-px w-6 bg-blue-500/40" />
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-tight"
          >
            Let's Work
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-10 pb-3">
          <motion.h2
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-tight"
            style={textSecondary}
          >
            Together.
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-10"
        >
          Have a project in mind? I'd love to hear about it. Whether it's a product,
          a design system, or something from scratch — let's make it remarkable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.26 }}
        >
          <PrimaryButton
            onClick={() => navigate("/contact")}
            variant="primary" label="Get in Touch" icon={ArrowUpRight} size="md" className="lg:w-[200px]" />
        </motion.div>

      </div>
    </section>
  );
}