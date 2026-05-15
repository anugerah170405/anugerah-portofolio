import { Outlet, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ThemeProvider } from "./ThemeProvider";
import { Header } from "./Header";

export function Layout() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div
        className="min-h-screen relative overflow-hidden"
        style={{ background: "var(--background)" }}
      >
        {/* Ambient cinematic glow */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(96,165,250,0.05) 50%, transparent 70%)",
              filter: "blur(120px)",
              opacity: 0.65,
            }}
          />
          <motion.div
            animate={{ x: [0, -18, 0], y: [0, 18, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 6 }}
            className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(99,102,241,0.08) 0%, rgba(59,130,246,0.04) 50%, transparent 70%)",
              filter: "blur(120px)",
              opacity: 0.55,
            }}
          />
        </div>

        <Header />

        {/* Cinematic sweep line on route change */}
        <motion.div
          key={location.pathname + "-sweep"}
          className="fixed top-0 inset-x-0 h-[2px] z-[200] origin-left pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(59,130,246,0.9) 0%, rgba(99,102,241,0.7) 50%, rgba(96,165,250,0.3) 100%)",
          }}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />

        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}