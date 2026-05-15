import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ElementType } from "react";

interface LinkChipProps {
  label: string;
  url: string;
  icon: ElementType;
  className?: string;
}

export function LinkChip({ label, url, icon: Icon, className = "" }: LinkChipProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={`group inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-xs transition-all cursor-pointer whitespace-nowrap ${className}`}
      style={{ background: "var(--sheet-card-bg)", borderColor: "var(--sheet-card-border)" }}
    >
      <Icon className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
      <span className="text-foreground/65 group-hover:text-blue-500 transition-colors">
        {label}
      </span>
      <ArrowUpRight className="w-3 h-3 text-foreground/20 group-hover:text-blue-400/60 transition-colors flex-shrink-0" />
    </motion.a>
  );
}