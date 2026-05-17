import { useNavigate } from "react-router";
import { Logo } from "../components/ui/Logo";
import { SOCIALS } from "@/data/ContactData";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export function Footer() {
  const navigate = useNavigate();

  const textTertiary = { color: "rgba(var(--text-tertiary-rgb), 0.55)" };

  return (
    <footer className="relative z-10 border-t border-foreground/6 px-6 pt-12 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-4 flex items-center gap-2.5">
              <Logo />
              <span className="text-sm">Anugerah Gari</span>
            </div>
            <p className="text-sm leading-relaxed"
              style={{ color: "rgba(var(--text-secondary-rgb), 0.75)" }}>
              UI/UX Designer &amp; Frontend Developer. Crafting digital experiences that are beautiful, functional, and human-centered.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-2">
            <p className="text-[10px] uppercase tracking-widest mb-1">
              Navigation
            </p>
            {NAV_LINKS.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="text-sm hover:text-blue-500 transition-colors text-left cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>


          {/* Contact Quick */}
          <div className="flex flex-col gap-2">
            <p className="text-[10px] uppercase tracking-widest mb-1">
              Get in Touch
            </p>
            {SOCIALS.map((link) => (
              <a
                href={link.href}
                className="text-sm hover:text-blue-500 transition-colors text-left cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-6 border-t border-foreground/6">
          <p className="text-xs" style={textTertiary}>© 2026 Anugerah Gari. All rights reserved.</p>
          <p className="text-xs" style={textTertiary}>Portofolio v1</p>
        </div>
      </div>
    </footer>
  );
}