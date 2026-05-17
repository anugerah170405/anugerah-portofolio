import { Outlet, useLocation, useMatches } from "react-router";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { ThemeProvider } from "../providers/ThemeProvider";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect } from "react";



const pageVariants: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0, y: -14, filter: "blur(6px)",
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
  },
};

const TITLES: Record<string, string> = {
  home: "Home",
  work: "Work",
  about: "About",
  gallery: "Gallery",
  contact: "Contact",
  "404": "404 Not Found",
};


export function Layout() {
  const location = useLocation();
  const matches = useMatches();

  useEffect(() => {
    const last = matches[matches.length - 1];

    const id = last?.id as string | undefined;
    const title = id ? TITLES[id] : "Anugerah Gari";

    document.title = title ? `${title} | Anugerah Gari` : "Anugerah Gari";
  }, [matches]);

  return (

    <ThemeProvider>
      <div
        className="min-h-screen relative overflow-hidden"
        style={{ background: "var(--background)" }}
      >

        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            variants={pageVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>

        <Footer />

      </div>
    </ThemeProvider>
  );
}