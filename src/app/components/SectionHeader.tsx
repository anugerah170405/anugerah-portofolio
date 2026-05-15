import type { ReactNode } from "react";

type SectionHeadingProps = {
  icon?: React.ElementType;
  label: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  icon: Icon,
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : ""}>
      {/* Label */}
      <div
        className={`flex items-center gap-3 mb-5 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        {/* Optional Icon */}
        {Icon && (
          <div
            className="w-7 h-7 rounded-lg border border-blue-500/15 flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(59,130,246,0.07)" }}
          >
            <Icon className="w-3.5 h-3.5 text-blue-400" />
          </div>
        )}

        <div className="flex items-center gap-3">
          <div className="h-px w-5 bg-blue-500/40" />

          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "rgba(var(--text-tertiary-rgb), 0.55)" }}
          >
            {label}
          </span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`mt-5 text-sm sm:text-base leading-relaxed max-w-2xl ${
            isCenter ? "mx-auto" : ""
          }`}
          style={{ color: "rgba(var(--text-secondary-rgb), 0.75)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}