import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type IconButtonSize = "sm" | "md" | "lg";

interface IconButtonProps {
    /** Lucide icon to render */
    icon: LucideIcon;
    /** Click handler */
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    /** Stop event propagation before calling onClick */
    stopPropagation?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Size preset */
    size?: IconButtonSize;
    /** aria-label for accessibility */
    label?: string;
    /** Additional className */
    className?: string;
}

const sizeMap: Record<IconButtonSize, { button: string; icon: string }> = {
    sm: { button: "w-6 h-6 rounded", icon: "w-3 h-3" },
    md: { button: "w-8 h-8 rounded-md", icon: "w-4 h-4" },
    lg: { button: "w-10 h-10 rounded-lg", icon: "w-5 h-5" },
};

export function IconButton({
    icon: Icon,
    onClick,
    stopPropagation = false,
    disabled = false,
    size = "md",
    label,
    className = "",
}: IconButtonProps) {
    const { button: btnSize, icon: iconSize } = sizeMap[size];

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (stopPropagation) e.stopPropagation();
        onClick?.(e);
    };

    return (
        <motion.button
            whileHover={disabled ? {} : { scale: 1.08 }}
            whileTap={disabled ? {} : { scale: 0.93 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            onClick={handleClick}
            disabled={disabled}
            aria-label={label}
            className={`cursor-pointer group flex-shrink-0 flex items-center justify-center border transition-all disabled:opacity-20 disabled:cursor-not-allowed ${btnSize} ${className}`}
            style={{
                background: "var(--sheet-card-bg)",
                borderColor: "var(--sheet-card-border)",
            }}
        >
            <Icon
                className={`${iconSize} transition-colors duration-150 group-hover:text-blue-500`}
            />
        </motion.button>
    );
}