import { ArrowUpRight } from "lucide-react";

interface AuthorChipProps {
  name: string;
  role: string;
  avatar: string;
  socialUrl: string;
}

export function AuthorChip({ name, role, avatar, socialUrl }: AuthorChipProps) {
  return (
    <a
      href={socialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2.5 px-3 py-2 rounded-lg border transition-all cursor-pointer hover:scale-105"
      style={{ background: "var(--sheet-card-bg)", borderColor: "var(--sheet-card-border)" }}
    >
      <div className="w-7 h-7 rounded-md overflow-hidden border border-foreground/10 flex-shrink-0">
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="min-w-0">
        <p className="text-xs leading-none whitespace-nowrap text-foreground/70 group-hover:text-blue-500 transition-colors">
          {name}
        </p>
        <p className="text-[10px] mt-1 leading-none whitespace-nowrap"
        style={{color: "rgba(var(--text-secondary-rgb), 0.75)" }}>
          {role}
        </p>
      </div>
      <ArrowUpRight className="w-3 h-3 text-foreground/20 group-hover:text-blue-400/60 transition-colors flex-shrink-0" />
    </a>
  );
}