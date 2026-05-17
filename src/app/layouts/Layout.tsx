import { Outlet, useLocation } from "react-router";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { ThemeProvider } from "../providers/ThemeProvider";
import { Header } from "./Header";
import { Footer } from "./Footer";



const pageVariants: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: -14, filter: "blur(6px)",
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
};


export function Layout() {
  const location = useLocation();

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

          <Footer/>

        </div>
    </ThemeProvider>
  );
}