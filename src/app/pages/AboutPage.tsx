import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Calendar, Award, BookOpen, Briefcase, FileText, ArrowUpRight } from "lucide-react";
import { BioSkills } from "../components/BioSkills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../../utils/ImageWithFallback";
import { CVModal } from "../components/modal/CVModal";
import { SectionHeading } from "../components/SectionHeader";
import { CV_DATA } from "@/data/CVData";
import { PORTRAIT } from "../../data/PortraitData";
import { STATS } from "../../data/StatsData";


function EducationSection() {
  return (
    <section className="px-4 sm:px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          icon={BookOpen}
          label="Education"
          title="School & Certification"
        />

        <div className="space-y-4 mt-10">
          {CV_DATA.education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="rounded-xl p-5 sm:p-6 border border-foreground/8 hover:border-blue-500/15 transition-all group"
              style={{ background: "rgba(128,128,128,0.025)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-3">
                <div className="min-w-0">
                  <h3 className="text-foreground/85 mb-0.5 text-sm sm:text-base">{edu.degree}</h3>
                  <p className="text-sm text-foreground/55">{edu.school}</p>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1.5 flex-shrink-0">
                  <span className="text-xs text-foreground/40 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 flex-shrink-0" /> {edu.period}
                  </span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded border border-blue-500/20 text-blue-400/70 whitespace-nowrap"
                    style={{ background: "rgba(59,130,246,0.06)" }}
                  >
                    {edu.highlight}
                  </span>
                </div>
              </div>
              <p className="text-sm text-foreground/48 leading-relaxed">{edu.desc}</p>
              <div className="flex items-center gap-1 mt-3">
                <MapPin className="w-3 h-3 text-foreground/30 flex-shrink-0" />
                <span className="text-xs text-foreground/35">{edu.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardsSection() {
  return (
    <section className="px-4 sm:px-6 py-16 md:py-20 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          icon={Award}
          label="Recognition"
          title="Awards"
        />

        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          {CV_DATA.awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="rounded-xl p-5 sm:p-6 border border-foreground/8 hover:border-blue-500/15 transition-all group"
              style={{ background: "rgba(128,128,128,0.025)" }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[10px] uppercase tracking-widest text-foreground/35">
                      {award.year}
                    </span>
                    <span className="text-[10px] text-foreground/22">·</span>
                    <span className="text-[10px] text-foreground/35">{award.org}</span>
                  </div>
                  <h3 className="text-foreground/80 leading-snug text-sm sm:text-base">{award.title}</h3>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded border border-foreground/8 text-foreground/50 flex-shrink-0"
                  style={{ background: "rgba(128,128,128,0.06)" }}
                >
                  {award.type}
                </span>
              </div>
              <p className="text-sm text-foreground/48 leading-relaxed">{award.desc}</p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-5 h-px bg-blue-500/30 origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="px-4 sm:px-6 py-16 md:py-20 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">

        <SectionHeading
          icon={Briefcase}
          label="Career"
          title="Experience"
        />

        <div className="space-y-4 mt-10">
          {CV_DATA.experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="rounded-xl p-5 sm:p-6 border border-foreground/8 hover:border-blue-500/15 transition-all group"
              style={{ background: "rgba(128,128,128,0.025)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-3">
                <div className="min-w-0">
                  {exp.current && (
                    <span
                      className="inline-flex items-center gap-1 text-[10px] text-green-500/80 border border-green-500/20 rounded px-1.5 py-0.5 mb-1.5"
                      style={{ background: "rgba(34,197,94,0.06)" }}
                    >
                      <span className="w-1 h-1 rounded-full bg-green-500/70 animate-pulse" />
                      Current
                    </span>
                  )}
                  <h3 className="text-foreground/85 mb-0.5 text-sm sm:text-base">{exp.role}</h3>
                  <p className="text-sm text-foreground/55">{exp.company}</p>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1.5 flex-shrink-0">
                  <span className="text-xs text-foreground/40 flex items-center gap-1.5 whitespace-nowrap">
                    <Calendar className="w-3 h-3 flex-shrink-0" /> {exp.period}
                  </span>
                  <span className="text-xs text-foreground/35 flex items-center gap-1 whitespace-nowrap">
                    <MapPin className="w-3 h-3 flex-shrink-0" /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-foreground/48 leading-relaxed mb-4">{exp.desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[10px] uppercase tracking-wide text-foreground/42 border border-foreground/8 rounded"
                    style={{ background: "rgba(128,128,128,0.04)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  const [isCVModalOpen, setCVModalOpen] = useState(false);

  return (
    <>
      {/* ── Page Header ── */}
      <div className="px-6 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

            {/* Left: heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                label="About Me"
                title={CV_DATA.name}
              />

              <p className="text-lg text-foreground/40 max-w-lg leading-relaxed mt-4">
                {CV_DATA.role} based in {CV_DATA.location}.
                Bridging the gap between design and engineering to build products
                people love.
              </p>

              {/* ── Stats bar + CV trigger ── */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.32 }}
                className="mt-8 rounded-xl border border-foreground/8 overflow-hidden w-full sm:w-auto sm:inline-flex"
                style={{ background: "rgba(128,128,128,0.035)" }}
              >
                {/* Stats — flex-wrap agar tidak mepet di HP kecil */}
                <div className="flex flex-wrap">
                  {STATS.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.42 + i * 0.07 }}
                      className="flex-1 flex flex-col items-center justify-center px-5 py-3 border-r border-foreground/7 sm:border-r"
                      style={{ minWidth: "72px" }}
                    >
                      <span
                        className="tabular-nums"
                        style={{ color: "var(--foreground)", opacity: 0.82, fontSize: "1.05rem", lineHeight: 1 }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-foreground/35 mt-0.5">
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}

                  {/* CV trigger — full width di mobile, normal di desktop */}
                  <motion.button
                    onClick={() => setCVModalOpen(true)}
                    whileHover="hovered"
                    whileTap={{ scale: 0.96 }}
                    className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 cursor-pointer overflow-hidden transition-colors duration-200 hover:bg-blue-500/10 border-foreground/7 border-t sm:border-t-0 sm:border-r-0 sm:border-foreground/7"
                  >
                    <motion.span
                      variants={{ hovered: { opacity: 1 }, default: { opacity: 0 } }}
                      initial={{ opacity: 0 }}
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "rgba(59,130,246,0.07)" }}
                    />
                    <FileText className="w-3.5 h-3.5 text-blue-500 relative z-10 transition-colors group-hover:text-blue-600" />
                    <span className="text-xs text-foreground/45 uppercase tracking-widest relative z-10 group-hover:text-blue-600 transition-colors">
                      CV
                    </span>
                    <motion.span
                      variants={{ hovered: { x: 1, y: -1, opacity: 1 }, default: { x: 0, y: 0, opacity: 0.4 } }}
                      className="relative z-10"
                    >
                      <ArrowUpRight className="w-3 h-3 text-blue-500 group-hover:text-blue-600 transition-colors" />
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Portrait photo */}
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex-shrink-0 mx-auto lg:mx-0"
              style={{ width: "clamp(220px, 30vw, 360px)" }}
            >
              <div
                className="absolute -inset-6 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />
              <div
                className="relative overflow-hidden rounded-2xl border border-foreground/10 shadow-2xl"
                style={{ aspectRatio: "3/4" }}
              >
                <ImageWithFallback
                  src={PORTRAIT}
                  alt="Anugerah Gari"
                  className="w-full h-full object-cover object-top"
                />
                <div
                  className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
                  style={{ background: "radial-gradient(circle at top right, rgba(59,130,246,0.2) 0%, transparent 65%)" }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bio + Skills */}
      <BioSkills />

      {/* Education */}
      <EducationSection />

      {/* Awards */}
      <AwardsSection />

      {/* Experience */}
      <ExperienceSection />

      {/* Let's Work Together */}
      <Contact />

      <Footer />

      {/* CV Modal */}
      <CVModal open={isCVModalOpen} onClose={() => setCVModalOpen(false)} />
    </>
  );
}