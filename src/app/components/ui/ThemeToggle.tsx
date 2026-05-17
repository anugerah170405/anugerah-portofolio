import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const ICONS = {
  light: Sun,
  dark: Moon,
} as const;

const iconVariants = {
  enter: { rotate: -90, scale: 0, opacity: 0 },
  center: { rotate: 0, scale: 1, opacity: 1 },
  exit: { rotate: 90, scale: 0, opacity: 0 },
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const isDark = theme === "dark";
  const Icon = ICONS[isDark ? "dark" : "light"];

  if (!mounted) {
    return <div className="w-8 h-8 rounded-lg bg-foreground/5 border border-foreground/10" />;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="cursor-pointer relative w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden border border-foreground/10"
      style={{ background: "rgba(128,128,128,0.06)" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          variants={iconVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute"
        >
          <Icon className="w-3.5 h-3.5" />
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}