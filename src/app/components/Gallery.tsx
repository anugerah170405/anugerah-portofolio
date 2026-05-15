import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../../utils/ImageWithFallback";
import { galleryItems } from "@/data/GalleryData";
import { useModalDialog } from "@/hooks/UseModalDialog";
import { IconButton } from "./ui/IconButton";

interface LightboxProps {
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ index, onClose, onPrev, onNext }: LightboxProps) {
  const item = index !== null ? galleryItems[index] : null;
  const hasPrev = index !== null && index > 0;
  const hasNext = index !== null && index < galleryItems.length - 1;

  useModalDialog({
    open: index !== null,
    onClose,
    onPrev,
    onNext,
    hasPrev,
    hasNext,
  });

  return createPortal(
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            key="lb-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-50"
            style={{ backdropFilter: "blur(10px) saturate(160%)", background: "color-mix(in srgb, var(--background) 82%, transparent)" }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key={`lb-panel-${index}`}
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 340 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div className="relative w-full max-w-4xl pointer-events-auto">

              {/* ── Top bar: tag / counter / close ── */}
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-t-xl border-b"
                style={{
                  background: "var(--sheet-bg)",
                  borderColor: "var(--sheet-border)",
                  borderTop: "1px solid var(--sheet-border)",
                  borderLeft: "1px solid var(--sheet-border)",
                  borderRight: "1px solid var(--sheet-border)",
                }}
              >
                {/* Category chip */}
                <span
                  className="px-2.5 py-1 rounded-md text-[10px] uppercase tracking-widest border flex-shrink-0"
                  style={{
                    background: "var(--sheet-card-bg)",
                    borderColor: "var(--sheet-card-border)",
                    color: "color-mix(in srgb, var(--foreground) 45%, transparent)",
                  }}
                >
                  {item.tag}
                </span>

                {/* Title */}
                <h3
                  className="flex-1 text-sm truncate"
                  style={{ color: "color-mix(in srgb, var(--foreground) 70%, transparent)" }}
                >
                  {item.title}
                </h3>

                {/* Counter */}
                <span
                  className="text-xs tabular-nums flex-shrink-0"
                  style={{ color: "color-mix(in srgb, var(--foreground) 30%, transparent)" }}
                >
                  {(index ?? 0) + 1} / {galleryItems.length}
                </span>

                {/* Prev */}
                <IconButton
                  icon={ChevronLeft}
                  onClick={onPrev}
                  stopPropagation
                  disabled={!hasPrev}
                  label="Next"
                />

                {/* Next */}
                <IconButton
                  icon={ChevronRight}
                  onClick={onNext}
                  stopPropagation
                  disabled={!hasNext}
                  label="Next"
                />

                {/* Close */}
                <IconButton
                  icon={X}
                  onClick={onClose}
                  stopPropagation
                  label="Next"
                />
              </div>

              {/* ── Image area ── */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`lb-img-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden rounded-b-xl border-b border-l border-r"
                  style={{ borderColor: "var(--sheet-border)" }}
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover block"
                    style={{ maxHeight: "68vh" }}
                  />
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePrev = () => setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const handleNext = () =>
    setActiveIndex((i) => (i !== null && i < galleryItems.length - 1 ? i + 1 : i));

  return (
    <section id="gallery" className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Bento grid */}
        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: "repeat(3, 1fr)", gridAutoFlow: "dense" }}
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ scale: 1.015 }}
              onClick={() => setActiveIndex(i)}
              className="relative rounded-xl overflow-hidden cursor-pointer group border border-foreground/8 hover:border-foreground/16 transition-colors"
              style={{
                gridColumn: item.wide ? "span 2" : "span 1",
                height: "210px",
              }}
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.02) 50%, transparent 100%)",
                }}
              />

              {/* Info + zoom */}
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="w-7 h-7 rounded-md flex items-center justify-center border border-white/20"
                    style={{ background: "rgba(255,255,255,0.10)" }}
                  >
                    <ZoomIn className="w-3 h-3 text-white/80" />
                  </motion.div>
                </div>
                <div>
                  <p className="text-[9px] text-white/45 uppercase tracking-widest mb-0.5">
                    {item.tag}
                  </p>
                  <p className="text-sm text-white/85">{item.title}</p>
                </div>
              </div>

              {/* Rainbow bottom accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-x-0 bottom-0 h-0.5 rainbow-border origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}