type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isSubmitting?: boolean;
  type?: React.HTMLInputTypeAttribute;
  rows?: number;
};

const baseClass =
  "w-full px-4 py-3 rounded-lg border border-foreground/10 bg-transparent text-foreground/80 text-sm placeholder:text-foreground/25 focus:outline-none focus:border-blue-500/25 transition-colors disabled:opacity-60 disabled:cursor-not-allowed";

export function TextField({
  label,
  placeholder,
  value,
  onChange,
  isSubmitting = false,
  type = "text",
}: Props) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-widest text-foreground/30 mb-2">
        {label}
      </label>

      <input
        type={type}
        disabled={isSubmitting}
        required
        className={baseClass}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export function TextAreaField({
  label,
  placeholder,
  value,
  onChange,
  isSubmitting = false,
  rows = 6,
}: Props) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-widest text-foreground/30 mb-2">
        {label}
      </label>

      <textarea
        disabled={isSubmitting}
        required
        rows={rows}
        className={`${baseClass} resize-none`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}