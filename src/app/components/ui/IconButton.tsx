import type { LucideIcon } from "lucide-react";

type IconButtonSize = "sm" | "md" | "lg";

interface IconButtonProps {
    icon: LucideIcon;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    stopPropagation?: boolean;
    disabled?: boolean;
    size?: IconButtonSize;
    label?: string;
    className?: string;
}

const sizeMap: Record<IconButtonSize, { button: string; icon: string }> = {
    sm: { button: "p-1 rounded", icon: "w-3 h-3" },
    md: { button: "p-1.5 rounded-md", icon: "w-4 h-4" },
    lg: { button: "p-2 rounded-lg", icon: "w-5 h-5" },
};

export function IconButton({
    icon: Icon,
    onClick,
    disabled = false,
    size = "md",
    label,
    className = "",
}: IconButtonProps) {
    const { button: btnSize, icon: iconSize } = sizeMap[size];

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);
    };

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            aria-label={label}
            className={`
    cursor-pointer
    group
    flex-shrink-0
    flex
    items-center
    justify-center
    gap-1
    border
    transition-all
    duration-150
    ease-out
    active:scale-95
    hover:scale-105
    disabled:opacity-20
    disabled:cursor-not-allowed
    ${btnSize}
    ${className}
  `}
            style={{
                background: "var(--sheet-card-bg)",
                borderColor: "var(--sheet-card-border)",
            }}
        >
            <Icon
                className={`
      ${iconSize}
      transition-colors
      duration-150
      group-hover:text-blue-500
    `}
            />
            {label && <p className="font-normal text-xs group-hover:text-blue-500">{label}</p>}
        </button>
    );
}