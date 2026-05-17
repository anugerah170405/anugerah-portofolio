import { useState } from "react";
import { FileText, ArrowUpRight } from "lucide-react";
import { Contact } from "../../../components/ui/Contact";
import { ImageWithFallback } from "../../../../utils/ImageWithFallback";
import { CVModal } from "../../../components/modal/CVModal";
import { SectionHeading } from "../../../components/ui/SectionHeader";
import { CV_DATA } from "@/data/CVData";
import { PORTRAIT } from "../../../../data/PortraitData";
import { STATS } from "../../../../data/StatsData";
import { EducationSection } from "../sections/EducationSection";
import { AwardsSection } from "../sections/AwardSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { BioSection } from "../sections/BioSection";


export function AboutPage() {
  const [isCVModalOpen, setCVModalOpen] = useState(false);

  return (
    <>
      {/* ── Page Header ── */}
      <div className="px-6 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

            {/* Left: heading */}
            <div
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
              <div
                className="mt-8 rounded-xl border border-foreground/8 overflow-hidden w-full sm:w-auto sm:inline-flex"
                style={{ background: "rgba(128,128,128,0.035)" }}
              >
                {/* Stats — flex-wrap agar tidak mepet di HP kecil */}
                <div className="flex flex-wrap">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
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
                    </div>
                  ))}

                  {/* CV trigger — full width di mobile, normal di desktop */}
                  <button
                    onClick={() => setCVModalOpen(true)}
                    className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 cursor-pointer overflow-hidden transition-colors duration-200 hover:bg-blue-500/10 border-foreground/7 border-t sm:border-t-0 sm:border-r-0 sm:border-foreground/7"
                  >
                    <span
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: "rgba(59,130,246,0.07)" }}
                    />
                    <FileText className="w-3.5 h-3.5 text-blue-500 relative z-10 transition-colors group-hover:text-blue-600" />
                    <span className="text-xs text-foreground/45 uppercase tracking-widest relative z-10 group-hover:text-blue-600 transition-colors">
                      CV
                    </span>
                    <span
                      className="relative z-10"
                    >
                      <ArrowUpRight className="w-3 h-3 text-blue-500 group-hover:text-blue-600 transition-colors" />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Portrait photo */}
            <div
              className="relative flex-shrink-0 mx-auto lg:mx-0"
              style={{ width: "clamp(220px, 30vw, 360px)" }}
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-foreground/10 shadow-2xl"
                style={{ aspectRatio: "3/4" }}
              >
                <ImageWithFallback
                  src={PORTRAIT}
                  alt="Anugerah Gari"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <BioSection />
      <EducationSection />
      <AwardsSection />
      <ExperienceSection />
      <Contact />
      <CVModal open={isCVModalOpen} onClose={() => setCVModalOpen(false)} />
    </>
  );
}