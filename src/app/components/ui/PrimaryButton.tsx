import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface PrimaryButtonProps {
  /** Button label */
  label: string;
  /** Click handler */
  onClick?: () => void;
  /** Visual variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Icon displayed at the end of the button */
  icon?: LucideIcon;
  /** Fixed width (e.g. "200px"). Defaults to auto. */
  width?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Additional Tailwind classes */
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-500 text-white hover:bg-blue-600",
  ghost:
    "border border-border hover:border-foreground/20 hover:text-blue-500",
};

const sizeStyles: Record<ButtonSize, { button: string; icon: string }> = {
  sm: { button: "px-3.5 py-2 text-xs gap-1.5 rounded-lg",  icon: "w-3 h-3" },
  md: { button: "px-5 py-3 text-sm gap-2.5 rounded-xl",    icon: "w-4 h-4" },
  lg: { button: "px-6 py-3.5 text-base gap-3 rounded-xl",  icon: "w-5 h-5" },
};

export function PrimaryButton({
  label,
  onClick,
  variant = "primary",
  size = "md",
  icon: Icon,
  width,
  disabled = false,
  className = "",
}: PrimaryButtonProps) {
  const { button: buttonSize, icon: iconSize } = sizeStyles[size];

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.08 }}
      whileTap={disabled ? {} : { scale: 0.93 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      style={width ? { width } : undefined}
      className={[
        "cursor-pointer inline-flex items-center justify-center font-medium transition-colors",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        buttonSize,
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {label}
      {Icon && <Icon className={iconSize} />}
    </motion.button>
  );
}