import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useModalDialog } from "@/hooks/UseModalDialog";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";
import { galleryItems } from "@/data/GalleryData";
import { IconButton } from "../ui/IconButton";
import { ImageWithFallback } from "@/utils/ImageWithFallback";

interface LightBoxModalProps {
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function LightBoxModal({ index, onClose, onPrev, onNext }: LightBoxModalProps) {
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