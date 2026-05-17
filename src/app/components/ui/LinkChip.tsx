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
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
    group
    inline-flex
    items-center
    gap-2
    px-3
    py-2
    rounded-lg
    border
    text-xs
    whitespace-nowrap
    cursor-pointer
    transition-all
    duration-150
    ease-out
    hover:scale-105
    active:scale-95
    ${className}
  `}
      style={{
        background: "var(--sheet-card-bg)",
        borderColor: "var(--sheet-card-border)",
      }}
    >
      <Icon className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />

      <span className="text-foreground/65 group-hover:text-blue-500 transition-colors duration-150">
        {label}
      </span>

      <ArrowUpRight
        className="
      w-3
      h-3
      flex-shrink-0
      text-foreground/20
      transition-colors
      duration-150
      group-hover:text-blue-400/60
    "
      />
    </a>
  );
}