import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "../components/ui/ThemeToggle";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { Logo } from "../components/ui/Logo";
import { SOCIALS } from "@/data/ContactData";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Works", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Gallery", path: "/gallery" },
];

// Hamburger / X icon component
function MenuToggleIcon({ open }: { open: boolean }) {
  return (
    <div className="w-6 h-5 relative flex flex-col justify-between">
      <motion.span
        animate={open ? { rotate: 45, y: 9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: "var(--foreground)", opacity: 0.7 }}
        className="block h-px origin-center"
      />
      <motion.span
        animate={open ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        style={{ background: "var(--foreground)", opacity: 0.7 }}
        className="block h-px w-3/4"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: "var(--foreground)", opacity: 0.7 }}
        className="block h-px origin-center"
      />
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu + scroll top on route change
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const go = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Top bar ── */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className="transition-all duration-500"
          style={{
            backdropFilter: scrolled && !menuOpen ? "blur(20px) saturate(180%)" : "blur(0px)",
            background:
              scrolled && !menuOpen
                ? "color-mix(in srgb, var(--background) 88%, transparent)"
                : "transparent",
            borderBottom:
              scrolled && !menuOpen
                ? "1px solid color-mix(in srgb, var(--foreground) 6%, transparent)"
                : "1px solid transparent",
          }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 h-16 flex items-center justify-between">

            {/* Logo */}
            <motion.button
              whileHover={{ opacity: 0.6 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => go("/")}
              transition={{ duration: 0.18 }}
              className="cursor-pointer flex items-center gap-2.5 flex-shrink-0 relative z-[60]"
            >
              <Logo className="text-foreground/80" />
              {/* <span
                className={`text-md transition-colors duration-300 hidden sm:block ${
                  menuOpen ? "text-foreground/80" : "text-foreground/70"
                }`}
              >
                Anugerah Gari
              </span> */}
            </motion.button>

            {/* Desktop nav — centered */}
            <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.path);
                return (
                  <button
                    key={item.path}
                    onClick={() => go(item.path)}
                    className="relative flex items-center gap-1.5 px-4 py-2 text-sm cursor-pointer outline-none group"
                  >
                    {/* Active dot */}
                    <motion.div
                      initial={false}
                      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.3 }}
                      transition={{ duration: 0.22 }}
                      className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"
                    />
                    <span
                      className={`transition-colors duration-200 ${
                        active
                          ? "text-blue-500"
                          : "text-foreground/38 group-hover:text-foreground/62"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Right: ThemeToggle (desktop only) + Hamburger (mobile only) */}
            <div className="flex items-center gap-3 relative z-[60]">
              {/* Theme toggle — desktop only */}
              <div className="hidden md:block">
                <ThemeToggle />
              </div>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden w-9 h-9 flex items-center justify-center cursor-pointer rounded-lg transition-colors hover:bg-foreground/5"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <MenuToggleIcon open={menuOpen} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Fullscreen Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="fullscreen-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: "var(--background)" }}
          >
            {/* Subtle background pattern */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 15% 50%, rgba(59,130,246,0.06) 0%, transparent 60%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-px bg-foreground/5" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full px-6 pt-24 pb-10">

              {/* ── Nav Items ── */}
              <nav className="flex-1 flex flex-col justify-center gap-0">
                {NAV_ITEMS.map((item, i) => {
                  const active = isActive(item.path);
                  return (
                    <motion.button
                      key={item.path}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{
                        delay: 0.05 + i * 0.07,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onClick={() => go(item.path)}
                      className="group flex items-center gap-5 py-3 w-full text-left cursor-pointer outline-none border-b border-foreground/5 last:border-0"
                    >
                      {/* Active dot */}
                      <div className="w-5 flex items-center justify-center flex-shrink-0">
                        <motion.div
                          initial={false}
                          animate={{
                            opacity: active ? 1 : 0,
                            scale: active ? 1 : 0.4,
                          }}
                          transition={{ duration: 0.25 }}
                          className="w-2 h-2 rounded-full bg-blue-500"
                        />
                      </div>

                      {/* Label */}
                      <span
                        className={`text-[clamp(2.8rem,10vw,6rem)] leading-none tracking-tight transition-colors duration-200 ${
                          active
                            ? "text-blue-500"
                            : "text-foreground/18 group-hover:text-foreground/45"
                        }`}
                      >
                        {item.label}
                      </span>

                      {/* Index number */}
                      <span
                        className={`ml-auto text-xs transition-colors duration-200 self-end pb-3 ${
                          active ? "text-blue-500/50" : "text-foreground/15"
                        }`}
                      >
                        0{i + 1}
                      </span>
                    </motion.button>
                  );
                })}
              </nav>

              {/* ── Bottom bar: Theme toggle + socials ── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="flex items-center justify-between pt-8 border-t border-foreground/8"
              >
                {/* Theme toggle */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-foreground/28 uppercase tracking-widest">Theme</span>
                  <ThemeToggle />
                </div>

                {/* Socials */}
                <div className="flex items-center gap-3">
                  {SOCIALS.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      whileHover={{ y: -2, opacity: 0.7 }}
                      whileTap={{ scale: 0.93 }}
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-foreground/8 text-foreground/40 hover:text-foreground/65 transition-colors"
                      style={{ background: "rgba(128,128,128,0.04)" }}
                      aria-label={s.label}
                    >
                      <s.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}