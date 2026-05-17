import { MotionStagger, MotionItem } from "@/app/components/motion/Motions";
import { SectionHeading } from "@/app/components/ui/SectionHeader";
import { CV_DATA } from "@/data/CVData";
import { MapPin, Calendar, BookOpen } from "lucide-react";

const fg = (pct: number) =>
    `color-mix(in oklch, var(--foreground) ${pct}%, transparent)`;

export function EducationSection() {
  return (
    <section className="px-4 sm:px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          icon={BookOpen}
          label="Education"
          title="School & Certification"
        />

        <MotionStagger className="space-y-4 mt-10">
          {CV_DATA.education.map((edu) => (
            <MotionItem
              key={edu.degree}
              className="rounded-xl p-5 sm:p-6 border border-foreground/8 hover:border-blue-500/15 hover:-translate-y-1 transition-all group"
              style={{ background: "rgba(128,128,128,0.025)" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-3">
                <div className="min-w-0">
                  <h3 className=" mb-0.5 text-sm sm:text-base">{edu.degree}</h3>
                  <p className="text-sm">{edu.school}</p>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 sm:gap-1.5 flex-shrink-0">
                  <span className="text-xs flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 flex-shrink-0" /> {edu.period}
                  </span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded border border-blue-500/20 text-blue-500 whitespace-nowrap"
                    style={{ background: "rgba(59,130,246,0.06)" }}
                  >
                    {edu.highlight}
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{color:fg(48)}}>{edu.desc}</p>
              <div className="flex items-center gap-1 mt-3" style={{color:fg(48)}}>
                <MapPin className="w-3 h-3 flex-shrink-0" />
                <span className="text-xs">{edu.location}</span>
              </div>
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}