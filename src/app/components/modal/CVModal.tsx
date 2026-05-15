import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, Download, MapPin, Mail, Globe, Briefcase, BookOpen, Award } from "lucide-react";
import { IconButton } from "../ui/IconButton";
import { CV_DATA } from "../../../data/CVData";
import { useModalDialog } from "@/hooks/UseModalDialog";


interface CVModalProps {
  open: boolean;
  onClose: () => void;
}

export function CVModal({ open, onClose }: CVModalProps) {

  const handleDownloadCV = async () => {
    const { useGenerateCV } = await import("@/hooks/useGenerateCV");
    const { generate } = useGenerateCV();

    await generate();
  };

  useModalDialog({ open, onClose });

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* ── Backdrop*/}
          <motion.div
            key="cv-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-50"
            style={{
              backdropFilter: "blur(10px) saturate(160%)",
              background: "color-mix(in srgb, var(--background) 82%, transparent)",
            }}
            onClick={onClose}
          />

          {/* ── Panel — */}
          <motion.div
            key="cv-panel"
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 340 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div
              className="relative w-full max-w-2xl pointer-events-auto flex flex-col"
              style={{ maxHeight: "88vh" }}
            >

              {/* ── Top bar —*/}
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
                {/* Chip label */}
                <span
                  className="px-2.5 py-1 rounded-md text-[10px] uppercase tracking-widest border flex-shrink-0"
                  style={{
                    background: "var(--sheet-card-bg)",
                    borderColor: "var(--sheet-card-border)",
                    color: "color-mix(in srgb, var(--foreground) 45%, transparent)",
                  }}
                >
                  CV
                </span>

                {/* Title */}
                <h3
                  className="flex-1 text-sm truncate"
                  style={{ color: "color-mix(in srgb, var(--foreground) 70%, transparent)" }}
                >
                  Curriculum Vitae ⎯ {CV_DATA.name}
                </h3>

                <motion.button
                  onClick={handleDownloadCV}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] border flex-shrink-0 transition-colors hover:text-blue-500 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </motion.button>

                {/* Close */}
                <IconButton
                  icon={X}
                  onClick={onClose}
                  stopPropagation
                  label="Next"
                />
              </div>

              {/* ── Content area — identik Gallery: rounded-b-xl border-b border-l border-r ── */}
              <div
                className="overflow-y-auto rounded-b-xl border-b border-l border-r"
                style={{
                  borderColor: "var(--sheet-border)",
                  background: "var(--sheet-bg)",
                }}
              >
                <div className="p-6 md:p-10 space-y-8">

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-2">
                    <div>
                      <h2 className="text-3xl md:text-4xl mb-1">{CV_DATA.name}</h2>
                      <p className="text-sm text-blue-500">
                        {CV_DATA.role}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5 sm:text-right">
                      <span
                        className="flex items-center gap-1.5 sm:justify-end text-xs"
                        style={{ color: "color-mix(in srgb, var(--foreground) 38%, transparent)" }}
                      >
                        <MapPin className="w-3 h-3 flex-shrink-0" /> {CV_DATA.location}
                      </span>
                      <span
                        className="flex items-center gap-1.5 sm:justify-end text-xs"
                        style={{ color: "color-mix(in srgb, var(--foreground) 38%, transparent)" }}
                      >
                        <Mail className="w-3 h-3 flex-shrink-0" /> {CV_DATA.email}
                      </span>
                      <span
                        className="flex items-center gap-1.5 sm:justify-end text-xs"
                        style={{ color: "color-mix(in srgb, var(--foreground) 38%, transparent)" }}
                      >
                        <Globe className="w-3 h-3 flex-shrink-0" /> {CV_DATA.website}
                      </span>
                    </div>
                  </div>

                  {/* Profile */}
                  <div>
                    <CVSectionLabel label="Profile" />
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "color-mix(in srgb, var(--foreground) 52%, transparent)" }}
                    >
                      {CV_DATA.profile}
                    </p>
                  </div>

                  {/* Experience */}
                  <div>
                    <CVSectionLabel label="Experience" icon={Briefcase} />
                    <div className="space-y-5">
                      {CV_DATA.experience.map((exp) => (
                        <div key={exp.role} className="flex gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-0.5">
                              <span
                                className="text-sm"
                                style={{ color: "color-mix(in srgb, var(--foreground) 82%, transparent)" }}
                              >
                                {exp.role}
                              </span>
                              {exp.current && (
                                <span
                                  className="text-[9px] px-1.5 py-0.5 rounded border border-green-500/20 text-green-500/70"
                                  style={{ background: "rgba(34,197,94,0.06)" }}
                                >
                                  Current
                                </span>
                              )}
                            </div>
                            <p
                              className="text-xs mb-1.5"
                              style={{ color: "color-mix(in srgb, var(--foreground) 38%, transparent)" }}
                            >
                              {exp.company} · {exp.period}
                            </p>
                            <p
                              className="text-xs leading-relaxed mb-2"
                              style={{ color: "color-mix(in srgb, var(--foreground) 48%, transparent)" }}
                            >
                              {exp.desc}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {exp.tags.map((t) => (
                                <span
                                  key={t}
                                  className="text-[9px] px-1.5 py-0.5 rounded border border-foreground/8 uppercase tracking-wide"
                                  style={{
                                    background: "var(--sheet-card-bg)",
                                    borderColor: "var(--sheet-card-border)",
                                    color: "color-mix(in srgb, var(--foreground) 38%, transparent)",
                                  }}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <CVSectionLabel label="Education" icon={BookOpen} />
                    <div className="space-y-4">
                      {CV_DATA.education.map((edu) => (
                        <div key={edu.degree} className="flex gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{
                              background: "color-mix(in srgb, var(--foreground) 18%, transparent)",
                            }}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p
                                  className="text-sm"
                                  style={{ color: "color-mix(in srgb, var(--foreground) 78%, transparent)" }}
                                >
                                  {edu.degree}
                                </p>
                                <p
                                  className="text-xs"
                                  style={{ color: "color-mix(in srgb, var(--foreground) 38%, transparent)" }}
                                >
                                  {edu.school} · {edu.period}
                                </p>
                              </div>
                              <span
                                className="text-[9px] px-1.5 py-0.5 rounded border border-blue-500/20 flex-shrink-0"
                                style={{
                                  background: "rgba(59,130,246,0.06)",
                                  color: "rgba(96,165,250,0.65)",
                                }}
                              >
                                {edu.highlight}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Awards */}
                  <div>
                    <CVSectionLabel label="Awards" icon={Award} />
                    <div className="space-y-3">
                      {CV_DATA.awards.map((a) => (
                        <div key={a.title} className="flex items-start gap-3">
                          <span
                            className="text-[10px] w-8 flex-shrink-0 pt-0.5 tabular-nums"
                            style={{ color: "color-mix(in srgb, var(--foreground) 30%, transparent)" }}
                          >
                            {a.year}
                          </span>
                          <div>
                            <p
                              className="text-xs"
                              style={{ color: "color-mix(in srgb, var(--foreground) 70%, transparent)" }}
                            >
                              {a.title}
                            </p>
                            <p
                              className="text-[10px]"
                              style={{ color: "color-mix(in srgb, var(--foreground) 34%, transparent)" }}
                            >
                              {a.org}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="pb-2">
                    <CVSectionLabel label="Skills & Tools" />
                    <div className="flex flex-wrap gap-1.5">
                      {Object.values(CV_DATA.skills)
                        .flat()
                        .map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] px-2 py-1 rounded border uppercase tracking-wide"
                            style={{
                              background: "var(--sheet-card-bg)",
                              borderColor: "var(--sheet-card-border)",
                              color:
                                "color-mix(in srgb, var(--foreground) 42%, transparent)",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                    </div>
                  </div>

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

/* ── Sub-component ── */
function CVSectionLabel({
  label,
  icon: Icon,
}: {
  label: string;
  icon?: React.ElementType;
}) {
  return (
    <div className="flex items-center gap-2 mb-4">
      {Icon && (
        <Icon className="w-3.5 h-3.5 text-blue-500" />
      )}
      <span
        className="text-[10px] uppercase tracking-widest"
        style={{ color: "color-mix(in srgb, var(--foreground) 32%, transparent)" }}
      >
        {label}
      </span>
      <div
        className="flex-1 h-px"
        style={{ background: "color-mix(in srgb, var(--foreground) 6%, transparent)" }}
      />
    </div>
  );
}