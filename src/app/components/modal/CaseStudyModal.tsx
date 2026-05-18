import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";
import remarkGfm from "remark-gfm";
import {
  X, ChevronLeft, ChevronRight,
  Link2,
} from "lucide-react";
import { ImageWithFallback } from "../../../utils/ImageWithFallback";
import { IconButton } from "../ui/IconButton";
import { LinkChip } from "../ui/LinkChip";
import { AuthorChip } from "../ui/AuthorChip";
import ReactMarkdown from "react-markdown";
import type { Project } from "../../../types/ProjectType";
import { useModalDialog } from "@/hooks/UseModalDialog";
import { LINK_ICONS } from "@/types/LinkIconType";
import { BackDrop } from "../ui/BackDrop";
import { useEffect, useRef } from "react";


interface Props {
  open: boolean; onClose: () => void; project: Project;
  onPrev: () => void; onNext: () => void;
  hasPrev: boolean; hasNext: boolean;
  currentIndex: number; total: number;
}
const fg = (pct: number) =>
  `color-mix(in oklch, var(--foreground) ${pct}%, transparent)`;

export function CaseStudyModal({
  open, onClose, project,
  onPrev, onNext, hasPrev, hasNext,
  currentIndex, total,

}: Props) {

  useModalDialog({ open, onClose, onPrev, onNext, hasPrev, hasNext });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTo({top:0, behavior: "instant"});
    }
  }, [open, project.title]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* ── Backdrop ── */}
          <BackDrop key="backdrop-casestudy" onClose={onClose} />

          {/* ── Panel ── */}
          <motion.div
            key={`cs-panel`}
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 340 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div
              className="relative w-full max-w-3xl pointer-events-auto flex flex-col"
              style={{ maxHeight: "88vh" }}
            >

              {/* ── Top bar ── */}
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-t-xl border-b flex-shrink-0"
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
                  {project.category}
                </span>

                {/* Title */}
                <h3
                  className="flex-1 text-sm truncate"
                  style={{ color: "color-mix(in srgb, var(--foreground) 70%, transparent)" }}
                >
                  {project.title}
                </h3>

                {/* Counter */}
                <span
                  className="text-xs tabular-nums flex-shrink-0"
                  style={{ color: "color-mix(in srgb, var(--foreground) 30%, transparent)" }}
                >
                  {currentIndex + 1} / {total}
                </span>

                {/* Prev */}

                <IconButton
                  icon={ChevronLeft}
                  onClick={onPrev}
                  disabled={!hasPrev}
                />

                {/* Next */}
                <IconButton
                  icon={ChevronRight}
                  onClick={onNext}
                  disabled={!hasNext}
                />

                {/* Close */}
                <IconButton
                  icon={X}
                  onClick={onClose}
                />
              </div>

              {/* ── Scrollable content ── */}
              <div
                ref={scrollRef}
                className="overflow-y-auto rounded-b-xl border-b border-l border-r"
                style={{
                  borderColor: "var(--sheet-border)",
                  background: "var(--sheet-bg)",
                }}
              >

                {/* Thumbnail */}
                <div
                  key={`thumb-${project.title}`}
                  className="mx-5 mt-5 mb-5 rounded-xl overflow-hidden relative"
                  style={{ height: "220px" }}
                >
                  <ImageWithFallback
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                    style={{ background: "linear-gradient(to top, var(--sheet-bg), transparent)" }}
                  />
                </div>

                {/* Title + Description + Links */}
                <div
                  key={`body-${project.title}`}
                  className="px-5 mb-5 flex gap-5 items-start flex-col md:flex-row"
                >
                  {/* Left */}
                  <div className="flex flex-col flex-1 min-w-0">
                    <h2 className="text-2xl md:text-3xl mb-2">{project.title}</h2>
                    <h3 className="text-sm mb-2 font-normal" style={{ color: fg(48) }}>{project.year}</h3>
                    <p
                      className="leading-relaxed mb-4 text-sm"
                      style={{ color: "color-mix(in srgb, var(--foreground) 52%, transparent)" }}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    {project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-1 rounded text-[10px] uppercase tracking-wide border"
                            style={{
                              background: "var(--sheet-card-bg)",
                              borderColor: "var(--sheet-card-border)",
                              color: "color-mix(in srgb, var(--foreground) 55%, transparent)",
                              backdropFilter: "blur(8px)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right: links */}
                  {project.links && project.links.length > 0 && (
                    <div className="flex-shrink-0 flex flex-row flex-wrap md:flex-col gap-2 pt-1">
                      {project.links.map((link) => {
                        const Icon = LINK_ICONS[link.icon] ?? Link2;
                        return (
                          <LinkChip key={link.label} url={link.url} label={link.label} icon={Icon} />
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Authors */}
                <div
                  key={`authors-${project.title}`}
                  className="px-5 mb-5"
                >
                  <p
                    className="text-[10px] uppercase tracking-widest mb-2.5"
                    style={{ color: "color-mix(in srgb, var(--foreground) 28%, transparent)" }}
                  >
                    {project.authors.length > 1 ? "Authors" : "Author"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.authors.map((author) => (
                      <AuthorChip name={author.name} socialUrl={author.socialUrl} avatar={author.avatar} role={author.role} />
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="mx-5 mb-5 h-px"
                  style={{ background: "color-mix(in srgb, var(--foreground) 6%, transparent)" }}
                />

                {/* Case Study blocks */}
                <div
                  key={`case-${project.title}`}
                  className="px-5 pb-8 space-y-3"
                >
                  <h3
                    className="text-xs uppercase tracking-widest mb-5"
                    style={{ color: "color-mix(in srgb, var(--foreground) 30%, transparent)" }}
                  >
                    Case Study
                  </h3>

                  {[
                    { label: "Challenge", body: project.challenge },
                    { label: "Solution", body: project.solution },
                    { label: "Process", body: project.process },
                    { label: "Result", body: project.result },

                  ].filter((item) => item.body && item.body.trim() !== "").map(({ label, body }, index) => (
                    <div
                      key={index}
                      className="rounded-lg p-5 border"
                      style={{ background: "var(--sheet-card-bg)", borderColor: "var(--sheet-card-border)" }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-5 h-5 rounded-md flex items-center justify-center bg-blue-500 opacity-70 text-[9px] text-white">
                          {index + 1}
                        </div>
                        <h4
                          className="text-xs uppercase tracking-wider"
                          style={{ color: "color-mix(in srgb, var(--foreground) 40%, transparent)" }}
                        >
                          {label}
                        </h4>
                      </div>



                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ children }) => (
                            <p className="leading-relaxed text-sm mb-3"
                              style={{ color: "color-mix(in srgb, var(--foreground) 65%, transparent)" }}>
                              {children}
                            </p>
                          ),
                          strong: ({ children }) => (
                            <strong style={{ color: "color-mix(in srgb, var(--foreground) 85%, transparent)" }}>
                              {children}
                            </strong>
                          ),
                          ul: ({ children }) => (
                            <ul className="list-disc list-inside space-y-1 mb-3 text-sm"
                              style={{ color: "color-mix(in srgb, var(--foreground) 60%, transparent)" }}>
                              {children}
                            </ul>
                          ),
                          ol: ({ children }) => (
                            <ol className="list-decimal list-inside space-y-1 mb-3 text-sm"
                              style={{ color: "color-mix(in srgb, var(--foreground) 60%, transparent)" }}>
                              {children}
                            </ol>
                          ),
                          li: ({ children }) => (
                            <li className="leading-relaxed">{children}</li>
                          ),
                          blockquote: ({ children }) => (
                            <blockquote className="border-l-2 border-blue-500/40 pl-3 my-3 italic text-sm"
                              style={{ color: "color-mix(in srgb, var(--foreground) 50%, transparent)" }}>
                              {children}
                            </blockquote>
                          ),
                          h1: ({ children }) => (
                            <h1 className="text-2xl font-semibold mb-4 mt-6 text-foreground">{children}</h1>
                          ),
                          h2: ({ children }) => (
                            <h2 className="text-xl font-semibold mb-3 mt-5 text-foreground">{children}</h2>
                          ),
                          h3: ({ children }) => (
                            <h3 className="text-lg font-medium mb-2 mt-4 text-foreground">{children}</h3>
                          ),
                          h4: ({ children }) => (
                            <h4 className="text-base font-medium mb-2 mt-3 text-foreground">{children}</h4>
                          ),
                          hr: () => (
                            <hr className="my-4 border-0 h-px"
                              style={{ background: "var(--sheet-card-border)" }} />
                          ),
                          a: ({ href, children }) => (
                            <a href={href} target="_blank" rel="noopener noreferrer"
                              className="cursor-pointer underline underline-offset-2 text-blue-500 hover:text-blue-400 transition-colors">
                              {children}
                            </a>
                          ),
                          table: ({ children }) => (
                            <div className="overflow-x-auto mb-3">
                              <table className="w-full text-xs border-collapse">{children}</table>
                            </div>
                          ),
                          th: ({ children }) => (
                            <th className="text-left px-3 py-2 border-b text-foreground/50 uppercase tracking-wide"
                              style={{ borderColor: "var(--sheet-card-border)" }}>
                              {children}
                            </th>
                          ),
                          td: ({ children }) => (
                            <td className="px-3 py-2 border-b text-foreground/60"
                              style={{ borderColor: "var(--sheet-card-border)" }}>
                              {children}
                            </td>
                          ),
                          img: ({ src, alt }) => (
                            <img src={src} alt={alt}
                              className="w-full rounded-lg border my-3 object-cover"
                              style={{ borderColor: "var(--sheet-card-border)" }} />
                          ),
                        }}
                      >
                        {body}
                      </ReactMarkdown>



                    </div>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}