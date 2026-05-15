import { motion } from "motion/react";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { SectionHeading } from "../components/SectionHeader";

export function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <div className="px-4 sm:px-6 pt-32 sm:pt-36 pb-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              label="Visual Collection"
              title="Gallery"
              description="A curated collection of visual work — interfaces, identities, and creative moments."
            />

          </motion.div>
        </div>
      </div>

      <Gallery />

      {/* Let's Work Together */}
      <Contact />

      <Footer />
    </>
  );
}
